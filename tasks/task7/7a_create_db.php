<?php
// Step 1: Connect to MySQL
$conn = new mysqli("localhost", "root", "");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "MySQL connection successful!<br><br>";

// Step 2: Create database
$sql = "CREATE DATABASE IF NOT EXISTS userdatabasenew";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully!<br><br>";
} else {
    die("Database creation failed: " . $conn->error);
}

// Step 3: Select database
$conn->select_db("userdatabasenew");

// Step 4: Create table
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Table created successfully!";
} else {
    echo "Table creation failed: " . $conn->error;
}

// Step 5: Close connection
$conn->close();
?>
