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
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));
        this.remove();
    });

    interface StyleItem {
        src: string;
        title: string;
        link: string;
    }

    const createCards = (response: StyleItem[]) => {
        response.forEach((item: StyleItem) => {
            const card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${item.src}alt="style" >
                <h4>${item.title}</h4>
                <a href=${item.link}>Подробнее</a>
              </div>
            `;
            console.log(item.src);

            document.querySelector(wrapper)?.appendChild(card);
        });
    };

    // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2" >
    //     <div class=styles - block >
    //         <img src=./src/assets / img / styles - 5.jpg alt >
    //             <h4>Пастелью </h4>
    //             < a href = "#" > Подробнее </>
    //                 </div>
    //                 </div>
};

export default showMoreStyles;
