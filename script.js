document.addEventListener('DOMContentLoaded', () => {
    
    // --- FEATURE 1: Mobile Hamburger Menu Toggle ---
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            mobileMenu.classList.toggle('toggle-icon');
        });
    }

    // --- FEATURE 2: Booking Form Client-Side Validation ---
    const bookingForm = document.getElementById('bookingForm');
    const feedback = document.getElementById('formFeedback');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop default page refreshes

            // Grab inputs
            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('travelDate').value;

            // Simple validation flag evaluation
            let errorMessage = '';

            if (!name || !email || !destination || !date) {
                errorMessage = 'Error: Please fill out all required fields before confirming.';
            } else if (!validateEmail(email)) {
                errorMessage = 'Error: Please include a valid email structure (e.g., name@domain.com).';
            }

            // Display Feedback safely
            if (errorMessage) {
                feedback.textContent = errorMessage;
                feedback.style.backgroundColor = '#ffccd5';
                feedback.style.color = '#d90429';
                feedback.style.display = 'block';
            } else {
                feedback.textContent = `Thank you, ${name}! Your request to visit ${destination.toUpperCase()} on ${date} has been registered successfully.`;
                feedback.style.backgroundColor = '#d8f3dc';
                feedback.style.color = '#38b000';
                feedback.style.display = 'block';
                bookingForm.reset(); // clear form
            }
        });
    }

    // Email Pattern Validation Helper Function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
