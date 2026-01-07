//1️⃣ Crea una función que retorne un nuevo array con todos los números del array multiplicados por 2.
    let ej1 = [1,2,3,4,5,6,7,8,9,10]
    function multiplicar(array){
     let final = array.map((a)=> a *2);
     return final;
    }
    console.log(multiplicar(ej1));
//2️⃣ Crea una función que retorne los números mayores que la media del array.
    let ej2 = [1,2,3,4,5,6,7,8,9,10]
    function calcularMedia(array){
        let media = array.reduce((a, b) => a + b, 0) / array.length;

        return media;
    }
    function mostrarEncimaMedia(array){
        let media = calcularMedia(array);
        let final = array.filter((a) => a > media);

        return final;
    }
    console.log(mostrarEncimaMedia(ej2));
//3️⃣ Crea una función que retorne la suma de los números impares.
    let ej3 = [1,3,5,7,12];
    function sumaImpares(array){
        let suma = array.filter((a) => a % 2 !== 0).reduce((a , b) => a + b , 0);

        return suma;
    }
    console.log("Suma de números impares es "+ sumaImpares(ej3));
//4️⃣ Crea una función que retorne un array con los n primeros elementos del array original.
let ej4 = [1,2,3,4,5,6,7,8,9,10];

function primerosN(array, n) {
    return array.slice(0, n);
}
console.log(primerosN(ej4, 5));
//5️⃣ Crea una función que indique si todos los números son menores que 100.
    let ej5 = [1,2,3,4,5,6,7,8,9,10,102];
    function comprobarCien(array){
        let es;
        if(array.every((a)=> a < 100) == true){
            es = "Todos los numeros son menores de 100";
        }else
            es = "No todos los numeros son menores de 100";
     return es;
    }
    console.log(comprobarCien(ej5));
//6️⃣ Crea una función que indique si algún número es múltiplo de 7.
    let ej6 = [1,2,3,4,5,6,7,8,9,10,21];
    function comprobarSiete(array){
        let es;
        if(array.some((a)=> a % 7 == 0 && a != 7)){
            es = "Un numero es multiplo de 7";
        }else
            es = "Ningun numero es multiplo de 7";
     return es;
    }
    console.log(comprobarSiete(ej6));
//7️⃣ Crea una función que retorne el primer número primo del array.
    let ej7 = [1,2,3,4,5,6,7,8,9,10,21];

    function esPrimo(n) {
    let primo = true;
        if (n < 2) primo = false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) primo = false;
        }
    }

    function primerPrimo(array) {
        return array.find(esPrimo);
    }

    console.log("Primer primo:", primerPrimo(ej7));
//8️⃣ Crea una función que retorne un objeto con estadísticas básicas del array (mínimo, máximo, suma y cantidad de elementos).
    let ej8 = [1,2,3,4,5,6,7,8,9,10,21];
    function estadisticas(array) {
        return array.reduce((acc, n) => {
            acc.total++;
            acc.suma += n;
            if (n < acc.min) acc.min = n;
            if (n > acc.max) acc.max = n;
            return acc;
        }, { min: Infinity, max: -Infinity, suma: 0, total: 0 });
    }

    console.log("Estadísticas:", estadisticas(ej8));
//9️⃣ Crea una función que retorne un nuevo array con los números elevados al cuadrado.
    let ej9 = [1,2,3,4,5,6,7,8,9,10,21];
    function cuadrados(array) {
        return array.map(n => n ** 2);
    }

    console.log("Cuadrados:", cuadrados(ej9));
//🔟 Crea una función que retorne un nuevo array con los números únicos (sin repeticiones)e
    function unicos(array) {
        return [...new Set(array)];
    }
    console.log("Números únicos:", unicos(array));