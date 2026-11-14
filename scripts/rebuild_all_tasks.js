const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const tasksDir = path.join(rootDir, 'tasks');
const sourceProgramsDir = path.join(rootDir, 'Task progrms');

console.log('Rebuilding all task implementations based on original documents...');

// Ensure tasksDir exists
if (!fs.existsSync(tasksDir)) fs.mkdirSync(tasksDir, { recursive: true });

function copyDoc(srcRelative, destTaskFolder, destFileName) {
    const src = path.join(sourceProgramsDir, srcRelative);
    const destFolder = path.join(tasksDir, destTaskFolder);
    if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });
    const dest = path.join(destFolder, destFileName || path.basename(src));
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied doc: ${srcRelative} -> ${destTaskFolder}/${path.basename(dest)}`);
    } else {
        console.warn(`Source doc not found: ${src}`);
    }
}

// 1. Copy all original Word documents into their respective task folders
copyDoc('Task 1a/Task 1A material.doc', 'task1');
copyDoc('Task 1b/Task 1B material.docx', 'task1');
copyDoc('Task 2/task 2 material.docx', 'task2');
copyDoc('Task 3a/task 3A material.docx', 'task3');
copyDoc('Task 3b/Task 3B Material.docx', 'task3');
copyDoc('Task 4/Task 4 material.docx', 'task4');
copyDoc('Task 5/Task 5 material.docx', 'task5');
copyDoc('Task 6a/TASK 6.docx', 'task6');
copyDoc('Task 6a/Task 6A material.docx', 'task6');
copyDoc('Task 6b/Task 6B material.docx', 'task6');
copyDoc('Task 7a/TASK 7 SL program for record.docx', 'task7');
copyDoc('Task 8a/TASK 8 SL program for record.docx', 'task8');
copyDoc('Task 9/TASK 9 SL for record.docx', 'task9');
copyDoc('Task 10/TASK 10 SL for record.docx', 'task10');
copyDoc('Task 11/TASK 11 SL program for record.docx', 'task11');
copyDoc('Task 12/TASK 12 SL program for record.docx', 'task12');

// =========================================================================
// TASK 1: Experiment 1(a) Portfolio & Experiment 1(b) Class Time Table
// =========================================================================
const task1Dir = path.join(tasksDir, 'task1');

const t1_portfolio_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 1(a) - Personal Portfolio</title>
    <link rel="stylesheet" href="1a_style.css">
</head>
<body>
    <header>
        <div class="header-inner">
            <h1>Alex Developer</h1>
            <p class="tagline">Undergraduate Student • AI & Machine Learning</p>
            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    </header>

    <main class="main-content">
        <section id="about" class="card">
            <h2>About Me</h2>
            <p>
                Hello! I am a passionate web developer learning HTML, CSS, JavaScript, and PHP. 
                I enjoy engineering clean, functional, and distraction-free applications that prioritize performance and accessibility.
            </p>
        </section>

        <section id="skills" class="card">
            <h2>Technical Skills</h2>
            <ul class="skills-list">
                <li>HTML5 & Semantic Structure</li>
                <li>CSS3 (Flexbox, Grid, Responsive Design)</li>
                <li>Client-Side Scripting (Vanilla JavaScript, DOM Manipulation)</li>
                <li>Server Scripting (PHP & MySQL Database Systems)</li>
                <li>XML, DTD & XSLT Transformations</li>
            </ul>
        </section>

        <section id="projects" class="card">
            <h2>Projects</h2>
            <div class="project-grid">
                <div class="project-item">
                    <h3>Project One</h3>
                    <p>Dynamic Interactive Calculator built with JavaScript and DOM event handling.</p>
                </div>
                <div class="project-item">
                    <h3>Project Two</h3>
                    <p>AJAX Live Data Search application retrieving backend records asynchronously.</p>
                </div>
                <div class="project-item">
                    <h3>Project Three</h3>
                    <p>Database CRUD Portal engineered using PHP and MySQLi prepared statements.</p>
                </div>
            </div>
        </section>

        <section id="contact" class="card">
            <h2>Contact Me</h2>
            <!-- HTML Controls implemented here -->
            <form action="#" method="POST" class="contact-form">
                <div class="form-group">
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" placeholder="student@grietcollege.com" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" placeholder="Your message here..." required></textarea>
                </div>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Scripting Languages Laboratory. Experiment 1(a).</p>
    </footer>
</body>
</html>`;

const t1_portfolio_css = `/* Minimalist Monochrome Design */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    line-height: 1.6;
}
header {
    background-color: #0f172a;
    color: #f8fafc;
    padding: 30px 20px;
    border-bottom: 1px solid #334155;
    text-align: center;
}
.header-inner {
    max-width: 800px;
    margin: 0 auto;
}
h1 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}
.tagline {
    font-size: 0.9rem;
    color: #94a3b8;
    margin-top: 4px;
}
nav {
    margin-top: 15px;
}
nav a {
    color: #cbd5e1;
    text-decoration: none;
    margin: 0 12px;
    font-size: 0.9rem;
    font-weight: 500;
}
nav a:hover {
    color: #ffffff;
    text-decoration: underline;
}
.main-content {
    max-width: 800px;
    margin: 30px auto;
    padding: 0 16px;
}
.card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
}
h2 {
    font-size: 1.25rem;
    color: #0f172a;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;
}
.skills-list {
    list-style: square inside;
    color: #334155;
    font-size: 0.92rem;
    line-height: 1.8;
}
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
}
.project-item {
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 16px;
}
.project-item h3 {
    font-size: 0.98rem;
    margin-bottom: 6px;
    color: #0f172a;
}
.project-item p {
    font-size: 0.85rem;
    color: #475569;
}
.form-group {
    margin-bottom: 14px;
}
label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 4px;
    color: #334155;
}
input, textarea {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.9rem;
    font-family: inherit;
    background-color: #ffffff;
}
input:focus, textarea:focus {
    outline: none;
    border-color: #0f172a;
}
.btn {
    background: #0f172a;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
}
.btn:hover {
    background: #1e293b;
}
footer {
    text-align: center;
    padding: 24px 16px;
    font-size: 0.8rem;
    color: #64748b;
    border-top: 1px solid #e2e8f0;
    margin-top: 40px;
}`;

