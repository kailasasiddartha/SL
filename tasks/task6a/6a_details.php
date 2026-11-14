<?php
session_start();

// Check whether user is logged in
if (!isset($_SESSION["username"])) {
    header("Location: 6a_login.php");
    exit();
}

// Session timeout in seconds
$timeout = 60;

// Check inactivity
if (isset($_SESSION["last_activity"])) {
    $inactive_time = time() - $_SESSION["last_activity"];

    if ($inactive_time > $timeout) {
        session_unset();
        session_destroy();

        echo "<h2>Warning!</h2>";
        echo "<p>Your session has expired because you were inactive for too long.</p>";
        echo "<a href='6a_login.php'>Click here to Login Again</a>";
        exit();
    }
}

// Update activity time
$_SESSION["last_activity"] = time();

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $city = $_POST["city"];
    $phoneno = $_POST["phoneno"];

    $message = "Details submitted successfully!";
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>User Details</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>User Details Form</h2>
        <p>Welcome, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b></p>
        <p class="warning">You have 60 seconds of inactivity before your session expires.</p>

        <?php
        if ($message != "") {
            echo "<p class='success'>$message</p>";
        }
        ?>

        <form method="post" action="">
            <label>Name:</label>
            <input type="text" name="name" required>

            <label>City:</label>
            <input type="text" name="city" required>

            <label>Phone Number:</label>
            <input type="text" name="phoneno" required>

            <input type="submit" value="Submit">
        </form>
        <br>
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>
