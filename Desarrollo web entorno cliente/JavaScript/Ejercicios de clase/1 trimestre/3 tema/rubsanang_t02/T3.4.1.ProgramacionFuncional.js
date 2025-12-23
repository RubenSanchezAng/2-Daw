//Ejercicio palindroma
function palindrome(str) {
  let palindroma = true;

  let array = str.split(/[^A-Za-z0-9]+/);
  let frase = array.join("").toLowerCase();  
  
  for(let i = 0; i < frase.length/2 ; i++){
    let parteFinal = frase.length - 1 - i;
    
    if(frase[i] !== frase[parteFinal]){
      palindroma = false;
    } 
  }
  return palindroma;
}