const t1_timetable_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 1(b) - Class Time Table</title>
    <link rel="stylesheet" href="1b_style.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Department of Computer Science & Engineering (AIML)</h1>
            <h3>Academic Class Time Table • Semester Schedule</h3>
        </header>

        <div class="table-wrapper">
            <table>
                <caption>Weekly Class Schedule</caption>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>09:00 - 10:00</th>
                        <th>10:00 - 11:00</th>
                        <th>11:00 - 12:00</th>
                        <th>12:00 - 01:00</th>
                        <th>01:00 - 02:00</th>
                        <th>02:00 - 03:00</th>
                        <th>03:00 - 04:00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="day-col">Monday</th>
                        <td>Mathematics</td>
                        <td>Python Programming</td>
                        <td>DBMS</td>
                        <td>English</td>
                        <td class="break-cell" rowspan="5">LUNCH BREAK</td>
                        <td>Artificial Intelligence</td>
                        <td>Library Session</td>
                    </tr>
                    <tr>
                        <th class="day-col">Tuesday</th>
                        <td>Python Programming</td>
                        <td>Mathematics</td>
                        <td>Artificial Intelligence</td>
                        <td>DBMS</td>
                        <td class="lab-cell" colspan="2">Python Programming Lab</td>
                    </tr>
                    <tr>
                        <th class="day-col">Wednesday</th>
                        <td>DBMS</td>
                        <td>English</td>
                        <td>Mathematics</td>
                        <td>Python Programming</td>
                        <td>Artificial Intelligence</td>
                        <td>Sports / Mentoring</td>
                    </tr>
                    <tr>
                        <th class="day-col">Thursday</th>
                        <td>Artificial Intelligence</td>
                        <td>DBMS</td>
                        <td>Python Programming</td>
                        <td>Mathematics</td>
                        <td class="lab-cell" colspan="2">DBMS & SQL Lab</td>
                    </tr>
                    <tr>
                        <th class="day-col">Friday</th>
                        <td>English</td>
                        <td>Artificial Intelligence</td>
                        <td>DBMS</td>
                        <td>Python Programming</td>
                        <td>Mathematics</td>
                        <td>Seminar / Technical Presentation</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="footnote">Note: Demonstrates HTML table structure, caption, th/td hierarchy, rowspan="5" for lunch break, and colspan="2" for 2-hour practical laboratories.</p>
    </div>
</body>
</html>`;

const t1_timetable_css = `body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    margin: 0;
    padding: 24px 16px;
}
.container {
    max-width: 960px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
}
.header {
    text-align: center;
    margin-bottom: 20px;
}
h1 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0f172a;
}
h3 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #475569;
    margin-top: 4px;
}
.table-wrapper {
    overflow-x: auto;
}
table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 0.88rem;
}
caption {
    font-size: 1rem;
    font-weight: 600;
    padding: 10px;
    caption-side: top;
    text-align: left;
    color: #0f172a;
}
th, td {
    border: 1px solid #cbd5e1;
    padding: 10px 8px;
    text-align: center;
}
thead th {
    background-color: #1e293b;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.82rem;
    letter-spacing: 0.2px;
}
.day-col {
    background-color: #f1f5f9;
    color: #0f172a;
    font-weight: 600;
}
tbody tr:nth-child(even) td:not(.break-cell):not(.lab-cell) {
    background-color: #f8fafc;
}
.break-cell {
    background-color: #e2e8f0;
    color: #334155;
    font-weight: 700;
    font-size: 0.78rem;
    letter-spacing: 1px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
}
.lab-cell {
    background-color: #e0e7ff;
    color: #3730a3;
    font-weight: 600;
}
.footnote {
    font-size: 0.78rem;
    color: #64748b;
    margin-top: 14px;
    text-align: center;
}`;

const t1_index_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 1 - HTML Controls & Table Structure</title>
    <style>
        body { font-family: -apple-system, sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 20px; }
        .wrapper { max-width: 1000px; margin: 0 auto; }
        .nav-tabs { display: flex; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid #334155; padding-bottom: 10px; }
        .tab-btn { background: #1e293b; color: #94a3b8; border: 1px solid #334155; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85rem; }
        .tab-btn.active { background: #f8fafc; color: #0f172a; border-color: #f8fafc; }
        iframe { width: 100%; height: 750px; border: 1px solid #334155; border-radius: 8px; background: #ffffff; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="nav-tabs">
            <button class="tab-btn active" onclick="loadFrame('1a_portfolio.html', this)">Experiment 1(a): Portfolio Profile</button>
            <button class="tab-btn" onclick="loadFrame('1b_timetable.html', this)">Experiment 1(b): Class Time Table</button>
        </div>
        <iframe id="previewFrame" src="1a_portfolio.html"></iframe>
    </div>
    <script>
        function loadFrame(url, btn) {
            document.getElementById('previewFrame').src = url;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(task1Dir, '1a_portfolio.html'), t1_portfolio_html, 'utf8');
fs.writeFileSync(path.join(task1Dir, '1a_style.css'), t1_portfolio_css, 'utf8');
fs.writeFileSync(path.join(task1Dir, '1b_timetable.html'), t1_timetable_html, 'utf8');
fs.writeFileSync(path.join(task1Dir, '1b_style.css'), t1_timetable_css, 'utf8');
fs.writeFileSync(path.join(task1Dir, 'index.html'), t1_index_html, 'utf8');
console.log('Populated Task 1 files');

// =========================================================================
// TASK 2: Experiment 2 - Registration Form Validation with JavaScript
// =========================================================================
const task2Dir = path.join(tasksDir, 'task2');

const t2_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 2 - Registration Form Validation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-container">
        <header>
            <h2>Student Registration Form</h2>
            <p>All fields are required. Client-side validation enabled via JavaScript.</p>
        </header>

        <form id="regForm" onsubmit="return validateForm(event)">
            
            <!-- First Name -->
            <div class="form-row">
                <label for="fname">First Name:</label>
                <div class="input-wrap">
                    <input type="text" id="fname" name="fname" placeholder="Enter first name">
                    <span id="fnameErr" class="error-msg"></span>
                </div>
            </div>

            <!-- Last Name -->
            <div class="form-row">
                <label for="lname">Last Name:</label>
                <div class="input-wrap">
                    <input type="text" id="lname" name="lname" placeholder="Enter last name">
                    <span id="lnameErr" class="error-msg"></span>
                </div>
            </div>

            <!-- Email Address -->
            <div class="form-row">
                <label for="email">Email Address:</label>
                <div class="input-wrap">
                    <input type="text" id="email" name="email" placeholder="student@example.com">
                    <span id="emailErr" class="error-msg"></span>
                </div>
            </div>

            <!-- User ID -->
            <div class="form-row">
                <label for="uid">User ID:</label>
                <div class="input-wrap">
                    <input type="text" id="uid" name="uid" placeholder="Enter unique user ID">
                    <span id="uidErr" class="error-msg"></span>
                </div>
            </div>

            <!-- Password -->
            <div class="form-row">
                <label for="pwd">Password:</label>
                <div class="input-wrap">
                    <input type="password" id="pwd" name="pwd" placeholder="Enter password">
                    <span id="pwdErr" class="error-msg"></span>
                </div>
            </div>

            <!-- Confirm Password -->
            <div class="form-row">
                <label for="cpwd">Confirm Password:</label>
                <div class="input-wrap">
                    <input type="password" id="cpwd" name="cpwd" placeholder="Re-enter password">
                    <span id="cpwdErr" class="error-msg"></span>
                </div>
            </div>

            <div class="form-actions">
                <button type="submit" class="submit-btn">Validate & Submit</button>
                <button type="reset" class="reset-btn" onclick="clearErrors()">Reset</button>
            </div>

            <div id="successMsg" class="success-banner">
                Validation Successful! All fields are valid and ready for submission.
            </div>
        </form>
    </div>

    <script src="validate.js"></script>
</body>
</html>`;

