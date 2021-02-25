const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"],[name="text"]');
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
const readSentence = () => {
  const voices = speechSynthesis.getVoices();
  const controls = Array.from(options);
  const rateValue = controls[0].value;
  const pitchValue = controls[1].value;
  const textValue = controls[2].value;
  const selectedOption = voicesDropdown.selectedOptions[0];
  voices.forEach((voice) => {
    if (voice.name === selectedOption.dataset.name) {
      message.voice = voice;
    }
  });

  message.rate = rateValue;
  message.pitch = pitchValue;
  message.text = textValue;

  speechSynthesis.speak(message);
};
speechSynthesis.onvoiceschanged = populateVoiceList;
speakButton.addEventListener('click', readSentence);
