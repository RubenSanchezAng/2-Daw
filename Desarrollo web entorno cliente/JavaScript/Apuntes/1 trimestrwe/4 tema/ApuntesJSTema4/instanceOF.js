class Rabbit {}

let rabbit = new Rabbit();

// instanceof verifica si un objeto fue creado por una clase o función constructora
// En este caso, rabbit fue creado por Rabbit, así que devuelve true
alert(rabbit instanceof Rabbit); // true



function Rabbit() {}

// Al usar "new Rabbit()", se crea un nuevo objeto basado en esa función
// instanceof también funciona con funciones constructoras
alert(new Rabbit() instanceof Rabbit); // true



let arr = [1, 2, 3];

// instanceof puede usarse para comprobar si algo es un Array
alert(arr instanceof Array); // true → porque arr fue creado como un Array

// En JavaScript, todos los arrays son también objetos
alert(arr instanceof Object); // true → Array hereda de Object



class Animal {}

class Perro extends Animal {}

let perro = new Perro();

// instanceof también funciona con la herencia
// Perro hereda de Animal, por eso perro también es un Animal
alert(perro instanceof Animal); // true



let obj = {};

alert(obj); // [object Object]

// toString() convierte el objeto a una cadena de texto (string)
// Por defecto, todos los objetos normales muestran "[object Object]"
alert(obj.toString()); // [object Object]
