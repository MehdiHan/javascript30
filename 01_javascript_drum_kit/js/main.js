window.addEventListener('keydown', (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop the function
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

const removeTransition = function (event) {
  this.classList.remove('playing');
};
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});
