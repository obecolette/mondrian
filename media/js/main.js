TweenLite.to(window, 2, {scrollTo:{y:400}, ease:Power2.easeOut});


// finger down
// swipe
// up
// console log

window.querySelectorAll('load', function(){
  var section = document.getElementsByTagName('section');
  var hidetimer = null;
  swipedetect(section, function(swipedir){
    if (swipedir != 'none'){
      clearTimeout(hidetimer);
      var swipe = swipedir + 'swipe-icon.jpg'; // naming convention is "leftarrow.png", "rightarrow.png" etc
      inner.style.background = 'transparent url(' + bgimage + ') center center no-repeat';
      hidetimer = setTimeout(function(){ // reset background image after 1 second
          inner.style.background = '';
      }, 1000);
    }
  });
}, false);

(function() {
  window.addEventListener("touchend", scrollToSection, false);
  var scrollToSection = function (e) {
    window.setInterval(scrollCallback, 1);
  };

  var scrollCallback = function () {
    console.log("interval ended");
  };
})();
