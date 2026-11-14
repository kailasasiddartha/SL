const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const tasksDir = path.join(rootDir, 'tasks');
const tempMediaDir = path.join(rootDir, 'temp_media');

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
}

function safeCopy(src, dest) {
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
    } else {
        console.warn(`Source missing: ${src}`);
    }
}

function safeUnlink(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Removed: ${path.relative(rootDir, filePath)}`);
    }
}

console.log('=== Step 1: Copy output screenshots into each task ===');

// Mapping output screenshots
const outputMap = {
    'task1a': path.join(tempMediaDir, 'task1a_extracted_0.png'),
    'task1b': path.join(tempMediaDir, 'task1b_output.png'),
    'task2':  path.join(tempMediaDir, 'task2_output.png'),
    'task3a': path.join(tempMediaDir, 'Task 3a_image2.png'),
    'task3b': path.join(tempMediaDir, 'task3b_output.png'),
    'task4':  path.join(tempMediaDir, 'Task 4_image2.jpeg'),
    'task5':  path.join(tempMediaDir, 'Task 5_image2.jpeg'),
    'task6a': path.join(tempMediaDir, 'Task 6a_image5.png'),
    'task6b': path.join(tempMediaDir, 'Task 6b_image2.jpeg'),
    'task7a': path.join(tempMediaDir, 'Task 7a_image1.png'),
    'task7b': path.join(tempMediaDir, 'Task 7b_image2.png'),
    'task8a': path.join(tempMediaDir, 'Task 8a_image1.png'),
    'task8b': path.join(tempMediaDir, 'Task 8b_image5.png'),
    'task9':  path.join(tempMediaDir, 'Task 9_image1.png'),
    'task10': path.join(tempMediaDir, 'Task 10_image1.png'),
    'task11': path.join(tempMediaDir, 'Task 11_image2.png')
    // task12 already has output_screenshot1.png ... 4.png
};

Object.entries(outputMap).forEach(([task, src]) => {
    const ext = path.extname(src);
    const dest = path.join(tasksDir, task, `output_screenshot${ext}`);
    safeCopy(src, dest);
    console.log(`Copied output screenshot -> tasks/${task}/output_screenshot${ext}`);
});

console.log('\n=== Step 2: Remove duplicate, redundant, and extra dummy files ===');

// Task 1A: keep index.html, style.css, Task 1A material.doc, output_screenshot.png
safeUnlink(path.join(tasksDir, 'task1a', '1a_portfolio.html'));
safeUnlink(path.join(tasksDir, 'task1a', '1a_style.css'));
// Ensure index.html links to style.css
const t1aIndex = path.join(tasksDir, 'task1a', 'index.html');
if (fs.existsSync(t1aIndex)) {
    let content = fs.readFileSync(t1aIndex, 'utf8');
    content = content.replace('1a_style.css', 'style.css');
    fs.writeFileSync(t1aIndex, content, 'utf8');
}
safeCopy(path.join(tasksDir, 'task1', '1a_style.css'), path.join(tasksDir, 'task1a', 'style.css'));

// Task 1B: keep index.html, style.css, Task 1B material.docx, output_screenshot.png
safeUnlink(path.join(tasksDir, 'task1b', '1b_timetable.html'));
safeUnlink(path.join(tasksDir, 'task1b', '1b_style.css'));
const t1bIndex = path.join(tasksDir, 'task1b', 'index.html');
if (fs.existsSync(t1bIndex)) {
    let content = fs.readFileSync(t1bIndex, 'utf8');
    content = content.replace('1b_style.css', 'style.css');
    fs.writeFileSync(t1bIndex, content, 'utf8');
}
safeCopy(path.join(tasksDir, 'task1', '1b_style.css'), path.join(tasksDir, 'task1b', 'style.css'));

// Task 3A: remove 3a_multiplication.html (index.html is identical)
safeUnlink(path.join(tasksDir, 'task3a', '3a_multiplication.html'));

// Task 3B: remove 3b_imagetoggle.html (index.html is identical)
safeUnlink(path.join(tasksDir, 'task3b', '3b_imagetoggle.html'));

// Task 6A: remove dummy index.html and redundant TASK 6.docx (Task 6A material.docx is the specific one)
safeUnlink(path.join(tasksDir, 'task6a', 'index.html'));
safeUnlink(path.join(tasksDir, 'task6a', 'TASK 6.docx'));

// Task 6B: remove dummy index.html
safeUnlink(path.join(tasksDir, 'task6b', 'index.html'));

// Task 7A: remove dummy index.html
safeUnlink(path.join(tasksDir, 'task7a', 'index.html'));

// Task 7B: remove dummy index.html
safeUnlink(path.join(tasksDir, 'task7b', 'index.html'));

// Task 8A: remove dummy index.html
safeUnlink(path.join(tasksDir, 'task8a', 'index.html'));

// Task 8B: remove dummy index.html
safeUnlink(path.join(tasksDir, 'task8b', 'index.html'));

// Task 9: remove dummy index.html
safeUnlink(path.join(tasksDir, 'task9', 'index.html'));

// Task 10: remove index.html (Task 10.html is the real university file)
safeUnlink(path.join(tasksDir, 'task10', 'index.html'));

// Task 11: remove index.html (Task 11.html is the real university file)
safeUnlink(path.join(tasksDir, 'task11', 'index.html'));

// Task 12: remove Task 12 .html (task12.html is clean) and Task 12(getuser).php (getuser.php is clean)
safeUnlink(path.join(tasksDir, 'task12', 'Task 12 .html'));
safeUnlink(path.join(tasksDir, 'task12', 'Task 12(getuser).php'));

console.log('\n=== Step 3: Re-compress all task zip files ===');

const allTaskNames = [
    'task1a', 'task1b', 'task2', 'task3a', 'task3b',
    'task4', 'task5', 'task6a', 'task6b', 'task7a',
    'task7b', 'task8a', 'task8b', 'task9', 'task10', 'task11', 'task12'
];

allTaskNames.forEach(tName => {
    const folderPath = path.join(tasksDir, tName);
    const zipPath = path.join(tasksDir, `${tName}.zip`);
    if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
    console.log(`Re-zipping ${tName} -> ${tName}.zip ...`);
    execSync(`powershell -NoProfile -Command "$ProgressPreference = 'SilentlyContinue'; Compress-Archive -Path '${folderPath}\\*' -DestinationPath '${zipPath}' -Force"`);
});

console.log('\n=== Step 4: Re-generate data.json and data.js ===');

const tasks17Meta = [
  {
    taskNumber: "1A",
    id: "task-1a",
    folder: "task1a",
    zipName: "task1a.zip",
    title: "Personal Portfolio Profile (HTML Controls & CSS)",
    question: "Experiment 1(a): Develop a website displaying your basic portfolio profile using HTML Controls. Implement CSS to design the page.",
    aim: "To design and develop a personal portfolio webpage showcasing profile information, education, skills, and projects using HTML controls and modern CSS styling.",
    tags: ["HTML5", "CSS3", "Portfolio", "HTML Controls", "Web Design"]
  },
  {
    taskNumber: "1B",
    id: "task-1b",
    folder: "task1b",
    zipName: "task1b.zip",
    title: "Class Time Table (HTML Table)",
    question: "Experiment 1(b): Design a web page to display the class time table using HTML.",
    aim: "To design and develop a structured academic class timetable webpage using HTML table elements, rowspan, colspan, and CSS styling.",
    tags: ["HTML5", "CSS3", "Table", "Time Table", "Rowspan", "Colspan"]
  },
  {
    taskNumber: "2",
    id: "task-2",
    folder: "task2",
    zipName: "task2.zip",
    title: "Registration Form Validation with JavaScript",
    question: "Experiment 2: Create a sample form program that collects the first name, last name, email, user id, password and confirms password. Validate all fields using JavaScript, check the email format, and display error messages in red next to the corresponding textboxes.",
    aim: "To design an HTML registration form and validate all input fields using JavaScript, verifying required fields, email format, and password confirmation.",
    tags: ["JavaScript", "Validation", "Forms", "DOM", "RegEx"]
  },
  {
    taskNumber: "3A",
    id: "task-3a",
    folder: "task3a",
    zipName: "task3a.zip",
    title: "Dynamic Multiplication Table (JavaScript)",
    question: "Experiment 3(a): Design a simple multiplication table using JavaScript by asking the user for the number of rows and columns.",
    aim: "To dynamically generate mathematical multiplication tables using JavaScript nested loops, user prompts, and dynamic DOM table rendering.",
    tags: ["JavaScript", "Loops", "DOM Manipulation", "Multiplication Table"]
  },
  {
    taskNumber: "3B",
    id: "task-3b",
    folder: "task3b",
    zipName: "task3b.zip",
    title: "Interactive Image Toggle Webpage (JavaScript)",
    question: "Experiment 3(b): Design and develop an Image Toggle Webpage using JavaScript that toggles between two different images upon button click.",
    aim: "To implement interactive image state swapping using JavaScript DOM manipulation, conditional src attributes, and event handlers.",
    tags: ["JavaScript", "Events", "Image Toggle", "DOM Manipulation"]
  },
  {
    taskNumber: "4",
    id: "task-4",
    folder: "task4",
    zipName: "task4.zip",
    title: "To-Do List Application with DOM & CSS",
    question: "Experiment 4: Develop a responsive To-Do List web application using HTML, CSS, and JavaScript. Allow users to add tasks, toggle completion status, delete individual items, and clear completed tasks.",
    aim: "To construct an interactive To-Do application demonstrating JavaScript event handling, dynamic element creation, class toggling, and array operations.",
    tags: ["JavaScript", "DOM", "CSS3", "Events", "Interactive UI"]
  },
  {
    taskNumber: "5",
    id: "task-5",
    folder: "task5",
    zipName: "task5.zip",
    title: "Item Billing System (PHP explode function)",
    question: "Experiment 5: Design a billing form for a supermarket using PHP. Accept item codes, names, prices, and quantities separated by commas or special characters, parse them using PHP explode(), calculate subtotal, tax, discounts, and final bill amount, and format the output in a clean table.",
    aim: "To process delimited form input data using PHP explode(), perform numerical calculations, and output a dynamic itemized invoice table.",
    tags: ["PHP", "explode()", "Forms", "String Processing", "Billing System"]
  },
  {
    taskNumber: "6A",
    id: "task-6a",
    folder: "task6a",
    zipName: "task6a.zip",
    title: "PHP Session Login & 60-Second Inactivity Timeout",
    question: "Experiment 6(a): Write a PHP program to implement a user login authentication form. Upon successful login, store username and session timestamp. Redirect to a protected details page and automatically destroy session and redirect back to login if inactive for more than 60 seconds.",
    aim: "To implement secure session management and inactivity tracking in PHP using session_start(), time(), and session_destroy().",
    tags: ["PHP", "Sessions", "session_start()", "Timeout", "Authentication"]
  },
  {
    taskNumber: "6B",
    id: "task-6b",
    folder: "task6b",
    zipName: "task6b.zip",
    title: "PHP Cookie Visit Counter & Timestamp Tracker",
    question: "Experiment 6(b): Write a PHP program to track user visits to a webpage using HTTP cookies. Increment and display total visit count, and display the exact date and time of the user's previous visit using setcookie().",
    aim: "To understand client-side state persistence with PHP cookies using setcookie() and $_COOKIE superglobal.",
    tags: ["PHP", "Cookies", "setcookie()", "$_COOKIE", "State Management"]
  },
  {
    taskNumber: "7A",
    id: "task-7a",
    folder: "task7a",
    zipName: "task7a.zip",
    title: "Create MySQL Database & Table via PHP Script",
    question: "Experiment 7(a): Write a PHP program to establish a connection to a MySQL database server, create a database named 'university_db' if it does not already exist, and create a 'users' table with appropriate columns and data types.",
    aim: "To establish database connections in PHP using mysqli and execute DDL commands (CREATE DATABASE, CREATE TABLE).",
    tags: ["PHP", "MySQL", "mysqli", "DDL", "Database Creation"]
  },
  {
    taskNumber: "7B",
    id: "task-7b",
    folder: "task7b",
    zipName: "task7b.zip",
    title: "User Registration System with MySQL & PHP",
    question: "Experiment 7(b): Write a PHP program to handle user registration via HTML form. Validate input data, verify whether username/email already exists in MySQL, hash the password securely, and insert the new user record into the database table.",
    aim: "To handle HTML form POST submissions in PHP, perform server-side validation, and execute SQL INSERT queries safely.",
    tags: ["PHP", "MySQL", "mysqli", "INSERT", "Registration", "Password Hashing"]
  },
  {
    taskNumber: "8A",
    id: "task-8a",
    folder: "task8a",
    zipName: "task8a.zip",
    title: "Update Database Record via PHP & MySQL",
    question: "Experiment 8(a): Write a PHP program to update existing user information (such as email, mobile number, or address) in the MySQL database table based on a given user ID or username.",
    aim: "To execute SQL UPDATE statements from PHP using mysqli and display the updated record count and new table status.",
    tags: ["PHP", "MySQL", "mysqli", "UPDATE", "Database Operations"]
  },
  {
    taskNumber: "8B",
    id: "task-8b",
    folder: "task8b",
    zipName: "task8b.zip",
    title: "Delete Database Record via PHP & MySQL",
    question: "Experiment 8(b): Write a PHP program to delete a specific user record from the MySQL database table based on user ID or username, and display confirmation of successful deletion.",
    aim: "To execute SQL DELETE statements from PHP using mysqli and verify record removal from the MySQL table.",
    tags: ["PHP", "MySQL", "mysqli", "DELETE", "Database Operations"]
  },
  {
    taskNumber: "9",
    id: "task-9",
    folder: "task9",
    zipName: "task9.zip",
    title: "Four Stroke Motorbike XML Catalog (DTD, XSLT & CSS)",
    question: "Experiment 9: Create an XML document containing details of 4 four-stroke motorbikes (Make, Model, Year, Engine cc, Output bhp, Mileage, Price). Create a DTD to validate the XML file, and create an XSL style sheet with CSS styling to display the details in a tabular format.",
    aim: "To design structured hierarchical data in XML, validate its schema using Document Type Definition (DTD), and transform the data into a styled HTML table using Extensible Stylesheet Language Transformations (XSLT).",
    tags: ["XML", "DTD", "XSLT", "CSS3", "Schema Validation", "Data Modeling"]
  },
  {
    taskNumber: "10",
    id: "task-10",
    folder: "task10",
    zipName: "task10.zip",
    title: "jQuery AJAX HTTP GET Request (Date & Time)",
    question: "Experiment 10: Write an HTML page that uses jQuery AJAX ($.get) to fetch current date and time from a server-side PHP script without reloading the web page, and dynamically display it inside a designated container.",
    aim: "To demonstrate asynchronous client-server communication using jQuery AJAX methods ($.get / $.ajax) to fetch and render dynamic backend data without page reloading.",
    tags: ["jQuery", "AJAX", "PHP", "HTTP GET", "Asynchronous"]
  },
  {
    taskNumber: "11",
    id: "task-11",
    folder: "task11",
    zipName: "task11.zip",
    title: "Live Name Suggestions (jQuery AJAX & PHP)",
    question: "Experiment 11: Implement a live search suggestion box using jQuery AJAX and PHP. As the user types characters into an input field, send asynchronous requests to a PHP script containing an array of names and display matching autocomplete suggestions in real time.",
    aim: "To build an interactive autocomplete search widget using jQuery keyup event listeners, asynchronous GET requests, and PHP substring array filtering.",
    tags: ["jQuery", "AJAX", "PHP", "Live Search", "Autocomplete", "String Matching"]
  },
  {
    taskNumber: "12",
    id: "task-12",
    folder: "task12",
    zipName: "task12.zip",
    title: "AJAX Database Retrieval without Page Reload",
    question: "Experiment 12: Write an HTML and PHP application using pure JavaScript XMLHttpRequest AJAX. When a user selects a name from a dropdown list, send the user ID to a PHP script (getuser.php), query MySQL database, and display the user's complete profile (Firstname, Lastname, Age, Hometown, Job) in a formatted table without page refresh.",
    aim: "To implement full-stack asynchronous database querying using native JavaScript XMLHttpRequest, PHP mysqli prepared statements, and dynamic DOM table injection.",
    tags: ["AJAX", "XMLHttpRequest", "PHP", "MySQL", "Asynchronous DB Lookup"]
  }
];

const populatedTasks = tasks17Meta.map(meta => {
    const taskDirPath = path.join(tasksDir, meta.folder);
    const files = [];

    if (fs.existsSync(taskDirPath)) {
        const fileNames = fs.readdirSync(taskDirPath);
        fileNames.forEach(fn => {
            const fPath = path.join(taskDirPath, fn);
            const stat = fs.statSync(fPath);
            if (!stat.isFile()) return;

            const ext = path.extname(fn).slice(1).toLowerCase();
            let type = ext;
            if (['png', 'jpg', 'jpeg', 'gif'].includes(ext)) type = 'image';
            if (['docx', 'doc'].includes(ext)) type = 'doc';
            if (['js'].includes(ext)) type = 'javascript';

            let content = null;
            if (!['png', 'jpg', 'jpeg', 'gif', 'docx', 'doc', 'zip'].includes(ext)) {
                try {
                    content = fs.readFileSync(fPath, 'utf8');
                } catch (e) {
                    content = null;
                }
            }

            files.push({
                name: fn,
                path: `tasks/${meta.folder}/${fn}`,
                size: formatBytes(stat.size),
                type: type,
                content: content
            });
        });
    }

    return {
        taskNumber: meta.taskNumber,
        id: meta.id,
        title: meta.title,
        question: meta.question,
        aim: meta.aim,
        tags: meta.tags,
        folderPath: `tasks/${meta.folder}`,
        zipPath: `tasks/${meta.zipName}`,
        filesCount: files.length,
        files: files
    };
});

const completeLabData = {
    university: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
    department: "Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    courseCode: "GR25A2082 / GR20",
    courseTitle: "Scripting Languages Laboratory",
    academicYear: "2025-2026",
    tasksCount: populatedTasks.length,
    tasks: populatedTasks
};

fs.writeFileSync(path.join(rootDir, 'data.json'), JSON.stringify(completeLabData, null, 2), 'utf8');
fs.writeFileSync(path.join(rootDir, 'data.js'), 'window.LAB_DATA = ' + JSON.stringify(completeLabData, null, 2) + ';\n', 'utf8');

console.log(`\nSuccessfully regenerated data.json and data.js with ${populatedTasks.length} clean tasks!`);
