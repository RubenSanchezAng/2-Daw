let array = [95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31 ,101];

// Haz una función que retorne el array ordenado sin modificar el array original
function ordenarArray(array){
    let ordenado = [...array];
    ordenado.sort ((a , b ) => b - a);
    return ordenado;
}
console.log(ordenarArray(array));
// Haz una función que retorne los números impares y ordenados
function imparOrdenado(array){
    let impar = array.filter((a) => a % 2 !==0);
    impar.sort((a , b) => a - b);

    return impar;
}
console.log(imparOrdenado(array));

// Haz una función que retorne los números impares de dos cifras

function imparDosCifras(array){
    let impar = array.filter((a)=> a > 10 && a % 2 !== 0 && a < 100);
   
    return impar;
}
console.log(imparDosCifras(array));

// Haz una función que retorne un array de 0 a 100 con la frecuencia de cada número en el array original
function contar(array){
    //Crea un array con 101 posiciones y todas empiezan en 0
    let contador = new Array(101).fill(0);
    for(let numero of array){
        contador[numero]++;
    }
    return contador;
}
console.log(contar(array));
// Haz una función que indique si un número es mayor que otro según la longitud de su nombre en castellano o valenciano
// Función auxiliar para convertir número a texto (castellano, 0–100)
function numeroATextoES(num) {
    const unidades = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
    const especiales = ["diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"];
    const decenas = ["", "", "veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];

    if (num < 10) return unidades[num];
    if (num < 20) return especiales[num - 10];
    if (num < 30 && num !== 20) return "veinti" + unidades[num - 20];
    if (num % 10 === 0) return decenas[Math.floor(num / 10)];
    return decenas[Math.floor(num / 10)] + " y " + unidades[num % 10];
}

// Función principal
function compararLongitud(num1, num2) {
    let texto1 = numeroATextoES(num1);
    let texto2 = numeroATextoES(num2);

    console.log(`${num1} → "${texto1}" (${texto1.length} letras)`);
    console.log(`${num2} → "${texto2}" (${texto2.length} letras)`);

    if (texto1.length > texto2.length) return `${num1} tiene un nombre más largo`;
    if (texto1.length < texto2.length) return `${num2} tiene un nombre más largo`;
    return `Tienen la misma longitud`;
}

console.log(compararLongitud(23, 47));
// Haz una función para ordenar el array según el criterio de la función anterior

function ordenarPorLongitudNombre(array) {
    // Creamos una copia para no modificar el original
    return [...array].sort((a, b) => {
        const lenA = numeroATextoES(a).length;
        const lenB = numeroATextoES(b).length;
        return lenA - lenB; // Orden de menor a mayor longitud
    });
}
// Haz una función que acepte un número y retorne una función que acepte un array y retorne si el número está en el array.
function recibeNumero (n){
    return function(array){
        return array.includes(n);
    };
}
let buscar = recibeNumero(12);

console.log(buscar([12]));

//Map objetos
const personas = [
  { nombre: "Ana", apellido: "López", edad: 17 },
  { nombre: "Carlos", apellido: "Martínez", edad: 22 },
  { nombre: "Lucía", apellido: "Gómez", edad: 19 },
  { nombre: "Pedro", apellido: "Fernández", edad: 15 }
];

const mayorEdad = personas.filter((persona)=> persona.edad > 18).map((pers) => pers.nombre + " "+ pers.apellido);
console.log(mayorEdad);