const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("=== Applying exact codes from Word documents ===");

const rootDir = path.resolve(__dirname, '..');
const tasksDir = path.join(rootDir, 'tasks');

function writeFile(relPath, content) {
    const fullPath = path.join(rootDir, relPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
    console.log(`Updated: ${relPath}`);
}

// -------------------------------------------------------------
// TASK 1A: Personal Portfolio (Alex Developer)
// -------------------------------------------------------------
const task1a_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Alex Developer</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section id="about" class="container">
        <h2>About Me</h2>
        <p>Hello! I am a passionate web developer learning HTML, CSS, and JavaScript. I love building clean and functional websites.</p>
    </section>

    <section id="projects" class="container">
        <h2>My Projects</h2>
        <div class="project-card">
            <h3>Project One</h3>
            <p>A simple calculator built with JavaScript.</p>
        </div>
        <div class="project-card">
            <h3>Project Two</h3>
            <p>A responsive landing page using CSS Flexbox.</p>
        </div>
    </section>

    <section id="contact" class="container">
        <h2>Contact Me</h2>
        <!-- HTML Controls are used here -->
        <form action="#" method="POST" class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message here..." required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2026 Alex Developer. All rights reserved.</p>
    </footer>
</body>
</html>`;

const task1a_css = `/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
}

/* Header and Navigation */
header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
}

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}

