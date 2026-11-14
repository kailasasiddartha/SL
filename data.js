window.LAB_DATA = {
  "university": "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
  "department": "Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  "courseCode": "GR25A2082 / GR20",
  "courseTitle": "Scripting Languages Laboratory",
  "academicYear": "2025-2026",
  "tasksCount": 18,
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
          "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>My Portfolio</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <header>\r\n        <h1>Alex Developer</h1>\r\n        <nav>\r\n            <a href=\"#about\">About</a>\r\n            <a href=\"#projects\">Projects</a>\r\n            <a href=\"#contact\">Contact</a>\r\n        </nav>\r\n    </header>\r\n\r\n    <section id=\"about\" class=\"container\">\r\n        <h2>About Me</h2>\r\n        <p>Hello! I am a passionate web developer learning HTML, CSS, and JavaScript. I love building clean and functional websites.</p>\r\n    </section>\r\n\r\n    <section id=\"projects\" class=\"container\">\r\n        <h2>My Projects</h2>\r\n        <div class=\"project-card\">\r\n            <h3>Project One</h3>\r\n            <p>A simple calculator built with JavaScript.</p>\r\n        </div>\r\n        <div class=\"project-card\">\r\n            <h3>Project Two</h3>\r\n            <p>A responsive landing page using CSS Flexbox.</p>\r\n        </div>\r\n    </section>\r\n\r\n    <section id=\"contact\" class=\"container\">\r\n        <h2>Contact Me</h2>\r\n\r\n        <form action=\"#\" method=\"POST\" class=\"contact-form\">\r\n            <label for=\"name\">Name:</label>\r\n            <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter your name\" required>\r\n\r\n            <label for=\"email\">Email:</label>\r\n            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter your email\" required>\r\n\r\n            <label for=\"message\">Message:</label>\r\n            <textarea id=\"message\" name=\"message\" rows=\"4\" placeholder=\"Your message here...\" required></textarea>\r\n\r\n            <button type=\"submit\">Send Message</button>\r\n        </form>\r\n    </section>\r\n\r\n    <footer>\r\n        <p>&copy; 2026 Alex Developer. All rights reserved.</p>\r\n    </footer>\r\n</body>\r\n</html>\r\n"
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
          "content": "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f4f4f9;\r\n    color: #333;\r\n    line-height: 1.6;\r\n}\r\n\r\nheader {\r\n    background-color: #2c3e50;\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\nnav a {\r\n    color: white;\r\n    margin: 0 15px;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\nnav a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.container {\r\n    max-width: 800px;\r\n    margin: 30px auto;\r\n    padding: 20px;\r\n    background: white;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\r\n}\r\n\r\nh2 {\r\n    border-bottom: 2px solid #3498db;\r\n    padding-bottom: 5px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.project-card {\r\n    background: #ecf0f1;\r\n    padding: 15px;\r\n    margin-bottom: 10px;\r\n    border-left: 4px solid #3498db;\r\n}\r\n\r\n.contact-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 10px;\r\n}\r\n\r\nlabel {\r\n    font-weight: bold;\r\n}\r\n\r\ninput, textarea {\r\n    padding: 10px;\r\n    margin-top: 5px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\n\r\nbutton {\r\n    margin-top: 15px;\r\n    padding: 10px;\r\n    background-color: #3498db;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-size: 16px;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #2980b9;\r\n}\r\n\r\nfooter {\r\n    text-align: center;\r\n    padding: 15px;\r\n    background-color: #2c3e50;\r\n    color: white;\r\n    margin-top: 30px;\r\n}\r\n"
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
          "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Class Time Table</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <h1>Class Time Table</h1>\r\n    <h3>B.Tech - AI &amp; ML</h3>\r\n    <table>\r\n        <caption>Weekly Class Schedule</caption>\r\n        <tr>\r\n            <th>Day</th>\r\n            <th>9:00-10:00</th>\r\n            <th>10:00-11:00</th>\r\n            <th>11:00-12:00</th>\r\n            <th>12:00-1:00</th>\r\n            <th>1:00-2:00</th>\r\n            <th>2:00-3:00</th>\r\n            <th>3:00-4:00</th>\r\n        </tr>\r\n        <tr>\r\n            <th>Monday</th>\r\n            <td>Mathematics</td>\r\n            <td>Python</td>\r\n            <td>DBMS</td>\r\n            <td>English</td>\r\n            <td class=\"break\" rowspan=\"5\">Lunch Break</td>\r\n            <td>AI</td>\r\n            <td>Library</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Tuesday</th>\r\n            <td>Python</td>\r\n            <td>Mathematics</td>\r\n            <td>AI</td>\r\n            <td>DBMS</td>\r\n            <td colspan=\"2\">Python Lab</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Wednesday</th>\r\n            <td>DBMS</td>\r\n            <td>English</td>\r\n            <td>Mathematics</td>\r\n            <td>Python</td>\r\n            <td>AI</td>\r\n            <td>Sports</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Thursday</th>\r\n            <td>AI</td>\r\n            <td>DBMS</td>\r\n            <td>Python</td>\r\n            <td>Mathematics</td>\r\n            <td colspan=\"2\">DBMS Lab</td>\r\n        </tr>\r\n        <tr>\r\n            <th>Friday</th>\r\n            <td>English</td>\r\n            <td>AI</td>\r\n            <td>DBMS</td>\r\n            <td>Python</td>\r\n            <td>Mathematics</td>\r\n            <td>Seminar</td>\r\n        </tr>\r\n    </table>\r\n</body>\r\n</html>\r\n"
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
          "size": "692 B",
          "type": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f4f7fb;\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\nh1 {\r\n    color: #1f4e79;\r\n}\r\nh3 {\r\n    color: #333333;\r\n}\r\ntable {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    margin: 20px auto;\r\n    background-color: white;\r\n}\r\ncaption {\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    padding: 10px;\r\n}\r\nth, td {\r\n    border: 1px solid #333333;\r\n    padding: 12px 8px;\r\n    text-align: center;\r\n}\r\nth {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\ntr:nth-child(even) {\r\n    background-color: #eef5ee;\r\n}\r\n.break {\r\n    background-color: #ffe699;\r\n    font-weight: bold;\r\n    writing-mode: vertical-rl;\r\n}\r\n"
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
      "filesCount": 3,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task2/index.html",
          "size": "4.8 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Registration Form Validation</title>\r\n    <style>\r\n        body {\r\n            font-family: Arial, sans-serif;\r\n            margin: 30px;\r\n        }\r\n        form {\r\n            max-width: 850px;\r\n        }\r\n        .form-row {\r\n            margin-bottom: 15px;\r\n        }\r\n        label {\r\n            display: inline-block;\r\n            width: 150px;\r\n        }\r\n        input {\r\n            padding: 6px;\r\n            width: 220px;\r\n        }\r\n        .error {\r\n            color: red;\r\n            margin-left: 8px;\r\n            font-size: 13px;\r\n        }\r\n        #success {\r\n            color: green;\r\n            font-weight: bold;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <h2>Registration Form</h2>\r\n\r\n    <form id=\"registrationForm\" novalidate>\r\n        <div class=\"form-row\">\r\n            <label for=\"firstName\">First Name:</label>\r\n            <input type=\"text\" id=\"firstName\">\r\n            <span class=\"error\" id=\"firstNameError\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n            <label for=\"lastName\">Last Name:</label>\r\n            <input type=\"text\" id=\"lastName\">\r\n            <span class=\"error\" id=\"lastNameError\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n            <label for=\"email\">Email:</label>\r\n            <input type=\"text\" id=\"email\">\r\n            <span class=\"error\" id=\"emailError\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n            <label for=\"userId\">User ID:</label>\r\n            <input type=\"text\" id=\"userId\">\r\n            <span class=\"error\" id=\"userIdError\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n            <label for=\"password\">Password:</label>\r\n            <input type=\"password\" id=\"password\">\r\n            <span class=\"error\" id=\"passwordError\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-row\">\r\n            <label for=\"confirmPassword\">Confirm Password:</label>\r\n            <input type=\"password\" id=\"confirmPassword\">\r\n            <span class=\"error\" id=\"confirmPasswordError\"></span>\r\n        </div>\r\n\r\n        <button type=\"submit\">Submit</button>\r\n        <p id=\"success\"></p>\r\n    </form>\r\n\r\n    <script>const form = document.getElementById(\"registrationForm\");\r\n\r\n        form.addEventListener(\"submit\", function (event) {\r\n            event.preventDefault();\r\n\r\n            document.querySelectorAll(\".error\").forEach(function (element) {\r\n                element.textContent = \"\";\r\n            });\r\n            document.getElementById(\"success\").textContent = \"\";\r\n\r\n            const firstName = document.getElementById(\"firstName\").value.trim();\r\n            const lastName = document.getElementById(\"lastName\").value.trim();\r\n            const email = document.getElementById(\"email\").value.trim();\r\n            const userId = document.getElementById(\"userId\").value.trim();\r\n            const password = document.getElementById(\"password\").value;\r\n            const confirmPassword = document.getElementById(\"confirmPassword\").value;\r\n\r\n            let isValid = true;\r\n\r\n            if (firstName === \"\") {\r\n                showError(\"firstNameError\", \"First Name is required.\");\r\n                isValid = false;\r\n            }\r\n            if (lastName === \"\") {\r\n                showError(\"lastNameError\", \"Last Name is required.\");\r\n                isValid = false;\r\n            }\r\n            if (email === \"\") {\r\n                showError(\"emailError\", \"Email is required.\");\r\n                isValid = false;\r\n            } else {\r\n                const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n                if (!emailPattern.test(email)) {\r\n                    showError(\"emailError\", \"Enter a valid email address.\");\r\n                    isValid = false;\r\n                }\r\n            }\r\n            if (userId === \"\") {\r\n                showError(\"userIdError\", \"User ID is required.\");\r\n                isValid = false;\r\n            }\r\n            if (password === \"\") {\r\n                showError(\"passwordError\", \"Password is required.\");\r\n                isValid = false;\r\n            }\r\n            if (confirmPassword === \"\") {\r\n                showError(\"confirmPasswordError\", \"Please confirm your password.\");\r\n                isValid = false;\r\n            } else if (password !== confirmPassword) {\r\n                showError(\"confirmPasswordError\", \"Passwords do not match.\");\r\n                isValid = false;\r\n            }\r\n\r\n            if (isValid) {\r\n                document.getElementById(\"success\").textContent =\r\n                    \"All fields are valid. Form submitted successfully!\";\r\n            }\r\n        });\r\n\r\n        function showError(elementId, message) {\r\n            document.getElementById(elementId).textContent = message;\r\n        }\r\n</script>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task2/output_screenshot.png",
          "size": "16.9 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "task 2 material.docx",
          "path": "tasks/task2/task 2 material.docx",
          "size": "71.5 KB",
          "type": "doc",
          "content": null
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
          "size": "1.8 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Multiplication Table</title>\r\n    <style>\r\n        body { font-family: Arial, sans-serif; text-align: center; }\r\n        table { border-collapse: collapse; margin: 20px auto; }\r\n        th, td { border: 1px solid #777; padding: 10px; }\r\n        th { background-color: #2563eb; color: white; }\r\n    </style>\r\n</head>\r\n<body>\r\n    <h2>Multiplication Table Generator</h2>\r\n    <label>Rows: <input type=\"number\" id=\"rows\" min=\"1\" value=\"4\"></label>\r\n    <label>Columns: <input type=\"number\" id=\"cols\" min=\"1\" value=\"5\"></label>\r\n    <button onclick=\"generateTable()\">Generate Table</button>\r\n    <div id=\"output\"></div>\r\n    <script>function generateTable() {\r\n            const rows = parseInt(document.getElementById(\"rows\").value);\r\n            const cols = parseInt(document.getElementById(\"cols\").value);\r\n            const output = document.getElementById(\"output\");\r\n\r\n            if (!Number.isInteger(rows) || !Number.isInteger(cols) ||\r\n                rows < 1 || cols < 1) {\r\n                output.textContent = \"Please enter positive row and column values.\";\r\n                return;\r\n            }\r\n\r\n            let html = \"<table><tr>\";\r\n            for (let j = 1; j <= cols; j++) html += `<th>${j}</th>`;\r\n            html += \"</tr>\";\r\n            for (let i = 1; i <= rows; i++) {\r\n                html += \"<tr>\";\r\n                for (let j = 1; j <= cols; j++) {\r\n                    html += `<td>${i} × ${j} = ${i * j}</td>`;\r\n                }\r\n                html += \"</tr>\";\r\n            }\r\n            html += \"</table>\";\r\n            output.innerHTML = html;\r\n        }\r\n        generateTable();\r\n</script>\r\n</body>\r\n</html>\r\n"
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
          "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Image Toggle Webpage</title>\r\n    <style>\r\n        body {\r\n            font-family: Arial, sans-serif;\r\n            text-align: center;\r\n            margin-top: 50px;\r\n            background-color: #f4f4f9;\r\n        }\r\n        .container {\r\n            background: white;\r\n            padding: 30px;\r\n            display: inline-block;\r\n            border-radius: 8px;\r\n            box-shadow: 0 4px 8px rgba(0,0,0,0.1);\r\n        }\r\n        img {\r\n            width: 320px;\r\n            height: 220px;\r\n            object-fit: cover;\r\n            border-radius: 6px;\r\n            border: 2px solid #ddd;\r\n            margin-bottom: 20px;\r\n        }\r\n        button {\r\n            padding: 10px 20px;\r\n            background-color: #008CBA;\r\n            color: white;\r\n            border: none;\r\n            border-radius: 4px;\r\n            cursor: pointer;\r\n            font-size: 16px;\r\n        }\r\n        button:hover {\r\n            background-color: #007bb5;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n\r\n    <div class=\"container\">\r\n        <h2>Image Toggle Application</h2>\r\n\r\n        <img id=\"toggleImg\" src=\"image1.png\" alt=\"Image 1\">\r\n        <br>\r\n        <button onclick=\"toggleImage()\">Toggle Image</button>\r\n    </div>\r\n\r\n    <script>function toggleImage() {\r\n            let imgElement = document.getElementById(\"toggleImg\");\r\n\r\n            if (imgElement.src.includes(\"image1\")) {\r\n                imgElement.src = \"image2.png\";\r\n                imgElement.alt = \"Image 2\";\r\n            } else {\r\n                imgElement.src = \"image1.png\";\r\n                imgElement.alt = \"Image 1\";\r\n            }\r\n        }\r\n</script>\r\n\r\n</body>\r\n</html>\r\n"
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
          "size": "697 B",
          "type": "html",
          "content": "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>To-Do List</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <h2>To-Do List</h2>\r\n        <input type=\"text\" id=\"taskInput\" placeholder=\"Add a new task...\">\r\n        <button onclick=\"addTask()\">Add</button>\r\n        <ul id=\"taskList\"></ul>\r\n    </div>\r\n    <table>\r\n        <thead>\r\n            <tr>\r\n                <th>Task</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody id=\"taskTable\"></tbody>\r\n    </table>\r\n\r\n    <script src=\"todo.js\"></script>\r\n</body>\r\n</html>\r\n"
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
          "size": "1.4 KB",
          "type": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f4f4f4;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 20px;\r\n}\r\n.container {\r\n    background: white;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\r\n    width: 320px;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\ninput {\r\n    width: 75%;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n}\r\nbutton {\r\n    padding: 10px 15px;\r\n    background: #28a745;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n}\r\nul {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\nli {\r\n    background: #eee;\r\n    margin: 5px 0;\r\n    padding: 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n.completed {\r\n    text-decoration: line-through;\r\n    color: gray;\r\n}\r\n.delete {\r\n    background: red;\r\n    color: white;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n}\r\ntable {\r\n    width: 320px;\r\n    border-collapse: collapse;\r\n    margin-top: 20px;\r\n    background: white;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\r\n}\r\nth, td {\r\n    border: 1px solid #ccc;\r\n    padding: 8px 12px;\r\n    text-align: left;\r\n}\r\n"
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
          "size": "1018 B",
          "type": "javascript",
          "content": "function addTask() {\r\n    let taskInput = document.getElementById(\"taskInput\");\r\n    let taskText = taskInput.value.trim();\r\n    if (taskText == \"\") return;\r\n\r\n    let li = document.createElement(\"li\");\r\n    li.innerHTML = `${taskText} <button class=\"delete\" onclick=\"removeTask(this, '${taskText}')\">X</button>`;\r\n    li.onclick = function() {\r\n        li.classList.toggle(\"completed\");\r\n    };\r\n    document.getElementById(\"taskList\").appendChild(li);\r\n    taskInput.value = \"\";\r\n\r\n    let tableRow = document.createElement(\"tr\");\r\n    tableRow.setAttribute(\"data-task\", taskText);\r\n    tableRow.innerHTML = `<td>${taskText}</td>`;\r\n    document.getElementById(\"taskTable\").appendChild(tableRow);\r\n}\r\n\r\nfunction removeTask(button, taskText) {\r\n    let taskItem = button.parentElement;\r\n    let tableRows = document.querySelectorAll(\"#taskTable tr\");\r\n    tableRows.forEach(row => {\r\n        if (row.getAttribute(\"data-task\") === taskText) {\r\n            row.remove();\r\n        }\r\n    });\r\n    taskItem.remove();\r\n}\r\n"
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
          "size": "2.4 KB",
          "type": "php",
          "content": "<?php\r\n$billOutput = \"\";\r\nif (isset($_POST['submit'])) {\r\n    $code = $_POST['code'];\r\n    $name = $_POST['name'];\r\n    $units = $_POST['units'];\r\n    $rate = $_POST['rate'];\r\n\r\n    $codes = explode(\",\", $code);\r\n    $names = explode(\",\", $name);\r\n    $unitssold = explode(\",\", $units);\r\n    $rates = explode(\",\", $rate);\r\n\r\n    $billOutput .= \"<h2>Bill Details</h2>\";\r\n    $billOutput .= \"<table>\";\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th>Item Code</th>\";\r\n    $billOutput .= \"<th>Item Name</th>\";\r\n    $billOutput .= \"<th>Units Sold</th>\";\r\n    $billOutput .= \"<th>Rate</th>\";\r\n    $billOutput .= \"<th>Amount</th>\";\r\n    $billOutput .= \"</tr>\";\r\n\r\n    $grandTotal = 0;\r\n    for ($i = 0; $i < 5; $i++) {\r\n        $c = isset($codes[$i]) ? trim($codes[$i]) : \"\";\r\n        $n = isset($names[$i]) ? trim($names[$i]) : \"\";\r\n        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;\r\n        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;\r\n        $amount = $u * $r;\r\n        $grandTotal += $amount;\r\n\r\n        $billOutput .= \"<tr>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($c) . \"</td>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($n) . \"</td>\";\r\n        $billOutput .= \"<td>\" . $u . \"</td>\";\r\n        $billOutput .= \"<td>\" . $r . \"</td>\";\r\n        $billOutput .= \"<td>\" . $amount . \"</td>\";\r\n        $billOutput .= \"</tr>\";\r\n    }\r\n\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th colspan='4'>Grand Total</th>\";\r\n    $billOutput .= \"<th>\" . $grandTotal . \"</th>\";\r\n    $billOutput .= \"</tr>\";\r\n    $billOutput .= \"</table>\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Item Billing System</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <h2>Item Billing System</h2>\r\n    <form method=\"post\" action=\"\">\r\n        <label>Item Codes:</label><br>\r\n        <input type=\"text\" name=\"code\" placeholder=\"101,102,103,104,105\" required>\r\n        <br>\r\n        <label>Item Names:</label><br>\r\n        <input type=\"text\" name=\"name\" placeholder=\"pen,book,pencil,file,notebook\" required>\r\n        <br>\r\n        <label>Units Sold:</label><br>\r\n        <input type=\"text\" name=\"units\" placeholder=\"10,5,20,8,12\" required>\r\n        <br>\r\n        <label>Rates:</label><br>\r\n        <input type=\"text\" name=\"rate\" placeholder=\"10,50,5,30,40\" required>\r\n        <br>\r\n        <input type=\"submit\" name=\"submit\" value=\"Generate Bill\">\r\n    </form>\r\n\r\n    <?php echo $billOutput; ?>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "index.html",
          "path": "tasks/task5/index.html",
          "size": "2.4 KB",
          "type": "html",
          "content": "<?php\r\n$billOutput = \"\";\r\nif (isset($_POST['submit'])) {\r\n    $code = $_POST['code'];\r\n    $name = $_POST['name'];\r\n    $units = $_POST['units'];\r\n    $rate = $_POST['rate'];\r\n\r\n    $codes = explode(\",\", $code);\r\n    $names = explode(\",\", $name);\r\n    $unitssold = explode(\",\", $units);\r\n    $rates = explode(\",\", $rate);\r\n\r\n    $billOutput .= \"<h2>Bill Details</h2>\";\r\n    $billOutput .= \"<table>\";\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th>Item Code</th>\";\r\n    $billOutput .= \"<th>Item Name</th>\";\r\n    $billOutput .= \"<th>Units Sold</th>\";\r\n    $billOutput .= \"<th>Rate</th>\";\r\n    $billOutput .= \"<th>Amount</th>\";\r\n    $billOutput .= \"</tr>\";\r\n\r\n    $grandTotal = 0;\r\n    for ($i = 0; $i < 5; $i++) {\r\n        $c = isset($codes[$i]) ? trim($codes[$i]) : \"\";\r\n        $n = isset($names[$i]) ? trim($names[$i]) : \"\";\r\n        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;\r\n        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;\r\n        $amount = $u * $r;\r\n        $grandTotal += $amount;\r\n\r\n        $billOutput .= \"<tr>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($c) . \"</td>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($n) . \"</td>\";\r\n        $billOutput .= \"<td>\" . $u . \"</td>\";\r\n        $billOutput .= \"<td>\" . $r . \"</td>\";\r\n        $billOutput .= \"<td>\" . $amount . \"</td>\";\r\n        $billOutput .= \"</tr>\";\r\n    }\r\n\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th colspan='4'>Grand Total</th>\";\r\n    $billOutput .= \"<th>\" . $grandTotal . \"</th>\";\r\n    $billOutput .= \"</tr>\";\r\n    $billOutput .= \"</table>\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Item Billing System</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <h2>Item Billing System</h2>\r\n    <form method=\"post\" action=\"\">\r\n        <label>Item Codes:</label><br>\r\n        <input type=\"text\" name=\"code\" placeholder=\"101,102,103,104,105\" required>\r\n        <br>\r\n        <label>Item Names:</label><br>\r\n        <input type=\"text\" name=\"name\" placeholder=\"pen,book,pencil,file,notebook\" required>\r\n        <br>\r\n        <label>Units Sold:</label><br>\r\n        <input type=\"text\" name=\"units\" placeholder=\"10,5,20,8,12\" required>\r\n        <br>\r\n        <label>Rates:</label><br>\r\n        <input type=\"text\" name=\"rate\" placeholder=\"10,50,5,30,40\" required>\r\n        <br>\r\n        <input type=\"submit\" name=\"submit\" value=\"Generate Bill\">\r\n    </form>\r\n\r\n    <?php echo $billOutput; ?>\r\n</body>\r\n</html>\r\n"
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
          "size": "460 B",
          "type": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    margin: 40px;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 80%;\r\n    margin-top: 20px;\r\n}\r\nth, td {\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\nth {\r\n    background-color: lightgray;\r\n}\r\ninput[type=\"text\"] {\r\n    width: 400px;\r\n    padding: 8px;\r\n    margin: 8px 0;\r\n}\r\ninput[type=\"submit\"] {\r\n    padding: 10px 25px;\r\n    margin: 10px 0;\r\n    cursor: pointer;\r\n}\r\n"
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
          "size": "1.7 KB",
          "type": "php",
          "content": "<?php\r\nsession_start();\r\n\r\nif (!isset($_SESSION[\"username\"])) {\r\n    header(\"Location: 6a_login.php\");\r\n    exit();\r\n}\r\n\r\n$timeout = 60;\r\n\r\nif (isset($_SESSION[\"last_activity\"])) {\r\n    $inactive_time = time() - $_SESSION[\"last_activity\"];\r\n\r\n    if ($inactive_time > $timeout) {\r\n        session_unset();\r\n        session_destroy();\r\n\r\n        echo \"<h2>Warning!</h2>\";\r\n        echo \"<p>Your session has expired because you were inactive for too long.</p>\";\r\n        echo \"<a href='6a_login.php'>Click here to Login Again</a>\";\r\n        exit();\r\n    }\r\n}\r\n\r\n$_SESSION[\"last_activity\"] = time();\r\n\r\n$message = \"\";\r\n\r\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\r\n    $name = $_POST[\"name\"];\r\n    $city = $_POST[\"city\"];\r\n    $phoneno = $_POST[\"phoneno\"];\r\n\r\n    $message = \"Details submitted successfully!\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>User Details</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <h2>User Details Form</h2>\r\n        <p>Welcome, <b><?php echo htmlspecialchars($_SESSION[\"username\"]); ?></b></p>\r\n        <p class=\"warning\">You have 60 seconds of inactivity before your session expires.</p>\r\n\r\n        <?php\r\n        if ($message != \"\") {\r\n            echo \"<p class='success'>$message</p>\";\r\n        }\r\n        ?>\r\n\r\n        <form method=\"post\" action=\"\">\r\n            <label>Name:</label>\r\n            <input type=\"text\" name=\"name\" required>\r\n\r\n            <label>City:</label>\r\n            <input type=\"text\" name=\"city\" required>\r\n\r\n            <label>Phone Number:</label>\r\n            <input type=\"text\" name=\"phoneno\" required>\r\n\r\n            <input type=\"submit\" value=\"Submit\">\r\n        </form>\r\n        <br>\r\n        <a href=\"logout.php\">Logout</a>\r\n    </div>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "6a_login.php",
          "path": "tasks/task6a/6a_login.php",
          "size": "1.1 KB",
          "type": "php",
          "content": "<?php\r\nsession_start();\r\n\r\n$error = \"\";\r\n\r\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\r\n    $username = $_POST[\"username\"];\r\n    $password = $_POST[\"password\"];\r\n\r\n    if ($username == \"admin\" && $password == \"12345\") {\r\n        $_SESSION[\"username\"] = $username;\r\n\r\n        $_SESSION[\"last_activity\"] = time();\r\n\r\n        header(\"Location: 6a_details.php\");\r\n        exit();\r\n    } else {\r\n        $error = \"Invalid username or password!\";\r\n    }\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Login Form</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <h2>Login Form</h2>\r\n        <?php\r\n        if ($error != \"\") {\r\n            echo \"<p class='error'>$error</p>\";\r\n        }\r\n        ?>\r\n        <form method=\"post\" action=\"\">\r\n            <label>Username:</label>\r\n            <input type=\"text\" name=\"username\" required>\r\n\r\n            <label>Password:</label>\r\n            <input type=\"password\" name=\"password\" required>\r\n\r\n            <input type=\"submit\" value=\"Login\">\r\n        </form>\r\n    </div>\r\n</body>\r\n</html>\r\n"
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
          "size": "774 B",
          "type": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f2f2f2;\r\n}\r\n.container {\r\n    width: 400px;\r\n    margin: 80px auto;\r\n    padding: 25px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px gray;\r\n}\r\nh2 {\r\n    text-align: center;\r\n}\r\nlabel {\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 5px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n    width: 95%;\r\n    padding: 10px;\r\n}\r\ninput[type=\"submit\"] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    background-color: blue;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.error {\r\n    color: red;\r\n}\r\n.warning {\r\n    color: orange;\r\n    font-weight: bold;\r\n}\r\n.success {\r\n    color: green;\r\n    font-weight: bold;\r\n}\r\n"
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
          "size": "1.3 KB",
          "type": "php",
          "content": "<?php\r\n\r\nif (isset($_POST['setCookie'])) {\r\n    setcookie(\"user\", $_POST['username'], time() + (86400 * 30), \"/\"); \r\n    echo \"Cookie set successfully!<br>\";\r\n}\r\n\r\nif (isset($_POST['getCookie'])) {\r\n    if (isset($_COOKIE['user'])) {\r\n        echo \"Stored Cookie Value: \" . htmlspecialchars($_COOKIE['user']) . \"<br>\";\r\n    } else {\r\n        echo \"Cookie not available or deleted!<br>\";\r\n    }\r\n}\r\n\r\nif (isset($_POST['deleteCookie'])) {\r\n    setcookie(\"user\", \"\", time() - 3600, \"/\"); \r\n    echo \"Cookie deleted successfully!<br>\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Cookie Example</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <h2>PHP Cookie Management</h2>\r\n        <form method=\"post\">\r\n            <label>Enter Username:</label>\r\n            <input type=\"text\" name=\"username\" required>\r\n            <button type=\"submit\" name=\"setCookie\">Set Cookie</button>\r\n        </form>\r\n        <form method=\"post\" style=\"margin-top: 10px;\">\r\n            <button type=\"submit\" name=\"getCookie\">Get Cookie</button>\r\n        </form>\r\n        <form method=\"post\" style=\"margin-top: 10px;\">\r\n            <button type=\"submit\" name=\"deleteCookie\">Delete Cookie</button>\r\n        </form>\r\n    </div>\r\n</body>\r\n</html>\r\n"
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
          "size": "774 B",
          "type": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f2f2f2;\r\n}\r\n.container {\r\n    width: 400px;\r\n    margin: 80px auto;\r\n    padding: 25px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px gray;\r\n}\r\nh2 {\r\n    text-align: center;\r\n}\r\nlabel {\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 5px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n    width: 95%;\r\n    padding: 10px;\r\n}\r\ninput[type=\"submit\"] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    background-color: blue;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.error {\r\n    color: red;\r\n}\r\n.warning {\r\n    color: orange;\r\n    font-weight: bold;\r\n}\r\n.success {\r\n    color: green;\r\n    font-weight: bold;\r\n}\r\n"
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
          "size": "806 B",
          "type": "php",
          "content": "<?php\r\n\r\n$conn = new mysqli(\"localhost\", \"root\", \"\");\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\necho \"MySQL connection successful!<br><br>\";\r\n\r\n$sql = \"CREATE DATABASE IF NOT EXISTS userdatabasenew\";\r\nif ($conn->query($sql) === TRUE) {\r\n    echo \"Database created successfully!<br><br>\";\r\n} else {\r\n    die(\"Database creation failed: \" . $conn->error);\r\n}\r\n\r\n$conn->select_db(\"userdatabasenew\");\r\n\r\n$sql = \"CREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n)\";\r\nif ($conn->query($sql) === TRUE) {\r\n    echo \"Table created successfully!\";\r\n} else {\r\n    echo \"Table creation failed: \" . $conn->error;\r\n}\r\n\r\n$conn->close();\r\n?>\r\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7a/db_schema.sql",
          "size": "258 B",
          "type": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\r\nUSE userdatabasenew;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n);\r\n"
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
          "content": "<?php\r\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\n\r\n$message = \"\";\r\nif (isset($_POST['register'])) {\r\n    $username = $_POST['username'];\r\n    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);\r\n    $email = $_POST['email'];\r\n\r\n    $sql = \"INSERT INTO users (username, password, email) VALUES (?, ?, ?)\";\r\n    $stmt = $conn->prepare($sql);\r\n    $stmt->bind_param(\"sss\", $username, $password, $email);\r\n\r\n    if ($stmt->execute()) {\r\n        $message = \"Registration successful!\";\r\n    } else {\r\n        $message = \"Registration failed: \" . $stmt->error;\r\n    }\r\n    $stmt->close();\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>User Registration</title>\r\n</head>\r\n<body>\r\n    <h2>User Registration</h2>\r\n    <?php if ($message != \"\") echo \"<p><b>$message</b></p>\"; ?>\r\n    <form method=\"POST\">\r\n        Username: <input type=\"text\" name=\"username\" required><br><br>\r\n        Password: <input type=\"password\" name=\"password\" required><br><br>\r\n        Email: <input type=\"email\" name=\"email\" required><br><br>\r\n        <input type=\"submit\" name=\"register\" value=\"Register\">\r\n    </form>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7b/db_schema.sql",
          "size": "258 B",
          "type": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\r\nUSE userdatabasenew;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n);\r\n"
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
      "taskNumber": "7C",
      "id": "task-7c",
      "title": "User Authentication & Session Login",
      "question": "Experiment 7(c): Design a login page and authenticate the user to display home page or else login error.",
      "aim": "To design a secure user login system in PHP that validates submitted credentials against hashed passwords in MySQL database, initializes authenticated sessions ($_SESSION), and handles logout.",
      "tags": [
        "PHP",
        "MySQL",
        "Authentication",
        "Sessions",
        "Login",
        "Security"
      ],
      "folderPath": "tasks/task7c",
      "zipPath": "tasks/task7c.zip",
      "filesCount": 7,
      "files": [
        {
          "name": "authenticate.php",
          "path": "tasks/task7c/authenticate.php",
          "size": "882 B",
          "type": "php",
          "content": "<?php\r\nsession_start();\r\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\n\r\nif (isset($_POST['login'])) {\r\n    $username = $_POST['username'];\r\n    $password = $_POST['password'];\r\n\r\n    $sql = \"SELECT * FROM users WHERE username = ?\";\r\n    $stmt = $conn->prepare($sql);\r\n    $stmt->bind_param(\"s\", $username);\r\n    $stmt->execute();\r\n    $result = $stmt->get_result();\r\n\r\n    if ($result->num_rows == 1) {\r\n        $user = $result->fetch_assoc();\r\n        if (password_verify($password, $user['password'])) {\r\n            $_SESSION['username'] = $username;\r\n            header(\"Location: home.php\");\r\n            exit();\r\n        } else {\r\n            echo \"Invalid username or password!\";\r\n        }\r\n    } else {\r\n        echo \"Invalid username or password!\";\r\n    }\r\n}\r\n?>\r\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7c/db_schema.sql",
          "size": "258 B",
          "type": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\r\nUSE userdatabasenew;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n);\r\n"
        },
        {
          "name": "home.php",
          "path": "tasks/task7c/home.php",
          "size": "381 B",
          "type": "php",
          "content": "<?php\r\nsession_start();\r\nif (!isset($_SESSION['username'])) {\r\n    header(\"Location: login.php\");\r\n    exit();\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Home</title>\r\n</head>\r\n<body>\r\n    <h2>Welcome to Home Page</h2>\r\n    <?php\r\n    echo \"Welcome \" . htmlspecialchars($_SESSION['username']);\r\n    ?>\r\n    <br><br>\r\n    <a href=\"logout.php\">Logout</a>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "login.php",
          "path": "tasks/task7c/login.php",
          "size": "395 B",
          "type": "php",
          "content": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>User Login</title>\r\n</head>\r\n<body>\r\n    <h2>User Login</h2>\r\n    <form method=\"POST\" action=\"authenticate.php\">\r\n        Username: <input type=\"text\" name=\"username\" required><br><br>\r\n        Password: <input type=\"password\" name=\"password\" required><br><br>\r\n        <input type=\"submit\" name=\"login\" value=\"Login\">\r\n    </form>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "logout.php",
          "path": "tasks/task7c/logout.php",
          "size": "157 B",
          "type": "php",
          "content": "<?php\r\nsession_start();\r\nsession_unset();\r\nsession_destroy();\r\necho \"You have logged out successfully!\";\r\n?>\r\n<br><br>\r\n<a href=\"login.php\">Login Again</a>\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task7c/output_screenshot.png",
          "size": "460.1 KB",
          "type": "image",
          "content": null
        },
        {
          "name": "TASK 7 SL program for record.docx",
          "path": "tasks/task7c/TASK 7 SL program for record.docx",
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
          "size": "1.2 KB",
          "type": "php",
          "content": "<?php\r\n\r\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\r\n\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\n\r\n$message = \"\";\r\n\r\nif (isset($_POST['update'])) {\r\n    $id = $_POST['id'];\r\n    $username = $_POST['username'];\r\n    $email = $_POST['email'];\r\n\r\n    $sql = \"UPDATE users SET username=?, email=? WHERE id=?\";\r\n    $stmt = $conn->prepare($sql);\r\n    $stmt->bind_param(\"ssi\", $username, $email, $id);\r\n\r\n    if ($stmt->execute()) {\r\n        $message = \"User information updated successfully!\";\r\n    } else {\r\n        $message = \"Error updating user: \" . $stmt->error;\r\n    }\r\n    $stmt->close();\r\n}\r\n$conn->close();\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Update User Information</title>\r\n</head>\r\n<body>\r\n    <h2>Update User Information</h2>\r\n    <?php if ($message != \"\") echo \"<p><b>$message</b></p>\"; ?>\r\n    <form method=\"post\">\r\n        Enter User ID:\r\n        <input type=\"number\" name=\"id\" required><br><br>\r\n\r\n        Enter New Username:\r\n        <input type=\"text\" name=\"username\" required><br><br>\r\n\r\n        Enter New Email:\r\n        <input type=\"email\" name=\"email\" required><br><br>\r\n\r\n        <input type=\"submit\" name=\"update\" value=\"Update User\">\r\n    </form>\r\n</body>\r\n</html>\r\n"
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
          "content": "<?php\r\n\r\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\r\n\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\n\r\n$message = \"\";\r\n\r\nif (isset($_POST['delete'])) {\r\n    $id = $_POST['id'];\r\n\r\n    $sql = \"DELETE FROM users WHERE id=?\";\r\n    $stmt = $conn->prepare($sql);\r\n    $stmt->bind_param(\"i\", $id);\r\n\r\n    if ($stmt->execute()) {\r\n        if ($stmt->affected_rows > 0) {\r\n            $message = \"User deleted successfully!\";\r\n        } else {\r\n            $message = \"User ID not found.\";\r\n        }\r\n    } else {\r\n        $message = \"Error deleting user: \" . $stmt->error;\r\n    }\r\n    $stmt->close();\r\n}\r\n$conn->close();\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Delete User Information</title>\r\n</head>\r\n<body>\r\n    <h2>Delete User Information</h2>\r\n    <?php if ($message != \"\") echo \"<p><b>$message</b></p>\"; ?>\r\n    <form method=\"post\">\r\n        Enter User ID:\r\n        <input type=\"number\" name=\"id\" required><br><br>\r\n\r\n        <input type=\"submit\" name=\"delete\" value=\"Delete User\">\r\n    </form>\r\n</body>\r\n</html>\r\n"
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
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<?xml-stylesheet type=\"text/xsl\" href=\"motorbike_catalog.xsl\"?>\r\n<!DOCTYPE catalog SYSTEM \"motorbike_catalog.dtd\">\r\n<catalog>\r\n    <motorbike>\r\n        <make>Honda</make>\r\n        <model>CBR500R</model>\r\n        <year>2023</year>\r\n        <color>Red</color>\r\n        <engine>\r\n            <engine_number>EN123456</engine_number>\r\n            <number_of_cylinders>2</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH123456789</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"no\"/>\r\n    </motorbike>\r\n\r\n    <motorbike>\r\n        <make>Yamaha</make>\r\n        <model>R15</model>\r\n        <year>2022</year>\r\n        <color>Blue</color>\r\n        <engine>\r\n            <engine_number>EN987654</engine_number>\r\n            <number_of_cylinders>1</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH987654321</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"yes\"/>\r\n    </motorbike>\r\n\r\n    <motorbike>\r\n        <make>TVS</make>\r\n        <model>Apache RTR</model>\r\n        <year>2024</year>\r\n        <color>Black</color>\r\n        <engine>\r\n            <engine_number>EN456789</engine_number>\r\n            <number_of_cylinders>1</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH456789123</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"no\" radio=\"no\"/>\r\n    </motorbike>\r\n\r\n    <motorbike>\r\n        <make>Kawasaki</make>\r\n        <model>Ninja 300</model>\r\n        <year>2023</year>\r\n        <color>Green</color>\r\n        <engine>\r\n            <engine_number>EN654321</engine_number>\r\n            <number_of_cylinders>2</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH654321987</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"no\"/>\r\n    </motorbike>\r\n</catalog>\r\n"
        },
        {
          "name": "motorbike_catalog.dtd",
          "path": "tasks/task9/motorbike_catalog.dtd",
          "size": "611 B",
          "type": "dtd",
          "content": "<!ELEMENT catalog (motorbike+)>\r\n<!ELEMENT motorbike (make, model, year, color, engine, chassis_number, accessories)>\r\n\r\n<!ELEMENT make (#PCDATA)>\r\n<!ELEMENT model (#PCDATA)>\r\n<!ELEMENT year (#PCDATA)>\r\n<!ELEMENT color (#PCDATA)>\r\n\r\n<!ELEMENT engine (engine_number, number_of_cylinders, type_of_fuel)>\r\n<!ELEMENT engine_number (#PCDATA)>\r\n<!ELEMENT number_of_cylinders (#PCDATA)>\r\n<!ELEMENT type_of_fuel (#PCDATA)>\r\n\r\n<!ELEMENT chassis_number (#PCDATA)>\r\n\r\n<!ELEMENT accessories EMPTY>\r\n<!ATTLIST accessories\r\n    disc_brake (yes|no) #REQUIRED\r\n    auto_start (yes|no) #REQUIRED\r\n    radio (yes|no) #REQUIRED>\r\n"
        },
        {
          "name": "motorbike_catalog.xsl",
          "path": "tasks/task9/motorbike_catalog.xsl",
          "size": "1.6 KB",
          "type": "xsl",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\r\n<xsl:output method=\"html\" encoding=\"UTF-8\"/>\r\n\r\n<xsl:template match=\"/\">\r\n<html>\r\n<head>\r\n    <title>Motorbike Catalog</title>\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"/>\r\n</head>\r\n<body>\r\n    <h1>Motorbike Catalog</h1>\r\n    <table>\r\n        <tr>\r\n            <th>MAKE</th>\r\n            <th>MODEL</th>\r\n            <th>YEAR</th>\r\n            <th>COLOR</th>\r\n            <th>ENGINE NUMBER</th>\r\n            <th>CYLINDERS</th>\r\n            <th>FUEL TYPE</th>\r\n            <th>CHASSIS NUMBER</th>\r\n            <th>DISC BRAKE</th>\r\n            <th>AUTO START</th>\r\n            <th>RADIO</th>\r\n        </tr>\r\n        <xsl:for-each select=\"catalog/motorbike\">\r\n        <tr>\r\n            <td><xsl:value-of select=\"make\"/></td>\r\n            <td><xsl:value-of select=\"model\"/></td>\r\n            <td><xsl:value-of select=\"year\"/></td>\r\n            <td><xsl:value-of select=\"color\"/></td>\r\n            <td><xsl:value-of select=\"engine/engine_number\"/></td>\r\n            <td><xsl:value-of select=\"engine/number_of_cylinders\"/></td>\r\n            <td><xsl:value-of select=\"engine/type_of_fuel\"/></td>\r\n            <td><xsl:value-of select=\"chassis_number\"/></td>\r\n            <td><xsl:value-of select=\"accessories/@disc_brake\"/></td>\r\n            <td><xsl:value-of select=\"accessories/@auto_start\"/></td>\r\n            <td><xsl:value-of select=\"accessories/@radio\"/></td>\r\n        </tr>\r\n        </xsl:for-each>\r\n    </table>\r\n</body>\r\n</html>\r\n</xsl:template>\r\n</xsl:stylesheet>\r\n"
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
          "size": "395 B",
          "type": "css",
          "content": "body {\r\n    font-family: Arial;\r\n    background-color: lightyellow;\r\n    text-align: center;\r\n}\r\nh1 {\r\n    color: darkblue;\r\n}\r\ntable {\r\n    width: 95%;\r\n    margin: auto;\r\n    border-collapse: collapse;\r\n}\r\nth {\r\n    background-color: grey;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\ntd, th {\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n}\r\ntd {\r\n    background-color: lightblue;\r\n}\r\n"
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
          "size": "82 B",
          "type": "php",
          "content": "<?php\r\n\r\necho \"Current Server Date and Time: \";\r\necho date(\"d-m-Y h:i:s A\");\r\n?>\r\n"
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
          "size": "533 B",
          "type": "html",
          "content": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>jQuery AJAX Example</title>\r\n\r\n    <script src=\"https://code.jquery.com/jquery-3.5.1.min.js\"></script>\r\n\r\n    <script>$(document).ready(function() {\r\n\r\n        $(\"#btn\").click(function() {\r\n\r\n            $.get(\"date-time.php\", function(data) {\r\n\r\n                $(\"#result\").html(data);\r\n            });\r\n        });\r\n    });\r\n</script>\r\n</head>\r\n<body>\r\n    <h2>jQuery AJAX Example</h2>\r\n    <button id=\"btn\">Get Server Date and Time</button>\r\n    <p id=\"result\"></p>\r\n</body>\r\n</html>\r\n"
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
          "size": "554 B",
          "type": "php",
          "content": "<?php\r\n\r\n$names = [\"Alice\", \"Bob\", \"Charlie\", \"David\",\r\n          \"Emma\", \"Ethan\", \"Sophia\", \"Samuel\",\r\n          \"Olivia\", \"Liam\"];\r\n\r\nif (isset($_GET['query'])) {\r\n    $query = trim($_GET['query']);\r\n    $suggestions = [];\r\n\r\n    if ($query != \"\") {\r\n        foreach ($names as $name) {\r\n            if (stripos($name, $query) !== false) {\r\n                $suggestions[] = $name;\r\n            }\r\n        }\r\n    }\r\n\r\n    if (empty($suggestions)) {\r\n        echo \"No suggestions\";\r\n    } else {\r\n        echo implode(\", \", $suggestions);\r\n    }\r\n}\r\n?>\r\n"
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
          "size": "1.1 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Live Name Suggestion</title>\r\n\r\n    <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>\r\n</head>\r\n<body>\r\n    <h2>Search for a Name</h2>\r\n\r\n    <input type=\"text\" id=\"searchBox\" placeholder=\"Start typing...\">\r\n\r\n    <div id=\"suggestions\" style=\"margin-top: 10px; font-weight: bold;\"></div>\r\n\r\n    <script>$(document).ready(function() {\r\n\r\n        $(\"#searchBox\").on(\"keyup\", function() {\r\n            let query = $(this).val();\r\n\r\n            if (query.length > 0) {\r\n                $.ajax({\r\n                    url: \"search.php\",\r\n                    type: \"GET\",\r\n                    data: { query: query },\r\n                    success: function(response) {\r\n                        $(\"#suggestions\").text(response);\r\n                    },\r\n                    error: function() {\r\n                        $(\"#suggestions\").text(\"Error fetching data.\");\r\n                    }\r\n                });\r\n            } else {\r\n                $(\"#suggestions\").text(\"\");\r\n            }\r\n        });\r\n    });\r\n</script>\r\n</body>\r\n</html>\r\n"
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
          "size": "521 B",
          "type": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS ajax_db;\r\nUSE ajax_db;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50),\r\n    phone VARCHAR(15),\r\n    email VARCHAR(100),\r\n    place VARCHAR(50)\r\n);\r\n\r\nINSERT INTO users (username, phone, email, place)\r\nVALUES('Alice', '9876543210', 'alice@gmail.com', 'Hyderabad'),\r\n('Bob', '9876543211', 'bob@gmail.com', 'Chennai'),\r\n('Charlie', '9876543212', 'charlie@gmail.com', 'Bangalore'),\r\n('David', '9876543213', 'david@gmail.com', 'Mumbai');\r\n"
        },
        {
          "name": "getuser.php",
          "path": "tasks/task12/getuser.php",
          "size": "949 B",
          "type": "php",
          "content": "<?php\r\n\r\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"ajax_db\");\r\n\r\nif (!$conn) {\r\n    die(\"Connection failed: \" . mysqli_connect_error());\r\n}\r\n\r\n$id = intval($_GET['id']);\r\n\r\n$sql = \"SELECT * FROM users WHERE id = $id\";\r\n$result = mysqli_query($conn, $sql);\r\n\r\nif ($result && mysqli_num_rows($result) > 0) {\r\n    echo \"<table>\";\r\n    echo \"<tr>\r\n            <th>Username</th>\r\n            <th>Phone</th>\r\n            <th>Email ID</th>\r\n            <th>Place</th>\r\n          </tr>\";\r\n\r\n    while ($row = mysqli_fetch_assoc($result)) {\r\n        echo \"<tr>\";\r\n        echo \"<td>\" . htmlspecialchars($row['username']) . \"</td>\";\r\n        echo \"<td>\" . htmlspecialchars($row['phone']) . \"</td>\";\r\n        echo \"<td>\" . htmlspecialchars($row['email']) . \"</td>\";\r\n        echo \"<td>\" . htmlspecialchars($row['place']) . \"</td>\";\r\n        echo \"</tr>\";\r\n    }\r\n    echo \"</table>\";\r\n} else {\r\n    echo \"No user found\";\r\n}\r\n\r\nmysqli_close($conn);\r\n?>\r\n"
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
          "size": "1.2 KB",
          "type": "html",
          "content": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>AJAX Database Example</title>\r\n    <style>\r\n        table, th, td {\r\n            border: 1px solid black;\r\n            border-collapse: collapse;\r\n            padding: 8px;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <h2>AJAX - Retrieve User Information</h2>\r\n\r\n    <select id=\"username\" onchange=\"showUser(this.value)\">\r\n        <option value=\"\">Select a user</option>\r\n        <option value=\"1\">Alice</option>\r\n        <option value=\"2\">Bob</option>\r\n        <option value=\"3\">Charlie</option>\r\n        <option value=\"4\">David</option>\r\n    </select>\r\n\r\n    <br><br>\r\n\r\n    <div id=\"result\">\r\n        User information will be displayed here.\r\n    </div>\r\n\r\n    <script>function showUser(id) {\r\n        if (id == \"\") {\r\n            document.getElementById(\"result\").innerHTML = \"\";\r\n            return;\r\n        }\r\n\r\n        var xhttp = new XMLHttpRequest();\r\n        xhttp.onreadystatechange = function() {\r\n            if (this.readyState == 4 && this.status == 200) {\r\n                document.getElementById(\"result\").innerHTML = this.responseText;\r\n            }\r\n        };\r\n\r\n        xhttp.open(\"GET\", \"getuser.php?id=\" + id, true);\r\n        xhttp.send();\r\n    }\r\n</script>\r\n</body>\r\n</html>\r\n"
        }
      ]
    }
  ]
};
