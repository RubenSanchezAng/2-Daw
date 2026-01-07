//.copyWithin() Coge los numeros que quedan sin coger y los mete en esas posiciones
let arr = [1,2,3,4,5];
console.log("Método copyWithin");
arr.copyWithin(0,3);
console.log(arr);

//.fill(x,y,z) Añade el número x desde la posicion y(incluida) hasta la z(sin incluir)
arr = [1,2,3,4,5];
console.log("Método fill");
console.log(arr.fill("x",0));

//.pop() Elimina el último valor del array y lo devuelve si pones let a = arr.pop a = 5
arr = [1,2,3,4,5];
console.log("Método pop");
console.log(arr.pop()); 

console.log(arr)
//.push() Añade al final del array un valor
let numeros = [1, 2];
console.log("Método push");
numeros.push(3, 4);
console.log(numeros); 

//Metodo .reverse() da la vuelta al array
arr = [1,2,3,4,5];
console.log("Método reverse");
console.log(arr.reverse());

//Metodo .shift() elimina el primer elemento y lo devuelve
let a = arr.shift();
console.log("Método shift");
console.log(a);
console.log(arr);

//Método .sort() Ordena un array 
let nombres = ["Ana","Bala","Carlos","Aa"];
console.log("Metodo sort");
console.log(nombres.sort());

let nums = [40, 1, 5, 200];
nums.sort((a, b) => a - b);
console.log(nums); 

//Método splice(x,y,z) elimina de x a y sin incluir y añade z , en z puede haber mas de un valor
let frutas = ["manzana", "pera", "plátano"];
frutas.splice(0, 3, "kiwi", "pera",34);
console.log("Metodo splice");
console.log(frutas); 

//Método unshift() añade uno o mas elementos al inicio, lo contrario a shift que los borra o parecido a push que añade al final
arr = [];
arr.unshift(0, 1);
console.log("Metodo unshift");
console.log(arr); 