const t2_css = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: #f8fafc;
    color: #0f172a;
    padding: 40px 16px;
    display: flex;
    justify-content: center;
}
.form-container {
    width: 100%;
    max-width: 640px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
header {
    margin-bottom: 24px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 12px;
}
h2 {
    font-size: 1.25rem;
    font-weight: 700;
}
header p {
    font-size: 0.85rem;
    color: #64748b;
    margin-top: 4px;
}
.form-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}
@media (min-width: 540px) {
    .form-row {
        flex-direction: row;
        align-items: center;
    }
    label {
        width: 160px;
        flex-shrink: 0;
    }
    .input-wrap {
        flex-grow: 1;
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
label {
    font-size: 0.88rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 4px;
}
input {
    width: 100%;
    max-width: 240px;
    padding: 8px 10px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.9rem;
}
input:focus {
    outline: none;
    border-color: #0f172a;
}
.error-msg {
    color: #dc2626; /* Display error messages in red */
    font-size: 0.8rem;
    font-weight: 500;
    display: block;
}
.form-actions {
    margin-top: 24px;
    display: flex;
    gap: 10px;
}
.submit-btn {
    background-color: #0f172a;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 0.88rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
}
.submit-btn:hover {
    background-color: #1e293b;
}
.reset-btn {
    background-color: #e2e8f0;
    color: #334155;
    border: none;
    padding: 10px 18px;
    font-size: 0.88rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
}
.reset-btn:hover {
    background-color: #cbd5e1;
}
.success-banner {
    display: none;
    margin-top: 20px;
    padding: 12px;
    background-color: #f1f5f9;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    color: #0f172a;
    font-size: 0.88rem;
    font-weight: 600;
    text-align: center;
}`;

const t2_js = `// Experiment 2: Registration Form Validation
function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Elements
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const uid = document.getElementById('uid').value.trim();
    const pwd = document.getElementById('pwd').value;
    const cpwd = document.getElementById('cpwd').value;

    // Clear previous error messages
    clearErrors();

    // 1. First Name Validation
    if (fname === "") {
        document.getElementById('fnameErr').innerText = "First name is required.";
        isValid = false;
    }

    // 2. Last Name Validation
    if (lname === "") {
        document.getElementById('lnameErr').innerText = "Last name is required.";
        isValid = false;
    }

    // 3. Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById('emailErr').innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailErr').innerText = "Invalid email format.";
        isValid = false;
    }

    // 4. User ID Validation
    if (uid === "") {
        document.getElementById('uidErr').innerText = "User ID is required.";
        isValid = false;
    }

    // 5. Password Validation
    if (pwd === "") {
        document.getElementById('pwdErr').innerText = "Password is required.";
        isValid = false;
    }

    // 6. Confirm Password Validation
    if (cpwd === "") {
        document.getElementById('cpwdErr').innerText = "Confirm password is required.";
        isValid = false;
    } else if (pwd !== cpwd) {
        document.getElementById('cpwdErr').innerText = "Passwords do not match.";
        isValid = false;
    }

    // Display success
    if (isValid) {
        document.getElementById('successMsg').style.display = "block";
    }

    return isValid;
}

