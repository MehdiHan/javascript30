const hourHand = document.querySelector('.hour__hand');
const minuteHand = document.querySelector('.minute__hand');
const secondHand = document.querySelector('.second__hand');

const howTimeIsIt = () => {
  const date = Date.now();
  const today = new Date(date);
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
};
const timerId = setInterval(() => howTimeIsIt(), 1000);
