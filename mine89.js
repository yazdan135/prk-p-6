document.addEventListener('DOMContentLoaded', function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault();

        // Validate the form
        if (validateForm()) {
            // If the form is valid, submit the data (you can customize this part)
            alert('Form submitted successfully!');
            resetForm();
        }
    }

    // Function to validate the form
    function validateForm() {
        var form = document.getElementById('contactForm');
        var isValid = true;

        // Validate each form field (add more conditions as needed)
        var nameInput = form.querySelector('#name');
        var emailInput = form.querySelector('#email');
        var messageInput = form.querySelector('#message');

        if (!nameInput.value.trim()) {
            isValid = false;
            alert('Please enter your name.');
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
            isValid = false;
            alert('Please enter a valid email address.');
        }

        if (!messageInput.value.trim()) {
            isValid = false;
            alert('Please enter your message.');
        }

        return isValid;
    }

    // Function to check if an email is valid
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to reset the form
    function resetForm() {
        var form = document.getElementById('contactForm');
        if (form) {
            form.reset();
        }
    }

    // Add event listener for form submission
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
});
