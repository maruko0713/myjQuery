<?php

	// echo date( "Y-m-d H:i:s" );
	if ( isset( $_GET['act'] ) && $_GET['act'] == 'q' ) {
		echo "GET方式:" .  date( "Y-m-d H:i:s" ) . '-->' . $_GET['act'] . '-->' . $_GET['name'];
	}else if ( isset( $_POST['act'] ) && $_POST['act'] == 'q' ) {
		echo "POST方式:" .  date( "Y-m-d H:i:s" ) . '-->' . $_POST['act'] . '-->' . $_POST['name'];
	}

?>