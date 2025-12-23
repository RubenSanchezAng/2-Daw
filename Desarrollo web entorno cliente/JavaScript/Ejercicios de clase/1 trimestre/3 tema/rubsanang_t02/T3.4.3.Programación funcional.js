function rot13(str) {
  const abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let fraseDescifrada = "";
  for (let i = 0; i < str.length; i++) { 
    let letra = str[i].toUpperCase();
    let posicion = abecedario.indexOf(letra);
    if(posicion != -1){
      fraseDescifrada += abecedario[(posicion + 13) % 26];
    }else if(letra == " "){
            fraseDescifrada += " ";
          }else{
            fraseDescifrada += letra;
          }
  }
  return fraseDescifrada;
}

console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));