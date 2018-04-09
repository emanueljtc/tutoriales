<?php
$conn = new mysqli('localhost','root','ema18787','vue_students');

if($conn->connect_error){
	die('Error al conectarse a la base de datos');
}