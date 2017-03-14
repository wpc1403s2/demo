/**
 * Created by temp on 2017/2/16.
 */
$(function () {
    //browser resize,obtain window width, whether the width is greater than 768px
    function resize() {
        var windowWidth=$(window).width();
        var isSmallScreen = windowWidth < 768;
        $("#main_ad > .carousel-inner > .item").each(function (i,item) {
            var $item = $(item);
            var imgScr = isSmallScreen ? $item.data("image-xs") : $item.data("image-lg");
            $item.css("backgroundImage", 'url("' + imgScr + '")');
            if(isSmallScreen){
                $item.html('<img src="'+imgScr+'" alt=""/>')
            }else {
                $item.empty();
            }
        })
    }

    $(window).on('resize', resize).trigger('resize');
})
