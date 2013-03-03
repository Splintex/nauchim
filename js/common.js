$(document).ready(function() {
	$(".btns .btn_blue").click(function(){
		if ($(this).hasClass("js-active")) {
			$(this).removeClass("js-active");
			$(this).children("ul").slideUp();
		}
		else {
			$(this).addClass("js-active");
			$(this).children("ul").slideDown();
		}
		return false;
	});
});