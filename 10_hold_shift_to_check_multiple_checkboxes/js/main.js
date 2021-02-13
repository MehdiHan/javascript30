const checkboxes = document.querySelectorAll('[type="checkbox"]');

let lastChecked;

const handleCheck = function (event) {
  let inBetween = false;

  if (event.shiftKey && this.checked) {
    // loop on over every single checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // flag variable
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});
