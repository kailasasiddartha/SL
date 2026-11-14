<?php

$conn = new mysqli("localhost", "root", "", "userdatabasenew");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['update'])) {

    $id = $_POST['id'];
    $username = $_POST['username'];
    $email = $_POST['email'];

    $sql = "UPDATE users SET username=?, email=? WHERE id=?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $username, $email, $id);

    if ($stmt->execute()) {
        echo "User information updated successfully!";
    } else {
        echo "Error updating user.";
    }

    $stmt->close();
}

$conn->close();

?>

<form method="post">
    Enter User ID:
    <input type="number" name="id" required><br><br>

    Enter New Username:
    <input type="text" name="username" required><br><br>

    Enter New Email:
    <input type="email" name="email" required><br><br>

    <input type="submit" name="update" value="Update User">
</form>
