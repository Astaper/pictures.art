const drop = () => {

    const fileInputs = document.querySelectorAll<HTMLInputElement>('[name="upload"]');

    const preventDefaults = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const hightlight = (item: HTMLInputElement) => {
        const fileUpload: HTMLElement | null = item.closest('.file_upload');
        if (fileUpload) {
            fileUpload.style.border = "5px solid yellow";
            fileUpload.style.backgroundColor = "rgba(0,0,0, .7)";
        }
    }

    const unhightlight = (item: HTMLInputElement) => {
        const fileUpload: HTMLElement | null = item.closest('.file_upload');
        if (fileUpload) {
            fileUpload.style.border = "none";
            if (item.closest('.calc_form')) {
                fileUpload.style.backgroundColor = "#fff";
            } else {
                fileUpload.style.backgroundColor = "#ededed";
            }
        }
    }

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => hightlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhightlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            if (e.dataTransfer) {
                input.files = e.dataTransfer.files;

                const [name, extension] = input.files[0].name.split('.');
                const dots = name.length > 6 ? "..." : ".";
                const fileName = name.substring(0, 6) + dots + extension;

                if (input.previousElementSibling) {
                    input.previousElementSibling.textContent = fileName;
                }
            }
        });
    });
};

export default drop;
