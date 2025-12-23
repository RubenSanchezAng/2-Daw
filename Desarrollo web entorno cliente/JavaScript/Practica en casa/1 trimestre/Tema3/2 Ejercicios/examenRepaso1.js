// 🧩 1. map
// Crea una función que reciba un array de notas (del 0 al 10) y devuelva un nuevo array con las notas multiplicadas por 10, representando el porcentaje.
// Ejemplo: [7, 8.5, 10] → [70, 85, 100]
let nota = [7, 8.5, 10];
function calcularPorcentaje(notas){
    return notas.map((a) => a * 10);
}
console.log(calcularPorcentaje(nota));

Array.prototype.myMap = function(callback){
    let dinal = [];
    for (let i = 0; i < this.length; i++) {
        dinal.push((callback(this[i],i,this)));        
    }
    return dinal;
}
let final = nota.myMap((a) => a *10);
console.log(final);
// 🧩 2. filter
// Dado un array de números, devuelve solo los números pares que sean mayores que 10.
// Ejemplo: [3, 12, 8, 20, 25, 30] → [12, 20, 30]
let numero = [3, 12, 8, 20, 25, 30];

function devolverPares(numeros){
    return numeros.filter((a)=> a > 10 &&  a % 2 == 0);
}
console.log(devolverPares(numero));
Array.prototype.myFilter = function (callback){
    let pares = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this) == true){
            pares.push(this[i]);
        }
    }
    return pares;
}
let parfinal = numero.myFilter((a) => a > 10 &&  a % 2 == 0);
console.log(parfinal);
//3. reduce
// Dado un array de objetos con nombre y edad:
// [
//   { nombre: "Ana", edad: 22 },
//   { nombre: "Luis", edad: 30 },
//   { nombre: "Sofía", edad: 25 }
// ]
// Usa reduce para calcular la edad media del grupo.
// Resultado esperado: 25.67
let personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 30 },
    { nombre: "Sofía", edad: 25 }
];

function calcularMedia (persona){
    return persona.reduce((a, b) => a + b.edad ,0)/persona.length;
}
console.log(calcularMedia(personas)); // 25.666666666666668
//4. every / some
// Crea una función que reciba un array de contraseñas y devuelva:
// true si alguna tiene más de 12 caracteres.
// false si ninguna los tiene.
// Ejemplo: ["abc123", "seguridadtotal2024", "clave"] → true
let contraseña =  ["abc123", "seguridadtotal2024", "clave"];
function comprobarContraseña(contraseñas){
    let segura = false;
    if(contraseñas.some((a)=> a.length > 12)== true){
        segura = true;
    }
    return segura;
}
console.log(comprobarContraseña(contraseña));
//5. Funciones flecha
// Escribe una función flecha multilínea llamada comparar que reciba dos números y:
// Devuelva "mayor" si el primero es mayor,
// "menor" si el primero es menor,
// "igual" si son iguales.
const valor = ((a,b) => {
    let val;
    if(a > b){
        val = "mayor";
    }else if (a < b){
        val = "menor";
    }else
        val = "igual";

    return val;
});
console.log(valor(5,3));
//6. Desestructuración
// Dado el siguiente array de objetos:
// Usa desestructuración para extraer el primer libro y mostrar:
// "1984 fue escrito por George Orwell"
const libros = [
   { titulo: "1984", autor: "George Orwell" },
   { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" }
];

function desestructurar(libros) {
  // Desestructuramos el primer libro del array
  const [ { titulo, autor } ] = libros;
  
  console.log(`${titulo} fue escrito por ${autor}`);
}
desestructurar(libros);

//7. Objetos con herencia
// Crea una clase Empleado con las propiedades nombre y salario y un método mostrarInfo().
// Crea una clase Jefe que herede de Empleado y agregue una propiedad departamento y un método dirigir().
// Crea un objeto miJefe y llama a ambos métodos.
function Empleado(nombre, salario){
    this.nombre = nombre;
    this.salario = salario;
}
Empleado.prototype.mostrarInfo = function() {
    console.log(`${this.nombre} gana ${this.salario}€ al mes.`);
}
function Jefe(nombre, salario, departamento){
    Empleado.call(this, nombre, salario);
    this.departamento = departamento;
   
}
Jefe.prototype = Object.create(Empleado.prototype);
Jefe.prototype.constructor = Jefe;
Jefe.prototype.dirigir = function(){
    console.log("Es el director de "+this.departamento);
   
}
let miJefe = new Jefe("Pedro",1200,"ventas");
miJefe.mostrarInfo();
miJefe.dirigir();