/* ==========================================
     🧱 CLASES, OBJETOS Y CLOSURES EN JAVASCRIPT
   ========================================== */

/* ---------------------------------
   🧩 INTRODUCCIÓN
   ---------------------------------
   En JavaScript, TODAS las clases son funciones constructoras.
   Aunque JS usa prototipos, ES6 introdujo la palabra `class`
   para facilitar la escritura y lectura del código.
*/

/* ---------------------------------
   🔹 FUNCIÓN CONSTRUCTORA
   --------------------------------- */

function Heroe(nombre, nivel) {
  this.nombre = nombre;
  this.nivel = nivel;
}

const heroe1 = new Heroe('Link', 10);
console.log(heroe1); // Heroe { nombre: 'Link', nivel: 10 }

/* ---------------------------------
   🔹 SINTAXIS DE CLASE (ES6)
   --------------------------------- */

class HeroeClase {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }
}

const heroe2 = new HeroeClase('Zelda', 20);
console.log(heroe2); // HeroeClase { nombre: 'Zelda', nivel: 20 }

/*
📘 Ambas crean objetos con las mismas propiedades,
solo cambia la sintaxis.
*/

/* ---------------------------------
   ⚙️ CREACIÓN DE MÉTODOS
   ---------------------------------
   Los métodos pueden añadirse con prototype (función constructora)
   o dentro de la clase directamente.
*/

// 💡 Con función constructora:
function HeroeFn(nombre, nivel) {
  this.nombre = nombre;
  this.nivel = nivel;
}

HeroeFn.prototype.saludar = function() {
  return `${this.nombre} dice hola.`;
};

const heroe3 = new HeroeFn('Mario', 5);
console.log(heroe3.saludar()); // Mario dice hola.

// 💡 Con sintaxis de clase:
class Heroe {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }

  saludar() {
    return `${this.nombre} dice hola.`;
  }
}

const heroe4 = new Heroe('Luigi', 7);
console.log(heroe4.saludar()); // Luigi dice hola.

/* ---------------------------------
   🧬 HERENCIA
   ---------------------------------
   Permite crear una clase que herede de otra.
*/

// 💡 Con función constructora:
function Mago(nombre, nivel, hechizo) {
  HeroeFn.call(this, nombre, nivel);
  this.hechizo = hechizo;
}

Mago.prototype = Object.create(HeroeFn.prototype);
Mago.prototype.constructor = Mago;

const mago1 = new Mago('Gandalf', 100, 'Bola de Fuego');
console.log(mago1); // Mago { nombre: 'Gandalf', nivel: 100, hechizo: 'Bola de Fuego' }

// 💡 Con sintaxis de clase:
class MagoClase extends Heroe {
  constructor(nombre, nivel, hechizo) {
    super(nombre, nivel); // Llama al constructor del padre
    this.hechizo = hechizo;
  }
}

const mago2 = new MagoClase('Merlín', 150, 'Rayo de Hielo');
console.log(mago2); // Mago { nombre: 'Merlín', nivel: 150, hechizo: 'Rayo de Hielo' }

/* ---------------------------------
   🧱 ATRIBUTOS Y MÉTODOS ESTÁTICOS
   ---------------------------------
   Los métodos estáticos pertenecen a la clase, NO a la instancia.
*/

class Ejemplo {
  constructor(propiedad) {
    this.propiedad = propiedad;
  }

  static metodoEstatico() {
    return 'soy estático';
  }

  metodoNormal() {
    return 'soy un método normal';
  }
}

const ejemplo = new Ejemplo(123);
console.log(Ejemplo.metodoEstatico()); // soy estático
console.log(ejemplo.metodoNormal());   // soy un método normal

/*
⚠️ Importante:
La instancia (ejemplo) NO tiene acceso a metodoEstatico().
Solo se llama desde la clase.
*/

/* ---------------------------------
   🔒 ATRIBUTOS PRIVADOS (ES2019)
   ---------------------------------
   Se declaran con `#` y solo son accesibles dentro de la clase.
*/

class Rectangulo {
  #ancho = 20;
  #alto = 10;

  obtenerDimensiones() {
    return { ancho: this.#ancho, alto: this.#alto };
  }

  aumentarTamano() {
    this.#ancho++;
    this.#alto++;
  }
}

const rect1 = new Rectangulo();
console.log(rect1.obtenerDimensiones()); // { ancho: 20, alto: 10 }
console.log(rect1.ancho); // undefined ❌
console.log(rect1.alto);  // undefined ❌

/* ---------------------------------
   🧠 PRIVACIDAD CON CLOSURES
   ---------------------------------
   Antes de los atributos privados (#), se usaban closures.
*/

class RectanguloClosure {
  constructor() {
    let ancho = 20;
    let alto = 10;

    this.obtenerDimensiones = () => ({ ancho, alto });
    this.aumentarTamano = () => { ancho++; alto++; };
  }
}

const rect2 = new RectanguloClosure();
console.log(rect2.obtenerDimensiones()); // { ancho: 20, alto: 10 }
console.log(rect2.ancho);  // undefined
console.log(rect2.alto);   // undefined

/*
💬 Las variables ancho y alto están "encerradas" en el ámbito
del constructor y solo accesibles a través de sus métodos.
*/

/* ---------------------------------
   🧩 CLOSURE (FUNCIONES AUTOINVOCADAS)
   ---------------------------------
   Un closure permite mantener variables privadas.
*/

let sumar = (function () {
  let contador = 0; // variable privada
  return function () {
    contador += 1;
    return contador;
  };
})();

console.log(sumar()); // 1
console.log(sumar()); // 2

/*
📘 El closure “recuerda” el valor de la variable privada
aunque la función ya haya terminado su ejecución.
*/

/* ---------------------------------
   ⚙️ SETTERS Y GETTERS
   ---------------------------------
   Permiten controlar cómo se acceden o modifican propiedades.
*/

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  set establecerPrecio(precio) {
    this.precio = isNaN(precio) ? 0 : precio;
  }

  get obtenerPrecio() {
    return parseFloat(this.precio);
  }
}

let producto1 = new Producto('PC', 1000);
producto1.establecerPrecio = 900;
console.log(producto1.obtenerPrecio); // 900

/*
💡 Los setters y getters ayudan a validar datos
y controlar el acceso a propiedades.
*/

/* ---------------------------------
   🧭 CLASES, OBJETOS Y `this`
   ---------------------------------
   En JS, el valor de `this` depende de cómo se invoque la función.
*/

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  decirHola() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona = new Persona('Carlos');
persona.decirHola(); // Hola, soy Carlos

/*
💬 En métodos de clase, `this` apunta al objeto que los invoca.
   Pero en funciones normales o callbacks, puede perderse el contexto.
   (Para evitarlo se usan funciones flecha o .bind)
*/

/* ---------------------------------
   📌 RESUMEN FINAL
   ---------------------------------
   🔸 class → Azúcar sintáctico sobre prototipos.
   🔸 constructor() → Inicializa propiedades.
   🔸 extends / super() → Herencia.
   🔸 static → Métodos que pertenecen a la clase, no a las instancias.
   🔸 #prop → Propiedades privadas (ES2019+).
   🔸 closures → Manera clásica de crear variables privadas.
   🔸 getters/setters → Controlan acceso y validación de propiedades.
   🔸 this → Depende del contexto de ejecución.
*/
