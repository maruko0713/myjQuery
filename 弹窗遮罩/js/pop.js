$(function(){
	var $window = $(window);
	var $login = $("#login");
	var $mask = $(".mask");
    var $btn = $("#btn");
    var $close = $(".close");
    $login.css({top:($window.height()-$login.height())/2,left:($window.width()-$login.width())/2});
    $btn.click(function(){
    	$login.show();
    	$mask.show();
    });
    $close.click(function(){
    	$login.hide();
    	$mask.hide();
    });

});