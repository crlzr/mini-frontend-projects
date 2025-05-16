const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkRequired(inputArray) {

    // biome-ignore lint/complexity/useArrowFunction: <explanation>
    // biome-ignore lint/complexity/noForEach: <explanation>
        inputArray.forEach(function(input){
        if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Get field name

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
// biome-ignore lint/complexity/useArrowFunction: <explanation>
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);


    // if (username.value === '') {
    //     showError(username, 'Username cannot be blank');
    // } else {
    //     showSuccess(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'Email cannot be blank');
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // } else {
    //     showSuccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password cannot be blank');
    // } else if (password.value.length < 6) {
    //     showError(password, 'Password must be at least 6 characters');
    // } else {
    //     showSuccess(password);
    // }
    // if (password2.value === '') {
    //     showError(password2, 'Password cannot be blank');
    // } else if (password2.value !== password.value) {
    //     showError(password2, 'Passwords do not match');
    // } else {
    //     showSuccess(password2);
    // }
});