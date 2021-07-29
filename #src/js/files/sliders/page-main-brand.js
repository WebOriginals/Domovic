if(document.querySelector('.brand-body__sleder')) {
    let brand = new Swiper('.brand-body__sleder', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,

        navigation: {
            nextEl: '.brand-body-btn-n',
            prevEl: '.brand-body-btn-l',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1022: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1268: {
                slidesPerView: 5,
                spaceBetween: 30,
                watchOverflow: true,
            },
        },

        on: {
            lazyImageReady: function () {
                ibg();
            },
        }
    });
};


