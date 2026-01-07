let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio",
             "Julio","Agosto","Septiembre","octubre","Noviembre","diciembre"];

let dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

let fechaNac = new Date("2006","11", "25");
let año = fechaNac.getFullYear();
let mes = meses[fechaNac.getMonth()];
let dia = fechaNac.getDate();
console.log("Nacio el "+dia+ " de "+ mes + " de "+año);

let fechaAct = new Date();
console.log(fechaAct);

let edad = fechaAct.getFullYear() - fechaNac.getFullYear();
if(fechaAct.getMonth() < fechaNac.getMonth()){
    edad--;
}else if(fechaAct.getDate() < fechaNac.getDate()){
    edad--;
}
console.log(edad);

let fechaNac2 = new Date("2008","9", "11");
año = fechaNac2.getFullYear();
mes = meses[fechaNac2.getMonth()];
dia = fechaNac2.getDate();

let diaSemana = dias[fechaNac2.getDay()];
console.log("La chica mas guapa del mundo nacio un "+ diaSemana+ " dia "+dia+ " del "+ mes + " de "+año);