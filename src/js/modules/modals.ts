interface ModalOptions {
    triggerSelector: string;
    modalSelector: string;
    closeSelector: string;
    closeClickOverlay?: boolean;
}


const modals = () => {
    const triggers = ({triggerSelector, modalSelector, closeSelector, closeClickOverlay = true}) => {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        scroll = calcScroll();

        trigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";

            windows.forEach(window => {
                window.style.display = 'none';
            });
        }

        close.addEventListener('click', () => {
            closeModal();
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal();
                document.body.style.marginRight = `0px`;
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }

    const calcScroll = () => {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    triggers({
        triggerSelector: '.popup_engineer_btn',
        modalSelector: '.popup_engineer',
        closeSelector:'.popup_engineer .popup_close'
    });
    triggers({
        triggerSelector: '.phone_link',
        modalSelector: '.popup',
        closeSelector:'.popup .popup_close'
    });
    triggers({
        triggerSelector: '.popup_calc_btn',
        modalSelector: '.popup_calc',
        closeSelector: '.popup_calc_close'
    });
    triggers({
        triggerSelector: '.popup_calc_button',
        modalSelector: '.popup_calc_profile',
        closeSelector: '.popup_calc_profile_close',
        closeClickOverlay: false
    });
    triggers({
        triggerSelector: '.popup_calc_profile_button',
        modalSelector: '.popup_calc_end',
        closeSelector: '.popup_calc_end_close',
        closeClickOverlay: false
    });
};

export default modals;