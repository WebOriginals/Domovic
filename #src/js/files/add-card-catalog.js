if(document.querySelector('.catalog-body__row')) {
    if (window.screen.width <= 480) {
        const servicesElement = document.querySelectorAll('.catalog-body__row');
        const showBtnServicesElement = document.querySelector('.catalog-body__btn');
        for (let i = 0; i < servicesElement.length; i++) {
            if (i > 0) {
                servicesElement[i].classList.add('hide');
            }
        }
        showBtnServicesElement.addEventListener('click', () => {
            for (let i = 0; i < servicesElement.length; i++) {
                servicesElement[i].classList.remove('hide')
            }
            showBtnServicesElement.remove()
        })
    }
};