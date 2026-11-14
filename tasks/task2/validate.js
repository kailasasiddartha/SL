const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error and success messages.
    document.querySelectorAll(".error").forEach(function (element) {
        element.textContent = "";
    });
    document.getElementById("success").textContent = "";

    // Read and trim the text fields.
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let isValid = true;

    // Check mandatory fields and specific format rules.
    if (firstName === "") {
        showError("firstNameError", "First Name is required.");
        isValid = false;
    }
    if (lastName === "") {
        showError("lastNameError", "Last Name is required.");
        isValid = false;
    }
    if (email === "") {
        showError("emailError", "Email is required.");
        isValid = false;
    } else {
        // Basic email format check.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError("emailError", "Enter a valid email address.");
            isValid = false;
        }
    }
    if (userId === "") {
        showError("userIdError", "User ID is required.");
        isValid = false;
    }
    if (password === "") {
        showError("passwordError", "Password is required.");
        isValid = false;
    }
    if (confirmPassword === "") {
        showError("confirmPasswordError", "Please confirm your password.");
        isValid = false;
    } else if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match.");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success").textContent =
            "All fields are valid. Form submitted successfully!";
    }
});

// Put the message in the span next to the matching textbox.
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}
