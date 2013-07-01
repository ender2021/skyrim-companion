$(function() {
    //iScroll initialization
    var theScroll;
    function scroll(){
        theScroll = new iScroll('wrapper');
    }
    document.addEventListener('DOMContentLoaded', scroll, false);

    //flexslider initialization
    sliderInit();

    //bind viewmodel
    bindModel();
});

function sliderInit()
{
    $('.flexslider').flexslider({
        touch: false,
        manualControls: '#tab-bar li',
        controlsContainer: '.flex-controls',
        directionNav: false,
        animation: 'slide',
        slideshow: false
    });
}

function bindModel() {
    var model = new SkyrimCompanionViewModel();

    model.initialize(function() {
        ko.applyBindings(model);
    });
}