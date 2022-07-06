import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import smoothscroll from './modules/smoothscroll';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer("28 june 2022");
menu();
modal();
smoothscroll();
validation();
tabs();
slider();
calc();
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }],
});
sendForm({
    formId: 'form2',
    someElem: [{
        type: 'block',
        id: 'total'
    }],
});
sendForm({
    formId: 'form3',
    someElem: [{
        type: 'block',
        id: 'total'
    }],
});