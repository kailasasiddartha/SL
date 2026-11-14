const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const tasksDir = path.join(rootDir, 'tasks');

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
}

const tasksMeta = [
  {
    taskNumber: 1,
    id: "task-1",
    title: "Portfolio Profile & Class Time Table",
    question: "Experiment 1(a): Develop a website displaying your basic portfolio profile using HTML Controls. Implement CSS to design the page.\n\nExperiment 1(b): Design a web page to display the class time table using HTML.",
    aim: "To design and develop a personal portfolio webpage using HTML controls and CSS, and create a structured class time table using HTML table elements.",
    tags: ["HTML5", "CSS3", "Portfolio", "HTML Controls", "Table", "Time Table"]
  },
  {
    taskNumber: 2,
    id: "task-2",
    title: "Registration Form Validation with JavaScript",
    question: "Experiment 2: Create a sample form program that collects the first name, last name, email, user id, password and confirms password. Validate all fields using JavaScript, check the email format, and display error messages in red next to the corresponding textboxes.",
    aim: "To design an HTML registration form and validate all input fields using JavaScript, verifying required fields, email format, and password confirmation.",
    tags: ["JavaScript", "Validation", "Forms", "DOM", "RegEx"]
  },
  {
    taskNumber: 3,
    id: "task-3",
    title: "Dynamic Multiplication Table & Image Toggle",
    question: "Experiment 3(a): Design a simple multiplication table using JavaScript by asking the user for the number of rows and columns.\n\nExperiment 3(b): Design and develop an Image Toggle Webpage using JavaScript that toggles between two different images upon button click.",
    aim: "To dynamically generate mathematical tables using nested loops and DOM manipulation, and implement interactive image toggling via event listeners.",
    tags: ["JavaScript", "Loops", "DOM Manipulation", "Events", "Image Toggle"]
  },
  {
    taskNumber: 4,
    id: "task-4",
    title: "To-Do List Application with DOM & CSS",
    question: "Experiment 4: Develop a To-Do List application using JavaScript. Implement CSS when needed to judge the outlook of To-Do list.",
    aim: "To understand JavaScript functions, DOM manipulation, task addition, strike-through completion, task deletion, and clean UI styling.",
    tags: ["JavaScript", "DOM", "To-Do List", "Event Handling", "CSS3"]
  },
  {
    taskNumber: 5,
    id: "task-5",
    title: "Item Billing System (PHP explode function)",
    question: "Experiment 5: Implement PHP script to design a form to accept the details of 5 different items, such as item code, item name, units sold, and rate. Display the bill in the tabular format. Use only 4 text boxes. (Hint: Use of explode function.)",
    aim: "To design an Item Billing System in PHP parsing comma-separated item details with explode(), calculating amounts and displaying the invoice table.",
    tags: ["PHP", "explode()", "Arrays", "Forms", "Billing"]
  },
  {
    taskNumber: 6,
    id: "task-6",
    title: "Session Inactivity Timeout & Cookie Management",
    question: "Experiment 6(a): Create a login form with a username and password. Once the user logs in, the second form should be displayed to accept user details (name, city, phone). If the user doesn't enter information within a specified time limit (60s), expire his session and give a warning.\n\nExperiment 6(b): Write a PHP script to store, retrieve and delete data cookies values.",
    aim: "To manage stateless HTTP communication using PHP Sessions with inactivity expiration, and manipulate client cookies via setcookie().",
    tags: ["PHP", "Sessions", "Cookies", "State Management", "Authentication"]
  },
  {
    taskNumber: 7,
    id: "task-7",
    title: "MySQL Database Setup & User Registration",
    question: "Experiment 7(a): Design a PHP application to organize a database table with user information like username, password and email.\n\nExperiment 7(b): Design a registration page and insert the data into created database table using prepared statements.",
    aim: "To establish MySQL database connectivity via MySQLi, create tables, and securely insert user credentials using password hashing and prepared statements.",
    tags: ["PHP", "MySQL", "MySQLi", "Database", "Security"]
  },
  {
    taskNumber: 8,
    id: "task-8",
    title: "Database Record Update & Delete Operations",
    question: "Experiment 8(a): Examine and write a PHP script for updating required user information in the database.\n\nExperiment 8(b): Write a PHP script for deleting a specified user from the database.",
    aim: "To execute parameterized UPDATE and DELETE queries using MySQLi prepared statements to modify and delete database records.",
    tags: ["PHP", "MySQL", "Prepared Statements", "UPDATE", "DELETE"]
  },
  {
    taskNumber: 9,
    id: "task-9",
    title: "Four Stroke Motorbike XML Catalog (DTD, XSLT & CSS)",
    question: "Experiment 9: Create an XML file along with its DTD for a catalog of four stroke motorbikes, where each motor bike has the following child elements – make, model, year, color, engine, chassis number and accessories. The engine element has child elements engine number, number of cylinders, type of fuel. The accessories element has attributes disc brake, auto-start and radio. Display in a table with GREY header, capitalized bold columns, styled using XSL and CSS.",
    aim: "To model structured data using XML and DTD, and transform XML into an HTML table with grey header and bold columns using XSLT and CSS.",
    tags: ["XML", "DTD", "XSLT", "CSS", "Data Modeling"]
  },
  {
    taskNumber: 10,
    id: "task-10",
    title: "jQuery AJAX HTTP GET Request",
    question: "Experiment 10: Write a JQuery AJAX program to request data from the server with an HTTP GET request.",
    aim: "To use the jQuery $.get() method to asynchronously retrieve server timestamp data and update DOM elements without reloading the page.",
    tags: ["jQuery", "AJAX", "GET Request", "PHP", "DOM"]
  },
  {
    taskNumber: 11,
    id: "task-11",
    title: "Live Name Suggestions (jQuery AJAX & PHP)",
    question: "Experiment 11: Create a JQuery AJAX application to retrieve the contents of PHP file. Example: Consider a webpage with textbox to search for a name, as the user enters a character, the application should display all the suggested names with that character, if no match display no suggests message.",
    aim: "To implement real-time auto-suggest search using jQuery keyup event listeners, AJAX communication, and PHP server filtering.",
    tags: ["jQuery", "AJAX", "Live Search", "PHP", "Auto-Suggest"]
  },
  {
    taskNumber: 12,
    id: "task-12",
    title: "AJAX Database Retrieval without Page Reload",
    question: "Experiment 12: Develop a AJAX application to retrieve the contents of database. Example: Consider a webpage with a dropdown list of set of names, as user selects a name the application should be able to display selected user personal information (username, Phone number, Email-id, Place) in a table without reloading the page.",
    aim: "To build an asynchronous database lookup system using vanilla JavaScript XMLHttpRequest, PHP backend, and MySQL database.",
    tags: ["AJAX", "XMLHttpRequest", "PHP", "MySQL", "Database Retrieval"]
  }
];

