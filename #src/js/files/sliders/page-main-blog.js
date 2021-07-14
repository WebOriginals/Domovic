if(document.querySelector('.blog-body-slidr')) {
    if (window.screen.width < 1199) {
        let blog_sl = new Swiper('.blog-body-slidr', {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            navigation: {
                nextEl: '.blog-body-btn-n',
                prevEl: '.blog-body-btn-l',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1022: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });
    }
};

