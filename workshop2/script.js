// Function to toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('active');
  
  // Animate hamburger icon
  const spans = document.querySelectorAll('.hamburger span');
  if (nav.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

// Function to open sections
function openSection(id) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.classList.remove('active');
  });
  
  // Show selected section
  document.getElementById(id).classList.add('active');
  
  // Close mobile menu after selection
  if (window.innerWidth <= 768) {
    toggleMenu();
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const nav = document.getElementById('main-nav');
  const hamburger = document.querySelector('.hamburger');
  
  if (window.innerWidth <= 768 && 
      nav.classList.contains('active') && 
      !nav.contains(event.target) && 
      !hamburger.contains(event.target)) {
    toggleMenu();
  }
});

// Ensure video plays correctly
document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('bg-video');
  if (video) {
    video.play().catch(error => {
      console.log('Video autoplay failed:', error);
    });
  }
});

// Handle window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    const nav = document.getElementById('main-nav');
    const spans = document.querySelectorAll('.hamburger span');
    
    // Reset menu styles on desktop
    nav.classList.remove('active');
    nav.style.display = '';
    
    // Reset hamburger animation
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});