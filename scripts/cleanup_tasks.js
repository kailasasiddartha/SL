const fs = require('fs');
const path = require('path');

const tasksDir = path.resolve(__dirname, '..', 'tasks');

// Specific outdated stub files to remove from each folder
const filesToRemove = [
    // Task 1: remove generic cloned template docx (we have real Task 1A material.doc and Task 1B material.docx)
    'task1/Task 1 SL program for record.docx',
    'task1/style.css', // replaced by 1a_style.css and 1b_style.css

    // Task 2: remove generic cloned template
    'task2/Task 2 SL program for record.docx',

    // Task 3: remove generic cloned template & validate.js
    'task3/Task 3 SL program for record.docx',
    'task3/validate.js',
    'task3/style.css',

    // Task 4: remove calculator.js and generic cloned template
    'task4/calculator.js',
    'task4/Task 4 SL program for record.docx',

    // Task 5: remove books.xml and books.dtd and generic cloned template
    'task5/books.xml',
    'task5/books.dtd',
    'task5/Task 5 SL program for record.docx',

    // Task 6: remove student.xml and student.xsd and generic cloned template
    'task6/student.xml',
    'task6/student.xsd',
    'task6/Task 6 SL program for record.docx',

    // Task 7: remove employees.xml and employees.xsl and generic cloned template
    'task7/employees.xml',
    'task7/employees.xsl',
    'task7/style.css',
    'task7/Task 7 SL program for record.docx',

    // Task 8: remove feedback.html and process.php and generic cloned template
    'task8/feedback.html',
    'task8/process.php',
    'task8/style.css',
    'task8/Task 8 SL program for record.docx',

    // Task 9: remove dashboard.php, login.php, logout.php and generic cloned template
    'task9/dashboard.php',
    'task9/login.php',
    'task9/logout.php',
    'task9/Task 9 SL program for record.docx',

    // Task 10: remove index.php, db_connect.php, schema.sql and generic cloned template
    'task10/index.php',
    'task10/db_connect.php',
    'task10/schema.sql',
    'task10/Task 10 SL program for record.docx',

    // Task 11: remove upload.html, upload.php, activity_log.txt and generic cloned template
    'task11/upload.html',
    'task11/upload.php',
    'task11/activity_log.txt',
    'task11/Task 11 SL program for record.docx'
];

filesToRemove.forEach(relPath => {
    const fullPath = path.join(tasksDir, relPath);
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
        console.log(`Cleaned up outdated stub: ${relPath}`);
    }
});

console.log('Task folders cleanup complete.');
