const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.3 }); 

document.querySelectorAll('.second-screen_services-wrapper_service_text').forEach((el)=>observer.observe(el));

const observerPartners = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible2');
        } 
        else {
            entry.target.classList.remove('visible2');
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll('.partners_wrapper_img, .customers_wrapper_img').forEach((el)=>observerPartners.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    const burgerToggle = document.getElementById('burger-toggle');
    const menuLinks = document.querySelectorAll('.burger-nav a');
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerToggle.checked = false;
        });
    });
});
