//Numero primo
function esPrimo (numero){
  let primo = "El número es primo";
    if(numero <= 1){
        primo = "El número no es primo";
    }
  for (let i = 2 ; i < numero; i++) {
    if(numero % i == 0 && numero != i ){
        primo = "El número no es primo";
    }
  }
  return primo;
}
console.log(esPrimo(4));
console.log(esPrimo(13));
console.log(esPrimo(21));
console.log(esPrimo(17));

