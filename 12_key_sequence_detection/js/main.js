const sequenceKeys = [];
const secretKey = 'emilie';
const unicorn = document.querySelector('div');
console.dir(unicorn);
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
