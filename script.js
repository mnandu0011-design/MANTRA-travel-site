// =============================
// Mantra Travel Website JS
// =============================

// Contact Form Validation

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const destination = document.getElementById("destination").value;
        const message = document.getElementById("message").value.trim();

        // Empty field validation
        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            destination === "" ||
            message === ""
        ) {
            alert("Please fill in all the fields.");
            return;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone number validation
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        alert("Thank you! Your travel enquiry has been submitted successfully.");

        form.reset();

    });

}

// Welcome message
window.onload = function () {
    console.log("Welcome to Mantra Travel Website!");
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
