;(function($){

	$(document).ready(function(){

		$('.ba-top__slider').slick({
			dots: false,
			arrows: false,
			slide: '.ba-top__slide',
			autoplay: true,
			autoplaySpeed: 2500
		});


		var $prev = $('.ba-bottom__text-slider .slick-prev'),
			$next = $('.ba-bottom__text-slider .slick-next')

		$('.ba-bottom__slider').slick({
			slidesToShow: 3.5,
			slidesToScroll: 1,
			asNavFor: '.ba-bottom__text-slider',
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			arrows: false,
			focusOnSelect: true,
			centerMode: true,
			slide: '.ba-bottom__slide'
		});
		$('.ba-bottom__text-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.ba-bottom__slider',
			slide: '.ba-bottom__text-slide',
			prevArrow: $prev ,
			nextArrow: $next
		});



	    var $container = $('.isotope');
	    // filter buttons
	    $('#filters button').click(function(){
			var $this = $(this);
	        // don't proceed if already selected
	        if ( !$this.hasClass('is-checked') ) {
	          $this.parents('#options').find('.is-checked').removeClass('is-checked');
	          $this.addClass('is-checked');
	        }
	      var selector = $this.attr('data-filter');
	      $container.isotope({  itemSelector: '.ba-works__item', filter: selector });
	      return false;
	    });
	});


	$(window).load(function(){

		$( '.swipebox' ).swipebox();

		var mapDiv = document.getElementById("map");
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 49.592552, lng: 34.547128},
			zoom: 18,
			disableDefaultUI: true,
			scrollwheel: false
		});

		var marker = new google.maps.Marker({
			position: {lat: 49.592552, lng: 34.547128},
			map: map,
			title: 'Beetroot',
			icon: 'img/contact/marker.png'
		});



	});




		/*$('.ba-top__slider').slick({
			slide: '.ba-top__slide',
			infinite:false
		});*/


})(jQuery);
