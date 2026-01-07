"use strict";
class Palabra{
    constructor(palabra){
        this.original = palabra;
        this.procesado = palabra;
        this.esPalindroma = false;
    }
    mostrarDatos(){
        console.log(JSON.stringify(this));
    }
    comprobar(){
        this.procesado = this.original.split("").reverse();
        this.procesado = this.procesado.join("");

        if(this.original == this.procesado){
            this.esPalindroma = true;
        }
        this.mostrarDatos();
    }
}
let a = new Palabra("hola");
a.comprobar();
let b = new Palabra("amoma");
b.comprobar();
