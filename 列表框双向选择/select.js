$(function(){
	$(".toRight").click(function(){
		$("#lSelect option:selected").each(function() {
			$(this).appendTo($("#rSelect"));
		});
	});
	$(".toLeft").click(function() {
		$("#rSelect option:selected").each(function(){
			$(this).appendTo($("#lSelect"));
		})
	});
	$(".btn").click(function(){
		var arr = [];
		$("#rSelect option").each(function(){
			arr.push($(this).text());
		});
		alert(arr);
	});
});