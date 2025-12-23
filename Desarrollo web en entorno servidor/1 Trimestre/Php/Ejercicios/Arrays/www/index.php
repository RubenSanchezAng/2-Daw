<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-mQ93j7w4Mb9w3p9QJ0G+e0Qk9e1WZfFdF1MGxA2r9F9z9f0XlKZ0FhZf9Kx0Z0yZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Qw3D2kYz0P5F+6F5Q9G7pF6F8B9G4B6F6P5F6B9F6B9F6F6P5F6B9F6B9F6B9F6F" crossorigin="anonymous"></script>
  <style>
    #ej1 {
        width: 50%;
        border: 1px solid black;
        text-align: center;
    }
    #ej1 td{
        border: 1px solid black;
    }
    #ej3{
        width: 270px;
        height: 270px;
    }
    #ej5 {
        width: 270px;
        border: 1px solid black;
        text-align: center;
    }
    #ej5 td{
        border: 1px solid black;
    }
    #ej9 {
        width: 270px;
        border: 1px solid black;
        text-align: center;
    }
    #ej9 td{
        border: 1px solid black;
    }
     .ej11 {
        width: 270px;
        border: 1px solid black;
        text-align: center;
    }
    .ej11 td{
        border: 1px solid black;
    }
    .color {
      width: 100px;
      height: 100px;
    }
  </style>
  </head>
  <body>
    <header></header>
    <main>
     <h1>Primer ejercicio</h1>
     <?php
      $nombre = "Ruben";
      $primerApellido = "Sánchez";
      $segundoApellido = "Anguix";
      $email = "rubensanan@gmail.com";
      $telefono = 674838484;
      $fechaNacimiento = "25/12/2006";
     
      echo  "<table id=\"ej1\">
        <tr>
          <th colspan=\"2\" class=\"text-center\">Datos alumno 1</th>
        </tr>
        <tr>
          <td>Nombre</td>
          <td>$nombre</td>

        </tr>
        <tr>
          <td>Apellido</td>
          <td>$primerApellido $segundoApellido; </td>
        </tr>

        <tr>
          <td>Email</td>
          <td>$email;</td>
        </tr>
        
        <tr>
          <td>Fecha de nacimiento</td>
          <td> $fechaNacimiento</td>
          <tr>

          <td>Telefono</td>
          <td>$telefono</td>
        </tr>
        </tr>

      </table> ";
    ?>

    <h1>Segundo ejercicio</h1>
    <?php
      $eu = array( "Italy"=>"Rome", "Luxembourg"=>"Luxembourg", "Belgium"=> "Brussels",
      "Denmark"=>"Copenhagen", "Finland"=>"Helsinki", "France" => "Paris", "Slovakia"=>"Bratislava", "Slovenia"=>"Ljubljana", "Germany" => "Berlin", "Greece" => "Athens", "Ireland"=>"Dublin", "Netherlands"=>"Amsterdam", "Portugal"=>"Lisbon", "Spain"=>"Madrid", "Sweden"=>"Stockholm", "United Kingdom"=>"London", "Cyprus"=>"Nicosia", "Lithuania"=>"Vilnius", "Czech Republic"=>"Prague", "Estonia"=>"Tallin", "Hungary"=>"Budapest", "Latvia"=>"Riga",
      "Malta"=>"Valetta", "Austria" => "Vienna", "Poland"=>"Warsaw") ;

      foreach($eu as $pais => $capital){
        echo "La capital de ". $pais . " es ". $capital. "<br>";
      }

    ?>

    <h1>Tercer ejercicio</h1>
    
    <?php
      echo "<table id=\"ej3\">";
      for($i = 0; $i < 9; $i++){
          echo "<tr>";
          for($j = 0; $j < 9; $j++){
              $color = (($i + $j) % 2 == 0) ? "white" : "black";
              echo "<td style='background-color: $color'>&nbsp;</td>";
          }
          echo "</tr>";
      }
      echo "</table>";
    ?>

    <h1>Cuarto ejercicio</h1>
    <?php
        $palabras = array("abcd","abc","de","hjjj","g","wer");
        $larga = $palabras[1];
        $corta= $palabras[2];
        for($i = 0; $i < count($palabras) ; $i++){
          if(strlen($palabras[$i]) > strlen($larga)){
            $larga = strlen($palabras[$i]);
          }else if(strlen($palabras[$i]) < strlen($corta)){
            $corta = strlen($palabras[$i]);

          }
        }
        echo "La palabra más corta ". $larga . "<br>";
        echo "La palabra más larga es ". $corta. "<br>";
    ?>

    <h1>Quinto ejercicio</h1>
    <?php
      echo "<table id=\"ej5\" >";
      for($i = 1 ; $i <= 10 ; $i++){
        echo "<tr>";
        $color = "white";
        $letra = "black";
        for($j = 1 ; $j <= 10 ; $j++){
          if($i == 1){
            $color = "blue";
            $letra = "white";
          }else if($j == 1){
                  $color = "red";
                  $letra = "white";

                }else{
                  $color = "white";
                  $letra = "black";
                }
          echo("<td style= 'background-color: $color; color: $letra'>". $i * $j . "</td>");
        }
        echo("</tr>");
      }
      echo "</table>";

    ?>
    <h1>Sexto y séptimo ejercicio</h1>
    <?php
      for($i = 0 ; $i < 50 ; $i++){
        $valores[]= rand (1,100);
      }
      echo "<h2>Ordenado ascendentemente</h2>";
      sort($valores);
        foreach($valores as $numero){
          echo($numero . " ");
        }
      echo "<br><h2>Ordenado descendentemente</h2>";
        rsort($valores);
        foreach($valores as $numero){
          echo($numero . " ");
        }

        echo("<h2>Media, máximo y mínimo</h2>");
        $minimo = min($valores);
        $maximo = max($valores);
        $media = array_sum($valores)/count($valores);
        echo "<p>La media es ".$media. " El mínimo es ". $minimo . " y el máximo es ". $maximo ."<br>";
    ?>
    <h1>Octavo ejercicio</h1>
    <?php
      for($i = 0 ; $i < 100 ; $i++){
        $genero[] = rand(1,2);
        if($genero[$i] == 1){
          $genero[$i] = "M";
        }else
          $genero[$i] = "F";
      }
      $resultado = array_count_values($genero);

      echo "<p>[M =>". $resultado['M'] . " F =>". $resultado['F']. "]</p>"; 
    ?>

    <h1>Noveno ejercicio</h1>
    <?php

      $personas = array(
        ['nombre'=>'Juan', 'apellido'=>'White', 'ciudad'=>'Oporto'],
        ['nombre'=>'Pedro', 'apellido'=>'Black', 'ciudad'=>'Roma'],
        ['nombre'=>'Fran', 'apellido'=>'Mena', 'ciudad'=>'Madrid'],
        ['nombre'=>'Alfredo', 'apellido'=>'Mara', 'ciudad'=>'Gotham'],
        [ 'nombre'=>'Josep', 'apellido'=>'Soler', 'ciudad'=>'Valencia']);

        echo "<table id=\"ej9\">
                <tr>
                  <th>Nombre</th>
                  <th>apellido</th> 
                  <th>ciudad</th>                  
                  <th>campos</th>
                </tr>";
        foreach($personas as $persona => $datos){
          echo "<tr>";
          echo "<td>".$datos["nombre"] ."</td>";
          echo "<td>".$datos["apellido"] ."</td>";
          echo "<td>".$datos["ciudad"] ."</td>";
          echo "<td>".count($datos) ."</td>";

          echo "</tr>";
        }
        echo "</table>"



    
    ?>

    <h1>Decimo ejercicio</h1>
    <?php
      $comunidades = array(
          array("comunidad" => "Andalucía", "provincias" => array("Córdoba" => 7223, "Huelva" => 1611, "Cádiz" => 480, "Sevilla" => 12990, "Málaga" => 16458, "Granada" => 8622, "Jaén" => 322, "Almería" => 8266)),
          array("comunidad" => "Aragón", "provincias" => array("Huesca" => 251, "Teruel" => 1633, "Zaragoza" => 2512)),
          array("comunidad" => "Asturias", "provincias" => array("Oviedo" => 256)),
          array("comunidad" => "Baleares", "provincias" => array("Baleares" => 503)),
          array("comunidad" => "Canarias", "provincias" => array("Santa Cruz de Tenerife" => 153, "Las Palmas de Gran Canaria" => 2451)),
          array("comunidad" => "Cantabria", "provincias" => array("Santander" => 6511)),
          array("comunidad" => "Castilla La-Mancha", "provincias" => array("Albacete" => 121, "Ciudad Real" => 4241, "Cuenca" => 221, "Guadalajara" => 3211, "Toledo" => 4211)),
          array("comunidad" => "Castilla y León", "provincias" => array("León" => 231, "Zamora" => 5231, "Salamanca" => 2311, "Valladolid" => 231, "Palencia" => 7621, "Ávila" => 321, "Segovia" => 251, "Burgos" => 5321, "Soria" => 1251)),
          array("comunidad" => "Cataluña", "provincias" => array("Barcelona" => 19240, "Gerona" => 11535, "Lérida" => 6052, "Tarragona" => 255)),
          array("comunidad" => "Extremadura", "provincias" => array("Cáceres" => 3405, "Badajoz" => 210)),
          array("comunidad" => "Galicia", "provincias" => array("A Coruña" => 1512, "Ourense" => 1612, "Lugo" => 1930, "Pontevedra" => 124)),
          array("comunidad" => "Madrid", "provincias" => array("Madrid" => 248000)),
          array("comunidad" => "Murcia", "provincias" => array("Murcia" => 2100)),
          array("comunidad" => "Navarra", "provincias" => array("Pamplona" => 19587)),
          array("comunidad" => "Comunidad Valenciana", "provincias" => array("Valencia" => 19587, "Alicante" => 5342, "Castellon" => 466)),
          array("comunidad" => "País Vasco", "provincias" => array("Bilbao" => 124, "San Sebastián" => 8124, "Vitoria" => 259)),
          array("comunidad" => "La Rioja", "provincias" => array("Logroño" => 1081))
          );
          foreach($comunidades as $clave => $comunidad){
            foreach($comunidad["provincias"] as $ciudad => $cantidad){
              $rayos = "green";
              $total=0;
              if($cantidad > 500){
              $rayos = "red";
              }
                echo "<p style= 'color: $rayos'> ". $ciudad. " =>". $cantidad . "</p>";
                $total  += $cantidad;
            }
          echo"<h3> ". $comunidad["comunidad"]. " =>". $cantidad . "</h3>";
      }
    ?>

    <h1>Ejercicio once</h1>
    <h2>=PAISES=</h2>
    <?php
      $continentes = array(
      array("continente"=>"Europa", "paises"=>array(array("pais"=>"España", "capital"=>"Madrid", "bandera"=>"img/espana.png"), array("pais"=>"Reino Unido", "capital"=>"Londres", "bandera"=>"img/reinounido.png"), array("pais"=>"Suecia", "capital"=>"Estocolmo", "bandera"=>"img/suecia.png"))),
      array("continente"=>"América", "paises"=>array(array("pais"=>"Perú", "capital"=>"Lima", "bandera"=>"img/peru.png"), array("pais"=>"Canadá", "capital"=>"Ottawa", "bandera"=>"img/canada.png"))),
      array("continente"=>"África", "paises"=>array(array("pais"=>"Chad", "capital"=>"Yamena", "bandera"=>"img/chad.png"), array("pais"=>"Uganda", "capital"=>"Kampala", "bandera"=>"img/uganda.png"))),
      array("continente"=>"Asia", "paises"=>array(array("pais"=>"China", "capital"=>"Pekín", "bandera"=>"img/china.png"), array("pais"=>"Japón", "capital"=>"Tokio", "bandera"=>"img/japon.png"))),
      array("continente"=>"Oceanía", "paises"=>array(array("pais"=>"Australia", "capital"=>"Canberra", "bandera"=>"img/australia.png")))
      );
      
      foreach($continentes as $continente){
        echo "<h2>".$continente["continente"] . "</h2>";
        echo "<table class=\"ej11\">
              <tr>
              <th>Pais</th>
              <th>Capital</th>
              <th>Bandera</th>
              </tr>";
          foreach($continente["paises"] as $pais){
              
              echo "<tr>";
              echo "<td>".$pais["pais"]."</td>";
              echo "<td>".$pais["capital"]."</td>";
              echo "<td><img src='../" . $pais['bandera'] . "' width='100' height='70'></td>";
              echo "</tr>";
          }
              echo "</table>";
        }
        
      
    

    ?>
    <h1>Ejercicio doce</h1>
    <h2>=PALETA COLORES=</h2>
    <?php
      echo "<table id=ej12>";
      for($i = 0; $i < 256 ; $i+=50){
          $r= str_pad(dechex($i), 2, "0", STR_PAD_LEFT);

        for($j=0; $j < 256; $j+=50){
          echo "<tr>";
          $g= str_pad(dechex($j), 2, "0", STR_PAD_LEFT);

          for($z=0; $z < 256 ; $z+=50){
              $b= str_pad(dechex($z), 2, "0", STR_PAD_LEFT);
              $hex= "#$r$g$b";
              echo "<td style='background-color:$hex'>$hex</td>";

          }
          echo "</tr>";
        }
      }
        echo "</table>";

    ?>
    <h4>Otra forma</h4>
    <?php
      echo ("<table>");
      for ($red = 0; $red <= 255; $red += 50) {
      for ($green = 0; $green <= 255; $green += 50) {
      echo ("<tr>");

      for ($blue = 0; $blue <= 255; $blue += 50) {
      $hex = "#" . dechex($red) . dechex($green) . dechex($blue);
      $rgb = "rgb(" . $red . "," . $green . "," . $blue . ")";
      echo ("<td style=\"background-color:" . $rgb . "\">" . $hex . "</td>");
      }

      echo ("</tr>");
      }
      }
    ?>
  </main>
    <footer></footer>
  </body>
</html>
