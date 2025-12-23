"use strict";

//20 Octubre 2025


const alumno = {
    nombre: 'Carlos',
    apellidos: 'Pérez Ortiz',
    edad: 19,
    ciclo: { clase: "DWEC", descrip: "aprende front-end"}
}

//console.log("alumno.ciclo.loquesea ", alumno.ciclo.loquesea)

for (let prop in alumno) {
    console.log(prop + ': ' + alumno[prop])
}

/* EJERCICIO: Crea un objeto llamado tvSamsung con las propiedades nombre (“TV Samsung 42”),
 categoria (“Televisores”), unidades (4), precio (345.95) y con un método llamado importe 
 que devuelve el valor total de las unidades (nº de unidades * precio)   */

let tvSamsung = {
    nombre : "TV Samsung 42",
    categoria : "Televisores",
    unidades : 4,
    precio : 345.95,
    importe : function ()   {
            console.log(this === tvSamsung);
            return this.unidades * this.precio;
    }
}
//console.log(tvSamsung)
console.log(tvSamsung.importe())


const ana = {
    edad: 3
}

const carlos = {
    nombre: 'Carlos',
    apellidos: 'Pérez Ortiz',
    edad: 19,
    sobrina: {...ana}

};
const alumnoCarlos = {
    ...carlos,
    ciclo: 'DAW',
    curso: 2,
};


let restCarlos = {...carlos}
let copiaRefCarlos = carlos;

console.log("restCarlos === personaCarlos, ",restCarlos === carlos)
console.log("copiaCarlos === personaCarlos, ",copiaRefCarlos === carlos)
console.log("restCarlos.sobrina === carlos.sobrina? ", restCarlos.sobrina === carlos.sobrina)

copiaRefCarlos.edad= "105"
restCarlos.sobrina.edad= "500"
console.log("edad es : " , carlos.edad) // 19 ó 105?
console.log("ana.edad ", ana.edad)

console.log("restCarlos edad", restCarlos.edad)

for (let prop in restCarlos){
    console.log(restCarlos[prop] === carlos[prop])
}



//console.log(alumnoCarlos)


// --------------


function Apple(type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };

    return 1;
}
let myApple = new Apple("Granny Smith");
let myApple2= new Apple("Verde");
myApple2.color = "amarillo"
console.log(myApple.getInfo()); // "red Granny Smith apple"
console.log(myApple);
console.log(myApple2);