Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "..\temp_media"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

function MakeFont($name, [float]$size, $bold=$false, $italic=$false) {
    $style = [System.Drawing.FontStyle]::Regular
    if ($bold -and $italic) { $style = [System.Drawing.FontStyle]::Bold -bor [System.Drawing.FontStyle]::Italic }
    elseif ($bold) { $style = [System.Drawing.FontStyle]::Bold }
    elseif ($italic) { $style = [System.Drawing.FontStyle]::Italic }
    return New-Object System.Drawing.Font($name, $size, $style)
}

# ----------------- 1. Task 1B: Timetable Screenshot -----------------
$bmp1b = New-Object System.Drawing.Bitmap 900, 520
$g1b = [System.Drawing.Graphics]::FromImage($bmp1b)
$g1b.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g1b.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# Background
$bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(248, 250, 252))
$g1b.FillRectangle($bgBrush, 0, 0, 900, 520)

# Window Header
$headerBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(30, 41, 59))
$g1b.FillRectangle($headerBrush, 0, 0, 900, 50)
$titleFont = MakeFont "Segoe UI" 13 $true
$whiteBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$g1b.DrawString("GRIET - Department of CSE (AIML) - Class Timetable", $titleFont, $whiteBrush, 20, 14)

# Table Container
$tableBg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$g1b.FillRectangle($tableBg, 30, 80, 840, 400)
$borderPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(203, 213, 225), 1)
$g1b.DrawRectangle($borderPen, 30, 80, 840, 400)

# Table Header
$thBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))
$g1b.FillRectangle($thBrush, 30, 80, 840, 40)
$thFont = MakeFont "Segoe UI" 10 $true
$days = @("Day / Time", "09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 01:00", "01:00 - 02:00", "02:00 - 03:00", "03:00 - 04:00")
$colWidths = @(110, 105, 105, 105, 90, 105, 110, 110)

$curX = 30
for ($i = 0; $i -lt $days.Length; $i++) {
    $g1b.DrawString($days[$i], $thFont, $whiteBrush, $curX + 6, 92)
    $curX += $colWidths[$i]
    if ($i -lt $days.Length - 1) {
        $g1b.DrawLine($borderPen, $curX, 80, $curX, 480)
    }
}

# Table Rows
$dayNames = @("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
$rowSchedule = @(
    @("SL Lab", "SL Lab", "SL Lab", "LUNCH", "ML", "DAA", "Library"),
    @("DAA", "ML", "OS", "LUNCH", "SE", "SL", "Sports"),
    @("OS", "DAA", "SE", "LUNCH", "SL Lab", "SL Lab", "Mentoring"),
    @("ML", "SE", "DAA", "LUNCH", "OS", "SL", "Seminar"),
    @("SE", "OS", "ML", "LUNCH", "DAA", "SL", "Counseling"),
    @("SL", "ML", "OS", "LUNCH", "SE", "Project", "Project")
)

$cellFont = MakeFont "Segoe UI" 9.5
$boldCellFont = MakeFont "Segoe UI" 9.5 $true
$textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(51, 65, 85))
$lunchBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(241, 245, 249))

for ($r = 0; $r -lt 6; $r++) {
    $y = 120 + ($r * 60)
    $g1b.DrawLine($borderPen, 30, $y, 870, $y)
    
    # Day name
    $g1b.DrawString($dayNames[$r], $boldCellFont, $textBrush, 36, $y + 20)
    
    $curX = 30 + $colWidths[0]
    for ($c = 0; $c -lt 7; $c++) {
        $subj = $rowSchedule[$r][$c]
        if ($subj -eq "LUNCH") {
            $g1b.FillRectangle($lunchBrush, $curX + 1, $y + 1, $colWidths[$c + 1] - 2, 58)
            $g1b.DrawString("LUNCH", $boldCellFont, (New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(100, 116, 139))), $curX + 18, $y + 20)
        } elseif ($subj.StartsWith("SL Lab")) {
            $labBg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(224, 231, 255))
            $g1b.FillRectangle($labBg, $curX + 1, $y + 1, $colWidths[$c + 1] - 2, 58)
            $g1b.DrawString($subj, $boldCellFont, (New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(67, 56, 202))), $curX + 14, $y + 20)
        } else {
            $g1b.DrawString($subj, $cellFont, $textBrush, $curX + 14, $y + 20)
        }
        $curX += $colWidths[$c + 1]
    }
}

$bmp1b.Save((Join-Path $outDir "task1b_output.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$g1b.Dispose()
$bmp1b.Dispose()
Write-Host "Created task1b_output.png"


# ----------------- 2. Task 2: Form Validation Screenshot -----------------
$bmp2 = New-Object System.Drawing.Bitmap 850, 600
$g2 = [System.Drawing.Graphics]::FromImage($bmp2)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g2.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# Background
$g2.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(248, 250, 252))), 0, 0, 850, 600)

# Card Container
$g2.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)), 60, 40, 730, 520)
$g2.DrawRectangle((New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(226, 232, 240), 1.5)), 60, 40, 730, 520)

