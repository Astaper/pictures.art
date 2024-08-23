interface IcalcOptions {
    size: string;
    material: string;
    options: string;
    promocode: string;
    result: string;
}

const calc = ({ size, material, options, promocode, result }: IcalcOptions) => {
    const sizeBlock: HTMLInputElement | null = document.querySelector(size);
    const materilBlock: HTMLInputElement | null = document.querySelector(material);
    const optionsBlock: HTMLInputElement | null = document.querySelector(options);
    const promocodeBlock: HTMLInputElement | null = document.querySelector(promocode);
    const resultBlock: HTMLElement | null = document.querySelector(result);



    const calcFunc = () => {

        const sum = Math.round((+sizeBlock!.value) * (+materilBlock!.value) + (+optionsBlock!.value));

        if (sizeBlock?.value == '' || materilBlock?.value == '') {
            if (resultBlock) {
                resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
            }
        } else if (promocodeBlock?.value === 'IWANTPOPART') {
            if (resultBlock) {
                resultBlock.textContent = Math.round((sum * 0.7)).toString();
            }
        } else {
            if (resultBlock) {
                resultBlock.textContent = sum.toString();
            }
        }
    };

    sizeBlock?.addEventListener('change', calcFunc);
    materilBlock?.addEventListener('change', calcFunc);
    optionsBlock?.addEventListener('change', calcFunc);
    promocodeBlock?.addEventListener('input', calcFunc);
};

export default calc;
