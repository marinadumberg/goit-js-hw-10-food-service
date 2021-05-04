import menuTemplate from './templates/menu.hbs';
import menuList from './menu.json';

const menu = document.querySelector(".js-menu");
function menuTemplateCards(menuList) {
    return menuList.map(menuTemplate).join("");
}
menu.insertAdjacentHTML('afterbegin', menuTemplateCards(menuList));


//create theme swich

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwich = document.querySelector('.theme-switch__toggle');
console.log(themeSwich);
themeSwich.addEventListener('click,onThemeSwich');

const savedTheme = localStorage.getItem('theme');
const themeOn = JSON.parse(localStorage.getItem('swiched'));
themeSwich.cheked = themeOn;

function onThemeSwich(e) {
    document.body.classList.toggle(Theme.LIGHT);
    document.body.classList.toggle(Theme.DARK);
    const switchOn = e.target.cheked
    
    localStorage.setItem('swiched', switchOn)
    if (document.body.classList.contains(Theme.LIGHT)) {
        localStorage.setItem('theme', Theme.LIGHT);
    }
    if (document.body.classList.contains(Theme.DARK)) {
        localStorage.setItem('theme', Theme.DARK);
    }
};
function chosenTheme() {
  if (savedTheme) { document.body.classList.add(savedTheme) }
  else{document.body.classList.add(Theme.LIGHT)}
};
chosenTheme();

