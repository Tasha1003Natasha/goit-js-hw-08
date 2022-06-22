import throttle from 'lodash.throttle';


// Змінна  з ключем для сховища буде рядок "feedback-form-state".
const STORAGE_KEY = 'feedback-form-state';

// Доступ до форми
const formRef = document.querySelector(`.feedback-form`);

saveForm();

//// Слухач на форму з подією  submit +  Функція на клік по кнопці submit
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
// Під час сабміту форми очищуйється сховище і поля форми
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
});


// Слухач на форму з подією  input +  сховище оновлювлюється не частіше, ніж раз на 500 мілісекунд throttle
formRef.addEventListener('input', throttle(inputForm, 500));

// Функція, яка відстежує на формі подію input, 
// виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями. 
function inputForm(event) {
  let localFilter = localStorage.getItem(STORAGE_KEY);
  localFilter = localFilter ? JSON.parse(localFilter) : {};
  localFilter[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(localFilter));
}


// Функція яка повертає зі сховища значення які вказує користувач
// / і щоразу записує у локальне сховище об'єкт з полями email і message 
function saveForm() {
  let localFilter = localStorage.getItem(STORAGE_KEY);
  if (localFilter) {
    localFilter = JSON.parse(localFilter);
    console.log(localFilter);
    formRef.email.value = localFilter.email;
    formRef.message.value = localFilter.message;
 
  }
}