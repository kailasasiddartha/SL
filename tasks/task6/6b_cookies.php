<?php
// Set a cookie
if (isset($_POST['setCookie'])) {
    setcookie("user", $_POST['username'], time() + (86400 * 30), "/"); // Cookie expires in 30 days
    echo "Cookie set successfully!<br>";
}

// Retrieve a cookie
if (isset($_POST['getCookie'])) {
    if (isset($_COOKIE['user'])) {
        echo "Stored Cookie Value: " . htmlspecialchars($_COOKIE['user']) . "<br>";
    } else {
        echo "Cookie not available or deleted!<br>";
    }
}

// Delete a cookie
if (isset($_POST['deleteCookie'])) {
    setcookie("user", "", time() - 3600, "/"); // Expire the cookie
    echo "Cookie deleted successfully!<br>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cookie Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>PHP Cookie Management</h2>
        <form method="post">
            <label>Enter Username:</label>
            <input type="text" name="username" required>
            <button type="submit" name="setCookie">Set Cookie</button>
        </form>
        <form method="post" style="margin-top: 10px;">
            <button type="submit" name="getCookie">Get Cookie</button>
        </form>
        <form method="post" style="margin-top: 10px;">
            <button type="submit" name="deleteCookie">Delete Cookie</button>
        </form>
    </div>
</body>
</html>
