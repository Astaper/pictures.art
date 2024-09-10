import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import simpFilter from "./modules/simpFilter";
import pictureSize from "./modules/pictureSize";
import filter from "./modules/filter";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrollInto from "./modules/scrollIntoView";
import drop from "./modules/drop";
import scrolling from "./modules/scrolling";

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
    simpFilter();
    pictureSize('.sizes-block');
    filter();
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrollInto('.pageup');
    drop();
    scrolling('.pageup');
});


