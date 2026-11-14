<?php
// List of sample names
$names = ["Alice", "Bob", "Charlie", "David",
          "Emma", "Ethan", "Sophia", "Samuel",
          "Olivia", "Liam"];

// Check whether query is received
if (isset($_GET['query'])) {
    $query = trim($_GET['query']);
    $suggestions = [];

    if ($query != "") {
        foreach ($names as $name) {
            if (stripos($name, $query) !== false) {
                $suggestions[] = $name;
            }
        }
    }

    if (empty($suggestions)) {
        echo "No suggestions";
    } else {
        echo implode(", ", $suggestions);
    }
}
?>
