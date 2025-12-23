<?php
$dsn = 'mysql:dbname=dbname;host=db:3306';
$usuario = 'test';
$contrasena = 'test';

//Crear conexión
try {
    $conexion = new PDO($dsn, $usuario, $contrasena);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexión Establecida con la BD en Docker";
} catch (PDOException $e) {       //en caso de detectar un error lo muestra
    echo 'Falló la conexión: ' . $e->getMessage();
}
/*
//Insertar datos
$nombre = $_POST["nombre"] ?? "Pepito";         //si NO recibe ningún valor del POST, asigna valor por defecto "Julio"
$email = $_POST["email"] ?? "pepito@gmail.com";
$edad = $_POST["edad"] ?? "104";

$sql = "INSERT INTO miTabla(nombre, email, edad) VALUES (:nombre, :email, :edad)";

$sentencia = $conexion->prepare($sql);                //Preparas la sentencias
$sentencia->bindParam(":nombre", $nombre);            //Asignas la variable
$sentencia->bindParam(":email", $email);
$sentencia->bindParam(":edad", $edad);
$isOk = $sentencia->execute();                        // ejecuta la sentencia y devuelve comprobación que todo es ok

$idGenerado = $conexion->lastInsertId();      //devuelve el último campo en miTabla
echo $idGenerado;
*/


//Cargar datos array
/*
  $sql = "select * from miTabla";

    $sentencia = $conexion -> prepare($sql);
    //Para que devuelva los datos
    $sentencia -> setFetchMode(PDO::FETCH_ASSOC);
    $sentencia -> execute();

    //fetch es cada fila de la tabla
    while($fila = $sentencia -> fetch()){      //vamos recorriendo fila a fila
        echo "Id:" . $fila["id"] . "<br />";
        echo "Nombre:" . $fila["nombre"] . "<br />";
        echo "Email:" . $fila["email"] . "<br />";
        echo "Edad:" . $fila["edad"] . "<br />";
    }

*/
//Cargar datos objeto

 $sql="SELECT * FROM miTabla";

    $sentencia = $conexion -> prepare($sql);
    $sentencia -> setFetchMode(PDO::FETCH_OBJ);
    $sentencia -> execute();

    while($t = $sentencia -> fetch()) {
        echo"id:" . $t -> id . "<br />";
        echo"Nombre:" . $t -> nombre . "<br />";
        echo"Teléfono:" . $t -> email . "<br />";
    }
 
    //Obteber solo los datos de el id 1
    $id = 1;
    $sql="SELECT * FROM miTabla WHERE id=:id";

        $sentencia = $conexion->prepare($sql);
        $sentencia->bindParam(':id', $id);
        $sentencia->setFetchMode(PDO::FETCH_ASSOC);
        $sentencia->execute(); 

        $fila= $sentencia->fetch();
        print_r($fila);

    //Borrar

    $identificador = $_GET["id"] ?? 1;              //si No recibe ningún valor del $_GET asigna 0.

    $sql = "DELETE FROM miTabla WHERE id = :idValor";

    $sentencia = $conexion->prepare($sql);    
    $sentencia->bindParam(":idValor", $identificador);  //asocia el $identicador a :idValor
    $isOk = $sentencia->execute();                      //borra los valores

    $cantidadAfectada = $sentencia->rowCount();  //Devuelve el número de filas afectadas por la última sentencia SQL
    echo $cantidadAfectada;

    //Actualizar
    $id = $_GET["id"] ?? 2;                 //los valores que queremos cambiar
    $email = "nuevo@email.com";

    $sql = "UPDATE miTabla SET email=:email WHERE id=:id";   

    $sentencia = $conexion->prepare($sql);
    $sentencia->bindParam(':id', $id);
    $sentencia->bindParam(':email',$email);
    $sentencia->execute();       //borra los valores

    $cantidadAfectada = $sentencia->rowCount(); //Devuelve el número de filas afectadas por la última sentencia SQL
    echo $cantidadAfectada;

//$conexion = null;    //cierra conexión
?>