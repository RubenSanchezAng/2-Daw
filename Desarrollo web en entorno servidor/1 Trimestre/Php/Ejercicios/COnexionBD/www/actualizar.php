<?php
include "conexion.php";

if(isset($_POST["actualizar"])){
    $id = $_GET['id']  ?? 0;
    $nombre = $_POST["nombre"];
    $fecha = $_POST["fecha"];
    $numero = $_POST["numero"];

    $sql = "UPDATE ejercicio SET nombre =:nombre, fecha=:fecha, numero=:numero WHERE id=:id";

    $sentencia = $conexion->prepare($sql);
    $sentencia -> bindParam(":id", $id);
    $sentencia -> bindParam(":nombre", $nombre);
    $sentencia -> bindParam(":fecha", $fecha);
    $sentencia -> bindParam(":numero", $numero);

    $correcto = $sentencia->execute();

    $filasAfectadas = $sentencia->rowCount();
    echo $filasAfectadas;
}

?>
<form action="" method="post">
    <input type="text" name="nombre" id="nombre" placeholder="nombre"><br>
    <input type="date" name="fecha" id="fecha" placeholder="fecha"><br>
    <input type="number" name="numero" id="numero" placeholder="Numero"><br>
    <input type="submit" value="Actualizar" name="actualizar"><br>
</form>
<br><a href="index.php">Home</a>
