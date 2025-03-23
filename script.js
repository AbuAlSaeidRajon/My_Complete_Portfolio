// JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('show');
  });

  // Smooth scrolling
  const links = document.querySelectorAll('.navbar a');
  for (const link of links) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Back-to-top button
  const backToTopButton = document.createElement('button');
  backToTopButton.classList.add('btn', 'back-to-top-button');
  backToTopButton.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Dark/light theme switcher
  const themeSwitcher = document.getElementById('theme-switcher');
  themeSwitcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    themeSwitcher.textContent = document.body.classList.contains('light-theme') ? 'Dark Mode' : 'Light Mode';
  });

  // Modal window
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('close-btn');

  setTimeout(() => {
    modal.style.display = 'block';
  }, 2000);

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});