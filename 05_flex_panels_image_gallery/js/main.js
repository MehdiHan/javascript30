const panels = document.querySelectorAll('.panel');
const toggleOpen = function () {
  this.classList.toggle('open');
};
const toggleActive = function () {
  this.classList.toggle('open__active');
};
panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
