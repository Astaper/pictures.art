const mask = (selector: string) => {

    const setCursorPosition = (pos: number, elem: any) => {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            const range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    const createMask = (e: Event) => {
        const matrix = '+7 (___) ___ __ __';
        let i = 0;
        const def = matrix.replace(/\D/g, '');
        let val = (e.target as HTMLInputElement)?.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        (e.target as HTMLInputElement).value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (e.type === 'blur') {
            if ((e.target as HTMLInputElement)?.value.length === 2) {
                (e.target as HTMLInputElement).value = '';
            }
        } else {
            setCursorPosition((e.target as HTMLInputElement)?.value.length, this);
        }
    }

    const inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    })
};

export default mask;