function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = "");
    document.getElementById('successMsg').style.display = "none";
}`;

fs.writeFileSync(path.join(task2Dir, 'index.html'), t2_html, 'utf8');
fs.writeFileSync(path.join(task2Dir, 'style.css'), t2_css, 'utf8');
fs.writeFileSync(path.join(task2Dir, 'validate.js'), t2_js, 'utf8');
console.log('Populated Task 2 files');

// =========================================================================
// TASK 3: Experiment 3(a) Multiplication Table & 3(b) Image Toggle
// =========================================================================
const task3Dir = path.join(tasksDir, 'task3');

const t3_mult_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 3(a) - Multiplication Table</title>
    <style>
        body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 30px; }
        .box { max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; }
        h2 { font-size: 1.25rem; margin-bottom: 12px; }
        .form-row { margin-bottom: 12px; }
        label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; }
        input[type="number"] { width: 100%; max-width: 220px; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; }
        button { background: #0f172a; color: white; border: none; padding: 9px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; margin-top: 8px; }
        button:hover { background: #1e293b; }
        #tableArea { margin-top: 20px; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.85rem; }
        th, td { border: 1px solid #cbd5e1; padding: 8px 10px; text-align: center; }
        th { background: #1e293b; color: white; }
        tr:nth-child(even) td { background: #f8fafc; }
        .error { color: #dc2626; font-size: 0.85rem; margin-top: 6px; }
    </style>
</head>
<body>
    <div class="box">
        <h2>Dynamic Multiplication Table Generator</h2>
        <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 16px;">Enter the number of rows and columns to generate the multiplication matrix dynamically.</p>
        
        <div class="form-row">
            <label for="numRows">Number of Rows:</label>
            <input type="number" id="numRows" min="1" max="50" placeholder="e.g. 10">
        </div>

        <div class="form-row">
            <label for="numCols">Number of Columns:</label>
            <input type="number" id="numCols" min="1" max="50" placeholder="e.g. 10">
        </div>

        <button onclick="generateTable()">Generate Table</button>
        <div id="errMsg" class="error"></div>

        <div id="tableArea"></div>
    </div>

    <script>
        function generateTable() {
            const rows = parseInt(document.getElementById('numRows').value);
            const cols = parseInt(document.getElementById('numCols').value);
            const err = document.getElementById('errMsg');
            const area = document.getElementById('tableArea');

            err.innerText = "";
            area.innerHTML = "";

            if (isNaN(rows) || isNaN(cols) || rows < 1 || cols < 1) {
                err.innerText = "Please enter valid positive integers for both rows and columns.";
                return;
            }

            let html = "<table><thead><tr><th>&times;</th>";
            for (let j = 1; j <= cols; j++) {
                html += "<th>" + j + "</th>";
            }
            html += "</tr></thead><tbody>";

            for (let i = 1; i <= rows; i++) {
                html += "<tr><th>" + i + "</th>";
                for (let j = 1; j <= cols; j++) {
                    html += "<td>" + (i * j) + "</td>";
                }
                html += "</tr>";
            }
            html += "</tbody></table>";

            area.innerHTML = html;
        }
    </script>
</body>
</html>`;

const t3_img_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 3(b) - Image Toggle Application</title>
    <style>
        body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 40px 16px; text-align: center; }
        .box { max-width: 440px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 28px; }
        h2 { font-size: 1.25rem; margin-bottom: 8px; }
        p { font-size: 0.85rem; color: #64748b; margin-bottom: 20px; }
        .img-frame { width: 200px; height: 200px; margin: 0 auto 20px; border-radius: 8px; border: 1px solid #cbd5e1; overflow: hidden; display: flex; align-items: center; justify-content: center; background: #0f172a; }
        .img-frame img { width: 100%; height: 100%; object-fit: cover; transition: opacity 0.2s ease; }
        .toggle-btn { background: #0f172a; color: white; border: none; padding: 10px 22px; font-size: 0.9rem; font-weight: 600; border-radius: 4px; cursor: pointer; }
        .toggle-btn:hover { background: #1e293b; }
        .status-badge { margin-top: 14px; font-size: 0.82rem; font-mono; color: #475569; }
    </style>
</head>
<body>
    <div class="box">
        <h2>Image Toggle Application</h2>
        <p>Click the button below to dynamically toggle between two local image assets.</p>

        <div class="img-frame">
            <img id="toggleImage" src="image1.png" alt="Toggle Target">
        </div>

        <button class="toggle-btn" onclick="toggleImage()">Toggle Image</button>

        <div class="status-badge" id="statusBadge">Current State: Image 1 (Slate Mode)</div>
    </div>

    <script>
        let currentImage = 1;
        function toggleImage() {
            const img = document.getElementById('toggleImage');
            const status = document.getElementById('statusBadge');
            if (currentImage === 1) {
                img.src = "image2.png";
                currentImage = 2;
                status.innerText = "Current State: Image 2 (Silver Mode)";
            } else {
                img.src = "image1.png";
                currentImage = 1;
                status.innerText = "Current State: Image 1 (Slate Mode)";
            }
        }
    </script>
</body>
</html>`;

const t3_index_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 3 - JavaScript Dynamic Table & Image Toggle</title>
    <style>
        body { font-family: -apple-system, sans-serif; background: #0f172a; color: #f8fafc; margin: 0; padding: 20px; }
        .wrapper { max-width: 900px; margin: 0 auto; }
        .nav-tabs { display: flex; gap: 10px; margin-bottom: 16px; border-bottom: 1px solid #334155; padding-bottom: 10px; }
        .tab-btn { background: #1e293b; color: #94a3b8; border: 1px solid #334155; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.85rem; }
        .tab-btn.active { background: #f8fafc; color: #0f172a; border-color: #f8fafc; }
        iframe { width: 100%; height: 600px; border: 1px solid #334155; border-radius: 8px; background: #ffffff; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="nav-tabs">
            <button class="tab-btn active" onclick="loadFrame('3a_multiplication.html', this)">Experiment 3(a): Multiplication Table</button>
            <button class="tab-btn" onclick="loadFrame('3b_imagetoggle.html', this)">Experiment 3(b): Image Toggle</button>
        </div>
        <iframe id="previewFrame" src="3a_multiplication.html"></iframe>
    </div>
    <script>
        function loadFrame(url, btn) {
            document.getElementById('previewFrame').src = url;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(task3Dir, '3a_multiplication.html'), t3_mult_html, 'utf8');
fs.writeFileSync(path.join(task3Dir, '3b_imagetoggle.html'), t3_img_html, 'utf8');
fs.writeFileSync(path.join(task3Dir, 'index.html'), t3_index_html, 'utf8');
console.log('Populated Task 3 files');

// =========================================================================
// TASK 4: Experiment 4 - To-Do List Application with DOM & CSS
// =========================================================================
const task4Dir = path.join(tasksDir, 'task4');

const t4_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 4 - To-Do List Application</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="todo-app">
        <header>
            <h2>Task Management To-Do List</h2>
            <p>Add, complete, and manage lab assignments with DOM manipulation.</p>
        </header>

        <div class="input-section">
            <input type="text" id="taskInput" placeholder="Enter a new task description..." onkeydown="if(event.key==='Enter') addTask()">
            <button class="add-btn" onclick="addTask()">Add Task</button>
        </div>

        <div class="todo-stats">
            <span id="taskCounter">0 tasks total</span>
            <button class="clear-all-btn" onclick="clearAllTasks()">Clear All</button>
        </div>

        <ul id="taskList" class="task-list"></ul>
    </div>

    <script src="todo.js"></script>
</body>
</html>`;

const t4_css = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: #f8fafc;
    color: #0f172a;
    padding: 40px 16px;
    display: flex;
    justify-content: center;
}
.todo-app {
    width: 100%;
    max-width: 480px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
header {
    margin-bottom: 20px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 12px;
}
h2 {
    font-size: 1.25rem;
    font-weight: 700;
}
header p {
    font-size: 0.85rem;
    color: #64748b;
    margin-top: 4px;
}
.input-section {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}
#taskInput {
    flex-grow: 1;
    padding: 9px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.9rem;
}
#taskInput:focus {
    outline: none;
    border-color: #0f172a;
}
.add-btn {
    background-color: #0f172a;
    color: #ffffff;
    border: none;
    padding: 9px 18px;
    font-size: 0.88rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
}
.add-btn:hover {
    background-color: #1e293b;
}
.todo-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f5f9;
}
.clear-all-btn {
    background: none;
    border: none;
    color: #dc2626;
    font-size: 0.78rem;
    cursor: pointer;
    font-weight: 500;
}
.clear-all-btn:hover {
    text-decoration: underline;
}
.task-list {
    list-style: none;
}
.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    margin-bottom: 8px;
    background: #ffffff;
    transition: background-color 0.15s ease;
}
.task-item:hover {
    background: #f8fafc;
}
.task-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
}
.task-checkbox {
    cursor: pointer;
    width: 16px;
    height: 16px;
}
.task-text {
    font-size: 0.9rem;
    color: #1e293b;
    word-break: break-all;
}
.task-item.completed .task-text {
    text-decoration: line-through;
    color: #94a3b8;
}
.delete-btn {
    background: none;
    border: none;
    color: #dc2626;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
}
.delete-btn:hover {
    background: #fee2e2;
}`;

const t4_js = `// Experiment 4: To-Do List Application
let tasks = [
    { text: "Complete Scripting Languages Lab Record", completed: false },
    { text: "Implement JQuery AJAX search program", completed: true },
    { text: "Verify XML DTD validation rules", completed: false }
];

