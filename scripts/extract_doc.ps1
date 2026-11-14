try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open('C:\Users\kaila\OneDrive\Documents\Desktop\SL web\Task progrms\Task 1a\Task 1A material.doc')
    $text = $doc.Content.Text
    $doc.Close()
    $word.Quit()
    [System.IO.File]::WriteAllText('temp_docs_text/Task 1a_Task 1A material.txt', $text)
    Write-Host "Word COM extracted successfully! Length: $($text.Length)"
} catch {
    Write-Host "Word COM failed: $($_.Exception.Message)"
    $bytes = [System.IO.File]::ReadAllBytes('Task progrms\Task 1a\Task 1A material.doc')
    $str = [System.Text.Encoding]::ASCII.GetString($bytes)
    $matches = [regex]::Matches($str, '[\x20-\x7E\r\n]{4,}')
    $clean = ($matches | ForEach-Object { $_.Value }) -join "`r`n"
    [System.IO.File]::WriteAllText('temp_docs_text/Task 1a_Task 1A material.txt', $clean)
    Write-Host "Fallback extracted! Length: $($clean.Length)"
}
