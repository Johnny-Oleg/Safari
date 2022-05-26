$(function () {
    $('.popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    })

    $('.gallery__slider').slick({
        prevArrow:
            '<button class="slick-btn slick-prev" type="button"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow:
            '<button class="slick-btn slick-next" type="button"><img src="images/arrow-right.svg" alt=""></button>',
    })

    $('.gallery__item-inner').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
        },
    })

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    })
})