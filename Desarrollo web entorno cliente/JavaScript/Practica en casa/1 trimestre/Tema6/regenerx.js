
"use strict";
// https://regexr.com/
// https://regex101.com/
// guÃ­a mÃ¡s amplia -> https://www.freecodecamp.org/learn/full-stack-developer/review-javascript-regular-expressions/review-javascript-regular-expressions

/** ExpresiÃ³n regular -> describe un patrÃ³n de texto */

// modificadores 
// i 
// g
// m

/*
[abc]: cualquier carÃ¡cter de los indicados (â€˜aâ€™ o â€˜bâ€™ o â€˜câ€™)
[^abc]: cualquiera excepto los indicados
[a-z]: RANGOS cualquier minÃºscula (el carÃ¡cter â€˜-â€˜ indica el rango entre â€˜aâ€™ y â€˜zâ€™, incluidas)
[a-zA-Z]: RANGOS cualquier letra
*/

let aux;
let re ;
let msg;

// ---------- MATCH DE UNA CADENA LITERAL
re = /hola/
msg = "hola Mundo"
aux = re.test(msg) //true
//console.log(aux)

re = /hola/
msg = "que hola Mundo hola"
//console.log(re.exec(msg)) //-------

re = /hol./g
msg = "hola Mundo hole"
//console.log(msg.match(re))
//console.log(re.exec(msg))


re = /Hola/
msg = "hola Mundo"
aux = re.test(msg) //false


re = /Hola/i   // ignore case
msg = "hola Mundo"
aux = re.test(msg) //true
//console.log(aux)


// ----------- CORCHETES -> match a uno de los caracters o a uno que se encuentre en el rango


re = /[abc]/
msg = "a"
aux = re.test(msg)  // true

re = /hol[abc]/g
msg = "hola holb holcMundo hole"
aux = re.test(msg)  // true
//console.log(msg.match(re))
//console.log(re.exec(msg))

re = /[^abc]/   // ^ modificador DENTRO de corchetes -> "NO PUEDE HACER MATCH!" -> NEGACIÃ“N
msg = "a"
aux = re.test(msg) //false


// -- RANGOS
aux = /[a-z]/.test("hola"); //  contiene letras minÃºsculas
aux = /[A-Z]/.test("Hola"); //  contiene mayÃºscula
aux = /[0-9]/.test("2025"); //  contiene dÃ­gito

// rangos
aux =  /[a-zA-Z]/.test("React"); //  contiene letras
re = /[a-zA-Z0-9]/g
msg = "user123"
aux = re.test(msg); //  letras o nÃºmeros
//console.log(msg.match(re))


// -- Alternativas con | 

aux = /(html|css|js)/.test("Aprendo js");   // contiene uno de esos strings
//console.log(aux)

re = /(http|https):\/\/.+[.](es|com)/g
msg = "http://google.com\nhttps://apple.es\nhttpss://itacadocent.com"
aux = re.test("https://google.com");   // tengo que "escapar" las '/' 
console.log(aux)
console.log(re.exec(msg))
console.log(msg.match(re))


// CUANTIFICADORES 

// + 1 Ã³ mÃ¡s veces 
aux = /\d+/.test("2025");         // true  /d -> dÃ­gitos
aux = /\d+/.test("abc");          // false 

// *  0 Ã³ mÃ¡s veces 

aux = /bo*/.test("b");        //  o=0
aux = /bo*/.test("booo");     //  o=3
aux = /bo*/.test("a");        //  false

// ? â†’ 0 o 1 vez (opcional)   del carÃ¡cter que precede
aux = /colou?r/.test("color");    // true  
aux = /colou?r/.test("colour");   // true
aux = /colou?r/.test("colouur");  // false -> puede haber 0 Ã³ 1 u  antes que la r


// {n} â†’ Exactamente n veces
aux = /^\d{5}$/.test("28013");   // true
aux = /^\d{5}$/.test("123");     // false
// {n,} â†’ n o mÃ¡s veces
aux = /\d{2,}/.test("123");      //  (2 o mÃ¡s)

// {n,m} â†’ Entre n y m veces
aux = /^[a-z]{3,5}$/.test("hola");   // true
aux = /^[a-z]{3,5}$/.test("holaaa"); // false

//^ â†’ Inicio
//$ â†’ Final

aux = /^[A-Z]/.test("Hola");     //  primera mayÃºscula
aux = /^[0-9]$/.test("abc4");    // acaba en nÃºmero


// METACARACTERES 
// .  -> cualquier carÃ¡cter

// OJO!! -> si el '.' estÃ¡ entre corchetes, significa que es literalmente un '.'

aux = /./.test("a");            //  true
aux = /.../.test("hey");        //  true
aux = /.../.test("hi");         //  false
aux = /h.t/.test("hat");        //  true
aux = /h.t/.test("ht");         //  false

// \d dÃ­gito  y \D "no dÃ­gito"

