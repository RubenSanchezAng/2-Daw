<?php
session_start();
?>

<h2>ya estamos en el final</h2>

<?php
echo "El usuario : ".$_SESSION['id_usuario'];
echo "<br>";
echo "El apellido: ".$_SESSION['id_apellido'];

?>

<a href="./borrar.php">Vamos a borrar algunas variables sesión</a>
