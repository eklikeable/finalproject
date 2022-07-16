(function(window) {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        mouseDrag:false,
        touchDrag:false,
        dots: false,
        nav: true,
        responsive: {
            0: {
            items: 1
            }
        }
    });
    });
})();
