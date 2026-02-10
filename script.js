// Loading Screen Functionality
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  
  // Show loading screen for 2 seconds
  setTimeout(function() {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.visibility = 'hidden';
    
    mainContent.style.opacity = '1';
  }, 2000);
});

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.remove('show');
}

// Smooth Scrolling for Navigation Links
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
    }
  });
});

// Animated Name Effect
const nameElement = document.querySelector('.animated-name');
const nameText = 'KRITIN PANDA';

function animateName() {
  nameElement.innerHTML = '';
  let i = 0;
  
  function typeChar() {
    if (i < nameText.length) {
      const span = document.createElement('span');
      span.textContent = nameText.charAt(i);
      span.style.opacity = '0';
      span.style.animation = `fadeInUp 0.3s ease-out ${i * 0.1}s forwards`;
      nameElement.appendChild(span);
      i++;
      setTimeout(typeChar, 100);
    }
  }
  
  typeChar();
}

// Start animation when page loads
window.addEventListener('load', function() {
  setTimeout(animateName, 2200);
});

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.background = 'rgba(15, 12, 41, 0.8)';
    return;
  }
  
  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.background = 'rgba(15, 12, 41, 0.95)';
  } else {
    // Scrolling up
    navbar.style.background = 'rgba(15, 12, 41, 0.9)';
  }
  
  lastScroll = currentScroll;
});

// Project card hover effect enhancement
const projectCard = document.querySelector('.project-card');
if (projectCard) {
  projectCard.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.project-icon i');
    if (icon) {
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.3s ease';
    }
  });
  
  projectCard.addEventListener('mouseleave', function() {
    const icon = this.querySelector('.project-icon i');
    if (icon) {
      icon.style.transform = 'scale(1)';
    }
  });
}

// Add active state to current section in navigation
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
