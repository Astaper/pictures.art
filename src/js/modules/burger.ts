const burger = (menuSelector: string, burgerSelector: string) => {
    const menuElem: HTMLElement | null = document.querySelector(menuSelector);
    const burgerElem: HTMLElement | null = document.querySelector(burgerSelector);

    if (menuElem) {
        menuElem.style.display = 'none';
    }

    const breakpoint: number = 993

    burgerElem?.addEventListener('click', () => {
        if (menuElem?.style.display == "none" && window.screen.availWidth <= breakpoint) {
            menuElem.style.display = 'block';
        } else {
            if (menuElem) {
                menuElem.style.display = 'none';
            }
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > breakpoint) {
            if (menuElem) {
                menuElem.style.display = 'none';
            }
        }
    });
};

export default burger;
