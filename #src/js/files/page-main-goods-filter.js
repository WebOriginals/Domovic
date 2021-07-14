if(document.querySelector('.goods-main__filter')) {
    console.log(document.querySelector('.goods-main__filter'));

    let slides = document.querySelectorAll('.goods-main-slide');
    let buttons = document.querySelectorAll('.goods-filter-btn');
    let filter = document.querySelector('.goods-main__filter');

    filter.addEventListener('click', function (event) {
        let target = event.target;
        let dataElement = target.dataset.name;
        console.log(dataElement)
        if (target.classList.contains('goods-filter-btn')) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
            target.classList.add('active');
        }
        for (let slide of slides) {
            if (slide.dataset.category !== dataElement && dataElement !== 'all') {
                slide.classList.add('hide')
            } else {
                slide.classList.remove('hide')
            }
        }
    });
};