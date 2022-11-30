// Header
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const navListItems = document.querySelectorAll('.nav__list-item');

const toggleActiveClass = () => {
  header.classList.toggle('active');
};

burger.addEventListener('click', toggleActiveClass);

navListItems.forEach((item) =>
  item.addEventListener('click', toggleActiveClass)
);
// End of Header
