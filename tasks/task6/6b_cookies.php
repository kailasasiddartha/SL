<?php
// Experiment 6(b): PHP script to store, retrieve, and delete data cookies values.
$status = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $action = $_POST['action'] ?? '';
    $val = trim($_POST['username'] ?? '');

    if ($action === 'set') {
        if (!empty($val)) {
            setcookie("username", $val, time() + 3600, "/");
            $status = "Cookie 'username' stored successfully with value: <strong>" . htmlspecialchars($val) . "</strong>";
        } else {
            $status = "Please enter a value to store in the cookie.";
        }
    } elseif ($action === 'get') {
        if (isset($_COOKIE['username'])) {
            $status = "Retrieved Cookie value: <strong>" . htmlspecialchars($_COOKIE['username']) . "</strong>";
        } else {
            $status = "No cookie named 'username' found in browser storage.";
        }
    } elseif ($action === 'delete') {
        setcookie("username", "", time() - 3600, "/");
        $status = "Cookie 'username' deleted successfully.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 6(b) - Cookie Operations</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h2>Cookie Management in PHP</h2>
        <p class="subtitle">Demonstrates storing, retrieving, and deleting cookies.</p>

        <?php if ($status): ?>
            <div class="alert info"><?php echo $status; ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-group">
                <label for="username">Username / Preference Value:</label>
                <input type="text" id="username" name="username" placeholder="Enter value for cookie">
            </div>

            <div class="btn-group">
                <button type="submit" name="action" value="set" class="btn">Set Cookie</button>
                <button type="submit" name="action" value="get" class="btn btn-secondary">Get Cookie</button>
                <button type="submit" name="action" value="delete" class="btn btn-danger">Delete Cookie</button>
            </div>
        </form>
    </div>
</body>
</html>