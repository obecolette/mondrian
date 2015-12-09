(function() {

	$.fn.scrollEnd = function(callback, timeout) {          
		$(this).scroll(function(){
			var $this = $(this);
			if ($this.data('scrollTimeout')) {
				clearTimeout($this.data('scrollTimeout'));
			}
			$this.data('scrollTimeout', setTimeout(callback,timeout));
		});
	};

	$(window).bind('touchstart', function (event) {

		waitForTouchEnd();
	});

	var waitForTouchEnd = function () {
		$(window).scrollEnd( function (innerEvent) {

			
				// console.log("scrollSection: " + scrollSection);

				var touchStop = window.setTimeout(function () {

				var scrollSection = Math.round($(window).scrollLeft()/900);

				var storedOffset = $('body > section:eq(' + scrollSection + ')').offset();

				TweenMax.to($(window), 0.5, {scrollTo: {x: storedOffset.left} });
				// $(window).unbind(innerEvent);
			}, 500);

			// $(window).bind('touchstart', function (innerInnerEvent) {
				// $(window).unbind(innerInnerEvent);
				// window.clearTimeout(touchStop);
				// $(window).unbind(innerEvent);
			// });
			
		});
	};

	// var moveToSection = function () {
	//   var scrollSection = $(window).scrollLeft()/900;
	//   console.log("scrollSection: " + scrollSection);
	//   TweenMax.to($(window), 0.5, {scrollTo: {x: Math.round(scrollSection)*900 + "px"} });
	//   window.removeEventListener("touchend");

	// };
	// window.addEventListener("touchstart", function () {
	//   window.addEventListener("touchend", function () {window.setTimeout(moveToSection, 1000);}, false);
	// }, false);

	// window.addEventListener("touchmove", function () {
	//   console.log($(window).scrollLeft());
	// }, false);
})();
