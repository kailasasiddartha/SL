<?php
session_start();
session_unset();
session_destroy();
echo "You have logged out successfully!";
?>
<br><br>
<a href="login.php">Login Again</a>
