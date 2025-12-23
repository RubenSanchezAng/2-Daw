<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-mQ93j7w4Mb9w3p9QJ0G+e0Qk9e1WZfFdF1MGxA2r9F9z9f0XlKZ0FhZf9Kx0Z0yZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Qw3D2kYz0P5F+6F5Q9G7pF6F8B9G4B6F6P5F6B9F6B9F6F6P5F6B9F6B9F6B9F6F" crossorigin="anonymous"></script>
  </head>
  <body>
    <header></header>
    <main>
    <h1>Ejercicio 1</h1>
    <h4>Forma cani de una frase</h4>
    <?php
      $frase = "escribe una código que transforme esta frase";

      for($i = 0 ; $i < strlen($frase) ; $i++){
        if($i % 2 == 0){
          //Pone en mayusculas
          $frase[$i] = strtoupper($frase[$i]);
        }else
          //Pone en minusculas
          $frase[$i] = strtolower($frase[$i]);
      }
      echo($frase);

    ?>

    <h1>Ejercicio 2</h1>
    <h4>Impares en mayusculas</h4>

    <?php
      $frase = "busco solo los impares en mayuscula";
      $mayuscula ="";
      for($i = 0 ; $i < strlen($frase); $i++){
        if($i % 2 != 0){
          $mayuscula .= strtoupper($frase[$i]);
        }
      }
      echo $mayuscula;
    ?>

    <h1>Ejercicio 3</h1>
    <h4>Devolver datos</h4>
    <?php
      $frase = "Hola me llamo juam";
      //Separar en array por " "
      $arrayPalabras = explode(" ", $frase);

      $canPalabras = str_word_count($frase);

      $totalLetras = 0;
      foreach($arrayPalabras as $palabra){
         $letrasPalabra = strlen($palabra);
         $totalLetras += $letrasPalabra;

         echo "La palabra: $palabra tiene $letrasPalabra letras <br>";
      }
      echo "La frase tiene $totalLetras letras y $canPalabras palabras";
    ?>

    <h1>Ejercicio 4</h1>
    <h4>Cantidad minusculas y total de ellas</h4>
    <?php
      $frase = strtolower("5 minusculas");

      $a = substr_count($frase, "a");
      $e = substr_count($frase, "e");
      $i = substr_count($frase, "i");
      $o = substr_count($frase, "o");
      $u = substr_count($frase, "u");

      $total = $a + $e + $i + $o +$u;

      echo "Hay $total minusculas <br>";
      echo "Hay $a a<br>";
      echo "Hay $e e<br>";
      echo "Hay $i i<br>";
      echo "Hay $o o<br>";
      echo "Hay $u u<br>";

    
    ?>

    <h1>Ejercicio 5</h1>
    <h4>Robot</h4>
    <?php
      $robot= "1 5W;1 1|2 1x1 1x2 1|;1@4 1U4 1@;1 1|2 3=2 1|;2 1\\5_1/";
      $partes = explode(";" , $robot);
      for ($i=0; $i < count($partes); $i++) { 
        
          $fragmento = $partes[$i];

        for ($j=0; $j < strlen($fragmento) ; $j+= 2) { 

          $cantidad = $fragmento[$j];

          $escritura = $fragmento[$j + 1];

          for ($z=0; $z < $cantidad; $z++) { 
            echo("&nbsp" . $escritura);
          }
        }
        echo "<br>";
      }
    ?>
    <h1>Ejercicio 6</h1>
    <h4>Numeros en miles</h4>
    <?php
     $num ="1123456789";
     $numFinal = "";
     $longitud = strlen($num);
     while($longitud > 3){
      //Subcadena (cadena a cambiar, indice inicio, numeros que coje)
       $numFinal = "." . substr($num, $longitud - 3, 3) . $numFinal;
       $num = substr($num, 0, $longitud - 3);
       $longitud -= 3;
     }
     $numFinal = $num . $numFinal;
     echo $numFinal;
    ?>
    <h1>Ejercicio 7</h1>
    <h4>Contraseña segura</h4>
    <?php
      $contraseña = "loookmok";
      $vocales = ['a', 'e', 'i', 'o', 'u'];
      $longitud = strlen($contraseña);

      if ($longitud > 6 && $longitud < 10) {
          if (strpos($contraseña, " ") === false) {
              $tieneVocal = false;
              foreach ($vocales as $vocal) {
                  if (strpos($contraseña, $vocal) !== false) {
                      $tieneVocal = true;
                  }
              }
              if ($tieneVocal) {
                  $mismaLetra = false;
                  for ($i = 0; $i < $longitud - 1; $i++) {
                      if ($contraseña[$i] == $contraseña[$i + 1] && $contraseña[$i] !== "e" && $contraseña[$i] !== "o") {
                          $mismaLetra = true;
                      }
                  }
                  if (!$mismaLetra) {
                      $consecVocales = 0;
                      $consecConsonantes = 0;
                      $tresSeguidas = false;
                      $letras = str_split(strtolower($contraseña));

                      foreach ($letras as $letra) {
                          if (in_array($letra, $vocales)) {
                              $consecVocales++;
                              $consecConsonantes = 0;
                          } else {
                              $consecConsonantes++;
                              $consecVocales = 0;
                          }
                          if ($consecVocales >= 3 || $consecConsonantes >= 3) {
                              $tresSeguidas = true;
                          }
                      }
                      if (!$tresSeguidas) {
                          echo "Contraseña guardada con éxito";
                      } else {
                          echo "No puede tener más de 3 consonantes o vocales seguidas";
                      }
                  } else {
                      echo "Tiene dos letras iguales que no son ni ee ni oo";
                  }
              } else {
                  echo "No tiene vocales";
              }
          } else {
              echo "La contraseña tiene espacios en blanco";
          }
      } else if ($longitud <= 6) {
          echo "La contraseña es muy corta";
      } else {
          echo "La contraseña es muy larga";
      }
    ?>
      <h1>Ejercicio 8</h1>
      <h4>Cifrar contraseña</h4>
    <?php
      $alfabeto = ['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','V'];
      $contraseña =  strtoupper("ABCD");
      $contraseñaCifrada = "";

      for($i = 0 ; $i < strlen($contraseña); $i++){
        $letra = $contraseña[$i];
        $posicion;
        foreach ($alfabeto as $indice => $caracter){
          if($letra == $caracter){
            $posicion = $indice;
          }
        }
        $contraseñaCifrada .= $alfabeto[($posicion + 3) % 21] ;
      }
      echo $contraseñaCifrada;

    ?>

    <h4>Descifrar contraseña</h4>
    <?php
      $alfabeto =['A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','V'];
      $contraseña =  strtoupper("ABCD");
      $contraseñaDescifrada = "";
      $posicion =0;
      for($i=0 ; $i < strlen($contraseña); $i++){
        foreach($alfabeto as $indice => $caracter){
          if($alfabeto[$indice] == $contraseña[$i]){
            $posicion = $indice;
          }
        }
        $contraseñaDescifrada .= $alfabeto[($posicion - 3 + count($alfabeto)) % count($alfabeto)];
      }
      echo "La contraseña descifrada es $contraseñaDescifrada";

    ?>
  </main>
    
    <footer></footer>
  </body>
</html>
