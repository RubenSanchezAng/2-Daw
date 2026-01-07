let numeros = [12,3,5,7,9,0,1,2,5,65];

numeros.pop();
console.log(numeros);

numeros.push(11);
numeros.unshift(0);
console.log(numeros);

let doble = numeros.map((n) => n * 2);
console.log(doble);

let pares = numeros.filter((n) => n % 2 == 0);
console.log(pares);

let media = numeros.reduce((acum, num) => acum += num, 0)/numeros.length;
console.log(media);

let orden = numeros.sort((a, b) => a - b);
console.log("Orden: " + orden);
