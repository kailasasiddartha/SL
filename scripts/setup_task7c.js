const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../tasks/task7c');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const login_php = `<!DOCTYPE html>
<html>
<head>
    <title>User Login</title>
</head>
<body>
    <h2>User Login</h2>
    <form method="POST" action="authenticate.php">
        Username: <input type="text" name="username" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        <input type="submit" name="login" value="Login">
    </form>
</body>
</html>
`;

const auth_php = `<?php
session_start();
$conn = new mysqli("localhost", "root", "", "userdatabasenew");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            header("Location: home.php");
            exit();
        } else {
            echo "Invalid username or password!";
        }
    } else {
        echo "Invalid username or password!";
    }
}
?>
`;

const home_php = `<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h2>Welcome to Home Page</h2>
    <?php
    echo "Welcome " . htmlspecialchars($_SESSION['username']);
    ?>
    <br><br>
    <a href="logout.php">Logout</a>
</body>
</html>
`;

const logout_php = `<?php
session_start();
session_unset();
session_destroy();
echo "You have logged out successfully!";
?>
<br><br>
<a href="login.php">Login Again</a>
`;

const db_schema = `CREATE DATABASE IF NOT EXISTS userdatabasenew;
USE userdatabasenew;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);
`;

fs.writeFileSync(path.join(dir, 'login.php'), login_php, 'utf8');
fs.writeFileSync(path.join(dir, 'authenticate.php'), auth_php, 'utf8');
fs.writeFileSync(path.join(dir, 'home.php'), home_php, 'utf8');
fs.writeFileSync(path.join(dir, 'logout.php'), logout_php, 'utf8');
fs.writeFileSync(path.join(dir, 'db_schema.sql'), db_schema, 'utf8');

const task7Dir = path.resolve(__dirname, '../tasks/task7');
fs.writeFileSync(path.join(task7Dir, 'login.php'), login_php, 'utf8');
fs.writeFileSync(path.join(task7Dir, 'authenticate.php'), auth_php, 'utf8');
fs.writeFileSync(path.join(task7Dir, 'home.php'), home_php, 'utf8');
fs.writeFileSync(path.join(task7Dir, 'logout.php'), logout_php, 'utf8');

const sourceDocx = path.resolve(__dirname, '../Task progrms/Task 7a/TASK 7 SL program for record.docx');
fs.copyFileSync(sourceDocx, path.join(dir, 'TASK 7 SL program for record.docx'));

const sourceImage = path.resolve(__dirname, '../temp_media/Task 7a_image3.png');
if (fs.existsSync(sourceImage)) {
    fs.copyFileSync(sourceImage, path.join(dir, 'output_screenshot.png'));
}

console.log('Created tasks/task7c successfully with all files:');
console.log(fs.readdirSync(dir));
