<?php
session_start();

$_SESSION['id_usuario']=$_POST['usuario'];
$_SESSION['id_apellido']=$_POST['apellido'];
?>

<h2> CONTINUAMOS CON LA PÁGINA WEB </h2>

<a href="./final.php">Venga que ya estamos en el final del ejemplo</a>
