const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');

context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (event) => {
  if (!isDrawing) return; // stop the functions when mouse is not down;
  context.strokeStyle = `hsl(${hue},100%,50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();

  // lastX and last Y value are set on 0
  // when we are drawing the line comes from 0,0 to event.offsetX, event.offsetY
  // we need to update values of lastX and lastY
  [lastX, lastY] = [event.offsetX, event.offsetY];

  hue >= 360 ? (hue = 0) : hue++;

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    // flip the direction
    direction = !direction;
  }

  direction ? context.lineWidth++ : context.lineWidth--;
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  // when we stop the function after mouseup and we mouse down again
  // a line will appear from the last coordonate to the new one.
  // we need to update vales of lastX and lastY agains
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', (event) => (isDrawing = false));
canvas.addEventListener('mouseout', (event) => (isDrawing = false));
