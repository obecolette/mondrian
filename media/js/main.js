
$(document).ready(function(){
	
	var $currentPage = null;

	var goToPage = function ($newPage) {

		// animate out of $currentPage
		// animate into $newPage
		// set $currentPage = $newPage

		// here's the most basic version of the animation
		if ($currentPage) $currentPage.css("z-index", 10).fadeOut(1000);
		$newPage.css("z-index", 9).show();
		$currentPage = $newPage;


		

		/*
		$.each( $prevPage.find('.box'), function(index, $box) {

			var box_tl = new TimelineMax();

			var leftRand = Math.random() * 100;
			var topRand = Math.random() * 100;

			box_tl.fromTo($box, 3, {left: 0, top: 0, opacity: 100}, {left: leftRand*10-500+'%', top: topRand*10-500+'%' });
			if ($prevPage.selector != $nextPage.selector) {
				box_tl.to($box, 1, {opacity: 0});
			}

		});


		$.each( $nextPage.find('.box'), function(index, $box) {

			var box_tl = new TimelineMax();

			var leftRand = Math.random() * 100;
			var topRand = Math.random() * 100;

			//box_tl.to($(window), 1, {scrollTo: {x: $nextPage.offset().left} }).fromTo($box, 1, {left: leftRand*10-500+'%', top: topRand*10-500+'%', opacity: 100 }, {left: 0, top: 0, opacity: 100});

		});
		*/
	};


	goToPage( $("section").first() )

	$('body').hammer().on('swipeleft', function (e) {

		console.log("next page");
		
		if ( $currentPage.next().length != 0 ) {
			goToPage( $currentPage.next() );
		} else {
			goToPage( $("section").first() );
		}

		
		
	}).on('swiperight', function (e) {
		
		console.log("prev page");

		if ( $currentPage.prev().length != 0 ) {
			goToPage( $currentPage.prev() );
		} else {
			goToPage( $("section").last() );
		}

		
	});



});