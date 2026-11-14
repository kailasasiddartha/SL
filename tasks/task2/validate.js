// Experiment 2: Registration Form Validation
function validateForm(event) {
    event.preventDefault();

    let isValid = true;

    // Elements
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const uid = document.getElementById('uid').value.trim();
    const pwd = document.getElementById('pwd').value;
    const cpwd = document.getElementById('cpwd').value;

    // Clear previous error messages
    clearErrors();

    // 1. First Name Validation
    if (fname === "") {
        document.getElementById('fnameErr').innerText = "First name is required.";
        isValid = false;
    }

    // 2. Last Name Validation
    if (lname === "") {
        document.getElementById('lnameErr').innerText = "Last name is required.";
        isValid = false;
    }

    // 3. Email Validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementById('emailErr').innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailErr').innerText = "Invalid email format.";
        isValid = false;
    }

    // 4. User ID Validation
    if (uid === "") {
        document.getElementById('uidErr').innerText = "User ID is required.";
        isValid = false;
    }

    // 5. Password Validation
    if (pwd === "") {
        document.getElementById('pwdErr').innerText = "Password is required.";
        isValid = false;
    }

    // 6. Confirm Password Validation
    if (cpwd === "") {
        document.getElementById('cpwdErr').innerText = "Confirm password is required.";
        isValid = false;
    } else if (pwd !== cpwd) {
        document.getElementById('cpwdErr').innerText = "Passwords do not match.";
        isValid = false;
    }

    // Display success
    if (isValid) {
        document.getElementById('successMsg').style.display = "block";
    }

    return isValid;
}

function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = "");
    document.getElementById('successMsg').style.display = "none";
}