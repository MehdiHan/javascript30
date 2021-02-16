window.addEventListener(
  'load',
  () => {
    createObserver();
  },
  false
);

const createObserver = () => {
  const images = document.querySelectorAll('.image');
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  let observer = new IntersectionObserver(handleIntersect, options);

  images.forEach((image) => {
    observer.observe(image);
  });
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateX(0%)';
    }
  });
};
