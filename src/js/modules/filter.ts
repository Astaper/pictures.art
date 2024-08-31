const filter = () => {
    const menu = document.querySelector('.portfolio-menu') as HTMLElement;
    const items = document.querySelectorAll('.li') as NodeListOf<HTMLElement>;
    const btnAll = document.querySelector('.all') as HTMLElement;
    const btnLovers = document.querySelector('.lovers') as HTMLElement;
    const btnChef = document.querySelector('.chef') as HTMLElement;
    const btnGirl = document.querySelector('.girl') as HTMLElement;
    const btnGuy = document.querySelector('.guy') as HTMLElement;
    const btnGrandmother = document.querySelector('.grandmother') as HTMLElement;
    const btnGranddad = document.querySelector('.granddad') as HTMLElement;
    const markAll = document.querySelectorAll('.all') as NodeListOf<HTMLElement>;
    const markGirl = document.querySelectorAll('.girl') as NodeListOf<HTMLElement>;
    const markLovers = document.querySelectorAll('.lovers') as NodeListOf<HTMLElement>;
    const markChef = document.querySelectorAll('.chef') as NodeListOf<HTMLElement>;
    const markGuy = document.querySelectorAll('.guy') as NodeListOf<HTMLElement>;
    const no = document.querySelector('.portfolio-no') as HTMLElement;

    const typeFilter = (markType: NodeListOf<HTMLElement> | null) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        if (no) {
            no.style.display = 'none';
            no.classList.remove('animated', 'fadeIn');
        }

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }

    };
    

    btnAll?.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers?.addEventListener('click', () => {
        typeFilter(markLovers);
    });
    btnChef?.addEventListener('click', () => {
        typeFilter(markChef);
    });
    btnGirl?.addEventListener('click', () => {
        typeFilter(markGirl);
    });
    btnGuy?.addEventListener('click', () => {
        typeFilter(markGuy);
    });
    btnGrandmother?.addEventListener('click', () => {
        typeFilter(null);
    });
    btnGranddad?.addEventListener('click', () => {
        typeFilter(null);
    });

    menu.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        if (target && target.tagName === 'LI')
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
    });
};

export default filter;
