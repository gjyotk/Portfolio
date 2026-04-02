// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

//download button
const resumeBtn = document.getElementById('resume-btn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Resume download would start here');
    });
}

// Scroll animations
function checkScroll() {
    const elements = document.querySelectorAll('.timeline-item, .experience-item, .skill-category, .achievement-item, .project-card, .publication-item, .media-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('appear');
        }
    });
}

// CSS for the scroll animation
const style = document.createElement('style');
style.innerHTML = `
    .timeline-item, .experience-item, .skill-category, .achievement-item, .project-card, .publication-item, .media-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .appear {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// event listeners for scroll animations
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

document.addEventListener('DOMContentLoaded', function () {

    function initCarousel(id) {
        const track = document.querySelector(`.carousel-track${id}`);
        const slides = document.querySelectorAll(`.carousel-slide${id}`);
        const prevButton = document.querySelector(`.prev-button${id}`);
        const nextButton = document.querySelector(`.next-button${id}`);
        const dotsContainer = document.querySelector(`.carousel-dots${id}`);
        const carousel = document.querySelector(`.carousel-container${id}`);

        if (!track || slides.length === 0) return; 

        let currentIndex = 0;
        const slideCount = slides.length;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add(`carousel-dot${id}`);
            if (index === 0) dot.classList.add('active');

            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll(`.carousel-dot${id}`);

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        }

        nextButton?.addEventListener('click', nextSlide);
        prevButton?.addEventListener('click', prevSlide);

        let intervalId = setInterval(nextSlide, 3000);

        carousel?.addEventListener('mouseenter', () => clearInterval(intervalId));
        carousel?.addEventListener('mouseleave', () => {
            intervalId = setInterval(nextSlide, 3000);
        });
    }

    // Initialize all carousels
    [1, 2, 3, 4].forEach(initCarousel);
});



// Filter functionality for media page
const filterBtns = document.querySelectorAll('.filter-btn');
const mediaItems = document.querySelectorAll('.media-item');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            mediaItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

const filterBtns2 = document.querySelectorAll('.filter-btn2');
const mediaItems2 = document.querySelectorAll('.media-item2');

if (filterBtns2.length > 0) {
    filterBtns2.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns2.forEach(b => b.classList.remove('active'));
            
            btn.classList.add('active');
            
            const filter2 = btn.getAttribute('data-filter');
            mediaItems2.forEach(item => {
                if (filter2 === 'all' || item.getAttribute('data-category') === filter2) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Add active class to current page in nav
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage === linkHref || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('load', setActiveNavLink);