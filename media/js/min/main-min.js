(function() {
    var moveToSection = function() {
        var scrollSection = $(window).scrollLeft() / 900;
        console.log("scrollSection: " + scrollSection);
        TweenMax.to($(window), .5, {
            scrollTo: {
                x: Math.round(scrollSection) * 900 + "px"
            }
        });
        window.removeEventListener("touchend", function() {
            window.setInterval(moveToSection, 1e3);
        }, false);
    };
    window.addEventListener("touchstart", function() {
        window.addEventListener("touchend", function() {
            window.setInterval(moveToSection, 1e3);
        }, false);
    }, false);
    window.addEventListener("touchmove", function() {
        console.log($(window).scrollLeft());
    }, false);
})();