import showModal from "./modules/showModal"
import showMenu from "./modules/showMenu";

window.addEventListener('DOMContentLoaded', () => {
    const substrate = document.querySelector('.substrate');

    showModal(substrate);
    showMenu(substrate);
})