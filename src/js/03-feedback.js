import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.message.addEventListener('input', throttle(onMessageInput, 500));

const LOCALE_STORAGE = 'feedback-form-state';
const localeItem = {};

// Form

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(LOCALE_STORAGE);
}

// Message

function onMessageInput(e) {
  localeItem[e.target.name] = e.target.value;
  localStorage.setItem(LOCALE_STORAGE, JSON.stringify(localeItem));
}

function userLocaleMessage() {
  try {
    const userMessageItem = JSON.parse(localStorage.getItem(LOCALE_STORAGE));
    if (userMessageItem) {
      refs.message.value = userMessageItem.message;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

userLocaleMessage();

// Email

function onEmailInput(e) {
  localeItem[e.target.name] = e.target.value;
  localStorage.setItem(LOCALE_STORAGE, JSON.stringify(localeItem));
}

function userlocaleEmail() {
  try {
    const userEmailItem = JSON.parse(localStorage.getItem(LOCALE_STORAGE));
    if (userEmailItem) {
      refs.email.value = userEmailItem.email;
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

userlocaleEmail();
