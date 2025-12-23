<?php
include "conexion.php";
if(isset($_POST["guardar"])){
    if($_POST["contrasena"] == $_POST["repetirContrasena"]){
        $nombre = $_POST["nombre"];
        $email = $_POST["email"];
        $contrasena = password_hash($_POST["contrasena"],PASSWORD_DEFAULT);
        $rol = $_POST["rol"];

        $sql = "INSERT INTO encriptacion(nombre, email, contrasena, rol) VALUES(:nombre, :email, :contrasena, :rol)";
        $sentencia = $conexion->prepare($sql);
        $sentencia->bindParam(":nombre", $nombre);
        $sentencia->bindParam(":email", $email);
        $sentencia->bindParam(":contrasena", $contrasena);
        $sentencia->bindParam(":rol", $rol);
        $sentencia->execute();
        echo "Añadido correctamente los datos";
    }else{
        echo "<h1>No se ha podido guardar porque las contraseñas no son iguales</h1>";
    }
}
if(isset($_POST["iniciar"])){
    $sql = "select * from encriptacion WHERE nombre = :nombre";

    $sentencia = $conexion -> prepare($sql);
    $sentencia->bindParam(":nombre", $_POST["nombre"]);
    $sentencia -> setFetchMode(PDO::FETCH_ASSOC);
    $sentencia-> execute();
    
    $fila = $sentencia-> fetch();

    if(password_verify($_POST['contrasena'], $fila["contrasena"])) {
        echo "<h1>Hola ".$fila["nombre"] . " tu rol es ". $fila["rol"]."</h1>";
    } else {
        echo"<h1>Usuario o contraseña incorrectos</h1>";
    }
        }
    
    

?>
<form action="" method="post">
    <input type="text" name="nombre" id="" placeholder="nombre"><br>
    <input type="email" name="email" id="" placeholder="email"><br>
    <input type="password" name="contrasena" id="" placeholder="contrasena"><br>
    <input type="password" name="repetirContrasena" id="" placeholder="Repetir contraseña"><br>
    <input type="text" name="rol" id="" placeholder="rol"><br>
    <button type="submit" value = "0" name="guardar">guardar</button><br>
</form>
<form action="" method="post">
    <input type="text" name="nombre" id="" placeholder="nombre"><br>
    <input type="password" name="contrasena" id="" placeholder="contrasena"><br>
    <button type="submit" value = "0" name="iniciar">Iniciar Sesion</button><br>
</form>