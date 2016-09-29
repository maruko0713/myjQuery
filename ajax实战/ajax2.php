<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ajax(省，市，县)三级联动</title>
    <script src="./js/jquery.min.js"></script>
    <script>
        var xmlHttp = null;
        function getXmlHttp() {
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

        function getCity( provinceId ) {
            xmlHttp = getXmlHttp();
            var url = "server2.php";
            xmlHttp.onreadystatechange = function () {
                if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
                    var city = xmlHttp.responseText;
                    //JSON2.js JSON.parse
                    var obj = eval( city );
                    var str = '';
                    for ( var i in obj ) {
                        str += "<option value='" + obj[i].region_id + "'>" + obj[i].region_name + "</option>";
                    }
                    $( "#city" ).empty().append( str );
                    $( "#city" ).triggerHandler( "change" );
                }
            }
            xmlHttp.open( "POST", url, true );
            xmlHttp.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
            xmlHttp.send( "province_id=" + provinceId );
        }

        function getDistrict( cityId ) {
            xmlHttp = getXmlHttp();
            var url = "server2.php";
            xmlHttp.onreadystatechange = function () {
                if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
                    var district = xmlHttp.responseText;
                    //JSON2.js JSON.parse
                    var obj = eval( district );
                    var str = '';
                    for ( var i in obj ) {
                        str += "<option value='" + obj[i].region_id + "'>" + obj[i].region_name + "</option>";
                    }
                    $( "#district" ).empty().append( str );
                }
            }
            xmlHttp.open( "POST", url, true );
            xmlHttp.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
            xmlHttp.send( "city_id=" + cityId );
        }

        $( function(){
            $( "#province" ).change( function(){
                var provinceId = $( "#province option:selected" ).val();
                getCity( provinceId );
            } );
            $( "#city" ).change( function(){
                var cityId = $( "#city option:selected" ).val();
                getDistrict( cityId );
            } );
        } );

    </script>
</head>
<body>
<?php
    $objLink = new mysqli( "localhost", "root", "", "ecshop30" );
    $objLink->query( "set names utf8" );

?>
    <select id="province">
        <?php
            $sql = "SELECT * FROM ecs_region WHERE parent_id = 1";
            $res = $objLink->query( $sql );
            while ( $row = $res->fetch_assoc() ) {
                ?>
                <option value="<?php echo $row['region_id']; ?>"><?php echo $row['region_name']; ?></option>
        <?php
            }
        ?>
    </select>

    <select id="city">
        <option value="">请选择城市</option>
    </select>

    <select id="district">
        <option value="">请选择地区</option>
    </select>

</body>
</html>