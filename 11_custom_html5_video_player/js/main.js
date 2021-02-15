const moviePlayer = document.getElementById('moviePlayer');
const playButton = document.querySelector('.player__button--playpause');
const volumeButton = document.querySelector('[name="volume"]');
const progressBar = document.querySelector('.player__progress');
const progressTimeline = document.querySelector('.player__progress--timeline');
const skipButtons = document.querySelectorAll('[data-skip]');
playButton.textContent = '▶';
progressTimeline.style.width = '0%';

const switchPlay = () => {
  moviePlayer.paused === true
    ? (playButton.textContent = '❚❚')
    : (playButton.textContent = '▶');
  moviePlayer.paused === true ? moviePlayer.play() : moviePlayer.pause();
};

const manageVolume = (event) => {
  moviePlayer.volume = event.target.value;
};
const handleProgress = () => {
  progressTimeline.style.width = `${
    (moviePlayer.currentTime * 100) / moviePlayer.duration
  }%`;
};

const scrub = (event) => {
  const scrubTime =
    (event.offsetX / progressBar.offsetWidth) * moviePlayer.duration;
  moviePlayer.currentTime = scrubTime;
};

moviePlayer.addEventListener('timeupdate', handleProgress);
moviePlayer.addEventListener('click', switchPlay);
playButton.addEventListener('click', switchPlay);
volumeButton.addEventListener('change', manageVolume);
skipButtons.forEach((skipButton) => {
  skipButton.addEventListener('click', (event) => {
    let skipTime = event.target.dataset.skip;
    moviePlayer.currentTime += parseInt(skipTime);
  });
});
progressBar.addEventListener('click', scrub);
