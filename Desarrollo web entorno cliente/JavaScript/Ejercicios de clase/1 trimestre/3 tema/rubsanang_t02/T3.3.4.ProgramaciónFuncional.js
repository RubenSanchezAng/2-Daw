  //Devuelve un array entre esas posiciones
function sliceArray(anim, beginSlice, endSlice) {
  const arrayNueva = anim.slice(beginSlice, endSlice);

  return arrayNueva;
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

//Concatenar matrices, método .concat

function nonMutatingConcat(original, attach) {
  const matriz = original.concat(attach);
  return matriz;
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

//Ordenar string
function alphabeticalOrder(arr) {

  return arr.sort(function(a , b) {
    return a === b ? 0 : a > b ?  1 : -1;
  });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//Ordenar números sin modificar el array pasado 
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let nuevo = arr.slice(0).sort(function( a , b){
    return a - b ;
  })
  return nuevo;
}

nonMutatingSort(globalArray);

//Separar por espacios, - o , 
function splitify(str) {
  //^ Que sea lo contrario A-Z de la A a la Z  y de a-z de la a a la z y de 0--9 de 0 a 9
  return str.split(/[^A-Za-z0-9]+/);
}
console.log(splitify("Hello World,I-am code"));

//Separar una frase
function sentensify(str) {
//Primero lo pasas a array  
 let palabras = str.split(/[^A-Za-z0-9]+/);
 //Ahora lo pasas a String
 let frase = palabras.join(" ");
  return frase;
}
sentensify("May-the-force-be-with-you");

/*Complete la urlSlugfunción para que convierta una cadena titley devuelva la versión con guiones de la URL. Puede usar cualquiera de los métodos descritos en esta sección, pero no use replace. Estos son los requisitos:

La entrada es una cadena con espacios y palabras en mayúsculas y minúsculas.

La salida es una cadena con los espacios entre palabras reemplazados por un guion ( -)

La salida debe ser toda en letras minúsculas.

La salida no debe tener espacios.
*/
function urlSlug(title) {
let minusculas = title.toLowerCase();
//Split s separa en cualquier espacio en blanco
let array = minusculas.split(/\s+/).filter(Boolean);
let urlFinal = array.join("-");

return urlFinal;
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

//Every comprueba si todos los datos son verdaderos
function checkPositive(arr) {
  return arr.every(function(valores){
    return valores >= 0;
  })
}
//Some comprueba si algun dato es verdaderos
function checkPositive(arr) {
  return arr.some(function(valores){
    return valores >=0;
  })
}
checkPositive([1, 2, 3, -4, 5]);


//En vez de pasar todas a la vez se hacen funciones x = 10 y = 20 z = 30 
function add(x) {
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
}

add(10)(20)(30);