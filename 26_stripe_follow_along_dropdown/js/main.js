const nav = document.querySelector('.navbar');
const navLinks = document.querySelectorAll(
  '.navbar__links li > a:not(:last-child)'
);
const background = document.querySelector('.navbar__dropdown');

const handleEnter = function () {
  this.parentNode.classList.add('links__enter');
  setTimeout(() => {
    this.parentNode.classList.add('active');
  }, 150);
  background.classList.add('open');

  const dropdown = this.parentNode.querySelector('.dropdown');
  const dropdownRect = dropdown.getBoundingClientRect();
  background.style.width = `${dropdownRect.width}px`;
  background.style.height = `${dropdownRect.height}px`;
  background.style.transform = `translate(${dropdownRect.left}px,${dropdownRect.top}px)`;
  console.dir(dropdownRect);
};
const handleLeave = function () {
  this.parentNode.classList.remove('links__enter');
  setTimeout(() => {
    this.parentNode.classList.remove('active');
  }, 150);
  background.classList.remove('open');
};
navLinks.forEach((link) => link.addEventListener('mouseenter', handleEnter));
navLinks.forEach((link) => link.addEventListener('mouseleave', handleLeave));
