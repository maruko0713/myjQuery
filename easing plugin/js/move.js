$(function(){
	$("#btn").click(function(){
		// $("div").eq(0).animate( { "left" : 1000 }, 3000, "easeInQuad" );
		// $("div").eq(1).animate( { "left" : 1000 }, 3000, "easeOutQuad" );
		// $("div").eq(2).animate( { "left" : 1000 }, 3000, "easeInOutQuad" );
		// $("div").eq(3).animate( { "left" : 1000 }, 3000, "easeInCubic" );
		// $("div").eq(4).animate( { "left" : 1000 }, 3000, "easeOutCubic" );
		// $("div").eq(5).animate( { "left" : 1000 }, 3000, "easeInOutCubic" );
		
		$("div").eq(0).animate( { "left" : 1000 }, 3000, "easeInOutQuart" );
		$("div").eq(1).animate( { "left" : 1000 }, 3000, "easeInOutQuint" );
		$("div").eq(2).animate( { "left" : 1000 }, 3000, "easeInOutSine" );
		$("div").eq(3).animate( { "left" : 1000 }, 3000, "easeInOutCirc" );
		$("div").eq(4).animate( { "left" : 1000 }, 3000, "easeInOutElastic" );
		$("div").eq(5).animate( { "left" : 1000 }, 3000, "easeInOutBounce" );
		$("div").eq(5).animate( { "left" : 1000 }, 3000, "easeInOutBack" );
	});
});