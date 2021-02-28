console.log('Hello');

const divs = document.querySelectorAll('div');

function logText(event) {
  event.stopPropagation();
  console.log(this);
}

divs.forEach((div) => {
  div.addEventListener('click', logText, {
    capture: false,
    once: true,
  });
});
