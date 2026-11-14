<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h2>Welcome to Home Page</h2>
    <?php
    echo "Welcome " . htmlspecialchars($_SESSION['username']);
    ?>
    <br><br>
    <a href="logout.php">Logout</a>
</body>
</html>
