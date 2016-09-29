$(function(){

	var imgList = {

		0 : {
			"preview" : {
				0 : "./img/0/preview/1.jpg",
				1 : "./img/0/preview/2.jpg",
				2 : "./img/0/preview/3.jpg"
			},
			"theme" : {
				0 : "url(./img/0/theme/1.jpg)",
				1 : "url(./img/0/theme/2.jpg)",
				2 : "url(./img/0/theme/3.jpg)",
			}
		},
		1 : {
			"preview" : {
				0 : "./img/1/preview/1.jpg",
				1 : "./img/1/preview/2.jpg"
			},
			"theme" : {
				0 : "url(./img/1/theme/1.jpg)",
				1 : "url(./img/1/theme/2.jpg)",
			}
		},
		2 : {
			"preview" : {
				0 : "./img/2/preview/1.jpg"
			},
			"theme" : {
				0 : "url(./img/2/theme/1.jpg)"
			}
		}

	};


	var index = 0;
	$(".tab-header li").click(function(){
		index = $(this).index();
		$(".tab-body .item").eq(index).addClass("active").siblings(".item").removeClass("active");
		$(".tab-header li").eq(index).addClass("active").siblings("li").removeClass("active");
		toggleBg();
	});

	toggleBg();

	function toggleBg () {
		$(".tab-body .item li").click(function(){
			var index2 = $(this).index();
			$("body").css( "background", imgList[index]['theme'][index2] + " center top no-repeat" );
			$(".tab-body .preview img").attr( "src", imgList[index]['preview'][index2] );
		});
	}

	

});