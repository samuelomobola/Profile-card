document.querySelector('[data-testid="test-user-time"]').textContent = Date.now();

// form validation
const inputname = document.getElementById('inputname')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const successMessage = document.getElementById('successMessage')

// submit eventlistner
form.addEventListener('submit', (e) => {

  let messages = []
  if (inputname.value === '' || inputname.value === null) {
    messages.push("Name is required")
  }

  if (message.value.length <= 9) {
    messages.push("Message must be at least 10 Characters")
  }
  if (message.value.length >= 100) {
    messages.push("Message can't exceed 100 Characters")
  }
  e.preventDefault()
  errorElement.innerText = messages.join(", ")
})