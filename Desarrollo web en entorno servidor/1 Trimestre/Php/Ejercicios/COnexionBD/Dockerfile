FROM php:8-apache

# Instala extensiones necesarias
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    docker-php-ext-install pdo pdo_mysql pdo_pgsql && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean
# descarga la imagen php:7.4.9, actualiza repositorios e instala librerias, borra y limpia cache


# Creamos el archivo index.php directamente dentro del contenedor
RUN echo '<?php \
$servername = "db"; \
$username   = "test"; \
$password   = "test"; \
$database   = "dbname"; \
\
try { \
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password); \
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); \
    $mensaje = "✅ Conexión a la base de datos realizada con éxito."; \
} catch(PDOException $e) { \
    $mensaje = "❌ Error de conexión: " . $e->getMessage(); \
} \
?> \
<!DOCTYPE html> \
<html lang="es"> \
<head> \
    <meta charset="UTF-8"> \
    <title>IES FUENTE SAN LUIS</title> \
    <style> \
        body { background-color: #0044cc; color: white; font-family: Arial, sans-serif; text-align: center; padding-top: 50px; } \
        h1 { font-size: 3em; } \
        p { margin-top: 20px; font-size: 1.2em; } \
    </style> \
</head> \
<body> \
    <h1>IES FUENTE SAN LUIS</h1> \
    <p><?php echo $mensaje; ?></p> \
</body> \
</html>' > /var/www/html/index.php

