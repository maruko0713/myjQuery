$(function(){
	var floorInfo = {
		0   : {
                "pos" : 1052,
                "innerText" : "服饰"
        },
        1   : {
                "pos" : 1052 + 1 * 400,
                "innerText" : "美妆"
        },
        2 : {
                "pos" : 1052 + 2 * 400,
                "innerText" : "手机"
        },
        3 : {
                "pos" : 1052 + 3 * 400,
                "innerText" : "家电"
        },
        4 : {
                "pos" : 1052 + 4 * 400,
                "innerText" : "数码"
        },
        5 : {
                "pos" : 1052 + 5 * 400,
                "innerText" : "运动"
        },
        6 : {
                "pos" : 1052 + 6 * 400,
                "innerText" : "居家"
        },
        7 : {
                "pos" : 1052 + 7 * 400,
                "innerText" : "母婴"
        },
        8 : {
                "pos" : 1052 + 8 * 400,
                "innerText" : "食品"
        },
        9 : {
                "pos" : 1052 + 9 * 400,
                "innerText" : "图书"
        },
        10 : {
                "pos" : 1052 + 10 * 400,
                "innerText" : "车品"
        },
        11 : {
                "pos" : 1052 + 11 * 400,
                "innerText" : "服务"
        }

	};

	$( ".sidebar li" ).click( function(){
		var index = $(this).index();
		$(this).children( "a" ).html( floorInfo[index]["innerText"] )
			.css( { "color" : "#f00" } )
			.end().siblings( "li" ).each( function( i ){
				$(this).children( "a" ).html( (i+1) + "F" )
					.css( { "color" : "#ff8800" } );
			} );
		$( "body" ).stop().animate( { "scrollTop" : floorInfo[index]["pos"] }, 1000, "easeOutExpo" );
	} );

	$(window).on( "scroll", function(){
		var scrollTop = $( "body" ).scrollTop();
		var curIndex = 0;
		if ( scrollTop >= 900 ) {
			$( ".sidebar" ).show();
			for ( var i in floorInfo ){
				if ( scrollTop >= floorInfo[i]["pos"] ) {
					curIndex = i;
				}else {
					break;
				}
			}

			$( ".sidebar li" ).eq(curIndex).children( "a" ).html( floorInfo[curIndex]["innerText"] )
			.css( { "color" : "#f00" } )
			.end().siblings( "li" ).each( function( i ){
				$(this).children( "a" ).html( (i+1) + "F" )
					.css( { "color" : "#ff8800" } );
			} );

		}else {
			$( ".sidebar" ).hide();
		}
	} );



});