// Loading Screen Functionality
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  
  // Show loading screen for 1.8 seconds (slightly shorter)
  setTimeout(function() {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.visibility = 'hidden';
    
    mainContent.style.opacity = '1';
  }, 1800);
});

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
  
  // Animate hamburger icon
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.toggle('active');
}

function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.remove('show');
  
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.classList.remove('active');
}

// Animated Name Effect
const nameElement = document.querySelector('.animated-name');
const nameText = 'KRITIN PANDA';

function animateName() {
  nameElement.innerHTML = '';
  let i = 0;
  
  function typeChar() {
    if (i < nameText.length) {
      const char = nameText.charAt(i);
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.animation = `fadeInUp 0.4s ease-out ${i * 0.05}s forwards`;
      nameElement.appendChild(span);
      
      // Add space handling
      if (char === ' ') {
        nameElement.appendChild(document.createTextNode(' '));
      }
      
      i++;
      setTimeout(typeChar, 50);
    }
  }
  
  typeChar();
}

// Start animation when page loads
window.addEventListener('load', function() {
  setTimeout(animateName, 1900);
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 100) {
    navbar.style.background = 'rgba(15, 12, 41, 0.85)';
    navbar.style.boxShadow = 'none';
  } else if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    navbar.style.background = 'rgba(15, 12, 41, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  } else {
    // Scrolling up
    navbar.style.background = 'rgba(15, 12, 41, 0.9)';
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  }
  
  lastScroll = currentScroll;
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      closeMenu();
    }
  });
});

// Add hover effect to project card
const projectCard = document.querySelector('.project-card');
if (projectCard) {
  projectCard.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.project-icon i');
    if (icon) {
      icon.style.transform = 'scale(1.1) rotate(5deg)';
      icon.style.transition = 'transform 0.3s ease';
    }
  });
  
  projectCard.addEventListener('mouseleave', function() {
    const icon = this.querySelector('.project-icon i');
    if (icon) {
      icon.style.transform = 'scale(1) rotate(0deg)';
    }
  });
  
  // Add click sound effect (optional)
  projectCard.addEventListener('click', function() {
    // You can add a subtle click effect here
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
}

// Add active state to current section in navigation
function updateActiveNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-links a');
  
  let current = '';
  const scrollPosition = window.scrollY + 150;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateActiveNav();
  
  // Add subtle animation to skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach((tag, index) => {
    tag.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
  });
});

// Add typing effect to loading screen dots (additional effect)
function animateLoadingDots() {
  const dots = document.querySelectorAll('.dot');
  let dotIndex = 0;
  
  function blinkDots() {
    dots.forEach(dot => dot.style.opacity = '0');
    
    if (dotIndex < dots.length) {
      dots[dotIndex].style.opacity = '1';
      dotIndex++;
    } else {
      dotIndex = 0;
    }
    
    setTimeout(blinkDots, 400);
  }
  
  blinkDots();
}

// Start loading animation
animateLoadingDots();