function renderTasks() {
    const list = document.getElementById('taskList');
    const counter = document.getElementById('taskCounter');
    list.innerHTML = "";

    const completedCount = tasks.filter(t => t.completed).length;
    counter.innerText = \`\${completedCount} of \${tasks.length} tasks completed\`;

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = \`task-item \${task.completed ? 'completed' : ''}\`;

        const leftDiv = document.createElement('div');
        leftDiv.className = 'task-left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTask(index);

        const span = document.createElement('span');
        span.className = 'task-text';
        span.innerText = task.text;

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if (text === "") return;

    tasks.push({ text: text, completed: false });
    input.value = "";
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function clearAllTasks() {
    tasks = [];
    renderTasks();
}

document.addEventListener('DOMContentLoaded', renderTasks);`;

fs.writeFileSync(path.join(task4Dir, 'index.html'), t4_html, 'utf8');
fs.writeFileSync(path.join(task4Dir, 'style.css'), t4_css, 'utf8');
fs.writeFileSync(path.join(task4Dir, 'todo.js'), t4_js, 'utf8');
console.log('Populated Task 4 files');

// =========================================================================
// TASK 5: Experiment 5 - Item Billing System with PHP explode()
// =========================================================================
const task5Dir = path.join(tasksDir, 'task5');

const t5_php = `<?php
// Experiment 5: Item Billing System using explode()
// Accepts details of 5 different items via exactly 4 text boxes.

$billGenerated = false;
$items = [];
$grandTotal = 0;
$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $codesStr = trim($_POST['item_codes'] ?? '');
    $namesStr = trim($_POST['item_names'] ?? '');
    $unitsStr = trim($_POST['units_sold'] ?? '');
    $ratesStr = trim($_POST['rates'] ?? '');

    // Use explode() function to split comma-separated values into arrays
    $codes = array_map('trim', explode(',', $codesStr));
    $names = array_map('trim', explode(',', $namesStr));
    $units = array_map('trim', explode(',', $unitsStr));
    $rates = array_map('trim', explode(',', $ratesStr));

    if (count($codes) === 5 && count($names) === 5 && count($units) === 5 && count($rates) === 5) {
        $billGenerated = true;
        for ($i = 0; $i < 5; $i++) {
            $unitNum = floatval($units[$i]);
            $rateNum = floatval($rates[$i]);
            $amount = $unitNum * $rateNum;
            $grandTotal += $amount;

            $items[] = [
                'code' => htmlspecialchars($codes[$i]),
                'name' => htmlspecialchars($names[$i]),
                'units' => $unitNum,
                'rate' => $rateNum,
                'amount' => $amount
            ];
        }
    } else {
        $error = "Please provide exactly 5 comma-separated values in each of the 4 text boxes.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 5 - Item Billing System (PHP explode)</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Item Billing System</h2>
        <p class="subtitle">Enter comma-separated values for 5 items using only 4 text boxes.</p>

        <?php if ($error): ?>
            <div class="alert error"><?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST" action="bill.php">
            <div class="form-group">
                <label for="item_codes">1. Item Codes (5 comma-separated):</label>
                <input type="text" id="item_codes" name="item_codes" value="<?php echo htmlspecialchars($_POST['item_codes'] ?? '101, 102, 103, 104, 105'); ?>" required>
            </div>

            <div class="form-group">
                <label for="item_names">2. Item Names (5 comma-separated):</label>
                <input type="text" id="item_names" name="item_names" value="<?php echo htmlspecialchars($_POST['item_names'] ?? 'Notebook, Ball Pen, Pencil Box, Eraser, Ruler'); ?>" required>
            </div>

            <div class="form-group">
                <label for="units_sold">3. Units Sold (5 comma-separated):</label>
                <input type="text" id="units_sold" name="units_sold" value="<?php echo htmlspecialchars($_POST['units_sold'] ?? '5, 12, 4, 10, 3'); ?>" required>
            </div>

            <div class="form-group">
                <label for="rates">4. Rates per Unit (5 comma-separated):</label>
                <input type="text" id="rates" name="rates" value="<?php echo htmlspecialchars($_POST['rates'] ?? '40, 10, 25, 5, 15'); ?>" required>
            </div>

            <button type="submit" class="btn">Generate Bill</button>
        </form>

        <?php if ($billGenerated): ?>
            <div class="bill-output">
                <h3>Invoice / Billing Summary</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Item Name</th>
                            <th>Units Sold</th>
                            <th>Rate (INR)</th>
                            <th>Amount (INR)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($items as $item): ?>
                        <tr>
                            <td><?php echo $item['code']; ?></td>
                            <td><?php echo $item['name']; ?></td>
                            <td><?php echo $item['units']; ?></td>
                            <td><?php echo number_format($item['rate'], 2); ?></td>
                            <td><?php echo number_format($item['amount'], 2); ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr class="total-row">
                            <td colspan="4">Grand Total</td>
                            <td><strong>INR <?php echo number_format($grandTotal, 2); ?></strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>`;

const t5_css = `body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background-color: #f8fafc;
    color: #0f172a;
    padding: 30px 16px;
}
.container {
    max-width: 680px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 26px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
h2 {
    font-size: 1.25rem;
    font-weight: 700;
}
.subtitle {
    font-size: 0.85rem;
    color: #64748b;
    margin-top: 4px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 10px;
}
.form-group {
    margin-bottom: 14px;
}
label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 4px;
}
input[type="text"] {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 0.9rem;
}
input:focus {
    outline: none;
    border-color: #0f172a;
}
.btn {
    background: #0f172a;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 0.88rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
}
.btn:hover {
    background: #1e293b;
}
.alert {
    padding: 10px;
    border-radius: 4px;
    font-size: 0.85rem;
    margin-bottom: 16px;
}
.alert.error {
    background: #fee2e2;
    color: #dc2626;
    border: 1px solid #fecaca;
}
.bill-output {
    margin-top: 28px;
    border-top: 1px solid #e2e8f0;
    padding-top: 16px;
}
.bill-output h3 {
    font-size: 1.05rem;
    margin-bottom: 12px;
}
table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.85rem;
}
th, td {
    border: 1px solid #cbd5e1;
    padding: 8px 10px;
    text-align: center;
}
th {
    background-color: #1e293b;
    color: #ffffff;
}
.total-row {
    font-weight: 700;
    background-color: #f1f5f9;
}
.total-row td:first-child {
    text-align: right;
    padding-right: 14px;
}`;

fs.writeFileSync(path.join(task5Dir, 'bill.php'), t5_php, 'utf8');
fs.writeFileSync(path.join(task5Dir, 'index.html'), t5_php.replace(/<\?php[\s\S]*?\?>/g, ''), 'utf8'); // safe static preview
fs.writeFileSync(path.join(task5Dir, 'style.css'), t5_css, 'utf8');
console.log('Populated Task 5 files');

// =========================================================================
// TASK 6: Experiment 6(a) Login Session Timeout & 6(b) Cookies Script
// =========================================================================
const task6Dir = path.join(tasksDir, 'task6');

const t6_login_php = `<?php
// Experiment 6(a): Login form with username & password
session_start();

$error = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    // Credentials check
    if ($username === "admin" && $password === "password123") {
        $_SESSION['user'] = $username;
        $_SESSION['last_activity'] = time(); // Record initial timestamp
        header("Location: 6a_details.php");
        exit();
    } else {
        $error = "Invalid username or password. (Hint: admin / password123)";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 6(a) - Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h2>User Login Portal</h2>
        <p class="subtitle">Enter credentials to proceed to the User Details Form.</p>

        <?php if (isset($_GET['warning'])): ?>
            <div class="alert warning"><?php echo htmlspecialchars($_GET['warning']); ?></div>
        <?php endif; ?>

        <?php if ($error): ?>
            <div class="alert error"><?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" value="admin" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" value="password123" required>
            </div>
            <button type="submit" class="btn">Login</button>
        </form>
    </div>
</body>
</html>`;

const t6_details_php = `<?php
// Experiment 6(a): Second form - Accept user details with 60-second inactivity session timeout
session_start();

$timeout = 60; // 60 seconds session timeout limit

if (!isset($_SESSION['user'])) {
    header("Location: 6a_login.php?warning=Please login first.");
    exit();
}

// Check inactivity
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $timeout)) {
    session_unset();
    session_destroy();
    header("Location: 6a_login.php?warning=Session expired due to inactivity. Please log in again.");
    exit();
}

// Update last activity timestamp on any user action
$_SESSION['last_activity'] = time();

$message = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $city = htmlspecialchars($_POST['city'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $message = "User details successfully recorded: Name: $name, City: $city, Phone: $phone";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 6(a) - User Details Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h2>User Details Form</h2>
        <p class="subtitle">Logged in as: <strong><?php echo htmlspecialchars($_SESSION['user']); ?></strong> (Session active - 60s timeout)</p>

        <?php if ($message): ?>
            <div class="alert success"><?php echo $message; ?></div>
        <?php endif; ?>

        <form method="POST">
            <div class="form-group">
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter name" required>
            </div>
            <div class="form-group">
                <label for="city">City:</label>
                <input type="text" id="city" name="city" placeholder="Enter city" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" placeholder="Enter phone number" required>
            </div>
            <button type="submit" class="btn">Submit Details</button>
            <a href="6a_login.php" class="btn btn-secondary">Logout</a>
        </form>
    </div>
</body>
</html>`;

const t6_cookies_php = `<?php
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
</html>`;

const t6_css = `body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: #f8fafc;
    color: #0f172a;
    padding: 30px 16px;
}
.box {
    max-width: 500px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
}
h2 { font-size: 1.25rem; font-weight: 700; }
.subtitle { font-size: 0.85rem; color: #64748b; margin-top: 4px; margin-bottom: 18px; }
.form-group { margin-bottom: 14px; }
label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; color: #334155; }
input { width: 100%; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 0.9rem; }
input:focus { outline: none; border-color: #0f172a; }
.btn { background: #0f172a; color: white; border: none; padding: 9px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; }
.btn-secondary { background: #475569; }
.btn-danger { background: #dc2626; }
.btn-group { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.alert { padding: 10px; border-radius: 4px; font-size: 0.85rem; margin-bottom: 14px; }
.alert.warning { background: #fef3c7; color: #b45309; border: 1px solid #fde68a; }
.alert.error { background: #fee2e2; color: #dc2626; border: 1px solid #fecaca; }
.alert.success { background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; }
.alert.info { background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; }`;

const t6_index_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 6 - State Management (Sessions & Cookies)</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h2>Task 6: PHP Sessions & Cookies</h2>
        <p class="subtitle">Choose an experiment module to test:</p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <a href="6a_login.php" class="btn">Experiment 6(a): Login & 60s Session Timeout</a>
            <a href="6b_cookies.php" class="btn btn-secondary">Experiment 6(b): Cookie Store, Retrieve & Delete</a>
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(task6Dir, '6a_login.php'), t6_login_php, 'utf8');
fs.writeFileSync(path.join(task6Dir, '6a_details.php'), t6_details_php, 'utf8');
fs.writeFileSync(path.join(task6Dir, '6b_cookies.php'), t6_cookies_php, 'utf8');
fs.writeFileSync(path.join(task6Dir, 'style.css'), t6_css, 'utf8');
fs.writeFileSync(path.join(task6Dir, 'index.html'), t6_index_html, 'utf8');
console.log('Populated Task 6 files');

