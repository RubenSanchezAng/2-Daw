/*1️⃣ Implementar myMap

Crea tu propio método Array.prototype.myMap() que se comporte como el nativo.

Array.prototype.myMap = function(callback) {
  let valores = [];
  for (let i = 0; i < this.length; i++) {
    valores.push(callback(this[i], i, this));    
  }
  return valores;
}
const val = [1,2,3,4];
const doble = val.myMap((num, i) => num * i);
console.log(doble);
*/

/*2️⃣ Implementar myFilter

Crea tu propio método Array.prototype.myFilter() que se comporte como el nativo.

  Array.prototype.myFilter = function(callback){
    let valores = [];
    for(let i = 0 ; i < this.length; i++){
      valores.push(callback(this[i], i, this));
    }
    return valores;
  }
  let datos = [1,2,3,4,5];
  let resultado = datos.myFilter((num) => num > 2);
  console.log(resultado);
*/
/*3️⃣ Map simple

Dado el array [2, 4, 6, 8], usa myMap() para crear un nuevo array donde cada elemento sea multiplicado por 5.

Array.prototype.myMap = function (callback) {
  let valores = [];
  for (let i = 0; i < this.length; i++) {
    valores.push(callback(this[i], i, this));
  }
  return valores;
}
 let valor = [2,4,6,8];
 let resultado = valor.myMap((num) => num *5);
 console.log(resultado);
*/
/*4️⃣ Filter simple
Dado el array [10, 15, 20, 25, 30], usa myFilter() para obtener solo los elementos mayores a 20.

  Array.prototype.myFilter = function (callback){
    let valores = [];
    for (let i = 0; i < this.length; i++) {
      valores.push(callback(this[i], i ,this));    
    }
    return valores;
  }
  let valor = [10, 15, 20, 25, 30];
  let resultado = valor.myFilter((num) => num > 20);
  console.log(resultado);
*/
/*5️⃣ Combinando filter y map

Dado un array de objetos:

const movies = [
  { title: "A", rating: "7.5" },
  { title: "B", rating: "8.3" },
  { title: "C", rating: "9.0" },
  { title: "D", rating: "6.8" }
];
Filtra las películas con rating >= 8 y devuelve un nuevo array de objetos con solo title y rating.
  
 const movies = [
  { title: "A", rating: "7.5" },
  { title: "B", rating: "8.3" },
  { title: "C", rating: "9.0" },
  { title: "D", rating: "6.8" }
  ];
  let resultado = movies.filter ((pelicula) => Number(pelicula.rating) >= 8).map( pelicula => ({
  title:pelicula.title,
  rating: pelicula.rating
  }))
  console.log(resultado);
  */
/*6️⃣ Usando índice en map

Dado [1, 2, 3, 4], usa myMap() para crear un nuevo array donde cada elemento sea valor + índice.

  Array.prototype.myMap = function (callback){
    let resultado = [];
    for (let i = 0; i < this.length; i++) {
      resultado.push(callback(this[i],i, this));
    }
    return resultado;
  }
  let valores = [1, 2, 3, 4];
  let resultado = valores.myMap((num , x ) => num + x);
  console.log(resultado);
*/
/*7️⃣ Valores únicos

Dado [1, 2, 2, 3, 4, 4, 5], usa myFilter() para obtener un array con valores únicos.


  Array.prototype.myFilter = function (callback){
    let resultado = [];
    for (let i = 0; i < this.length; i++) {
      if(callback(this[i], i , this)=== true){
        resultado.push(this[i]);
      } 
    }
    return resultado;
  }
  let val =  [1, 2, 2, 3, 4, 4, 5];
  let final = val.myFilter((num, i, array)=> array.indexOf(num) === i);
  console.log(final);
*/
/*8️⃣ Transformación de strings

Dado ["alice", "bob", "carol"], usa myMap() para devolver un array con todos los nombres en mayúsculas.
*/
Array.prototype.myMap = function (callback){
  let resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback(this[i],i, this));    
  }
  return resultado;
}
let nombres = ["alice", "bob", "carol"];
let final = nombres.myMap((nombre) =>  nombre.toUpperCase());
console.log(final);
/*9️⃣ Filtrar palabras largas

Dado ["hi", "hello", "goodbye", "hey"], usa myFilter() para obtener solo las palabras con más de 3 letras.
*/
Array.prototype.myFilter = function (callback){
  let resultado = [];
  for (let i = 0; i < this.length; i++) {
    resultado.push(callback(this[i], i , this));    
  }
  return resultado;
}
let largo = ["hi", "hello", "goodbye", "hey"];
let fin = largo.myFilter((palabra)=> palabra.length > 3);
console.log(fin);
/*🔟 Combinar varias transformaciones

Dado un array de objetos:

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Carol", age: 30 }
];


Filtra los usuarios mayores de 18 y devuelve un array con solo sus nombres en mayúsculas.
*/
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Carol", age: 30 }
];
let datos = users.filter((usuarios)=> (usuarios.age) > 18).map(usuarios =>({
  name:usuarios.name,
  age:usuarios.age
}));
console.log(datos);