/* Main Content Containers */
.container {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h2 {
    border-bottom: 2px solid #3498db;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

/* Project Cards */
.project-card {
    background: #ecf0f1;
    padding: 15px;
    margin-bottom: 10px;
    border-left: 4px solid #3498db;
}

/* Form Controls Styling */
.contact-form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

label {
    font-weight: bold;
}

input, textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    margin-top: 15px;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #2980b9;
}

/* Footer */
footer {
    text-align: center;
    padding: 15px;
    background-color: #2c3e50;
    color: white;
    margin-top: 30px;
}`;

writeFile('tasks/task1a/index.html', task1a_html);
writeFile('tasks/task1a/style.css', task1a_css);
writeFile('tasks/task1/1a_portfolio.html', task1a_html);
writeFile('tasks/task1/1a_style.css', task1a_css);

// -------------------------------------------------------------
// TASK 1B: Timetable
// -------------------------------------------------------------
const task1b_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Time Table</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Class Time Table</h1>
    <h3>B.Tech - AI &amp; ML</h3>
    <table>
        <caption>Weekly Class Schedule</caption>
        <tr>
            <th>Day</th>
            <th>9:00-10:00</th>
            <th>10:00-11:00</th>
            <th>11:00-12:00</th>
            <th>12:00-1:00</th>
            <th>1:00-2:00</th>
            <th>2:00-3:00</th>
            <th>3:00-4:00</th>
        </tr>
        <tr>
            <th>Monday</th>
            <td>Mathematics</td>
            <td>Python</td>
            <td>DBMS</td>
            <td>English</td>
            <td class="break" rowspan="5">Lunch Break</td>
            <td>AI</td>
            <td>Library</td>
        </tr>
        <tr>
            <th>Tuesday</th>
            <td>Python</td>
            <td>Mathematics</td>
            <td>AI</td>
            <td>DBMS</td>
            <td colspan="2">Python Lab</td>
        </tr>
        <tr>
            <th>Wednesday</th>
            <td>DBMS</td>
            <td>English</td>
            <td>Mathematics</td>
            <td>Python</td>
            <td>AI</td>
            <td>Sports</td>
        </tr>
        <tr>
            <th>Thursday</th>
            <td>AI</td>
            <td>DBMS</td>
            <td>Python</td>
            <td>Mathematics</td>
            <td colspan="2">DBMS Lab</td>
        </tr>
        <tr>
            <th>Friday</th>
            <td>English</td>
            <td>AI</td>
            <td>DBMS</td>
            <td>Python</td>
            <td>Mathematics</td>
            <td>Seminar</td>
        </tr>
    </table>
</body>
</html>`;

const task1b_css = `body {
    font-family: Arial, sans-serif;
    background-color: #f4f7fb;
    text-align: center;
    margin: 20px;
}
h1 {
    color: #1f4e79;
}
h3 {
    color: #333333;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
    background-color: white;
}
caption {
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
}
th, td {
    border: 1px solid #333333;
    padding: 12px 8px;
    text-align: center;
}
th {
    background-color: #4CAF50;
    color: white;
}
tr:nth-child(even) {
    background-color: #eef5ee;
}
.break {
    background-color: #ffe699;
    font-weight: bold;
    writing-mode: vertical-rl;
}`;

writeFile('tasks/task1b/index.html', task1b_html);
writeFile('tasks/task1b/style.css', task1b_css);
writeFile('tasks/task1/1b_timetable.html', task1b_html);
writeFile('tasks/task1/1b_style.css', task1b_css);
writeFile('tasks/task1/index.html', task1a_html);

// -------------------------------------------------------------
// TASK 2: Registration Form Validation
// -------------------------------------------------------------
const task2_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form Validation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Registration Form</h2>

    <form id="registrationForm" novalidate>
        <div class="form-row">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName">
            <span class="error" id="firstNameError"></span>
        </div>

        <div class="form-row">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName">
            <span class="error" id="lastNameError"></span>
        </div>

        <div class="form-row">
            <label for="email">Email:</label>
            <input type="text" id="email">
            <span class="error" id="emailError"></span>
        </div>

        <div class="form-row">
            <label for="userId">User ID:</label>
            <input type="text" id="userId">
            <span class="error" id="userIdError"></span>
        </div>

        <div class="form-row">
            <label for="password">Password:</label>
            <input type="password" id="password">
            <span class="error" id="passwordError"></span>
        </div>

        <div class="form-row">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword">
            <span class="error" id="confirmPasswordError"></span>
        </div>

        <button type="submit">Submit</button>
        <p id="success"></p>
    </form>

    <script src="validate.js"></script>
</body>
</html>`;

const task2_css = `body {
    font-family: Arial, sans-serif;
    margin: 30px;
}
form {
    max-width: 850px;
}
.form-row {
    margin-bottom: 15px;
}
label {
    display: inline-block;
    width: 150px;
}
input {
    padding: 6px;
    width: 220px;
}
.error {
    color: red;
    margin-left: 8px;
    font-size: 13px;
}
#success {
    color: green;
    font-weight: bold;
}`;

const task2_js = `const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error and success messages.
    document.querySelectorAll(".error").forEach(function (element) {
        element.textContent = "";
    });
    document.getElementById("success").textContent = "";

    // Read and trim the text fields.
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    // Check mandatory fields and specific format rules.
    if (firstName === "") {
        showError("firstNameError", "First Name is required.");
        isValid = false;
    }
    if (lastName === "") {
        showError("lastNameError", "Last Name is required.");
        isValid = false;
    }
    if (email === "") {
        showError("emailError", "Email is required.");
        isValid = false;
    } else {
        // Basic email format check.
        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailPattern.test(email)) {
            showError("emailError", "Enter a valid email address.");
            isValid = false;
        }
    }
    if (userId === "") {
        showError("userIdError", "User ID is required.");
        isValid = false;
    }
    if (password === "") {
        showError("passwordError", "Password is required.");
        isValid = false;
    }
    if (confirmPassword === "") {
        showError("confirmPasswordError", "Please confirm your password.");
        isValid = false;
    } else if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success").textContent =
            "All fields are valid. Form submitted successfully!";
    }
});

