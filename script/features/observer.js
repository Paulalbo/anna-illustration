async function observer(observerItem) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the observed element is in view
      if (entry.isIntersecting) {
        // Change the background color of the body to #1e1e1e
        document.body.style.backgroundColor = '#1e1e1e';
      } else {
        // Change the background color back to its original color (if needed)
        document.body.style.backgroundColor = ''; // Set to the original color or any other color you want
      }
    });
  },
  {
    rootMargin: "-50%",
  });

  observer.observe(observerItem);
}

export { observer };
