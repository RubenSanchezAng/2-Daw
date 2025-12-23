// FUENTE ORIGINAL:
// https://cipfpbatoi.github.io/materials/daw/dwc/01-js/09-ajax.html#ejemplos-de-env%C3%ADo-de-datos

"use strict";

// URL base de la API que usaremos
const SERVER = 'https://jsonplaceholder.typicode.com';

// Referencia al <tbody> donde pintaremos los posts en la tabla
const tbody = document.querySelector('tbody');

// Esperamos a que toda la ventana cargue para asignar listeners
window.addEventListener('load', function () {

  // Capturamos el evento submit del formulario con id="form-show"
  document.getElementById('form-show').addEventListener('submit', (event) => {

    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtenemos el valor introducido por el usuario
    const idUser = document.getElementById('id-usuario').value;

    // Validación: comprobamos que sea un número no vacío
    if (isNaN(idUser) || idUser.trim() === '') {
      alert('Debes introducir un número');
      return; // Frenamos el flujo si el dato no es válido
    }

    console.log("Llamamos a getPosts con idUser =", idUser);

    /**
     * Llamamos a getPosts(), que devuelve una Promesa.
     * Si la promesa se resuelve (resolve), entramos al then().
     * Si la promesa se rechaza (reject), entramos al catch().
     */
    getPosts(idUser)
      .then(posts => {
        // Limpiamos la tabla antes de volver a pintarla
        tbody.innerHTML = '';

        // Recorremos el array de posts obtenido del servidor
        posts.forEach(post => {
          // Creamos una fila <tr> por cada post
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>`;

          // Insertamos la fila en el tbody
          tbody.appendChild(row);
        });

        // Mostramos el número de posts encontrados
        document.getElementById('num-posts').textContent = posts.length;

        console.log("Tabla actualizada con", posts.length, "posts");
      })
      .catch(error => {
        /**
         * Si la promesa se rechaza, gestionamos el error aquí.
         * Puede venir de un error HTTP o de un error de red.
         */
        console.error("Error al obtener los posts:", error);
      });
  });
});

/**
 * getPosts():
 * Devuelve una PROMESA que representa la petición AJAX.
 * 
 * La promesa tiene dos callbacks:
 *   - resuelve → (equivalente a resolve): si todo va bien
 *   - rechaza  → (equivalente a reject): si hay error
 */
function getPosts(idUser) {

  return new Promise((resuelve, rechaza) => {

    // Creamos una petición AJAX tradicional con XMLHttpRequest
    const peticion = new XMLHttpRequest();

    // Preparamos la petición GET con el userId
    peticion.open('GET', `${SERVER}/posts?userId=${idUser}`);

    // Enviamos la petición al servidor
    peticion.send();

    /**
     * Se ejecuta cuando el servidor responde,
     * incluso si la respuesta es un error (404, 500…)
     */
    peticion.addEventListener('load', () => {
      if (peticion.status === 200) {
        // Si la respuesta es correcta (200 OK),
        // Convertimos el JSON en un objeto JS
        const datosOK = JSON.parse(peticion.responseText);

        // Cumplimos la Promesa → irá al then()
        resuelve(datosOK);

      } else {
        // Si la respuesta tiene error HTTP
        const datosERR = `Error ${peticion.status} (${peticion.statusText})`;

        // Rechazamos la Promesa → irá al catch()
        rechaza(datosERR);
      }
    });

    /**
     * Se ejecuta si la petición NO llega a completarse,
     * por ejemplo si se pierde la conexión.
     */
    peticion.addEventListener('error', () => {
      rechaza('Error en la petición HTTP');
    });

    // El executor de una Promesa no devuelve nada,
    // el flujo lo controlan resuelve() y rechaza().
  });
}
