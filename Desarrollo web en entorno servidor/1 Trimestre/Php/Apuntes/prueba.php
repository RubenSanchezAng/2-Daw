<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>PHP fácil</title>
</head>
<body>
<!-- Muestra una frase con HTML -->
 <h1>Mostrar frases</h1>

<!-- Muestra una frase con PHP -->
<?php echo "Es muy fácil programar en PHP."; ?>

<!-- Se muestra por el echo -->
<p><?php echo "Este texto se mostrará en la página web." ?></p>

<!-- No se muestra porque no se imprime -->
<p><?php /* "Este texto se mostrará en la página web." */ ?></p>

<!-- Se muestra por el print -->
<p><?php print("Este texto se mostrará en la página web.") ?></p>

<?php
$color = "rojo";

// Con interpolación de variables
echo "El plural de $color es {$color}s<br>";

// Con concatenación
echo "El plural de $color es " . $color . "s<br>";
?>
<h1>Arrays</h1>
<!--Array-->
<?php $frutas = array("naranja", "pera", "manzana");

$tam = count($frutas); // tamaño del array

for ($i=0; $i<count($frutas); $i++) {
    echo "Elemento $i: $frutas[$i] <br />";
}
?>
<h1>Recorrer Array con for y foreach</h1>

<?php
//Arrays de otra forma envez de posiciones va por variables

$array = ["marca"=>"Toyota","modelo"=>"Celica","color"=>"black","fabrica"=>"1991"];

echo "el coche es un ". $array["marca"]."<br>"; 
echo "el coche es un " . $array["marca"] . " " . $array["modelo"] . "<br>";

$array['marca']="FERRARI";
 //Como no especificas clave, PHP añade el valor al final con un índice numérico automático, 
 // en este caso [0] = "SPIDER"
$array['color']="VERDE";
$array[]="SPIDER"; 
$array[]="2013";
$array['electrico'] = "urbano";  //añade con nueva clave 'electrico' y valor 'urbano'

//Mostrar contenido de array o objeto
print_r($array);

//en cada vuelta del bucle, PHP te da una clave y su valor correspondiente.
foreach ($array as $clave => $valor) {
    echo "$clave: $valor<br>";
}

//array_keys cuenta las posciones 
//$k es la clave por ejemplo marca o modelo del coche


$keys = array_keys($array);
for ($i = 0; $i < count($keys); $i++) {
    $k = $keys[$i];
    echo "Elemento $i ($k): {$array[$k]}<br>";
}

?>
<!--Funciones del array-->
<h1>Funciones Array</h1>
<?php
$capitales = array("Italia" => "Roma","Francia" => "Paris","Portugal" => "Lisboa");

$paises = array_keys($capitales);
print_r($paises);

sort($paises);
print_r($paises);

unset($capitales["Francia"]);
print_r($capitales);

?>

<!--Array Bidimensional-->
<h1>Array Bidimensional</h1>

<?php
    $cars = array(
   "car1" => array("make" => "Toyota","colour" => "Green","year" => 1999,"engine_cc" => 1998),
   "car2" => array("make" => "BMW","colour" => "RED","year" => 2005,"engine_cc" => 2400),
   "car3" => array("make" => "Renault","colour" => "White","year" => 1993,"engine_cc" => 1395),
    );


    echo $cars['car1']['make'],"<br>";
    echo $cars['car3']['engine_cc'], "<br>";

    $menu1 = ["Plato1" => "Macarrones con queso", "Plato2" => "Pescado asado", "Bebida" => "Coca-Cola", "Postre" => "Helado de vainilla"];
    $menu2 = ["Plato1" => "Sopa", "Plato2" => "Lomo con patatas", "Bebida" => "Agua", "Postre" => "Arroz con leche"];

    $menus = [$menu1, $menu2]; // creamos un array a partir de arrays asociativos

    foreach ($menus as $menudeldia) {
    echo "Menú del día<br/>";

    foreach ($menudeldia as $platos => $comida) {
        echo "$platos: $comida <br/>";
    }
    }
    // Para acceder a un elemento concreto se anidan los corchetes
    $postre0 = $menus[0]["Postre"];
   
?>

    <h1>Cadenas</h1>
    
<?php
    //Cadenas    
    $cadena = "El caballero oscuro";
    //Devuelve la longitud
    $longitud = strlen($cadena);
    echo "La longitud de '$cadena' es: $longitud <br />";

    //Coge una subcadena
    $oscuro = substr($cadena, 13); // desde 13 al final
    $caba = substr($cadena, 3, 4); // desde 3, 4 letras
    $katman = str_replace("c", "k", $cadena);
    echo "$oscuro $caba ahora es $katman";

    //Pone todo en mayusculas
    echo "Grande ".strtoupper($cadena);

    $cadena = " Programando en PHP ";
    //Elimina espacios delante y detrás
    $limpia = trim($cadena); // "Programando en PHP"

    $frase1 = "Alfa";
    $frase2 = "Alfa";
    $frase3 = "Beta";
    $frase4 = "Alfa5";
    $frase5 = "Alfa6";
    //Compara si es igual
    var_dump( $frase1 == $frase2 ); // true
    //Compara si es igual y del mismo tipo
    var_dump( $frase1 === $frase2 ); // true
    //Compara si es igual si si pone un 0 si es menor un -1 y si es mayor un 1
    var_dump( strcmp($frase1, $frase2) ); // 0
    var_dump( $frase2 < $frase3 ); // true
    var_dump( strcmp($frase2, $frase3) ); // -1
    var_dump( strcmp($frase4, $frase5) ); // 1
    

    $frase = "Quien busca encuentra, eso dicen, a veces";
    //Devuelve la posición de la primera
    $pos1 = strpos($frase, ","); // encuentra la primera coma
    //Devuelve la posición de la última
    $pos2 = strrpos($frase, ","); // encuentra la última coma
    $trasComa = strstr($frase, ","); // ", eso dicen, a veces"
    
    $frase = "un superpoder, requiere una gran responsabilidad, dijo el tio de Spiderman";
    //Separa la cadena en array
    $partes = explode(",", $frase);

    $ciudades = ["Valencia", "Torrent", "Gandía"];
    //Une el array en una cadena
    $cadenaCiudades = implode(">", $ciudades);
?>

</body>
</html>