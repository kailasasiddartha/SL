<?php

$conn = new mysqli("localhost", "root", "", "userdatabasenew");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = "";

if (isset($_POST['delete'])) {
    $id = $_POST['id'];

    $sql = "DELETE FROM users WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            $message = "User deleted successfully!";
        } else {
            $message = "User ID not found.";
        }
    } else {
        $message = "Error deleting user: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Delete User Information</title>
</head>
<body>
    <h2>Delete User Information</h2>
    <?php if ($message != "") echo "<p><b>$message</b></p>"; ?>
    <form method="post">
        Enter User ID:
        <input type="number" name="id" required><br><br>

        <input type="submit" name="delete" value="Delete User">
    </form>
</body>
</html>
