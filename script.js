
function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }
        
// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 // Adjust as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;

                // Add animate class based on section ID
                switch(sectionId) {
                    case 'hero':
                        entry.target.querySelector('.text-content').classList.add('fade-in');
                        break;
                    case 'About us':
                        entry.target.classList.add('fade-in');
                        break;
                    case 'programs':
                        entry.target.classList.add('animate-on-scroll', 'slide-right');
                        break;
                    case 'team':
                        entry.target.querySelector('.typewriter-text').classList.add('typewriter');
                        break;
                    default:
                        entry.target.classList.add('fade-in');
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each section with class .animate-on-scroll
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});
