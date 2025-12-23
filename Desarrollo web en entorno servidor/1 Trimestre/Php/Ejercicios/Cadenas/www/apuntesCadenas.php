<?php
/* ==========================================
      🔤 STRINGS EN PHP — RESUMEN COMPLETO
   ========================================== */

/* ==========================================
      🟦 OPERACIONES BÁSICAS CON STRINGS
   ========================================== */

$cadena = "El caballero oscuro";

/* 2️⃣ substr — Subcadenas */
$oscuro = substr($cadena, 13);       // "oscuro"
$caba   = substr($cadena, 3, 4);     //desde la posicion 3 , 4 letras "caba"

/* 3️⃣ str_replace — Reemplazar c por k*/
$katman = str_replace("c", "k", $cadena);

/* 4️⃣ strtolower / strtoupper */
echo "En mayúsculas: " . strtoupper($cadena) . "\n";

/* ==========================================
      🔥 COMPARANDO STRINGS
   ========================================== */

$texto1 = "Alfa";
$texto2 = "Alfa";
$texto3 = "Beta";
$texto4 = "Alfa5";
$texto5 = "Alfa6";

var_dump($texto1 == $texto2);         // true (comparación normal)
var_dump($texto1 === $texto2);        // true (tipo + valor)

/* strcmp → 0 iguales, <0 menor, >0 mayor */
var_dump(strcmp($texto1, $texto2));   // 0
var_dump($texto2 < $texto3);          // true
var_dump(strcmp($texto2, $texto3));   // -1
var_dump(strcmp($texto4, $texto5));   // 1

/* strcasecmp → compara ignorando mayúsc./minúsc. */


/* ==========================================
      🔍 BUSCAR EN STRINGS
   ========================================== */

$frase = "Quien busca encuentra, eso dicen, a veces";

$primeraComa = strpos($frase, ",");   // primera coma
$ultimaComa  = strrpos($frase, ",");  // última coma

/* strstr — devuelve desde donde encuentra */
$desdeLaComa = strstr($frase, ",");   // ", eso dicen, a veces"


/* ==========================================
      🧩 TRABAJAR CON SUBCADENAS
   ========================================== */

/* 1️⃣ explode — string → array */
$fraseSpiderman = "un superpoder, requiere una gran responsabilidad, dijo el tio de Spiderman";
$partes = explode(",", $fraseSpiderman);

/* 2️⃣ implode / join — array → string */
$ciudades = ["Valencia", "Torrent", "Gandía"];
$cadenaCiudades = implode(" > ", $ciudades);

/* ---------------------------------
   🔹 substr_count — contar subcadenas
   --------------------------------- */
$fraseBatman = "Bruce Wayne es Batman";
$cantidadB = substr_count($fraseBatman, "B"); // 2

/* ---------------------------------
   🔹 substr_replace — sustituir trozos
   --------------------------------- */
$empresa = substr($fraseBatman, 6, 5); // "Wayne"

/* ==========================================
      ⚠️ STRINGS Y HTML
   ========================================== */

/* htmlentities → convierte TODOS los caracteres especiales */
echo htmlentities("á ñ < > &");

/* htmlspecialchars → solo los estrictamente especiales */
echo htmlspecialchars("<script>alert('Hola')</script>");


//Cuenta las veces que aparece cada valor en el array 
$numeros = [1, 2, 2, 3, 3, 3];
$resultado = array_count_values($numeros);
print_r($resultado);
      

//Convierte el valor decimal a hexadecimal
$hex = "#" . dechex($red) . dechex($green) . dechex($blue);

//Cuenta las palabras que hay en una frase
$frase = "Yo soy Batman";
echo str_word_count($frase); 


?>
