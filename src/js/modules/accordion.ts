const accordion = (triggersSelector: string) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function (this: HTMLElement) {
            this.classList.toggle('active-style');
            const nextElement = this.nextElementSibling;
            if (nextElement instanceof HTMLElement) {
                nextElement.classList.toggle('active-content');

                if (this.classList.contains('active-style')) {
                    nextElement.style.maxHeight = nextElement.scrollHeight + 80 + "px";
                } else {
                    nextElement.style.maxHeight = "0px";
                }
            }
        });
    });

    // const blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });

};

export default accordion;
