const signupBtn = document.getElementById('signup-btn');
const signinBtn = document.getElementById('signin-btn');
const nameField = document.getElementById('name-field');
const formTitle = document.getElementById('form-title');

signinBtn.addEventListener('click', () => {
  nameField.style.maxHeight = '0';
  formTitle.innerHTML = 'Sign In';
  signupBtn.classList.add('disabled');
  signinBtn.classList.remove('disabled');
});

signupBtn.addEventListener('click', () => {
  nameField.style.maxHeight = '60px';
  formTitle.innerHTML = 'Sign Up';
  signupBtn.classList.remove('disabled');
  signinBtn.classList.add('disabled');
});
