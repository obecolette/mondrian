(function() {

	// $.fn.scrollEnd = function(callback, timeout) {
	// 	$(this).scroll(function(){
	// 		var $this = $(this);
	// 		if ($this.data('scrollTimeout')) {
	// 			clearTimeout($this.data('scrollTimeout'));
	// 		}
	// 		$this.data('scrollTimeout', setTimeout(callback,timeout));
	// 	});
	// };

	// $(window).bind('touchstart', function (e) {

	// 	e.preventDefault();
	// 	var initialScrollSection = Math.round($(window).scrollLeft()/900);
	// 	console.log('touch start');

	// 	pageSwipe(initialScrollSection);
	// 	// waitForTouchEnd();
	// });

	// var pageSwipe = function(startSection) {
	// 	$window.bind('touchMove', function (e) {
	// 		e.preventDefault();
	// 		console.log(e);
	// 	});
	// };

	// var waitForTouchEnd = function () {
	// 	$(window).scrollEnd( function (innerEvent) {


	// 			// console.log("scrollSection: " + scrollSection);

	// 			var touchStop = window.setTimeout(function () {

	// 			var scrollSection = Math.round($(window).scrollLeft()/900);

	// 			var storedOffset = $('body > section:eq(' + scrollSection + ')').offset();

	// 			TweenMax.to($(window), 0.5, {scrollTo: {x: storedOffset.left} });

	// 		}, 500);

	// 	});
	// };

	// document.hammer().bind('pan', function (e) {
	// 	console.log('panning');
	// });

	// $('body > section').hammer().bind('pan', function () {
	// 	console.log('pan')
	// });


$('body > section').hammer()
    .data('hammer')
    .get('pan')
    .set({ direction: Hammer.DIRECTION_HORIZONTAL });

	var pageLoad = function ($toPage, $fromPage) {

		var $prevPage = $fromPage || $('body > section:eq(' + Math.round($(window).scrollLeft()/900) + ')');
		var $nextPage = $toPage || $('body > section:eq(0)');

		console.log($prevPage, $nextPage);

		var pageTimeline = new TimelineMax({repeat: 1});

		$.each( $prevPage.children('.box'), function(index, $box) {

			var box_tl = new TimelineMax();

			var leftRand = Math.random() * 100;
			var topRand = Math.random() * 100;

			box_tl.fromTo($box, 3, {left: 0, top: 0, opacity: 100}, {left: leftRand*10-500+'%', top: topRand*10-500+'%' });
			if ($prevPage.selector != $nextPage.selector) {
				box_tl.to($box, 1, {opacity: 0});
			}

		});


		$.each( $nextPage.children('.box'), function(index, $box) {

			var box_tl = new TimelineMax();

			var leftRand = Math.random() * 100;
			var topRand = Math.random() * 100;

			box_tl.fromTo($box, 2, {left: leftRand*10-500+'%', top: topRand*10-500+'%', opacity: 100 }, {left: 0, top: 0, opacity: 100});

		});
	};
	pageLoad();



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

$('div .exit').click(function () {
  console.log("exit");
});

$('div .click-to-paris').click(function () {
  console.log("paris");
});

$('div .click-to-london').click(function () {
  console.log("london");
});

$('div .click-to-ny').click(function () {
  console.log("ny");
});

$('div .click-to-create').click(function () {
  console.log("create");
});

$('div .click-next').click(function () {
  console.log("next");
});