// Scan tasks folder
const tasks = tasksMeta.map(meta => {
    const folderName = `task${meta.taskNumber}`;
    const folderPath = path.join(tasksDir, folderName);
    const zipName = `task${meta.taskNumber}.zip`;
    const zipPath = `tasks/${zipName}`;

    let files = [];
    if (fs.existsSync(folderPath)) {
        const fileNames = fs.readdirSync(folderPath);
        files = fileNames.map(fName => {
            const filePath = path.join(folderPath, fName);
            const stats = fs.statSync(filePath);
            const ext = path.extname(fName).toLowerCase().replace('.', '');

            let fileType = ext;
            if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(ext)) fileType = 'image';
            if (['doc', 'docx'].includes(ext)) fileType = 'docx';
            if (['sql'].includes(ext)) fileType = 'sql';
            if (['xml', 'dtd', 'xsd', 'xsl'].includes(ext)) fileType = 'xml';

            let content = null;
            if (!['png', 'jpg', 'jpeg', 'gif', 'docx', 'doc', 'zip'].includes(ext)) {
                try {
                    content = fs.readFileSync(filePath, 'utf8');
                } catch (e) {
                    content = null;
                }
            }

            return {
                name: fName,
                type: fileType,
                extension: ext,
                size: formatBytes(stats.size),
                rawSize: stats.size,
                path: `tasks/${folderName}/${fName}`,
                content: content
            };
        });
    }

    return {
        ...meta,
        zipPath: zipPath,
        folderPath: `tasks/${folderName}/`,
        filesCount: files.length,
        files: files
    };
});

