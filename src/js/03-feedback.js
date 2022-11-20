import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});
const formData = {};
fillForm();
function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function onFormInput(e) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function fillForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY, formData);
  if (savedMessage) {
    console.log(JSON.parse(savedMessage));
    refs.form.value = savedMessage;
  }
}
