<?php

$objLink = new mysqli( "localhost", "root", "", "ecshop30" );
$objLink->query( "set names utf8" );

if ( isset( $_POST['province_id'] ) ) {
    $sql = "SELECT * FROM ecs_region WHERE parent_id = " . $_POST['province_id'];
    $res = $objLink->query( $sql );
    $cityList = array();
    while ( $row = $res->fetch_assoc()  ) {
        $cityList[] = $row;
    }
    die( json_encode( $cityList ) );
}else if ( isset( $_POST['city_id'] ) ) {
    $sql = "SELECT * FROM ecs_region WHERE parent_id = " . $_POST['city_id'];
    $res = $objLink->query( $sql );
    $districtList = array();
    while ( $row = $res->fetch_assoc()  ) {
        $districtList[] = $row;
    }
    die( json_encode( $districtList ) );
}