// Put the message in the span next to the matching textbox.
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}`;

writeFile('tasks/task2/index.html', task2_html);
writeFile('tasks/task2/style.css', task2_css);
writeFile('tasks/task2/validate.js', task2_js);

// -------------------------------------------------------------
// TASK 3A: Multiplication Table
// -------------------------------------------------------------
const task3a_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiplication Table</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        table { border-collapse: collapse; margin: 20px auto; }
        th, td { border: 1px solid #777; padding: 10px; }
        th { background-color: #2563eb; color: white; }
    </style>
</head>
<body>
    <h2>Multiplication Table Generator</h2>
    <label>Rows: <input type="number" id="rows" min="1" value="4"></label>
    <label>Columns: <input type="number" id="cols" min="1" value="5"></label>
    <button onclick="generateTable()">Generate Table</button>
    <div id="output"></div>
    <script>
        function generateTable() {
            const rows = parseInt(document.getElementById("rows").value);
            const cols = parseInt(document.getElementById("cols").value);
            const output = document.getElementById("output");

            if (!Number.isInteger(rows) || !Number.isInteger(cols) ||
                rows < 1 || cols < 1) {
                output.textContent = "Please enter positive row and column values.";
                return;
            }

            let html = "<table><tr>";
            for (let j = 1; j <= cols; j++) html += \`<th>\${j}</th>\`;
            html += "</tr>";
            for (let i = 1; i <= rows; i++) {
                html += "<tr>";
                for (let j = 1; j <= cols; j++) {
                    html += \`<td>\${i} × \${j} = \${i * j}</td>\`;
                }
                html += "</tr>";
            }
            html += "</table>";
            output.innerHTML = html;
        }
        generateTable();
    </script>
</body>
</html>`;

writeFile('tasks/task3a/index.html', task3a_html);
writeFile('tasks/task3/3a_multiplication.html', task3a_html);

