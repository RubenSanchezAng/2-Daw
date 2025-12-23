<?php
session_start();

$asignaturas = $_SESSION['asignaturas'] ?? [];
$medias = $_SESSION['medias'] ?? [];

$listaAsignaturas = "'" . implode("','", $asignaturas) . "'";
$listaNotas = implode(",", $medias);
?>

<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0"></script>
</head>
<body>

<canvas id="myChart" style="width:100%;max-width:1000px"></canvas>

<script>
// const xValues = [<?= $listaAsignaturas ?>];
// const yValues = [<?= $listaNotas ?>];
const xValues = <?= json_encode($asignaturas) ?>;
const yValues = <?= json_encode($medias) ?>;
const barColors = ['red','green'];

new Chart(document.getElementById("myChart"), {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        plugins: {
            legend: {display: false},
            title: {
                display: true,
                text: "Notas medias por asignatura"
            }
        }
    }
});
</script>

</body>
</html>
