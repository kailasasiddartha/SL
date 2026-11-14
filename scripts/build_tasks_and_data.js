const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Generating tasks and assets...');

const tasksDir = path.resolve(__dirname, '..', 'tasks');
if (!fs.existsSync(tasksDir)) {
    fs.mkdirSync(tasksDir, { recursive: true });
}

// Definition of Tasks 1 through 11 source codes
const tasksData = [
  {
    num: 1,
    id: "task-1",
    title: "HTML5 Student Registration Form",
    question: "Design a Student Registration Form using HTML5 semantic elements and various input types (text, password, email, date, number, radio, checkbox, file, and dropdown list). Structure the layout using HTML tables and fieldset legends, and apply basic CSS styling for validation feedback.",
    aim: "To design and implement an interactive Student Registration Form using HTML5 form controls, semantic markup, and table layout.",
    tags: ["HTML5", "Forms", "Tables", "Semantic Elements"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 1 - Student Registration Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>University Student Registration Form</h2>
        <form action="#" method="POST" enctype="multipart/form-data">
            <fieldset>
                <legend>Personal Information</legend>
                <table class="form-table">
                    <tr>
                        <td><label for="fullname">Full Name:</label></td>
                        <td><input type="text" id="fullname" name="fullname" placeholder="Enter full name" required></td>
                    </tr>
                    <tr>
                        <td><label for="email">Email Address:</label></td>
                        <td><input type="email" id="email" name="email" placeholder="student@university.edu" required></td>
                    </tr>
                    <tr>
                        <td><label for="password">Password:</label></td>
                        <td><input type="password" id="password" name="password" minlength="8" required></td>
                    </tr>
                    <tr>
                        <td><label for="dob">Date of Birth:</label></td>
                        <td><input type="date" id="dob" name="dob" required></td>
                    </tr>
                    <tr>
                        <td><label>Gender:</label></td>
                        <td>
                            <input type="radio" id="male" name="gender" value="Male" required>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="Female">
                            <label for="female">Female</label>
                            <input type="radio" id="other" name="gender" value="Other">
                            <label for="other">Other</label>
                        </td>
                    </tr>
                </table>
            </fieldset>

            <fieldset>
                <legend>Academic & Branch Details</legend>
                <table class="form-table">
                    <tr>
                        <td><label for="branch">Select Department:</label></td>
                        <td>
                            <select id="branch" name="branch" required>
                                <option value="">-- Choose Branch --</option>
                                <option value="CSE">Computer Science & Engineering</option>
                                <option value="IT">Information Technology</option>
                                <option value="AI">Artificial Intelligence & Data Science</option>
                                <option value="ECE">Electronics & Communication</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="semester">Current Semester:</label></td>
                        <td><input type="number" id="semester" name="semester" min="1" max="8" value="5" required></td>
                    </tr>
                    <tr>
                        <td><label>Technical Interests:</label></td>
                        <td>
                            <input type="checkbox" id="web" name="interests" value="Web"> <label for="web">Web Dev</label>
                            <input type="checkbox" id="python" name="interests" value="Python"> <label for="python">Python</label>
                            <input type="checkbox" id="cloud" name="interests" value="Cloud"> <label for="cloud">Cloud</label>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="photo">Upload Photo:</label></td>
                        <td><input type="file" id="photo" name="photo" accept="image/*"></td>
                    </tr>
                </table>
            </fieldset>

            <div class="btn-group">
                <input type="submit" value="Register Student">
                <input type="reset" value="Clear Form">
            </div>
        </form>
    </div>
</body>
</html>`
      },
      {
        name: "style.css",
        type: "css",
        content: `/* Task 1 - Form Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f6f9;
    margin: 0;
    padding: 20px;
}
.container {
    max-width: 650px;
    margin: 20px auto;
    background: #ffffff;
    padding: 25px 30px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
h2 {
    text-align: center;
    color: #1a365d;
    margin-bottom: 20px;
}
fieldset {
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 15px 20px;
    margin-bottom: 18px;
}
legend {
    font-weight: bold;
    color: #2563eb;
    padding: 0 8px;
}
.form-table {
    width: 100%;
}
.form-table td {
    padding: 8px 4px;
}
.form-table td:first-child {
    width: 35%;
    font-weight: 500;
    color: #334155;
}
input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"],
input[type="number"],
select {
    width: 90%;
    padding: 8px 10px;
    border: 1px solid #94a3b8;
    border-radius: 4px;
    font-size: 14px;
}
input:focus, select:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
}
.btn-group {
    text-align: center;
    margin-top: 15px;
}
input[type="submit"], input[type="reset"] {
    padding: 10px 24px;
    margin: 0 8px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
input[type="submit"] {
    background-color: #2563eb;
    color: white;
}
input[type="reset"] {
    background-color: #64748b;
    color: white;
}`
      }
    ]
  },
  {
    num: 2,
    id: "task-2",
    title: "CSS3 Cascading Style Sheets & Layouts",
    question: "Develop a multi-column responsive department web portal homepage using CSS3 to demonstrate different types of CSS (Inline, Internal, and External), advanced CSS selectors (class, id, descendant, pseudo-classes like :hover and :focus), the CSS Box Model, and a Flexbox navigation bar.",
    aim: "To demonstrate the application of CSS3 styling methods, Box Model dimensions, Flexbox layouts, and pseudo-classes in building a responsive web portal.",
    tags: ["CSS3", "Box Model", "Flexbox", "Selectors", "Layout"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 2 - CSS3 Department Portal</title>
    <!-- External CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Internal CSS -->
    <style>
        .badge {
            background-color: #f59e0b;
            color: #000;
            padding: 3px 8px;
            font-size: 11px;
            font-weight: bold;
            border-radius: 12px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <!-- Header with Flexbox Navigation -->
    <header class="header">
        <div class="logo">SL Department Portal</div>
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#courses">Courses</a>
            <a href="#faculty">Faculty</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <!-- Inline CSS demonstration -->
        <h1 style="color: #ffffff; letter-spacing: 1px;">Department of Computer Science & Engineering</h1>
        <p>Empowering students with foundational scripting, modern web paradigms, and systems engineering.</p>
        <button class="cta-btn">Explore Syllabus</button>
    </section>

    <!-- Main Content: Box Model & Grid/Flex Cards -->
    <main class="content-container">
        <div class="card">
            <h3>Web Technologies <span class="badge">Core</span></h3>
            <p>Comprehensive coverage of HTML5, CSS3, DOM manipulation, responsive layouts, and modern front-end tooling.</p>
        </div>
        <div class="card">
            <h3>Server Scripting <span class="badge">PHP</span></h3>
            <p>Deep dive into Apache, PHP runtime, form parsing, state persistence with cookies/sessions, and MySQL connectivity.</p>
        </div>
        <div class="card">
            <h3>XML & Data Interchange <span class="badge">XML</span></h3>
            <p>Structured markup, DTD validation, XML Schema Definitions (XSD), and XSLT stylesheet rendering pipelines.</p>
        </div>
    </main>

    <footer class="footer">
        <p>&copy; 2026 Scripting Languages Laboratory. Designed for Academic Record.</p>
    </footer>
</body>
</html>`
      },
      {
        name: "style.css",
        type: "css",
        content: `/* Task 2 - CSS3 External Stylesheet */
:root {
    --primary: #1e293b;
    --accent: #3b82f6;
    --bg-light: #f8fafc;
    --text-dark: #0f172a;
}
* {
    box-sizing: border-box; /* CSS Box Model Best Practice */
    margin: 0;
    padding: 0;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: var(--bg-light);
    color: var(--text-dark);
    line-height: 1.6;
}
.header {
    background-color: var(--primary);
    color: white;
    display: flex; /* Flexbox */
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
.logo {
    font-size: 1.25rem;
    font-weight: 700;
}
.navbar a {
    color: #cbd5e1;
    text-decoration: none;
    margin-left: 1.5rem;
    font-size: 0.95rem;
    transition: color 0.2s ease;
}
.navbar a:hover, .navbar a.active {
    color: #38bdf8;
}
.hero {
    background: linear-gradient(135deg, #1e3a8a, #0284c7);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
}
.hero p {
    margin: 1rem 0 1.5rem;
    font-size: 1.1rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.cta-btn {
    background-color: #ffffff;
    color: #0284c7;
    font-weight: 600;
    padding: 0.75rem 1.75rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}
.cta-btn:hover {
    background-color: #f1f5f9;
}
.content-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 2.5rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
}
.card {
    flex: 1 1 calc(33.333% - 1.5rem);
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1.5rem; /* Box Model: Padding */
    box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
.card h3 {
    margin-bottom: 0.75rem;
    color: #1e293b;
}
.footer {
    text-align: center;
    padding: 1.5rem;
    background-color: #e2e8f0;
    font-size: 0.85rem;
    color: #64748b;
}`
      }
    ]
  },
  {
    num: 3,
    id: "task-3",
    title: "JavaScript Client-Side Form Validation",
    question: "Write a JavaScript program to perform client-side validation on a Student Registration Form before submission. Validate that required fields are not empty, the username has at least 6 characters, the password is at least 8 characters with at least one number and special character, the email matches a regular expression pattern, and the phone number is 10 digits.",
    aim: "To implement client-side form validation using JavaScript DOM API, event listeners, and Regular Expressions to sanitize inputs before submission.",
    tags: ["JavaScript", "Form Validation", "RegEx", "DOM"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 3 - Form Validation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Student Portal - Account Validation</h2>
        <form id="regForm" onsubmit="return validateForm(event)">
            <div class="form-group">
                <label for="username">Username (min 6 chars):</label>
                <input type="text" id="username" name="username">
                <span class="error-msg" id="usernameErr"></span>
            </div>

            <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="text" id="email" name="email">
                <span class="error-msg" id="emailErr"></span>
            </div>

            <div class="form-group">
                <label for="phone">Phone Number (10 digits):</label>
                <input type="text" id="phone" name="phone">
                <span class="error-msg" id="phoneErr"></span>
            </div>

            <div class="form-group">
                <label for="password">Password (8+ chars, uppercase, number, special):</label>
                <input type="password" id="password" name="password">
                <span class="error-msg" id="passwordErr"></span>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword">
                <span class="error-msg" id="confirmErr"></span>
            </div>

            <button type="submit" class="submit-btn">Validate & Submit</button>
            <div class="success-banner" id="successMsg">Form successfully validated! Ready for server processing.</div>
        </form>
    </div>
    <script src="validate.js"></script>
</body>
</html>`
      },
      {
        name: "validate.js",
        type: "js",
        content: `// Task 3 - Client-side validation using Regular Expressions
function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = '');
    document.getElementById('successMsg').style.display = 'none';

    // 1. Username Validation
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('usernameErr').innerText = 'Username is required.';
        isValid = false;
    } else if (username.length < 6) {
        document.getElementById('usernameErr').innerText = 'Username must be at least 6 characters.';
        isValid = false;
    }

    // 2. Email Validation with Regex
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailErr').innerText = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailErr').innerText = 'Enter a valid email address (e.g. name@domain.com).';
        isValid = false;
    }

    // 3. Phone Number Validation (10 digits starting with 6,7,8,9)
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[6-9]\\d{9}$/;
    if (phone === '') {
        document.getElementById('phoneErr').innerText = 'Phone number is required.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneErr').innerText = 'Phone must be a 10-digit number starting with 6-9.';
        isValid = false;
    }

    // 4. Password Validation
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
    if (password === '') {
        document.getElementById('passwordErr').innerText = 'Password is required.';
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('passwordErr').innerText = 'Password must have 8+ characters, with uppercase, number & symbol.';
        isValid = false;
    }

    // 5. Confirm Password Match
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword === '') {
        document.getElementById('confirmErr').innerText = 'Please confirm password.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmErr').innerText = 'Passwords do not match.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMsg').style.display = 'block';
    }

    return isValid;
}`
      },
      {
        name: "style.css",
        type: "css",
        content: `/* Task 3 Validation Styling */
body {
    font-family: Arial, sans-serif;
    background: #f1f5f9;
    padding: 30px;
}
.card {
    max-width: 480px;
    margin: 0 auto;
    background: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.06);
}
h2 {
    font-size: 1.25rem;
    color: #1e293b;
    margin-bottom: 20px;
    text-align: center;
}
.form-group {
    margin-bottom: 14px;
}
label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 4px;
}
input[type="text"], input[type="password"] {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 10px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
}
.error-msg {
    color: #dc2626;
    font-size: 0.8rem;
    margin-top: 3px;
    display: block;
}
.submit-btn {
    width: 100%;
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 10px;
}
.submit-btn:hover {
    background-color: #1d4ed8;
}
.success-banner {
    display: none;
    margin-top: 15px;
    background: #dcfce7;
    color: #15803d;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    font-size: 0.9rem;
}`
      }
    ]
  },
  {
    num: 4,
    id: "task-4",
    title: "Dynamic HTML & Interactive Calculator",
    question: "Develop an interactive standard and scientific calculator application using JavaScript event handling (onclick, onkeydown) and dynamic DOM manipulation. Support arithmetic operations (+, -, *, /, %), clear screen, backspace, and maintain a dynamic calculation history log rendered via DOM createElement.",
    aim: "To demonstrate JavaScript event handling, dynamic HTML (DHTML), DOM tree modification, and mathematical evaluation.",
    tags: ["JavaScript", "Event Handling", "DOM Manipulation", "DHTML"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 4 - Dynamic Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator-app">
        <div class="calculator">
            <div class="display">
                <div class="history" id="subDisplay"></div>
                <input type="text" id="calcDisplay" value="0" readonly>
            </div>
            <div class="keypad">
                <button class="btn btn-op" onclick="clearAll()">AC</button>
                <button class="btn btn-op" onclick="backspace()">DEL</button>
                <button class="btn btn-op" onclick="appendOp('%')">%</button>
                <button class="btn btn-op" onclick="appendOp('/')">&divide;</button>

                <button class="btn" onclick="appendNum('7')">7</button>
                <button class="btn" onclick="appendNum('8')">8</button>
                <button class="btn" onclick="appendNum('9')">9</button>
                <button class="btn btn-op" onclick="appendOp('*')">&times;</button>

                <button class="btn" onclick="appendNum('4')">4</button>
                <button class="btn" onclick="appendNum('5')">5</button>
                <button class="btn" onclick="appendNum('6')">6</button>
                <button class="btn btn-op" onclick="appendOp('-')">&minus;</button>

                <button class="btn" onclick="appendNum('1')">1</button>
                <button class="btn" onclick="appendNum('2')">2</button>
                <button class="btn" onclick="appendNum('3')">3</button>
                <button class="btn btn-op" onclick="appendOp('+')">+</button>

                <button class="btn" onclick="appendNum('0')">0</button>
                <button class="btn" onclick="appendNum('.')">.</button>
                <button class="btn btn-eq" onclick="calculate()">=</button>
            </div>
        </div>
        <div class="history-panel">
            <h3>History Log</h3>
            <ul id="historyList"></ul>
            <button class="clear-hist" onclick="clearHistory()">Clear History</button>
        </div>
    </div>
    <script src="calculator.js"></script>
</body>
</html>`
      },
      {
        name: "calculator.js",
        type: "js",
        content: `// Task 4 - Dynamic DOM Calculator & History Log
let currentExpression = "";
let isEvaluated = false;

function appendNum(num) {
    const display = document.getElementById("calcDisplay");
    if (isEvaluated || display.value === "0") {
        currentExpression = "";
        isEvaluated = false;
    }
    currentExpression += num;
    display.value = currentExpression;
}

function appendOp(op) {
    const display = document.getElementById("calcDisplay");
    if (currentExpression === "" && op !== "-") return;
    isEvaluated = false;
    currentExpression += " " + op + " ";
    display.value = currentExpression;
}

function clearAll() {
    currentExpression = "";
    isEvaluated = false;
    document.getElementById("calcDisplay").value = "0";
    document.getElementById("subDisplay").innerText = "";
}

function backspace() {
    if (isEvaluated) return clearAll();
    currentExpression = currentExpression.trimEnd();
    currentExpression = currentExpression.slice(0, -1).trimEnd();
    document.getElementById("calcDisplay").value = currentExpression || "0";
}

function calculate() {
    try {
        if (!currentExpression) return;
        const result = Function('"use strict";return (' + currentExpression + ')')();
        document.getElementById("subDisplay").innerText = currentExpression + " =";
        document.getElementById("calcDisplay").value = result;

        // Dynamic DOM append to history list
        addHistoryItem(currentExpression + " = " + result);

        currentExpression = result.toString();
        isEvaluated = true;
    } catch (err) {
        document.getElementById("calcDisplay").value = "Error";
        isEvaluated = true;
    }
}

function addHistoryItem(text) {
    const list = document.getElementById("historyList");
    const li = document.createElement("li");
    li.textContent = text;
    list.prepend(li);
}

function clearHistory() {
    document.getElementById("historyList").innerHTML = "";
}

// Keyboard input support
document.addEventListener("keydown", function(e) {
    if ("0123456789".includes(e.key)) appendNum(e.key);
    else if ("+-*/%".includes(e.key)) appendOp(e.key);
    else if (e.key === "Enter") calculate();
    else if (e.key === "Backspace") backspace();
    else if (e.key === "Escape") clearAll();
});`
      },
      {
        name: "style.css",
        type: "css",
        content: `/* Task 4 Calculator Styles */
body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: #0f172a;
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 30px;
}
.calculator-app {
    display: flex;
    gap: 20px;
    background: #1e293b;
    padding: 20px;
    border-radius: 12px;
}
.calculator {
    width: 280px;
}
.display {
    background: #0f172a;
    padding: 15px;
    border-radius: 8px;
    text-align: right;
    margin-bottom: 15px;
}
.history {
    font-size: 0.85rem;
    color: #94a3b8;
    min-height: 18px;
}
#calcDisplay {
    width: 100%;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.8rem;
    text-align: right;
    outline: none;
}
.keypad {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
}
.btn {
    padding: 14px;
    font-size: 1.1rem;
    border: none;
    background: #334155;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
}
.btn:hover { background: #475569; }
.btn-op { background: #0284c7; }
.btn-op:hover { background: #0369a1; }
.btn-eq {
    grid-column: span 2;
    background: #10b981;
}
.btn-eq:hover { background: #059669; }
.history-panel {
    width: 200px;
    background: #0f172a;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}
.history-panel h3 { font-size: 0.95rem; margin-bottom: 10px; }
#historyList {
    flex: 1;
    list-style: none;
    overflow-y: auto;
    max-height: 220px;
    font-size: 0.85rem;
    color: #94a3b8;
}
#historyList li { padding: 4px 0; border-bottom: 1px solid #1e293b; }
.clear-hist {
    background: #ef4444;
    border: none;
    color: white;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
}`
      }
    ]
  },
  {
    num: 5,
    id: "task-5",
    title: "XML Document & DTD Validation",
    question: "Create an XML document to store information about books in a university library (Title, Author, ISBN, Publisher, Edition, Price). Define both Internal and External Document Type Definitions (DTD) to specify the element grammar, child element sequences, attributes (#REQUIRED, #IMPLIED), and validate the document.",
    aim: "To learn the structure of XML markup and enforce data integrity using Document Type Definitions (DTD).",
    tags: ["XML", "DTD", "Data Modeling", "Validation"],
    files: [
      {
        name: "books.xml",
        type: "xml",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE library SYSTEM "books.dtd">
<library>
    <book isbn="978-0131103627" category="Programming">
        <title>The C Programming Language</title>
        <author>Brian W. Kernighan</author>
        <author>Dennis M. Ritchie</author>
        <publisher>Prentice Hall</publisher>
        <edition>2nd</edition>
        <year>1988</year>
        <price currency="USD">45.00</price>
    </book>
    <book isbn="978-0596517748" category="Web Development">
        <title>JavaScript: The Good Parts</title>
        <author>Douglas Crockford</author>
        <publisher>O'Reilly Media</publisher>
        <edition>1st</edition>
        <year>2008</year>
        <price currency="USD">29.99</price>
    </book>
    <book isbn="978-0201633610" category="Software Engineering">
        <title>Design Patterns: Elements of Reusable Object-Oriented Software</title>
        <author>Erich Gamma</author>
        <author>Richard Helm</author>
        <author>Ralph Johnson</author>
        <author>John Vlissides</author>
        <publisher>Addison-Wesley</publisher>
        <edition>1st</edition>
        <year>1994</year>
        <price currency="USD">54.95</price>
    </book>
</library>`
      },
      {
        name: "books.dtd",
        type: "dtd",
        content: `<!-- External DTD for Library Catalog (books.dtd) -->
<!ELEMENT library (book+)>
<!ELEMENT book (title, author+, publisher, edition?, year, price)>
<!ATTLIST book
    isbn CDATA #REQUIRED
    category CDATA #IMPLIED>

<!ELEMENT title (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ELEMENT publisher (#PCDATA)>
<!ELEMENT edition (#PCDATA)>
<!ELEMENT year (#PCDATA)>
<!ELEMENT price (#PCDATA)>
<!ATTLIST price
    currency (USD | EUR | INR) "INR">`
      }
    ]
  },
  {
    num: 6,
    id: "task-6",
    title: "XML Schema Definition (XSD)",
    question: "Design an XML Schema Definition (student.xsd) to validate a Student Academic Record XML document. Define complex types, simple types with restrictions (facets like minInclusive, maxInclusive, and regex pattern matching for student IDs), element cardinalities (minOccurs, maxOccurs), and validate the instance XML.",
    aim: "To formulate an XML Schema Definition (XSD) and validate strongly-typed elements, facets, and structural constraints on XML documents.",
    tags: ["XML", "XSD", "Schema Validation", "Namespaces"],
    files: [
      {
        name: "student.xml",
        type: "xml",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<students xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="student.xsd">
    <student rollNo="23CS0101">
        <name>Aarav Sharma</name>
        <email>aarav.cs23@univ.edu</email>
        <dob>2003-08-14</dob>
        <department>CSE</department>
        <cgpa>9.42</cgpa>
        <semester>5</semester>
    </student>
    <student rollNo="23IT0204">
        <name>Priya Nair</name>
        <email>priya.it23@univ.edu</email>
        <dob>2004-01-22</dob>
        <department>IT</department>
        <cgpa>8.85</cgpa>
        <semester>5</semester>
    </student>
</students>`
      },
      {
        name: "student.xsd",
        type: "xsd",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <!-- Root Element -->
    <xs:element name="students">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="student" type="studentType" maxOccurs="unbounded"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

    <!-- Complex Type Definition -->
    <xs:complexType name="studentType">
        <xs:sequence>
            <xs:element name="name" type="xs:string"/>
            <xs:element name="email" type="emailType"/>
            <xs:element name="dob" type="xs:date"/>
            <xs:element name="department" type="deptType"/>
            <xs:element name="cgpa" type="cgpaType"/>
            <xs:element name="semester" type="semesterType"/>
        </xs:sequence>
        <xs:attribute name="rollNo" type="rollNoType" use="required"/>
    </xs:complexType>

    <!-- Simple Types with Restrictions/Facets -->
    <xs:simpleType name="rollNoType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[0-9]{2}[A-Z]{2}[0-9]{4}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="emailType">
        <xs:restriction base="xs:string">
            <xs:pattern value="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="deptType">
        <xs:restriction base="xs:string">
            <xs:enumeration value="CSE"/>
            <xs:enumeration value="IT"/>
            <xs:enumeration value="ECE"/>
            <xs:enumeration value="MECH"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="cgpaType">
        <xs:restriction base="xs:decimal">
            <xs:minInclusive value="0.0"/>
            <xs:maxInclusive value="10.0"/>
        </xs:restriction>
    </xs:simpleType>

    <xs:simpleType name="semesterType">
        <xs:restriction base="xs:integer">
            <xs:minInclusive value="1"/>
            <xs:maxInclusive value="8"/>
        </xs:restriction>
    </xs:simpleType>

</xs:schema>`
      }
    ]
  },
  {
    num: 7,
    id: "task-7",
    title: "XML Transformation & Presentation with XSLT & CSS",
    question: "Create an XML document storing employee payroll information (ID, Name, Department, Designation, Salary, Bonus) and use XSLT (Extensible Stylesheet Language Transformations) and CSS to transform and render the employee records in a styled HTML table with sorting (<xsl:sort>) and conditional filtering (<xsl:choose>).",
    aim: "To transform structured XML data into formatted HTML representations using XSLT templates, sorting directives, and conditional tests.",
    tags: ["XML", "XSLT", "CSS", "Data Transformation"],
    files: [
      {
        name: "employees.xml",
        type: "xml",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="employees.xsl"?>
<company>
    <employee id="EMP101">
        <name>Rajesh Verma</name>
        <department>Engineering</department>
        <designation>Lead Architect</designation>
        <salary>85000</salary>
        <bonus>15000</bonus>
    </employee>
    <employee id="EMP102">
        <name>Sunita Rao</name>
        <department>Human Resources</department>
        <designation>HR Manager</designation>
        <salary>62000</salary>
        <bonus>8000</bonus>
    </employee>
    <employee id="EMP103">
        <name>Kiran Patel</name>
        <department>Engineering</department>
        <designation>Full Stack Developer</designation>
        <salary>72000</salary>
        <bonus>12000</bonus>
    </employee>
    <employee id="EMP104">
        <name>Meera Iyer</name>
        <department>Finance</department>
        <designation>Senior Analyst</designation>
        <salary>58000</salary>
        <bonus>7500</bonus>
    </employee>
</company>`
      },
      {
        name: "employees.xsl",
        type: "xsl",
        content: `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
    <title>Employee Payroll Report - XSLT</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <h2>Corporate Payroll Roster (Transformed via XSLT)</h2>
    <table>
        <tr>
            <th>Emp ID</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary (INR)</th>
            <th>Bonus (INR)</th>
            <th>Category</th>
        </tr>
        <!-- Sort employees by salary descending -->
        <xsl:for-each select="company/employee">
            <xsl:sort select="salary" data-type="number" order="descending"/>
            <tr>
                <td><xsl:value-of select="@id"/></td>
                <td><xsl:value-of select="name"/></td>
                <td><xsl:value-of select="department"/></td>
                <td><xsl:value-of select="designation"/></td>
                <td><xsl:value-of select="salary"/></td>
                <td><xsl:value-of select="bonus"/></td>
                <td>
                    <xsl:choose>
                        <xsl:when test="salary &gt;= 75000">
                            <span class="tag high">Tier 1</span>
                        </xsl:when>
                        <xsl:otherwise>
                            <span class="tag std">Standard</span>
                        </xsl:otherwise>
                    </xsl:choose>
                </td>
            </tr>
        </xsl:for-each>
    </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>`
      },
      {
        name: "style.css",
        type: "css",
        content: `/* Task 7 XSLT Output Styles */
body {
    font-family: Arial, sans-serif;
    padding: 30px;
    background: #f8fafc;
}
h2 {
    color: #1e293b;
    margin-bottom: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
th, td {
    padding: 12px 14px;
    border: 1px solid #cbd5e1;
    text-align: left;
}
th {
    background-color: #1e3a8a;
    color: white;
}
tr:nth-child(even) { background-color: #f1f5f9; }
.tag {
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
}
.tag.high { background: #dcfce7; color: #166534; }
.tag.std { background: #e0f2fe; color: #075985; }`
      }
    ]
  },
  {
    num: 8,
    id: "task-8",
    title: "PHP Form Processing & String Operations",
    question: "Write a PHP script to process an online student course evaluation form submitted via the HTTP POST method. Sanitize input variables using htmlspecialchars(), perform various string manipulations (length, word count, reverse, case conversion, and MD5 hashing), and render a formatted summary report.",
    aim: "To capture HTTP POST requests in PHP, sanitize input streams, apply built-in string functions, and dynamically render formatted reports.",
    tags: ["PHP", "POST Method", "String Functions", "Form Processing"],
    files: [
      {
        name: "feedback.html",
        type: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 8 - Course Feedback Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Course Evaluation & Feedback Form</h2>
        <form action="process.php" method="POST">
            <div class="field">
                <label>Student Roll Number:</label>
                <input type="text" name="rollno" required>
            </div>
            <div class="field">
                <label>Student Name:</label>
                <input type="text" name="student_name" required>
            </div>
            <div class="field">
                <label>Course Title:</label>
                <input type="text" name="course" value="Scripting Languages Lab" required>
            </div>
            <div class="field">
                <label>Detailed Comments / Feedback:</label>
                <textarea name="comments" rows="4" required></textarea>
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    </div>
</body>
</html>`
      },
      {
        name: "process.php",
        type: "php",
        content: `<?php
// Task 8 - PHP Form Processing & String Manipulation
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rollno = htmlspecialchars(trim($_POST['rollno']));
    $name   = htmlspecialchars(trim($_POST['student_name']));
    $course = htmlspecialchars(trim($_POST['course']));
    $comments = htmlspecialchars(trim($_POST['comments']));

    // String manipulation evaluations
    $charCount = strlen($comments);
    $wordCount = str_word_count($comments);
    $upperName = strtoupper($name);
    $reversedRoll = strrev($rollno);
    $commentHash = hash('sha256', $comments);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Feedback Processing Summary</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="card">
        <h2>Feedback Evaluation Report</h2>
        <table class="report-table">
            <tr><th>Attribute</th><th>Evaluated Result</th></tr>
            <tr><td>Formatted Name</td><td><strong><?php echo $upperName; ?></strong></td></tr>
            <tr><td>Roll Number (Reversed)</td><td><?php echo $reversedRoll; ?></td></tr>
            <tr><td>Course</td><td><?php echo $course; ?></td></tr>
            <tr><td>Comments Length</td><td><?php echo $charCount; ?> characters</td></tr>
            <tr><td>Word Count</td><td><?php echo $wordCount; ?> words</td></tr>
            <tr><td>SHA-256 Digest</td><td><code><?php echo substr($commentHash, 0, 24); ?>...</code></td></tr>
            <tr><td>Original Comments</td><td><em>"<?php echo nl2br($comments); ?>"</em></td></tr>
        </table>
        <p><a href="feedback.html">&larr; Back to Form</a></p>
    </div>
</body>
</html>
<?php
} else {
    header("Location: feedback.html");
    exit();
}
?>`
      },
      {
        name: "style.css",
        type: "css",
        content: `body { font-family: Arial, sans-serif; background: #f1f5f9; padding: 30px; }
.card { max-width: 550px; margin: auto; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.field { margin-bottom: 12px; }
label { display: block; font-weight: bold; margin-bottom: 4px; color: #334155; }
input[type="text"], textarea { width: 100%; box-sizing: border-box; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; }
button { background: #2563eb; color: white; padding: 10px 16px; border: none; border-radius: 4px; cursor: pointer; }
.report-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
.report-table th, .report-table td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
.report-table th { background: #1e3a8a; color: white; }`
      }
    ]
  },
  {
    num: 9,
    id: "task-9",
    title: "PHP State Management (Cookies & Sessions)",
    question: "Implement a secure session and cookie tracking system in PHP for a university portal login system. Store user preferences (such as theme and username) using HTTP Cookies, track authentication state and page visits using $_SESSION, enforce session timeout upon inactivity, and implement clean logout destruction.",
    aim: "To demonstrate state management across stateless HTTP connections using PHP Sessions and client-side Cookies.",
    tags: ["PHP", "Sessions", "Cookies", "State Management", "Authentication"],
    files: [
      {
        name: "login.php",
        type: "php",
        content: `<?php
// Task 9 - Login & Cookie Initialization
session_start();

$message = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = trim($_POST['username']);
    $pass = trim($_POST['password']);
    $theme = $_POST['theme'] ?? 'light';

    // Mock verification for university lab
    if ($user === "admin" && $pass === "admin123") {
        $_SESSION['authenticated'] = true;
        $_SESSION['username'] = $user;
        $_SESSION['login_time'] = time();
        $_SESSION['page_views'] = 1;

        // Persist theme preference in cookie for 7 days
        setcookie("user_theme", $theme, time() + (86400 * 7), "/");

        header("Location: dashboard.php");
        exit();
    } else {
        $message = "Invalid credentials. Use admin / admin123";
    }
}
$savedTheme = $_COOKIE['user_theme'] ?? 'light';
?>
<!DOCTYPE html>
<html>
<head>
    <title>Task 9 - Login & Session</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="<?php echo $savedTheme; ?>">
    <div class="card">
        <h2>Portal Login</h2>
        <?php if ($message): ?><p class="error"><?php echo $message; ?></p><?php endif; ?>
        <form method="POST">
            <label>Username:</label>
            <input type="text" name="username" value="admin" required>
            <label>Password:</label>
            <input type="password" name="password" value="admin123" required>
            <label>Theme Preference (Cookie):</label>
            <select name="theme">
                <option value="light" <?php if ($savedTheme == 'light') echo 'selected'; ?>>Light Theme</option>
                <option value="dark" <?php if ($savedTheme == 'dark') echo 'selected'; ?>>Dark Theme</option>
            </select>
            <button type="submit">Sign In</button>
        </form>
    </div>
</body>
</html>`
      },
      {
        name: "dashboard.php",
        type: "php",
        content: `<?php
session_start();

// Check authentication
if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
    header("Location: login.php");
    exit();
}

// Session timeout check (10 minutes)
$timeout = 600;
if (isset($_SESSION['login_time']) && (time() - $_SESSION['login_time'] > $timeout)) {
    session_unset();
    session_destroy();
    header("Location: login.php?msg=Session expired");
    exit();
}

$_SESSION['page_views']++;
$theme = $_COOKIE['user_theme'] ?? 'light';
?>
<!DOCTYPE html>
<html>
<head>
    <title>Task 9 - Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="<?php echo $theme; ?>">
    <div class="card">
        <h2>Welcome to Student Dashboard</h2>
        <p>User: <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong></p>
        <p>Session ID: <code><?php echo session_id(); ?></code></p>
        <p>Total Dashboard Views in this Session: <strong><?php echo $_SESSION['page_views']; ?></strong></p>
        <p>Active Theme Cookie: <strong><?php echo htmlspecialchars($theme); ?></strong></p>
        <br>
        <a href="dashboard.php" class="btn">Refresh View</a>
        <a href="logout.php" class="btn btn-danger">Log Out</a>
    </div>
</body>
</html>`
      },
      {
        name: "logout.php",
        type: "php",
        content: `<?php
session_start();
// Unset all session variables
$_SESSION = array();

// Destroy session cookie if present
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Destroy session
session_destroy();

header("Location: login.php?msg=Logged out successfully");
exit();
?>`
      },
      {
        name: "style.css",
        type: "css",
        content: `body { font-family: sans-serif; padding: 40px; transition: background 0.3s; }
body.light { background: #f8fafc; color: #1e293b; }
body.dark { background: #0f172a; color: #f8fafc; }
.card { max-width: 440px; margin: auto; padding: 24px; border-radius: 8px; border: 1px solid #cbd5e1; }
body.light .card { background: white; }
body.dark .card { background: #1e293b; border-color: #334155; }
label { display: block; margin: 10px 0 4px; font-weight: bold; }
input, select { width: 100%; padding: 8px; box-sizing: border-box; margin-bottom: 12px; }
button, .btn { display: inline-block; padding: 8px 14px; background: #2563eb; color: white; text-decoration: none; border: none; border-radius: 4px; cursor: pointer; }
.btn-danger { background: #ef4444; }
.error { color: #ef4444; }`
      }
    ]
  },
  {
    num: 10,
    id: "task-10",
    title: "PHP & MySQL Database CRUD Operations",
    question: "Develop a complete database-driven PHP application using the MySQLi extension to perform CRUD (Create, Read, Update, Delete) operations on a Student Records table (ID, Name, Roll No, Branch, CGPA). Display all active student records in an HTML table with action buttons for editing and deleting.",
    aim: "To connect PHP to a MySQL relational database using MySQLi, execute SQL queries (INSERT, SELECT, UPDATE, DELETE), and sanitize database operations.",
    tags: ["PHP", "MySQL", "MySQLi", "CRUD", "Database"],
    files: [
      {
        name: "schema.sql",
        type: "sql",
        content: `-- Task 10 Database Schema
CREATE DATABASE IF NOT EXISTS sl_lab_db;
USE sl_lab_db;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roll_no VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    branch VARCHAR(50) NOT NULL,
    cgpa DECIMAL(3,2) NOT NULL
);

INSERT INTO students (roll_no, name, branch, cgpa) VALUES
('23CS101', 'Ananya Deshmukh', 'CSE', 9.15),
('23IT102', 'Rohan Kulkarni', 'IT', 8.70),
('23AI103', 'Sneha Reddy', 'AI & DS', 9.35);`
      },
      {
        name: "db_connect.php",
        type: "php",
        content: `<?php
// Task 10 - Database Connection File
$host = "localhost";
$user = "root";
$pass = "";
$db   = "sl_lab_db";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Database Connection Error: " . mysqli_connect_error());
}
?>`
      },
      {
        name: "index.php",
        type: "php",
        content: `<?php
require_once 'db_connect.php';

// Handle Student Creation (CREATE)
$feedback = "";
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['action']) && $_POST['action'] == 'add') {
    $roll = mysqli_real_escape_string($conn, $_POST['roll_no']);
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $branch = mysqli_real_escape_string($conn, $_POST['branch']);
    $cgpa = floatval($_POST['cgpa']);

    $insertSql = "INSERT INTO students (roll_no, name, branch, cgpa) VALUES ('$roll', '$name', '$branch', $cgpa)";
    if (mysqli_query($conn, $insertSql)) {
        $feedback = "Student record added successfully!";
    } else {
        $feedback = "Error: " . mysqli_error($conn);
    }
}

// Handle Student Deletion (DELETE)
if (isset($_GET['delete'])) {
    $delId = intval($_GET['delete']);
    mysqli_query($conn, "DELETE FROM students WHERE id = $delId");
    header("Location: index.php");
    exit();
}

// Retrieve Records (READ)
$result = mysqli_query($conn, "SELECT * FROM students ORDER BY id DESC");
?>
<!DOCTYPE html>
<html>
<head>
    <title>Task 10 - Student Records (CRUD)</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f8fafc; padding: 25px; }
        .box { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
        th { background: #1e3a8a; color: white; }
        .form-row { display: flex; gap: 10px; margin-bottom: 10px; }
        .form-row input, .form-row select { flex: 1; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; }
        button { background: #16a34a; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }
        .del-link { color: #dc2626; text-decoration: none; font-weight: bold; }
    </style>
</head>
<body>
    <div class="box">
        <h2>Student Management System (PHP & MySQLi CRUD)</h2>
        <?php if ($feedback): ?><p style="color: green;"><?php echo $feedback; ?></p><?php endif; ?>

        <!-- Add Form -->
        <form method="POST">
            <input type="hidden" name="action" value="add">
            <div class="form-row">
                <input type="text" name="roll_no" placeholder="Roll No" required>
                <input type="text" name="name" placeholder="Full Name" required>
                <select name="branch" required>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="AI & DS">AI & DS</option>
                </select>
                <input type="number" step="0.01" name="cgpa" placeholder="CGPA (e.g. 8.5)" required>
                <button type="submit">Add Student</button>
            </div>
        </form>

        <!-- Records Table -->
        <table>
            <tr>
                <th>ID</th>
                <th>Roll No</th>
                <th>Name</th>
                <th>Branch</th>
                <th>CGPA</th>
                <th>Action</th>
            </tr>
            <?php while ($row = mysqli_fetch_assoc($result)): ?>
            <tr>
                <td><?php echo $row['id']; ?></td>
                <td><?php echo $row['roll_no']; ?></td>
                <td><?php echo $row['name']; ?></td>
                <td><?php echo $row['branch']; ?></td>
                <td><?php echo $row['cgpa']; ?></td>
                <td><a class="del-link" href="index.php?delete=<?php echo $row['id']; ?>" onclick="return confirm('Delete this record?')">Delete</a></td>
            </tr>
            <?php endwhile; ?>
        </table>
    </div>
</body>
</html>`
      }
    ]
  },
  {
    num: 11,
    id: "task-11",
    title: "PHP File Handling & Regular Expressions",
    question: "Create a PHP application to handle secure file uploads (validating MIME type, whitelisted extensions, and file size limits), store files in a designated server directory, append upload activity records into a text log file, and parse the log file using Perl-Compatible Regular Expressions (preg_match_all) to generate statistical metrics.",
    aim: "To implement robust server-side file uploads with validation, file I/O operations (fopen, fwrite), and regular expression log parsing in PHP.",
    tags: ["PHP", "File Upload", "PCRE Regex", "File I/O"],
    files: [
      {
        name: "upload.html",
        type: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 11 - Secure File Upload & Log Analyzer</title>
    <style>
        body { font-family: sans-serif; background: #f8fafc; padding: 30px; }
        .card { max-width: 500px; margin: auto; background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        .btn { background: #2563eb; color: white; padding: 10px 18px; border: none; border-radius: 4px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="card">
        <h2>Document Submission Portal</h2>
        <form action="upload.php" method="POST" enctype="multipart/form-data">
            <p><label>Select File (PDF, PNG, JPG, or TXT - max 2MB):</label></p>
            <p><input type="file" name="uploaded_file" required></p>
            <button type="submit" class="btn">Upload Document</button>
        </form>
    </div>
</body>
</html>`
      },
      {
        name: "upload.php",
        type: "php",
        content: `<?php
// Task 11 - File Upload & Log Audit with Regex Parsing
$targetDir = "uploads/";
if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

$logFile = "activity_log.txt";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["uploaded_file"])) {
    $file = $_FILES["uploaded_file"];
    $fileName = basename($file["name"]);
    $fileSize = $file["size"];
    $fileTmp  = $file["tmp_name"];
    $fileExt  = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    $allowedExts = ["pdf", "png", "jpg", "jpeg", "txt"];
    $maxSize = 2 * 1024 * 1024; // 2 MB

    $errors = [];

    if (!in_array($fileExt, $allowedExts)) {
        $errors[] = "Invalid file extension. Allowed: PDF, PNG, JPG, TXT.";
    }
    if ($fileSize > $maxSize) {
        $errors[] = "File size exceeds 2 MB limit.";
    }

    if (empty($errors)) {
        $cleanName = time() . "_" . preg_replace("/[^a-zA-Z0-9._-]/", "", $fileName);
        $destPath = $targetDir . $cleanName;

        if (move_uploaded_file($fileTmp, $destPath)) {
            // Write timestamped log entry using file_put_contents
            $logEntry = date("Y-m-d H:i:s") . " | IP:" . $_SERVER['REMOTE_ADDR'] . " | FILE:" . $cleanName . " | EXT:" . $fileExt . " | SIZE:" . $fileSize . "\\n";
            file_put_contents($logFile, $logEntry, FILE_APPEND);

            $status = "File uploaded successfully: " . htmlspecialchars($cleanName);
        } else {
            $errors[] = "Failed to move uploaded file.";
        }
    }
}

// Regex Analysis of Log File
$logContent = file_exists($logFile) ? file_get_contents($logFile) : "";
preg_match_all("/EXT:([a-z0-9]+)/i", $logContent, $matches);
$extensionCounts = !empty($matches[1]) ? array_count_values($matches[1]) : [];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Upload Status & Log Analysis</title>
    <style>
        body { font-family: sans-serif; background: #f8fafc; padding: 30px; }
        .card { max-width: 600px; margin: auto; background: white; padding: 25px; border-radius: 8px; }
        .log-box { background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 0.85rem; max-height: 150px; overflow-y: auto; }
    </style>
</head>
<body>
    <div class="card">
        <h2>Upload Status</h2>
        <?php if (!empty($errors)): ?>
            <ul style="color: red;"><?php foreach ($errors as $e) echo "<li>$e</li>"; ?></ul>
        <?php else: ?>
            <p style="color: green;"><?php echo $status ?? ""; ?></p>
        <?php endif; ?>

        <h3>Audit Log (Parsed via PCRE Regex)</h3>
        <p>File extensions detected in server logs:</p>
        <ul>
            <?php foreach ($extensionCounts as $ext => $count): ?>
                <li><strong>.<?php echo $ext; ?></strong>: <?php echo $count; ?> uploads</li>
            <?php endforeach; ?>
        </ul>

        <div class="log-box"><?php echo nl2br(htmlspecialchars($logContent)); ?></div>
        <p><a href="upload.html">&larr; Upload Another File</a></p>
    </div>
</body>
</html>`
      },
      {
        name: "activity_log.txt",
        type: "txt",
        content: `2026-11-14 10:15:22 | IP:127.0.0.1 | FILE:17000001_syllabus.pdf | EXT:pdf | SIZE:1048576
2026-11-14 11:20:45 | IP:127.0.0.1 | FILE:17000002_diagram.png | EXT:png | SIZE:423100
2026-11-14 14:05:10 | IP:127.0.0.1 | FILE:17000003_readme.txt | EXT:txt | SIZE:4096
2026-11-14 16:40:18 | IP:127.0.0.1 | FILE:17000004_photo.jpg | EXT:jpg | SIZE:845120`
      }
    ]
  }
];

// Write source code files to tasks/task1 through tasks/task11
tasksData.forEach(task => {
    const dir = path.join(tasksDir, `task${task.num}`);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    task.files.forEach(f => {
        fs.writeFileSync(path.join(dir, f.name), f.content, 'utf8');
    });
    console.log(`Populated task${task.num} files`);
});

console.log('Finished creating code files for task1 through task11.');
