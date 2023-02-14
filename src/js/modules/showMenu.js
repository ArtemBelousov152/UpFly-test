
export default function showMenu(substrate) {
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.menu__close');
    const openMenu = document.querySelector('.header__menu');

    openMenu.addEventListener('click', () => {
        menu.classList.add('menu__show');
        substrate.classList.add('substrate__show');
    })

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('menu__show');
        substrate.classList.remove('substrate__show');
    })

    substrate.addEventListener('click', () => {
        menu.classList.remove('menu__show');
        substrate.classList.remove('substrate__show');
    })

}