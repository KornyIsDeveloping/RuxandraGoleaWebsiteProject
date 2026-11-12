// navbar
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Animate the hamburger into an 'X'
        hamburger.classList.toggle('toggle');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(25, 27, 26, 0.9)'; // Solid dark
        } else {
            navbar.style.background = 'rgba(25, 27, 26, 0.1)'; // Transparent glass
        }
    });
});