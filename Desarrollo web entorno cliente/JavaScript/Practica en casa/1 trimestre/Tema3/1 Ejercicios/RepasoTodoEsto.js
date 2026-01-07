// 🧩 1. map
// Crea una función que reciba un array de precios y devuelva un nuevo array con los precios más IVA (21%) aplicado.
// Ejemplo: [10, 20, 30] → [12.1, 24.2, 36.3]

function calcularIva(array) {
  return array.map((a) => (a * 1.21));
}
let dinero = [1, 100, 10, 1000];
console.log(calcularIva(dinero));

// 🧩 2. filter
// Dado un array de nombres, devuelve solo aquellos que empiezan por la letra “A”.
// Ejemplo: ["Ana", "Luis", "Andrés", "María"] → ["Ana", "Andrés"]
let nombres = ["Ana", "Luis", "Andrés", "María"];
function darA(nombres) {
  return nombres.filter((a) => a.charAt(0) == "A");
}
console.log(darA(nombres));
// 🧩 3. reduce
// Dado un array de palabras, devuelve la palabra más larga usando reduce.
// Ejemplo: ["sol", "estrella", "galaxia", "universo"] → "universo"
// let palabra = ["sol", "estrella", "galaxia", "universo"];

function buscarLarga(palabra) {
  let x;
    palabra.reduce((a, b) => {
    if (a.length < b.length) {
      x= b;
    }else
        x=a;
  });
   return x;

}
// console.log(buscarLarga(palabra));
// 🧩 4. every / some
// Crea una función que reciba un array de temperaturas y devuelva:
// true si todas son mayores a 0.
// false si alguna es 0 o menor.

let temperaturas = [1, 2, 3, 4, 5];
function calcularTemp(temperaturas) {
  return temperaturas.every((a) => a > 0);
}
console.log(calcularTemp(temperaturas));
// 🧩 5. Funciones flecha
// Convierte esta función tradicional en una función flecha multilínea:
// function multiplicar(a, b) {
//   let resultado = a * b;
//   return resultado;
// }
let multiplicacion = (a, b) => {
  let resultado = a * b;
  return resultado;
};
console.log(multiplicacion(1, 2));
// 🧩 6. Desestructuración
// Usa desestructuración para extraer las propiedades y muestra:
// "El Portátil de marca Dell cuesta 950€"
const producto = { nombre: "Portátil", precio: 950, marca: "Dell" };
function mostrarProducto({ nombre: tipo, precio, marca }) {
  console.log(`El ${tipo} de marca ${marca} cuesta ${precio}`);
}
mostrarProducto(producto);
// 🧩 7. Objetos con herencia
// Crea una clase Vehiculo con una propiedad marca y un método arrancar().
// Luego crea una clase Coche que herede de Vehiculo y sobreescriba el método arrancar() mostrando "El coche está en marcha".
// Crea un objeto miCoche y llama al método.

function Vehiculo(marca) {
  this.marca = marca;
  function arrancar() {}
}
function Coche(marca) {
  Vehiculo.call(this, marca);
}
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

Coche.prototype.arrancar = function () {
  console.log("El coche arranco");
};
let miCoche = new Coche("mercedes");
miCoche.arrancar();
console.log(JSON.stringify(miCoche));
