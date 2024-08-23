interface IcalcOptions {
    size: string;
    material: string;
    options: string;
    promocode: string;
    result: string;
}

const calc = ({size, material, options, promocode, result}: IcalcOptions) => {
    const sizeBlock = document.querySelector(size);
    const materilBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        let sum = Math.round((+sizeBlock.value) * (+materilBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materilBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materilBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;