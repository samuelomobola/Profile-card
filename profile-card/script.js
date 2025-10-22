const userTime = document.querySelector('[data-testid="test-user-time"]');
if (userTime) {
  userTime.textContent = Date.now();
}


// form validation
const inputname = document.getElementById('inputname')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const successMessage = document.getElementById('successMessage')

// Get error <p> elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');



// submit eventlistner
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;


  // Clear old errors
  nameError.textContent = '';
  emailError.textContent = '';
  subjectError.textContent = '';
  messageError.textContent = '';



  // name validation
  if (inputname.value.trim() === '' || inputname.value === null) {
    nameError.textContent = "Name is required"
    isValid = false
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Enter a valid email (e.g. name@example.com).';
    isValid = false;
  }

  // Subject validation
  if (subject.value.trim() === '') {
    subjectError.textContent = 'Subject is required.';
    isValid = false;
  }

  // Message Validation
  if (message.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  } else if (message.value.trim().length <= 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }
  if (message.value.length >= 100) {
    messageError.textContent = "Message can't exceed 100 characters.";
    isValid = false;
  }

  // Show success message
  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset();
  }
})


