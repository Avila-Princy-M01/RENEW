// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Sticky Header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Testimonial Slider
const track = document.querySelector('.testimonials-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (index) => {
    track.style.transform = 'translateX(-' + slideWidth * index + 'px)';
    currentIndex = index;
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
});

// Set up auto-rotation for testimonials
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
}, 5000);

// Counter Animation
const counters = document.querySelectorAll('.count');

const startCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / 100;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(startCounters, 30);
        } else {
            counter.innerText = target;
        }
    });
};

// Start counters when they're visible in viewport
const statsSection = document.querySelector('.stats');

const checkIfInView = () => {
    const bounds = statsSection.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        startCounters();
        window.removeEventListener('scroll', checkIfInView);
    }
};

window.addEventListener('scroll', checkIfInView);

// Modal for quick join
const modal = document.getElementById('joinModal');
const openModalButtons = document.querySelectorAll('.btn-outline');
const closeModal = document.querySelector('.modal-close');

openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Form Submission - Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        
        // You'd normally send this data to your backend
        // For now, just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        
        // In a real implementation, you'd send the data to your email:
        // data.recipient = "avilaprincym@gmail.com";
        // fetch('your-backend-endpoint', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 'Content-Type': 'application/json' }
        // });
    });
}

// Form Submission - Quick Join Form
const quickJoinForm = document.getElementById('quickJoinForm');

if (quickJoinForm) {
    quickJoinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        
        // Add recipient email
        data.recipient = "avilaprincym@gmail.com";
        
        // You'd normally send this data to your backend
        alert('Thank you for your interest in Renew! We will contact you soon.');
        this.reset();
        modal.classList.remove('active');
        
        // In a real implementation, you'd send the data to your email
    });
}

// Form Submission - Full Join Form
const fullJoinForm = document.getElementById('fullJoinForm');

if (fullJoinForm) {
    fullJoinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        
        // Add recipient email
        data.recipient = "avilaprincym@gmail.com";
        
        // You'd normally send this data to your backend
        alert('Thank you for your application! We will review it and contact you soon.');
        this.reset();
        
        // In a real implementation, you'd send the data to your email
    });
}

// Gallery Image Popup
// In a real implementation, you'd add lightbox functionality here
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Simple alert for now - in a real implementation you'd open a lightbox
        alert('In a complete implementation, this would open a lightbox with the full-size image.');
    });
});

// Enhanced JavaScript for complete website functionality

// Menu Toggle
const menuToggle2 = document.querySelector('.menu-toggle');
const navList2 = document.querySelector('.nav-list');

menuToggle2.addEventListener('click', () => {
    navList2.classList.toggle('active');
});

// Sticky Header
const header2 = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header2.classList.add('scrolled');
    } else {
        header2.classList.remove('scrolled');
    }
});

// Testimonial Slider
const track2 = document.querySelector('.testimonials-track');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.next-btn');
const prevButton2 = document.querySelector('.prev-btn');
const slideWidth2 = slides2[0].getBoundingClientRect().width;
let currentIndex2 = 0;

// Arrange slides next to each other
const setSlidePosition2 = (slide, index) => {
    slide.style.left = slideWidth2 * index + 'px';
};

slides2.forEach(setSlidePosition2);

const moveToSlide2 = (index) => {
    track2.style.transform = 'translateX(-' + slideWidth2 * index + 'px)';
    currentIndex2 = index;
};

nextButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    moveToSlide2(currentIndex2);
});

prevButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
    moveToSlide2(currentIndex2);
});

// Set up auto-rotation for testimonials
setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    moveToSlide2(currentIndex2);
}, 5000);

// Counter Animation
const counters2 = document.querySelectorAll('.count');

const startCounters2 = () => {
    counters2.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / 100;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(startCounters2, 30);
        } else {
            counter.innerText = target;
        }
    });
};

// Start counters when they're visible in viewport
const statsSection2 = document.querySelector('.stats');

