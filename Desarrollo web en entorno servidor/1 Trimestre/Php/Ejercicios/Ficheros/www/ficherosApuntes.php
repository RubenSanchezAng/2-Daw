<?php
session_start();
?>
<form action=" " method="post">
    <input type="text" name="dni" placeholder="Dni"><br>
    <input type="number" name="nota" placeholder="nota media" min=0 max=10><br>
    <input type="text" name="ciclo" placeholder="ciclo del alumno"><br>

    <input type="submit" value="Añadir" name="anyadir"><br>
    <input type="submit" value="Ver fichero" name="ver"><br>
</form>

<form action="grafica.php" method="post">
    <input type="submit" value="Mostrar Gráfica" name="mostrar"><br>
</form>


<?php
    $datos = [];
    $asignaturas = [];
    $medias = [];

    if(isset($_POST["anyadir"])){  
        $fichero = fopen('notas.csv', 'a');
        fwrite($fichero, $_POST["dni"] . "," . $_POST["ciclo"] . "," . $_POST["nota"] . "\n");
        fclose($fichero);
    }

    if(isset($_POST["ver"])){
        $fichero = fopen("notas.csv", "r");
        while(!feof($fichero)){
            $linea = trim(fgets($fichero));
            if ($linea == "") continue;
            $separado = explode(",", $linea);

            if(!isset($datos[$separado[1]])){
                $datos[$separado[1]]["alumno"] = 0;
                $datos[$separado[1]]["nota"] = 0;
            }

            $datos[$separado[1]]["alumno"] += 1;
            $datos[$separado[1]]["nota"] += $separado[2];
        }
        fclose($fichero);

        foreach ($datos as $asignatura => $valor) {
            $asignaturas[] = $asignatura;
            $medias[] = round($valor["nota"] / $valor["alumno"], 2);
            if(isset($_POST["ver"]))
                echo "Asignatura: $asignatura → " . round($valor["nota"] / $valor["alumno"],2) . "<br>";
        }

        $_SESSION['asignaturas'] = $asignaturas;
        $_SESSION['medias'] = $medias;
    }

    if(isset($_POST["mostrar"])){
        $listaAsignaturas = "'" . implode("','", $asignaturas) . "'";
        $listaNotas = implode(",", $medias);

    }
?>

<!-- <!DOCTYPE html>
<html>
<script src='https://cdn.jsdelivr.net/npm/chart.js@4.5.0'></script>
<body>

<canvas id='myChart' style='width:100%;max-width:600px'></canvas>

<script>
const xValues = [<?= $listaAsignaturas ?>];
const yValues = [<?= $listaNotas ?>];
const barColors = ['red', 'green','blue','orange','brown'];

new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Notas medias por asignatura'
            }
        }
    }
});
</script>

</body>
</html> -->