// import checkNumInputs from "./checkNumInputs";

const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    // checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'aseets/img/spinner.gif',
        ok: 'aseets/img/ok.png',
        fail: 'aseets/img/fail.png',
    };

    // const path = {
    //     designer: 'assets/server.php',
    //     question: 'assets/'
    // }

    const postData = async (url: string, data: any) => {
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

    // const hideForm = () => {
    //     document.querySelector('.popup_calc_end').style.display = 'none';
    //     document.body.style.overflow = "";
    // };

    form.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode?.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);
            // let api;
            // form.closest('.popup-design') ? api = path.designer : api = path.question;
            // console.log(api);

            const data: {[key: string]: any} = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            postData('https://local-qpbb.onrender.com/api/data', data)
                .then(() => {
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.succes;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    // setTimeout(() => {
                    //     statusMessage.remove();
                    //     if (form.getAttribute('data-calc') === "end") {
                    //         hideForm();
                    //     }
                    // }, 4000);
                });
        });
    });
};

export default forms;