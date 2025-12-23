const persona = {
    nombre: "Sergio",
    edad: 25,
    saludo: function(){
        console.log("Hola");
    }
}    
Object.prototype.dimeAlgo = function(){
    console.log("Algo");
}
const Elena = Object.create(persona);
//Cambia a Elena porque lo principal es elena y después si no están definidos se ponen los otros
Elena.nombre= "Elena";

const str =new String("I am string");

//Herencia prototipal
function Vehiculo(marca){
    this.marca = marca;
}
Vehiculo.prototype.informacion= function(){
    return `Marca del vehiculo ${this.marca}`;
}
function Coche(marca,modelo){
    Vehiculo.call(this, marca);
    this.modelo = modelo;
}
//Esto le dice que coche hereda de vehiculo
Coche.prototype = Object.create(Vehiculo.prototype);
//Dice que el constructor de coche es Coche
Coche.prototype.constructor = Coche;

Coche.prototype.mostrarModelo = function(){
    return `Modelo del coche ${this.modelo}`;
}
let miCoche = new Coche("Tesla", "Model y");
console.log(miCoche.mostrarModelo());
console.log(miCoche.informacion());

//Otro ejemplo
function Usuario(nombre,email){
    this.nombre = nombre;
    this.email = email;
}
Usuario.prototype.informacion = function(){
    return `${this.nombre} kkf ${this.email}`;
}
function Administrador(nombre,email){
    Usuario.call(this, nombre, email);
}
//Esto hace que hereda de ese objeto
Administrador.prototype = Object.create(Usuario.prototype);
//Le dice que ese es el constructor
Administrador.prototype.constructor = Administrador;
Administrador.prototype.accesoTotal = function(){
    return `El usuario ${this.nombre} tiene acceso total`;
}

function Moderador(nombre,email){
    Usuario.call(this, nombre, email);
}
Moderador.prototype = Object.create(Usuario.prototype);
Moderador.prototype.constructor = Moderador;
Moderador.prototype.cambiarDatos = function(){
    return `El usuario ${this.nombre} puede cambiar datos`;
}
let admin = new Administrador("Alice", "alice@gmail.com");
let mod = new Moderador("Bob", "bob@gmail.com");

console.log(admin.informacion());
console.log(mod.informacion());
console.log(admin.accesoTotal());
console.log(mod.cambiarDatos());
