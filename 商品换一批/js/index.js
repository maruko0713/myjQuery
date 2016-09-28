$(function(){
	var i = 0;
	var ul = $(".guess-body ul");
	$(".guess-btn").click(function(){
		i++;
		if(i==ul.length){
			i=0;
		}
		ul.eq(i).addClass("active").siblings().removeClass("active");
	});
});