let offset = 0;
const sliderLine = document.querySelector('.header__slider-line');

document.querySelector('.header__slider-next').addEventListener('click', function(){
    offset = offset + 370;
    if (offset > 1400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.header__slider-prev').addEventListener('click', function () {
    offset = offset - 370;
    if (offset < 0) {
        offset =1110;
    }
    sliderLine.style.left = -offset + 'px';
});