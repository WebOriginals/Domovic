if ($('.firstScreen-container').length > 0) {
    var FirstScreen = new Swiper('.firstScreen-container', {
        autoHeight: true,
        pagination: {
            el: '.firstScreen-pagination',
            type: 'custom',
            clickable: true,

            renderCustom: function (bulletClass, current, total) {
                var pagination_tpl = '<span class="number-left">' + ('' + current).slice(-2) + '</span>';
                    pagination_tpl += '<span class="nimber-right">' + ('/' + total).slice(-2) + '</span>';

                for (var i = 1; i <= total; i++) {
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
            nextEl: '.firstScreen-button-next',
            prevEl: '.firstScreen-button-prev',
        },
    });

}


