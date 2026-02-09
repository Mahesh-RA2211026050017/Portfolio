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
// ANIME.JS ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Hero intro animation
    if (window.anime) {
        anime.timeline({ easing: 'easeOutQuad', duration: 700 })
            .add({
                targets: '.hero-badge',
                translateY: [20, 0],
                opacity: [0, 1]
            })
            .add({
                targets: '.hero-title .greeting',
                translateY: [30, 0],
                opacity: [0, 1]
            }, '-=400')
            .add({
                targets: '.hero-title .name',
                translateY: [40, 0],
                opacity: [0, 1]
            }, '-=450')
            .add({
                targets: '.hero-subtitle',
                translateY: [30, 0],
                opacity: [0, 1]
            }, '-=450')
            .add({
                targets: '.hero-buttons .btn',
                translateY: [20, 0],
                opacity: [0, 1],
                delay: anime.stagger(80)
            }, '-=450')
            .add({
                targets: '.hero-stats .stat-box',
                translateY: [20, 0],
                opacity: [0, 1],
                delay: anime.stagger(80)
            }, '-=450');
    }

    // Stats counter using anime.js
    const statCards = document.querySelectorAll('.stat-card h3');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const value = parseFloat(entry.target.textContent);
                if (!isNaN(value) && window.anime) {
                    entry.target.classList.add('animated');
                    anime({
                        targets: entry.target,
                        innerHTML: [0, value],
                        easing: 'easeOutExpo',
                        duration: 2000,
                        round: value % 1 === 0 ? 1 : 100
                    });
                }
            }
        });
    }, { threshold: 0.5 });

    statCards.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Scroll reveal for cards and sections
    const revealElements = document.querySelectorAll('.timeline-item, .project-card, .cert-card, .skill-category, .contact-item, .stat-card');

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && window.anime) {
                revealObserver.unobserve(entry.target);
                anime({
                    targets: entry.target,
                    translateY: [40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutCubic',
                    duration: 700
                });
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c👋 Welcome to Mahesh T\'s Portfolio', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with clean, professional code', 'color: #64748b; font-size: 12px;');
