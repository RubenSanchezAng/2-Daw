"use strict";
// Activa el modo estricto (evita errores silenciosos y malas prácticas)


const SERVER = 'https://jsonplaceholder.typicode.com';
// URL base del servidor de pruebas JSONPlaceholder

const tbody = document.querySelector('tbody');
// Guardamos el <tbody> donde mostraremos los posts en la tabla


// --------------------------------------------------------
// CUANDO CARGA LA PÁGINA
// --------------------------------------------------------
window.addEventListener('load', () => {

  // Evento de envío del formulario
  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault(); 
    // Evita reload de la página

    console.log('submit formulario')

    // Obtiene el valor introducido por el usuario
    let idUser = document.getElementById('id-usuario').value

    // Validación: debe ser número
    if (isNaN(idUser) || idUser.trim() == '') {
      alert('Debes introducir un número')
    } 
    else {
      console.log('Solicitando posts del usuario:', idUser)

      // ---------------------------------------------------------
      // Llamamos a getPosts con:
      // 1) id del usuario
      // 2) callbackOK = renderPosts  --> si todo va bien
      // 3) callbackERR = mostrarError --> si algo falla
      // ---------------------------------------------------------
      getPosts(idUser, renderPosts, mostrarError)
    }
  })
})



// --------------------------------------------------------
// FUNCIÓN DE ERROR (callbackERR)
// Se ejecuta solo si la petición AJAX falla
// --------------------------------------------------------
function mostrarError(msg) {
  console.error('ERROR:', msg)
  alert('Ha ocurrido un error: ' + msg)
}



// --------------------------------------------------------
// FUNCIÓN DE ÉXITO (callbackOK)
// Recibe "datos" desde getPosts() y actualiza la tabla
// --------------------------------------------------------
function renderPosts(datos) {

  console.log('Datos recibidos en renderPosts:', datos)

  // Vaciar tabla antes de pintarla
  tbody.innerHTML = ''

  // Crear una fila por cada post recibido
  datos.forEach(post => {
    const newPost = document.createElement('tr')
    newPost.innerHTML = `
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>`
    tbody.appendChild(newPost)
  })

  // Mostrar número total de posts
  document.getElementById('num-posts').textContent = datos.length;

  console.log('Tabla actualizada con', datos.length, 'posts')
}



// --------------------------------------------------------
// FUNCIÓN getPosts()
// HACE LA PETICIÓN AJAX
// Y LUEGO LLAMA AL CALLBACK CORRESPONDIENTE:
//   → callbackOK(datos) si todo va bien
//   → callbackERR(msgError) si falla
// --------------------------------------------------------
function getPosts(idUser, callbackOK, callbackERR) {

  /*
   Aquí está la clave:
   - getPosts() SOLO SE ENCARGA DE pedir los datos.
   - NO pinta nada, ni devuelve nada sincrónicamente.
   - Cuando llegan los datos, llama a callbackOK().
   - Si ocurre un error, llama a callbackERR().

   Esto hace que getPosts tenga ÚNICA responsabilidad (buena práctica).
  */

  console.log('Preparando petición AJAX…')

  // Crear el objeto AJAX
  const peticion = new XMLHttpRequest()

  // Configurar petición GET
  peticion.open('GET', SERVER + '/posts?userId=' + idUser)

  // Enviar petición
  peticion.send()


  // --------------------------------------------------------
  // EVENTO LOAD → Se ejecuta cuando la petición termina
  // --------------------------------------------------------
  peticion.addEventListener('load', function() {

    console.log('Petición completada con estado:', peticion.status)

    // Si la respuesta es correcta (200 OK)
    if (peticion.status === 200) {

      // Parseamos la respuesta JSON
      const datos = JSON.parse(peticion.responseText)

      console.log('Llamando callbackOK con los datos parseados')

      // Llamamos al callback de éxito
      callbackOK(datos)
    } 
    else {
      // Si la respuesta del servidor no es 200 → error del servidor
      callbackERR(
        "Error " + peticion.status + " (" + peticion.statusText + ")"
      )
    }
  })


  // --------------------------------------------------------
  // EVENTO ERROR → problemas de conexión (no del servidor)
  // --------------------------------------------------------
  peticion.addEventListener('error', () => {
    callbackERR('Error en la petición HTTP')
  })
}
