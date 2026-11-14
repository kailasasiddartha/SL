<?php
// Connect to database
$conn = new mysqli("localhost", "root", "", "userdatabasenew");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = "";

// Update user information
if (isset($_POST['update'])) {
    $id = $_POST['id'];
    $username = $_POST['username'];
    $email = $_POST['email'];

    $sql = "UPDATE users SET username=?, email=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $username, $email, $id);

    if ($stmt->execute()) {
        $message = "User information updated successfully!";
    } else {
        $message = "Error updating user: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Update User Information</title>
</head>
<body>
    <h2>Update User Information</h2>
    <?php if ($message != "") echo "<p><b>$message</b></p>"; ?>
    <form method="post">
        Enter User ID:
        <input type="number" name="id" required><br><br>

        Enter New Username:
        <input type="text" name="username" required><br><br>

        Enter New Email:
        <input type="email" name="email" required><br><br>

        <input type="submit" name="update" value="Update User">
    </form>
</body>
</html>
