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

// carousel 1
document.addEventListener('DOMContentLoaded', function() {
    const track1 = document.querySelector('.carousel-track1');
    const slides1 = document.querySelectorAll('.carousel-slide1');
    const prevButton1 = document.querySelector('.prev-button1');
    const nextButton1 = document.querySelector('.next-button1');
    const dotsContainer1 = document.querySelector('.carousel-dots1');
    
    let currentIndex = 0;
    const slideCount = slides1.length;
    
    // Create dots for each slide
    slides1.forEach((_, index) => {
        const dot1 = document.createElement('div');
        dot1.classList.add('carousel-dot1');
        if (index === 0) dot1.classList.add('active');
        dot1.addEventListener('click', () => goToSlide(index));
        dotsContainer1.appendChild(dot1);
    });
    
    const dots1 = document.querySelectorAll('.carousel-dot1');
    
    function updateCarousel() {
        track1.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots1.forEach((dot, index) => {
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
    
    nextButton1.addEventListener('click', nextSlide);
    prevButton1.addEventListener('click', prevSlide);

    let intervalId = setInterval(nextSlide, 3000);
    const carousel = document.querySelector('.carousel-container1');
    
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 3000);
    });
});

// carousel 2
document.addEventListener('DOMContentLoaded', function() {
    const track2 = document.querySelector('.carousel-track2');
    const slides2 = document.querySelectorAll('.carousel-slide2');
    const prevButton2 = document.querySelector('.prev-button2');
    const nextButton2 = document.querySelector('.next-button2');
    const dotsContainer2 = document.querySelector('.carousel-dots2');
    
    let currentIndex = 0;
    const slideCount = slides2.length;
    
    slides2.forEach((_, index) => {
        const dot2 = document.createElement('div');
        dot2.classList.add('carousel-dot2');
        if (index === 0) dot2.classList.add('active');
        dot2.addEventListener('click', () => goToSlide(index));
        dotsContainer2.appendChild(dot2);
    });
    
    const dots2 = document.querySelectorAll('.carousel-dot2');
    
    function updateCarousel() {
        track2.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots2.forEach((dot, index) => {
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
    
    nextButton2.addEventListener('click', nextSlide);
    prevButton2.addEventListener('click', prevSlide);

    let intervalId = setInterval(nextSlide, 3000);
    const carousel = document.querySelector('.carousel-container2');
    
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 3000);
    });
});

// carousel 3
document.addEventListener('DOMContentLoaded', function() {
    const track3 = document.querySelector('.carousel-track3');
    const slides3 = document.querySelectorAll('.carousel-slide3');
    const prevButton3 = document.querySelector('.prev-button3');
    const nextButton3 = document.querySelector('.next-button3');
    const dotsContainer3 = document.querySelector('.carousel-dots3');
    
    let currentIndex = 0;
    const slideCount = slides3.length;
    
    slides3.forEach((_, index) => {
        const dot3 = document.createElement('div');
        dot3.classList.add('carousel-dot3');
        if (index === 0) dot3.classList.add('active');
        dot3.addEventListener('click', () => goToSlide(index));
        dotsContainer3.appendChild(dot3);
    });
    
    const dots3 = document.querySelectorAll('.carousel-dot3');
    
    function updateCarousel() {
        track3.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots3.forEach((dot, index) => {
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
    
    nextButton3.addEventListener('click', nextSlide);
    prevButton3.addEventListener('click', prevSlide);

    let intervalId = setInterval(nextSlide, 3000);
    const carousel = document.querySelector('.carousel-container3');
    
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 3000);
    });
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