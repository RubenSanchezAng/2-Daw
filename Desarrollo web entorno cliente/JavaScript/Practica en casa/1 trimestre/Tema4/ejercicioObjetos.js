class Vehiculo{
    constructor(marca, modelo, velocidad, enCirculación){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.enCirculación = enCirculación;
    }
    arrancar(){
        this.enCirculación = true;
        console.log("Ha arrancado");
    }
    detener(){
        this.enCirculación = false;
    }
    acelerar(velocidad){
        this.velocidad += velocidad;
        this.enCirculación = true;
    }
    decelerar(velocidad){
        this.velocidad -=velocidad;
        if(this.velocidad == 0){
            this.enCirculación = false;
        }
    }
    mostrarDatos(){
        console.log(JSON.stringify(this));
    }
}
class Coche extends Vehiculo{
    constructor(marca, modelo, velocidad, enCirculación, ruedas){
        super(marca, modelo, velocidad, enCirculación);
        this.ruedas = ruedas;
    }
    mostrarRuedas(){
        console.log("El coche tiene "+ this.ruedas + " ruedas");
    }
}
let coche1 = new Coche("Volswagen", "polo", 0, false, 4);
coche1.mostrarDatos();