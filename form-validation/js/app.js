const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

// ERROR ELEMENTS
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

// VALIDATION FUNCTIONS
function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("error-input");
    return false;
  }
  nameError.textContent = "";
  nameInput.classList.remove("error-input");
  nameInput.classList.add("success");
  return true;
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    emailInput.classList.add("error-input");
    return false;
  }
  emailError.textContent = "";
  emailInput.classList.remove("error-input");
  emailInput.classList.add("success");
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    passwordInput.classList.add("error-input");
    return false;
  }
  passwordError.textContent = "";
  passwordInput.classList.remove("error-input");
  passwordInput.classList.add("success");
  return true;
}

function validateConfirmPassword() {
  if (confirmInput.value !== passwordInput.value) {
    confirmError.textContent = "Passwords do not match";
    confirmInput.classList.add("error-input");
    return false;
  }
  confirmError.textContent = "";
  confirmInput.classList.remove("error-input");
  confirmInput.classList.add("success");
  return true;
}

// FORM SUBMIT
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  if (isNameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    alert("Form submitted successfully!");
    form.reset();
    document.querySelectorAll("input").forEach(input => input.classList.remove("success"));
  }
});

// REAL-TIME VALIDATION
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
confirmInput.addEventListener("blur", validateConfirmPassword);