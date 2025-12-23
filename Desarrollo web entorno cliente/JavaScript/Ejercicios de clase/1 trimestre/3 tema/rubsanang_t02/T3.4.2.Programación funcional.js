function convertToRoman(num) {  

  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let resultado = "";

  for (let i = 0; i < valores.length; i++) {
    while(num >= valores[i]){
        resultado += romanos[i];
        num -= valores[i]; 
    }
  }
    return resultado;
}

console.log(convertToRoman(100005));
console.log(convertToRoman(102));
console.log(convertToRoman(99));
console.log(convertToRoman(88));