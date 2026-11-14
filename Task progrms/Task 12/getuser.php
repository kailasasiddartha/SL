<?php

$conn = mysqli_connect("localhost", "root", "", "ajax_db");

if (!$conn) {
    die("Connection failed");
}

$id = intval($_GET['id']);

$sql = "SELECT * FROM users WHERE id = $id";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {

    echo "<table>";

    echo "<tr>
            <th>Username</th>
            <th>Phone</th>
            <th>Email ID</th>
            <th>Place</th>
          </tr>";

    while ($row = mysqli_fetch_assoc($result)) {

        echo "<tr>";

        echo "<td>" .($row['username']) . "</td>";

        echo "<td>" .($row['phone']) . "</td>";

        echo "<td>" .($row['email']) . "</td>";

        echo "<td>" .($row['place']) . "</td>";

        echo "</tr>";

    }

    echo "</table>";

} else {

    echo "No user found";

}

mysqli_close($conn);

?>