// =========================================================================
// TASK 7: Experiment 7(a) Create DB/Table & 7(b) User Registration
// =========================================================================
const task7Dir = path.join(tasksDir, 'task7');

const t7_createdb_php = `<?php
// Experiment 7(a): Organize database table with user information
// Step 1: Connect to MySQL server
$conn = new mysqli("localhost", "root", "");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "MySQL connection successful!<br><br>";

// Step 2: Create database userdatabasenew
$sql = "CREATE DATABASE IF NOT EXISTS userdatabasenew";
if ($conn->query($sql) === TRUE) {
    echo "Database 'userdatabasenew' created successfully!<br><br>";
} else {
    die("Database creation failed: " . $conn->error);
}

// Step 3: Select database
$conn->select_db("userdatabasenew");

// Step 4: Create table users
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table 'users' created successfully!<br>";
} else {
    echo "Table creation failed: " . $conn->error;
}

$conn->close();
?>`;

const t7_register_php = `<?php
// Experiment 7(b): Design registration page and insert data into created database table
$conn = new mysqli("localhost", "root", "", "userdatabasenew");

$status = "";

if ($conn->connect_error) {
    $status = "Database Connection failed: " . $conn->connect_error;
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['register'])) {
    $username = trim($_POST['username'] ?? '');
    $password = password_hash($_POST['password'] ?? '', PASSWORD_DEFAULT);
    $email = trim($_POST['email'] ?? '');

    $sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $password, $email);

    if ($stmt->execute()) {
        $status = "Registration successful for user: " . htmlspecialchars($username);
    } else {
        $status = "Registration failed: " . $stmt->error;
    }
    $stmt->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 7(b) - User Registration</title>
    <style>
        body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 30px; }
        .box { max-width: 440px; margin: auto; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 24px; }
        label { display: block; font-weight: 600; margin: 10px 0 4px; font-size: 0.85rem; }
        input { width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #cbd5e1; border-radius: 4px; }
        button { background: #0f172a; color: white; border: none; padding: 10px 18px; border-radius: 4px; font-weight: 600; cursor: pointer; margin-top: 14px; }
        .alert { padding: 10px; margin-bottom: 12px; border-radius: 4px; font-size: 0.85rem; background: #f1f5f9; border: 1px solid #cbd5e1; }
    </style>
</head>
<body>
    <div class="box">
        <h2>User Registration</h2>
        <?php if ($status): ?><div class="alert"><?php echo $status; ?></div><?php endif; ?>
        <form method="POST">
            <label>Username:</label>
            <input type="text" name="username" required>
            <label>Password:</label>
            <input type="password" name="password" required>
            <label>Email ID:</label>
            <input type="email" name="email" required>
            <button type="submit" name="register">Register User</button>
        </form>
    </div>
</body>
</html>`;

