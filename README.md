# Scripting Languages (SL) University Lab Portal

A clean, fast, 100% frontend-only web application for university Scripting Languages (SL) laboratory curriculum. Ready for instant static deployment on Netlify, GitHub Pages, or any web server with zero backend dependencies.

## 🚀 Key Features

- **Fuzzy Search with Fuse.js**: Real-time, typo-tolerant search across all 12 lab task question texts, task numbers (`Task 1`–`Task 12`), language tags, and file names.
- **12 Lab Tasks (Fully Populated & Tested)**:
  - **Task 1**: HTML5 Student Registration Form
  - **Task 2**: CSS3 Cascading Style Sheets & Responsive Layouts
  - **Task 3**: JavaScript Client-Side Form Validation (RegEx & DOM)
  - **Task 4**: Dynamic HTML & Interactive Calculator (Events & DOM tree)
  - **Task 5**: XML Document & DTD Validation (Internal & External DTD)
  - **Task 6**: XML Schema Definition (XSD facets & patterns)
  - **Task 7**: XML Transformation & Presentation with XSLT & CSS
  - **Task 8**: PHP Form Processing & String Operations (POST method)
  - **Task 9**: PHP State Management (Cookies & Sessions)
  - **Task 10**: PHP & MySQL Database CRUD Operations (MySQLi)
  - **Task 11**: PHP File Handling & Regular Expressions (Upload & PCRE log parsing)
  - **Task 12**: AJAX & PHP Database Retrieval (Dropdown selection, asynchronous DB table lookup without page reload)
- **Direct Actions per Task**:
  - **Download ZIP**: One-click download of `/tasks/taskX.zip`.
  - **View / Open Folder**: Modal file switcher showing all source code files, `.docx` lab record documents, and output screenshots with browser preview.
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
