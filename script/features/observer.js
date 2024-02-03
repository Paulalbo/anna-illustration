async function observeColor(observerItem) {
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

async function observeProjects(observedProject) {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the observed element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add("project-active");
      } else {
        entry.target.classList.remove("project-active");
      }
    });
  },
  {
    rootMargin: "-50%",
  });

  observer.observe(observedProject);
}

async function observeSection(observedProject) {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the observed element is in view
      if (entry.isIntersecting) {
        entry.target.classList.add("section-active");
      } else {
        entry.target.classList.remove("section-active");
      }
    });
  },
  {
    rootMargin: "-50%",
  });

  observer.observe(observedProject);
}


export { observeColor, observeProjects, observeSection };


