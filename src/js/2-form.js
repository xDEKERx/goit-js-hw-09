const feedbackForm = document.querySelector('.feedback-form');

let formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

checkInputStart();

feedbackForm.addEventListener('input', fieldUserInfo);
feedbackForm.addEventListener('submit', sendUserInfo);

function fieldUserInfo(event) {
  formData[event.target.name] = event.target.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function sendUserInfo(event) {
  event.preventDefault();

  const email = formData.email.trim();
  const message = formData.message.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  feedbackForm.reset();
  localStorage.removeItem('feedback-form-state');

  formData = { email: '', message: '' };
}

function checkInputStart() {
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}