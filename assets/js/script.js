const menuToggle = document.querySelector('.header__menu input');
const nav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});