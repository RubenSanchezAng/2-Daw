<?php
ob_start();

if(isset($_POST["enviar"])){
    if(isset($_POST["recordar"])){
        setcookie("nombre", $_POST["nombre"], time()+ 60);
         header("Location: ./practica2.php");
    }
}

?>

<form action="" method= "post">
    <input type="text" name="nombre" value= "<?php if(isset($_COOKIE['nombre']))echo $_COOKIE['nombre'] ?>">
    <input type="checkbox" name="recordar" id=""> Recordar
    <input type="submit" name="enviar">
</form>
