<?php
/*
===========================================================
        SUBIDA DE FICHEROS EN PHP — APUNTE COMPLETO
===========================================================

Este archivo contiene:

1. Un formulario HTML para subir ficheros
2. Un script PHP que:
   - Recoge el archivo desde $_FILES
   - Verifica errores
   - Lo mueve desde la carpeta temporal al servidor
   - Muestra información útil

Todo está explicado con comentarios para entenderlo bien.
*/
?>

<!-- =======================================================
     FORMULARIO PARA SUBIR ARCHIVOS
     ======================================================= -->
<!-- 
Para subir ficheros siempre se necesita:
✔ method="POST"
✔ enctype="multipart/form-data"
-->
<form enctype="multipart/form-data" action="" method="POST">

    <!-- Tamaño máximo permitido (opcional)
         IMPORTANTE: debe ir ANTES del input file -->
    <input type="hidden" name="MAX_FILE_SIZE" value="30000" />

    <!-- El usuario elige el archivo -->
    Selecciona un fichero:  
    <input type="file" name="fichero_usuario">

    <input type="submit" value="Subir archivo">
</form>
<hr>
<?php
/* 
===========================================================
           PROCESAMIENTO DE LA SUBIDA
===========================================================

Cuando el usuario envía un archivo, PHP lo guarda
primero en una carpeta temporal. Toda la info del archivo
está en el array $_FILES.
*/

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Carpeta donde guardaremos los ficheros
    $carpetaDestino = "./";

    // Nombre del archivo original + ruta destino
    $archivoSubido = $carpetaDestino . basename($_FILES["fichero_usuario"]["name"]);

    echo "<pre>";

    /* 
    -------------------------------------------------------
                 COMPROBACIÓN DE ERRORES
    -------------------------------------------------------

    $_FILES['fichero_usuario']['error'] contiene un código:
    0 = todo correcto
    1 = excede tamaño en php.ini
    2 = excede MAX_FILE_SIZE del formulario
    3 = solo parte del archivo
    4 = no se subió archivo
    ...
    */

    if ($_FILES["fichero_usuario"]["error"] !== 0) {
        echo "Error al subir el archivo. Código: " . $_FILES["fichero_usuario"]["error"];
        echo "</pre>";
        exit;
    }

    /* 
    -------------------------------------------------------
                     MOVEMOS EL ARCHIVO
    -------------------------------------------------------

    move_uploaded_file():
      → Comprueba que el archivo fue subido por POST
      → Lo mueve desde la zona temporal al destino final
    */

    if (move_uploaded_file($_FILES["fichero_usuario"]["tmp_name"], $archivoSubido)) {
        echo "✔ El archivo se subió correctamente.\n";
    } else {
        echo "✘ ERROR: No se pudo mover el archivo.\n";
    }

    /* 
    -------------------------------------------------------
         INFORMACIÓN COMPLETA DEL ARCHIVO SUBIDO
    -------------------------------------------------------
    $_FILES['fichero_usuario'] contiene:
       - name: nombre original
       - type: tipo MIME
       - size: tamaño en bytes
       - tmp_name: ruta temporal
       - error: código error
    */

    echo "\n=== Información del archivo ===\n";
    print_r($_FILES);

    echo "</pre>";
}
?>
