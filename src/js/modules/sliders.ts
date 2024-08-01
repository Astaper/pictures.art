interface ISlidesOptions {
    slides: string;
    dir: string;
    prev: string;
    next: string;
}

const sliders = ({ slides, dir, prev, next }: ISlidesOptions) => {
    let slideIndex = 1;
    let pausedId: number;
    const slide: NodeListOf<HTMLElement> = document.querySelectorAll(slides);

    const showSlides = (n: number) => {
        if (n > slide.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slide.length;
        }

        slide.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        slide[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    const plusSlides = (n: number) => {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);

        prevBtn?.addEventListener('click', () => {
            plusSlides(-1);
            slide[slideIndex - 1].classList.remove('slideInLeft');
            slide[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn?.addEventListener('click', () => {
            plusSlides(1);
            slide[slideIndex - 1].classList.remove('slideInRight');
            slide[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch (e) { }

    const activateAnimation = () => {
        if (dir === 'vertical') {
            pausedId = setInterval(function () {
                plusSlides(1);
                slide[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            pausedId = setInterval(function () {
                plusSlides(1);
                slide[slideIndex - 1].classList.remove('slideInRight');
                slide[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    activateAnimation();

    slide[0].parentNode?.addEventListener('mouseenter', () => {
        clearInterval(pausedId);
    });
    slide[0].parentNode?.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;
