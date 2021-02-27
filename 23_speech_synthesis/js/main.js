const voicesDropdown = document.querySelector('[name="voice"]');
const rate = document.querySelector('[name="rate"]');
const pitch = document.querySelector('[name="pitch"]');
const textarea = document.querySelector('[name="text"]');
const speakButton = document.getElementById('speak');
const stopButton = document.getElementById('stop');

const message = new SpeechSynthesisUtterance();

const createOptionElement = (voice, index) => {
  const option = document.createElement('option');
  option.value = `${index + 1}`;
  option.setAttribute('data-name', voice.name);
  option.textContent = voice.name;
  voicesDropdown.append(option);
};
const populateVoiceList = () => {
  const voices = speechSynthesis.getVoices();
  voices.forEach((voice, index) => {
    createOptionElement(voice, index);
  });
};
const speakSpeech = () => {
  const voices = speechSynthesis.getVoices();
  const selectedOption = voicesDropdown.selectedOptions[0];
  voices.forEach((voice) => {
    if (voice.name === selectedOption.dataset.name) {
      message.voice = voice;
    }
  });
  message.rate = rate.value;
  message.pitch = pitch.value;
  message.text = textarea.value;
  speechSynthesis.speak(message);
  if (event.type === 'change') {
    toggle();
  }
};
const toggle = () => {
  speechSynthesis.cancel();
  speechSynthesis.speak(message);
};
const updateRate = (event) => {
  message.rate = event.target.value;
  toggle();
};
const updatePitch = (event) => {
  message.pitch = event.target.value;
  toggle();
};
const pauseSpeech = () => {
  speechSynthesis.pause();
};

speechSynthesis.onvoiceschanged = populateVoiceList;

speakButton.addEventListener('click', speakSpeech);
stopButton.addEventListener('click', pauseSpeech);
voicesDropdown.addEventListener('change', speakSpeech);
rate.addEventListener('change', updateRate);
pitch.addEventListener('change', updatePitch);
