// Smooth animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.contact-card, .about-card, .interests-card, .passion-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add pulse effect to contact links on load
window.addEventListener('load', () => {
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});

// Mobile menu or other interactions
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 140, 0, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left - 10) + 'px';
        ripple.style.top = (e.clientY - rect.top - 10) + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Dynamic background interaction
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    document.documentElement.style.setProperty('--mouse-x', x + '%');
    document.documentElement.style.setProperty('--mouse-y', y + '%');
});

// Add page visibility change effect
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.opacity = '0.5';
    } else {
        document.body.style.opacity = '1';
    }
});

// Prevent right-click context menu (optional privacy feature)
// Uncomment if you want to disable right-click
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

console.log('🏗️ Maher Ashraf - Architectural Engineer Profile Loaded');
console.log('💪 Ready to connect!');
