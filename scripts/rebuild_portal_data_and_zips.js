const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const tasksDir = path.join(rootDir, 'tasks');

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
}

console.log("--- 1. Re-compressing all 22 task folders into .zip archives ---");
const allFolders = [
    'task1', 'task1a', 'task1b', 'task2', 'task3', 'task3a', 'task3b',
    'task4', 'task5', 'task6', 'task6a', 'task6b', 'task7', 'task7a',
    'task7b', 'task7c', 'task8', 'task8a', 'task8b', 'task9', 'task10', 'task11', 'task12'
];

allFolders.forEach(folder => {
    const folderPath = path.join(tasksDir, folder);
    const zipPath = path.join(tasksDir, `${folder}.zip`);
    if (fs.existsSync(folderPath)) {
        if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
        console.log(`Compressing ${folder} -> ${folder}.zip ...`);
        execSync(`powershell -NoProfile -Command "$ProgressPreference = 'SilentlyContinue'; Compress-Archive -Path '${folderPath}\\*' -DestinationPath '${zipPath}' -Force"`);
    }
});

console.log("--- 2. Building 18 Individual Lab Tasks for data.js and data.json ---");
const tasks18Meta = [
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
    title: "Dynamic Multiplication Table Generator",
    question: "Experiment 3(a): Design a simple multiplication table using JavaScript by asking the user for the number of rows and columns.",
    aim: "To accept row and column values from the user, calculate multiplication results, and dynamically display them in an HTML table using nested loops.",
    tags: ["JavaScript", "Loops", "DOM Manipulation", "Multiplication Table"]
  },
  {
    taskNumber: "3B",
    id: "task-3b",
    folder: "task3b",
    zipName: "task3b.zip",
    title: "Interactive Image Toggle Webpage",
    question: "Experiment 3(b): Design and develop an Image Toggle Webpage using JavaScript that toggles between two different images upon button click.",
    aim: "To implement dynamic image manipulation in JavaScript by accessing HTML img elements and conditionally swapping image source paths via click events.",
    tags: ["JavaScript", "DOM", "Events", "Image Toggle"]
  },
  {
    taskNumber: "4",
    id: "task-4",
    folder: "task4",
    zipName: "task4.zip",
    title: "To-Do List Application with DOM & CSS",
    question: "Experiment 4: Develop a To-Do List application using JavaScript. Implement CSS when needed to judge the outlook of To-Do list.",
    aim: "To understand JavaScript functions, DOM manipulation, task addition, strike-through completion, task deletion, and clean UI styling.",
    tags: ["JavaScript", "DOM", "To-Do List", "Event Handling", "CSS3"]
  },
  {
    taskNumber: "5",
    id: "task-5",
    folder: "task5",
    zipName: "task5.zip",
    title: "Item Billing System (PHP explode function)",
    question: "Experiment 5: Implement PHP script to design a form to accept the details of 5 different items, such as item code, item name, units sold, and rate. Display the bill in the tabular format. Use only 4 text boxes. (Hint: Use of explode function.)",
    aim: "To design an Item Billing System in PHP parsing comma-separated item details with explode(), calculating amounts and displaying the invoice table.",
    tags: ["PHP", "explode()", "Arrays", "Forms", "Billing"]
  },
  {
    taskNumber: "6A",
    id: "task-6a",
    folder: "task6a",
    zipName: "task6a.zip",
    title: "Session Management & Inactivity Timeout (60s)",
    question: "Experiment 6(a): Create a login form with a username and password. Once the user logs in, the second form should be displayed to accept user details (name, city, phone). If the user doesn't enter information within a specified time limit (60s), expire his session and give a warning.",
    aim: "To manage stateless HTTP communication using PHP Sessions with inactivity expiration, and manipulate user authentication securely.",
    tags: ["PHP", "Sessions", "Timeout", "Authentication", "Security"]
  },
  {
    taskNumber: "6B",
    id: "task-6b",
    folder: "task6b",
    zipName: "task6b.zip",
    title: "Cookie Storage, Retrieval & Deletion",
    question: "Experiment 6(b): Write a PHP script to store, retrieve and delete data cookies values.",
    aim: "To demonstrate client-side persistence by creating, reading, and destroying HTTP cookies with setcookie() and $_COOKIE in PHP.",
    tags: ["PHP", "Cookies", "State Management", "Browser Storage"]
  },
  {
    taskNumber: "7A",
    id: "task-7a",
    folder: "task7a",
    zipName: "task7a.zip",
    title: "Database Table Organization & Creation",
    question: "Experiment 7(a): Design a PHP application for: Organize a database table with user information like username, password and other required information.",
    aim: "To connect to MySQL from PHP, create database userdatabasenew, and execute DDL queries creating table users.",
    tags: ["PHP", "MySQL", "Database", "DDL", "Table Creation"]
  },
  {
    taskNumber: "7B",
    id: "task-7b",
    folder: "task7b",
    zipName: "task7b.zip",
    title: "User Registration & Database Insertion",
    question: "Experiment 7(b): Design a registration page and insert the data into created database table.",
    aim: "To capture user registration inputs from an HTML form, hash passwords, and persist records into MySQL using PHP prepared statements.",
    tags: ["PHP", "MySQL", "Registration", "Prepared Statements", "Password Hash"]
  },
  {
    taskNumber: "7C",
    id: "task-7c",
    folder: "task7c",
    zipName: "task7c.zip",
    title: "User Authentication & Session Login",
    question: "Experiment 7(c): Design a login page and authenticate the user to display home page or else login error.",
    aim: "To design a secure user login system in PHP that validates submitted credentials against hashed passwords in MySQL database, initializes authenticated sessions ($_SESSION), and handles logout.",
    tags: ["PHP", "MySQL", "Authentication", "Sessions", "Login", "Security"]
  },
  {
    taskNumber: "8A",
    id: "task-8a",
    folder: "task8a",
    zipName: "task8a.zip",
    title: "Database Record Update Script",
    question: "Experiment 8(a): Examine and write a PHP script for updating required user information in the database.",
    aim: "To query MySQL database from PHP and execute SQL UPDATE queries with bind parameters to modify existing user records.",
    tags: ["PHP", "MySQL", "CRUD", "UPDATE", "Database"]
  },
  {
    taskNumber: "8B",
    id: "task-8b",
    folder: "task8b",
    zipName: "task8b.zip",
    title: "Database Record Deletion Script",
    question: "Experiment 8(b): Write a PHP script for deleting a specified user from the database.",
    aim: "To execute SQL DELETE queries from PHP based on user ID input and verify deletion in phpMyAdmin.",
    tags: ["PHP", "MySQL", "CRUD", "DELETE", "Database"]
  },
  {
    taskNumber: "9",
    id: "task-9",
    folder: "task9",
    zipName: "task9.zip",
    title: "XML Motorbike Catalog with DTD & XSL Styling",
    question: "Experiment 9: Create an XML file along with its DTD for a catalog of four stroke motorbikes, where each motorbike has the following child elements: make, model, year, color, engine, chassis number and accessories. The engine element has child elements: engine number, number of cylinders, type of fuel. The accessories element has attributes disc brake, auto-start and radio. Display in a styled table using XSL and CSS.",
    aim: "To design structured hierarchical data in XML, enforce grammar via DTD validation, and transform XML into an HTML table with XSLT and CSS.",
    tags: ["XML", "DTD", "XSLT", "CSS3", "Schema Validation"]
  },
  {
    taskNumber: "10",
    id: "task-10",
    folder: "task10",
    zipName: "task10.zip",
    title: "Server Date & Time Retrieval (jQuery AJAX & PHP)",
    question: "Experiment 10: Create a jQuery AJAX application to retrieve the contents of a PHP file. Example: Display current server date and time when the user clicks a button.",
    aim: "To demonstrate asynchronous client-server communication using jQuery $.get to fetch server timestamp from date-time.php without reloading.",
    tags: ["jQuery", "AJAX", "PHP", "Date/Time", "Asynchronous"]
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

const populatedTasks = tasks18Meta.map(meta => {
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
                extension: ext,
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

console.log(`Successfully generated data.json and data.js with ${populatedTasks.length} tasks!`);
