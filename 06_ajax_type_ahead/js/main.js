const URL =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.search');
const suggestList = document.querySelector('.suggestions');

/**
 * Call the data from the URL and push it in an empty array
 */
const getCities = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  cities.push(...json);
};

/**
 *
 * @param {string} wordToMatch string letters/words used to search
 * @param {array} cities array of cities
 */
const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

/**
 * Collect the input value and use it to display list of matched terms
 */
const displayMatches = function () {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      return `<li><span class='name'>${cityName},${stateName}</span><span class='population'>${place.population}</span></li>`;
    })
    .join('');
  this.value !== ''
    ? (suggestList.innerHTML = html)
    : (suggestList.innerHTML = '');
};

searchInput.addEventListener('input', displayMatches);
getCities();
