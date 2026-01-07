//Metodo .concat(c) concatena 2 arrays
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log("Método concat"); 
console.log(c); 

//Método .includes(d) verifica si d esta en el arrayç
console.log("Método includes"); 
console.log(a.includes(2));
console.log(a.includes(4));

//Método indexOf(x) devuelve la posicion donde se encuentra (la primera) lastIndexOf(x) lo mismo pero la ultima posicion
let arr = [1, 2, 3, 2];
console.log("Método indexOf y lastIndexOf"); 
console.log(arr.indexOf(2)); // 1
console.log(arr.lastIndexOf(2)); // 3

//Método join(" ") Une el array en un string y los separa por " "
let palabra = ["Hola", "mundo"];
console.log("Método join");
console.log(palabra.join(" "));

//Método .keys() .values() .entries() Devuelven el indice del array
console.log("Método entries");
let colores = ["rojo", "verde", "azul"];
for (let [i, color] of colores.entries()) {
  console.log(i, color);
}

//Método .map crea un nuevo array cambiado
let nums = [1,2,3];
console.log("Método map");
console.log(nums.map((a) => a ** a));

//Método filter filtra por algo 
nums = [1,23,10,12];
console.log("Método filter");
console.log(nums.filter((a)=> a >10));

//Metodo .reduce() reduce a un solo valoe
let media = [1,2,3,4,5];
console.log("Método reduce");
console.log(media.reduce((a,b)=> a +b,0)/media.length);

//Método .slice(x,y) separa  el array desde x hasta y sin incluir , si no poner y hasta el final
media = [1,2,3,4,5];
console.log("Método slice");
console.log(media.slice(1,3));

//Método .some() o .every() si alguno cumple la condición o si todos cumplen la condición
nums = [1, 2, 3];
console.log("Método some");
console.log(nums.some(n => n > 2));  // true
console.log("Método every");
console.log(nums.every(n => n > 0)); // true

//Método .find() .findIndex() encuentra el primer numero que cumple la condicion y en el primer caso devuelve el numero en el segundo la posicion
 arr = [10, 20, 30];
 console.log("Método find");
console.log(arr.find(n => n > 15)); // 20
 console.log("Método findIndex");
console.log(arr.findIndex(n => n > 15)); // 1

//Método .flat() .flatMap() que aplanan y cambian el array
 console.log("Método flat");
 arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]

console.log("Método flatMap");
 nums = [1, 2, 3];
console.log(nums.flatMap(n => [n, n * 2])); // [1, 2, 2, 4, 3, 6]

