$(function() {
	$(".role li[class^=p]").mouseover(function(){
		var index = $(this).index();
		$(".role li:last").attr("class","cur"+" " + "p"+(index+1)+"_"+(index+1));
		$(".role .cotpart").hide().eq(index).show();
		$(".role li[class^=p]:gt("+index+")").each(function(i) {
			$(this).css({"left":(i+index)*63+559+"px"});
		});
		$(".role li[class^=p]:lt("+index+")").each(function(i){
			$(this).css({"left":i*63+"px"});
		});
	});
});