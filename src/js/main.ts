import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";

window.addEventListener('DOMContentLoaded', () => {
    modals();

    sliders({
        slides: '.feedback-slider-item',
        dir: 'horizontal',
        prev: '.main-prev-btn',
        next: '.main-next-btn',
    });
    sliders({
        slides: '.main-slider-item',
        dir: 'vertical',
        prev: '',
        next: '',
    });
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '.styles-2')
});
