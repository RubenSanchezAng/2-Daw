// ===============================
// setTimeout y clearTimeout
// ===============================
console.log("setTimeout y clearTimeout");

// Función simple para usar con setTimeout
function sayHi() {
  console.log('Hello');
}

// Después de 1 segundo se ejecuta 'Hello'
// ⚠️ Importante: no poner sayHi() con paréntesis, o se ejecutaría inmediatamente
setTimeout(sayHi, 1000);

// Se puede pasar parámetros al setTimeout
function sayHiConParametros(phrase, who) {
  console.log(phrase + ', ' + who);
}

// Aquí pasamos "Hello" y "John" como parámetros
setTimeout(sayHiConParametros, 1000, "Hello", "John"); 

// También se puede usar una función flecha directamente
setTimeout(() => console.log('Hello desde arrow function'), 1000);

// clearTimeout sirve para cancelar un setTimeout antes de que ocurra
let timerId = setTimeout(() => console.log("never happens"), 1000);
clearTimeout(timerId); // Este timeout nunca se ejecutará

// ===============================
// setInterval y clearInterval
// ===============================
console.log("setInterval");

// setInterval ejecuta una función repetidamente cada cierto tiempo (2s en este caso)
let intervalId = setInterval(() => console.log('tick'), 2000);

// Después de 5 segundos se detiene el intervalo
setTimeout(() => { 
  clearInterval(intervalId); 
  console.log('stop'); 
}, 5000);

// ===============================
// setTimeout anidado
// ===============================
// Este patrón usa un setTimeout dentro de otro para tener más control sobre los intervalos.
// A diferencia de setInterval, este espera a que el trabajo termine antes de programar el siguiente.

let nestedTimerId = setTimeout(function tick() {
  console.log('tick (anidado)');
  nestedTimerId = setTimeout(tick, 2000); 
}, 2000);

// Detenemos el setTimeout anidado después de 5 segundos
setTimeout(() => {
  clearTimeout(nestedTimerId);
  console.log('setTimeout anidado detenido');
}, 5000);

// ===============================
// Ejercicios prácticos
// ===============================

// Mensaje único después de 6 segundos
setTimeout(() => {
  console.log("Han pasado 6 segundos");
}, 6000);

// Contador que incrementa cada 2 segundos hasta llegar a 5
let contador = 0;

const contadorIntervalo = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  
  if (contador === 5) {
    clearInterval(contadorIntervalo);
    console.log('Contador detenido');
  }
}, 2000);