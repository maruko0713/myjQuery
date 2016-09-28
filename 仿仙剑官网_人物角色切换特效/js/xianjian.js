$(function(){
	var imgList = [ "big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg", "big5.jpg", "big6.jpg" ];
	$(".role-body li").click(function(){
		var index = $(this).index();
		$(".role-body li").each(function( i ){
			if ( index == i ) {
				$(this).children("a").addClass( "r" + (i+1) + '_' + (i+1) );
				$(".role-img img").fadeOut().attr( "src", "./img/" + imgList[i] ).fadeIn();
			}else {
				$(".role-body li").eq(i).children("a").removeClass( "r" + (i+1) + '_' + (i+1) );
			}
		});
	});
});