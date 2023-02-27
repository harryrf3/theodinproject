// Providing meaningful error messages 

const nameInput = document.querySelector('[name="name"]')

nameInput.addEventListener('invalid', () => {
  nameInput.setCustomValidity('Please enter your name.')
})

// Validate field when user leaves field
document.addEventListener('blur', function (event) {
  // Validate the field
  const isValid = event.target.validity.valid;
  const message = event.target.validationMessage;
  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

  if (connectedValidation && message && !isValid) {
    connectedValidation.innerText = message;
  } else {
    connectedValidation.innerText = '';
  }
}, true);