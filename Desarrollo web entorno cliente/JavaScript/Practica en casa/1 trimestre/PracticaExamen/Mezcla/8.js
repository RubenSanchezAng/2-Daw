let b = [
  { "nombre": "Ana", "edad": 29 },
  { "nombre": "Luis", "edad": 34 },
  { "nombre": "Maria", "edad": 22 }
];


let ordenada = b.sort((a,b) => a.edad - b.edad);
console.log(ordenada);

let nuevalista = b.map((a) => a.nombre);
console.log(nuevalista);

