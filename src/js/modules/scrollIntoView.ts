const scrollInto = (upSelector: string) => {
    const upElem = document.querySelector(upSelector);
    const btnScroll = document.querySelector('.pageup');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem?.classList.add('animated', 'fadeIn');
            upElem?.classList.remove('fadeOut');
        } else {
            upElem?.classList.add('fadeOut');
            upElem?.classList.remove('fadeIn');
        }
    });

    btnScroll?.addEventListener('click', () => {
        const targetElement = document.querySelector('.header');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

export default scrollInto;
