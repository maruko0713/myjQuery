<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ajax(异步刷新技术)</title>
	<script>
	//XMLHttpRequest(ajax对象)
	// function showTime() {
	// 	alert( "<?php echo date('Y-m-d H:i:s'); ?>" );
	// }

	var xmlHttp = null;
	function getXmlHttp() {
		//chrome&&FF
		if ( window.XMLHttpRequest ) {
			xmlHttp = new XMLHttpRequest();
		}else if ( window.ActiveXObject ) {
			xmlHttp = new ActiveXObject( "Microsoft.XMLHttp" );
		}
		if ( xmlHttp == null ) {
			alert( "浏览器不支持ajax对象" );
		}	
		return xmlHttp;
	}

	function showTime() {
		xmlHttp = getXmlHttp();
		// var url = "server.php?act=q&name=ghost&tid=" + Math.random();
		var url = "server.php";
		xmlHttp.onreadystatechange = function () {
			//1:   xmlHttp.open
			//2:  xmlHttp.send
			//3: 从服务器得到部分数据
			//4: 从服务器得到完整数据
			// alert( xmlHttp.readyState );	
			if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
				// alert( xmlHttp.responseText );
				document.getElementById("box").innerHTML = xmlHttp.responseText;
			}
		}
		// xmlHttp.open( "GET", url, true );
		xmlHttp.open( "POST", url, true );
		xmlHttp.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
		xmlHttp.send( "act=q&name=zhangsan" );
	}


	</script>
</head>
<body>
	<input type="button" value="获取当前时间" onclick="showTime()">
	<div id="box"></div>	
</body>
</html>