<?php

// List of sample names
$names = ["Alice", "Bob", "Charlie", "David",
          "Emma", "Ethan", "Sophia", "Samuel",
          "Olivia", "Liam"];

// Check whether query is received
if (isset($_GET['query'])) {

    // Get the entered character
    $query = trim($_GET['query']);

    // Create empty suggestions list
    $suggestions = [];

    // Search for matching names
    if ($query != "") {

        foreach ($names as $name) {

            if (stripos($name, $query) !== false) {

                $suggestions[] = $name;

            }

        }

    }

    // Display matching names
    if (empty($suggestions)) {

        echo "No suggestions";

    } else {

        echo implode(", ", $suggestions);

    }

}

?>
