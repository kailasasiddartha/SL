<?php
// Experiment 7(b): Design registration page and insert data into created database table
$conn = new mysqli("localhost", "root", "", "userdatabasenew");

$status = "";

if ($conn->connect_error) {
    $status = "Database Connection failed: " . $conn->connect_error;
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['register'])) {
    $username = trim($_POST['username'] ?? '');
    $password = password_hash($_POST['password'] ?? '', PASSWORD_DEFAULT);
    $email = trim($_POST['email'] ?? '');

    $sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $password, $email);

    if ($stmt->execute()) {
        $status = "Registration successful for user: " . htmlspecialchars($username);
    } else {
        $status = "Registration failed: " . $stmt->error;
    }
    $stmt->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 7(b) - User Registration</title>
    <style>
        body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 30px; }
        .box { max-width: 440px; margin: auto; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 24px; }
        label { display: block; font-weight: 600; margin: 10px 0 4px; font-size: 0.85rem; }
        input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }
        button { background: #0f172a; color: white; border: none; padding: 10px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; margin-top: 14px; }
        .alert { padding: 10px; margin-bottom: 12px; border-radius: 4px; font-size: 0.85rem; background: #f1f5f9; border: 1px solid #cbd5e1; }
    </style>
</head>
<body>
    <div class="box">
        <h2>User Registration</h2>
        <?php if ($status): ?><div class="alert"><?php echo $status; ?></div><?php endif; ?>
        <form method="POST">
            <label>Username:</label>
            <input type="text" name="username" required>
            <label>Password:</label>
            <input type="password" name="password" required>
            <label>Email ID:</label>
            <input type="email" name="email" required>
            <button type="submit" name="register">Register User</button>
        </form>
    </div>
</body>
</html>