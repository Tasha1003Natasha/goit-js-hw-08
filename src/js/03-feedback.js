import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector(`.feedback-form`);

saveForm();

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  const data = {email:email.value,message:message.value};
  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
});

formRef.addEventListener('input', throttle(inputForm, 500));

function inputForm(event) {
  let localFilter = localStorage.getItem(STORAGE_KEY);
  localFilter = localFilter ? JSON.parse(localFilter) : {};
  localFilter[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localFilter));
}

function saveForm() {
  let localFilter = localStorage.getItem(STORAGE_KEY);
  // console.log(localFilter);
  if (localFilter) {
    localFilter = JSON.parse(localFilter);
    console.log(localFilter);
    formRef.email.value = localFilter.email
    formRef.message.value = localFilter.message
 
  }
}