
function toggleMenu() {
            var menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }
        
document.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const maxScroll = 300; // Adjust the scroll distance for max opacity change
  const scrollPosition = window.scrollY;

  // Calculate opacity based on scroll position
  let opacity = 1 - (scrollPosition / maxScroll);
  if (opacity < 0.7) {
    opacity = 0.7; // Minimum opacity
  }

  header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
});        
// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    let options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No offset from the root's bounding box
        threshold: 0.3 // Trigger when 20% of the target is visible
    };
    
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, options);
// Target for programs section
    let programsTarget = document.querySelector('#programs.animate-on-scroll');
    if (programsTarget) {
        observer.observe(programsTarget);
    }
    // Target for team section with animate-on-scroll and slide-up classes
    let teamTarget = document.querySelector('#team.animate-on-scroll.slide-up');
    if (teamTarget) {
        observer.observe(teamTarget);

        // Observe the typewriter text for visibility
        let typewriterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('typewriter');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, options);

        let typewriterText = teamTarget.querySelector('.typewriter-text');
        if (typewriterText) {
            typewriterObserver.observe(typewriterText);
        }
    }
    // Target for contact us section with slide-left class
    let contactTarget = document.querySelector('#contact.animate-on-scroll.slide-left');
    if (contactTarget) {
        observer.observe(contactTarget);
    }
});


 
   
   
   

