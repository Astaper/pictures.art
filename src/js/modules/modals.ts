interface ModalOptions {
    triggerSelector: string;
    modalSelector: string;
    closeSelector: string;
    destroy?: boolean;
}


const modals = () => {
    btnPressed: false;
    const triggers = ({ triggerSelector, modalSelector, closeSelector, destroy = false }: ModalOptions) => {
        const trigger = document.querySelectorAll<HTMLElement>(triggerSelector);
        const modal = document.querySelector<HTMLElement>(modalSelector);
        const close = document.querySelector<HTMLElement>(closeSelector);
        const windows = document.querySelectorAll<HTMLElement>('[data-modal]');
        const scroll = calcScroll();

        trigger.forEach(trigger => {
            trigger.addEventListener('click', (e: Event) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed: true;

                windows.forEach(window => {
                    window.style.display = 'none';
                    window.classList.add('animated', 'fadeIn');
                });

                if (destroy) {
                    trigger.remove();
                }

                if (modal) {
                    modal.style.display = "block";
                }

                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        document.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        const closeModal = () => {
            if (modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }

            windows.forEach(window => {
                window.style.display = 'none';
            });
        }

        if (close) {
            close.addEventListener('click', () => {
                closeModal();
                document.body.style.marginRight = `0px`;
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                    document.body.style.marginRight = `0px`;
                }
            });
        }


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
                const scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
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

    const endOfPageElement: HTMLElement | null = document.querySelector('.input-wrapper');

    const fixedGiftElement: HTMLElement | null = document.querySelector('.fixed-gift');

    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {

        if (entries[0].isIntersecting) {
            fixedGiftElement?.classList.add('hidden');
            fixedGiftElement?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
    }, {
        rootMargin: '0px',
        threshold: 1.0,
    });

    if (endOfPageElement) {
        observer.observe(endOfPageElement);
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
    triggers({
        triggerSelector: '.fixed-gift',
        modalSelector: '.popup-gift',
        closeSelector: '.popup-gift .popup-close',
        destroy: true
    });


    showModalByTime('.popup-consultation', 5000);
};

export default modals;
