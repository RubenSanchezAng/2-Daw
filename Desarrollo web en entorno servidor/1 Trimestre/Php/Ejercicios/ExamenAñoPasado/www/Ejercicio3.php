<?php
session_start();

if (isset($_POST["empezar"]) || isset($_POST["numeros"])) {

    $premio = 1000;


    //Empezamos creando las sesiones que necesitaremos
    if (isset($_POST["empezar"])) {
        $_SESSION["numerosP"] = [];
        $_SESSION["premio"] = 0;
        $_SESSION["aciertos"] = 0;
        $_SESSION["turnos"] = 5;
        for ($i = 0; $i < 5; $i++) {
            $_SESSION["numerosP"][$i] = rand(0, 15);
        }
    }

    if (isset($_POST["numeros"])) {
        for ($i = 0; $i < 5; $i++) {
            if ($_POST["numeros"] == $_SESSION["numerosP"][$i]) {
                $_SESSION["aciertos"]++;
                $_SESSION["premio"]+=$premio;
            }
        }
        $_SESSION["turnos"]--;
    }


    ?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        <?php
        echo "<h1>Numeros premiados</h1>";
        for ($i = 0; $i < 5; $i++) {
            echo $_SESSION["numerosP"][$i];
            echo " ";
        }
        echo "<p>PREMIOS ACUMULADOS: ".$_SESSION["aciertos"]."</p>";

        echo "<p>TIRADAS: ".$_SESSION["turnos"]."</p>";


        if($_SESSION["turnos"]==0||$_SESSION["aciertos"]==5){
            echo "La partida ha terminado. <br>";
            echo "Has obtenido un total de: ".$_SESSION['premio']." en euros";
            echo "<br>";
            echo "<form method='post'>
            <button type='submit' name='empezar'>
                Reiniciar
            </button>
        </form>";
            
        }


        ?>




        <form method="post">
            <?php

            for ($i = 0; $i < 16; $i++) {
                if ($i % 4 == 0) {
                    echo "<br>";
                }
                echo "<button type='submit' value='$i' name='numeros'>$i</button>";

            }
} else {
    ?>
        </form>

        <form method="post">
            <button type="submit" name="empezar">
                Jugar
            </button>
        </form>


        <?php
}
?>

</body>

</html>