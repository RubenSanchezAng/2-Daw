<?php
session_start();


if (isset($_POST["borrar"])) {
    $_SESSION = [];
}

if(isset($_POST["iniciar"])||isset($_POST["sacar"])||isset($_POST["boton"])){
    if (isset($_POST["sacar"])||isset($_POST["iniciar"])){
        $_SESSION["valor"] = rand(1, 4);
        $_SESSION["fallos"] = 0;
        $_SESSION["color"] = "";
        $_SESSION["aciertos"] = 0;
    }
    
    
    if (isset($_POST["boton"])) {
        $noAcertado= false;
        if ($_POST["boton"] == $_SESSION["valor"]) {
            $_SESSION["aciertos"]++;
            $noAcertado = true;
    
        }
        if ($noAcertado == false) {
            $_SESSION["fallos"]++;
        }
        echo "Aciertos: ". $_SESSION["aciertos"];
        echo "<br>";
        echo "Fallos: ". $_SESSION["fallos"];
        $_SESSION["valor"] = rand(1, 4);
    }
    
    ?>
    
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .rojo {
                width: 100px;
                height: 100px;
                background-color: red;
            }
    
            .amarillo {
                width: 100px;
                height: 100px;
                background-color: yellow;
            }
    
            .azul {
                width: 100px;
                height: 100px;
                background-color: blue;
            }
    
            .verde {
                width: 100px;
                height: 100px;
                background-color: green;
            }
        </style>
    </head>
    
    <body>
        <h2>Color aleatorio</h2>
    
        <?php
        if ($_SESSION["valor"] == 1) {
            $_SESSION["color"] = "rojo";
        }
        if ($_SESSION["valor"] == 2) {
            $_SESSION["color"] = "amarillo";
        }
        if ($_SESSION["valor"] == 3) {
            $_SESSION["color"] = "azul";
        }
        if ($_SESSION["valor"] == 4) {
            $_SESSION["color"] = "verde";
        }
    
        echo '<button class=' . $_SESSION["color"] . ' value=' . $_SESSION["valor"] . ' ></button>';
        ?>
    
    
        <br>
        <form method="post">
            <button class="rojo" value="1" name="boton"></button>
            <button class="amarillo" value="2" name="boton"></button>
            <button class="azul" value="3" name="boton"></button>
            <button class="verde" value="4" name="boton"></button>
            <br>
            <button name="sacar" value="sacarColor">Sacar un color</button>
        </form>
    
        <form method="post">
            <button type="submit" name="borrar">Borrar</button>
        </form>
    
    
    </body>
    
    </html>
    <?php
}else{
    ?>
    <form action="" method="post">
        <button name="iniciar">Iniciar</button>
    </form>
    <?php
}