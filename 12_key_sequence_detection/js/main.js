const sequenceKeys = [];
const secretKey = 'émilie';
const unicorn = document.querySelector('div');
window.addEventListener('keyup', (event) => {
  sequenceKeys.push(event.key);
  sequenceKeys.splice(
    -secretKey.length - 1,
    sequenceKeys.length - secretKey.length
  );
  if (sequenceKeys.join('').includes(secretKey)) {
    console.log('I Love You');
    cornify_add();
  }
});
