import css from "./css/style.css";
import menu from "./menu.json";
import template from './template.hbs';
const elem = template(menu);
const checkbox = document.getElementById('theme-switch-toggle');
const body = document.querySelector("body");
 const menuList = document.querySelector('.js-menu');

menuList.insertAdjacentHTML('afterbegin', elem);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// localStorage.setItem('theme', '')
// body.classList.add(Theme.DARK);
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    localStorage.setItem('theme', ' ');
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
  }
});

if (localStorage.getItem('theme')) {
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
};