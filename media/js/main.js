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

	// $(window).on('mousedown', function (e) {
	// 	e.preventDefault();
	// 	var initialScrollSection = Math.round($(window).scrollLeft()/900);
	// 	console.log('mouse down');
	// });

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

	// $('body').hammer()
	// 	.on('pan', function (e) {
	// 		console.log(e);
	// 	});

	// console.log($('body > section').data('hammer'));

	// var mc = $('body > section').hammer();

	// // let the pan gesture support all directions.
	// // this will block the vertical scrolling on a touch-device while on the element
	// mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

	// // listen to events...
	// mc.on("panleft panright panup pandown tap press", function(ev) {
	//     myElement.textContent = ev.type +" gesture detected.";
	// });

	$.widget('ui.custommouse', $.ui.mouse, {
		options: {
			mouseStart: function(e) {console.log('mouse start')},
			mouseDrag: function(e) {console.log('mouse drag')},
			mouseStop: function(e) {console.log('mouse stop')},
			mouseCapture: function(e) { return true; }
		},
		// Forward events to custom handlers
		_mouseStart: function(e) { return this.options.mouseStart(e); },
		_mouseDrag: function(e) { return this.options.mouseDrag(e); },
		_mouseStop: function(e) { return this.options.mouseStop(e); },
		_mouseCapture: function(e) { return this.options.mouseCapture(e); },
		// Bookkeeping, inspired by Draggable
		widgetEventPrefix: 'custommouse',
		_init: function() {
			return this._mouseInit();
		},
		_create: function() {
			return this.element.addClass('ui-custommouse');
		},
		_destroy: function() {
			this._mouseDestroy();
			return this.element.removeClass('ui-custommouse');
		},
	});

	$('body > section').custommouse({
		mouseStart: function(e) {
			// Handle the start of a drag-and-drop sequence here ...
			console.log('mouse start');
		},
		mouseDrag: function(e) {
			// Handle the dragging ...
			console.log('mouse drag');
		},
		mouseStop: function(e) {
			// Handle the drop ...
			console.log('mouse stop');
		},
		mouseCapture: function(e) {
			// Optional event handler: Return false here when you want to ignore a
			// drag-and-drop sequence, so the start/drag/stop events don't fire ...
			return true;
		}
	});

	$( ".selector" ).mouse( "_mouseDown" );

	$('body > section').hammer().on('pan', function (e) {
		console.log(e);
	});

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
