$(document).ready(function() {
	


	var fullWindow = function(width, height) {
		this.width = $(".tab-wrap").css("width", width);
		this.height = $(".tab-wrap").css("height", height);

	}

	var windowWidth = $(window).innerWidth();
	var windowHeight = $(window).innerHeight();

	var tabWrap = new fullWindow(windowWidth, windowHeight);

	$(window).resize(function(event) {
		var windowWidth = $(window).innerWidth();
		var windowHeight = $(window).innerHeight();

		var tabWrap = new fullWindow(windowWidth, windowHeight);
	});


});