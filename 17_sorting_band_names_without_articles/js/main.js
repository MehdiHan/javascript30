const itemContainer = document.querySelector('.bands');
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];
const strip = (bandName) => {
  const regex = /^The\s|An\s|A\s/gi;
  return bandName.replace(regex, '').trim();
};

const sortedBands = bands.sort((a, b) => {
  let firstElement = strip(a);
  let secondElement = strip(b);
  return firstElement > secondElement ? 1 : -1;
});

sortedBands.forEach((band) => {
  const itemList = document.createElement('li');

  itemList.classList.add('bands__item');
  itemList.textContent = band;

  itemContainer.append(itemList);
});
