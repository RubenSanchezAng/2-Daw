function Vehiculo(marca, modelo, velocidad, enCirculación){
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.enCirculación = enCirculación;
}
Vehiculo.prototype.arrancar = function(){
    this.enCirculación = true;
}
Vehiculo.prototype.detener = function() {
    this.enCirculación = false;
}
Vehiculo.prototype.acelerar = function(km){
    this.velocidad += km;
    this.enCirculación = true;
}
Vehiculo.prototype.frenar = function(km){
    this.velocidad -= km;
    if(this.velocidad == 0){
        this.enCirculación = false;
    }
}
function Coche(marca, modelo, velocidad, enCirculación, numPuertas){
    Vehiculo.call(this,marca, modelo, velocidad, enCirculación);
    this.numPuertas = numPuertas;
}
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

Coche.prototype.mostrarPuertas = function (){
    console.log("El coche tiene "+this.numPuertas+ " puertas");
}
function Moto(marca, modelo, velocidad, enCirculación, cilindrada){
    Vehiculo.call(this,marca, modelo, velocidad, enCirculación);
    this.cilindrada = cilindrada;
}
Moto.prototype = Object.create(Vehiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.hacerCaballito = function (){
    console.log(`La moto ${this.modelo} está haciendo caballito`);
}

const garaje = {
    vehiculos : [],
    mostrarDatos: function(){
        for (const vehiculo of this.vehiculos) {
            if(vehiculo instanceof Coche){
                if(vehiculo.enCirculación == true){
                    console.log(`El coche de marca ${vehiculo.marca} y modelo ${vehiculo.modelo} va a una velocidad de ${vehiculo.velocidad} km/h tiene ${vehiculo.numPuertas} puertas y está en circulación`);
                }else
                    console.log(`El coche de marca ${vehiculo.marca} y modelo ${vehiculo.modelo} va a una velocidad de ${vehiculo.velocidad} km/h tiene ${vehiculo.numPuertas} puertas y está parado`);

            }else if(vehiculo.enCirculación == true){
                    console.log(`La moto de marca ${vehiculo.marca} y modelo ${vehiculo.modelo} va a una velocidad de ${vehiculo.velocidad} km/h tiene ${vehiculo.cilindrada} cilindros y está en circulación`);
                  }else
                    console.log(`La moto de marca ${vehiculo.marca} y modelo ${vehiculo.modelo} va a una velocidad de ${vehiculo.velocidad} km/h tiene ${vehiculo.cilindrada} cilindros y está parado`);

        }
    }
}
// Crear vehículos
let coche1 = new Coche("Toyota", "Corolla", 0, false, 4);
let moto1 = new Moto("Yamaha", "R1", 0, false, 600);

// Añadir al garaje
garaje.vehiculos.push(coche1, moto1);

// Mostrar datos iniciales
garaje.mostrarDatos();

// Probar métodos
coche1.arrancar();
coche1.acelerar(80);
moto1.arrancar();
moto1.acelerar(120);
moto1.hacerCaballito();

// Mostrar datos actualizados
garaje.mostrarDatos();