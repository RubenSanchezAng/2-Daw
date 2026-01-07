function telephoneCheck(str) {
  let valido = true;
  str = str.trim();

  if (str[0] === "1") {
    if (str[1] === " ") {
      str= str.slice(2);
    } else {
      str= str.slice(1);
    }
  }
  let numeros = "";
  for (let i = 0; i < str.length; i++) {
    let ch= str[i];
    if (ch >= "0" && ch <="9") {
      numeros += ch;
    }
  }
  if (numeros.length !== 10) {
    valido = false;
  }
  let open = str.indexOf("(");
  let close = str.indexOf(")");
  if (open !== -1 || close !== -1) {
    if (open === -1 || close === -1){
    valido = false;
    }
    if (open !== 0 || close !== 4){
    valido = false;
    } 
  }
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!(ch >= "0" && ch <= "9") && ch !== " " && ch !== "-" && ch !== "(" && ch !== ")") {
      return false;
    }
  }
  return valido;
}

console.log(telephoneCheck("555-555-5555"));