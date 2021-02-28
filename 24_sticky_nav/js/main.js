const navbar = document.querySelector('.navbar');
const main = document.querySelector('main');
const navbarTop = navbar.offsetTop;

const fixNavbar = () => {
  if (window.scrollY >= navbarTop) {
    document.body.classList.add('navbar__fixed');
    // adding padding to the main element to fill the empty space
    // left because of position:fixed
    main.style.paddingTop = `${navbar.offsetHeight}px`;
  } else {
    document.body.classList.remove('navbar__fixed');
    main.style.paddingTop = '0';
  }
};
window.addEventListener('scroll', fixNavbar);
