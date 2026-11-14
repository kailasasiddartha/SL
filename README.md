# Scripting Languages (SL) University Lab Portal

A clean, fast, 100% frontend-only web application for university Scripting Languages (SL) laboratory curriculum. Ready for instant static deployment on Netlify, GitHub Pages, or any web server with zero backend dependencies.

## 🚀 Key Features

- **Fuzzy Search with Fuse.js**: Real-time, typo-tolerant search across all 12 lab task question texts, task numbers (`Task 1`–`Task 12`), language tags, and file names.
- **Core Scripting Languages Reference**:
  - Concise definitions and runtime architecture for **HTML5**, **CSS3**, **JavaScript**, **XML/DTD/XSLT**, and **PHP**.
  - Detailed, practical execution guidelines for **HTML** (browser rendering / live static server) and **PHP** (XAMPP / WampServer Apache & MySQL setup and built-in PHP CLI server).
- **17 Individual Task Boxes (Separated Sub-Tasks)**:
  - **Task 1A**: Personal Portfolio Profile with HTML Controls & CSS
  - **Task 1B**: Class Time Table using HTML Table (Rowspan & Colspan)
  - **Task 2**: Registration Form Validation with JavaScript (RegEx & DOM)
  - **Task 3A**: Dynamic Multiplication Table using JavaScript Prompts & Loops
  - **Task 3B**: Interactive Image Toggle Webpage using JavaScript Events
  - **Task 4**: Responsive To-Do List Application with DOM & CSS
  - **Task 5**: Item Billing System using PHP `explode()` & Table Formatting
  - **Task 6A**: PHP Session Login Authentication with 60-Second Inactivity Timeout
  - **Task 6B**: PHP Cookie Visit Counter & Previous Visit Timestamp Tracker
  - **Task 7A**: Create MySQL Database and User Table via PHP Script
  - **Task 7B**: User Registration System with MySQL Insertion & Password Hashing
  - **Task 8A**: Update User Details in MySQL Database via PHP
  - **Task 8B**: Delete User Record from MySQL Database via PHP
  - **Task 9**: Four Stroke Motorbike XML Catalog with DTD Validation & XSLT/CSS Styling
  - **Task 10**: jQuery AJAX HTTP GET Request (Dynamic Date & Time without reload)
  - **Task 11**: Live Name Suggestions Autocomplete (jQuery AJAX & PHP array lookup)
  - **Task 12**: AJAX Database Retrieval without Page Reload (XMLHttpRequest & MySQL)
- **Direct Actions per Task**:
  - **Download ZIP**: One-click download of the dedicated task archive (e.g. `/tasks/task1a.zip`, `/tasks/task12.zip`).
  - **View / Open Folder**: Modal file switcher showing all code files, `.docx` record documents, and output screenshots.
  - **Copy Code**: One-click instant clipboard copy with toast feedback.
- **Zero Backend Dependencies**:
  - Pure HTML5, CSS3 / Tailwind CSS (CDN), Vanilla JavaScript.
  - Works directly by opening `index.html` locally or hosting statically.

---

## 📁 Repository Structure

```
.
├── index.html              # Main single-page web portal application
├── style.css               # Minimalist, distraction-free custom styles
├── app.js                  # Search, filtering, and modal file switcher logic
├── data.js                 # Central configuration file for all 12 tasks
├── data.json               # JSON version of the central configuration
├── netlify.toml            # Netlify deployment configuration & cache headers
├── _headers                # Static headers for instant Netlify drag-and-drop
├── tasks/                  # Task directories and zip archives
│   ├── task1/ ... task12/  # Extracted task folders (.html, .css, .js, .xml, .php, .docx, images)
│   ├── task1.zip           # Downloadable ZIP archives for all tasks
│   ├── ...
│   └── task12.zip
└── scripts/                # Helper generator and verification scripts
```

---

## 🛠️ How to Add or Modify Tasks

The portal is designed for easy extensibility:

1. **Add/Edit Task Assets**: Place new code files or documents into `/tasks/taskX/` and update `/tasks/taskX.zip`.
2. **Update Configuration**: Open `data.js` and add/edit the task entry in `LAB_DATA.tasks`.
3. **Re-index or Test**: Run `node server.js` to test locally or deploy directly.
   - The UI will automatically generate the tab, filter, and accordion items.

---

## 🌐 Netlify Deployment

1. Drag-and-drop this folder directly into [Netlify Drop](https://app.netlify.com/drop), or
2. Connect your Git repository to Netlify:
   - **Build command**: *(leave blank)*
   - **Publish directory**: `.` (root directory)