// -------------------------------------------------------------
// TASK 3B: Image Toggle
// -------------------------------------------------------------
const task3b_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Toggle Webpage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: #f4f4f9;
        }
        .container {
            background: white;
            padding: 30px;
            display: inline-block;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        img {
            width: 320px;
            height: 220px;
            object-fit: cover;
            border-radius: 6px;
            border: 2px solid #ddd;
            margin-bottom: 20px;
        }
        button {
            padding: 10px 20px;
            background-color: #008CBA;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #007bb5;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Image Toggle Application</h2>
        <!-- Initial Image Display -->
        <img id="toggleImg" src="image1.png" alt="Image 1">
        <br>
        <button onclick="toggleImage()">Toggle Image</button>
    </div>

    <script>
        function toggleImage() {
            let imgElement = document.getElementById("toggleImg");
            
            // Check current source and toggle to alternate image
            if (imgElement.src.includes("image1")) {
                imgElement.src = "image2.png";
                imgElement.alt = "Image 2";
            } else {
                imgElement.src = "image1.png";
                imgElement.alt = "Image 1";
            }
        }
    </script>

</body>
</html>`;

writeFile('tasks/task3b/index.html', task3b_html);
writeFile('tasks/task3/3b_imagetoggle.html', task3b_html);
writeFile('tasks/task3/index.html', task3a_html);

// -------------------------------------------------------------
// TASK 4: To-Do List
// -------------------------------------------------------------
const task4_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>To-Do List</h2>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
    </div>
    <table>
        <thead>
            <tr>
                <th>Task</th>
            </tr>
        </thead>
        <tbody id="taskTable"></tbody>
    </table>

    <script src="todo.js"></script>
</body>
</html>`;

const task4_css = `body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
}
.container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 320px;
    text-align: center;
    margin-bottom: 20px;
}
input {
    width: 75%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
button {
    padding: 10px 15px;
    background: #28a745;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
ul {
    list-style: none;
    padding: 0;
}
li {
    background: #eee;
    margin: 5px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
}
.completed {
    text-decoration: line-through;
    color: gray;
}
.delete {
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
}
table {
    width: 320px;
    border-collapse: collapse;
    margin-top: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
th, td {
    border: 1px solid #ccc;
    padding: 8px 12px;
    text-align: left;
}`;

const task4_js = `function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText == "") return;
    
    let li = document.createElement("li");
    li.innerHTML = \`\${taskText} <button class="delete" onclick="removeTask(this, '\${taskText}')">X</button>\`;
    li.onclick = function() {
        li.classList.toggle("completed");
    };
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
    
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("data-task", taskText);
    tableRow.innerHTML = \`<td>\${taskText}</td>\`;
    document.getElementById("taskTable").appendChild(tableRow);
}

function removeTask(button, taskText) {
    let taskItem = button.parentElement;
    let tableRows = document.querySelectorAll("#taskTable tr");
    tableRows.forEach(row => {
        if (row.getAttribute("data-task") === taskText) {
            row.remove();
        }
    });
    taskItem.remove();
}`;

writeFile('tasks/task4/index.html', task4_html);
writeFile('tasks/task4/style.css', task4_css);
writeFile('tasks/task4/todo.js', task4_js);

// -------------------------------------------------------------
// TASK 5: Item Billing System
// -------------------------------------------------------------
const task5_php = `<?php
$billOutput = "";
if (isset($_POST['submit'])) {
    $code = $_POST['code'];
    $name = $_POST['name'];
    $units = $_POST['units'];
    $rate = $_POST['rate'];

    $codes = explode(",", $code);
    $names = explode(",", $name);
    $unitssold = explode(",", $units);
    $rates = explode(",", $rate);

    $billOutput .= "<h2>Bill Details</h2>";
    $billOutput .= "<table>";
    $billOutput .= "<tr>";
    $billOutput .= "<th>Item Code</th>";
    $billOutput .= "<th>Item Name</th>";
    $billOutput .= "<th>Units Sold</th>";
    $billOutput .= "<th>Rate</th>";
    $billOutput .= "<th>Amount</th>";
    $billOutput .= "</tr>";

    $grandTotal = 0;
    for ($i = 0; $i < 5; $i++) {
        $c = isset($codes[$i]) ? trim($codes[$i]) : "";
        $n = isset($names[$i]) ? trim($names[$i]) : "";
        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;
        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;
        $amount = $u * $r;
        $grandTotal += $amount;

        $billOutput .= "<tr>";
        $billOutput .= "<td>" . htmlspecialchars($c) . "</td>";
        $billOutput .= "<td>" . htmlspecialchars($n) . "</td>";
        $billOutput .= "<td>" . $u . "</td>";
        $billOutput .= "<td>" . $r . "</td>";
        $billOutput .= "<td>" . $amount . "</td>";
        $billOutput .= "</tr>";
    }

    $billOutput .= "<tr>";
    $billOutput .= "<th colspan='4'>Grand Total</th>";
    $billOutput .= "<th>" . $grandTotal . "</th>";
    $billOutput .= "</tr>";
    $billOutput .= "</table>";
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Item Billing System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Item Billing System</h2>
    <form method="post" action="">
        <label>Item Codes:</label><br>
        <input type="text" name="code" placeholder="101,102,103,104,105" required>
        <br>
        <label>Item Names:</label><br>
        <input type="text" name="name" placeholder="pen,book,pencil,file,notebook" required>
        <br>
        <label>Units Sold:</label><br>
        <input type="text" name="units" placeholder="10,5,20,8,12" required>
        <br>
        <label>Rates:</label><br>
        <input type="text" name="rate" placeholder="10,50,5,30,40" required>
        <br>
        <input type="submit" name="submit" value="Generate Bill">
    </form>

    <?php echo $billOutput; ?>
</body>
</html>`;

const task5_css = `body {
    font-family: Arial, sans-serif;
    margin: 40px;
}
table {
    border-collapse: collapse;
    width: 80%;
    margin-top: 20px;
}
th, td {
    border: 1px solid black;
    padding: 10px;
    text-align: center;
}
th {
    background-color: lightgray;
}
input[type="text"] {
    width: 400px;
    padding: 8px;
    margin: 8px 0;
}
input[type="submit"] {
    padding: 10px 25px;
    margin: 10px 0;
    cursor: pointer;
}`;

writeFile('tasks/task5/bill.php', task5_php);
writeFile('tasks/task5/index.html', task5_php);
writeFile('tasks/task5/style.css', task5_css);

// -------------------------------------------------------------
// TASK 6A: Login, Session Timeout (60s), Details, Logout
// -------------------------------------------------------------
const task6a_login = `<?php
session_start();

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Sample username and password
    if ($username == "admin" && $password == "12345") {
        $_SESSION["username"] = $username;

        // Session timeout: 60 seconds
        $_SESSION["last_activity"] = time();

        header("Location: 6a_details.php");
        exit();
    } else {
        $error = "Invalid username or password!";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Login Form</h2>
        <?php
        if ($error != "") {
            echo "<p class='error'>$error</p>";
        }
        ?>
        <form method="post" action="">
            <label>Username:</label>
            <input type="text" name="username" required>

            <label>Password:</label>
            <input type="password" name="password" required>

            <input type="submit" value="Login">
        </form>
    </div>
</body>
</html>`;

const task6a_details = `<?php
session_start();

// Check whether user is logged in
if (!isset($_SESSION["username"])) {
    header("Location: 6a_login.php");
    exit();
}

// Session timeout in seconds
$timeout = 60;

// Check inactivity
if (isset($_SESSION["last_activity"])) {
    $inactive_time = time() - $_SESSION["last_activity"];

    if ($inactive_time > $timeout) {
        session_unset();
        session_destroy();

        echo "<h2>Warning!</h2>";
        echo "<p>Your session has expired because you were inactive for too long.</p>";
        echo "<a href='6a_login.php'>Click here to Login Again</a>";
        exit();
    }
}

// Update activity time
$_SESSION["last_activity"] = time();

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $city = $_POST["city"];
    $phoneno = $_POST["phoneno"];

    $message = "Details submitted successfully!";
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>User Details</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>User Details Form</h2>
        <p>Welcome, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b></p>
        <p class="warning">You have 60 seconds of inactivity before your session expires.</p>

        <?php
        if ($message != "") {
            echo "<p class='success'>$message</p>";
        }
        ?>

        <form method="post" action="">
            <label>Name:</label>
            <input type="text" name="name" required>

            <label>City:</label>
            <input type="text" name="city" required>

            <label>Phone Number:</label>
            <input type="text" name="phoneno" required>

            <input type="submit" value="Submit">
        </form>
        <br>
        <a href="logout.php">Logout</a>
    </div>
</body>
</html>`;

const task6a_css = `body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
}
.container {
    width: 400px;
    margin: 80px auto;
    padding: 25px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px gray;
}
h2 {
    text-align: center;
}
label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
}
input[type="text"],
input[type="password"] {
    width: 95%;
    padding: 10px;
}
input[type="submit"] {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}
.error {
    color: red;
}
.warning {
    color: orange;
    font-weight: bold;
}
.success {
    color: green;
    font-weight: bold;
}`;

writeFile('tasks/task6a/6a_login.php', task6a_login);
writeFile('tasks/task6a/6a_details.php', task6a_details);
writeFile('tasks/task6a/style.css', task6a_css);
writeFile('tasks/task6/6a_login.php', task6a_login);
writeFile('tasks/task6/6a_details.php', task6a_details);
writeFile('tasks/task6/style.css', task6a_css);

// -------------------------------------------------------------
// TASK 6B: Cookies (set, get, delete)
// -------------------------------------------------------------
const task6b_php = `<?php
// Set a cookie
if (isset($_POST['setCookie'])) {
    setcookie("user", $_POST['username'], time() + (86400 * 30), "/"); // Cookie expires in 30 days
    echo "Cookie set successfully!<br>";
}

// Retrieve a cookie
if (isset($_POST['getCookie'])) {
    if (isset($_COOKIE['user'])) {
        echo "Stored Cookie Value: " . htmlspecialchars($_COOKIE['user']) . "<br>";
    } else {
        echo "Cookie not available or deleted!<br>";
    }
}

// Delete a cookie
if (isset($_POST['deleteCookie'])) {
    setcookie("user", "", time() - 3600, "/"); // Expire the cookie
    echo "Cookie deleted successfully!<br>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cookie Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>PHP Cookie Management</h2>
        <form method="post">
            <label>Enter Username:</label>
            <input type="text" name="username" required>
            <button type="submit" name="setCookie">Set Cookie</button>
        </form>
        <form method="post" style="margin-top: 10px;">
            <button type="submit" name="getCookie">Get Cookie</button>
        </form>
        <form method="post" style="margin-top: 10px;">
            <button type="submit" name="deleteCookie">Delete Cookie</button>
        </form>
    </div>
</body>
</html>`;

writeFile('tasks/task6b/6b_cookies.php', task6b_php);
writeFile('tasks/task6b/style.css', task6a_css);
writeFile('tasks/task6/6b_cookies.php', task6b_php);
writeFile('tasks/task6/index.html', task6a_login);

// -------------------------------------------------------------
// TASK 7A: Create DB & Table
// -------------------------------------------------------------
const task7a_php = `<?php
// Step 1: Connect to MySQL
$conn = new mysqli("localhost", "root", "");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "MySQL connection successful!<br><br>";

// Step 2: Create database
$sql = "CREATE DATABASE IF NOT EXISTS userdatabasenew";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully!<br><br>";
} else {
    die("Database creation failed: " . $conn->error);
}

// Step 3: Select database
$conn->select_db("userdatabasenew");

// Step 4: Create table
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
)";
if ($conn->query($sql) === TRUE) {
    echo "Table created successfully!";
} else {
    echo "Table creation failed: " . $conn->error;
}

// Step 5: Close connection
$conn->close();
?>`;

const task7_schema = `CREATE DATABASE IF NOT EXISTS userdatabasenew;
USE userdatabasenew;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);`;

writeFile('tasks/task7a/7a_create_db.php', task7a_php);
writeFile('tasks/task7a/db_schema.sql', task7_schema);
writeFile('tasks/task7/7a_create_db.php', task7a_php);
writeFile('tasks/task7/db_schema.sql', task7_schema);

// -------------------------------------------------------------
// TASK 7B: Registration Insert
// -------------------------------------------------------------
const task7b_php = `<?php
$conn = new mysqli("localhost", "root", "", "userdatabasenew");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = "";
if (isset($_POST['register'])) {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $email = $_POST['email'];

    $sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $password, $email);

    if ($stmt->execute()) {
        $message = "Registration successful!";
    } else {
        $message = "Registration failed: " . $stmt->error;
    }
    $stmt->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>User Registration</title>
</head>
<body>
    <h2>User Registration</h2>
    <?php if ($message != "") echo "<p><b>$message</b></p>"; ?>
    <form method="POST">
        Username: <input type="text" name="username" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        <input type="submit" name="register" value="Register">
    </form>
</body>
</html>`;

writeFile('tasks/task7b/7b_register.php', task7b_php);
writeFile('tasks/task7b/db_schema.sql', task7_schema);
writeFile('tasks/task7/7b_register.php', task7b_php);
writeFile('tasks/task7/index.html', task7a_php);

// -------------------------------------------------------------
// TASK 8A: Update User
// -------------------------------------------------------------
const task8a_php = `<?php
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
</html>`;

writeFile('tasks/task8a/Task 8a.php', task8a_php);
writeFile('tasks/task8/Task 8a.php', task8a_php);

// -------------------------------------------------------------
// TASK 8B: Delete User
// -------------------------------------------------------------
const task8b_php = `<?php
// Connect to database
$conn = new mysqli("localhost", "root", "", "userdatabasenew");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = "";

// Delete user information
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
</html>`;

writeFile('tasks/task8b/Task 8b.php', task8b_php);
writeFile('tasks/task8/Task 8b.php', task8b_php);
writeFile('tasks/task8/index.html', task8a_php);

// -------------------------------------------------------------
// TASK 9: XML Motorbike Catalog, DTD, XSL, CSS
// -------------------------------------------------------------
const task9_xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="motorbike_catalog.xsl"?>
<!DOCTYPE catalog SYSTEM "motorbike_catalog.dtd">
<catalog>
    <motorbike>
        <make>Honda</make>
        <model>CBR500R</model>
        <year>2023</year>
        <color>Red</color>
        <engine>
            <engine_number>EN123456</engine_number>
            <number_of_cylinders>2</number_of_cylinders>
            <type_of_fuel>Petrol</type_of_fuel>
        </engine>
        <chassis_number>CH123456789</chassis_number>
        <accessories disc_brake="yes" auto_start="yes" radio="no"/>
    </motorbike>

    <motorbike>
        <make>Yamaha</make>
        <model>R15</model>
        <year>2022</year>
        <color>Blue</color>
        <engine>
            <engine_number>EN987654</engine_number>
            <number_of_cylinders>1</number_of_cylinders>
            <type_of_fuel>Petrol</type_of_fuel>
        </engine>
        <chassis_number>CH987654321</chassis_number>
        <accessories disc_brake="yes" auto_start="yes" radio="yes"/>
    </motorbike>

    <motorbike>
        <make>TVS</make>
        <model>Apache RTR</model>
        <year>2024</year>
        <color>Black</color>
        <engine>
            <engine_number>EN456789</engine_number>
            <number_of_cylinders>1</number_of_cylinders>
            <type_of_fuel>Petrol</type_of_fuel>
        </engine>
        <chassis_number>CH456789123</chassis_number>
        <accessories disc_brake="yes" auto_start="no" radio="no"/>
    </motorbike>

    <motorbike>
        <make>Kawasaki</make>
        <model>Ninja 300</model>
        <year>2023</year>
        <color>Green</color>
        <engine>
            <engine_number>EN654321</engine_number>
            <number_of_cylinders>2</number_of_cylinders>
            <type_of_fuel>Petrol</type_of_fuel>
        </engine>
        <chassis_number>CH654321987</chassis_number>
        <accessories disc_brake="yes" auto_start="yes" radio="no"/>
    </motorbike>
</catalog>`;

const task9_dtd = `<!ELEMENT catalog (motorbike+)>
<!ELEMENT motorbike (make, model, year, color, engine, chassis_number, accessories)>

<!ELEMENT make (#PCDATA)>
<!ELEMENT model (#PCDATA)>
<!ELEMENT year (#PCDATA)>
<!ELEMENT color (#PCDATA)>

<!ELEMENT engine (engine_number, number_of_cylinders, type_of_fuel)>
<!ELEMENT engine_number (#PCDATA)>
<!ELEMENT number_of_cylinders (#PCDATA)>
<!ELEMENT type_of_fuel (#PCDATA)>

<!ELEMENT chassis_number (#PCDATA)>

<!ELEMENT accessories EMPTY>
<!ATTLIST accessories
    disc_brake (yes|no) #REQUIRED
    auto_start (yes|no) #REQUIRED
    radio (yes|no) #REQUIRED>`;

const task9_xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8"/>

<xsl:template match="/">
<html>
<head>
    <title>Motorbike Catalog</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
    <h1>Motorbike Catalog</h1>
    <table>
        <tr>
            <th>MAKE</th>
            <th>MODEL</th>
            <th>YEAR</th>
            <th>COLOR</th>
            <th>ENGINE NUMBER</th>
            <th>CYLINDERS</th>
            <th>FUEL TYPE</th>
            <th>CHASSIS NUMBER</th>
            <th>DISC BRAKE</th>
            <th>AUTO START</th>
            <th>RADIO</th>
        </tr>
        <xsl:for-each select="catalog/motorbike">
        <tr>
            <td><xsl:value-of select="make"/></td>
            <td><xsl:value-of select="model"/></td>
            <td><xsl:value-of select="year"/></td>
            <td><xsl:value-of select="color"/></td>
            <td><xsl:value-of select="engine/engine_number"/></td>
            <td><xsl:value-of select="engine/number_of_cylinders"/></td>
            <td><xsl:value-of select="engine/type_of_fuel"/></td>
            <td><xsl:value-of select="chassis_number"/></td>
            <td><xsl:value-of select="accessories/@disc_brake"/></td>
            <td><xsl:value-of select="accessories/@auto_start"/></td>
            <td><xsl:value-of select="accessories/@radio"/></td>
        </tr>
        </xsl:for-each>
    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>`;

const task9_css = `body {
    font-family: Arial;
    background-color: lightyellow;
    text-align: center;
}
h1 {
    color: darkblue;
}
table {
    width: 95%;
    margin: auto;
    border-collapse: collapse;
}
th {
    background-color: grey;
    color: white;
    font-weight: bold;
}
td, th {
    border: 1px solid black;
    padding: 10px;
}
td {
    background-color: lightblue;
}`;

writeFile('tasks/task9/m.xml', task9_xml);
writeFile('tasks/task9/motorbike_catalog.dtd', task9_dtd);
writeFile('tasks/task9/motorbike_catalog.xsl', task9_xsl);
writeFile('tasks/task9/style.css', task9_css);

// -------------------------------------------------------------
// TASK 10: jQuery AJAX Server Date & Time
// -------------------------------------------------------------
const task10_html = `<!DOCTYPE html>
<html>
<head>
    <title>jQuery AJAX Example</title>
    <!-- Include jQuery library -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

    <script>
    $(document).ready(function() {
        // Execute when button is clicked
        $("#btn").click(function() {
            // Send GET request to PHP file
            $.get("date-time.php", function(data) {
                // Display server response
                $("#result").html(data);
            });
        });
    });
    </script>
</head>
<body>
    <h2>jQuery AJAX Example</h2>
    <button id="btn">Get Server Date and Time</button>
    <p id="result"></p>
</body>
</html>`;

const task10_php = `<?php
// Get current date and time from server
echo "Current Server Date and Time: ";
echo date("d-m-Y h:i:s A");
?>`;

writeFile('tasks/task10/Task 10.html', task10_html);
writeFile('tasks/task10/date-time.php', task10_php);

// -------------------------------------------------------------
// TASK 11: Live Name Suggestion
// -------------------------------------------------------------
const task11_html = `<!DOCTYPE html>
<html>
<head>
    <title>Live Name Suggestion</title>
    <!-- Include jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h2>Search for a Name</h2>

    <!-- Textbox to enter a name -->
    <input type="text" id="searchBox" placeholder="Start typing...">

    <!-- Display suggested names -->
    <div id="suggestions" style="margin-top: 10px; font-weight: bold;"></div>

    <script>
    $(document).ready(function() {
        // Execute when user types in textbox
        $("#searchBox").on("keyup", function() {
            let query = $(this).val();

            if (query.length > 0) {
                $.ajax({
                    url: "search.php",
                    type: "GET",
                    data: { query: query },
                    success: function(response) {
                        $("#suggestions").text(response);
                    },
                    error: function() {
                        $("#suggestions").text("Error fetching data.");
                    }
                });
            } else {
                $("#suggestions").text("");
            }
        });
    });
    </script>
</body>
</html>`;

const task11_php = `<?php
// List of sample names
$names = ["Alice", "Bob", "Charlie", "David",
          "Emma", "Ethan", "Sophia", "Samuel",
          "Olivia", "Liam"];

// Check whether query is received
if (isset($_GET['query'])) {
    $query = trim($_GET['query']);
    $suggestions = [];

    if ($query != "") {
        foreach ($names as $name) {
            if (stripos($name, $query) !== false) {
                $suggestions[] = $name;
            }
        }
    }

    if (empty($suggestions)) {
        echo "No suggestions";
    } else {
        echo implode(", ", $suggestions);
    }
}
?>`;

writeFile('tasks/task11/Task 11.html', task11_html);
writeFile('tasks/task11/search.php', task11_php);

// -------------------------------------------------------------
// TASK 12: AJAX Retrieve User Info from Database
// -------------------------------------------------------------
const task12_html = `<!DOCTYPE html>
<html>
<head>
    <title>AJAX Database Example</title>
    <style>
        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
    </style>
</head>
<body>
    <h2>AJAX - Retrieve User Information</h2>

    <!-- Dropdown list of names -->
    <select id="username" onchange="showUser(this.value)">
        <option value="">Select a user</option>
        <option value="1">Alice</option>
        <option value="2">Bob</option>
        <option value="3">Charlie</option>
        <option value="4">David</option>
    </select>

    <br><br>

    <!-- Display user information -->
    <div id="result">
        User information will be displayed here.
    </div>

    <script>
    function showUser(id) {
        if (id == "") {
            document.getElementById("result").innerHTML = "";
            return;
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("result").innerHTML = this.responseText;
            }
        };

        xhttp.open("GET", "getuser.php?id=" + id, true);
        xhttp.send();
    }
    </script>
</body>
</html>`;

const task12_php = `<?php
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
?>`;

const task12_sql = `CREATE DATABASE IF NOT EXISTS ajax_db;
USE ajax_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    phone VARCHAR(15),
    email VARCHAR(100),
    place VARCHAR(50)
);

INSERT INTO users (username, phone, email, place)
VALUES('Alice', '9876543210', 'alice@gmail.com', 'Hyderabad'),
('Bob', '9876543211', 'bob@gmail.com', 'Chennai'),
('Charlie', '9876543212', 'charlie@gmail.com', 'Bangalore'),
('David', '9876543213', 'david@gmail.com', 'Mumbai');`;

writeFile('tasks/task12/task12.html', task12_html);
writeFile('tasks/task12/getuser.php', task12_php);
writeFile('tasks/task12/db_schema.sql', task12_sql);

console.log("=== All source codes updated to exact Word doc versions! ===");
