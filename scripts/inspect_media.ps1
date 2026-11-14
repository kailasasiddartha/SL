Add-Type -AssemblyName System.IO.Compression.FileSystem

Get-ChildItem -Path "Task progrms" -Recurse -Filter "*.docx" | ForEach-Object {
    $docxPath = $_.FullName
    $docxName = $_.Name
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
        $media = @($zip.Entries | Where-Object { $_.FullName -like "word/media/*" })
        if ($media.Count -gt 0) {
            Write-Host "$docxName has $($media.Count) media entries:"
            foreach ($m in $media) {
                Write-Host "   $($m.FullName) ($($m.Length) bytes)"
            }
        } else {
            Write-Host "$docxName has NO media"
        }
        $zip.Dispose()
    } catch {
        Write-Host "Error reading $docxName : $_"
    }
}
