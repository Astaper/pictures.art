import { getResource } from "../services/requests";

const showMoreStyles = (trigger: string, wrapper: string) => {
    const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // if (btn === null) {
    //     console.error(`Элемент с селектором "${trigger}" не найден`);
    //     return;
    // }

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    // })

    btn?.addEventListener('click', function (this: HTMLElement) {
        getResource('/assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => console.log(error));
        this.remove();
    });

    interface StyleItem {
        src: string;
        title: string;
        link: string;
    }

    const createCards = (response: StyleItem[]) => {
        response.forEach(({src, title, link}) => {
            const card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style" >
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
              </div>
            `;
            
            document.querySelector(wrapper)?.appendChild(card);
        });
    };
};

export default showMoreStyles;