const checkIfInView2 = () => {
    const bounds = statsSection2.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        startCounters2();
        window.removeEventListener('scroll', checkIfInView2);
    }
};

window.addEventListener('scroll', checkIfInView2);

// Project details modal
const projectDetailsModal = document.createElement('div');
projectDetailsModal.className = 'modal project-details-modal';
projectDetailsModal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title" id="projectTitle">Project Title</h3>
            <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
            <div class="project-details-content">
                <div class="project-details-image">
                    <img id="projectImage" src="" alt="Project Image">
                </div>
                <div class="project-details-info">
                    <h4>Overview</h4>
                    <p id="projectDescription">Project description goes here.</p>
                    <div class="project-stats">
                        <div class="project-stat">
                            <h5>Implementation Date</h5>
                            <p id="projectDate">January 2023</p>
                        </div>
                        <div class="project-stat">
                            <h5>Completion Status</h5>
                            <p id="projectStatus">Completed</p>
                        </div>
                        <div class="project-stat">
                            <h5>Impact</h5>
                            <p id="projectImpact">200+ homes</p>
                        </div>
                    </div>
                    <h4>Key Features</h4>
                    <ul id="projectFeatures">
                        <!-- Features will be inserted dynamically -->
                    </ul>
                    <h4>Results</h4>
                    <p id="projectResults">Results description goes here.</p>
                </div>
            </div>
        </div>
    </div>
`;
document.body.appendChild(projectDetailsModal);

// Project Details Data
const projectData = {
    "sadashivnagar-door-numbering": {
        title: "Sadashivnagar Door Numbering",
        image: "/api/placeholder/800/500",
        description: "A comprehensive initiative to standardize door numbering across Sadashivnagar to improve navigation, emergency response times, and delivery services.",
        date: "June 2023",
        status: "Completed",
        impact: "200+ homes standardized",
        features: [
            "Custom-designed number plates with reflective material",
            "Logical sequential numbering system",
            "GPS integration for mapping services",
            "Digital directory for delivery services",
            "Weather-resistant materials for durability"
        ],
        results: "Since implementation, emergency response times have improved by 35%, delivery services report 28% faster delivery times, and resident satisfaction has increased to 98%. The project has become a model for other neighborhoods across Bangalore."
    },
    "integrated-security-system": {
        title: "Integrated Security System",
        image: "/api/placeholder/800/500",
        description: "A neighborhood-wide security network with centralized monitoring, covering 10 streets in Sadashivnagar to enhance safety and reduce crime.",
        date: "September 2023",
        status: "Completed",
        impact: "10 streets covered with 75 cameras",
        features: [
            "HD CCTV coverage at strategic locations",
            "24/7 centralized monitoring station",
            "Mobile app for residents to access their building cameras",
            "Motion detection with smart alerts",
            "Two-way audio communication at entrance points",
            "Emergency response integration"
        ],
        results: "The integrated security system has resulted in a 45% reduction in reported theft cases, 30% faster response to security incidents, and 89% of residents reporting increased feelings of safety. The system has been recognized by local police as a model for community security."
    },
    "community-rainwater-harvesting": {
        title: "Community Rainwater Harvesting",
        image: "/api/placeholder/800/500",
        description: "A sustainable water management initiative that equips buildings with rainwater collection systems to reduce water scarcity and promote environmental conservation.",
        date: "December 2023",
        status: "Ongoing",
        impact: "50+ buildings equipped, 120,000+ liters collected monthly",
        features: [
            "Rooftop collection systems with filtration technology",
            "Underground storage tanks with capacity monitoring",
            "Integration with existing plumbing for non-potable uses",
            "Overflow management systems",
            "Water quality monitoring",
            "Maintenance training for building staff"
        ],
        results: "The community rainwater harvesting project has reduced dependency on municipal water supply by 22% during non-monsoon months and 58% during monsoon season. Participating buildings have reported water bill reductions averaging 18%. The collected water has been effectively used for landscaping, cleaning, and toilet flushing, conserving precious treated water resources."
    }
};

// Handle project detail view buttons
const projectViewButtons = document.querySelectorAll('.project-card .btn-outline, .project-view');
const projectModalClose = projectDetailsModal.querySelector('.modal-close');

projectViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Determine which project was clicked
        const projectCard = button.closest('.project-card');
        const projectTitle = projectCard.querySelector('.project-title').textContent;
        let projectId;
        
        // Determine project ID from title
        if (projectTitle.includes('Door Numbering')) {
            projectId = 'sadashivnagar-door-numbering';
        } else if (projectTitle.includes('Security System')) {
            projectId = 'integrated-security-system';
        } else if (projectTitle.includes('Rainwater')) {
            projectId = 'community-rainwater-harvesting';
        }
        
        // Load project data into modal
        const project = projectData[projectId];
        
        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectImage').src = project.image;
        document.getElementById('projectImage').alt = project.title;
        document.getElementById('projectDescription').textContent = project.description;
        document.getElementById('projectDate').textContent = project.date;
        document.getElementById('projectStatus').textContent = project.status;
        document.getElementById('projectImpact').textContent = project.impact;
        
        // Clear and load features list
        const featuresList = document.getElementById('projectFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        document.getElementById('projectResults').textContent = project.results;
        
        // Show the modal
        projectDetailsModal.classList.add('active');
    });
});

projectModalClose.addEventListener('click', () => {
    projectDetailsModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === projectDetailsModal) {
        projectDetailsModal.classList.remove('active');
    }
});

// Gallery Lightbox
const galleryLightbox = document.createElement('div');
galleryLightbox.className = 'modal gallery-lightbox';
galleryLightbox.innerHTML = `
    <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
        <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
        <div class="lightbox-image-container">
            <img id="lightboxImage" src="" alt="Gallery Image">
        </div>
        <div class="lightbox-caption" id="lightboxCaption">Image caption</div>
    </div>