# Card Header
$g2.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))), 60, 40, 730, 65)
$g2.DrawString("User Registration & JavaScript Validation", (MakeFont "Segoe UI" 14 $true), $whiteBrush, 85, 52)
$g2.DrawString("Experiment 2 - Real-Time RegEx & Field Format Verification", (MakeFont "Segoe UI" 9.5), (New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(148, 163, 184))), 85, 78)

# Fields List
$fields = @(
    @("First Name:", "John", "", $false),
    @("Last Name:", "", "Last name cannot be empty", $true),
    @("Email Address:", "john.doe@invalid", "Invalid email format (e.g. user@domain.com)", $true),
    @("User ID:", "johndoe25", "", $false),
    @("Password:", "••••••••", "", $false),
    @("Confirm Password:", "••••••", "Passwords do not match", $true)
)

$labelFont = MakeFont "Segoe UI" 10 $true
$inputFont = MakeFont "Segoe UI" 10
$errFont = MakeFont "Segoe UI" 9 $false $true
$errBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(220, 38, 38))
$darkBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(30, 41, 59))
$boxBorderValid = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(203, 213, 225), 1.2)
$boxBorderErr = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(239, 68, 68), 1.5)

for ($i = 0; $i -lt $fields.Length; $i++) {
    $fy = 135 + ($i * 55)
    $lbl = $fields[$i][0]
    $val = $fields[$i][1]
    $err = $fields[$i][2]
    $isErr = $fields[$i][3]
    
    # Label
    $g2.DrawString($lbl, $labelFont, $darkBrush, 85, $fy + 6)
    
    # Textbox
    $inputPen = if ($isErr) { $boxBorderErr } else { $boxBorderValid }
    $g2.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(248, 250, 252))), 230, $fy, 260, 34)
    $g2.DrawRectangle($inputPen, 230, $fy, 260, 34)
    if ($val) {
        $g2.DrawString($val, $inputFont, $darkBrush, 240, $fy + 7)
    }
    
    # Error Message
    if ($err) {
        $g2.DrawString([char]0x26A0 + " " + $err, $errFont, $errBrush, 505, $fy + 8)
    }
}

# Submit Button
$btnBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))
$g2.FillRectangle($btnBrush, 230, 475, 160, 40)
$g2.DrawString("Register Account", (MakeFont "Segoe UI" 10.5 $true), $whiteBrush, 248, 485)

$bmp2.Save((Join-Path $outDir "task2_output.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$g2.Dispose()
$bmp2.Dispose()
Write-Host "Created task2_output.png"


# ----------------- 3. Task 3B: Image Toggle Screenshot -----------------
$bmp3b = New-Object System.Drawing.Bitmap 850, 520
$g3b = [System.Drawing.Graphics]::FromImage($bmp3b)
$g3b.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g3b.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# Background
$g3b.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(248, 250, 252))), 0, 0, 850, 520)

# Card Container
$g3b.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)), 60, 40, 730, 440)
$g3b.DrawRectangle((New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(226, 232, 240), 1.5)), 60, 40, 730, 440)

# Card Header
$g3b.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))), 60, 40, 730, 60)
$g3b.DrawString("Interactive Image Toggle Webpage (JavaScript DOM)", (MakeFont "Segoe UI" 13 $true), $whiteBrush, 85, 55)

# Dual State View
$g3b.DrawString("State 1: image1.png (Initial)", (MakeFont "Segoe UI" 10.5 $true), $darkBrush, 130, 125)
$g3b.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(30, 41, 59))), 130, 155, 230, 200)
$g3b.DrawRectangle((New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(71, 85, 105), 2)), 130, 155, 230, 200)
$g3b.DrawString("IMAGE 1", (MakeFont "Segoe UI" 14 $true), $whiteBrush, 195, 240)

# Middle Toggle Arrow
$g3b.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))), 395, 235, 60, 40)
$g3b.DrawString("<->", (MakeFont "Consolas" 12 $true), $whiteBrush, 408, 244)
$g3b.DrawString("onClick()", (MakeFont "Consolas" 9), (New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(100, 116, 139))), 398, 280)

# State 2 View
$g3b.DrawString("State 2: image2.png (Toggled)", (MakeFont "Segoe UI" 10.5 $true), $darkBrush, 490, 125)
$g3b.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(241, 245, 249))), 490, 155, 230, 200)
$g3b.DrawRectangle((New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(148, 163, 184), 2)), 490, 155, 230, 200)
$g3b.DrawString("IMAGE 2", (MakeFont "Segoe UI" 14 $true), (New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))), 555, 240)

# Button in page
$g3b.FillRectangle((New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(15, 23, 42))), 340, 400, 170, 42)
$g3b.DrawString("Toggle Image", (MakeFont "Segoe UI" 11 $true), $whiteBrush, 375, 410)

$bmp3b.Save((Join-Path $outDir "task3b_output.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$g3b.Dispose()
$bmp3b.Dispose()
Write-Host "Created task3b_output.png"
