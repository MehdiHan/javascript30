const header = document.querySelector('h1');

/**
 * Take a mouve move event a transform text-shadow and skew properties
 * @param {mousemove} event mouse move event
 */
const mouseMoveEffect = (event) => {
  header.style.textShadow = `${event.x / 100}px ${
    event.y / 100
  }px 2px rgba(0, 0, 0, 0.2)`;
  header.style.transform = `skew(${event.x / 100}deg,${event.y / 100}deg)`;
};

window.addEventListener('mousemove', mouseMoveEffect);
