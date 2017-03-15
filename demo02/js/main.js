$(function(){

	/*导航悬浮显示*/
    $(".navbar-header li").hover(
        function () {
            $(this).children('ul').show();
        },
        function () {
            $(this).children('ul').hide();
        }
    )
    // /***nav-list****/
 	// $(".nav-list").children("li").mouseenter(function()
	// {
	// 	$(this).find('ul').stop().slideDown(200);
	// }).mouseleave(function()
	// {
	// 	$(this).find('ul').stop().slideUp(200);
	// });


	/***l轮播**/
	var unslider04 = $('#b04').unslider({
		dots: true
	});
	//data04 = unslider04.data('unslider');

	/*$('.unslider-arrow04').click(function() {
	 var fn = this.className.split(' ')[1];
	 data04[fn]();
	 });*/


});

