
// Script para hacer el header sticky al hacer scroll
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 300);
});

// Script para inicializar Slick Slider
$(document).ready(function () {
    $('.galeria').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true
    });
});

// Función para el menú hamburguesa sofisticado
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    const btn = document.getElementById('hamburger-btn');
    nav.classList.toggle('active');
    btn.classList.toggle('active');
}
