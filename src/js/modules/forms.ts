import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    const hideForm = () => {
        document.querySelector('.popup_calc_end').style.display = 'none';
        document.body.style.overflow = "";
    };

    form.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            postData('https://local-qpbb.onrender.com/api/data', data)
                .then(res => {
                    statusMessage.textContent = message.succes;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        if (form.getAttribute('data-calc') === "end") {
                            hideForm();
                        }
                    }, 4000);
                });
        });
    });
};

export default forms;