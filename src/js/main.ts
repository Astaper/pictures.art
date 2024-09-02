import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import pictureSize from "./modules/pictureSize";
import filter from "./modules/filter";

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
    showMoreStyles('.button-styles', '.styles-2');
    calc({
        size: '#size', 
        material: '#material', 
        options: '#options', 
        promocode: '.promocode',
        result: '.calc-price'
    });
    showMoreStyles('.button-styles', '#styles .row');
    pictureSize('.sizes-block');
    filter();
});
