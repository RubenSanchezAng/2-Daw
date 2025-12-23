//originalArray guarda el array que se ha pasado por myMap, es decir, numbers
//originalArray[i] es segun la posicion un numero, i para que el map sepa la posicion y el otro por si es necesario
//En el callback se comprueba si es true o verdadero, si es true se añade
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  const originalArray = this;

  for(let i = 0 ; i < originalArray.length; i++){
      if (callback(originalArray[i], i, originalArray)) {
      newArray.push(originalArray[i]);
    }
  }
  return newArray;
};
console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
// [23, 65, 5, 13]

console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
// ["naomi"]

console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));
// [1, 2, 5]