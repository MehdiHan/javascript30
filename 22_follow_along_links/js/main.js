console.log('Hello wolrd');

const links = document.querySelectorAll('a');
console.log(links);
const span = document.createElement('span');
span.classList.add('highlight');
document.body.append(span);

const highlightLink = function () {
  const linksCoords = this.getBoundingClientRect();
  console.log(linksCoords);
  span.style.width = `${linksCoords.width}px`;
  span.style.height = `${linksCoords.height}px`;
  span.style.transform = `translate(${linksCoords.left}px,${linksCoords.top}px)`;
};

links.forEach((link) => link.addEventListener('mouseenter', highlightLink));
