if(document.querySelector('.card-slider-big')) {
    let sliderSmall = new Swiper('.card-slider-small', {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 800,
        lazy: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 5,

            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
    let sliderBig = new Swiper('.card-slider-big', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        lazy: true,
        speed: 800,
        navigation: {
            nextEl: '.card-slider-big-nav__next',
            prevEl: '.card-slider-big-nav__pref',
        },
        thumbs: {
            swiper: sliderSmall,
        },
    });
};