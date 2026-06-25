document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Toggle Mobile Navigation Window
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        
        // Animating individual Hamburger Bars
        const bars = mobileMenu.querySelectorAll('.bar');
        if(mobileMenu.classList.contains('open')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Dismiss Menu Session on Mobile Link Selection
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('open');
                const bars = mobileMenu.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });

    // Dynamically Apply Elegant Scroll Density Blur back to Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.75rem 0';
            navbar.style.backgroundColor = 'rgba(11, 19, 37, 0.98)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.style.padding = '1.25rem 0';
            navbar.style.backgroundColor = 'rgba(11, 19, 37, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});
