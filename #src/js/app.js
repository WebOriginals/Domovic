@@include('files/animationAll.js')
$( document ).ready(function() {
    //component
    @@include('../component/Modals/js/modal.js')
    @@include('../component/dinamicAdaptiv/js/dinamicAdaptiv.js')
    @@include('../component/lazyLoad/js/lazyLoad.js')
    @@include('../component/Tabs/js/tabs.js')

    // end component

    // sliders
    @@include('files/sliders/MAIN_SLIDERS.js')
    @@include('files/sliders/page-main-first-screen.js')
    @@include('files/sliders/page-main-blog.js')
    @@include('files/sliders/page-main-brand.js')
    // end sliders


    @@include('files/menu.js')
    @@include('files/header-fix.js')
    @@include('files/animation-inputs.js')

})