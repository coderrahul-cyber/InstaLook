const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit");

function checkInputs() {
    if (usernameInput.value && emailInput.value && nameInput.value && passwordInput.value) {
        submitButton.removeAttribute('disabled');
        submitButton.style.backgroundColor = "";
        submitButton.style.cursor ="pointer" ;
    } else {
        submitButton.setAttribute('disabled', 'true');
        submitButton.style.backgroundColor = "gray";
        submitButton.style.cursor ="not-allowed" ;
    }
}

// Add event listeners to input fields
usernameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
nameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

// Call checkInputs initially
checkInputs();
