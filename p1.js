// script.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');
  
    // Hide all sections initially
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the first section by default
    sections[0].style.display = 'block';
  
    // Add click event listeners to navigation links
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
  
        // Hide all sections
        sections.forEach(section => {
          section.style.display = 'none';
        });
  
        // Show the corresponding section
        sections[index].style.display = 'block';
      });
    });
  });