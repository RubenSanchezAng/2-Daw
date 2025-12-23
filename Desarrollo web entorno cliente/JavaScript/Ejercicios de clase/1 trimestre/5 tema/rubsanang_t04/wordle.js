let input = document.getElementById("palabra");
let boton = document.getElementById("boton");
let tabla = document.getElementById("tabla");
let palabraCorrecta = "queso";
let intentos = 5;
let mostrarResultado = document.createElement("h2");

let tecladoDiv = document.getElementById("teclado");
let letras = "QWERTYUIOPASDFGHJKLÑZXCVBNM".split("");

letras.forEach(letra => {
    let botonLetra = document.createElement("button");
    botonLetra.textContent = letra;
    botonLetra.id = "tecla-" + letra;
    tecladoDiv.appendChild(botonLetra);
    botonLetra.addEventListener("click", () => {
        if(input.value.length < 5){
            input.value += letra.toLowerCase();
        }
    });
});

function comprobarLongitud() {
    let palabra = input.value.toLowerCase();
    input.value="";
    if(palabra.length != 5){
        let error = document.createElement("h1");
        error.textContent = "Palabra con carácteres incorrectos";
        error.style.color = "red";
        document.body.append(error);
    } else {
        if(intentos != 0){
            comprobarPalabra(palabra);
            intentos--;
        } else {
            mostrarResultado.textContent ="No lo has conseguido";
            mostrarResultado.style.color = "red";
            document.body.append(mostrarResultado);
            intentos = 6;
            tabla.innerHTML="";
        }
    }
}

function comprobarPalabra(palabra) {
    let arrayPalabra = palabra.split("");
    let arrayPalabraCorrecta = palabraCorrecta.split("");
    let tr = document.createElement("tr");
    tabla.appendChild(tr);

    for (let i = 0; i < arrayPalabra.length; i++) {
        let td = document.createElement("td");
        td.textContent = arrayPalabra[i].toUpperCase();

        if(arrayPalabraCorrecta[i] === arrayPalabra[i]){
            td.style.backgroundColor = "green";
        } else if(arrayPalabraCorrecta.includes(arrayPalabra[i])){
            td.style.backgroundColor = "yellow";
            td.style.color = "black";
        } else {
            td.style.backgroundColor = "grey";
        }
        tr.appendChild(td);

        let tecla = document.getElementById("tecla-" + arrayPalabra[i].toUpperCase());
        if(arrayPalabraCorrecta[i] === arrayPalabra[i]){
            tecla.style.backgroundColor = "green";
        } else if(arrayPalabraCorrecta.includes(arrayPalabra[i])){
            if(tecla.style.backgroundColor !== "green")
                tecla.style.backgroundColor = "yellow";
                tecla.style.color = "black";
        } else {
            if(tecla.style.backgroundColor === "grey")
                tecla.style.backgroundColor = "grey";
        }
    }

    comprobarVictoria(palabra);
}

function comprobarVictoria(palabra) {
    if(palabraCorrecta === palabra){
        mostrarResultado.textContent= "¡Has acertado!";
        mostrarResultado.style.color = "green";
        document.body.append(mostrarResultado);
        intentos = 5;
        tabla.innerHTML= "";
    }
}

boton.addEventListener("click", comprobarLongitud);
