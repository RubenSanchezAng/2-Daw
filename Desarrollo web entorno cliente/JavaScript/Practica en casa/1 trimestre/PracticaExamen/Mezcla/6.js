let a = "hola soy juan";

let cadena = a.split("");
let cantidad = cadena.filter((palabra) => "aeiou".includes(palabra));
console.log(cantidad.length);