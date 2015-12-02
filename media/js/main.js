// TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});


// // finger down
// // swipe
// // up
// // console log

// window.querySelectorAll('load', function(){
//   var section = document.getElementsByTagName('section');
//   var hidetimer = null;
//   swipedetect(section, function(swipedir){
//     if (swipedir != 'none'){
//       clearTimeout(hidetimer);
//       var swipe = swipedir + 'swipe-icon.jpg'; // naming convention is "leftarrow.png", "rightarrow.png" etc
//       inner.style.background = 'transparent url(' + bgimage + ') center center no-repeat';
//       hidetimer = setTimeout(function(){ // reset background image after 1 second
//           inner.style.background = '';
//       }, 1000);
//     }
//   });
// }, false);

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
    window.removeEventListener("touchend", function () {window.setInterval(moveToSection, 1000);}, false);

  };
  window.addEventListener("touchstart", function () {
    window.addEventListener("touchend", function () {window.setInterval(moveToSection, 1000);}, false);
  }, false);
  
  window.addEventListener("touchmove", function () {
    console.log($(window).scrollLeft());
  }, false);
})();
