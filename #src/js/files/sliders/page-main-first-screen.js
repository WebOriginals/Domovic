let firstScreen = new Swiper('.first-screen-slider', {
    /*
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    //autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    pagination: {
        el: '.first-screen-slider-nav__pagination',
        type: 'custom',
        clickable: true,

        renderCustom: function (bulletClass, current, total) {
            let pagination_tpl = '<span class="number-left">' + ('0' + current).slice(-2) + ' </span>';
            pagination_tpl += '<span class="nimber-right">' + '/'+('0'+ total).slice(-2) + '</span>';

            for (let i = 1; i <= total; i++) {
                if (i == current) {
                    pagination_tpl += '<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>';
                } else {
                    pagination_tpl += '<span class="swiper-pagination-bullet"></span>';
                }
            }

            return pagination_tpl;
        },
    },
    // Arrows
    navigation: {
        nextEl: '.first-screen-slider-nav__next',
        prevEl: '.first-screen-slider-nav__prev',
    },
    /*
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    */
    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
    // And if we need scrollbar
    //scrollbar: {
    //	el: '.swiper-scrollbar',
    //},
});


