let frase = "Hola soy juan me llaman juanito tengo 40 años y vivo en alaquas especificamente valencia españa europa";
let fraseSeparada = frase.split(" ");
let i = 0;

let intervalo = setInterval(() =>{

    console.log(fraseSeparada[i] + "\n");
    i++;
    if(i >= fraseSeparada.length){
        clearInterval(intervalo);
        i = 0;
        console.log("Ya no hay mas palabras");
    }
},1000);

