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
      "filesCount": 5,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task1a/index.html",
          "size": "812 B",
          "type": "html",
          "extension": "html",
          "content": "<!DOCTYPE html>\n<html>\n<head>\n<title>My Portfolio</title>\n<link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n<header>\n<h1>My Portfolio</h1>\n</header>\n<section class=\"profile\">\n<img src=\"profile.png\" alt=\"Profile Picture\">\n<h2>Name</h2>\n<p>Web Developer | Designer | Freelancer</p>\n</section>\n<section class=\"skills\">\n<h2>Skills</h2>\n<ul>\n<li>HTML</li>\n<li>CSS</li>\n<li>JavaScript</li>\n<li>React</li>\n</ul>\n</section>\n<section class=\"projects\">\n<h2>Projects</h2>\n<div class=\"project\">\n<h3>Project 1</h3>\n<p>Description of your project.</p>\n</div>\n<div class=\"project\">\n<h3>Project 2</h3>\n<p>Description of your project.</p>\n</div>\n</section>\n<section class=\"contact\">\n<h2>Contact Me</h2>\n<p>Email: yourname@example.com</p>\n<p>LinkedIn: <a href=\"#\">linkedin.com/in/yourname</a></p>\n</section>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task1a/output_screenshot.png",
          "size": "216.2 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "profile.png",
          "path": "tasks/task1a/profile.png",
          "size": "19.9 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task1a/style.css",
          "size": "636 B",
          "type": "css",
          "extension": "css",
          "content": "body {\nfont-family: Arial, sans-serif;\nmargin: 0;\npadding: 0;\ntext-align: center;\nbackground-color: #f4f4f4;\n}\nheader {\nbackground-color: #333;\ncolor: white;\npadding: 20px;\n}\n.profile img {\nwidth: 150px;\nborder-radius: 50%;\nmargin-top: 20px;\n}\n.profile h2 {\nmargin: 10px 0;\n}\n.skills, .projects, .contact {\nbackground: white;\nmargin: 20px;\npadding: 20px;\nborder-radius: 10px;\nbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.skills ul {\nlist-style: none;\npadding: 0;\n}\n.skills li {\nbackground: #333;\ncolor: white;\ndisplay: inline-block;\npadding: 10px;\nmargin: 5px;\nborder-radius: 5px;\n}\n.contact a {\ncolor: #0073e6;\ntext-decoration: none;\n}\n"
        },
        {
          "name": "Task 1A material.doc",
          "path": "tasks/task1a/Task 1A material.doc",
          "size": "1.2 MB",
          "type": "doc",
          "extension": "doc",
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
      "filesCount": 3,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task1b/index.html",
          "size": "1.4 KB",
          "type": "html",
          "extension": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Class Timetable</title>\n<style>\nbody {\nfont-family: Arial, sans-serif;\ntext-align: center;\nmargin: 20px;\n}\ntable {\nwidth: 80%;\nmargin: auto;\nborder-collapse: collapse;\n}\nth, td {\nborder: 1px solid black;\npadding: 10px;\ntext-align: center;\n}\nth {\nbackground-color: #4CAF50;\ncolor: white;\n}\ntr:nth-child(even) {\nbackground-color: #f2f2f2;\n}\n</style>\n</head>\n<body>\n<h2>Class Timetable</h2>\n<table>\n<tr>\n<th>Day/Period</th>\n<th>9:00 - 10:00</th>\n<th>10:00 - 11:00</th>\n<th>11:00 - 12:00</th>\n<th>12:00 - 1:00</th>\n<th>1:00 - 2:00</th>\n<th>2:00 - 3:00</th>\n<th>3:00 - 4:00</th>\n</tr>\n<tr>\n<td>Monday</td>\n<td>Math</td>\n<td>Science</td>\n<td>English</td>\n<td rowspan=\"5\">Lunch</td>\n<td>History</td>\n<td>Geography</td>\n<td>PE</td>\n</tr>\n<tr>\n<td>Tuesday</td>\n<td>English</td>\n<td>Math</td>\n<td>Science</td>\n<td>Computer</td>\n<td>History</td>\n<td>Arts</td>\n</tr>\n<tr>\n<td>Wednesday</td>\n<td>Science</td>\n<td>Math</td>\n<td>English</td>\n<td>Geography</td>\n<td>Computer</td>\n<td>Music</td>\n</tr>\n<tr>\n<td>Thursday</td>\n<td>Math</td>\n<td>Science</td>\n<td>English</td>\n<td>History</td>\n<td>PE</td>\n<td>Arts</td>\n</tr>\n<tr>\n<td>Friday</td>\n<td>Science</td>\n<td>English</td>\n<td>Math</td>\n<td>Computer</td>\n<td>Geography</td>\n<td>Music</td>\n</tr>\n</table>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.jpeg",
          "path": "tasks/task1b/output_screenshot.jpeg",
          "size": "73.0 KB",
          "type": "image",
          "extension": "jpeg",
          "content": null
        },
        {
          "name": "Task 1B material.docx",
          "path": "tasks/task1b/Task 1B material.docx",
          "size": "53.2 KB",
          "type": "doc",
          "extension": "docx",
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
          "size": "3.2 KB",
          "type": "html",
          "extension": "html",
          "content": "<!DOCTYPE html>\n<html>\n<head>\n<script type=\"text/javascript\">\nfunction validateForm()\n{\n    // Get values entered by the user\n    var fname = document.getElementById(\"fname\").value;\n    var lname = document.getElementById(\"lname\").value;\n    var emailId = document.getElementById(\"emailId\").value;\n    var userId = document.getElementById(\"userId\").value;\n    var pass = document.getElementById(\"pass\").value;\n    var cpass = document.getElementById(\"cpass\").value;\n    // Email validation pattern\n    var regex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;\n    var valid = true;\n    // Clear previous error messages\n    document.getElementById(\"e1\").innerText = \"\";\n    document.getElementById(\"e2\").innerText = \"\";\n    document.getElementById(\"e3\").innerText = \"\";\n    document.getElementById(\"e4\").innerText = \"\";\n    document.getElementById(\"e5\").innerText = \"\";\n    document.getElementById(\"e6\").innerText = \"\";\n    // First Name validation\n    if(fname == \"\")\n    {\n        document.getElementById(\"e1\").style.color = \"red\";\n        document.getElementById(\"e1\").innerText = \"First Name is needed\";\n        valid = false;\n    }\n    // Last Name validation\n    if(lname == \"\")\n    {\n        document.getElementById(\"e2\").style.color = \"red\";\n        document.getElementById(\"e2\").innerText = \"Last Name is required\";\n        valid = false;\n    }\n    // Email validation\n    if(emailId == \"\")\n    {\n        document.getElementById(\"e3\").style.color = \"red\";\n        document.getElementById(\"e3\").innerText = \"Email is required\";\n        valid = false;\n    }\n    else if(!regex.test(emailId))\n    {\n        document.getElementById(\"e3\").style.color = \"red\";\n        document.getElementById(\"e3\").innerText = \"Incorrect Email Id\";\n        valid = false;\n    }\n    // User ID validation\n    if(userId == \"\")\n    {\n        document.getElementById(\"e4\").style.color = \"red\";\n        document.getElementById(\"e4\").innerText = \"User ID is required\";\n        valid = false;\n    }\n    // Password validation\n    if(pass == \"\")\n    {\n        document.getElementById(\"e5\").style.color = \"red\";\n        document.getElementById(\"e5\").innerText = \"Password is required\";\n        valid = false;\n    }\n    // Confirm Password validation\n    if(cpass == \"\")\n    {\n        document.getElementById(\"e6\").style.color = \"red\";\n        document.getElementById(\"e6\").innerText = \"Confirm Password is required\";\n        valid = false;\n    }\n    else if(pass != cpass)\n    {\n        document.getElementById(\"e6\").style.color = \"red\";\n        document.getElementById(\"e6\").innerText = \"Password Mismatch\";\n        valid = false;\n    }\n    // Return true if all inputs are correct\n    // Return false if there are errors\n    return valid;\n}\n</script>\n</head>\n<body>\n<h2>\n<center>\n<form name=\"f\" onsubmit=\"return validateForm()\">\nFirst Name:\n<input type=\"text\" id=\"fname\">\n<p id=\"e1\"></p>\nLast Name:\n<input type=\"text\" id=\"lname\">\n<p id=\"e2\"></p>\nEmail Address:\n<input type=\"text\" id=\"emailId\">\n<p id=\"e3\"></p>\nUser ID:\n<input type=\"text\" id=\"userId\">\n<p id=\"e4\"></p>\nPassword:\n<input type=\"password\" id=\"pass\">\n<p id=\"e5\"></p>\nConfirm Password:\n<input type=\"password\" id=\"cpass\">\n<p id=\"e6\"></p>\n<input type=\"submit\" value=\"Submit\">\n<input type=\"reset\" value=\"Reset\">\n</form>\n</center>\n</h2>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot1.png",
          "path": "tasks/task2/output_screenshot1.png",
          "size": "67.2 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot2.png",
          "path": "tasks/task2/output_screenshot2.png",
          "size": "84.3 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot3.png",
          "path": "tasks/task2/output_screenshot3.png",
          "size": "77.9 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "task 2 material.docx",
          "path": "tasks/task2/task 2 material.docx",
          "size": "71.5 KB",
          "type": "doc",
          "extension": "docx",
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
      "filesCount": 8,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task3a/index.html",
          "size": "710 B",
          "type": "html",
          "extension": "html",
          "content": "<html>\n<head>\n<title>Multiplication Table</title>\n<script type=\"text/javascript\">\nvar rows = prompt(\"How many rows for your multiplication table?\");\nvar cols = prompt(\"How many columns for your multiplication table?\");\nif(rows == \"\" || rows == null)\n{\nrows = 10;\n}\nif(cols == \"\" || cols == null)\n{\ncols = 10;\n}\ncreateTable(rows, cols);\nfunction createTable(rows, cols)\n{\nvar j = 1;\nvar output = \"<table border='5' width='500' cellspacing='1' cellpadding='5'>\";\nfor(i = 1; i <= rows; i++)\n{\noutput = output + \"<tr>\";\nwhile(j <= cols)\n{\noutput = output + \"<td>\" + i * j + \"</td>\";\nj = j + 1;\n}\noutput = output + \"</tr>\";\nj = 1;\n}\noutput = output + \"</table>\";\ndocument.write(output);\n}\n</script>\n</head>\n</html>\n"
        },
        {
          "name": "output_screenshot1.png",
          "path": "tasks/task3a/output_screenshot1.png",
          "size": "36.5 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot2.png",
          "path": "tasks/task3a/output_screenshot2.png",
          "size": "36.2 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot3.png",
          "path": "tasks/task3a/output_screenshot3.png",
          "size": "66.0 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot4.png",
          "path": "tasks/task3a/output_screenshot4.png",
          "size": "36.2 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot5.png",
          "path": "tasks/task3a/output_screenshot5.png",
          "size": "37.6 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot6.png",
          "path": "tasks/task3a/output_screenshot6.png",
          "size": "24.5 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "task 3A material.docx",
          "path": "tasks/task3a/task 3A material.docx",
          "size": "70.2 KB",
          "type": "doc",
          "extension": "docx",
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
      "filesCount": 4,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task3b/index.html",
          "size": "800 B",
          "type": "html",
          "extension": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Image Toggle</title>\n<style>\nbody\n{\ntext-align: center;\nfont-family: Arial, sans-serif;\nmargin-top: 50px;\n}\nimg\n{\nwidth: 300px;\nheight: auto;\ndisplay: block;\nmargin: 20px auto;\n}\nbutton {\npadding: 10px 20px;\nfont-size: 16px;\ncursor: pointer;\n}\n</style>\n</head>\n<body>\n<h1>Toggle Between Two Images</h1>\n<img id=\"toggleImage\" src=\"1.jpg\" alt=\"Image\">\n<button onclick=\"toggleImage()\">Toggle Image</button>\n<script>\nfunction toggleImage() {\nvar img = document.getElementById(\"toggleImage\");\nvar currentSrc = img.src.split('/').pop(); // Get filename only\nif (currentSrc === \"1.jpg\")\n{\nimg.src = \"2.jpg\";\n}\nelse {\nimg.src = \"1.jpg\";\n}\n}\n</script>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot1.png",
          "path": "tasks/task3b/output_screenshot1.png",
          "size": "453.3 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot2.png",
          "path": "tasks/task3b/output_screenshot2.png",
          "size": "393.1 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "Task 3B Material.docx",
          "path": "tasks/task3b/Task 3B Material.docx",
          "size": "40.0 KB",
          "type": "doc",
          "extension": "docx",
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
      "filesCount": 3,
      "files": [
        {
          "name": "index.html",
          "path": "tasks/task4/index.html",
          "size": "2.5 KB",
          "type": "html",
          "extension": "html",
          "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>To-Do List</title>\n<style>\nbody {\nfont-family: Arial, sans-serif;\nbackground-color: #f4f4f4;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nheight: 100vh;\n}\n.container {\nbackground: white;\npadding: 20px;\nborder-radius: 8px;\nbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\nwidth: 300px;\ntext-align: center;\nmargin-bottom: 20px;\n}\ninput {\nwidth: 80%;\npadding: 10px;\nmargin-bottom: 10px;\nborder: 1px solid #ccc;\nborder-radius: 4px;\n}\nbutton {\npadding: 10px 15px;\nbackground: #28a745;\ncolor: white;\nborder: none;\ncursor: pointer;\nborder-radius: 4px;\n}\nul {\nlist-style: none;\npadding: 0;\n}\nli {\nbackground: #eee;\nmargin: 5px 0;\npadding: 10px;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nborder-radius: 4px;\n}\n.completed {\ntext-decoration: line-through;\ncolor: gray;\n}\n.delete {\nbackground: red;\ncolor: white;\nborder: none;\npadding: 5px 10px;\ncursor: pointer;\nborder-radius: 4px;\n}\ntable {\nwidth: 300px;\nborder-collapse: collapse;\nmargin-top: 20px;\nbackground: white;\nborder-radius: 8px;\nbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\nth, td {\nborder: 1px solid #ccc;\npadding: 8px;\ntext-align: left;\n}\n</style>\n</head>\n<body>\n<div class=\"container\">\n<h2>To-Do List</h2>\n<input type=\"text\" id=\"taskInput\" placeholder=\"Add a new task...\">\n<button onclick=\"addTask()\">Add</button>\n<ul id=\"taskList\"></ul>\n</div>\n<table>\n<thead>\n<tr>\n<th>Task</th>\n</tr>\n</thead>\n<tbody id=\"taskTable\"></tbody>\n</table>\n<script>\nfunction addTask() {\nlet taskInput = document.getElementById(\"taskInput\"); //let var both are same\nlet taskText = taskInput.value.trim();\nif (taskText === \"\") return;\nlet li = document.createElement(\"li\");\nli.innerHTML = `${taskText} <button class=\"delete\" onclick=\"removeTask(this, '${taskText}')\">X</button>`;\nli.onclick = function () {\nli.classList.toggle(\"completed\");\n};\ndocument.getElementById(\"taskList\").appendChild(li);\ntaskInput.value = \"\";\nlet tableRow = document.createElement(\"tr\");\ntableRow.setAttribute(\"data-task\", taskText);\ntableRow.innerHTML = `<td>${taskText}</td>`;\ndocument.getElementById(\"taskTable\").appendChild(tableRow);\n}\nfunction removeTask(button, taskText) {\nlet taskItem = button.parentElement;\nlet tableRows = document.querySelectorAll(\"#taskTable tr\");\ntableRows.forEach(row => {\nif (row.getAttribute(\"data-task\") === taskText) {\nrow.remove();\n}\n});\ntaskItem.remove();\n}\n</script>\n</body>\n</html>\n"
        },
        {
          "name": "output_screenshot.jpeg",
          "path": "tasks/task4/output_screenshot.jpeg",
          "size": "25.8 KB",
          "type": "image",
          "extension": "jpeg",
          "content": null
        },
        {
          "name": "Task 4 material.docx",
          "path": "tasks/task4/Task 4 material.docx",
          "size": "74.6 KB",
          "type": "doc",
          "extension": "docx",
          "content": null
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
          "extension": "php",
          "content": "<?php\r\n$billOutput = \"\";\r\nif (isset($_POST['submit'])) {\r\n    $code = $_POST['code'];\r\n    $name = $_POST['name'];\r\n    $units = $_POST['units'];\r\n    $rate = $_POST['rate'];\r\n\r\n    $codes = explode(\",\", $code);\r\n    $names = explode(\",\", $name);\r\n    $unitssold = explode(\",\", $units);\r\n    $rates = explode(\",\", $rate);\r\n\r\n    $billOutput .= \"<h2>Bill Details</h2>\";\r\n    $billOutput .= \"<table>\";\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th>Item Code</th>\";\r\n    $billOutput .= \"<th>Item Name</th>\";\r\n    $billOutput .= \"<th>Units Sold</th>\";\r\n    $billOutput .= \"<th>Rate</th>\";\r\n    $billOutput .= \"<th>Amount</th>\";\r\n    $billOutput .= \"</tr>\";\r\n\r\n    $grandTotal = 0;\r\n    for ($i = 0; $i < 5; $i++) {\r\n        $c = isset($codes[$i]) ? trim($codes[$i]) : \"\";\r\n        $n = isset($names[$i]) ? trim($names[$i]) : \"\";\r\n        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;\r\n        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;\r\n        $amount = $u * $r;\r\n        $grandTotal += $amount;\r\n\r\n        $billOutput .= \"<tr>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($c) . \"</td>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($n) . \"</td>\";\r\n        $billOutput .= \"<td>\" . $u . \"</td>\";\r\n        $billOutput .= \"<td>\" . $r . \"</td>\";\r\n        $billOutput .= \"<td>\" . $amount . \"</td>\";\r\n        $billOutput .= \"</tr>\";\r\n    }\r\n\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th colspan='4'>Grand Total</th>\";\r\n    $billOutput .= \"<th>\" . $grandTotal . \"</th>\";\r\n    $billOutput .= \"</tr>\";\r\n    $billOutput .= \"</table>\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Item Billing System</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <h2>Item Billing System</h2>\r\n    <form method=\"post\" action=\"\">\r\n        <label>Item Codes:</label><br>\r\n        <input type=\"text\" name=\"code\" placeholder=\"101,102,103,104,105\" required>\r\n        <br>\r\n        <label>Item Names:</label><br>\r\n        <input type=\"text\" name=\"name\" placeholder=\"pen,book,pencil,file,notebook\" required>\r\n        <br>\r\n        <label>Units Sold:</label><br>\r\n        <input type=\"text\" name=\"units\" placeholder=\"10,5,20,8,12\" required>\r\n        <br>\r\n        <label>Rates:</label><br>\r\n        <input type=\"text\" name=\"rate\" placeholder=\"10,50,5,30,40\" required>\r\n        <br>\r\n        <input type=\"submit\" name=\"submit\" value=\"Generate Bill\">\r\n    </form>\r\n\r\n    <?php echo $billOutput; ?>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "index.html",
          "path": "tasks/task5/index.html",
          "size": "2.4 KB",
          "type": "html",
          "extension": "html",
          "content": "<?php\r\n$billOutput = \"\";\r\nif (isset($_POST['submit'])) {\r\n    $code = $_POST['code'];\r\n    $name = $_POST['name'];\r\n    $units = $_POST['units'];\r\n    $rate = $_POST['rate'];\r\n\r\n    $codes = explode(\",\", $code);\r\n    $names = explode(\",\", $name);\r\n    $unitssold = explode(\",\", $units);\r\n    $rates = explode(\",\", $rate);\r\n\r\n    $billOutput .= \"<h2>Bill Details</h2>\";\r\n    $billOutput .= \"<table>\";\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th>Item Code</th>\";\r\n    $billOutput .= \"<th>Item Name</th>\";\r\n    $billOutput .= \"<th>Units Sold</th>\";\r\n    $billOutput .= \"<th>Rate</th>\";\r\n    $billOutput .= \"<th>Amount</th>\";\r\n    $billOutput .= \"</tr>\";\r\n\r\n    $grandTotal = 0;\r\n    for ($i = 0; $i < 5; $i++) {\r\n        $c = isset($codes[$i]) ? trim($codes[$i]) : \"\";\r\n        $n = isset($names[$i]) ? trim($names[$i]) : \"\";\r\n        $u = isset($unitssold[$i]) ? floatval($unitssold[$i]) : 0;\r\n        $r = isset($rates[$i]) ? floatval($rates[$i]) : 0;\r\n        $amount = $u * $r;\r\n        $grandTotal += $amount;\r\n\r\n        $billOutput .= \"<tr>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($c) . \"</td>\";\r\n        $billOutput .= \"<td>\" . htmlspecialchars($n) . \"</td>\";\r\n        $billOutput .= \"<td>\" . $u . \"</td>\";\r\n        $billOutput .= \"<td>\" . $r . \"</td>\";\r\n        $billOutput .= \"<td>\" . $amount . \"</td>\";\r\n        $billOutput .= \"</tr>\";\r\n    }\r\n\r\n    $billOutput .= \"<tr>\";\r\n    $billOutput .= \"<th colspan='4'>Grand Total</th>\";\r\n    $billOutput .= \"<th>\" . $grandTotal . \"</th>\";\r\n    $billOutput .= \"</tr>\";\r\n    $billOutput .= \"</table>\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Item Billing System</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <h2>Item Billing System</h2>\r\n    <form method=\"post\" action=\"\">\r\n        <label>Item Codes:</label><br>\r\n        <input type=\"text\" name=\"code\" placeholder=\"101,102,103,104,105\" required>\r\n        <br>\r\n        <label>Item Names:</label><br>\r\n        <input type=\"text\" name=\"name\" placeholder=\"pen,book,pencil,file,notebook\" required>\r\n        <br>\r\n        <label>Units Sold:</label><br>\r\n        <input type=\"text\" name=\"units\" placeholder=\"10,5,20,8,12\" required>\r\n        <br>\r\n        <label>Rates:</label><br>\r\n        <input type=\"text\" name=\"rate\" placeholder=\"10,50,5,30,40\" required>\r\n        <br>\r\n        <input type=\"submit\" name=\"submit\" value=\"Generate Bill\">\r\n    </form>\r\n\r\n    <?php echo $billOutput; ?>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "output_screenshot.jpeg",
          "path": "tasks/task5/output_screenshot.jpeg",
          "size": "50.3 KB",
          "type": "image",
          "extension": "jpeg",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task5/style.css",
          "size": "460 B",
          "type": "css",
          "extension": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    margin: 40px;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 80%;\r\n    margin-top: 20px;\r\n}\r\nth, td {\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\nth {\r\n    background-color: lightgray;\r\n}\r\ninput[type=\"text\"] {\r\n    width: 400px;\r\n    padding: 8px;\r\n    margin: 8px 0;\r\n}\r\ninput[type=\"submit\"] {\r\n    padding: 10px 25px;\r\n    margin: 10px 0;\r\n    cursor: pointer;\r\n}\r\n"
        },
        {
          "name": "Task 5 material.docx",
          "path": "tasks/task5/Task 5 material.docx",
          "size": "99.1 KB",
          "type": "doc",
          "extension": "docx",
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
          "extension": "php",
          "content": "<?php\r\nsession_start();\r\n\r\nif (!isset($_SESSION[\"username\"])) {\r\n    header(\"Location: 6a_login.php\");\r\n    exit();\r\n}\r\n\r\n$timeout = 60;\r\n\r\nif (isset($_SESSION[\"last_activity\"])) {\r\n    $inactive_time = time() - $_SESSION[\"last_activity\"];\r\n\r\n    if ($inactive_time > $timeout) {\r\n        session_unset();\r\n        session_destroy();\r\n\r\n        echo \"<h2>Warning!</h2>\";\r\n        echo \"<p>Your session has expired because you were inactive for too long.</p>\";\r\n        echo \"<a href='6a_login.php'>Click here to Login Again</a>\";\r\n        exit();\r\n    }\r\n}\r\n\r\n$_SESSION[\"last_activity\"] = time();\r\n\r\n$message = \"\";\r\n\r\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\r\n    $name = $_POST[\"name\"];\r\n    $city = $_POST[\"city\"];\r\n    $phoneno = $_POST[\"phoneno\"];\r\n\r\n    $message = \"Details submitted successfully!\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>User Details</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <h2>User Details Form</h2>\r\n        <p>Welcome, <b><?php echo htmlspecialchars($_SESSION[\"username\"]); ?></b></p>\r\n        <p class=\"warning\">You have 60 seconds of inactivity before your session expires.</p>\r\n\r\n        <?php\r\n        if ($message != \"\") {\r\n            echo \"<p class='success'>$message</p>\";\r\n        }\r\n        ?>\r\n\r\n        <form method=\"post\" action=\"\">\r\n            <label>Name:</label>\r\n            <input type=\"text\" name=\"name\" required>\r\n\r\n            <label>City:</label>\r\n            <input type=\"text\" name=\"city\" required>\r\n\r\n            <label>Phone Number:</label>\r\n            <input type=\"text\" name=\"phoneno\" required>\r\n\r\n            <input type=\"submit\" value=\"Submit\">\r\n        </form>\r\n        <br>\r\n        <a href=\"logout.php\">Logout</a>\r\n    </div>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "6a_login.php",
          "path": "tasks/task6a/6a_login.php",
          "size": "1.1 KB",
          "type": "php",
          "extension": "php",
          "content": "<?php\r\nsession_start();\r\n\r\n$error = \"\";\r\n\r\nif ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\r\n    $username = $_POST[\"username\"];\r\n    $password = $_POST[\"password\"];\r\n\r\n    if ($username == \"admin\" && $password == \"12345\") {\r\n        $_SESSION[\"username\"] = $username;\r\n\r\n        $_SESSION[\"last_activity\"] = time();\r\n\r\n        header(\"Location: 6a_details.php\");\r\n        exit();\r\n    } else {\r\n        $error = \"Invalid username or password!\";\r\n    }\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Login Form</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <h2>Login Form</h2>\r\n        <?php\r\n        if ($error != \"\") {\r\n            echo \"<p class='error'>$error</p>\";\r\n        }\r\n        ?>\r\n        <form method=\"post\" action=\"\">\r\n            <label>Username:</label>\r\n            <input type=\"text\" name=\"username\" required>\r\n\r\n            <label>Password:</label>\r\n            <input type=\"password\" name=\"password\" required>\r\n\r\n            <input type=\"submit\" value=\"Login\">\r\n        </form>\r\n    </div>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task6a/output_screenshot.png",
          "size": "99.4 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task6a/style.css",
          "size": "774 B",
          "type": "css",
          "extension": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f2f2f2;\r\n}\r\n.container {\r\n    width: 400px;\r\n    margin: 80px auto;\r\n    padding: 25px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px gray;\r\n}\r\nh2 {\r\n    text-align: center;\r\n}\r\nlabel {\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 5px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n    width: 95%;\r\n    padding: 10px;\r\n}\r\ninput[type=\"submit\"] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    background-color: blue;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.error {\r\n    color: red;\r\n}\r\n.warning {\r\n    color: orange;\r\n    font-weight: bold;\r\n}\r\n.success {\r\n    color: green;\r\n    font-weight: bold;\r\n}\r\n"
        },
        {
          "name": "Task 6A material.docx",
          "path": "tasks/task6a/Task 6A material.docx",
          "size": "83.7 KB",
          "type": "doc",
          "extension": "docx",
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
          "extension": "php",
          "content": "<?php\r\n\r\nif (isset($_POST['setCookie'])) {\r\n    setcookie(\"user\", $_POST['username'], time() + (86400 * 30), \"/\"); \r\n    echo \"Cookie set successfully!<br>\";\r\n}\r\n\r\nif (isset($_POST['getCookie'])) {\r\n    if (isset($_COOKIE['user'])) {\r\n        echo \"Stored Cookie Value: \" . htmlspecialchars($_COOKIE['user']) . \"<br>\";\r\n    } else {\r\n        echo \"Cookie not available or deleted!<br>\";\r\n    }\r\n}\r\n\r\nif (isset($_POST['deleteCookie'])) {\r\n    setcookie(\"user\", \"\", time() - 3600, \"/\"); \r\n    echo \"Cookie deleted successfully!<br>\";\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>Cookie Example</title>\r\n    <link rel=\"stylesheet\" href=\"style.css\">\r\n</head>\r\n<body>\r\n    <div class=\"container\">\r\n        <h2>PHP Cookie Management</h2>\r\n        <form method=\"post\">\r\n            <label>Enter Username:</label>\r\n            <input type=\"text\" name=\"username\" required>\r\n            <button type=\"submit\" name=\"setCookie\">Set Cookie</button>\r\n        </form>\r\n        <form method=\"post\" style=\"margin-top: 10px;\">\r\n            <button type=\"submit\" name=\"getCookie\">Get Cookie</button>\r\n        </form>\r\n        <form method=\"post\" style=\"margin-top: 10px;\">\r\n            <button type=\"submit\" name=\"deleteCookie\">Delete Cookie</button>\r\n        </form>\r\n    </div>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "output_screenshot.jpeg",
          "path": "tasks/task6b/output_screenshot.jpeg",
          "size": "43.8 KB",
          "type": "image",
          "extension": "jpeg",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task6b/style.css",
          "size": "774 B",
          "type": "css",
          "extension": "css",
          "content": "body {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f2f2f2;\r\n}\r\n.container {\r\n    width: 400px;\r\n    margin: 80px auto;\r\n    padding: 25px;\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 10px gray;\r\n}\r\nh2 {\r\n    text-align: center;\r\n}\r\nlabel {\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 5px;\r\n}\r\ninput[type=\"text\"],\r\ninput[type=\"password\"] {\r\n    width: 95%;\r\n    padding: 10px;\r\n}\r\ninput[type=\"submit\"] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 20px;\r\n    background-color: blue;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.error {\r\n    color: red;\r\n}\r\n.warning {\r\n    color: orange;\r\n    font-weight: bold;\r\n}\r\n.success {\r\n    color: green;\r\n    font-weight: bold;\r\n}\r\n"
        },
        {
          "name": "Task 6B material.docx",
          "path": "tasks/task6b/Task 6B material.docx",
          "size": "90.9 KB",
          "type": "doc",
          "extension": "docx",
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
          "extension": "php",
          "content": "<?php\r\n\r\n$conn = new mysqli(\"localhost\", \"root\", \"\");\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\necho \"MySQL connection successful!<br><br>\";\r\n\r\n$sql = \"CREATE DATABASE IF NOT EXISTS userdatabasenew\";\r\nif ($conn->query($sql) === TRUE) {\r\n    echo \"Database created successfully!<br><br>\";\r\n} else {\r\n    die(\"Database creation failed: \" . $conn->error);\r\n}\r\n\r\n$conn->select_db(\"userdatabasenew\");\r\n\r\n$sql = \"CREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n)\";\r\nif ($conn->query($sql) === TRUE) {\r\n    echo \"Table created successfully!\";\r\n} else {\r\n    echo \"Table creation failed: \" . $conn->error;\r\n}\r\n\r\n$conn->close();\r\n?>\r\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7a/db_schema.sql",
          "size": "258 B",
          "type": "sql",
          "extension": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\r\nUSE userdatabasenew;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n);\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task7a/output_screenshot.png",
          "size": "46.5 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "TASK 7 SL program for record.docx",
          "path": "tasks/task7a/TASK 7 SL program for record.docx",
          "size": "820.8 KB",
          "type": "doc",
          "extension": "docx",
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
          "extension": "php",
          "content": "<?php\r\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\n\r\n$message = \"\";\r\nif (isset($_POST['register'])) {\r\n    $username = $_POST['username'];\r\n    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);\r\n    $email = $_POST['email'];\r\n\r\n    $sql = \"INSERT INTO users (username, password, email) VALUES (?, ?, ?)\";\r\n    $stmt = $conn->prepare($sql);\r\n    $stmt->bind_param(\"sss\", $username, $password, $email);\r\n\r\n    if ($stmt->execute()) {\r\n        $message = \"Registration successful!\";\r\n    } else {\r\n        $message = \"Registration failed: \" . $stmt->error;\r\n    }\r\n    $stmt->close();\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>User Registration</title>\r\n</head>\r\n<body>\r\n    <h2>User Registration</h2>\r\n    <?php if ($message != \"\") echo \"<p><b>$message</b></p>\"; ?>\r\n    <form method=\"POST\">\r\n        Username: <input type=\"text\" name=\"username\" required><br><br>\r\n        Password: <input type=\"password\" name=\"password\" required><br><br>\r\n        Email: <input type=\"email\" name=\"email\" required><br><br>\r\n        <input type=\"submit\" name=\"register\" value=\"Register\">\r\n    </form>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7b/db_schema.sql",
          "size": "258 B",
          "type": "sql",
          "extension": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\r\nUSE userdatabasenew;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n);\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task7b/output_screenshot.png",
          "size": "49.5 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "TASK 7 SL program for record.docx",
          "path": "tasks/task7b/TASK 7 SL program for record.docx",
          "size": "820.8 KB",
          "type": "doc",
          "extension": "docx",
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
          "extension": "php",
          "content": "<?php\r\nsession_start();\r\n$conn = new mysqli(\"localhost\", \"root\", \"\", \"userdatabasenew\");\r\nif ($conn->connect_error) {\r\n    die(\"Connection failed: \" . $conn->connect_error);\r\n}\r\n\r\nif (isset($_POST['login'])) {\r\n    $username = $_POST['username'];\r\n    $password = $_POST['password'];\r\n\r\n    $sql = \"SELECT * FROM users WHERE username = ?\";\r\n    $stmt = $conn->prepare($sql);\r\n    $stmt->bind_param(\"s\", $username);\r\n    $stmt->execute();\r\n    $result = $stmt->get_result();\r\n\r\n    if ($result->num_rows == 1) {\r\n        $user = $result->fetch_assoc();\r\n        if (password_verify($password, $user['password'])) {\r\n            $_SESSION['username'] = $username;\r\n            header(\"Location: home.php\");\r\n            exit();\r\n        } else {\r\n            echo \"Invalid username or password!\";\r\n        }\r\n    } else {\r\n        echo \"Invalid username or password!\";\r\n    }\r\n}\r\n?>\r\n"
        },
        {
          "name": "db_schema.sql",
          "path": "tasks/task7c/db_schema.sql",
          "size": "258 B",
          "type": "sql",
          "extension": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS userdatabasenew;\r\nUSE userdatabasenew;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50) NOT NULL,\r\n    password VARCHAR(255) NOT NULL,\r\n    email VARCHAR(100) NOT NULL\r\n);\r\n"
        },
        {
          "name": "home.php",
          "path": "tasks/task7c/home.php",
          "size": "381 B",
          "type": "php",
          "extension": "php",
          "content": "<?php\r\nsession_start();\r\nif (!isset($_SESSION['username'])) {\r\n    header(\"Location: login.php\");\r\n    exit();\r\n}\r\n?>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>Home</title>\r\n</head>\r\n<body>\r\n    <h2>Welcome to Home Page</h2>\r\n    <?php\r\n    echo \"Welcome \" . htmlspecialchars($_SESSION['username']);\r\n    ?>\r\n    <br><br>\r\n    <a href=\"logout.php\">Logout</a>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "login.php",
          "path": "tasks/task7c/login.php",
          "size": "395 B",
          "type": "php",
          "extension": "php",
          "content": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>User Login</title>\r\n</head>\r\n<body>\r\n    <h2>User Login</h2>\r\n    <form method=\"POST\" action=\"authenticate.php\">\r\n        Username: <input type=\"text\" name=\"username\" required><br><br>\r\n        Password: <input type=\"password\" name=\"password\" required><br><br>\r\n        <input type=\"submit\" name=\"login\" value=\"Login\">\r\n    </form>\r\n</body>\r\n</html>\r\n"
        },
        {
          "name": "logout.php",
          "path": "tasks/task7c/logout.php",
          "size": "157 B",
          "type": "php",
          "extension": "php",
          "content": "<?php\r\nsession_start();\r\nsession_unset();\r\nsession_destroy();\r\necho \"You have logged out successfully!\";\r\n?>\r\n<br><br>\r\n<a href=\"login.php\">Login Again</a>\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task7c/output_screenshot.png",
          "size": "460.1 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "TASK 7 SL program for record.docx",
          "path": "tasks/task7c/TASK 7 SL program for record.docx",
          "size": "820.8 KB",
          "type": "doc",
          "extension": "docx",
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
          "extension": "png",
          "content": null
        },
        {
          "name": "TASK 8 SL program for record.docx",
          "path": "tasks/task8a/TASK 8 SL program for record.docx",
          "size": "1.5 MB",
          "type": "doc",
          "extension": "docx",
          "content": null
        },
        {
          "name": "Task 8a.php",
          "path": "tasks/task8a/Task 8a.php",
          "size": "1.2 KB",
          "type": "php",
          "extension": "php",
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
          "extension": "png",
          "content": null
        },
        {
          "name": "TASK 8 SL program for record.docx",
          "path": "tasks/task8b/TASK 8 SL program for record.docx",
          "size": "1.5 MB",
          "type": "doc",
          "extension": "docx",
          "content": null
        },
        {
          "name": "Task 8b.php",
          "path": "tasks/task8b/Task 8b.php",
          "size": "1.1 KB",
          "type": "php",
          "extension": "php",
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
          "extension": "xml",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<?xml-stylesheet type=\"text/xsl\" href=\"motorbike_catalog.xsl\"?>\r\n<!DOCTYPE catalog SYSTEM \"motorbike_catalog.dtd\">\r\n<catalog>\r\n    <motorbike>\r\n        <make>Honda</make>\r\n        <model>CBR500R</model>\r\n        <year>2023</year>\r\n        <color>Red</color>\r\n        <engine>\r\n            <engine_number>EN123456</engine_number>\r\n            <number_of_cylinders>2</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH123456789</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"no\"/>\r\n    </motorbike>\r\n\r\n    <motorbike>\r\n        <make>Yamaha</make>\r\n        <model>R15</model>\r\n        <year>2022</year>\r\n        <color>Blue</color>\r\n        <engine>\r\n            <engine_number>EN987654</engine_number>\r\n            <number_of_cylinders>1</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH987654321</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"yes\"/>\r\n    </motorbike>\r\n\r\n    <motorbike>\r\n        <make>TVS</make>\r\n        <model>Apache RTR</model>\r\n        <year>2024</year>\r\n        <color>Black</color>\r\n        <engine>\r\n            <engine_number>EN456789</engine_number>\r\n            <number_of_cylinders>1</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH456789123</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"no\" radio=\"no\"/>\r\n    </motorbike>\r\n\r\n    <motorbike>\r\n        <make>Kawasaki</make>\r\n        <model>Ninja 300</model>\r\n        <year>2023</year>\r\n        <color>Green</color>\r\n        <engine>\r\n            <engine_number>EN654321</engine_number>\r\n            <number_of_cylinders>2</number_of_cylinders>\r\n            <type_of_fuel>Petrol</type_of_fuel>\r\n        </engine>\r\n        <chassis_number>CH654321987</chassis_number>\r\n        <accessories disc_brake=\"yes\" auto_start=\"yes\" radio=\"no\"/>\r\n    </motorbike>\r\n</catalog>\r\n"
        },
        {
          "name": "motorbike_catalog.dtd",
          "path": "tasks/task9/motorbike_catalog.dtd",
          "size": "611 B",
          "type": "dtd",
          "extension": "dtd",
          "content": "<!ELEMENT catalog (motorbike+)>\r\n<!ELEMENT motorbike (make, model, year, color, engine, chassis_number, accessories)>\r\n\r\n<!ELEMENT make (#PCDATA)>\r\n<!ELEMENT model (#PCDATA)>\r\n<!ELEMENT year (#PCDATA)>\r\n<!ELEMENT color (#PCDATA)>\r\n\r\n<!ELEMENT engine (engine_number, number_of_cylinders, type_of_fuel)>\r\n<!ELEMENT engine_number (#PCDATA)>\r\n<!ELEMENT number_of_cylinders (#PCDATA)>\r\n<!ELEMENT type_of_fuel (#PCDATA)>\r\n\r\n<!ELEMENT chassis_number (#PCDATA)>\r\n\r\n<!ELEMENT accessories EMPTY>\r\n<!ATTLIST accessories\r\n    disc_brake (yes|no) #REQUIRED\r\n    auto_start (yes|no) #REQUIRED\r\n    radio (yes|no) #REQUIRED>\r\n"
        },
        {
          "name": "motorbike_catalog.xsl",
          "path": "tasks/task9/motorbike_catalog.xsl",
          "size": "1.6 KB",
          "type": "xsl",
          "extension": "xsl",
          "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">\r\n<xsl:output method=\"html\" encoding=\"UTF-8\"/>\r\n\r\n<xsl:template match=\"/\">\r\n<html>\r\n<head>\r\n    <title>Motorbike Catalog</title>\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\"/>\r\n</head>\r\n<body>\r\n    <h1>Motorbike Catalog</h1>\r\n    <table>\r\n        <tr>\r\n            <th>MAKE</th>\r\n            <th>MODEL</th>\r\n            <th>YEAR</th>\r\n            <th>COLOR</th>\r\n            <th>ENGINE NUMBER</th>\r\n            <th>CYLINDERS</th>\r\n            <th>FUEL TYPE</th>\r\n            <th>CHASSIS NUMBER</th>\r\n            <th>DISC BRAKE</th>\r\n            <th>AUTO START</th>\r\n            <th>RADIO</th>\r\n        </tr>\r\n        <xsl:for-each select=\"catalog/motorbike\">\r\n        <tr>\r\n            <td><xsl:value-of select=\"make\"/></td>\r\n            <td><xsl:value-of select=\"model\"/></td>\r\n            <td><xsl:value-of select=\"year\"/></td>\r\n            <td><xsl:value-of select=\"color\"/></td>\r\n            <td><xsl:value-of select=\"engine/engine_number\"/></td>\r\n            <td><xsl:value-of select=\"engine/number_of_cylinders\"/></td>\r\n            <td><xsl:value-of select=\"engine/type_of_fuel\"/></td>\r\n            <td><xsl:value-of select=\"chassis_number\"/></td>\r\n            <td><xsl:value-of select=\"accessories/@disc_brake\"/></td>\r\n            <td><xsl:value-of select=\"accessories/@auto_start\"/></td>\r\n            <td><xsl:value-of select=\"accessories/@radio\"/></td>\r\n        </tr>\r\n        </xsl:for-each>\r\n    </table>\r\n</body>\r\n</html>\r\n</xsl:template>\r\n</xsl:stylesheet>\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task9/output_screenshot.png",
          "size": "140.2 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "style.css",
          "path": "tasks/task9/style.css",
          "size": "395 B",
          "type": "css",
          "extension": "css",
          "content": "body {\r\n    font-family: Arial;\r\n    background-color: lightyellow;\r\n    text-align: center;\r\n}\r\nh1 {\r\n    color: darkblue;\r\n}\r\ntable {\r\n    width: 95%;\r\n    margin: auto;\r\n    border-collapse: collapse;\r\n}\r\nth {\r\n    background-color: grey;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\ntd, th {\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n}\r\ntd {\r\n    background-color: lightblue;\r\n}\r\n"
        },
        {
          "name": "TASK 9 SL for record.docx",
          "path": "tasks/task9/TASK 9 SL for record.docx",
          "size": "158.2 KB",
          "type": "doc",
          "extension": "docx",
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
          "extension": "php",
          "content": "<?php\r\n\r\necho \"Current Server Date and Time: \";\r\necho date(\"d-m-Y h:i:s A\");\r\n?>\r\n"
        },
        {
          "name": "output_screenshot.png",
          "path": "tasks/task10/output_screenshot.png",
          "size": "73.0 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "TASK 10 SL for record.docx",
          "path": "tasks/task10/TASK 10 SL for record.docx",
          "size": "86.3 KB",
          "type": "doc",
          "extension": "docx",
          "content": null
        },
        {
          "name": "Task 10.html",
          "path": "tasks/task10/Task 10.html",
          "size": "533 B",
          "type": "html",
          "extension": "html",
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
          "extension": "png",
          "content": null
        },
        {
          "name": "search.php",
          "path": "tasks/task11/search.php",
          "size": "554 B",
          "type": "php",
          "extension": "php",
          "content": "<?php\r\n\r\n$names = [\"Alice\", \"Bob\", \"Charlie\", \"David\",\r\n          \"Emma\", \"Ethan\", \"Sophia\", \"Samuel\",\r\n          \"Olivia\", \"Liam\"];\r\n\r\nif (isset($_GET['query'])) {\r\n    $query = trim($_GET['query']);\r\n    $suggestions = [];\r\n\r\n    if ($query != \"\") {\r\n        foreach ($names as $name) {\r\n            if (stripos($name, $query) !== false) {\r\n                $suggestions[] = $name;\r\n            }\r\n        }\r\n    }\r\n\r\n    if (empty($suggestions)) {\r\n        echo \"No suggestions\";\r\n    } else {\r\n        echo implode(\", \", $suggestions);\r\n    }\r\n}\r\n?>\r\n"
        },
        {
          "name": "TASK 11 SL program for record.docx",
          "path": "tasks/task11/TASK 11 SL program for record.docx",
          "size": "184.6 KB",
          "type": "doc",
          "extension": "docx",
          "content": null
        },
        {
          "name": "Task 11.html",
          "path": "tasks/task11/Task 11.html",
          "size": "1.1 KB",
          "type": "html",
          "extension": "html",
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
          "extension": "sql",
          "content": "CREATE DATABASE IF NOT EXISTS ajax_db;\r\nUSE ajax_db;\r\n\r\nCREATE TABLE IF NOT EXISTS users (\r\n    id INT AUTO_INCREMENT PRIMARY KEY,\r\n    username VARCHAR(50),\r\n    phone VARCHAR(15),\r\n    email VARCHAR(100),\r\n    place VARCHAR(50)\r\n);\r\n\r\nINSERT INTO users (username, phone, email, place)\r\nVALUES('Alice', '9876543210', 'alice@gmail.com', 'Hyderabad'),\r\n('Bob', '9876543211', 'bob@gmail.com', 'Chennai'),\r\n('Charlie', '9876543212', 'charlie@gmail.com', 'Bangalore'),\r\n('David', '9876543213', 'david@gmail.com', 'Mumbai');\r\n"
        },
        {
          "name": "getuser.php",
          "path": "tasks/task12/getuser.php",
          "size": "949 B",
          "type": "php",
          "extension": "php",
          "content": "<?php\r\n\r\n$conn = mysqli_connect(\"localhost\", \"root\", \"\", \"ajax_db\");\r\n\r\nif (!$conn) {\r\n    die(\"Connection failed: \" . mysqli_connect_error());\r\n}\r\n\r\n$id = intval($_GET['id']);\r\n\r\n$sql = \"SELECT * FROM users WHERE id = $id\";\r\n$result = mysqli_query($conn, $sql);\r\n\r\nif ($result && mysqli_num_rows($result) > 0) {\r\n    echo \"<table>\";\r\n    echo \"<tr>\r\n            <th>Username</th>\r\n            <th>Phone</th>\r\n            <th>Email ID</th>\r\n            <th>Place</th>\r\n          </tr>\";\r\n\r\n    while ($row = mysqli_fetch_assoc($result)) {\r\n        echo \"<tr>\";\r\n        echo \"<td>\" . htmlspecialchars($row['username']) . \"</td>\";\r\n        echo \"<td>\" . htmlspecialchars($row['phone']) . \"</td>\";\r\n        echo \"<td>\" . htmlspecialchars($row['email']) . \"</td>\";\r\n        echo \"<td>\" . htmlspecialchars($row['place']) . \"</td>\";\r\n        echo \"</tr>\";\r\n    }\r\n    echo \"</table>\";\r\n} else {\r\n    echo \"No user found\";\r\n}\r\n\r\nmysqli_close($conn);\r\n?>\r\n"
        },
        {
          "name": "output_screenshot1.png",
          "path": "tasks/task12/output_screenshot1.png",
          "size": "63.1 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot2.png",
          "path": "tasks/task12/output_screenshot2.png",
          "size": "79.3 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot3.png",
          "path": "tasks/task12/output_screenshot3.png",
          "size": "85.8 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "output_screenshot4.png",
          "path": "tasks/task12/output_screenshot4.png",
          "size": "87.3 KB",
          "type": "image",
          "extension": "png",
          "content": null
        },
        {
          "name": "TASK 12 SL program for record.docx",
          "path": "tasks/task12/TASK 12 SL program for record.docx",
          "size": "334.0 KB",
          "type": "doc",
          "extension": "docx",
          "content": null
        },
        {
          "name": "task12.html",
          "path": "tasks/task12/task12.html",
          "size": "1.2 KB",
          "type": "html",
          "extension": "html",
          "content": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>AJAX Database Example</title>\r\n    <style>\r\n        table, th, td {\r\n            border: 1px solid black;\r\n            border-collapse: collapse;\r\n            padding: 8px;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <h2>AJAX - Retrieve User Information</h2>\r\n\r\n    <select id=\"username\" onchange=\"showUser(this.value)\">\r\n        <option value=\"\">Select a user</option>\r\n        <option value=\"1\">Alice</option>\r\n        <option value=\"2\">Bob</option>\r\n        <option value=\"3\">Charlie</option>\r\n        <option value=\"4\">David</option>\r\n    </select>\r\n\r\n    <br><br>\r\n\r\n    <div id=\"result\">\r\n        User information will be displayed here.\r\n    </div>\r\n\r\n    <script>function showUser(id) {\r\n        if (id == \"\") {\r\n            document.getElementById(\"result\").innerHTML = \"\";\r\n            return;\r\n        }\r\n\r\n        var xhttp = new XMLHttpRequest();\r\n        xhttp.onreadystatechange = function() {\r\n            if (this.readyState == 4 && this.status == 200) {\r\n                document.getElementById(\"result\").innerHTML = this.responseText;\r\n            }\r\n        };\r\n\r\n        xhttp.open(\"GET\", \"getuser.php?id=\" + id, true);\r\n        xhttp.send();\r\n    }\r\n</script>\r\n</body>\r\n</html>\r\n"
        }
      ]
    }
  ]
};
