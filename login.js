document.addEventListener("DOMContentLoaded", () => {
    // Select the login and signup forms
    const loginForm = document.querySelector(".login-form form");
    const signupForm = document.querySelector(".signup-form form");

    // Store credentials in memory (for this demo only)
    let userCredentials = null;

    // Signup form submission handler
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const name = signupForm.querySelector('input[placeholder="Enter your name"]').value.trim();
        const email = signupForm.querySelector('input[placeholder="Enter your email"]').value.trim();
        const password = signupForm.querySelector('input[placeholder="Enter your password"]').value.trim();

        // Validate fields
        if (!name || !email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        // Store credentials (in memory)
        userCredentials = { email, password };
        console.log("User Signed Up:", userCredentials);

        // Simulated success message
        alert("Signup Successful! You can now log in.");
    });

    // Login form submission handler
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        const email = loginForm.querySelector('input[placeholder="Enter your email"]').value.trim();
        const password = loginForm.querySelector('input[placeholder="Enter your password"]').value.trim();

        // Validate fields
        if (!email || !password) {
            alert("Please fill out all fields.");
            return;
        }

        // Check if credentials match
        if (userCredentials && email === userCredentials.email && password === userCredentials.password) {
            alert("Login Successful!");
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });

    // Flip toggle handler
    const flipCheckbox = document.getElementById("flip");
    flipCheckbox.addEventListener("change", () => {
        if (flipCheckbox.checked) {
            console.log("Switched to Signup Form");
        } else {
            console.log("Switched to Login Form");
        }
    });
});
