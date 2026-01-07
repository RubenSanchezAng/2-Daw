const saludar = function(nombre){
    return "Hola "+ nombre;
}
console.log(saludar("Carlos"));
console.log(saludar);

const a = "Hey!";

function global(){
 const b = "que";
 //Está función tiene acceso a todas las variables pero global no entiende a b
 function local() {
    const c = "Tal";
    return a + b + c;
 }
 return local;
}

console.log(global());
//Para llamar a local hay que poner doble () o usar clousure
console.log(global()());

const clousure = global();
console.log(clousure);

//Esto es un clousure se pone una (antes de functiob y cuando se cierra el codigo un ), 
// además al final se pone().
const miContador = (function(){
    let _contador = 0;
    function incrementar (){
        return _contador++;
    }
     function decrementar (){
        return _contador--;
    }
     function valor (){
        return _contador;
    }
    return {
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }
})();
console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.valor());