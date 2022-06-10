const menuButton = document.getElementById('menuButton');
const slideMenu = document.getElementsByClassName('slide-menu');
const menuOverlay = document.getElementsByClassName('menu-overlay');
const closeIcon = document.getElementsByClassName('close-menu');

menuButton.addEventListener('click', (e) => {
    slideMenu[0].classList.add('show');
    document.body.style.overflow = 'hidden';
    menuOverlay[0].style.width = '100%';
    menuOverlay[0].style.opacity = .8;

    e.stopPropagation();
}, false);

menuOverlay[0].addEventListener('click', (e) => {
    slideMenu[0].classList.remove('show');
    document.body.style.overflow = 'auto';
    menuOverlay[0].style.width = '0';
    menuOverlay[0].style.opacity = 0;

    e.stopPropagation();
}, false)

closeIcon[0].addEventListener('click', (e) => {
    e.stopPropagation();

    slideMenu[0].classList.remove('show');
    document.body.style.overflow = 'auto';
    menuOverlay[0].style.width = '0';
    menuOverlay[0].style.opacity = 0;
}, false);