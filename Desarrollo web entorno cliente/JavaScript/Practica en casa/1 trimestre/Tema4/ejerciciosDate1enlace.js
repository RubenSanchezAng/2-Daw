/*
EJERCICIO: Realiza en la consola los siguientes ejercicios (usa las variables que creaste antes)

muestra el día de la semana en que naciste
modifica fecNac1 para que contenga la fecha de tu cumpleaños de este año (cambia sólo el año)
muestra el día de la semana de tu cumpleaños de este año
calcula el nº de días que han pasado desde que naciste hasta hoy
*/
let fecNac1 = new Date(2006, 11, 25);
let fecNac2 = new Date("2006-12-25");

console.log(fecNac1.getDay());
console.log(fecNac2.getDay());

fecNac1.setFullYear(2025);
console.log(fecNac1.getDay());


let hoy = new Date();
let diferencia = hoy - fecNac2;
let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
console.log("Dias desde que naci " + dias);

//Diferentes formas de mostrar la fecha

console.log(fecNac1.toString()); //Segunda mejor
console.log(fecNac1.toUTCString());
console.log(fecNac1.toDateString());
console.log(fecNac1.toTimeString());
console.log(fecNac1.toISOString());
console.log(fecNac1.toLocaleString());
console.log(fecNac1.toLocaleDateString()); //fAVORITA
console.log(fecNac1.toLocaleTimeString());

let fechaAcutal = ("2025-01-01");

if(fecNac1 > fechaAcutal){
    console.log("Eres mas viejo");
}else
    console.log("Eres joven");

console.log(fechaAcutal.toString()); //fAVORITA

