<?php
    // Ejercicio 5.1
    // Pide una frase y una palabra.
    // Muestra si la palabra existe dentro de la frase y cuántas veces aparece.
    echo "<h1>1 Ejercicio</h1>";
    $frase = "La vida es bella y la vida es dura";
    $palabra = "vida";

    $posicionP = strpos($frase, "vida");
    $posicionU = strrpos($frase, "vida");
    $cantidad = substr_count($frase, $palabra);
    if($cantidad != 0){
        if($cantidad > 1){
            echo "Existe, la primera en la posicion $posicion y la útima en la posicion $posicionU aparece $cantidad veces<br>";
        }else 
                echo "Existe, la primera en la posicion $posicion y aparece $cantidad veces <br>";

    }
?>
<?php
    // Ejercicio 5.2
    // Muestra:
    // La primera posición donde aparece "Batman"
    // La última posición
    // Cuántas veces aparece
    // El texto que hay después de la primera coma
    echo "<h1>2 Ejercicio</h1>";
    $texto = "Batman y Superman son héroes, pero Batman mol mol.";

    $primera = strpos($texto, "Batman");
    echo "Primera posición donde aparece batman $primera <br>";

    $ultima = strrpos($texto , "Batman");
    echo "Ultima posición donde aparece batman $ultima <br>";

    $veces = substr_count($texto,"Batman");
    echo "Veces que aparece batman $veces <br>";

    $despues = substr($texto, strpos($texto, ",")+1);
    echo "Texto después de la , $despues <br>";
?>
<?php
    echo "<h1>3 Ejercicio</h1>";

    // Ejercicio 5.3
    // Dado un email, comprueba si es válido:
    // Tiene que tener @
    // Tiene que contener .
    // El @ no puede estar al principio
    // El . no puede estar al final

    $email = "rubensanan@gmail.com";
    if(substr_count($email, "@")!=0 && substr_count($email, ".")!=0){
        if(strpos($email, "@") != 0){
            if(strrpos($email,".")!= strlen($email)-1){
                echo "Email valido";
            }else{
                echo "El . no puede estar en el último carácter";
            }
        }else{
            echo "No valido, el @ no puede estar en la 1 posicion";

        }
    }else{
        echo "No valido, tiene que tener punto y @";
    }
?>
<?php
    echo "<h1>4 Ejercicio</h1>";
    /* Ejercicio 6.1
    Convierte la siguiente línea en un array y muestra cada parte en una lista <ul>:
    $frase = "Thor-IronMan-Hulk-CapitanAmerica";
    */
    $frase = "Thor-IronMan-Hulk-CapitanAmerica";
    $fraseSeparada = explode("-", $frase);
    echo "<ul>";
    foreach ($fraseSeparada as $palabra) {
       echo "<li>$palabra</li>";
    }
    echo "</ul>";

?>
<?php
    echo "<h1>5 Ejercicio</h1>";
    /*
        Ejercicio 6.2
        Dado el array:
        $nombres = ["Ana", "Luis", "Carlos", "Marta"];
        Convierte el array en una cadena con formato:
        Ana | Luis | Carlos | Marta
    */
    $nombres = ["Ana", "Luis", "Carlos", "Marta"];
    $nombreUnido = join(" | ", $nombres);
    echo $nombreUnido."<br>";
?>
<?php
    echo "<h1>6 Ejercicio</h1>";
    /*
        Ejercicio 6.3
        $frase = "Esto   tiene     demasiados   espacios";
        Con explode(" ", $frase) limpia los múltiples espacios
        Quédate solo con palabras no vacías
        Vuelve a unirlas con un solo espacio usando implode
        Resultado esperado:
        Esto tiene demasiados espacios
    */
    $frase = "Esto   tiene     demasiados   espacios";
    $fraseSeparada = explode(" ", $frase);
    foreach ($fraseSeparada as $palabra){
        if($palabra != " "){
            $palabra = "";
        }
    }
    $fraseFinal = implode(" ", $fraseSeparada);
    echo "$fraseFinal <br>";
?>
<?php
    echo "<h1>7 Ejercicio</h1>";
    /*
        Dada una cadena con instrucciones tipo:
        $codigo = "3A2B4C1D";
        Donde cada número indica cuántas veces repetir la letra siguiente.
        Imprime el resultado:
        Salida esperada:
        AAABBCCCCD
    */
    $codigo = "3A2B4C1D";
    $codigoArray = str_split($codigo,2);
    foreach($codigoArray as $letras){
        $veces = $letras[0];
        $letra = $letras[1];
        for ($i=0; $i < $veces ; $i++) { 
            echo $letra . " ";
        }
        echo "<br>";
    }
?>
<?php
    echo "<h1>8 Ejercicio</h1>";
    /*
        Dada la cadena:
        $codigo = "2A 3BC 1! 4X";
        Produce:
        AA
        BCBCBC
        !
        XXXX
    */
    $codigo = "2A 3BC 1! 4X";
    $codigoArray = explode(" ", $codigo);
    foreach($codigoArray as $linea){
        $repeticiones = $linea[0];
        $texto = substr($linea,1);
        for ($i=0; $i < $repeticiones; $i++) { 
            echo $texto;
        }
        echo "<br>";
    }
?>



















