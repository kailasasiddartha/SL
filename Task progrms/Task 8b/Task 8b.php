<?php

// Connect to database
$conn = new mysqli("localhost", "root", "", "userdatabasenew");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Delete user information
if (isset($_POST['delete'])) {

    $id = $_POST['id'];

    $sql = "DELETE FROM users WHERE id=?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {

        if ($stmt->affected_rows > 0) {
            echo "User deleted successfully!";
        } else {
            echo "User ID not found.";
        }

    } else {
        echo "Error deleting user.";
    }

    $stmt->close();
}

$conn->close();

?>

<form method="post">

    Enter User ID:
    <input type="number" name="id" required><br><br>

    <input type="submit" name="delete" value="Delete User">

</form>