`;
document.body.appendChild(galleryLightbox);

// Gallery data
const galleryData = [
    {
        src: "/api/placeholder/800/600",
        caption: "Street Transformation - Before and After"
    },
    {
        src: "/api/placeholder/800/600",
        caption: "Door Numbering Implementation"
    },
    {
        src: "/api/placeholder/800/600",
        caption: "Security System Control Center"
    },
    {
        src: "/api/placeholder/800/600",
        caption: "LED Street Lighting Installation"
    },
    {
        src: "/api/placeholder/800/600",
        caption: "Rainwater Harvesting System"
    },
    {
        src: "/api/placeholder/800/600",
        caption: "Community Park Development"
    }
];

const galleryItems2 = document.querySelectorAll('.gallery-item');
const lightboxClose = galleryLightbox.querySelector('.lightbox-close');
const lightboxPrev = galleryLightbox.querySelector('.lightbox-prev');
const lightboxNext = galleryLightbox.querySelector('.lightbox-next');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
let currentGalleryIndex = 0;

galleryItems2.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        currentGalleryIndex = index;
        updateLightbox(index);
        galleryLightbox.classList.add('active');
    });
});

function updateLightbox(index) {
    lightboxImage.src = galleryData[index].src;
    lightboxCaption.textContent = galleryData[index].caption;
}

lightboxClose.addEventListener('click', () => {
    galleryLightbox.classList.remove('active');
});

lightboxPrev.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    updateLightbox(currentGalleryIndex);
});

lightboxNext.addEventListener('click', () => {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    updateLightbox(currentGalleryIndex);
});

window.addEventListener('click', (e) => {
    if (e.target === galleryLightbox) {
        galleryLightbox.classList.remove('active');
    }
});

// Join Modal (Quick Join Form)
const joinModal2 = document.getElementById('joinModal');
const openJoinButtons = document.querySelectorAll('.join-us .btn, .header .btn-outline');
const closeJoinModal2 = joinModal.querySelector('.modal-close');

openJoinButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        joinModal2.classList.add('active');
    });
});

closeJoinModal2.addEventListener('click', () => {
    joinModal2.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === joinModal2) {
        joinModal2.classList.remove('active');
    }
});

// Form Submission Handlers
const contactForm2 = document.getElementById('contactForm');
if (contactForm2) {
    contactForm2.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data (in real implementation, this would be sent to the server)
        const formData = new FormData(this);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.color = '#4CAF50';
        successMessage.style.padding = '10px';
        successMessage.style.marginTop = '10px';
        successMessage.style.borderRadius = '4px';
        successMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        
        contactForm2.appendChild(successMessage);
        contactForm2.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Quick Join Form
const quickJoinForm2 = document.getElementById('quickJoinForm');
if (quickJoinForm2) {
    quickJoinForm2.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.textContent = 'Thank you for your interest in Renew! We will contact you soon.';
        successMessage.style.color = '#4CAF50';
        successMessage.style.padding = '10px';
        successMessage.style.marginTop = '10px';
        successMessage.style.borderRadius = '4px';
        successMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        
        quickJoinForm2.appendChild(successMessage);
        quickJoinForm2.reset();
        
        // Hide modal after 3 seconds
        setTimeout(() => {
            joinModal2.classList.remove('active');
        }, 3000);
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success-message';
        successMessage.textContent = 'Thank you for subscribing to our newsletter!';
        successMessage.style.color = '#4CAF50';
        successMessage.style.padding = '10px';
        successMessage.style.marginTop = '10px';
        successMessage.style.borderRadius = '4px';
        successMessage.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        
        newsletterForm.appendChild(successMessage);
        newsletterForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Skip if the link opens a modal
        if (this.classList.contains('btn-outline') || this.classList.contains('project-view')) return;
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            
            window.scrollTo({
                top: target.offsetTop - 100, // Account for header height
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navList2.classList.contains('active')) {
                navList2.classList.remove('active');
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Custom scripts loaded correctly.");
});

// Add CSS for modals and lightbox
const style = document.createElement('style');
style.textContent = `
/* Project Details Modal */
.project-details-modal .modal-content {
    max-width: 900px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
}

