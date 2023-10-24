import throttle from 'lodash.throttle';

const feedback = document.querySelector('.feedback-form');
const KEY_OBJECT = 'feedback-form-state';
let objectForm = {};

feedback.addEventListener('input', throttle(handlerInput, 500));

feedback.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
    objectForm = JSON.parse(localStorage.getItem(KEY_OBJECT)) || {};

    objectForm[event.target.name] = event.target.value;

  localStorage.setItem(KEY_OBJECT, JSON.stringify(objectForm));
}

function handlerSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value || !event.target.message.value) {
    alert('Заполните поля формы!');
    return;
  }

  event.target.reset();
  console.log(objectForm);
  localStorage.removeItem(KEY_OBJECT);
}
