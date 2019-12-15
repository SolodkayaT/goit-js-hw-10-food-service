import menuItems from './menu.json';
import itemsTamplates from './templates/menu-item.hbs';
import './js/theme';
import './css/style.css';

const refs = {
  foodMenu: document.querySelector('.js-menu'),
};
function buildFoodMenu(items) {
  const markup = items.map((item) => itemsTamplates(item)).join('');
  refs.foodMenu.insertAdjacentHTML('beforeend', markup);
}
buildFoodMenu(menuItems);
