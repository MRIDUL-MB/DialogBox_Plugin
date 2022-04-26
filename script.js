//creating a box
var formBox = document.createElement('div');
formBox.className = 'form-box';
document.body.appendChild(formBox);

//svg
var svg = document.createElement('div');
svg.className = 'icon-svg';
formBox.appendChild(svg);

//creating modal
var modal = document.createElement('div');
modal.className = 'form-modal';
document.body.appendChild(modal);

//creating a form
var form = document.createElement('form');
modal.appendChild(form);
form.className = 'form-style';

//creating form elements

//firstName
var firstName = document.createElement('input');
firstName.type = 'text';
firstName.placeholder = 'Enter Your First Name';
firstName.setAttribute('required', '');
firstName.setAttribute('name', 'firstName');
form.appendChild(firstName);
//firstName

//lastName
var lastName = document.createElement('input');
lastName.type = 'text';
lastName.placeholder = 'Enter Your Last Name';
lastName.setAttribute('name', 'lastName');
lastName.setAttribute('required', '');
form.appendChild(lastName);
//lastName

//Email
var email = document.createElement('input');
email.type = 'email';
email.placeholder = 'Enter Your Email';
email.setAttribute('name', 'email');
email.setAttribute('required', '');
form.appendChild(email);
//Email

//submitButton
var submitButton = document.createElement('input');
submitButton.type = 'Submit';
form.appendChild(submitButton);
//submitButton

// open modal
formBox.addEventListener('click', () => {
  if (modal.style.display === 'unset') modal.style.display = 'none';
  else modal.style.display = 'unset';
});

//close modal
modal.addEventListener('click', (e) => {
  if (e.target.className === 'form-modal') modal.style.display = 'none';
});

//form submit
form.onsubmit = (e) => {
  e.preventDefault();
  console.log('First Name is ', e.target.firstName.value);
  console.log('Last Name is ', e.target.lastName.value);
  console.log('Email is ', e.target.email.value);
};
