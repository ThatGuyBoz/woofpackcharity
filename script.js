// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu on link click
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('open');
    }
  });
});

// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
  });
}

// ===== Scroll Reveal Animation =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

// Observe all hidden elements
document.querySelectorAll('.hidden').forEach(el => {
  observer.observe(el);
});

// ===== Set Current Year in Footer =====
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}