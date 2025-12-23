/* ==========================================
     🧩 DESERESTUCTURACIÓN EN JAVASCRIPT
   ========================================== */

/* ---------------------------------
   🔹 INTRODUCCIÓN
   ---------------------------------
   La desestructuración permite extraer propiedades de objetos
   o elementos de arrays y asignarlas directamente a variables.
*/

/* ---------------------------------
   🧠 DESERESTUCTURACIÓN BÁSICA DE OBJETOS
   --------------------------------- */

const objeto = { p: 42, q: true, a: { r: 20, s: 'abc' } };

const { p, q } = objeto;

console.log(p, q); // 42 true

/*
📘 Extrae las propiedades 'p' y 'q' del objeto
   y las guarda en variables del mismo nombre.
*/

/* ---------------------------------
   🎯 DESERESTUCTURACIÓN CON NUEVOS NOMBRES
   --------------------------------- */

const { p: primero, q: segundo } = objeto;

console.log(primero, segundo); // 42 true

/*
💡 Se puede cambiar el nombre de la variable
   al extraerla del objeto.
*/

/* ---------------------------------
   🧬 DESERESTUCTURACIÓN DE OBJETOS ANIDADOS
   --------------------------------- */

const { a } = objeto;
const { a: { r: numeroR } } = objeto;

console.log(a, numeroR); // { r: 20, s: 'abc' } 20

/*
📘 Podemos extraer objetos dentro de objetos y renombrar variables.
*/

/* ---------------------------------
   🔹 DESERESTUCTURACIÓN DE ARRAYS
   --------------------------------- */

const colores = ['rojo', 'amarillo', 'verde'];
const [primeroColor, segundoColor, terceroColor] = colores;

console.log(primeroColor);  // "rojo"
console.log(segundoColor);   // "amarillo"
console.log(terceroColor);   // "verde"

/*
💡 Extrae elementos de un array en variables individuales.
*/

/* ---------------------------------
   ⚙️ DESERESTUCTURACIÓN EN FUNCIONES
   --------------------------------- */

const usuario = {
  id: 42,
  nombreUsuario: "jdoe",
  nombreCompleto: { nombre: "John", apellido: "Doe" }
};

// Extraer directamente propiedad 'id'
function obtenerId({ id }) {
  return id;
}

// Extraer 'nombreUsuario' y 'nombre' del objeto anidado
function quienEs({ nombreUsuario, nombreCompleto: { nombre } }) {
  return `${nombreUsuario} es ${nombre}`;
}

console.log(obtenerId(usuario)); // 42
console.log(quienEs(usuario));   // "jdoe es John"

/*
💬 La desestructuración en funciones permite extraer propiedades
   directamente desde los argumentos, haciendo el código más limpio.
*/

/* ---------------------------------
   📌 RESUMEN FINAL
   ---------------------------------
   🔸 Objetos:
       const { prop1, prop2 } = objeto
       const { prop: nuevoNombre } = objeto

   🔸 Objetos anidados:
       const { nested: { prop } } = objeto

   🔸 Arrays:
       const [elem1, elem2] = array

   🔸 Funciones:
       function f({ prop1, nested: { prop2 } }) { ... }

   🔸 Ventaja:
       Permite acceder a datos de manera directa y legible.
*/
