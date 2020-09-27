import data from '../menu.json';
import liTemplate from '../templates/menu.hbs';

const ul = document.querySelector('.js-menu');
let allLi = '';

data.forEach(item => (allLi += liTemplate(item)));
ul.insertAdjacentHTML('afterbegin', allLi);
