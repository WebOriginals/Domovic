if(document.querySelector('.first-screen-slider')) {
    let firstScreen = new Swiper('.first-screen-slider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        pagination: {
            el: '.first-screen-slider-nav__pagination',
            type: 'custom',
            clickable: true,

            renderCustom: function (bulletClass, current, total) {
                let pagination_tpl = '<span class="number-left">' + ('0' + current).slice(-2) + ' </span>';
                pagination_tpl += '<span class="nimber-right">' + '/' + ('0' + total).slice(-2) + '</span>';

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
        navigation: {
            nextEl: '.first-screen-slider-nav__next',
            prevEl: '.first-screen-slider-nav__prev',
        },
    });
};


