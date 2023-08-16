const menuNavigation = document.getElementById('menu-navigation');
const burgerButton = document.getElementById('burger-button');
const burgerIcon = document.getElementById('burger-icon');

const OPEN_BURGER_PATH = 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5';
const CLOSED_BURGER_PATH = 'M6 18L18 6M6 6l12 12';

burgerButton.addEventListener('click', (e) => {
    const isOpened = burgerButton.dataset.opened === 'true';
    burgerButton.dataset.opened = !isOpened;
    
    burgerIcon.setAttribute('d',isOpened ? OPEN_BURGER_PATH : CLOSED_BURGER_PATH);
    menuNavigation.classList.toggle('top-[-100%]');
    menuNavigation.classList.toggle('top-[72px]');
})