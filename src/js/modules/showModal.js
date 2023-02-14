

export default function showModal(substrate) {
    const modal = document.createElement('div');

    modal.classList.add('modal')
    modal.innerHTML = ` <div class="modal__close close ">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L21 21M1 21L21 1" stroke="#69766D" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
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
    const closeModal = modal.querySelector('.close');
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

    substrate.addEventListener('click', () => {
        if (document.querySelector('.modal')) {
            document.body.removeChild(modal);
        }
        substrate.classList.remove('substrate__show');
    })
}