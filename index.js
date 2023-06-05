const mobileMenuBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

mobileMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const companyInput = document.querySelector("#company");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

// Form Validation Functions
function validateName() {
  if (checkIfEmpty(nameInput)) return;
  if (!checkIfOnlyLetters(nameInput)) return;
  return true;
}

function validateCompany() {
  if (checkIfEmpty(companyInput)) return;
  return true;
}

function validateEmail() {
  if (checkIfEmpty(emailInput)) return;
  if (!checkIfValidEmail(emailInput)) return;
  return true;
}

function validatePhone() {
  if (checkIfEmpty(phoneInput)) return;
  if (!checkIfValidPhone(phoneInput)) return;
  return true;
}

function validateMessage() {
  if (checkIfEmpty(messageInput)) return;
  return true;
}

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    setValid(field);
    return false;
  }
}

function isEmpty(value) {
  if (value === "") return true;
  return false;
}

function setInvalid(field, message) {
  field.classList.add("invalid");
  const errorMessage = field.nextElementSibling;
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function setValid(field) {
  field.classList.remove("invalid");
  field.classList.add("valid");
  const errorMessage = field.nextElementSibling;
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
}

function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(
      field,
      `${field.name} must contain only letters`
    );
    return false;
  }
}

function checkIfValidEmail(field) {
  if (/^\S+@\S+\.\S+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, "Invalid Email");
    return false;
  }
}

function checkIfValidPhone(field) {
  if (/^\d{10}$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(
      field,
      `${field.name} must contain exactly 10 digits`
    );
    return false;
  }
}

// Form Submission Handler
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    validateName() &&
    validateCompany() &&
    validateEmail() &&
    validatePhone() &&
    validateMessage()
  ) {
    const formData = {
      name: nameInput.value.trim(),
      company: companyInput.value.trim(),
      email: emailInput.value.trim(),
      phone: phoneInput.value.trim(),
      message: messageInput.value.trim(),
    };

    console.log(formData);
    contactForm.reset();
  }
});