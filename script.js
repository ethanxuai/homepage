// Smooth scrolling when clicking navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
  });
});
