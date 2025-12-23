<?php
session_start();
?>
<form action="" method="post">
    <input type="text" name="nombre" id="">
    <input type="text" name="nota" id="">
    <input type="text" name="dni" id="">
    <input type="submit" value="Añadir" name="enviar">
    <input type="submit" value="Ver" name="ver">

</form>
<form action="grafic.php" method="post">
    <input type="submit" value="Mostrar Grafica" name="grafica">
</form>
<?php

    if(isset($_POST["enviar"])){
        $fichero = fopen("notas.csv", "a");
        fwrite($fichero, $_POST["nombre"]);
        fclose($fichero);
    }
    if(isset($_POST["ver"])){
        $fichero = fopen("notas.csv","r");
        while (!feof($fichero)) {
            $linea = trim(fgets($fichero));
            
        }
    }

?>