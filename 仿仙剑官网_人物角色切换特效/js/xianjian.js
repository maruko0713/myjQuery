$(function(){
    var imgs = ["img/big1.jpg","img/big2.jpg","img/big3.jpg","img/big4.jpg","img/big5.jpg","img/big6.jpg"];
    $(".role-body li").click(function() {
    	var index = $(this).index();
    	$(".role-body li").each(function(i) {
    		if(i==index) {
    			$(this).children("a").addClass("r"+(index+1)+"_"+(index+1));
                $(".role-body img").fadeOut().queue(function(next){
                	$(this).attr("src",imgs[i]);
                	next();
                }).fadeIn();

    		} else {
    			$(this).children("a").removeClass("r"+(index+1)+"_"+(index+1));
    		}
    	});
    });
});