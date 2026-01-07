//1️⃣ Obtener propiedades específicas de un objeto
let persona = { nombre: "Ana", edad: 25, ciudad: "Valencia", profesion: "Ingeniera" };
// Crea una función que retorne solo el nombre y la profesión usando desestructuración
function darNombre({nombre : ana , profesion : ing}){
    return `Nombre: ${ana}, Profesión: ${ing}`;
}
console.log(JSON.stringify(darNombre(persona)));
console.log(darNombre(persona));

//2️⃣ Intercambiar valores de propiedades
    let coordenadas = { x: 10, y: 20 };
// Crea una función que intercambie x e y usando desestructuración
    function cambiarCoordenada({x , y}){
        let nuevaCoordenada = {
            x: y,
            y: x
        }
        return nuevaCoordenada;
    }
    console.log(cambiarCoordenada(coordenadas));
//3️⃣ Sumar valores de propiedades numéricas
    let numeros = { a: 5, b: 10, c: 3 };
// Crea una función que sume todas las propiedades usando Object.values()
    function sumarDatos(numeros){
        return Object.values(numeros).reduce((contador, suma)=> contador + suma, 0);
    }
    console.log("La suma de los datos es "+ sumarDatos(numeros));
//4️⃣ Clonar un objeto y modificar una propiedad
    let coche = { marca: "Toyota", modelo: "Corolla", año: 2015 };

// Crea una función que retorne un nuevo objeto con el mismo coche pero con el año actualizado
    function clonar(objeto){
        let nuevoObjeto = structuredClone(objeto);
        nuevoObjeto.año = 2025;
        return nuevoObjeto;
    }
    console.log(JSON.stringify(clonar(coche)));
//5️⃣ Combinar objetos con spread
    let obj1 = { a: 1, b: 2 };
    let obj2 = { b: 3, c: 4 };
// Crea una función que combine obj1 y obj2 en un nuevo objeto usando spread, sobrescribiendo valores si es necesario
    function combinarObjetos(obj1,obj2){
        let objetoCombi = {...obj2, ...obj1};

        return objetoCombi;
    }
        console.log(JSON.stringify(combinarObjetos(obj1,obj2)));
//6️⃣ Extra: Desestructuración en parámetros de función
    let estudiante = { nombre: "Luis", nota: 9, curso: "Programación" };
// Crea una función que reciba el objeto como parámetro y use desestructuración dentro de la firma de la función para imprimir:
// "Luis tiene una nota de 9 en el curso Programación"
    function mostrarDatos({ nombre, nota, curso}){

       return `${nombre} tiene una nota de ${nota} en el curso de ${curso}`;
    }
    console.log(mostrarDatos(estudiante));