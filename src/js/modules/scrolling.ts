const scrolling = (upSelector: string) => {
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

    const links = document.querySelectorAll('[href^="#"]');
    const speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const anchor = link as HTMLAnchorElement;
            let widthTop = document.documentElement.scrollTop;
            let hash = anchor.hash;
            let toBlock = document.querySelector(hash)?.getBoundingClientRect().top || 0;
            let start: number | null = null;

            const step = (time: number) => {
                if (start === null) {
                    start = time;
                }

                let progress = time - start;
                let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            };

            requestAnimationFrame(step);
        });
    });
};

export default scrolling;
