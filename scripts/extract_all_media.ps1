Add-Type -AssemblyName System.IO.Compression.FileSystem

$tempDir = Join-Path $PSScriptRoot "..\temp_media"
if (-not (Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir | Out-Null
}

$docs = Get-ChildItem -Path (Join-Path $PSScriptRoot "..\Task progrms") -Recurse -Filter "*.docx"

foreach ($doc in $docs) {
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($doc.FullName)
        $folderName = $doc.Directory.Name
        $entries = @($zip.Entries | Where-Object { $_.FullName -like "word/media/*" })
        foreach ($e in $entries) {
            $baseName = [System.IO.Path]::GetFileName($e.FullName)
            $outName = "$($folderName)_$($baseName)"
            $outPath = Join-Path $tempDir $outName
            [System.IO.Compression.ZipFileExtensions]::ExtractToFile($e, $outPath, $true)
            Write-Host "Extracted $outName ($($e.Length) bytes)"
        }
        $zip.Dispose()
    } catch {
        Write-Host "Error with $($doc.Name): $_"
    }
}
