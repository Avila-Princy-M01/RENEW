// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for the "Get Involved" button
const getInvolvedButton = document.querySelector('.cta-button');
getInvolvedButton.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

