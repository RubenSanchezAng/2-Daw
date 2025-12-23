"use strict";  
// Activa el modo estricto de JavaScript (más seguro, evita errores silenciosos)


// ----------------------------------------------------------
// VARIABLES GLOBALES
// ----------------------------------------------------------
const SERVER = 'https://jsonplaceholder.typicode.com';
// URL base del servidor falso JSONPlaceholder

const tbody = document.querySelector('tbody');
// Seleccionamos el <tbody> de la tabla, donde mostraremos los posts



// ----------------------------------------------------------
// INICIO: Esperar a que cargue toda la página
// ----------------------------------------------------------
window.addEventListener('load', () => {

  // Evento para el envío del formulario
  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault();  
    // Evita que la página se recargue al enviar el formulario

    // Tomamos el valor introducido por el usuario
    let idUser = document.getElementById('id-usuario').value;

    // Validación: debe ser un número
    if (isNaN(idUser) || idUser == '') {
      alert('Debes introducir un número');
    } else {
      console.log("Llamamos a getPosts con idUser =", idUser);

      // 👉 Se llama a la función que hace la petición AJAX.
      // Esta función NO devuelve nada. Funciona gracias a la lógica interna del evento "load".
      getPosts(idUser);

      console.log("Después de llamar a getPosts() (pero el AJAX sigue en curso)");
      // Esta línea se ejecuta antes de que lleguen los datos del servidor
    }
  });
});



// ----------------------------------------------------------
// FUNCIÓN PRINCIPAL: Realiza la petición AJAX
// Y TAMBIÉN PINTA LA TABLA (mala práctica, pero funcional)
// ----------------------------------------------------------
function getPosts(idUser) {

  console.log("INI getPosts(): preparando petición GET a:", SERVER + "/posts?userId=" + idUser);

  // Creamos el objeto AJAX
  const peticion = new XMLHttpRequest();

  // Configuramos la petición GET
  peticion.open('GET', SERVER + '/posts?userId=' + idUser);

  // Enviamos la petición al servidor
  peticion.send();


  // --------------------------------------------------------
  // EVENTO LOAD
  // Este evento SOLO se dispara cuando:
  // 1. La petición ha terminado
  // 2. No hubo errores de red
  // 3. El servidor devolvió algo
  // --------------------------------------------------------
  peticion.addEventListener('load', function () {

    console.log("eventListener 'load': respuesta recibida con código:", peticion.status);

    if (peticion.status === 200) {
      // Si el servidor ha respondido correctamente (OK)

      // Convertimos el JSON recibido en un array de objetos JS
      const datos = JSON.parse(peticion.responseText);

      console.log("getPosts(): datos parseados:", datos);

      // ----------------------------------------------------
      // *** MALA PRÁCTICA ***
      // Aquí pintamos directamente la tabla,
      // pero esta función debería dedicarse SOLO a obtener datos.
      // ----------------------------------------------------

      // Vaciar la tabla antes de rellenarla
      tbody.innerHTML = '';

      // Rellenar la tabla con los posts recibidos
      datos.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${post.userId}</td>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>`;
        tbody.appendChild(row);
      });

      // Actualizamos el número total de posts mostrados
      document.getElementById('num-posts').textContent = datos.length;

    } else {
      // Si la respuesta no es 200 → error del servidor
      console.error("Error " + peticion.status + " en la petición");
    }

    console.log("FIN eventlistener, dentro de getPosts()");
  });



  // --------------------------------------------------------
  // EVENTO error
  // Se activa si ocurre un error de conexión (no del servidor)
  // --------------------------------------------------------
  peticion.addEventListener('error', () =>
    console.error('getPosts(): Error en la petición HTTP')
  );

  console.log("FIN getPosts(): final de la función (pero el evento se gestionará luego con asincronía)");
  // Aquí la función termina PERO la petición todavía NO ha recibido respuesta.
  // Lo que ocurre después depende del evento "load".
}
