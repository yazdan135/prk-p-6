
    function toggleForm(formId) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById(formId).style.display = 'block';
    }
