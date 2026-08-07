document.addEventListener('DOMContentLoaded', () => {
  const navtoggle = document.querySelector('.navtoggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Mobile Menu toggle
  if (navtoggle && mobileNav) {
    navtoggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      navtoggle.setAttribute('aria-expanded', 'true');
    });
  }

  if (mobileNavClose && mobileNav) {
    mobileNavClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      if (navtoggle) navtoggle.setAttribute('aria-expanded', 'false');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
      if (navtoggle) navtoggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});