const t7_sql = `-- Task 7 Database Schema
CREATE DATABASE IF NOT EXISTS userdatabasenew;
USE userdatabasenew;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);`;

fs.writeFileSync(path.join(task7Dir, '7a_create_db.php'), t7_createdb_php, 'utf8');
fs.writeFileSync(path.join(task7Dir, '7b_register.php'), t7_register_php, 'utf8');
fs.writeFileSync(path.join(task7Dir, 'db_schema.sql'), t7_sql, 'utf8');
fs.writeFileSync(path.join(task7Dir, 'index.html'), t7_register_php.replace(/<\?php[\s\S]*?\?>/g, ''), 'utf8');
console.log('Populated Task 7 files');

// =========================================================================
// TASK 8: Experiment 8(a) Update User & 8(b) Delete User in PHP
// =========================================================================
const task8Dir = path.join(tasksDir, 'task8');

// Copy existing Task 8a.php and Task 8b.php
copyDoc('Task 8a/Task 8a.php', 'task8', 'Task 8a.php');
copyDoc('Task 8b/Task 8b.php', 'task8', 'Task 8b.php');

const t8_index_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 8 - Database Update & Delete</title>
    <style>
        body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 30px; }
        .box { max-width: 520px; margin: auto; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 24px; }
        h2 { font-size: 1.25rem; }
        p { font-size: 0.85rem; color: #64748b; margin-bottom: 16px; }
        .btn { display: inline-block; padding: 10px 18px; background: #0f172a; color: white; text-decoration: none; border-radius: 4px; font-size: 0.85rem; font-weight: 600; margin-right: 8px; }
        .btn-danger { background: #dc2626; }
    </style>
</head>
<body>
    <div class="box">
        <h2>Task 8: User Record Management</h2>
        <p>Choose an action to perform on database table 'userdatabasenew.users':</p>
        <a href="Task 8a.php" class="btn">Experiment 8(a): Update User Record</a>
        <a href="Task 8b.php" class="btn btn-danger">Experiment 8(b): Delete User Record</a>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(task8Dir, 'index.html'), t8_index_html, 'utf8');
console.log('Populated Task 8 files');

// =========================================================================
// TASK 9: Experiment 9 - XML Motorbike Catalog with DTD, XSLT & CSS
// =========================================================================
const task9Dir = path.join(tasksDir, 'task9');

copyDoc('Task 9/m.xml', 'task9', 'm.xml');
copyDoc('Task 9/motorbike_catalog.dtd', 'task9', 'motorbike_catalog.dtd');
copyDoc('Task 9/motorbike_catalog.xsl', 'task9', 'motorbike_catalog.xsl');
copyDoc('Task 9/style.css', 'task9', 'style.css');

const t9_index_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 9 - Motorbike Catalog (XML, DTD & XSLT)</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Four Stroke Motorbike Catalog</h2>
    <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 16px;">Transformed from XML using XSLT and CSS with GREY header and bold capitalized columns.</p>
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
            <th>ACCESSORIES</th>
        </tr>
        <tr>
            <td>Honda</td>
            <td>CBR500R</td>
            <td>2023</td>
            <td>Red</td>
            <td>EN123456</td>
            <td>2</td>
            <td>Petrol</td>
            <td>CH123456789</td>
            <td>Disc Brake: yes, Auto-Start: yes, Radio: no</td>
        </tr>
        <tr>
            <td>Yamaha</td>
            <td>YZF-R3</td>
            <td>2022</td>
            <td>Blue</td>
            <td>EN654321</td>
            <td>2</td>
            <td>Petrol</td>
            <td>CH987654321</td>
            <td>Disc Brake: yes, Auto-Start: yes, Radio: yes</td>
        </tr>
        <tr>
            <td>Kawasaki</td>
            <td>Ninja 400</td>
            <td>2024</td>
            <td>Green</td>
            <td>EN789012</td>
            <td>2</td>
            <td>Petrol</td>
            <td>CH456789123</td>
            <td>Disc Brake: yes, Auto-Start: yes, Radio: no</td>
        </tr>
    </table>
</body>
</html>`;

fs.writeFileSync(path.join(task9Dir, 'index.html'), t9_index_html, 'utf8');
console.log('Populated Task 9 files');

// =========================================================================
// TASK 10: Experiment 10 - jQuery AJAX Date-Time Request
// =========================================================================
const task10Dir = path.join(tasksDir, 'task10');

copyDoc('Task 10/Task 10.html', 'task10', 'Task 10.html');
copyDoc('Task 10/date-time.php', 'task10', 'date-time.php');

const t10_index_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 10 - jQuery AJAX Date & Time</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 40px; text-align: center; }
        .box { max-width: 440px; margin: auto; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 26px; }
        h2 { font-size: 1.25rem; margin-bottom: 8px; }
        p { font-size: 0.85rem; color: #64748b; margin-bottom: 18px; }
        button { background: #0f172a; color: white; border: none; padding: 10px 20px; font-weight: 600; border-radius: 4px; cursor: pointer; }
        button:hover { background: #1e293b; }
        #result { margin-top: 20px; padding: 12px; font-size: 0.95rem; font-weight: 600; color: #047857; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 4px; min-height: 24px; }
    </style>
</head>
<body>
    <div class="box">
        <h2>jQuery AJAX HTTP GET Request</h2>
        <p>Click below to request current server date and time via AJAX.</p>

        <button id="btn">Get Server Date & Time</button>

        <div id="result">Waiting for request...</div>
    </div>

    <script>
        $(document).ready(function() {
            $("#btn").click(function() {
                $.get("date-time.php", function(data) {
                    $("#result").html(data);
                }).fail(function() {
                    // Client-side fallback if running statically without PHP server
                    const now = new Date();
                    $("#result").html("Current Date & Time: " + now.toLocaleString() + " (Client Render)");
                });
            });
        });
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(task10Dir, 'index.html'), t10_index_html, 'utf8');
console.log('Populated Task 10 files');

// =========================================================================
// TASK 11: Experiment 11 - jQuery AJAX Live Name Suggestion
// =========================================================================
const task11Dir = path.join(tasksDir, 'task11');

copyDoc('Task 11/Task 11.html', 'task11', 'Task 11.html');
copyDoc('Task 11/search.php', 'task11', 'search.php');

const t11_index_html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 11 - Live Name Suggestions (jQuery AJAX)</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body { font-family: -apple-system, sans-serif; background: #f8fafc; color: #0f172a; padding: 40px; text-align: center; }
        .box { max-width: 460px; margin: auto; background: white; border: 1px solid #cbd5e1; border-radius: 8px; padding: 26px; }
        h2 { font-size: 1.25rem; margin-bottom: 8px; }
        p { font-size: 0.85rem; color: #64748b; margin-bottom: 18px; }
        input { width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 0.95rem; }
        input:focus { outline: none; border-color: #0f172a; }
        #suggestions { margin-top: 16px; text-align: left; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 10px; font-size: 0.9rem; min-height: 40px; }
    </style>
</head>
<body>
    <div class="box">
        <h2>Live Name Suggestion</h2>
        <p>Type a character to retrieve matching suggested names via AJAX.</p>

        <input type="text" id="searchBox" placeholder="Start typing a name (e.g. A, B, C)...">

        <div id="suggestions">Type a character above to search.</div>
    </div>

    <script>
        const sampleNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah", "Ian", "Jack", "Kavya", "Liam", "Manoj", "Nina", "Oliver", "Priya", "Rahul", "Sneha", "Tarun", "Vikram"];

        $(document).ready(function() {
            $("#searchBox").keyup(function() {
                var query = $(this).val().trim();
                if (query === "") {
                    $("#suggestions").html("Type a character above to search.");
                    return;
                }

                $.get("search.php", { query: query }, function(data) {
                    $("#suggestions").html(data);
                }).fail(function() {
                    // Client fallback if opened statically without PHP server
                    var matches = sampleNames.filter(function(name) {
                        return name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
                    });
                    if (matches.length > 0) {
                        $("#suggestions").html("<strong>Suggestions:</strong> " + matches.join(", "));
                    } else {
                        $("#suggestions").html("<em>No suggestions found</em>");
                    }
                });
            });
        });
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(task11Dir, 'index.html'), t11_index_html, 'utf8');
console.log('Populated Task 11 files');

// =========================================================================
// TASK 12: Experiment 12 - AJAX Database Retrieval
// =========================================================================
const task12Dir = path.join(tasksDir, 'task12');

copyDoc('Task 12/TASK 12 SL program for record.docx', 'task12');
copyDoc('Task 12/Task 12 .html', 'task12');
copyDoc('Task 12/Task 12(getuser).php', 'task12');

console.log('All 12 tasks populated successfully!');
