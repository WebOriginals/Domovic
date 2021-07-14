if(document.querySelector('.goods-main-slider')) {
    let loffset = function loffset() {
        let WidthWindow = window.screen.width;
        let WidthContainer = document.querySelector('._container');
        WidthContainer = WidthContainer.offsetWidth;
        let coordinatesBeginning = 0;
        return coordinatesBeginning = (WidthWindow - WidthContainer) / 2;
    };
    let goods = new Swiper('.goods-main-slider', {
        init: false,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        slidesOffsetBefore: loffset(),
        speed: 800,
        lazy: true,
        navigation: {
            nextEl: '.goods-main-btn-n',
            prevEl: '.goods-main-btn-l',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1268: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1355: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            },
            1919: {
                slidesPerView: 4.2,
                spaceBetween: 30,
            },
            2500: {
                slidesPerView: 7,
                spaceBetween: 30,
            },

        },
    });
    goods.init();
}