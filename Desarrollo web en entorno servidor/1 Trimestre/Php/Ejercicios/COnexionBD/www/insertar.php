<?php
include "conexion.php";

if(isset($_POST["insertar"])){
    $nombre = $_POST["nombre"] ?? "Pepito";    
    $date = $_POST["fecha"] ?? "2006/11/22";         
    $numero = $_POST["numero"] ?? 0;

    $sql = "INSERT INTO ejercicio(nombre, fecha, numero) VALUES (:nombre, :fecha, :numero)";

    $sentencia = $conexion->prepare($sql);              
    $sentencia->bindParam(":nombre", $nombre);            
    $sentencia->bindParam(":fecha", $date);
    $sentencia->bindParam(":numero", $numero);
    $isOk = $sentencia->execute();                        

    $idGenerado = $conexion->lastInsertId();     
    echo $idGenerado;
}

?>
<form action="" method="post">
    <input type="text" name="nombre" id="nombre" placeholder="nombre"><br>
    <input type="date" name="fecha" id="fecha" placeholder="fecha"><br>
    <input type="number" name="numero" id="numero" placeholder="Numero"><br>
    <input type="submit" value="Insertar" name="insertar"><br>
</form>
<br><a href="index.php">Home</a>
