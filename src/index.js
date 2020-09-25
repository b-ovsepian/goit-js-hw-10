import './styles.css';

import data from './menu.json';

const bodyRef = document.querySelector('body');
const checkboxRef = document.getElementById('theme-switch-toggle');
const ul = document.querySelector('.js-menu');
let allLi = '';

data.forEach(e => {
  const button = document.createElement('button');
  button.classList.add('card__button');
  button.classList.add('button');
  button.innerHTML = `<i class="material-icons button__icon"> shopping_cart </i>`;

  const ingredientsUl = document.createElement('ul');
  ingredientsUl.classList.add('tag-list');
  e.ingredients.forEach(item => {
    ingredientsUl.insertAdjacentHTML(
      'afterbegin',
      `<li class="tag-list__item">${item}</li>`,
    );
  });

  const descriptionP = document.createElement('p');
  descriptionP.classList.add('card__descr');
  descriptionP.textContent = e.description;

  const priceP = document.createElement('p');
  priceP.classList.add('card__price');
  priceP.insertAdjacentHTML(
    'afterbegin',
    `<i class="material-icons"> monetization_on </i>`,
  );
  priceP.insertAdjacentHTML('beforeend', e.price);

  const h2 = document.createElement('h2');
  h2.classList.add('card__name');
  h2.textContent = e.name;

  const div = document.createElement('div');
  div.classList.add('card__content');

  const img = document.createElement('img');
  img.setAttribute('src', e.image);
  img.setAttribute('alt', e.name);
  img.classList.add('card__image');

  const article = document.createElement('article');
  article.classList.add('card');

  const liItem = document.createElement('li');
  liItem.classList.add('menu__item');

  liItem.appendChild(article);
  article.appendChild(img);
  article.appendChild(div);
  article.appendChild(button);
  div.appendChild(h2);
  div.appendChild(priceP);
  div.appendChild(descriptionP);
  div.appendChild(ingredientsUl);
  allLi += liItem.innerHTML;
});

ul.insertAdjacentHTML('afterbegin', allLi);

checkboxRef.addEventListener('change', function (e) {
  localStorage.setItem('theme', e.target.checked);
  checkboxRef.checked ? onDarkTheme() : onLightTheme();
});

checkboxRef.checked = localStorage.getItem('theme') === 'true' ? true : false;

function onDarkTheme() {
  bodyRef.classList.remove('light-theme');
  bodyRef.classList.add('dark-theme');
}

function onLightTheme() {
  bodyRef.classList.remove('dark-theme');
  bodyRef.classList.add('light-theme');
}

checkboxRef.checked ? onDarkTheme() : onLightTheme();
