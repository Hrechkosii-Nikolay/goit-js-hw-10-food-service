import './sass/main.scss';
import cardsMarkup from './template/menuCardMarkup.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');

const menuMarkup = cardsMarkup(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeBtnRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const carrentTheme = localStorage.getItem('theme');

bodyRef.classList.add(Theme.LIGHT);

themeBtnRef.addEventListener('change', onCliktChengeThemeBtn);

function onCliktChengeThemeBtn() {
  if (themeBtnRef.checked) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function saveCarrentTheme() {
  if (carrentTheme === Theme.DARK) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    themeBtnRef.setAttribute('checked', true);
  }
}
saveCarrentTheme();
