
function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }
// Intersection Observer for animations
const teamSpans = document.querySelectorAll('.js-animate');
const contactHeading = document.querySelector('#contact h2');
const contactParagraphs = document.querySelectorAll('#contact p'); // Select both paragraphs

const options = {
  root: null, // Observe relative to viewport
  threshold: 0.5, // Adjust this value if needed (0 to 1)
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

// Observe all elements
teamSpans.forEach(span => observer.observe(span));
observer.observe(contactHeading);
contactParagraphs.forEach(paragraph => observer.observe(paragraph));

