<?php
    ob_start();
    $contador;
    if(!isset($_COOKIE["visita"])){
    
        echo("Hoy es la primera visita del dia");

        setcookie("visita","1",time()+60*60*24);
    }else{
        $contador = $_COOKIE["visita"] + 1;
        setcookie("visita","$contador",time()+60*60*24);
        echo "Has visitado la pagina ". $_COOKIE["visita"] ." vez esta semana";
    }
 
    echo "<h2>2 EJERCICIO</h2>";

    if(!(isset($_COOKIE["color"]))){
        echo "<form action='' method='post'>
                    <select name='color'>
                        <option value='rojo'>Rojo</option>
                        <option value='verde'>Verde</option>
                        <option value= 'azul' >Azul</option>
                    </select>
                    <input type='submit' value= 'Enviar' name= 'enviar'>
                </form>";
    }else{
            echo "<h5>Tu color favorito es el ". $_COOKIE["color"]. "</h5>";
    }
    if(isset($_POST["enviar"])){
        if(!isset($_COOKIE["color"])){
            setcookie("color", $_POST["color"], time()+120*120);
            echo "<h5>Tu color favorito es el ". $_POST["color"]. "</h5>";

        }
    }
    echo "<h2>3 EJERCICIO</h2>";
    $nombre = "";
    
    if(isset($_POST["enviar2"])){

        if(isset($_POST["recordar"])){
            setcookie("nombre",$_POST["nombre"],time()+3600);
            $nombre = $_POST["nombre"];
        }
    }
    if(isset($_COOKIE["nombre"]) && $nombre == ""){
        $nombre = $_COOKIE["nombre"];

    }
    
    echo "<form action='' method='post'>
            <input type='text' name='nombre' value='$nombre' placeholder='Nombre'>
            <input type='password'placeholder='Contraseña'>
            <input type='checkbox' name='recordar'>Recordar
            <input type='submit' name='enviar2'>
          </form>";

    ob_end_flush();
?>



