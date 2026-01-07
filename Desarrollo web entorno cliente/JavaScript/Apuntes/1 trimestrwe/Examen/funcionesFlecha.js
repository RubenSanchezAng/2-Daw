/* ===============================
     ⚡ FUNCIONES DE FLECHA (Arrow Functions)
   =============================== */

/*
📘 Son una forma más corta de escribir funciones.
   Sintaxis básica:
   let func = (arg1, arg2, ..., argN) => expresión;
*/

/* ---------------------------------
   🧩 EJEMPLO BÁSICO
   --------------------------------- */

let sum = (a, b) => a + b;
// Equivale a:
let sum2 = function(a, b) {
  return a + b;
};

alert(sum(1, 2)); // 3

/* ---------------------------------
   🧩 SIN PARÁMETROS
   ---------------------------------
   Si no hay parámetros, los paréntesis son obligatorios.
*/

let sayHi = () => alert("Hello!");

sayHi();

/* ---------------------------------
   🧩 USO EN CONDICIONALES / DINÁMICOS
   ---------------------------------
   Puedes crear funciones de manera dinámica.
*/

let age = prompt("What is your age?", 18);

let welcome = (age < 18)
  ? () => alert("Hello!")
  : () => alert("Greetings!");

welcome();

/* ---------------------------------
   🧠 FUNCIONES DE FLECHA MULTILÍNEA
   ---------------------------------
   Si necesitas varias líneas o más lógica, usa llaves { }.
   Pero recuerda: debes usar "return" si quieres devolver algo.
*/

let sum3 = (a, b) => {
  let result = a + b;
  return result; // 🔹 Es necesario el return
};

alert(sum3(1, 2)); // 3

/* ---------------------------------
   📌 RESUMEN RÁPIDO
   ---------------------------------
   🔸 Sin llaves → retorno implícito:
       (a, b) => a + b
   🔸 Con llaves → retorno explícito:
       (a, b) => { return a + b; }

   🔸 Sin argumentos → paréntesis vacíos:
       () => alert("Hi!")

   🔸 Ideales para:
       - Funciones cortas
       - Callbacks
       - Operaciones simples
*/

/* ---------------------------------
   💡 EJEMPLOS PRÁCTICOS
   ---------------------------------
*/

// Callback en un forEach:
[1, 2, 3].forEach(n => console.log(n * 2));

// Callback en un setTimeout:
setTimeout(() => alert("Time's up!"), 1000);

// En combinación con métodos de arrays:
let numbers = [10, 20, 30];
let squared = numbers.map(n => n * n);
console.log(squared); // [100, 400, 900]
