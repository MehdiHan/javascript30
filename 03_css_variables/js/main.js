const inputs = document.querySelectorAll('.controls input');
const handleUpdate = function () {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
};
// we'll prefer change instead of input
inputs.forEach((input) => {
  input.addEventListener('change', handleUpdate);
});
