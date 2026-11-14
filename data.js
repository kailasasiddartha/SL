window.LAB_DATA = {
  "university": "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
  "department": "Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  "courseCode": "GR25A2082 / GR20",
  "courseTitle": "Scripting Languages Laboratory",
  "academicYear": "2025-2026",
  "tasksCount": 17,
  "tasks": [
    {
      "taskNumber": "1A",
      "id": "task-1a",
      "title": "Personal Portfolio Profile (HTML Controls & CSS)",
      "question": "Experiment 1(a): Develop a website displaying your basic portfolio profile using HTML Controls. Implement CSS to design the page.",
      "aim": "To design and develop a personal portfolio webpage showcasing profile information, education, skills, and projects using HTML controls and modern CSS styling.",
      "tags": [
        "HTML5",
        "CSS3",
        "Portfolio",
        "HTML Controls",
        "Web Design"
      ],
      "folderPath": "tasks/task1a",
      "zipPath": "tasks/task1a.zip",
      "filesCount": 4,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task1a/index.html",
          "size": "1.8 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>My Portfolio</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <header>\n        <h1>Alex Developer</h1>\n        <nav>\n            <a href=\"#about\">About</a>\n            <a href=\"#projects\">Projects</a>\n            <a href=\"#contact\">Contact</a>\n        </nav>\n    </header>\n\n    <section id=\"about\" class=\"container\">\n        <h2>About Me</h2>\n        <p>Hello! I am a passionate web developer learning HTML, CSS, and JavaScript. I love building clean and functional websites.</p>\n    </section>\n\n    <section id=\"projects\" class=\"container\">\n        <h2>My Projects</h2>\n        <div class=\"project-card\">\n            <h3>Project One</h3>\n            <p>A simple calculator built with JavaScript.</p>\n        </div>\n        <div class=\"project-card\">\n            <h3>Project Two</h3>\n            <p>A responsive landing page using CSS Flexbox.</p>\n        </div>\n    </section>\n\n    <section id=\"contact\" class=\"container\">\n        <h2>Contact Me</h2>\n        <!-- HTML Controls are used here -->\n        <form action=\"#\" method=\"POST\" class=\"contact-form\">\n            <label for=\"name\">Name:</label>\n            <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter your name\" required>\n\n            <label for=\"email\">Email:</label>\n            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter your email\" required>\n\n            <label for=\"message\">Message:</label>\n            <textarea id=\"message\" name=\"message\" rows=\"4\" placeholder=\"Your message here...\" required></textarea>\n\n            <button type=\"submit\">Send Message</button>\n        </form>\n    </section>\n\n    <footer>\n        <p>&copy; 2026 Alex Developer. All rights reserved.</p>\n    </footer>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task1a/output_screenshot.png",
          "size": "1.1 MB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task1a/style.css",
          "size": "1.5 KB",
          "type": "css",
          "content": "/* Basic Reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f9;\n    color: #333;\n    line-height: 1.6;\n}\n\n/* Header and Navigation */\nheader {\n    background-color: #2c3e50;\n    color: white;\n    padding: 20px;\n    text-align: center;\n}\n\nnav a {\n    color: white;\n    margin: 0 15px;\n    text-decoration: none;\n    font-weight: bold;\n}\n\nnav a:hover {\n    text-decoration: underline;\n}\n\n/* Main Content Containers */\n.container {\n    max-width: 800px;\n    margin: 30px auto;\n    padding: 20px;\n    background: white;\n    border-radius: 8px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n}\n\nh2 {\n    border-bottom: 2px solid #3498db;\n    padding-bottom: 5px;\n    margin-bottom: 15px;\n}\n\n/* Project Cards */\n.project-card {\n    background: #ecf0f1;\n    padding: 15px;\n    margin-bottom: 10px;\n    border-left: 4px solid #3498db;\n}\n\n/* Form Controls Styling */\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n}\n\nlabel {\n    font-weight: bold;\n}\n\ninput, textarea {\n    padding: 10px;\n    margin-top: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\n\nbutton {\n    margin-top: 15px;\n    padding: 10px;\n    background-color: #3498db;\n    color: white;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 16px;\n}\n\nbutton:hover {\n    background-color: #2980b9;\n}\n\n/* Footer */\nfooter {\n    text-align: center;\n    padding: 15px;\n    background-color: #2c3e50;\n    color: white;\n    margin-top: 30px;\n}\n"
        },
        {
          "name": "Task 1A material.doc",
          "path": "tasks/task1a/Task 1A material.doc",
          "size": "1.2 MB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "1B",
      "id": "task-1b",
      "title": "Class Time Table (HTML Table)",
      "question": "Experiment 1(b): Design a web page to display the class time table using HTML.",
      "aim": "To design and develop a structured academic class timetable webpage using HTML table elements, rowspan, colspan, and CSS styling.",
      "tags": [
        "HTML5",
        "CSS3",
        "Table",
        "Time Table",
        "Rowspan",
        "Colspan"
      ],
      "folderPath": "tasks/task1b",
      "zipPath": "tasks/task1b.zip",
      "filesCount": 4,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task1b/index.html",
          "size": "1.8 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Class Time Table</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <h1>Class Time Table</h1>\n    <h3>B.Tech - AI &amp; ML</h3>\n    <table>\n        <caption>Weekly Class Schedule</caption>\n        <tr>\n            <th>Day</th>\n            <th>9:00-10:00</th>\n            <th>10:00-11:00</th>\n            <th>11:00-12:00</th>\n            <th>12:00-1:00</th>\n            <th>1:00-2:00</th>\n            <th>2:00-3:00</th>\n            <th>3:00-4:00</th>\n        </tr>\n        <tr>\n            <th>Monday</th>\n            <td>Mathematics</td>\n            <td>Python</td>\n            <td>DBMS</td>\n            <td>English</td>\n            <td class=\"break\" rowspan=\"5\">Lunch Break</td>\n            <td>AI</td>\n            <td>Library</td>\n        </tr>\n        <tr>\n            <th>Tuesday</th>\n            <td>Python</td>\n            <td>Mathematics</td>\n            <td>AI</td>\n            <td>DBMS</td>\n            <td colspan=\"2\">Python Lab</td>\n        </tr>\n        <tr>\n            <th>Wednesday</th>\n            <td>DBMS</td>\n            <td>English</td>\n            <td>Mathematics</td>\n            <td>Python</td>\n            <td>AI</td>\n            <td>Sports</td>\n        </tr>\n        <tr>\n            <th>Thursday</th>\n            <td>AI</td>\n            <td>DBMS</td>\n            <td>Python</td>\n            <td>Mathematics</td>\n            <td colspan=\"2\">DBMS Lab</td>\n        </tr>\n        <tr>\n            <th>Friday</th>\n            <td>English</td>\n            <td>AI</td>\n            <td>DBMS</td>\n            <td>Python</td>\n            <td>Mathematics</td>\n            <td>Seminar</td>\n        </tr>\n    </table>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task1b/output_screenshot.png",
          "size": "22.7 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task1b/style.css",
          "size": "652 B",
          "type": "css",
          "content": "body {\n    font-family: Arial, sans-serif;\n    background-color: #f4f7fb;\n    text-align: center;\n    margin: 20px;\n}\nh1 {\n    color: #1f4e79;\n}\nh3 {\n    color: #333333;\n}\ntable {\n    width: 100%;\n    border-collapse: collapse;\n    margin: 20px auto;\n    background-color: white;\n}\ncaption {\n    font-size: 18px;\n    font-weight: bold;\n    padding: 10px;\n}\nth, td {\n    border: 1px solid #333333;\n    padding: 12px 8px;\n    text-align: center;\n}\nth {\n    background-color: #4CAF50;\n    color: white;\n}\ntr:nth-child(even) {\n    background-color: #eef5ee;\n}\n.break {\n    background-color: #ffe699;\n    font-weight: bold;\n    writing-mode: vertical-rl;\n}\n"
        },
        {
          "name": "Task 1B material.docx",
          "path": "tasks/task1b/Task 1B material.docx",
          "size": "53.2 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "2",
      "id": "task-2",
      "title": "Registration Form Validation with JavaScript",
      "question": "Experiment 2: Create a sample form program that collects the first name, last name, email, user id, password and confirms password. Validate all fields using JavaScript, check the email format, and display error messages in red next to the corresponding textboxes.",
      "aim": "To design an HTML registration form and validate all input fields using JavaScript, verifying required fields, email format, and password confirmation.",
      "tags": [
        "JavaScript",
        "Validation",
        "Forms",
        "DOM",
        "RegEx"
      ],
      "folderPath": "tasks/task2",
      "zipPath": "tasks/task2.zip",
      "filesCount": 5,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task2/index.html",
          "size": "1.7 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Registration Form Validation</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <h2>Registration Form</h2>\n\n    <form id=\"registrationForm\" novalidate>\n        <div class=\"form-row\">\n            <label for=\"firstName\">First Name:</label>\n            <input type=\"text\" id=\"firstName\">\n            <span class=\"error\" id=\"firstNameError\"></span>\n        </div>\n\n        <div class=\"form-row\">\n            <label for=\"lastName\">Last Name:</label>\n            <input type=\"text\" id=\"lastName\">\n            <span class=\"error\" id=\"lastNameError\"></span>\n        </div>\n\n        <div class=\"form-row\">\n            <label for=\"email\">Email:</label>\n            <input type=\"text\" id=\"email\">\n            <span class=\"error\" id=\"emailError\"></span>\n        </div>\n\n        <div class=\"form-row\">\n            <label for=\"userId\">User ID:</label>\n            <input type=\"text\" id=\"userId\">\n            <span class=\"error\" id=\"userIdError\"></span>\n        </div>\n\n        <div class=\"form-row\">\n            <label for=\"password\">Password:</label>\n            <input type=\"password\" id=\"password\">\n            <span class=\"error\" id=\"passwordError\"></span>\n        </div>\n\n        <div class=\"form-row\">\n            <label for=\"confirmPassword\">Confirm Password:</label>\n            <input type=\"password\" id=\"confirmPassword\">\n            <span class=\"error\" id=\"confirmPasswordError\"></span>\n        </div>\n\n        <button type=\"submit\">Submit</button>\n        <p id=\"success\"></p>\n    </form>\n\n    <script src=\"validate.js\"></script>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task2/output_screenshot.png",
          "size": "16.9 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task2/style.css",
          "size": "358 B",
          "type": "css",
          "content": "body {\n    font-family: Arial, sans-serif;\n    margin: 30px;\n}\nform {\n    max-width: 850px;\n}\n.form-row {\n    margin-bottom: 15px;\n}\nlabel {\n    display: inline-block;\n    width: 150px;\n}\ninput {\n    padding: 6px;\n    width: 220px;\n}\n.error {\n    color: red;\n    margin-left: 8px;\n    font-size: 13px;\n}\n#success {\n    color: green;\n    font-weight: bold;\n}\n"
        },
        {
          "name": "task 2 material.docx",
          "path": "tasks/task2/task 2 material.docx",
          "size": "71.5 KB",
          "type": "doc",
          "content": null
        },
        {
          "name": "validate.js",
          "path": "tasks/task2/validate.js",
          "size": "2.3 KB",
          "type": "javascript",
          "content": "const form = document.getElementById(\"registrationForm\");\n\nform.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    // Clear previous error and success messages.\n    document.querySelectorAll(\".error\").forEach(function (element) {\n        element.textContent = \"\";\n    });\n    document.getElementById(\"success\").textContent = \"\";\n\n    // Read and trim the text fields.\n    const firstName = document.getElementById(\"firstName\").value.trim();\n    const lastName = document.getElementById(\"lastName\").value.trim();\n    const email = document.getElementById(\"email\").value.trim();\n    const userId = document.getElementById(\"userId\").value.trim();\n    const password = document.getElementById(\"password\").value;\n    const confirmPassword = document.getElementById(\"confirmPassword\").value;\n\n    let isValid = true;\n\n    // Check mandatory fields and specific format rules.\n    if (firstName === \"\") {\n        showError(\"firstNameError\", \"First Name is required.\");\n        isValid = false;\n    }\n    if (lastName === \"\") {\n        showError(\"lastNameError\", \"Last Name is required.\");\n        isValid = false;\n    }\n    if (email === \"\") {\n        showError(\"emailError\", \"Email is required.\");\n        isValid = false;\n    } else {\n        // Basic email format check.\n        const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n        if (!emailPattern.test(email)) {\n            showError(\"emailError\", \"Enter a valid email address.\");\n            isValid = false;\n        }\n    }\n    if (userId === \"\") {\n        showError(\"userIdError\", \"User ID is required.\");\n        isValid = false;\n    }\n    if (password === \"\") {\n        showError(\"passwordError\", \"Password is required.\");\n        isValid = false;\n    }\n    if (confirmPassword === \"\") {\n        showError(\"confirmPasswordError\", \"Please confirm your password.\");\n        isValid = false;\n    } else if (password !== confirmPassword) {\n        showError(\"confirmPasswordError\", \"Passwords do not match.\");\n        isValid = false;\n    }\n\n    if (isValid) {\n        document.getElementById(\"success\").textContent =\n            \"All fields are valid. Form submitted successfully!\";\n    }\n});\n\n// Put the message in the span next to the matching textbox.\nfunction showError(elementId, message) {\n    document.getElementById(elementId).textContent = message;\n}\n"
        }
      ]
    },
    {
      "taskNumber": "3A",
      "id": "task-3a",
      "title": "Dynamic Multiplication Table Generator",
      "question": "Experiment 3(a): Design a simple multiplication table using JavaScript by asking the user for the number of rows and columns.",
      "aim": "To accept row and column values from the user, calculate multiplication results, and dynamically display them in an HTML table using nested loops.",
      "tags": [
        "JavaScript",
        "Loops",
        "DOM Manipulation",
        "Multiplication Table"
      ],
      "folderPath": "tasks/task3a",
      "zipPath": "tasks/task3a.zip",
      "filesCount": 3,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task3a/index.html",
          "size": "1.7 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Multiplication Table</title>\n    <style>\n        body { font-family: Arial, sans-serif; text-align: center; }\n        table { border-collapse: collapse; margin: 20px auto; }\n        th, td { border: 1px solid #777; padding: 10px; }\n        th { background-color: #2563eb; color: white; }\n    </style>\n</head>\n<body>\n    <h2>Multiplication Table Generator</h2>\n    <label>Rows: <input type=\"number\" id=\"rows\" min=\"1\" value=\"4\"></label>\n    <label>Columns: <input type=\"number\" id=\"cols\" min=\"1\" value=\"5\"></label>\n    <button onclick=\"generateTable()\">Generate Table</button>\n    <div id=\"output\"></div>\n    <script>\n        function generateTable() {\n            const rows = parseInt(document.getElementById(\"rows\").value);\n            const cols = parseInt(document.getElementById(\"cols\").value);\n            const output = document.getElementById(\"output\");\n\n            if (!Number.isInteger(rows) || !Number.isInteger(cols) ||\n                rows < 1 || cols < 1) {\n                output.textContent = \"Please enter positive row and column values.\";\n                return;\n            }\n\n            let html = \"<table><tr>\";\n            for (let j = 1; j <= cols; j++) html += `<th>${j}</th>`;\n            html += \"</tr>\";\n            for (let i = 1; i <= rows; i++) {\n                html += \"<tr>\";\n                for (let j = 1; j <= cols; j++) {\n                    html += `<td>${i} × ${j} = ${i * j}</td>`;\n                }\n                html += \"</tr>\";\n            }\n            html += \"</table>\";\n            output.innerHTML = html;\n        }\n        generateTable();\n    </script>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task3a/output_screenshot.png",
          "size": "32.3 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "task 3A material.docx",
          "path": "tasks/task3a/task 3A material.docx",
          "size": "70.2 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "3B",
      "id": "task-3b",
      "title": "Interactive Image Toggle Webpage",
      "question": "Experiment 3(b): Design and develop an Image Toggle Webpage using JavaScript that toggles between two different images upon button click.",
      "aim": "To implement dynamic image manipulation in JavaScript by accessing HTML img elements and conditionally swapping image source paths via click events.",
      "tags": [
        "JavaScript",
        "DOM",
        "Events",
        "Image Toggle"
      ],
      "folderPath": "tasks/task3b",
      "zipPath": "tasks/task3b.zip",
      "filesCount": 5,
      "files": [
        {
          "name": "image1.png",
          "path": "tasks/task3b/image1.png",
          "size": "1.6 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "image2.png",
          "path": "tasks/task3b/image2.png",
          "size": "1.6 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "index.html",
          "path": "tasks/task3b/index.html",
          "size": "1.8 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Image Toggle Webpage</title>\n    <style>\n        body {\n            font-family: Arial, sans-serif;\n            text-align: center;\n            margin-top: 50px;\n            background-color: #f4f4f9;\n        }\n        .container {\n            background: white;\n            padding: 30px;\n            display: inline-block;\n            border-radius: 8px;\n            box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n        }\n        img {\n            width: 320px;\n            height: 220px;\n            object-fit: cover;\n            border-radius: 6px;\n            border: 2px solid #ddd;\n            margin-bottom: 20px;\n        }\n        button {\n            padding: 10px 20px;\n            background-color: #008CBA;\n            color: white;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            font-size: 16px;\n        }\n        button:hover {\n            background-color: #007bb5;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"container\">\n        <h2>Image Toggle Application</h2>\n        <!-- Initial Image Display -->\n        <img id=\"toggleImg\" src=\"image1.png\" alt=\"Image 1\">\n        <br>\n        <button onclick=\"toggleImage()\">Toggle Image</button>\n    </div>\n\n    <script>\n        function toggleImage() {\n            let imgElement = document.getElementById(\"toggleImg\");\n            \n            // Check current source and toggle to alternate image\n            if (imgElement.src.includes(\"image1\")) {\n                imgElement.src = \"image2.png\";\n                imgElement.alt = \"Image 2\";\n            } else {\n                imgElement.src = \"image1.png\";\n                imgElement.alt = \"Image 1\";\n            }\n        }\n    </script>\n\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task3b/output_screenshot.png",
          "size": "12.8 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "Task 3B Material.docx",
          "path": "tasks/task3b/Task 3B Material.docx",
          "size": "40.0 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "4",
      "id": "task-4",
      "title": "To-Do List Application with DOM & CSS",
      "question": "Experiment 4: Develop a To-Do List application using JavaScript. Implement CSS when needed to judge the outlook of To-Do list.",
      "aim": "To understand JavaScript functions, DOM manipulation, task addition, strike-through completion, task deletion, and clean UI styling.",
      "tags": [
        "JavaScript",
        "DOM",
        "To-Do List",
        "Event Handling",
        "CSS3"
      ],
      "folderPath": "tasks/task4",
      "zipPath": "tasks/task4.zip",
      "filesCount": 5,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task4/index.html",
          "size": "670 B",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>To-Do List</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"container\">\n        <h2>To-Do List</h2>\n        <input type=\"text\" id=\"taskInput\" placeholder=\"Add a new task...\">\n        <button onclick=\"addTask()\">Add</button>\n        <ul id=\"taskList\"></ul>\n    </div>\n    <table>\n        <thead>\n            <tr>\n                <th>Task</th>\n            </tr>\n        </thead>\n        <tbody id=\"taskTable\"></tbody>\n    </table>\n\n    <script src=\"todo.js\"></script>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.jpeg",
          "path": "tasks/task4/output_screenshot.jpeg",
          "size": "25.8 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task4/style.css",
          "size": "1.3 KB",
          "type": "css",
          "content": "body {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    margin: 0;\n    padding: 20px;\n}\n.container {\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n    width: 320px;\n    text-align: center;\n    margin-bottom: 20px;\n}\ninput {\n    width: 75%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n}\nbutton {\n    padding: 10px 15px;\n    background: #28a745;\n    color: white;\n    border: none;\n    cursor: pointer;\n    border-radius: 4px;\n}\nul {\n    list-style: none;\n    padding: 0;\n}\nli {\n    background: #eee;\n    margin: 5px 0;\n    padding: 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 4px;\n    cursor: pointer;\n}\n.completed {\n    text-decoration: line-through;\n    color: gray;\n}\n.delete {\n    background: red;\n    color: white;\n    border: none;\n    padding: 5px 10px;\n    cursor: pointer;\n    border-radius: 4px;\n}\ntable {\n    width: 320px;\n    border-collapse: collapse;\n    margin-top: 20px;\n    background: white;\n    border-radius: 8px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n}\nth, td {\n    border: 1px solid #ccc;\n    padding: 8px 12px;\n    text-align: left;\n}\n"
        },
        {
          "name": "Task 4 material.docx",
          "path": "tasks/task4/Task 4 material.docx",
          "size": "74.6 KB",
          "type": "doc",
          "content": null
        },
        {
          "name": "todo.js",
          "path": "tasks/task4/todo.js",
          "size": "997 B",
          "type": "javascript",
          "content": "function addTask() {\n    let taskInput = document.getElementById(\"taskInput\");\n    let taskText = taskInput.value.trim();\n    if (taskText == \"\") return;\n    \n    let li = document.createElement(\"li\");\n    li.innerHTML = `${taskText} <button class=\"delete\" onclick=\"removeTask(this, '${taskText}')\">X</button>`;\n    li.onclick = function() {\n        li.classList.toggle(\"completed\");\n    };\n    document.getElementById(\"taskList\").appendChild(li);\n    taskInput.value = \"\";\n    \n    let tableRow = document.createElement(\"tr\");\n    tableRow.setAttribute(\"data-task\", taskText);\n    tableRow.innerHTML = `<td>${taskText}</td>`;\n    document.getElementById(\"taskTable\").appendChild(tableRow);\n}\n\nfunction removeTask(button, taskText) {\n    let taskItem = button.parentElement;\n    let tableRows = document.querySelectorAll(\"#taskTable tr\");\n    tableRows.forEach(row => {\n        if (row.getAttribute(\"data-task\") === taskText) {\n            row.remove();\n        }\n    });\n    taskItem.remove();\n}\n"
        }
      ]
    },
    {
      "taskNumber": "5",
      "id": "task-5",
      "title": "Item Billing System (PHP explode function)",
      "question": "Experiment 5: Implement PHP script to design a form to accept the details of 5 different items, such as item code, item name, units sold, and rate. Display the bill in the tabular format. Use only 4 text boxes. (Hint: Use of explode function.)",
      "aim": "To design an Item Billing System in PHP parsing comma-separated item details with explode(), calculating amounts and displaying the invoice table.",
      "tags": [
        "PHP",
        "explode()",
        "Arrays",
        "Forms",
        "Billing"
      ],
      "folderPath": "tasks/task5",
      "zipPath": "tasks/task5.zip",
      "filesCount": 5,
      "files": [
        {
          "name": "bill.php",
          "path": "tasks/task5/bill.php",
          "size": "2.3 KB",
          "type": "php",
          "content": "<?php\n$billOutput = \"\";\nif (isset($_POST['submit'])) {\n    $code = $_POST['code'];\n    $name = $_POST['name'];\n    $units = $_POST['units'];\n    $rate = $_POST['rate'];\n\n    $codes = explode(\",\", $code);\n    $names = explode(\",\", $name);\n    $unitssold = explode(\",\", $units);\n    $rates = explode(\",\", $rate);\n\n    $billOutput .= \"<h2>Bill Details</h2>\";\n    $billOutput .= \"<table>\";\n    $billOutput .= \"<tr>\";\n    $billOutput .= \"<th>Item Code</th>\";\n    $billOutput .= \"<th>Item Name</th>\";\n    $billOutput .= \"<th>Units Sold</th>\";\n    $billOutput .= \"<th>Rate</th>\";\n    $billOutput .= \"<th>Amount</th>\";\n    $billOutput .= \"</tr>\";\n\n    $grandTotal = 0;\n    for ($i = 0; $i < 5; $i++) {\n        $c = isset($codes[$i]) ? trim($codes[$i]) : \"\";\n        $n = isset($names[$i]) ? trim($names[$i]) : \"\";\n        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;\n        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;\n        $amount = $u * $r;\n        $grandTotal += $amount;\n\n        $billOutput .= \"<tr>\";\n        $billOutput .= \"<td>\" . htmlspecialchars($c) . \"</td>\";\n        $billOutput .= \"<td>\" . htmlspecialchars($n) . \"</td>\";\n        $billOutput .= \"<td>\" . $u . \"</td>\";\n        $billOutput .= \"<td>\" . $r . \"</td>\";\n        $billOutput .= \"<td>\" . $amount . \"</td>\";\n        $billOutput .= \"</tr>\";\n    }\n\n    $billOutput .= \"<tr>\";\n    $billOutput .= \"<th colspan='4'>Grand Total</th>\";\n    $billOutput .= \"<th>\" . $grandTotal . \"</th>\";\n    $billOutput .= \"</tr>\";\n    $billOutput .= \"</table>\";\n}\n?>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Item Billing System</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <h2>Item Billing System</h2>\n    <form method=\"post\" action=\"\">\n        <label>Item Codes:</label><br>\n        <input type=\"text\" name=\"code\" placeholder=\"101,102,103,104,105\" required>\n        <br>\n        <label>Item Names:</label><br>\n        <input type=\"text\" name=\"name\" placeholder=\"pen,book,pencil,file,notebook\" required>\n        <br>\n        <label>Units Sold:</label><br>\n        <input type=\"text\" name=\"units\" placeholder=\"10,5,20,8,12\" required>\n        <br>\n        <label>Rates:</label><br>\n        <input type=\"text\" name=\"rate\" placeholder=\"10,50,5,30,40\" required>\n        <br>\n        <input type=\"submit\" name=\"submit\" value=\"Generate Bill\">\n    </form>\n\n    <?php echo $billOutput; ?>\n</body>\n</html>\n"
        },
        {
          "name": "index.html",
          "path": "tasks/task5/index.html",
          "size": "2.3 KB",
          "type": "html",
          "content": "<?php\n$billOutput = \"\";\nif (isset($_POST['submit'])) {\n    $code = $_POST['code'];\n    $name = $_POST['name'];\n    $units = $_POST['units'];\n    $rate = $_POST['rate'];\n\n    $codes = explode(\",\", $code);\n    $names = explode(\",\", $name);\n    $unitssold = explode(\",\", $units);\n    $rates = explode(\",\", $rate);\n\n    $billOutput .= \"<h2>Bill Details</h2>\";\n    $billOutput .= \"<table>\";\n    $billOutput .= \"<tr>\";\n    $billOutput .= \"<th>Item Code</th>\";\n    $billOutput .= \"<th>Item Name</th>\";\n    $billOutput .= \"<th>Units Sold</th>\";\n    $billOutput .= \"<th>Rate</th>\";\n    $billOutput .= \"<th>Amount</th>\";\n    $billOutput .= \"</tr>\";\n\n    $grandTotal = 0;\n    for ($i = 0; $i < 5; $i++) {\n        $c = isset($codes[$i]) ? trim($codes[$i]) : \"\";\n        $n = isset($names[$i]) ? trim($names[$i]) : \"\";\n        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;\n        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;\n        $amount = $u * $r;\n        $grandTotal += $amount;\n\n        $billOutput .= \"<tr>\";\n        $billOutput .= \"<td>\" . htmlspecialchars($c) . \"</td>\";\n        $billOutput .= \"<td>\" . htmlspecialchars($n) . \"</td>\";\n        $billOutput .= \"<td>\" . $u . \"</td>\";\n        $billOutput .= \"<td>\" . $r . \"</td>\";\n        $billOutput .= \"<td>\" . $amount . \"</td>\";\n        $billOutput .= \"</tr>\";\n    }\n\n    $billOutput .= \"<tr>\";\n    $billOutput .= \"<th colspan='4'>Grand Total</th>\";\n    $billOutput .= \"<th>\" . $grandTotal . \"</th>\";\n    $billOutput .= \"</tr>\";\n    $billOutput .= \"</table>\";\n}\n?>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Item Billing System</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <h2>Item Billing System</h2>\n    <form method=\"post\" action=\"\">\n        <label>Item Codes:</label><br>\n        <input type=\"text\" name=\"code\" placeholder=\"101,102,103,104,105\" required>\n        <br>\n        <label>Item Names:</label><br>\n        <input type=\"text\" name=\"name\" placeholder=\"pen,book,pencil,file,notebook\" required>\n        <br>\n        <label>Units Sold:</label><br>\n        <input type=\"text\" name=\"units\" placeholder=\"10,5,20,8,12\" required>\n        <br>\n        <label>Rates:</label><br>\n        <input type=\"text\" name=\"rate\" placeholder=\"10,50,5,30,40\" required>\n        <br>\n        <input type=\"submit\" name=\"submit\" value=\"Generate Bill\">\n    </form>\n\n    <?php echo $billOutput; ?>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.jpeg",
          "path": "tasks/task5/output_screenshot.jpeg",
          "size": "50.3 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task5/style.css",
          "size": "433 B",
          "type": "css",
          "content": "body {\n    font-family: Arial, sans-serif;\n    margin: 40px;\n}\ntable {\n    border-collapse: collapse;\n    width: 80%;\n    margin-top: 20px;\n}\nth, td {\n    border: 1px solid black;\n    padding: 10px;\n    text-align: center;\n}\nth {\n    background-color: lightgray;\n}\ninput[type=\"text\"] {\n    width: 400px;\n    padding: 8px;\n    margin: 8px 0;\n}\ninput[type=\"submit\"] {\n    padding: 10px 25px;\n    margin: 10px 0;\n    cursor: pointer;\n}\n"
        },
        {
          "name": "Task 5 material.docx",
          "path": "tasks/task5/Task 5 material.docx",
          "size": "99.1 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "6A",
      "id": "task-6a",
      "title": "Session Management & Inactivity Timeout (60s)",
      "question": "Experiment 6(a): Create a login form with a username and password. Once the user logs in, the second form should be displayed to accept user details (name, city, phone). If the user doesn't enter information within a specified time limit (60s), expire his session and give a warning.",
      "aim": "To manage stateless HTTP communication using PHP Sessions with inactivity expiration, and manipulate user authentication securely.",
      "tags": [
        "PHP",
        "Sessions",
        "Timeout",
        "Authentication",
        "Security"
      ],
      "folderPath": "tasks/task6a",
      "zipPath": "tasks/task6a.zip",
      "filesCount": 5,
      "files": [
        {
          "name": "6a_details.php",
          "path": "tasks/task6a/6a_details.php",
          "size": "1.8 KB",
          "type": "php",
          "content": "<?php\nsession_start();\n\n// Check whether user is logged in\nif (!isset($_SESSION[\"username\"])) {\n    header(\"Location: 6a_login.php\");\n    exit();\n}\n\n// Session timeout in seconds\n$timeout = 60;\n\n// Check inactivity\nif (isset($_SESSION[\"last_activity\"])) {\n    $inactive_time = time() - $_SESSION[\"last_activity\"];\n\n    if ($inactive_time > $timeout) {\n        session_unset();\n        session_destroy();\n\n        echo \"<h2>Warning!</h2>\";\n        echo \"<p>Your session has expired because you were inactive for too long.</p>\";\n        echo \"<a href='6a_login.php'>Click here to Login Again</a>\";\n        exit();\n    }\n}\n\n// Update activity time\n$_SESSION[\"last_activity\"] = time();\n\n$message = \"\";\n\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $name = $_POST[\"name\"];\n    $city = $_POST[\"city\"];\n    $phoneno = $_POST[\"phoneno\"];\n\n    $message = \"Details submitted successfully!\";\n}\n?>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>User Details</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"container\">\n        <h2>User Details Form</h2>\n        <p>Welcome, <b><?php echo htmlspecialchars($_SESSION[\"username\"]); ?></b></p>\n        <p class=\"warning\">You have 60 seconds of inactivity before your session expires.</p>\n\n        <?php\n        if ($message != \"\") {\n            echo \"<p class='success'>$message</p>\";\n        }\n        ?>\n\n        <form method=\"post\" action=\"\">\n            <label>Name:</label>\n            <input type=\"text\" name=\"name\" required>\n\n            <label>City:</label>\n            <input type=\"text\" name=\"city\" required>\n\n            <label>Phone Number:</label>\n            <input type=\"text\" name=\"phoneno\" required>\n\n            <input type=\"submit\" value=\"Submit\">\n        </form>\n        <br>\n        <a href=\"logout.php\">Logout</a>\n    </div>\n</body>\n</html>\n"
        },
        {
          "name": "6a_login.php",
          "path": "tasks/task6a/6a_login.php",
          "size": "1.1 KB",
          "type": "php",
          "content": "<?php\nsession_start();\n\n$error = \"\";\n\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n    $username = $_POST[\"username\"];\n    $password = $_POST[\"password\"];\n\n    // Sample username and password\n    if ($username == \"admin\" && $password == \"12345\") {\n        $_SESSION[\"username\"] = $username;\n\n        // Session timeout: 60 seconds\n        $_SESSION[\"last_activity\"] = time();\n\n        header(\"Location: 6a_details.php\");\n        exit();\n    } else {\n        $error = \"Invalid username or password!\";\n    }\n}\n?>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Login Form</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"container\">\n        <h2>Login Form</h2>\n        <?php\n        if ($error != \"\") {\n            echo \"<p class='error'>$error</p>\";\n        }\n        ?>\n        <form method=\"post\" action=\"\">\n            <label>Username:</label>\n            <input type=\"text\" name=\"username\" required>\n\n            <label>Password:</label>\n            <input type=\"password\" name=\"password\" required>\n\n            <input type=\"submit\" value=\"Login\">\n        </form>\n    </div>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task6a/output_screenshot.png",
          "size": "99.4 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task6a/style.css",
          "size": "729 B",
          "type": "css",
          "content": "body {\n    font-family: Arial, sans-serif;\n    background-color: #f2f2f2;\n}\n.container {\n    width: 400px;\n    margin: 80px auto;\n    padding: 25px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 0 10px gray;\n}\nh2 {\n    text-align: center;\n}\nlabel {\n    display: block;\n    margin-top: 15px;\n    margin-bottom: 5px;\n}\ninput[type=\"text\"],\ninput[type=\"password\"] {\n    width: 95%;\n    padding: 10px;\n}\ninput[type=\"submit\"] {\n    width: 100%;\n    padding: 10px;\n    margin-top: 20px;\n    background-color: blue;\n    color: white;\n    border: none;\n    cursor: pointer;\n}\n.error {\n    color: red;\n}\n.warning {\n    color: orange;\n    font-weight: bold;\n}\n.success {\n    color: green;\n    font-weight: bold;\n}\n"
        },
        {
          "name": "Task 6A material.docx",
          "path": "tasks/task6a/Task 6A material.docx",
          "size": "83.7 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "6B",
      "id": "task-6b",
      "title": "Cookie Storage, Retrieval & Deletion",
      "question": "Experiment 6(b): Write a PHP script to store, retrieve and delete data cookies values.",
      "aim": "To demonstrate client-side persistence by creating, reading, and destroying HTTP cookies with setcookie() and $_COOKIE in PHP.",
      "tags": [
        "PHP",
        "Cookies",
        "State Management",
        "Browser Storage"
      ],
      "folderPath": "tasks/task6b",
      "zipPath": "tasks/task6b.zip",
      "filesCount": 4,
      "files": [
        {
          "name": "6b_cookies.php",
          "path": "tasks/task6b/6b_cookies.php",
          "size": "1.4 KB",
          "type": "php",
          "content": "<?php\n// Set a cookie\nif (isset($_POST['setCookie'])) {\n    setcookie(\"user\", $_POST['username'], time() + (86400 * 30), \"/\"); // Cookie expires in 30 days\n    echo \"Cookie set successfully!<br>\";\n}\n\n// Retrieve a cookie\nif (isset($_POST['getCookie'])) {\n    if (isset($_COOKIE['user'])) {\n        echo \"Stored Cookie Value: \" . htmlspecialchars($_COOKIE['user']) . \"<br>\";\n    } else {\n        echo \"Cookie not available or deleted!<br>\";\n    }\n}\n\n// Delete a cookie\nif (isset($_POST['deleteCookie'])) {\n    setcookie(\"user\", \"\", time() - 3600, \"/\"); // Expire the cookie\n    echo \"Cookie deleted successfully!<br>\";\n}\n?>\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Cookie Example</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n    <div class=\"container\">\n        <h2>PHP Cookie Management</h2>\n        <form method=\"post\">\n            <label>Enter Username:</label>\n            <input type=\"text\" name=\"username\" required>\n            <button type=\"submit\" name=\"setCookie\">Set Cookie</button>\n        </form>\n        <form method=\"post\" style=\"margin-top: 10px;\">\n            <button type=\"submit\" name=\"getCookie\">Get Cookie</button>\n        </form>\n        <form method=\"post\" style=\"margin-top: 10px;\">\n            <button type=\"submit\" name=\"deleteCookie\">Delete Cookie</button>\n        </form>\n    </div>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.jpeg",
          "path": "tasks/task6b/output_screenshot.jpeg",
          "size": "43.8 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task6b/style.css",
          "size": "729 B",
          "type": "css",
          "content": "body {\n    font-family: Arial, sans-serif;\n    background-color: #f2f2f2;\n}\n.container {\n    width: 400px;\n    margin: 80px auto;\n    padding: 25px;\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 0 10px gray;\n}\nh2 {\n    text-align: center;\n}\nlabel {\n    display: block;\n    margin-top: 15px;\n    margin-bottom: 5px;\n}\ninput[type=\"text\"],\ninput[type=\"password\"] {\n    width: 95%;\n    padding: 10px;\n}\ninput[type=\"submit\"] {\n    width: 100%;\n    padding: 10px;\n    margin-top: 20px;\n    background-color: blue;\n    color: white;\n    border: none;\n    cursor: pointer;\n}\n.error {\n    color: red;\n}\n.warning {\n    color: orange;\n    font-weight: bold;\n}\n.success {\n    color: green;\n    font-weight: bold;\n}\n"
        },
        {
          "name": "Task 6B material.docx",
          "path": "tasks/task6b/Task 6B material.docx",
          "size": "90.9 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "7A",
      "id": "task-7a",
      "title": "Database Table Organization & Creation",
      "question": "Experiment 7(a): Design a PHP application for: Organize a database table with user information like username, password and other required information.",
      "aim": "To connect to MySQL from PHP, create database userdatabasenew, and execute DDL queries creating table users.",
      "tags": [
        "PHP",
        "MySQL",
        "Database",
        "DDL",
        "Table Creation"
      ],
      "folderPath": "tasks/task7a",
      "zipPath": "tasks/task7a.zip",
      "filesCount": 4,
      "files": [
        {
          "name": "7a_create_db.php",
          "path": "tasks/task7a/7a_create_db.php",
          "size": "908 B",
          "type": "php",
          "content": "<?php\n// Step 1: Connect to MySQL\n$conn = new mysqli(\"localhost\", \"root\", \"\");\nif ($conn->connect_error) {\n    die(\"Connection failed: \" . $conn->connect_error);\n}\necho \"MySQL connection successful!<br><br>\";\n\n// Step 2: Create database\n$sql = \"CREATE DATABASE IF NOT EXISTS userdatabasenew\";\nif ($conn->query($sql) === TRUE) {\n    echo \"Database created successfully!<br><br>\";\n} else {\n    die(\"Database creation failed: \" . $conn->error);\n}\n\n// Step 3: Select database\n$conn->select_db(\"userdatabasenew\");\n\n// Step 4: Create table\n$sql = \"CREATE TABLE IF NOT EXISTS users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    password VARCHAR(255) NOT NULL,\n    email VARCHAR(100) NOT NULL\n)\";\nif ($conn->query($sql) === TRUE) {\n    echo \"Table created successfully!\";\n} else {\n    echo \"Table creation failed: \" . $conn->error;\n}\n\n// Step 5: Close connection\n$conn->close();\n?>\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7a/db_schema.sql",
          "size": "249 B",
          "type": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\nUSE userdatabasenew;\n\nCREATE TABLE IF NOT EXISTS users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    password VARCHAR(255) NOT NULL,\n    email VARCHAR(100) NOT NULL\n);\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task7a/output_screenshot.png",
          "size": "46.5 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "TASK 7 SL program for record.docx",
          "path": "tasks/task7a/TASK 7 SL program for record.docx",
          "size": "820.8 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "7B",
      "id": "task-7b",
      "title": "User Registration & Database Insertion",
      "question": "Experiment 7(b): Design a registration page and insert the data into created database table.",
      "aim": "To capture user registration inputs from an HTML form, hash passwords, and persist records into MySQL using PHP prepared statements.",
      "tags": [
        "PHP",
        "MySQL",
        "Registration",
        "Prepared Statements",
        "Password Hash"
      ],
      "folderPath": "tasks/task7b",
      "zipPath": "tasks/task7b.zip",
      "filesCount": 4,
      "files": [
        {
          "name": "7b_register.php",
          "path": "tasks/task7b/7b_register.php",
          "size": "1.2 KB",
          "type": "php",
          "content": "<?php\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\nif ($conn->connect_error) {\n    die(\"Connection failed: \" . $conn->connect_error);\n}\n\n$message = \"\";\nif (isset($_POST['register'])) {\n    $username = $_POST['username'];\n    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);\n    $email = $_POST['email'];\n\n    $sql = \"INSERT INTO users (username, password, email) VALUES (?, ?, ?)\";\n    $stmt = $conn->prepare($sql);\n    $stmt->bind_param(\"sss\", $username, $password, $email);\n\n    if ($stmt->execute()) {\n        $message = \"Registration successful!\";\n    } else {\n        $message = \"Registration failed: \" . $stmt->error;\n    }\n    $stmt->close();\n}\n?>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>User Registration</title>\n</head>\n<body>\n    <h2>User Registration</h2>\n    <?php if ($message != \"\") echo \"<p><b>$message</b></p>\"; ?>\n    <form method=\"POST\">\n        Username: <input type=\"text\" name=\"username\" required><br><br>\n        Password: <input type=\"password\" name=\"password\" required><br><br>\n        Email: <input type=\"email\" name=\"email\" required><br><br>\n        <input type=\"submit\" name=\"register\" value=\"Register\">\n    </form>\n</body>\n</html>\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7b/db_schema.sql",
          "size": "249 B",
          "type": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\nUSE userdatabasenew;\n\nCREATE TABLE IF NOT EXISTS users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    password VARCHAR(255) NOT NULL,\n    email VARCHAR(100) NOT NULL\n);\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task7b/output_screenshot.png",
          "size": "49.5 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "TASK 7 SL program for record.docx",
          "path": "tasks/task7b/TASK 7 SL program for record.docx",
          "size": "820.8 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "8A",
      "id": "task-8a",
      "title": "Database Record Update Script",
      "question": "Experiment 8(a): Examine and write a PHP script for updating required user information in the database.",
      "aim": "To query MySQL database from PHP and execute SQL UPDATE queries with bind parameters to modify existing user records.",
      "tags": [
        "PHP",
        "MySQL",
        "CRUD",
        "UPDATE",
        "Database"
      ],
      "folderPath": "tasks/task8a",
      "zipPath": "tasks/task8a.zip",
      "filesCount": 3,
      "files": [
        {
          "name": "output_screenshot.png",
          "path": "tasks/task8a/output_screenshot.png",
          "size": "457.8 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "TASK 8 SL program for record.docx",
          "path": "tasks/task8a/TASK 8 SL program for record.docx",
          "size": "1.5 MB",
          "type": "doc",
          "content": null
        },
        {
          "name": "Task 8a.php",
          "path": "tasks/task8a/Task 8a.php",
          "size": "1.3 KB",
          "type": "php",
          "content": "<?php\n// Connect to database\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\n\n// Check connection\nif ($conn->connect_error) {\n    die(\"Connection failed: \" . $conn->connect_error);\n}\n\n$message = \"\";\n\n// Update user information\nif (isset($_POST['update'])) {\n    $id = $_POST['id'];\n    $username = $_POST['username'];\n    $email = $_POST['email'];\n\n    $sql = \"UPDATE users SET username=?, email=? WHERE id=?\";\n    $stmt = $conn->prepare($sql);\n    $stmt->bind_param(\"ssi\", $username, $email, $id);\n\n    if ($stmt->execute()) {\n        $message = \"User information updated successfully!\";\n    } else {\n        $message = \"Error updating user: \" . $stmt->error;\n    }\n    $stmt->close();\n}\n$conn->close();\n?>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Update User Information</title>\n</head>\n<body>\n    <h2>Update User Information</h2>\n    <?php if ($message != \"\") echo \"<p><b>$message</b></p>\"; ?>\n    <form method=\"post\">\n        Enter User ID:\n        <input type=\"number\" name=\"id\" required><br><br>\n\n        Enter New Username:\n        <input type=\"text\" name=\"username\" required><br><br>\n\n        Enter New Email:\n        <input type=\"email\" name=\"email\" required><br><br>\n\n        <input type=\"submit\" name=\"update\" value=\"Update User\">\n    </form>\n</body>\n</html>\n"
        }
      ]
    },
    {
      "taskNumber": "8B",
      "id": "task-8b",
      "title": "Database Record Deletion Script",
      "question": "Experiment 8(b): Write a PHP script for deleting a specified user from the database.",
      "aim": "To execute SQL DELETE queries from PHP based on user ID input and verify deletion in phpMyAdmin.",
      "tags": [
        "PHP",
        "MySQL",
        "CRUD",
        "DELETE",
        "Database"
      ],
      "folderPath": "tasks/task8b",
      "zipPath": "tasks/task8b.zip",
      "filesCount": 3,
      "files": [
        {
          "name": "output_screenshot.png",
          "path": "tasks/task8b/output_screenshot.png",
          "size": "474.9 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "TASK 8 SL program for record.docx",
          "path": "tasks/task8b/TASK 8 SL program for record.docx",
          "size": "1.5 MB",
          "type": "doc",
          "content": null
        },
        {
          "name": "Task 8b.php",
          "path": "tasks/task8b/Task 8b.php",
          "size": "1.1 KB",
          "type": "php",
          "content": "<?php\n// Connect to database\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\n\n// Check connection\nif ($conn->connect_error) {\n    die(\"Connection failed: \" . $conn->connect_error);\n}\n\n$message = \"\";\n\n// Delete user information\nif (isset($_POST['delete'])) {\n    $id = $_POST['id'];\n\n    $sql = \"DELETE FROM users WHERE id=?\";\n    $stmt = $conn->prepare($sql);\n    $stmt->bind_param(\"i\", $id);\n\n    if ($stmt->execute()) {\n        if ($stmt->affected_rows > 0) {\n            $message = \"User deleted successfully!\";\n        } else {\n            $message = \"User ID not found.\";\n        }\n    } else {\n        $message = \"Error deleting user: \" . $stmt->error;\n    }\n    $stmt->close();\n}\n$conn->close();\n?>\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Delete User Information</title>\n</head>\n<body>\n    <h2>Delete User Information</h2>\n    <?php if ($message != \"\") echo \"<p><b>$message</b></p>\"; ?>\n    <form method=\"post\">\n        Enter User ID:\n        <input type=\"number\" name=\"id\" required><br><br>\n\n        <input type=\"submit\" name=\"delete\" value=\"Delete User\">\n    </form>\n</body>\n</html>\n"
        }
      ]
    },
    {
      "taskNumber": "9",
      "id": "task-9",
      "title": "XML Motorbike Catalog with DTD & XSL Styling",
      "question": "Experiment 9: Create an XML file along with its DTD for a catalog of four stroke motorbikes, where each motorbike has the following child elements: make, model, year, color, engine, chassis number and accessories. The engine element has child elements: engine number, number of cylinders, type of fuel. The accessories element has attributes disc brake, auto-start and radio. Display in a styled table using XSL and CSS.",
      "aim": "To design structured hierarchical data in XML, enforce grammar via DTD validation, and transform XML into an HTML table with XSLT and CSS.",
      "tags": [
        "XML",
        "DTD",
        "XSLT",
        "CSS3",
        "Schema Validation"
      ],
      "folderPath": "tasks/task9",
      "zipPath": "tasks/task9.zip",
      "filesCount": 6,
      "files": [
        {
          "name": "m.xml",
          "path": "tasks/task9/m.xml",
          "size": "2.0 KB",
          "type": "xml",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<?xml-stylesheet type=\"text/xsl\" href=\"motorbike_catalog.xsl\"?>\n<!DOCTYPE catalog SYSTEM \"motorbike_catalog.dtd\">\n<catalog>\n    <motorbike>\n        <make>Honda</make>\n        <model>CBR500R</model>\n        <year>2023</year>\n        <color>Red</color>\n        <engine>\n            <engine_number>EN123456</engine_number>\n            <number_of_cylinders>2</number_of_cylinders>\n            <type_of_fuel>Petrol</type_of_fuel>\n        </engine>\n        <chassis_number>CH123456789</chassis_number>\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"no\"/>\n    </motorbike>\n\n    <motorbike>\n        <make>Yamaha</make>\n        <model>R15</model>\n        <year>2022</year>\n        <color>Blue</color>\n        <engine>\n            <engine_number>EN987654</engine_number>\n            <number_of_cylinders>1</number_of_cylinders>\n            <type_of_fuel>Petrol</type_of_fuel>\n        </engine>\n        <chassis_number>CH987654321</chassis_number>\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"yes\"/>\n    </motorbike>\n\n    <motorbike>\n        <make>TVS</make>\n        <model>Apache RTR</model>\n        <year>2024</year>\n        <color>Black</color>\n        <engine>\n            <engine_number>EN456789</engine_number>\n            <number_of_cylinders>1</number_of_cylinders>\n            <type_of_fuel>Petrol</type_of_fuel>\n        </engine>\n        <chassis_number>CH456789123</chassis_number>\n        <accessories disc_brake=\"yes\" auto_start=\"no\" radio=\"no\"/>\n    </motorbike>\n\n    <motorbike>\n        <make>Kawasaki</make>\n        <model>Ninja 300</model>\n        <year>2023</year>\n        <color>Green</color>\n        <engine>\n            <engine_number>EN654321</engine_number>\n            <number_of_cylinders>2</number_of_cylinders>\n            <type_of_fuel>Petrol</type_of_fuel>\n        </engine>\n        <chassis_number>CH654321987</chassis_number>\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"no\"/>\n    </motorbike>\n</catalog>\n"
        },
        {
          "name": "motorbike_catalog.dtd",
          "path": "tasks/task9/motorbike_catalog.dtd",
          "size": "591 B",
          "type": "dtd",
          "content": "<!ELEMENT catalog (motorbike+)>\n<!ELEMENT motorbike (make, model, year, color, engine, chassis_number, accessories)>\n\n<!ELEMENT make (#PCDATA)>\n<!ELEMENT model (#PCDATA)>\n<!ELEMENT year (#PCDATA)>\n<!ELEMENT color (#PCDATA)>\n\n<!ELEMENT engine (engine_number, number_of_cylinders, type_of_fuel)>\n<!ELEMENT engine_number (#PCDATA)>\n<!ELEMENT number_of_cylinders (#PCDATA)>\n<!ELEMENT type_of_fuel (#PCDATA)>\n\n<!ELEMENT chassis_number (#PCDATA)>\n\n<!ELEMENT accessories EMPTY>\n<!ATTLIST accessories\n    disc_brake (yes|no) #REQUIRED\n    auto_start (yes|no) #REQUIRED\n    radio (yes|no) #REQUIRED>\n"
        },
        {
          "name": "motorbike_catalog.xsl",
          "path": "tasks/task9/motorbike_catalog.xsl",
          "size": "1.5 KB",
          "type": "xsl",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\n<xsl:output method=\"html\" encoding=\"UTF-8\"/>\n\n<xsl:template match=\"/\">\n<html>\n<head>\n    <title>Motorbike Catalog</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"/>\n</head>\n<body>\n    <h1>Motorbike Catalog</h1>\n    <table>\n        <tr>\n            <th>MAKE</th>\n            <th>MODEL</th>\n            <th>YEAR</th>\n            <th>COLOR</th>\n            <th>ENGINE NUMBER</th>\n            <th>CYLINDERS</th>\n            <th>FUEL TYPE</th>\n            <th>CHASSIS NUMBER</th>\n            <th>DISC BRAKE</th>\n            <th>AUTO START</th>\n            <th>RADIO</th>\n        </tr>\n        <xsl:for-each select=\"catalog/motorbike\">\n        <tr>\n            <td><xsl:value-of select=\"make\"/></td>\n            <td><xsl:value-of select=\"model\"/></td>\n            <td><xsl:value-of select=\"year\"/></td>\n            <td><xsl:value-of select=\"color\"/></td>\n            <td><xsl:value-of select=\"engine/engine_number\"/></td>\n            <td><xsl:value-of select=\"engine/number_of_cylinders\"/></td>\n            <td><xsl:value-of select=\"engine/type_of_fuel\"/></td>\n            <td><xsl:value-of select=\"chassis_number\"/></td>\n            <td><xsl:value-of select=\"accessories/@disc_brake\"/></td>\n            <td><xsl:value-of select=\"accessories/@auto_start\"/></td>\n            <td><xsl:value-of select=\"accessories/@radio\"/></td>\n        </tr>\n        </xsl:for-each>\n    </table>\n</body>\n</html>\n</xsl:template>\n</xsl:stylesheet>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task9/output_screenshot.png",
          "size": "140.2 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task9/style.css",
          "size": "370 B",
          "type": "css",
          "content": "body {\n    font-family: Arial;\n    background-color: lightyellow;\n    text-align: center;\n}\nh1 {\n    color: darkblue;\n}\ntable {\n    width: 95%;\n    margin: auto;\n    border-collapse: collapse;\n}\nth {\n    background-color: grey;\n    color: white;\n    font-weight: bold;\n}\ntd, th {\n    border: 1px solid black;\n    padding: 10px;\n}\ntd {\n    background-color: lightblue;\n}\n"
        },
        {
          "name": "TASK 9 SL for record.docx",
          "path": "tasks/task9/TASK 9 SL for record.docx",
          "size": "158.2 KB",
          "type": "doc",
          "content": null
        }
      ]
    },
    {
      "taskNumber": "10",
      "id": "task-10",
      "title": "Server Date & Time Retrieval (jQuery AJAX & PHP)",
      "question": "Experiment 10: Create a jQuery AJAX application to retrieve the contents of a PHP file. Example: Display current server date and time when the user clicks a button.",
      "aim": "To demonstrate asynchronous client-server communication using jQuery $.get to fetch server timestamp from date-time.php without reloading.",
      "tags": [
        "jQuery",
        "AJAX",
        "PHP",
        "Date/Time",
        "Asynchronous"
      ],
      "folderPath": "tasks/task10",
      "zipPath": "tasks/task10.zip",
      "filesCount": 4,
      "files": [
        {
          "name": "date-time.php",
          "path": "tasks/task10/date-time.php",
          "size": "117 B",
          "type": "php",
          "content": "<?php\n// Get current date and time from server\necho \"Current Server Date and Time: \";\necho date(\"d-m-Y h:i:s A\");\n?>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task10/output_screenshot.png",
          "size": "73.0 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "TASK 10 SL for record.docx",
          "path": "tasks/task10/TASK 10 SL for record.docx",
          "size": "86.3 KB",
          "type": "doc",
          "content": null
        },
        {
          "name": "Task 10.html",
          "path": "tasks/task10/Task 10.html",
          "size": "678 B",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html>\n<head>\n    <title>jQuery AJAX Example</title>\n    <!-- Include jQuery library -->\n    <script src=\"https://code.jquery.com/jquery-3.5.1.min.js\"></script>\n\n    <script>\n    $(document).ready(function() {\n        // Execute when button is clicked\n        $(\"#btn\").click(function() {\n            // Send GET request to PHP file\n            $.get(\"date-time.php\", function(data) {\n                // Display server response\n                $(\"#result\").html(data);\n            });\n        });\n    });\n    </script>\n</head>\n<body>\n    <h2>jQuery AJAX Example</h2>\n    <button id=\"btn\">Get Server Date and Time</button>\n    <p id=\"result\"></p>\n</body>\n</html>\n"
        }
      ]
    },
    {
      "taskNumber": "11",
      "id": "task-11",
      "title": "Live Name Suggestions (jQuery AJAX & PHP)",
      "question": "Experiment 11: Implement a live search suggestion box using jQuery AJAX and PHP. As the user types characters into an input field, send asynchronous requests to a PHP script containing an array of names and display matching autocomplete suggestions in real time.",
      "aim": "To build an interactive autocomplete search widget using jQuery keyup event listeners, asynchronous GET requests, and PHP substring array filtering.",
      "tags": [
        "jQuery",
        "AJAX",
        "PHP",
        "Live Search",
        "Autocomplete",
        "String Matching"
      ],
      "folderPath": "tasks/task11",
      "zipPath": "tasks/task11.zip",
      "filesCount": 4,
      "files": [
        {
          "name": "output_screenshot.png",
          "path": "tasks/task11/output_screenshot.png",
          "size": "60.7 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "search.php",
          "path": "tasks/task11/search.php",
          "size": "587 B",
          "type": "php",
          "content": "<?php\n// List of sample names\n$names = [\"Alice\", \"Bob\", \"Charlie\", \"David\",\n          \"Emma\", \"Ethan\", \"Sophia\", \"Samuel\",\n          \"Olivia\", \"Liam\"];\n\n// Check whether query is received\nif (isset($_GET['query'])) {\n    $query = trim($_GET['query']);\n    $suggestions = [];\n\n    if ($query != \"\") {\n        foreach ($names as $name) {\n            if (stripos($name, $query) !== false) {\n                $suggestions[] = $name;\n            }\n        }\n    }\n\n    if (empty($suggestions)) {\n        echo \"No suggestions\";\n    } else {\n        echo implode(\", \", $suggestions);\n    }\n}\n?>\n"
        },
        {
          "name": "TASK 11 SL program for record.docx",
          "path": "tasks/task11/TASK 11 SL program for record.docx",
          "size": "184.6 KB",
          "type": "doc",
          "content": null
        },
        {
          "name": "Task 11.html",
          "path": "tasks/task11/Task 11.html",
          "size": "1.2 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Live Name Suggestion</title>\n    <!-- Include jQuery library -->\n    <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>\n</head>\n<body>\n    <h2>Search for a Name</h2>\n\n    <!-- Textbox to enter a name -->\n    <input type=\"text\" id=\"searchBox\" placeholder=\"Start typing...\">\n\n    <!-- Display suggested names -->\n    <div id=\"suggestions\" style=\"margin-top: 10px; font-weight: bold;\"></div>\n\n    <script>\n    $(document).ready(function() {\n        // Execute when user types in textbox\n        $(\"#searchBox\").on(\"keyup\", function() {\n            let query = $(this).val();\n\n            if (query.length > 0) {\n                $.ajax({\n                    url: \"search.php\",\n                    type: \"GET\",\n                    data: { query: query },\n                    success: function(response) {\n                        $(\"#suggestions\").text(response);\n                    },\n                    error: function() {\n                        $(\"#suggestions\").text(\"Error fetching data.\");\n                    }\n                });\n            } else {\n                $(\"#suggestions\").text(\"\");\n            }\n        });\n    });\n    </script>\n</body>\n</html>\n"
        }
      ]
    },
    {
      "taskNumber": "12",
      "id": "task-12",
      "title": "AJAX Database Retrieval without Page Reload",
      "question": "Experiment 12: Write an HTML and PHP application using pure JavaScript XMLHttpRequest AJAX. When a user selects a name from a dropdown list, send the user ID to a PHP script (getuser.php), query MySQL database, and display the user's complete profile (Firstname, Lastname, Age, Hometown, Job) in a formatted table without page refresh.",
      "aim": "To implement full-stack asynchronous database querying using native JavaScript XMLHttpRequest, PHP mysqli prepared statements, and dynamic DOM table injection.",
      "tags": [
        "AJAX",
        "XMLHttpRequest",
        "PHP",
        "MySQL",
        "Asynchronous DB Lookup"
      ],
      "folderPath": "tasks/task12",
      "zipPath": "tasks/task12.zip",
      "filesCount": 8,
      "files": [
        {
          "name": "db_schema.sql",
          "path": "tasks/task12/db_schema.sql",
          "size": "505 B",
          "type": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS ajax_db;\nUSE ajax_db;\n\nCREATE TABLE IF NOT EXISTS users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    username VARCHAR(50),\n    phone VARCHAR(15),\n    email VARCHAR(100),\n    place VARCHAR(50)\n);\n\nINSERT INTO users (username, phone, email, place)\nVALUES('Alice', '9876543210', 'alice@gmail.com', 'Hyderabad'),\n('Bob', '9876543211', 'bob@gmail.com', 'Chennai'),\n('Charlie', '9876543212', 'charlie@gmail.com', 'Bangalore'),\n('David', '9876543213', 'david@gmail.com', 'Mumbai');\n"
        },
        {
          "name": "getuser.php",
          "path": "tasks/task12/getuser.php",
          "size": "1.0 KB",
          "type": "php",
          "content": "<?php\n// Connect to MySQL database\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"ajax_db\");\n\n// Check database connection\nif (!$conn) {\n    die(\"Connection failed: \" . mysqli_connect_error());\n}\n\n// Get selected user ID\n$id = intval($_GET['id']);\n\n// SQL query to retrieve user information\n$sql = \"SELECT * FROM users WHERE id = $id\";\n$result = mysqli_query($conn, $sql);\n\n// Display user details in table\nif ($result && mysqli_num_rows($result) > 0) {\n    echo \"<table>\";\n    echo \"<tr>\n            <th>Username</th>\n            <th>Phone</th>\n            <th>Email ID</th>\n            <th>Place</th>\n          </tr>\";\n\n    while ($row = mysqli_fetch_assoc($result)) {\n        echo \"<tr>\";\n        echo \"<td>\" . htmlspecialchars($row['username']) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row['phone']) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row['email']) . \"</td>\";\n        echo \"<td>\" . htmlspecialchars($row['place']) . \"</td>\";\n        echo \"</tr>\";\n    }\n    echo \"</table>\";\n} else {\n    echo \"No user found\";\n}\n\nmysqli_close($conn);\n?>\n"
        },
        {
          "name": "output_screenshot1.png",
          "path": "tasks/task12/output_screenshot1.png",
          "size": "63.1 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "output_screenshot2.png",
          "path": "tasks/task12/output_screenshot2.png",
          "size": "79.3 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "output_screenshot3.png",
          "path": "tasks/task12/output_screenshot3.png",
          "size": "85.8 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "output_screenshot4.png",
          "path": "tasks/task12/output_screenshot4.png",
          "size": "87.3 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "TASK 12 SL program for record.docx",
          "path": "tasks/task12/TASK 12 SL program for record.docx",
          "size": "334.0 KB",
          "type": "doc",
          "content": null
        },
        {
          "name": "task12.html",
          "path": "tasks/task12/task12.html",
          "size": "1.3 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\n<html>\n<head>\n    <title>AJAX Database Example</title>\n    <style>\n        table, th, td {\n            border: 1px solid black;\n            border-collapse: collapse;\n            padding: 8px;\n        }\n    </style>\n</head>\n<body>\n    <h2>AJAX - Retrieve User Information</h2>\n\n    <!-- Dropdown list of names -->\n    <select id=\"username\" onchange=\"showUser(this.value)\">\n        <option value=\"\">Select a user</option>\n        <option value=\"1\">Alice</option>\n        <option value=\"2\">Bob</option>\n        <option value=\"3\">Charlie</option>\n        <option value=\"4\">David</option>\n    </select>\n\n    <br><br>\n\n    <!-- Display user information -->\n    <div id=\"result\">\n        User information will be displayed here.\n    </div>\n\n    <script>\n    function showUser(id) {\n        if (id == \"\") {\n            document.getElementById(\"result\").innerHTML = \"\";\n            return;\n        }\n\n        var xhttp = new XMLHttpRequest();\n        xhttp.onreadystatechange = function() {\n            if (this.readyState == 4 && this.status == 200) {\n                document.getElementById(\"result\").innerHTML = this.responseText;\n            }\n        };\n\n        xhttp.open(\"GET\", \"getuser.php?id=\" + id, true);\n        xhttp.send();\n    }\n    </script>\n</body>\n</html>\n"
        }
      ]
    }
  ]
};
