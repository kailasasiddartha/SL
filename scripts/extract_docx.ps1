Add-Type -AssemblyName System.IO.Compression.FileSystem

New-Item -ItemType Directory -Force -Path 'temp_docs_text' | Out-Null

function Extract-Docx($docxPath, $outPath) {
    try {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
        $entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
        if ($entry) {
            $reader = New-Object System.IO.StreamReader($entry.Open())
            $xml = $reader.ReadToEnd()
            $reader.Dispose()
            $zip.Dispose()
            $text = [regex]::Replace($xml, '<w:p[^>]*>', "`r`n")
            $text = [regex]::Replace($text, '<[^>]+>', '')
            $text = [System.Net.WebUtility]::HtmlDecode($text)
            [System.IO.File]::WriteAllText($outPath, $text)
            Write-Host "Extracted: $outPath"
        } else {
            $zip.Dispose()
            Write-Host "No word/document.xml in $docxPath"
        }
    } catch {
        Write-Host "Error on $docxPath : $($_.Exception.Message)"
    }
}

Get-ChildItem -Recurse 'Task progrms' -Include *.docx | ForEach-Object {
    $folderName = $_.Directory.Name
    $safeName = $folderName + '_' + $_.BaseName + '.txt'
    $out = Join-Path 'temp_docs_text' $safeName
    Extract-Docx $_.FullName $out
}
