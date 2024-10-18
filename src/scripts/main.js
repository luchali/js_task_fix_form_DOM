'use strict';

// write code here
const allInputs = document.querySelectorAll('form input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const inputName = input.getAttribute('name');
  const labelText = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.textContent = labelText;

  const inputId = input.getAttribute('id');

  label.setAttribute('for', inputId);
  input.setAttribute('placeholder', labelText);
  input.parentNode.insertBefore(label, input);
});
