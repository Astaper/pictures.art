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
};

export default accordion;
