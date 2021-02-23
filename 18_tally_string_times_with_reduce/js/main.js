const items = document.querySelectorAll('[data-time]');

const displayItems = (items) => {
  items.forEach((item, index) => {
    let infosContainer = document.createElement('div');
    let infosTitle = document.createElement('h2');
    let infosDuration = document.createElement('span');
    let condition = index + 1 < 10 ? `0${index + 1}` : index + 1;

    infosContainer.classList.add('videos__title');

    infosTitle.textContent = `Lorem Ipsum Episode ${condition}`;
    infosDuration.textContent = item.dataset.time;

    infosContainer.append(infosTitle);
    infosContainer.append(infosDuration);
    item.append(infosContainer);
  });
};

const calculateTotalDuration = (items) => {
  const timeCode = [];

  items.forEach((item) => {
    let duration = item.dataset.time;
    let cursor = duration.search(':');
    let minutes = Number(duration.substr(0, cursor));
    let seconds = Number(duration.substr(cursor + 1, duration.length));

    timeCode.push(minutes * 60 + seconds);
  });

  let totalSeconds = timeCode.reduce((prev, duration) => {
    return prev + duration;
  }, 0);

  let secondsLeft = totalSeconds;

  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, minutes, secondsLeft);
};

displayItems(items);
calculateTotalDuration(items);