// Viva Categories (HTML, CSS, JavaScript, XML, PHP)
const vivaCategories = [
  {
    languageId: "html",
    languageName: "HTML",
    categoryBadge: "Markup & DOM",
    icon: "🌐",
    description: "HyperText Markup Language fundamentals, HTML5 semantic structure, forms, and browser APIs.",
    questions: [
      {
        q: "What is the difference between standard HTML and HTML5 semantic elements?",
        a: `HTML5 introduced semantic tags (such as <header>, <nav>, <article>, <section>, <aside>, and <footer>) to clearly describe the meaning of content to both browsers and developers.
Unlike generic <div> and <span> tags that provide zero structural context, semantic elements enhance website accessibility for screen readers and search engine crawlers.
HTML5 eliminated complex DTD declarations, simplifying the document type preamble to just <!DOCTYPE html>.
It natively integrates audio and video playback (<audio>, <video>) without requiring third-party plugins like Adobe Flash.
Additionally, HTML5 introduced advanced form controls (type="email", type="date", required attributes) for client-side evaluation.
It also provides persistent client-side storage mechanisms like localStorage and sessionStorage, replacing reliance on cookies.
These structural enhancements create cleaner, maintainable markup and significantly improve web standards compliance.`
      },
      {
        q: "Explain the purpose of HTML forms, GET vs POST submission methods, and the enctype attribute.",
        a: `HTML forms (<form>) act as interactive containers designed to collect user input and transmit data to a server-side endpoint.
The HTTP GET method appends form data as key-value pairs directly onto the URL query string (e.g., process.php?id=1&name=Alice).
Because GET exposes data in the address bar and browser history, it has length limits (~2048 chars) and must never be used for sensitive credentials.
The HTTP POST method packages data within the HTTP request body, keeping parameters invisible in the URL and accommodating large payloads.
When a form handles file uploads (<input type="file">), the enctype="multipart/form-data" attribute is strictly required.
Without multipart/form-data, the browser transmits only the file name as standard ASCII text via application/x-www-form-urlencoded.
Using the proper method and encoding ensures secure, robust server-side processing across stateless web transactions.`
      },
      {
        q: "What is the HTML DOM (Document Object Model) and how is the node hierarchy structured?",
        a: `The Document Object Model (DOM) is an object-oriented programmatic interface that represents an HTML document as a structured logical tree.
When a web browser parses an HTML file, it transforms each HTML tag, attribute, and text snippet into corresponding node objects in memory.
At the pinnacle of this tree resides the window object, whose immediate child is the document node representing the web page.
Below the document lies the root element (<html>), which branches into the <head> and <body> parent element nodes.
Child nodes inherit contextual relationships (parent, child, sibling) that allow scripting languages like JavaScript to inspect and mutate the tree.
Developers access and alter these nodes using methods such as getElementById(), querySelector(), and appendChild().
This dynamic tree structure forms the fundamental foundation for interactive, responsive web applications and Dynamic HTML (DHTML).`
      },
      {
        q: "What are HTML5 Web Storage APIs (localStorage vs sessionStorage) and how do they differ from Cookies?",
        a: `HTML5 Web Storage provides standardized client-side key-value persistence mechanisms offering approximately 5MB of storage per origin.
localStorage stores data permanently across browser restarts with no expiration date, remaining until explicitly wiped by script or user action.
sessionStorage maintains data strictly for the lifespan of a single browser tab session and is wiped immediately when the tab closes.
In contrast, HTTP Cookies are limited to a restrictive 4KB capacity and are automatically sent to the server with every HTTP header.
This automatic transmission of cookies adds unnecessary network overhead, whereas Web Storage stays strictly localized within the browser.
Data stored in Web Storage is easily manipulated through intuitive JavaScript methods: setItem(), getItem(), removeItem(), and clear().
Web Storage only accepts string formats, requiring objects and arrays to be serialized and deserialized using JSON.stringify() and JSON.parse().`
      },
      {
        q: "Compare HTML5 Canvas and SVG (Scalable Vector Graphics) with their rendering mechanisms.",
        a: `HTML5 <canvas> is a resolution-dependent, raster-based drawing surface manipulated entirely through programmatic JavaScript APIs (CanvasRenderingContext2D).
Canvas draws graphics pixel-by-pixel; once a shape or shape stroke is drawn, the browser forgets its geometry and treats it solely as raw bitmap pixels.
Because canvas does not maintain individual DOM nodes for drawn objects, it offers exceptional performance for high-frame-rate games and real-time simulations.
Conversely, SVG is an XML-based vector graphics format where every shape (<circle>, <rect>, <path>) exists as a distinct DOM node in the tree.
SVG maintains pristine visual clarity at any resolution or zoom level without pixelation, making it ideal for scalable UI icons, charts, and logos.
Because SVG elements are standard DOM nodes, they can be styled with CSS and bound directly to JavaScript event listeners like onclick.
Developers choose Canvas for pixel-intensive animations and SVG for resolution-independent, interactive user interface vector components.`
      },
      {
        q: "What is the difference between <div> and <span>, and block-level vs inline elements?",
        a: `Block-level elements (such as <div>, <p>, <h1>–<h6>, <table>, and <section>) always begin on a new line and consume the full available container width.
They respect top, bottom, left, and right margin and padding, and their explicit width and height properties can be customized via CSS.
Inline elements (such as <span>, <a>, <strong>, <em>, and <code>) do not break onto a new line and occupy only the space bound by their text content.
Inline elements ignore vertical margin-top and margin-bottom as well as explicit width and height declarations unless transformed by CSS.
The <div> tag serves as a generic, non-semantic block-level container ideal for grouping layout components and applying structural styles.
The <span> tag serves as an inline container designed for styling specific words or text phrases inside a block-level paragraph or heading.
Developers can alter these default browser behaviors using the CSS display property (block, inline, inline-block, or none).`
      },
      {
        q: "How do viewport meta tags and character encoding declarations impact web page rendering?",
        a: `The <meta charset="UTF-8"> tag informs the browser parser which character encoding scheme to use for decoding source bytes into glyphs.
UTF-8 covers virtually all human languages and special symbols, preventing mojibake character corruption and security exploits based on encoding sniffing.
The <meta name="viewport" content="width=device-width, initial-scale=1.0"> tag is indispensable for mobile-first Responsive Web Design.
By default, mobile browsers render desktop pages on a virtual 980px viewport and zoom out, rendering text illegibly small.
Setting width=device-width instructs the browser to align the screen width with the device's physical hardware pixels.
The initial-scale=1.0 parameter establishes a 1:1 relationship between CSS pixels and device-independent pixels upon initial page load.
Together, these foundational meta tags guarantee accurate text representation, proper media query breakpoints, and optimal responsive usability.`
      }
    ]
  },
  {
    languageId: "css",
    languageName: "CSS",
    categoryBadge: "Styling & Layout",
    icon: "🎨",
    description: "Cascading Style Sheets, Box Model, Flexbox, Grid, Specificity, and responsive animations.",
    questions: [
      {
        q: "Explain the CSS Box Model in detail and the impact of the box-sizing: border-box property.",
        a: `The CSS Box Model is the foundational layout architecture governing how elements calculate their spatial dimensions on a webpage.
Every HTML box comprises four concentric layers: Content (text/media), Padding (inner clearance), Border (outer edge), and Margin (external separation).
Under the default box-sizing: content-box, an element's declared width and height apply exclusively to the inner content area.
Adding padding or borders inflates the rendered element size beyond the declared width, frequently causing unintended layout overflow.
Applying box-sizing: border-box changes this calculation so that padding and border thicknesses are absorbed inside the declared width and height.
If an element is assigned width: 300px with padding: 20px and border: 2px, its total rendered width remains strictly 300px.
Modern CSS best practice dictates using *, *::before, *::after { box-sizing: border-box; } to eliminate layout calculation friction.`
      },
      {
        q: "What is the difference between CSS Flexbox and CSS Grid, and when should each layout model be used?",
        a: `CSS Flexbox is a one-dimensional layout model designed to distribute space and align items along either a single row OR a single column.
Flexbox excels at interface components such as navigation bars, button clusters, form fields, and dynamic card rows that need even spacing.
It manages element positioning through properties like justify-content (main-axis alignment) and align-items (cross-axis alignment).
CSS Grid is a two-dimensional layout model capable of coordinating items simultaneously across rows AND columns.
Grid allows designers to divide a parent container into structured tracks using grid-template-columns, grid-template-rows, and named grid-areas.
Grid is best suited for holistic page structures, multi-column dashboard layouts, and complex overlapping element compositions.
In professional web engineering, Flexbox and Grid are frequently combined, with Grid structuring page sections and Flexbox organizing inner items.`
      },
      {
        q: "Explain CSS Specificity rules, cascading order, and how !important alters style precedence.",
        a: `CSS Specificity is the algorithmic scoring system browsers employ to determine which CSS rule takes precedence when multiple rules target one element.
The specificity hierarchy is evaluated in four distinct tiers: Inline Styles (1000), ID Selectors (100), Classes/Attributes/Pseudo-classes (10), and Elements (1).
Universal selectors (*), combinators (+, >, ~), and :where() carry a specificity score of 0.
When conflicting declarations have identical specificity, the Cascade rule dictates that the declaration declared latest in the stylesheet wins.
Appending the !important flag bypasses normal specificity, giving the property paramount priority over all author-level rules.
Overusing !important breaks the natural cascading flow of CSS and makes future stylesheet debugging and maintenance extremely difficult.
Writing modular, low-specificity classes (like BEM methodology or utility classes) ensures clean, predictable stylesheet maintainability.`
      },
      {
        q: "What are the differences between display: none, visibility: hidden, and opacity: 0?",
        a: `display: none completely removes an element from the normal document flow; it takes up zero space and triggers browser layout reflow.
Subordinate elements and child nodes inside a hidden element are completely invisible, and screen readers will ignore the subtree.
visibility: hidden hides the element visually, but the element preserves its original geometry, width, height, and position in the document layout.
Child elements hidden by visibility: hidden can be individually revealed if explicitly overwritten with visibility: visible.
opacity: 0 adjusts element alpha transparency to 0%, rendering it invisible while retaining its layout footprint and event listeners.
Unlike display: none, an element with opacity: 0 remains interactive, meaning user clicks, focus, and hover events will still fire.
Choosing the right technique depends on whether layout space must be preserved and whether user interaction or transitions are desired.`
      },
      {
        q: "How do CSS position values (static, relative, absolute, fixed, sticky) determine element placement?",
        a: `static is the default positioning mode where elements flow naturally according to the normal document structure, ignoring top/left/right/bottom/z-index.
relative positions an element relative to its normal position in the document flow without removing its original occupied space.
absolute removes the element from the document flow and positions it relative to its closest ancestor having non-static positioning.
fixed detaches the element from the document flow and locks its coordinates relative to the browser viewport, keeping it stationary during scrolling.
sticky acts as a hybrid: the element behaves as relative until the viewport scroll reaches a specified offset, whereupon it sticks like fixed.
Both absolute and fixed create their own stacking contexts and permit layered element ordering via the z-index property.
Understanding these positioning modes is essential for implementing modal dialogs, fixed toolbars, sticky headers, and dropdown menus.`
      },
      {
        q: "Explain CSS pseudo-classes (:hover, :nth-child(), :focus) versus pseudo-elements (::before, ::after).",
        a: `A CSS pseudo-class targets an existing element based on its dynamic state, user interaction, or positional hierarchy in the DOM tree.
Common examples include :hover (cursor hovering), :focus (keyboard or input focus), :active (mouse click active), and :nth-child(n).
Pseudo-classes are designated with a single colon prefix (:) and do not create new DOM elements; they merely restyle existing elements.
In contrast, a CSS pseudo-element creates an abstract, cosmetic pseudo-DOM node that does not physically exist in the HTML markup.
Standard pseudo-elements include ::before and ::after, which require the content: "" property to inject cosmetic icons, badges, or overlays.
Other pseudo-elements include ::first-letter, ::first-line, and ::selection for styling highlighted text selections.
Modern CSS uses double colons (::) to distinguish pseudo-elements from single-colon pseudo-classes, maintaining syntactic clarity.`
      },
      {
        q: "How do CSS Media Queries enable responsive web design across multiple viewport break-points?",
        a: `CSS Media Queries allow developers to apply custom style rules conditionally based on device capabilities and viewport characteristics.
The syntax uses the @media rule coupled with media types (screen, print) and conditional feature expressions like min-width and max-width.
A mobile-first strategy writes base styles for small screens and progressively enhances layout using @media (min-width: 768px) for tablets and 1024px for desktops.
Media queries can also detect device orientation (orientation: portrait or landscape) and display pixel density (min-resolution: 2dppx).
Modern browsers support user preference media queries like @media (prefers-color-scheme: dark) to automate dark theme switching.
They also support @media (prefers-reduced-motion: reduce) to disable heavy animations for users with vestibular or motion sensitivities.
Leveraging fluid units (%, vw, rem) with well-chosen media query breakpoints ensures seamless responsive usability across devices.`
      }
    ]
  },
  {
    languageId: "javascript",
    languageName: "JavaScript",
    categoryBadge: "Client Scripting",
    icon: "⚡",
    description: "Core ECMAScript concepts, Event Loop, Closures, Promises, DOM manipulation, and AJAX.",
    questions: [
      {
        q: "What are the differences between var, let, and const in terms of scoping, re-declaration, and hoisting?",
        a: `var is function-scoped (or globally scoped if declared outside a function) and is completely oblivious to block boundaries like if or for loops.
Variables declared with var are hoisted to the top of their enclosing scope and initialized with undefined, allowing premature access without errors.
var permits re-declaration within the same scope, which often leads to accidental variable shadowing and difficult runtime bugs.
let and const were introduced in ES6 and are strictly block-scoped, existing exclusively within the enclosing {} curly braces.
While let and const identifiers are hoisted, they remain uninitialized in the "Temporal Dead Zone" (TDZ); accessing them before declaration throws a ReferenceError.
let allows variable reassignment, making it ideal for loop iterators and mutable states, whereas const strictly prevents reassignment after initialization.
However, const objects and arrays remain internally mutable; only the memory reference binding itself is protected from reassignment.`
      },
      {
        q: "Explain the JavaScript Event Loop, Call Stack, Callback Queue, and Microtask Queue.",
        a: `JavaScript is a single-threaded execution language with a single Call Stack that processes one synchronous task at a time.
When asynchronous tasks (like setTimeout, DOM events, or AJAX) execute, browser Web APIs handle them concurrently in the background.
Upon completion, the Web API pushes timer and event callbacks into the Macrotask (Callback) Queue.
Promises, async/await, and queueMicrotask() push their resolution callbacks into the higher-priority Microtask Queue.
The Event Loop continuously inspects whether the Call Stack is empty; if and only if the stack is clear, it dequeues tasks.
The Event Loop drains all pending microtasks in the Microtask Queue before yielding execution to process the next macrotask.
This event-driven, non-blocking architecture allows JavaScript to handle thousands of concurrent operations without locking the user interface.`
      },
      {
        q: "What are Closures in JavaScript and what are their practical real-world applications?",
        a: `A closure is the combination of a function bundled together with references to its surrounding lexical environment.
In JavaScript, an inner function retains permanent access to the variables, arguments, and scope of its outer enclosing function even after the outer function has returned.
Closures are created automatically whenever a function is defined inside another function and references outer variables.
A primary practical application of closures is data encapsulation and information hiding, mimicking private object variables in module patterns.
Closures power function currying and partial application, allowing functions to be pre-configured with reusable arguments.
They are widely used in event handlers, asynchronous callbacks, and timer functions (setTimeout) to retain state across execution cycles.
However, unreleased closures can retain large object references in memory, so developers must avoid unintended memory leaks in long-lived applications.`
      },
      {
        q: "Explain the difference between synchronous code, Callbacks, Promises, and async/await.",
        a: `Synchronous code executes sequentially from top to bottom, blocking subsequent operations until the current instruction finishes executing.
Callbacks were the original mechanism for asynchronous programming, passing a function as an argument to be invoked when an async task finished.
Relying on nested callbacks for interdependent async operations led to unmaintainable, deeply indented code known as "Callback Hell".
ES6 introduced Promises, objects representing the eventual completion or failure of an asynchronous operation (pending, fulfilled, rejected).
Promises streamline error handling and sequential chaining through .then(), .catch(), and .finally() methods.
ES8 introduced async and await, syntactic sugar built on top of Promises that allows asynchronous code to read like synchronous statements.
Functions designated with async always return a Promise, and await pauses execution until the Promise settles, making error handling straightforward with try/catch.`
      },
      {
        q: "What is Event Bubbling, Event Capturing, and how does Event Delegation optimize DOM listeners?",
        a: `When an event occurs on a DOM element, the browser executes a three-phase event dispatch cycle: Capturing, Target, and Bubbling.
During Event Capturing (Trickling), the event descends from the top window object down through ancestors to the target element.
During Event Bubbling (the default mode), the event triggers on the innermost target element and bubbles upwards through parent ancestor nodes.
Developers can halt bubbling propagation using event.stopPropagation() or cancel default browser behaviors via event.preventDefault().
Event Delegation is a high-performance optimization pattern that leverages event bubbling to attach a single event listener to a common parent element.
Instead of binding hundreds of individual listeners to list items (<li>), a single listener on the parent (<ul>) inspects event.target.
This technique dramatically reduces memory consumption, simplifies cleanup, and automatically handles dynamically inserted DOM nodes without re-binding.`
      },
      {
        q: "Explain the differences between == (abstract equality) and === (strict equality) with type coercion.",
        a: `The double equals operator (==) performs loose or abstract equality comparison, comparing values after performing automatic type coercion if types differ.
When evaluating operands of different types, JavaScript converts them according to complex ECMA specification rules (e.g., '5' == 5 evaluates to true).
Loose comparison produces well-known edge cases: 0 == false, "" == false, and null == undefined all evaluate to true, causing subtle bugs.
The triple equals operator (===) performs strict equality comparison without executing any type coercion.
Under strict equality, if the two operands have different data types (such as string '5' and number 5), the expression immediately returns false.
Strict equality is faster and predictable because it checks both data type and value identity without background conversion overhead.
In modern JavaScript engineering, using === (and !==) is standard best practice to enforce type safety and eliminate coercion pitfalls.`
      },
      {
        q: "How does AJAX and the XMLHttpRequest / fetch() API work to enable asynchronous data exchange?",
        a: `AJAX (Asynchronous JavaScript and XML) is a web development paradigm that enables web applications to send and retrieve data asynchronously in the background.
By decoupling data exchange from browser navigation, AJAX updates specific segments of a webpage dynamically without triggering a full page reload.
The classic AJAX implementation utilizes the XMLHttpRequest (XHR) object, configuring request type, URL, and monitoring readyState and status.
When xhttp.readyState === 4 (done) and xhttp.status === 200 (OK), the response payload is read from responseText or responseXML.
Modern applications prefer the Promise-based fetch() API, which provides a cleaner, cleaner syntax for executing HTTP requests.
AJAX payloads typically utilize JSON (JavaScript Object Notation) due to its lightweight syntax and seamless parsing via JSON.parse().
AJAX serves as the fundamental engine behind dynamic search auto-complete, infinite scrolling, real-time dashboards, and single-page applications.`
      }
    ]
  },
  {
    languageId: "xml",
    languageName: "XML",
    categoryBadge: "Data Interchange",
    icon: "📄",
    description: "Extensible Markup Language, DTD validation, XML Schema (XSD), XSLT transformations, and XPath.",
    questions: [
      {
        q: "What is XML (Extensible Markup Language) and what are the core rules for a 'Well-Formed' XML document?",
        a: `XML (Extensible Markup Language) is a platform-independent, text-based meta-markup language designed to store, structure, and transport data.
Unlike HTML, which focuses on presenting data with predefined tags, XML has no predefined tags and is designed purely to describe data semantics.
For an XML document to be considered "Well-Formed", it must adhere strictly to syntax rules defined by the W3C specification.
First, every XML document must contain exactly one single root element that encloses all other child elements in a strict hierarchy.
Second, all tags are case-sensitive and every opened element must have a corresponding closing tag (e.g., <name> must close with </name>).
Third, elements must be cleanly nested without overlapping (e.g., <b><i>text</i></b> is valid, but <b><i>text</b></i> is malformed).
Finally, all attribute values must be enclosed in quotes ("value" or 'value'), and special characters must be escaped using entities like &amp; and &lt;.`
      },
      {
        q: "What is a Document Type Definition (DTD) and how does Internal DTD differ from External DTD?",
        a: `A Document Type Definition (DTD) defines the legal building blocks, structural grammar, and allowable elements and attributes of an XML document.
A DTD validates whether an XML instance document conforms to expected organizational hierarchies, verifying tag sequences, cardinalities, and attributes.
An Internal DTD is declared directly within the XML document file inside the <!DOCTYPE rootName [...]> block preamble.
Internal DTDs are convenient for standalone, single-file XML configurations where rules do not need to be shared across multiple documents.
An External DTD is written in a dedicated separate file (typically ending in .dtd) and referenced via SYSTEM or PUBLIC identifiers.
External DTDs allow multiple distinct XML documents to reference and adhere to a single standardized structural schema across an enterprise.
If an XML document satisfies all Well-Formed syntax rules and satisfies its referenced DTD grammar, it is classified as "Valid XML".`
      },
      {
        q: "Explain XML Schema Definition (XSD) and why it is superior to traditional DTDs for data validation.",
        a: `XML Schema Definition (XSD) is a W3C recommendation for specifying the structural constraints, data types, and relationships of XML documents.
Unlike DTDs, which use an obsolete idiosyncratic syntax, XSD documents are written using standard XML syntax, allowing them to be parsed by XML parsers.
XSD introduces rich built-in data types (such as xs:integer, xs:decimal, xs:date, xs:boolean, and xs:string) that are absent in DTDs.
It supports custom data typing using simple types, complex types, and restriction facets like xs:pattern (regular expressions) and xs:minInclusive.
XSD allows developers to enforce precise element occurrence limits using numeric minOccurs and maxOccurs attributes rather than basic regex tokens (*, +, ?).
Furthermore, XSD provides comprehensive native support for XML Namespaces, preventing element naming collisions across integrated vocabularies.
Because of these advanced typing, validation, and namespace capabilities, modern enterprise systems have almost universally replaced DTD with XSD.`
      },
      {
        q: "What is an XML Namespace (xmlns) and how does it prevent element name collisions in combined vocabularies?",
        a: `An XML Namespace is a qualifying mechanism used to provide uniquely named elements and attributes within an XML document.
When combining multiple XML vocabularies from different domains into a single document, identical tag names (like <table> or <title>) inevitably clash.
Namespaces solve this naming collision by associating element names with a globally unique Uniform Resource Identifier (URI).
A namespace is declared using the reserved xmlns attribute, either with a prefix (e.g., xmlns:bk="http://library.org/books") or as a default namespace.
Once declared, elements are prefixed (e.g., <bk:title>) to associate them explicitly with their originating vocabulary and schema.
The URI string is used solely as a globally unique identifier; the XML parser does not actually need to fetch or download anything from that web address.
Namespaces ensure seamless data interchange in enterprise protocols like SOAP web services, SVG embeds, and XSD schema definitions.`
      },
      {
        q: "Explain the differences between DOM Parser and SAX Parser for reading and processing XML files.",
        a: `The Document Object Model (DOM) Parser is a tree-based parser that reads an entire XML document into system memory before processing begins.
DOM constructs a complete hierarchical object tree in memory, allowing developers random access to read, traverse, and modify any node in any direction.
However, because DOM creates objects for every node, it consumes extensive memory (typically 3 to 10 times the original file size), making it unfit for massive files.
The Simple API for XML (SAX) Parser is an event-driven, push-based parser that reads XML documents sequentially as a continuous stream.
SAX fires callback events (such as startElement, endElement, and characters) as it scans through tags from top to bottom.
Because SAX does not store the XML document in memory, it has an exceptionally tiny memory footprint and can parse gigabyte-sized files rapidly.
Developers choose DOM when dynamic tree manipulation or bidirectional traversal is required, and SAX when memory-efficient read-only streaming is needed.`
      },
      {
        q: "What is XSLT (Extensible Stylesheet Language Transformations) and how does it transform XML into HTML?",
        a: `XSLT (Extensible Stylesheet Language Transformations) is a declarative, XML-based language used for transforming XML documents into other formats like HTML, CSV, or XML.
An XSLT stylesheet comprises template rules (<xsl:template match="...">) that describe how matching source XML elements should be formatted.
An XSLT processor matches elements from the input XML document using XPath expressions and writes formatted markup into the output tree.
XSLT provides iterative looping with <xsl:for-each>, data sorting with <xsl:sort>, and conditional rendering with <xsl:if> and <xsl:choose>.
Specific element text values are extracted and embedded into output markup using the <xsl:value-of select="..."/> directive.
Transformations can execute either server-side (using PHP's XSLTProcessor) or client-side by referencing the stylesheet in XML via <?xml-stylesheet?>.
XSLT enforces clean separation of concerns by separating raw structured XML data from its visual presentation logic.`
      },
      {
        q: "What is XPath and how are location paths and expressions used to query nodes within an XML document?",
        a: `XPath (XML Path Language) is a specialized query language designed to navigate the node hierarchy and extract data from XML documents.
XPath models an XML document as a tree of nodes (element nodes, attribute nodes, text nodes, and root nodes) and queries them using path expressions.
A forward slash / represents selection from the root node, whereas a double slash // selects matching nodes anywhere in the document regardless of depth.
Attribute nodes are targeted using the @ symbol prefix (e.g., //book[@category='Programming'] selects programming books).
XPath supports predicates enclosed in square brackets [] to filter nodes based on index or criteria (e.g., /library/book[1] selects the first book).
It also includes built-in functions for calculating metrics, such as count(), sum(), string-length(), and contains().
XPath serves as the query language powering XSLT transformations, XQuery databases, and automated web scraping and testing frameworks.`
      }
    ]
  },
  {
    languageId: "php",
    languageName: "PHP",
    categoryBadge: "Server Scripting",
    icon: "🐘",
    description: "Server-side web programming, superglobals, state management, MySQLi database integration, and security.",
    questions: [
      {
        q: "What is PHP and how does server-side execution differ from client-side JavaScript execution?",
        a: `PHP (Hypertext Preprocessor) is an open-source, interpreted server-side scripting language primarily engineered for dynamic web application development.
In PHP's server-side paradigm, scripts execute exclusively on the web hosting server (such as Apache or Nginx) inside the PHP runtime environment.
When a client requests a .php file, the server interprets the PHP code, interacts with databases, and renders pure HTML/CSS/JS back to the browser.
Because the server executes all logic before sending the response, the client never sees the underlying PHP source code, protecting server business logic.
In contrast, client-side JavaScript runs inside the user's browser, executing directly on the user's local CPU to manipulate the live DOM.
Client-side scripts handle instantaneous UI transitions and animations without waiting for server network latency.
A standard web application combines both: PHP handles secure authentication, file operations, and database persistence, while JavaScript drives client-side interactivity.`
      },
      {
        q: "Explain the difference between $_GET and $_POST superglobals, and when to use each for form handling.",
        a: `Both $_GET and $_POST are PHP associative array superglobals used to collect form data submitted via HTTP methods.
$_GET collects parameters transmitted in the URL query string, making parameters completely visible to users in the browser address bar.
Because URLs are cached and logged in server history, $_GET has a data length limit (~2048 characters) and must never carry sensitive passwords or tokens.
$_GET is designed for idempotent, read-only requests such as search filters, pagination (page=2), and bookmarkable views.
$_POST collects parameters packaged invisibly inside the HTTP request payload body, leaving the browser address bar clean and unaffected.
$_POST has virtually no size restrictions (configurable in php.ini via post_max_size), making it essential for secure form submissions and file uploads.
Developers use $_POST whenever modifying server state (user registrations, payments, logins) and $_GET when querying or fetching public resources.`
      },
      {
        q: "How do PHP Sessions (session_start(), $_SESSION) and HTTP Cookies (setcookie()) manage stateless HTTP?",
        a: `Because the HTTP protocol is inherently stateless, servers do not natively remember individual users between consecutive web page requests.
HTTP Cookies are small text tokens stored directly in the user's browser using PHP's setcookie("name", "val", $expire, $path) function.
Cookies are automatically transmitted back to the server inside HTTP request headers with every subsequent page visit until expiration.
PHP Sessions store sensitive user state securely on the server machine, using a unique random session identifier (e.g., PHPSESSID).
Calling session_start() at the top of a PHP script creates or restores the session, issuing a temporary cookie containing solely this session ID.
When subsequent requests arrive, PHP matches the incoming ID to its server-side session file, populating the $_SESSION associative array with user data.
Sessions are ideal for sensitive authentication and shopping carts, whereas Cookies are ideal for non-sensitive client preferences like UI themes.`
      },
      {
        q: "Explain the difference between MySQLi (procedural & object-oriented) and PDO for PHP database interactions.",
        a: `MySQLi (MySQL Improved) is a database driver developed exclusively to interact with MySQL and MariaDB databases in PHP applications.
MySQLi supports dual programming paradigms: procedural programming (e.g., mysqli_connect(), mysqli_query()) and object-oriented syntax ($mysqli->query()).
MySQLi is straightforward for university lab curricula and beginner projects, but it is strictly locked to MySQL and cannot connect to other database engines.
PHP Data Objects (PDO) is a database abstraction layer that provides a unified, consistent data-access interface for 12 different database management systems.
With PDO, switching a production backend from MySQL to PostgreSQL, SQLite, or Oracle requires modifying only the connection DSN string.
PDO supports named parameters in prepared statements (e.g., :email), whereas MySQLi supports only positional question mark placeholders (?).
Both modern MySQLi and PDO fully support prepared statements, transactions, and SSL encryption, making both secure choices when parameterized correctly.`
      },
      {
        q: "How do SQL Injection attacks occur in PHP applications and how do Prepared Statements prevent them?",
        a: `SQL Injection occurs when untrusted user input is directly concatenated into a dynamic SQL query string without proper sanitization.
An attacker can input malicious SQL fragments (e.g., ' OR '1'='1) to alter query logic, bypass authentication, or drop database tables.
Functions like addslashes() or manual escaping can still leave vulnerabilities under edge cases like multi-byte character encodings.
Prepared Statements prevent SQL Injection fundamentally by separating the SQL query template structure from the input parameters.
When a prepared statement is created, the database pre-compiles the query template containing parameter placeholders (? or :name).
User data parameters are transmitted separately to the database engine in a distinct communication protocol packet.
Because the query structure has already been compiled, the database engine treats all bound parameters strictly as literal scalar values, never as executable SQL code.`
      },
      {
        q: "Explain file uploading in PHP using $_FILES, move_uploaded_file(), and critical security validations.",
        a: `File uploading in PHP requires an HTML form with method="POST" and enctype="multipart/form-data" to transmit binary streams.
When uploaded, PHP stores the incoming file in a temporary server directory and populates the $_FILES['input_name'] multidimensional array.
This array contains vital metadata: name (original filename), type (client-provided MIME), tmp_name (temp location), error, and size.
Developers must verify that error === UPLOAD_ERR_OK and confirm file size falls within safety limits before proceeding.
Crucially, never trust $_FILES['file']['type']; always inspect MIME types securely on the server using finfo_file(finfo_open(FILEINFO_MIME_TYPE), $tmp).
Whitelisting extensions (pathinfo($name, PATHINFO_EXTENSION)) and generating randomized unique filenames (uniqid()) prevents script overwrite attacks.
Finally, move_uploaded_file($tmp_name, $destination) safely moves the file from the temporary directory to its permanent storage folder.`
      },
      {
        q: "What is the difference between include, require, include_once, and require_once in PHP?",
        a: `These four language constructs are used in PHP to import and execute the code of an external PHP file into the current running script.
include attempts to import the designated file; if the file is missing or contains errors, it emits a non-fatal E_WARNING and continues execution.
require also attempts to import the file; however, if the file cannot be located, it triggers a fatal E_COMPILE_ERROR and halts script execution immediately.
Developers use require for mission-critical core files like database credentials, helper functions, and configurations that the application cannot function without.
The include_once and require_once variants verify whether the specified file has already been loaded earlier during the current request execution.
If the file has already been loaded, PHP silently ignores the duplicate statement, preventing fatal function and class re-declaration errors.
Using require_once is standard practice for foundational libraries and classes, while include is preferred for optional UI templates and footers.`
      }
    ]
  }
];

const completeLabData = {
    portalName: "Scripting Languages Lab Portal",
    institution: "Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)",
    courseCode: "GR25A2082 / GR20 CSE(AIML)",
    academicYear: "2026-2027",
    version: "2.1.0",
    tasks: tasks,
    vivaCategories: vivaCategories
};

fs.writeFileSync(path.join(rootDir, 'data.json'), JSON.stringify(completeLabData, null, 2), 'utf8');
console.log('Successfully updated data.json');

const dataJsContent = `/**
 * Central Configuration Data for Scripting Languages (SL) Lab Portal
 * Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)
 * GR25A2082 / GR20 CSE(AIML) Scripting Languages Laboratory
 */
window.LAB_DATA = ${JSON.stringify(completeLabData, null, 2)};
`;

fs.writeFileSync(path.join(rootDir, 'data.js'), dataJsContent, 'utf8');
console.log('Successfully updated data.js');
