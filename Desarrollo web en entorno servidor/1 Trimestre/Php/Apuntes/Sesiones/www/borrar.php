<?php
session_start();

unset($_SESSION['id_usuario']);  //sólo borrará la variable de sesión "id_usuario"
//session_destroy();  // borrará todos los datos asociados a ese usuario.
//$_SESSION = array(); // Otra forma de borrar todas las variables sesión.
?>

<h2>BORRANDO VARIABLES </h2>

<?php
echo "El usuario es: ".$_SESSION['id_usuario'];
echo "<br>";
echo "El apellido es : ".$_SESSION['id_apellido'];
?>