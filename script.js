document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        // Toggle active class
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(n => {
        n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});