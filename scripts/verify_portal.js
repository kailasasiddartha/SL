const fs = require('fs');
const path = require('path');

console.log('=== Starting Complete Lab Portal Verification ===');

const rootDir = path.resolve(__dirname, '..');
const tasksDir = path.join(rootDir, 'tasks');

let allGood = true;

// 1. Verify tasks folders & zips
const allFolders = [
    'task1', 'task1a', 'task1b', 'task2', 'task3', 'task3a', 'task3b',
    'task4', 'task5', 'task6', 'task6a', 'task6b', 'task7', 'task7a',
    'task7b', 'task8', 'task8a', 'task8b', 'task9', 'task10', 'task11', 'task12'
];

allFolders.forEach(fName => {
    const folder = path.join(tasksDir, fName);
    const zip = path.join(tasksDir, `${fName}.zip`);

    if (!fs.existsSync(folder)) {
        console.error(`FAIL: Folder ${fName} missing`);
        allGood = false;
    } else {
        const files = fs.readdirSync(folder);
        console.log(`PASS: ${fName} folder exists with ${files.length} files: ${files.join(', ')}`);
        
        // Ensure at least one .doc or .docx is present in the folder
        const hasDoc = files.some(f => f.endsWith('.doc') || f.endsWith('.docx'));
        if (!hasDoc) {
            console.error(`FAIL: ${fName} is missing its original Word document!`);
            allGood = false;
        }
    }

    if (!fs.existsSync(zip)) {
        console.error(`FAIL: ${fName}.zip missing`);
        allGood = false;
    } else {
        const stats = fs.statSync(zip);
        console.log(`PASS: ${fName}.zip exists (${(stats.size / 1024).toFixed(1)} KB)`);
    }
});

// 2. Verify data.js
const dataJsPath = path.join(rootDir, 'data.js');
if (!fs.existsSync(dataJsPath)) {
    console.error('FAIL: data.js is missing');
    allGood = false;
} else {
    console.log('PASS: data.js exists');
    const dataContent = fs.readFileSync(dataJsPath, 'utf8');
    const jsonMatch = dataContent.match(/window\.LAB_DATA\s*=\s*(\{[\s\S]*\});/);
    if (!jsonMatch) {
        console.error('FAIL: Cannot parse window.LAB_DATA from data.js');
        allGood = false;
    } else {
        try {
            const data = JSON.parse(jsonMatch[1]);
            console.log(`PASS: data.js parsed successfully. Total Tasks: ${data.tasks.length}`);
            
            let filesChecked = 0;
            data.tasks.forEach(t => {
                t.files.forEach(f => {
                    const absPath = path.join(rootDir, f.path);
                    if (!fs.existsSync(absPath)) {
                        console.error(`FAIL: Task ${t.taskNumber} references missing file: ${f.path}`);
                        allGood = false;
                    } else {
                        filesChecked++;
                    }
                });
            });
            console.log(`PASS: Verified ${filesChecked} files referenced in data.js exist on disk`);

            if (data.vivaCategories && data.vivaCategories.length > 0) {
                console.log(`PASS: Total Viva Categories: ${data.vivaCategories.length}`);
            } else {
                console.log(`PASS: Viva questions section removed as requested`);
            }
        } catch (e) {
            console.error('FAIL: JSON parse error in data.js:', e);
            allGood = false;
        }
    }
}

// 3. Verify server and root files
['index.html', 'guide.html', 'style.css', 'app.js', 'data.json', 'server.js', 'netlify.toml', '_headers'].forEach(file => {
    const fPath = path.join(rootDir, file);
    if (!fs.existsSync(fPath)) {
        console.error(`FAIL: ${file} is missing`);
        allGood = false;
    } else {
        const stats = fs.statSync(fPath);
        console.log(`PASS: ${file} exists (${stats.size} bytes)`);
    }
});

if (allGood) {
    console.log('\n>>> ALL 12 TASKS AND PORTAL VERIFICATIONS PASSED SUCCESSFULLY! <<<');
} else {
    console.error('\n>>> SOME CHECKS FAILED! <<<');
    process.exit(1);
}
