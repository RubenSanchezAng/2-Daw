/* ==========================================
     🌟 PARÁMETROS REST Y SINTAXIS DE PROPAGACIÓN
   ========================================== */

/* ---------------------------------
   🧩 PARÁMETROS REST (...rest)
   ---------------------------------
   Permiten agrupar el “resto” de los argumentos en un array.
*/

// Ejemplo básico:
function sumAll(...args) { // args será un array
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

alert(sumAll(1));          // 1
alert(sumAll(1, 2));       // 3
alert(sumAll(1, 2, 3, 4)); // 10

/*
📘 Equivalente a decir:
"Guarda todos los parámetros restantes en un array llamado args".
*/

/* ---------------------------------
   🎯 COMBINAR PARÁMETROS NORMALES Y REST
   --------------------------------- */

function showName(firstName, lastName, ...titles) {
  alert(firstName + " " + lastName);
  alert(titles[0]); // Ej: "Consul"
  alert(titles[1]); // Ej: "Imperator"
  alert(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

/*
⚠️ Importante:
El parámetro rest SIEMPRE debe ir al final.
*/

/// ❌ Esto da error:
/// function badExample(arg1, ...rest, arg2) {}

/* ---------------------------------
   🧠 OBJETO ARGUMENTS (antiguo)
   ---------------------------------
   Contiene todos los argumentos pasados a la función.
   (No es un array real, solo es similar)
*/

function showArguments() {
  alert(arguments.length);
  alert(arguments[0]);
  alert(arguments[1]);
}

showArguments("Julius", "Caesar"); // 2, Julius, Caesar
showArguments("Ilya");             // 1, Ilya, undefined

/*
💬 Desventajas de `arguments`:
   - No es un array → no tiene métodos como map, filter, etc.
   - Siempre incluye TODOS los argumentos.
   - Se usa más en código antiguo.
*/

/* ---------------------------------
   ⚡ LAS FUNCIONES FLECHA NO TIENEN "arguments"
   --------------------------------- */

function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1
/*
💡 Las funciones flecha heredan `arguments` de la función externa.
   No tienen su propio objeto `arguments`.
*/

/* ---------------------------------
   🧩 SINTAXIS DE PROPAGACIÓN (Spread)
   ---------------------------------
   Hace lo contrario que los parámetros rest:
   🔹 Convierte un array (u iterable) en una lista de valores individuales.
*/

// Ejemplo con Math.max (espera una lista de números)
let arr = [3, 5, 1];
alert(Math.max(...arr)); // 5

/*
🔁 “...arr” expande el array en:
   Math.max(3, 5, 1)
*/

/* ---------------------------------
   🔹 PROPAGAR VARIOS ARRAYS
   --------------------------------- */

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(...arr1, ...arr2)); // 8

// Se puede mezclar con valores normales:
alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

/* ---------------------------------
   🧩 COMBINAR ARRAYS CON SPREAD
   --------------------------------- */

let combined = [0, ...arr1, 2, ...arr2];
alert(combined); // 0,1,-2,3,4,2,8,3,-8,1

/* ---------------------------------
   🧩 SPREAD CON STRINGS
   --------------------------------- */

let str = "Hello";
alert([...str]); // ['H', 'e', 'l', 'l', 'o']

// También se puede hacer con Array.from (más universal)
alert(Array.from(str)); // ['H', 'e', 'l', 'l', 'o']

/*
📘 Diferencias:
   - [...obj] solo funciona con *iterables*.
   - Array.from(obj) funciona con *iterables y array-like objects*.
*/

/* ---------------------------------
   🧩 COPIAR ARRAYS Y OBJETOS CON SPREAD
   --------------------------------- */

let arrOriginal = [1, 2, 3];
let arrCopy = [...arrOriginal]; // Copia superficial

alert(JSON.stringify(arrOriginal) === JSON.stringify(arrCopy)); // true
alert(arrOriginal === arrCopy); // false (referencias distintas)

// Modificar uno no afecta al otro
arrOriginal.push(4);
alert(arrOriginal); // 1,2,3,4
alert(arrCopy);     // 1,2,3

/* ---------------------------------
   🧩 COPIAR OBJETOS
   --------------------------------- */

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // Copia superficial del objeto

alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
alert(obj === objCopy); // false

obj.d = 4;
alert(JSON.stringify(obj));     // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

/*
💡 Equivale a:
   let objCopy = Object.assign({}, obj);
   pero con una sintaxis más corta.
*/

/* ---------------------------------
   📌 RESUMEN FINAL
   ---------------------------------
   🔸 PARÁMETROS REST (...rest)
       → Agrupan argumentos restantes en un array.
       Ej: function f(a, ...rest) {}

   🔸 SINTAXIS DE PROPAGACIÓN (...spread)
       → Expande un array/iterable en una lista de valores.
       Ej: Math.max(...arr)

   🔸 REST = juntar valores → en un array
       🔁 SPREAD = separar valores → desde un array

   🔸 Ambos usan los tres puntos (...).
*/

