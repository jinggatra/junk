<?php
	$mysqli = mysqli_connect('localhost', 'root', '', 'koperasi');
	
	if($mysqli){
		echo "Sudah konek";
	}else{
		echo "belum konek";
	}
?>

<!-- a
php  
$server = "localhost";
$user = "root";
$password = "";
$nama_database = "koperasi";
$connect = mysqli_connect($server, $user, $password, $nama_database);
?>
a -->