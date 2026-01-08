// ============================================
// NAVIGATION - CLEAN & SIMPLE
// ============================================

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}, { passive: true });

// Active link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Throttled scroll listener for performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveLink, 10);
}, { passive: true });

// Initial active link
updateActiveLink();

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Update URL
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
        }
    });
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            if (target % 1 === 0) {
                element.textContent = Math.floor(start);
            } else {
                element.textContent = (Math.floor(start * 10) / 10).toFixed(2);
            }
            requestAnimationFrame(updateCounter);
        } else {
            if (target % 1 === 0) {
                element.textContent = target;
            } else {
                element.textContent = target.toFixed(2);
            }
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statCards = document.querySelectorAll('.stat-card h3');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const value = parseFloat(entry.target.textContent);
            if (!isNaN(value)) {
                entry.target.classList.add('animated');
                animateCounter(entry.target, value);
            }
        }
    });
}, { threshold: 0.5 });

statCards.forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// FADE IN ANIMATIONS ON SCROLL
// ============================================
const fadeElements = document.querySelectorAll('.timeline-item, .project-card, .cert-card, .skill-category, .contact-item, .stat-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👋 Welcome to Mahesh T\'s Portfolio', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with clean, professional code', 'color: #64748b; font-size: 12px;');
