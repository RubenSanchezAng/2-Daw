const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length));




//Las funciones flecha no predeterminan this al ámbito o alcance de window, se ejecutan en el alcance en que se crean:
window.age = 10; // <-- ¿me notas?
function Person() {
  this.age = 42; // <-- ¿me notas?
  setTimeout(() => {
    // <-- Función flecha ejecutándose en el ámbito de "p" (una instancia de Person)
    console.log("this.age", this.age); // genera "42" porque la función se ejecuta en el ámbito de Person
  }, 100);
}

var p = new Person();