const scrollInto = (upSelector: string) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem?.classList.add('animated', 'fadeIn');
            upElem?.classList.remove('fadeOut');
        } else {
            upElem?.classList.add('fadeOut');
            upElem?.classList.remove('fadeIn');
        }
    });

    document.querySelector('.pageup')?.addEventListener('click', function () {
        const targetElement = document.querySelector('.header');
        targetElement!.scrollIntoView({ behavior: 'smooth' });
    });
}

export default scrollInto;
