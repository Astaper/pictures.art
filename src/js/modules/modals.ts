interface ModalOptions {
    triggerSelector: string;
    modalSelector: string;
    closeSelector: string;
    closeClickOverlay?: boolean;
}


const modals = () => {
    const triggers = ({ triggerSelector, modalSelector, closeSelector, closeClickOverlay = true }: ModalOptions) => {
        const trigger = document.querySelectorAll<HTMLElement>(triggerSelector);
        const modal = document.querySelector<HTMLElement>(modalSelector);
        const close = document.querySelector<HTMLElement>(closeSelector);
        const windows = document.querySelectorAll<HTMLElement>('[data-modal]');
        const scroll = calcScroll();

        trigger.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                // windows.forEach(window) => {
                //     window.style.display = 'none';
                // });

                windows.forEach((window) => {
                    if (window instanceof HTMLElement) {
                      window.style.display = 'none';
                    }
                  });

                modal!.style.display = "block";
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
            modal!.style.display = "none";
            document.body.style.overflow = "";

            windows.forEach(window => {
                window.style.display = 'none';
            });
        }

        close!.addEventListener('click', () => {
            closeModal();
            document.body.style.marginRight = `0px`;
        });

        modal!.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal();
                document.body.style.marginRight = `0px`;
            }
        });
    }

    const showModalByTime = (selector: string, time: number) => {
        setTimeout(() => {
            let display;

            document.querySelectorAll<HTMLElement>('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = "block";
                }
            });

            if (!display) {
                document.querySelector<HTMLElement>(selector)!.style.display = 'block';
                document.body.style.overflow = "hidden";
            }
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
        triggerSelector: '.button-design',
        modalSelector: '.popup-design',
        closeSelector: '.popup-design .popup-close'
    });
    triggers({
        triggerSelector: '.button-consultation',
        modalSelector: '.popup-consultation',
        closeSelector: '.popup-consultation .popup-close'
    });

    showModalByTime('.popup-consultation', 5000);
};

export default modals;