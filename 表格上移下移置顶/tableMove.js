$(function(){
	var $btnUp = $(".up");
	var $btnDown  = $(".down");
	var $btnTop = $(".top");
    
    function changeTrStyle($tr) {
		$tr.addClass("active").siblings().removeClass("active");
		$tr.fadeOut().fadeIn();
    }

	$btnUp.click(function() {
		var $tr = $(this).parents("tr");
		changeTrStyle($tr);
		$tr.prev().before($tr);
	});

	$btnDown.click(function(){
		var $tr = $(this).parents("tr");
		changeTrStyle($tr);
		$tr.next().after($tr);
	});

	$btnTop.click(function(){
		var $tr = $(this).parents("tr");
		changeTrStyle($tr);
		$("table").prepend($tr);
	});
});