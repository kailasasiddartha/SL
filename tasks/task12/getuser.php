<?php
// Connect to MySQL database
$conn = mysqli_connect("localhost", "root", "", "ajax_db");

// Check database connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get selected user ID
$id = intval($_GET['id']);

// SQL query to retrieve user information
$sql = "SELECT * FROM users WHERE id = $id";
$result = mysqli_query($conn, $sql);

// Display user details in table
if ($result && mysqli_num_rows($result) > 0) {
    echo "<table>";
    echo "<tr>
            <th>Username</th>
            <th>Phone</th>
            <th>Email ID</th>
            <th>Place</th>
          </tr>";

    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['username']) . "</td>";
        echo "<td>" . htmlspecialchars($row['phone']) . "</td>";
        echo "<td>" . htmlspecialchars($row['email']) . "</td>";
        echo "<td>" . htmlspecialchars($row['place']) . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "No user found";
}

mysqli_close($conn);
?>