.project-details-content {
    display: flex;
    flex-direction: column;
}

.project-details-image {
    margin-bottom: 20px;
}

.project-details-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.project-details-info h4 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #333;
}

.project-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 8px;
}

.project-stat {
    flex: 1;
    min-width: 150px;
}

.project-stat h5 {
    margin: 0 0 5px 0;
    color: #666;
    font-size: 14px;
}

.project-stat p {
    margin: 0;
    font-weight: 600;
    color: #333;
}

#projectFeatures {
    padding-left: 20px;
}

#projectFeatures li {
    margin-bottom: 8px;
}

/* Gallery Lightbox */
.gallery-lightbox .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;
    background-color: transparent;
}

.lightbox-close {
    position: absolute;
    top: -40px;
    right: -40px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 30px;
    cursor: pointer;
    z-index: 1001;
}

.lightbox-prev, .lightbox-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
}

.lightbox-prev {
    left: -70px;
}

.lightbox-next {
    right: -70px;
}

.lightbox-image-container {
    text-align: center;
}

#lightboxImage {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
}

.lightbox-caption {
    margin-top: 15px;
    color: white;
    text-align: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
}

/* Responsive Adjustments */
@media screen and (max-width: 768px) {
    .project-details-content {
        flex-direction: column;
    }
    
    .lightbox-prev, .lightbox-next {
        width: 40px;
        height: 40px;
    }
    
    .lightbox-prev {
        left: 10px;
    }
    
    .lightbox-next {
        right: 10px;
    }
    
    .lightbox-close {
        top: -40px;
        right: 0;
    }
    
    .project-stats {
        flex-direction: column;
        gap: 10px;
    }
}

@media screen and (min-width: 768px) {
    .project-details-content {
        flex-direction: row;
        gap: 30px;
    }
    
    .project-details-image {
        flex: 1;
        margin-bottom: 0;
    }
    
    .project-details-info {
        flex: 1;
    }
}
`;

document.head.appendChild(style);