aux = /\d\d\d/.test("123");     //  true
aux = /\d\d\d/.test("12a");     //  false
aux = /\D/.test("abc");         //  true

// \s  espacio en blanco (tabs, espacio, etc) ,   \S no espacio

aux = /\s/.test("Hola Mundo");  // true
aux = /\S/.test("  ");          // false


// \w carÃ¡cter alfanumÃ©rico o  '_'   , \W -> carÃ¡cter no alfanumÃ©rico
aux = /\w+/.test("hola123");
aux = /\W/.test("hola!"); 

// \b â†’ LÃ­mite de palabra
aux = /\bcat\b/.test("black cat");  // true 
aux = /\bcat\b/.test("category");   // false

// \n  nueva lÃ­nea
aux = /^Hola\nMundo$/.test("Hola\nMundo");  // true


// uso de grupos para capturar campos -> 
re = /^([\w.-]+)@([\w.-]+)\.([a-z]{2,})$/i;
aux = re.exec("profe.demo-23@iescurso.edu");  // me de vuelve un array con lo capturado en cada grupo
//console.log(aux);
//console.log(aux[1])
//console.log(aux[2])
/*
[
  'profe.demo-23@iescurso.edu',
  'profe.demo-23',   // grupo 1 â†’ usuario
  'iescurso',        // grupo 2 â†’ dominio
  'edu'              // grupo 3 â†’ extensiÃ³n
]
*/ 


// uso de replace con /g  -> sustituir todo lo que cumpla un patrÃ³n


// EJERCICIOS
//https://wikiserver.infomerce.es/index.php/NF1_-_Esdeveniments_i_Validacio_de_formularis#M.C3.A8todes_de_les_Expressions_Regulars
/*
Crea un patrÃ³n para cada una de las distintas cadenas que se muestran a continuaciÃ³n:
*/
// CÃ³digo postal. Ej: 46700
re = /\d{5}/;
msg = "hola 46700";
// NÃºmero de telÃ©fono con prefijo y guiones, el primer nÃºmero puede ser un 8 Ã³ 9. Ej: 93-123-11-33
re = /[89]\d-\d{3}-\d{2}-\d{2}/;
msg = "93-123-11-33";

// NÃºmero de telÃ©fono con prefijo y puntos. Ej: 93-1.231.1339
re = /\d{2}-\d\.\d{3}\.\d{4}/;
msg = "93-1.231.1339";
// NÃºmero de telÃ©fono internacional. Ej: (+34)952356817
re = /\(\+\d{2}\)\d{9}/;
msg = "(+34)952356817";
// Nombre de usuario con un mÃ­nimo de 4 y un mÃ¡ximo de 15. Ej: julio_30
re = /^\w{4,15}$/;
msg = julio_30;
// NÃºmero Real. Ej: -122.33 Ã³ 7,3 Ã³ 8
re = /-?\d+[.,]?\d*/;
msg = -122.33;
// NÃºmero ISBN de 13 dÃ­gitos: 978-3-16-148410-0
re = /\d{3}-\d-\d{2}-\d{6}-\d$/;
msg = 978-3-16-148410-0;
// NÃºmero de la seguridad social: 01-123456789

// DirecciÃ³n Postal con las siguientes condiciones: Calle (C\), Plaza(Pz.), Avenida(Av.). DirecciÃ³n. Numero - Puerta.
re = /(C\\|Pz\.|Av\.) [a-zA-Z ÁÉÍÓÚáéíóúÑñÜ]+/
msg = "";
// Ej: C\ Virgen de montserrat. 233 - 2

// NÃºmero IP de un ordenador de la versiÃ³n 4.

// Numero Mac de un ordenador separados por ':'

// URL (con http, https, www, etc)

// Fecha: Ej: DD/MM/AAAA

// Hora: 23:55:55

// Email

// Comprobar un nÃºmero propio

// Tarjeta de crÃ©dito



// OTROS ------------------
// cosas complejas -> los lookahead para las contraseÃ±as 
//  -> sirven para comprobar una condiciÃ³n pero no ocupa "lugar" en el match 
//      (1)     (2)         (3)      (4)                 
// ^(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

//  ^       -> comienzo de palabra
//    (?!.*\s) -> lookahead negativo, es decir, no puede contener espacios
//    (?=.*[A-Z])   ->
//      (   ) -> un grupo, se usa para diferenciar
//      ?=    ->  lookahead positivo en algÃºn momento de la cadena ...
//      .*    -> 0 o mÃ¡s repeticiones de cualquier carÃ¡cter ... 
//      [A-Z] -> seguido de una mayÃºsculas 

//    (?=.*[a-z])  -> lo mismo pero "contiene minÃºsculas"
//    (?=.*\d)     -> lo mismo pero "contiene nÃºmeros"

//    .{8,}    -> cualquier carÃ¡cter, al menos 8 