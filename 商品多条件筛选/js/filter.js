$(function(){
	$("#select1 dd").click(function(){
		$(this).addClass("selected").siblings("dd").removeClass("selected");
		var $obj = $(this).clone();
		if ( $(this).hasClass("select-all") ) {
			$("#selectA").remove();
		}else {
			if ( $( ".select-result" ).find("#selectA").length > 0 ) {
				$("#selectA a").html( $(this).text() );
			}else {
				$(".select-result dl").append( $obj.attr( "id", "selectA" ) );
			}
		}
	});

	$("#select2 dd").click(function(){
		$(this).addClass("selected").siblings("dd").removeClass("selected");
		var $obj = $(this).clone();
		if ( $(this).hasClass("select-all") ) {
			$("#selectB").remove();
		}else {
			if ( $( ".select-result" ).find("#selectB").length > 0 ) {
				$("#selectB a").html( $(this).text() );
			}else {
				$(".select-result dl").append( $obj.attr( "id", "selectB" ) );
			}
		}
	});

	$("#select3 dd").click(function(){
		$(this).addClass("selected").siblings("dd").removeClass("selected");
		var $obj = $(this).clone();
		if ( $(this).hasClass("select-all") ) {
			$("#selectC").remove();
		}else {
			if ( $( ".select-result" ).find("#selectC").length > 0 ) {
				$("#selectC a").html( $(this).text() );
			}else {
				$(".select-result dl").append( $obj.attr( "id", "selectC" ) );
			}
		}
	});
 //    document.getElementById("#selectA").onclick = function(event){
	// 	event.preventDefault();
	// 	$(this).remove();
	// 	$("#select1 .select-all").addClass("selected").siblings("dd").removeClass( "selected" );
	// };
	// document.getElementById("selectA").onclick = function(event){
	// 	$(this).remove();
	// 	$("#select1 .select-all").addClass("selected").siblings("dd").removeClass( "selected" );
	// }
	$("#selectA").on("click",function(event){
		event.preventDefault();
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings("dd").removeClass( "selected" );
		return false;
	});

	$("#selectB").on( "click", function(){
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings("dd").removeClass( "selected" );
		return false;
	} );


	$("#selectC").on( "click", function(){
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings("dd").removeClass( "selected" );
		return false;
	} );

	$(".select dd").on( "click", function(){
		if ( $(".select-result dd").length > 1 ) {
			$( ".select-no" ).hide();
		}else {
			$( ".select-no" ).show();
		}
		return false;
	} );


});