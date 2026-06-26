// Feature 1: Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Feature 2: Contact Form Fields Checker Functionality
function validateForm(event) {
    event.preventDefault(); 
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const packageSelect = document.getElementById('packageSelect').value;
    const errorBox = document.getElementById('error-message');
    
    let errorMsg = "";
    
    if (fullName === "") {
        errorMsg += "Full Name is required. <br>";
    }
    
    if (email === "") {
        errorMsg += "Email address is required. <br>";
    } else if (!validateEmail(email)) {
        errorMsg += "Please enter a valid structure email address. <br>";
    }
    
    if (packageSelect === "") {
        errorMsg += "Please choose a travel package destination. <br>";
    }
    
    if (errorMsg !== "") {
        errorBox.innerHTML = errorMsg;
        errorBox.style.display = "block";
        return false;
    } else {
        errorBox.style.display = "none";
        alert(`Thank you, ${fullName}! Your travel booking request has been successfully processed.`);
        document.getElementById('bookingForm').reset();
        return true;
    }
}

// Check Email Inputs Pattern Matching
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}