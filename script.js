$(window).scroll(function () {
	var winHeight = $(window).height();
	var docHeight = $(document).height();
	var scrollTop = $(window).scrollTop();
	var trackLength = docHeight - winHeight;
	var scrollAmount = scrollTop / trackLength;

	var windowWidth = $(window).width();

	// $('#scrollbar').css('width', windowWidth * scrollAmount);
	// $('#scrollbar').css('top', scrollTop);
});
