$(function () {
    $('.menu__burger').click(function () {
        $('.menu__list').toggleClass('show-menu')
        $('body').toggleClass('fixed-page');
    })
});
$(function () {
    $('.menu__burger_hide').click(function () {
        $('.menu__list').removeClass('show-menu')
        $('body').removeClass('fixed-page');
    })
});