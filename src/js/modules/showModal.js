

export default function showModal() {
    const modal = document.createElement('div');

    modal.classList.add('modal')
    modal.innerHTML = ` <div class="modal__close">
                            <span></span>
                            <span></span>
                        </div>
                        <h2 class="modal__title">Обратный звонок</h2>
                        <form class="modal__form">
                            <label for="name">*Имя</label>
                            <input id="name" type="text">
                            <label for="phone">*Телефон</label>
                            <input type="tel" id="phone">
                            <div class="modal__privacy">*Нажимия кнопку “Оставить заявку” я даю согласие на обработку данных</div>
                        </form>
                        <button class="modal__btn btn">Отправить заявку</button>`

    const openModal = document.querySelector('.promo__btn');
    const substrate = document.querySelector('.substrate');
    const closeModal = modal.querySelector('.modal__close');
    const form = modal.querySelector('.modal__form');

    openModal.addEventListener('click', () => {
        document.body.append(modal);
        substrate.classList.add('substrate__show');
    })

    closeModal.addEventListener('click', () => {
        document.body.removeChild(modal);
        substrate.classList.remove('substrate__show');
        form.reset();
    })
}