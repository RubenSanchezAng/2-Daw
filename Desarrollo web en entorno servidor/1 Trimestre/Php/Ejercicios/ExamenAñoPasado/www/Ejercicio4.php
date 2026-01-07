<?php
session_start();



if (isset($_POST["borrar"])) {
    $_SESSION = [];
}

if (isset($_POST["jugar"])) {
    $_SESSION["player"] = [4, 4]; 
}

if (isset($_POST["mover"])) {
    if (!isset($_SESSION["player"])) {
        $_SESSION["player"] = [4, 4];
    }

    switch ($_POST["mover"]) {
        case 1:
             $_SESSION["player"][0] = ($_SESSION["player"][0] - 1 + 9) % 9;
         break; 
        case 2: 
            $_SESSION["player"][0] = ($_SESSION["player"][0] + 1) % 9;
         break;     
        case 3:
             $_SESSION["player"][1] = ($_SESSION["player"][1] + 1) % 9; 
        break;    
        case 4:
             $_SESSION["player"][1] = ($_SESSION["player"][1] - 1 + 9) % 9; 
        break; 
    }
}
?>


    <style>
        .rojo { width: 50px; height: 50px; background: red; border: 1px solid black; }
        .blanco { width: 50px; height: 50px; background: white; border: 1px solid black; }
    </style>


<?php  
if (isset($_SESSION["player"])) {
    dibujarTabla();
?>
    <form method="post">
        <button name="mover" value="1">Arriba</button>
        <button name="mover" value="2">Abajo</button>
        <button name="mover" value="3">Derecha</button>
        <button name="mover" value="4">Izquierda</button>
    </form>

    <form method="post"><button name="jugar">Reiniciar</button></form>
    <form method="post"><button name="borrar">Borrar</button></form>

<?php
} else {
?>
    <form method="post">
        <button name="jugar">Jugar</button>
    </form>
<?php } ?>

