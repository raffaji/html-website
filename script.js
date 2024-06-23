
function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }
        
// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    let options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No offset from the root's bounding box
        threshold: 0.2 // Trigger when 10% of the target is visible
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, options);

    let target = document.querySelector('#programs.animate-on-scroll');
    if (target) {
        observer.observe(target);
    }
});


