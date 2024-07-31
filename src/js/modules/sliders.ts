interface ISlidesOptions {
    slides: string;
    dir: string;
    prev: string;
    next: string;
}

const sliders = ({ slides, dir, prev, next }: ISlidesOptions) => {
    let slideIndex = 1;
    let paused = false;
    let intervalId: number;
    const slide = document.querySelectorAll<HTMLElement>(slides);

    const showSlides = (n: any) => {
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

    const plusSlides = (n: any) => {
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
            intervalId = setInterval(function () {
                plusSlides(1);
                slide[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            intervalId = setInterval(function () {
                plusSlides(1);
                slide[slideIndex - 1].classList.remove('slideInRight');
                slide[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
        paused = false;
    }

    activateAnimation();


    slide[0].parentNode?.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
        paused = true;
    });
    slide[0].parentNode?.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;
