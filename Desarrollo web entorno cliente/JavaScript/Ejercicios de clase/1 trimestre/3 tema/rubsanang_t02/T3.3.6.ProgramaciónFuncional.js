//Coge los numeros enteros y luego los multiplica por ellos mismow 
const multiplicaEnteros = arr => {
   
   return arr
    .filter(num => num > 0 && Number.isInteger(num))  // Filtra los enteros positivos
    .map(num => num * num);         
  
};

const squaredIntegers = multiplicaEnteros([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
