<?php
include "conexion.php";

?>

<br><a href="insertar.php">Crear</a>
<?php

    if((isset($_POST["borrar"]))){
        $id = $_POST["borrar"] ??  0;

        $sql = "DELETE FROM ejercicio WHERE id = :idValor";

        $sentencia = $conexion->prepare($sql);
        $sentencia->bindParam(":idValor", $id);
        $correcto = $sentencia->execute();

        $cantidadAfectada = $sentencia->rowCount();
        echo $cantidadAfectada;
    }


    $sql = "select * from ejercicio";

    $sentencia = $conexion -> prepare($sql);
    $sentencia -> setFetchMode(PDO::FETCH_ASSOC);
    $sentencia -> execute();

    $i =1;
    echo "<table>";
    echo "<tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Fecha</th>
        <th>Número</th>
        <th>Funciones</th>
    </tr>";

    while($fila = $sentencia->fetch()){   
        echo "<tr>";   
        echo "<td>" . $fila["id"] . "</td>";
        echo "<td>" . $fila["nombre"] . "</td>";
        echo "<td>" . $fila["fecha"] . "</td>";
        echo "<td>" . $fila["numero"] . "</td>";
        echo "<td>
        <form action=''method='post'>
        <button type='submit' name='borrar' value='$i'>Borrar</button>
        </form>";
        echo "<a href='actualizar.php?id={$fila['id']}'>Actualizar</a></td>";
        echo "</tr>";   
        $i++;
    }
    echo "</table>";
?>
<style>
    td{
        border: 1px solid black;
    }
    tr th{
        border: 1px solid black;
    }
</style>

