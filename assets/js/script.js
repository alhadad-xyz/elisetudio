// Hamburger Menu
const menuToggle = document.querySelector('.header__menu input');
const nav = document.querySelector('.header__nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

// Menu Active
const header = document.querySelector(".header__nav");
const btns = header.getElementsByClassName("header__link");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("header__active");
  current[0].className = current[0].className.replace(" header__active", "");
  this.className += " header__active";
  });
}
