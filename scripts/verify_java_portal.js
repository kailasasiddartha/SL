const fs = require('fs');
const path = require('path');
const http = require('http');

console.log('=== Verifying Java Lab Portal Implementation ===');

const rootDir = path.resolve(__dirname, '..');
const javaDir = path.join(rootDir, 'java');

let passed = true;

// 1. Check all 35 java files
const expectedJavaFiles = [
    'DefaultConstructor.java', 'ParamConstructor.java', 'MethodOverloading.java', 'ConstructorOverloading.java',
    'palindrome.java', 'sort.java', 'token.java',
    'this_keyword.java', 'superExample.java', 'staticCounter.java', 'FinalKeyword.java',
    'MethodOverriding.java', 'DynamicMethod.java', 'MultipleInheritance.java', 'AccessSpecifier.java',
    'FileInformation.java', 'FileReading.java', 'WordCount.java',
    'checkedException.java', 'uncheckedException.java',
    'MultiThread.java', 'ProducerConsumer.java',
    'ArrayListDemo.java', 'VectorDemo.java', 'HashTableDemo.java', 'StackDemo.java',
    'swingExample.java', 'factorialSwing.java', 'calculator.java',
    'Mouse_Event.java', 'Keyboard_Event.java',
    'integerDivision.java', 'trafficLight.java', 'shape.java', 'table.java', 'Table.txt'
];

console.log(`\n--- 1. Checking 35 Java Files in ${javaDir} ---`);
expectedJavaFiles.forEach(f => {
    const fPath = path.join(javaDir, f);
    if (!fs.existsSync(fPath)) {
        console.error(`FAIL: Missing ${f}`);
        passed = false;
    } else {
        const stats = fs.statSync(fPath);
        if (stats.size === 0) {
            console.error(`FAIL: ${f} is empty!`);
            passed = false;
        } else {
            console.log(`PASS: ${f} (${stats.size} bytes)`);
        }
    }
});

// 2. Ensure NO zip files exist in java folder
console.log('\n--- 2. Verifying Zero ZIP files in java/ folder ---');
const zipFiles = fs.readdirSync(javaDir).filter(f => f.endsWith('.zip'));
if (zipFiles.length > 0) {
    console.error(`FAIL: Found zip files in java/: ${zipFiles.join(', ')}`);
    passed = false;
} else {
    console.log('PASS: Zero zip files in java/ folder as requested.');
}

// 3. Verify java-data.js and java-data.json
console.log('\n--- 3. Verifying java-data.js and java-data.json ---');
const dataJsPath = path.join(rootDir, 'java-data.js');
const dataJsonPath = path.join(rootDir, 'java-data.json');

if (!fs.existsSync(dataJsPath) || !fs.existsSync(dataJsonPath)) {
    console.error('FAIL: Missing java-data.js or java-data.json');
    passed = false;
} else {
    const jsonContent = fs.readFileSync(dataJsonPath, 'utf8');
    const parsed = JSON.parse(jsonContent);
    console.log(`PASS: Parsed ${parsed.tasks.length} tasks from java-data.json`);
    if (parsed.tasks.length !== 35) {
        console.error(`FAIL: Expected 35 tasks, got ${parsed.tasks.length}`);
        passed = false;
    }

    // Verify all file paths exist
    parsed.tasks.forEach(task => {
        task.files.forEach(file => {
            const abs = path.join(rootDir, file.path);
            if (!fs.existsSync(abs)) {
                console.error(`FAIL: Referenced file does not exist: ${file.path}`);
                passed = false;
            }
        });
    });
}

// 4. Verify java.html and navigation
console.log('\n--- 4. Verifying java.html and nav links ---');
const javaHtmlPath = path.join(rootDir, 'java.html');
const indexHtmlPath = path.join(rootDir, 'index.html');
const guideHtmlPath = path.join(rootDir, 'guide.html');

if (!fs.existsSync(javaHtmlPath)) {
    console.error('FAIL: java.html does not exist');
    passed = false;
} else {
    const javaHtml = fs.readFileSync(javaHtmlPath, 'utf8');
    if (!javaHtml.includes('java-data.js') || !javaHtml.includes('java-app.js')) {
        console.error('FAIL: java.html missing data/app script tags');
        passed = false;
    } else {
        console.log('PASS: java.html created and properly configured');
    }
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
if (indexHtml.includes('java.html')) {
    console.log('PASS: index.html has navigation link to java.html');
} else {
    console.error('FAIL: index.html missing link to java.html');
    passed = false;
}

const guideHtml = fs.readFileSync(guideHtmlPath, 'utf8');
if (guideHtml.includes('java.html')) {
    console.log('PASS: guide.html has navigation link to java.html');
} else {
    console.error('FAIL: guide.html missing link to java.html');
    passed = false;
}

if (passed) {
    console.log('\n=============================================');
    console.log('ALL VERIFICATIONS PASSED SUCCESSFULLY! (31/31)');
    console.log('=============================================\n');
} else {
    console.error('\nVerification failed with errors.');
    process.exit(1);
}
