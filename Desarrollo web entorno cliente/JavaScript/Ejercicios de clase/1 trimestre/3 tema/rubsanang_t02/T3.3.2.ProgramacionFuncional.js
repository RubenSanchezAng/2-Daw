//originalArray guarda el array que se ha pasado por myMap, es decir, numbers
//originalArray[i] es segun la posicion un numero, i para que el map sepa la posicion y el otro por si es necesario
//En el callback se hace la operación que se ha pasado y num se sustituye por originalArray[i]
Array.prototype.myMap = function(callback) {
  const newArray = [];           // Array que devolveremos
  const originalArray = this;    // Le pasas el array que llama a my map

  for (let i = 0; i < originalArray.length; i++) {
    newArray.push(callback(originalArray[i], i, originalArray));
  }

  return newArray;
};
const numbers = [1, 2, 3, 4, 5];
const tripled = numbers.myMap(num => num * 3);

console.log(tripled);  // [3, 6, 9, 12, 15]
