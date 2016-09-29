$(function(){

	$(".nav li").mouseover(function(){
		var index = $(this).index("li");
		var totalWidth = 0;
		$(".nav li:lt(" + index + ")").each(function(){
			totalWidth += $(this).width();
		});
		var curLiWidth = $(".nav li").eq(index).width();
		$(".nav .slide").css( { "width" : curLiWidth } ).stop().animate( { "left" : totalWidth }, 100, "easeInOutBounce" );
	});

	$(".nav ul").mouseout(function(){
		$(".nav .slide").stop().animate( {"left" : "0px"}, 100, "easeInOutBounce" );
	});

});