
function fibonacci (cantidad){
    let secuencia = [0,1];
    for (let i = 2; i < cantidad ; i++) {
        secuencia.push((secuencia[i-1]+ secuencia[i-2]));                
    }
    return secuencia;
}
console.log(fibonacci(10));
console.log(fibonacci(8));
console.log(fibonacci(3));
console.log(fibonacci(7));