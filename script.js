// Typewriter effect
function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Keep the cursor blinking
            element.classList.add('typewriter');
        }
    }
    type();
}

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('typewriter');
    typeWriter('Minho Kim', nameElement, 150);
});

// Navigation functionality
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const navLink = document.querySelector(`[data-page="${pageId}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
}

// Add click event listeners to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 10 + 5;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.querySelector('.particles').appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 25000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize particles container
if (!document.querySelector('.particles')) {
    document.body.insertAdjacentHTML('afterbegin', '<div class="particles"></div>');
}

// Photo placeholder click handler (for future photo upload)
document.getElementById('heroPhoto').addEventListener('click', function() {
    alert('Click here to upload your photo! Replace this placeholder with your actual photo.');
});