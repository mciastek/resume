$(document).ready(function() {
	

	// full window tab
	var fullWindow = function(width, height) {
		this.width = $(".tab-wrap").css("width", width);
		this.height = $(".tab-wrap").css("height", height);

	}
	// window size
	var windowWidth = $(window).innerWidth();
	var windowHeight = $(window).innerHeight();

	var tabWrap = new fullWindow(windowWidth, windowHeight);


	// simple scrollTo function
	function scrollTo(href) {
		$("html, body").animate({
			scrollTop: $(href).offset().top},
			"slow");

		if(href == "#skills") {
			chartInit();
		}
	}

	// navigation scrollTo
	$(".dot-item a").click(function(e) {
		e.preventDefault();

		scrollTo($(this).attr("href"));

	});

	var $tabWrap = $(".tab-wrap");
	var tabOffsetTop = [];
	var tabOffsetBottom = [];

	function addTabCoords() {

	// add .tab-wrap coords to array
		for(var i=0; i < $tabWrap.length; i++) {
			tabOffsetTop.push($tabWrap.eq(i).offset().top);
			var tabOffsetAndWidth = $tabWrap.eq(i).offset().top + $tabWrap.eq(i).outerHeight();
			tabOffsetBottom.push(tabOffsetAndWidth);
		}

	}
	addTabCoords();


	// window scroll event
	$(window).scroll(function(event) {
		// remove .active classes
		$(".dot-item").removeClass('active');

		$(".tab-wrap").each(function(index, el) {
			// window is between .tab-wrap add proper class to nav item
			if ($(window).scrollTop() >= tabOffsetTop[index] && $(window).scrollTop() < tabOffsetBottom[index]) {
				$(".dot-item").eq(index).addClass('active');
			}
		});


		// if user scroll to skills init charts
		if($(this).scrollTop() == $("#skills").offset().top) chartInit();

	});

	// add .tab-wrap ids to array
	var tabWrapIds = [];
		for(var i=0; i < $tabWrap.length; i++) {
			tabWrapIds.push($tabWrap.eq(i).attr("id"));
	}

	var move = 0;
	// navigate via up&down arrow keys
	$(window).keydown(function(event) {
		var code;
		// check for type of keycode
		if(event.keyCode) {
			code = event.keyCode;
		} else {
			code = event.which;
		}
		if(code == 38) {
			event.preventDefault();
				// if move is less than zero stop
				if(move <= 0) {
					return move;
				} else {
					move--;
				}
			scrollTo("#"+tabWrapIds[move]);
			
		}

		if(code == 40) {
			event.preventDefault();
				// if move is higher than tabWarpIds length stop
				if(move >= (tabWrapIds.length - 1)) {
					return move;
				} else {
					move++;	
				}
			scrollTo("#"+tabWrapIds[move]);
			
		}
	});



	function chartInit() {
    //create instance
	    $('.chart').easyPieChart({
	    	animate: 2000,
	    	barColor: "#e6311c",
	    	trackColor: false,
	    	scaleColor: false,
	    	lineCap: "square",
	    	lineWidth: 12
	    });
	};


// WINDOW RESIZE
$(window).resize(function(event) {

		// full window tabs
		var windowWidth = $(window).innerWidth();
		var windowHeight = $(window).innerHeight();
		var tabWrap = new fullWindow(windowWidth, windowHeight);


		// clear arrays
		tabOffsetTop.length = 0;
		tabOffsetBottom.length = 0;
		addTabCoords();
});

});