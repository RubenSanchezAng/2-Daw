//Instalar node
let aux, re, msg;


//Esto es la expresión regular
re = /hol/
msg= "h ola mundo";

//.test me dice true si existe o no
//aux = re.test(msg);
console.log(aux);

msg= "h ola mundo hola";
//aux = re.test(msg);
console.log(aux);

//match da un array , te dice el index donde esta, la palabra que ha encontrado y la cadena entera
msg= "hola mundo holas";
console.log(msg.match(re));


//Muestra cualquier hol que luego incluya una a b c
re=/hol[abc]/g
msg = "hola mundo asf holc";
console.log(re.test(msg));
console.log(msg.match(re));

//Al poner signo ^ dentro del corchete no muestra todos los hol que no incluyan a b c
//Al poner signo ^ al principio solo coge el primero
re=/hol[^abc]/g
msg = "hola mundo asf holc hole";
console.log(re.test(msg));
console.log(msg.match(re));


//Signo $ solo coge la ultima 
//Busca la palabra que tenga de la a a la z o del 0 al 9 que empieze por hol
re=/hol[a-zA-Z-0-9]/g
msg = "hola mundo asf holc hole hol1";
console.log(re.test(msg));
console.log(msg.match(re));

//Buscas a el - o la z para eso hay que escapar que es \
re=/[a\-z\\]/

//Buscas que sea HTTP O HTTPS,luego tenga //. y ademas que tenga es o com  
re= /(http|https):\/\/.+[.](es|com)/;
msg= "https://google.com";
console.log(re.test(msg));
msg= "http://google.es";
console.log(re.test(msg));
msg= "htts://google.com";
console.log(re.test(msg));
msg= "http://googles.rd";
console.log(re.test(msg));
msg = "https://google.com \n https://apple.es";
console.log(re.exec(msg));

//\d es digito y el + es para que los agrupes, si pones + es 0 o mas veces

re = /\d+/
msg = "hjhdhjhdhjjhfd 1232323ghg122";
console.log(msg.match(re));


//El interrogante hace que en el caso de que exista eso cogera todo junto si no cogera lo otro o por separado
re = /[a-z] + (.txt)?/
msg = "fichero ficher.doc  fichero.txt";