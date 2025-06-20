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
document.addEventListener("DOMContentLoaded", function () {
    const typewriter = document.getElementById("typewriter");
    const words = [": Planner", ": Engineer", ": Data Scientist"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        charIndex--;
        typewriter.textContent = currentWord.substring(0, charIndex);
  
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500); // Short pause before typing new word
        } else {
          setTimeout(type, 50);
        }
  
      } else {
        charIndex++;
        typewriter.textContent = currentWord.substring(0, charIndex);
  
        if (charIndex === currentWord.length) {
          setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000); // 1s pause before deleting
        } else {
          setTimeout(type, 100);
        }
      }
    }
  
    type();
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


document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    }
  });
});
