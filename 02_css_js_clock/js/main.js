const hourHand = document.querySelector('.hour__hand');
const minuteHand = document.querySelector('.minute__hand');
const secondHand = document.querySelector('.second__hand');
const timer = document.querySelector('.timer');

// timer div
const timerContainer = document.createElement('p');
const hourContainer = document.createElement('span');
const minuteContainer = document.createElement('span');
const secondContainer = document.createElement('span');

timerContainer.append(hourContainer);
timerContainer.append(minuteContainer);
timerContainer.append(secondContainer);
timer.append(timerContainer);

const transformHand = (hours, minutes, seconds) => {
  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
};

const displayTimer = (hours, minutes, seconds) => {
  hourContainer.textContent = `${hours} : `;
  minuteContainer.textContent = `${minutes} : `;
  secondContainer.textContent = seconds < 10 ? `0${seconds}` : seconds;
};

const howTimeIsIt = () => {
  const date = Date.now();
  const today = new Date(date);
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  transformHand(hours, minutes, seconds);
  displayTimer(hours, minutes, seconds);
};
const timerId = setInterval(() => howTimeIsIt(), 1000);

console.log(hours);
