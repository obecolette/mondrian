(function() {
  // window.addEventListener("touchend", scrollToSection, false);
  // var scrollToSection = function (e) {
  //   window.setInterval(scrollCallback, 1);
  // };

  // var scrollCallback = function () {
  //   console.log("interval ended");
  // };
  var moveToSection = function () {
    var scrollSection = $(window).scrollLeft()/900;
    console.log("scrollSection: " + scrollSection);
    TweenMax.to($(window), 0.5, {scrollTo: {x: Math.round(scrollSection)*900 + "px"} });
    window.removeEventListener("touchend", function () {window.setTimeout(moveToSection, 1000);}, false);

  };
  window.addEventListener("touchstart", function () {
    window.addEventListener("touchend", function () {window.setTimeout(moveToSection, 1000);}, false);
  }, false);

  window.addEventListener("touchmove", function () {
    console.log($(window).scrollLeft());
  }, false);
})();
