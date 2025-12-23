<?php
ob_start(); 

if (isset($_COOKIE['entrada'])) {
    echo '<h1 style="color:blue">Bienvenido</h1>';
} else {
    setcookie("entrada", '1', time() + 100); 
    echo '<h1>Bienvenido</h1>';
}

if (isset($_COOKIE['valor'])) {
    $contador = $_COOKIE['valor'] + 1;
    setcookie("valor", $contador, time() + 31536000); 
    echo "Veces entrada: " . $contador;
} else {
    setcookie("valor", 1, time() + 31536000); 
    echo "Primera visita";
}

ob_end_flush();
?>