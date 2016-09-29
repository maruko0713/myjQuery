$(function(){
    $(".intro li").mousemove(function(ev){
        var p = $(this).find("p");
        var left = $(this).offset().left;
        var top = $(this).offset().top;
        var pageX = ev.pageX;
        var pageY = ev.pageY;

        p.show().css({left:(pageX-left)+50+"px",top:(pageY-top)+50+"px"});
    });
}).mouseout(function() {
        $(this).find("p").hide();
});