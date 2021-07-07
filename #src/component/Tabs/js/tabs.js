let tab = function () {
    let AllBodyTabs = document.querySelectorAll('.tabs');

    AllBodyTabs.forEach(tab=> {

        let tabNav = tab.querySelectorAll('.tabs-nav__item'),
            tabContant = tab.querySelectorAll('.tab-pane'),
            tabName;

        let selectTabContant = function() {

            tabContant.forEach(item=>{
                item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
            })
        }

        tabNav.forEach(item => {
            item.addEventListener('click', function(){

                tabNav.forEach(item=>{
                    item.classList.remove('is-active')
                });

                this.classList.add('is-active');
                tabName = this.getAttribute('data-tab-name')
                selectTabContant(tabName);
            })
        })
    });
}
tab();
