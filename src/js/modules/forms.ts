const forms = () => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;

    const message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: '/images/spinner.gif',
        ok: '/images/ok.png',
        fail: '/images/fail.png',
    };

    const postData = async (url: string, data: { [key: string]: string }) => {
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
        upload.forEach(item => {
            if (item.previousElementSibling) {
                item.previousElementSibling.textContent = "Файл не выбран";
            }
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            if (item.files && item.files[0]) {
                console.log(item.files[0]);
                const [name, extension] = item.files[0].name.split('.');
                const dots = name.length > 6 ? "..." : ".";
                const fileName = name.substring(0, 6) + dots + extension;
                if (item.previousElementSibling) {
                    item.previousElementSibling.textContent = fileName;
                }
            }
        });
    });

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

            const statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            const textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);

            const data: { [key: string]: string } = {};
            formData.forEach((value, key) => {
                if (typeof value === 'string') {
                    data[key] = value;
                }
            });

            upload.forEach(item => {
                if (item.files && item.files[0]) {
                    data[item.name] = item.files[0].name;
                }
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
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 4000);
                });
        });
    });
};

export default forms;
