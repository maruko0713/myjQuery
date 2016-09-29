$(function(){
	function initNodeList() {
		var arr = [];
		$("table tr").each(function(){
			arr.push( $(this).html() );
		});
		return arr;
	}

	function initTable( arr ) {
		$("table").html("");
		for ( var key in arr ) {
			$("table").append( "<tr>" + arr[key] + "</tr>" );
		}
	}
	var aNode = initNodeList();
	$(document).on( "click", ".up", function (){
		var $tr = $(this).parents("tr");
		var curIndex = $tr.index();
		if ( curIndex != 0 ) {
			var temp = null;
			temp = aNode[curIndex];
			aNode[curIndex] = aNode[curIndex-1];
			aNode[curIndex-1] = temp;	
			initTable( aNode );
			aNode = initNodeList();
		}
	} );

	$(document).on( "click", ".down", function (){
		var $tr = $(this).parents("tr");
		var curIndex = $tr.index();
		var len = $("table tr").length;
		if ( curIndex != len - 1 ) {
			var temp = null;
			temp = aNode[curIndex];
			aNode[curIndex] = aNode[curIndex+1];
			aNode[curIndex+1] = temp;	
			initTable( aNode );
			aNode = initNodeList();
		}
	} );


	$(document).on( "click", ".top", function (){
		var $tr = $(this).parents("tr");
		var curIndex = $tr.index();
		var temp = aNode[curIndex];
		// aNode = [ 1, 2, 3, 5 ]
		delete aNode[curIndex];
		var newNode = [];
		//newNode = [4]
		newNode.push( temp );
		for ( var key in aNode ) {
			newNode.push( aNode[key] );
		}
		initTable( newNode );
		aNode = initNodeList();
	} );
});