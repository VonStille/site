let offset = 0;
const sliderLine = document.querySelector('.slider-jq__content');

document.querySelector('.slider-jq__next').addEventListener('click', function () {
    offset = offset + 370;
    if (offset > 1400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-jq__prev').addEventListener('click', function () {
    offset = offset - 370;
    if (offset < 0) {
        offset = 1110;
    }
    sliderLine.style.left = -offset + 'px';
});