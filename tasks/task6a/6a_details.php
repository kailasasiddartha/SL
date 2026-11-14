<?php
// Experiment 6(a): Second form - Accept user details with 60-second inactivity session timeout
session_start();

$timeout = 60; // 60 seconds session timeout limit

if (!isset($_SESSION['user'])) {
    header("Location: 6a_login.php?warning=Please login first.");
    exit();
}

// Check inactivity
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $timeout)) {
    session_unset();
    session_destroy();
    header("Location: 6a_login.php?warning=Session expired due to inactivity. Please log in again.");
    exit();
}

// Update last activity timestamp on any user action
$_SESSION['last_activity'] = time();

$message = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $city = htmlspecialchars($_POST['city'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $message = "User details successfully recorded: Name: $name, City: $city, Phone: $phone";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 6(a) - User Details Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h2>User Details Form</h2>
        <p class="subtitle">Logged in as: <strong><?php echo htmlspecialchars($_SESSION['user']); ?></strong> (Session active - 60s timeout)</p>

        <?php if ($message): ?>
            <div class="alert success"><?php echo $message; ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter name" required>
            </div>
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city" name="city" placeholder="Enter city" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" placeholder="Enter phone number" required>
            </div>
            <button type="submit" class="btn">Submit Details</button>
            <a href="6a_login.php" class="btn btn-secondary">Logout</a>
        </form>
    </div>
</body>
</html>