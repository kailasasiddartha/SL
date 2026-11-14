<?php
// Experiment 6(a): Login form with username & password
session_start();

$error = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Credentials check
    if ($username === "admin" && $password === "password123") {
        $_SESSION['user'] = $username;
        $_SESSION['last_activity'] = time(); // Record initial timestamp
        header("Location: 6a_details.php");
        exit();
    } else {
        $error = "Invalid username or password. (Hint: admin / password123)";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 6(a) - Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h2>User Login Portal</h2>
        <p class="subtitle">Enter credentials to proceed to the User Details Form.</p>

        <?php if (isset($_GET['warning'])): ?>
            <div class="alert warning"><?php echo htmlspecialchars($_GET['warning']); ?></div>
        <?php endif; ?>

        <?php if ($error): ?>
            <div class="alert error"><?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value="admin" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="password123" required>
            </div>
            <button type="submit" class="btn">Login</button>
        </form>
    </div>
</body>
</html>