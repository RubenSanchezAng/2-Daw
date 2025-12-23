<?php
setcookie("jaahah", 1, time() + 10);    

setcookie("hola", 2, time() + 10);    
//time() tiempo desde que se originó unix+ 30 segundos

//Actualizar cookie
setcookie('valor', 0);
echo $_COOKIE['valor'];

//diferentes formas de borrar cookies.
setcookie("valor", 1, time() - 30);  //añadir tiempo negativo
setcookie('valor', 1, expire); 
unset($_COOKIE["valor"]);

print_r($_COOKIE);


print_r($_COOKIE['hola']);    



echo "<br>";