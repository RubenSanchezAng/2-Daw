// Escribe un programa que pida dos palabras y determine si son anagramas (es decir, si tienen las mismas letras en distinto orden).

// Ejemplo: “roma” y “amor” → ✅ Son anagramas.

let palabra1 ="roma";
let palabra2 = "amog";

function comprobarPalabra(palabra1, palabra2){
    let letra1 = palabra1.split("");
    let letra2 = palabra2.split("");
    letra1.sort();
    letra2.sort();
    union1 = letra1.join("");
    union2 = letra2.join("");

    if(union1 == union2){
        console.log("La palabra es anagrama");
    }else
        console.log("La palabra no es un anagrama");
}
comprobarPalabra(palabra1,palabra2);