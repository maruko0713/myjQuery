
// $(function(){
// 	$(".role-nav li").mouseover(function(){
// 		var index = $(this).index();
// 		$(this).addClass("cur").siblings("li").removeClass("cur");
// 		// $(".role-detail").eq(index).addClass("curElem")
// 		// 	.siblings(".role-detail").removeClass("curElem");

// 		$(".role-detail").find(".r-desc").stop().animate( {"left" : "-300px"}, 300 );
// 		$(".role-detail").find(".r-per").stop().animate( {"right" : "-600px"}, 300, function (){ 
// 			$(".role-detail").removeClass("curElem");

// 			$(".role-detail").eq(index).find(".r-desc").css({"left" : "-300px"});
// 			$(".role-detail").eq(index).find(".r-per").css({"right" : "-600px"});
// 			$(".role-detail").eq(index).addClass("curElem");
			
// 			$(".role-detail").eq(index).find(".r-desc").animate( {"left" : "29px"}, 300 );			
// 			$(".role-detail").eq(index).find(".r-per").animate( {"right" : "0px"}, 300 );			

// 		} );



// 	});
// });
$(function() {
	$("#roleTab li").mouseover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var index = $(this).index();
		$(".r-desc").stop().animate({left:"-300px"});
		$(".r-per").stop().animate({right:"-600px"},function() {
			$(".role-detail").removeClass("curElem");
			$(".role-detail").eq(index).addClass("curElem");
			$(".r-desc").eq(index).animate({left:"29px"});
			$(".r-per").eq(index).animate({right:"0px"});
		});

	});
});