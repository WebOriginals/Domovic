const header = document.querySelector('.header');

window.onscroll = function () {
    if (window.pageYOffset > 200) {
        header.classList.add('stickytop');
    } else {
        header.classList.remove('stickytop');
    }
};