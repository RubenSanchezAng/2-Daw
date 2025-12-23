"use strict";

// URL del servidor falso JSONPlaceholder
const SERVER = 'https://jsonplaceholder.typicode.com';

// Seleccionamos el <tbody> donde pintaremos los posts
const tbody = document.querySelector('tbody');

window.addEventListener('load', () => {

  // Cuando se envía el formulario...
  document.getElementById('form-show').addEventListener('submit', (event) => {
    event.preventDefault();  // evita recargar la página

    // Obtenemos el ID del usuario
    let idUser = document.getElementById('id-usuario').value;

    // Validación básica: comprobar si es número
    if (isNaN(idUser) || idUser == '') {
      alert('Debes introducir un número');
    } 
    else {
      // 👉 Intentamos obtener los posts del usuario
      const datos = getPosts(idUser);  
      // ❌ PERO getPosts() devuelve undefined porque la petición AJAX es asíncrona

      console.log("los posts recibidos: ", datos); 
      // ❌ Aquí aparecerá "undefined"

      const numPosts = document.getElementById('num-posts'); // Span para mostrar el total

      // Limpia la tabla
      tbody.innerHTML = '';

      // ❌ ERROR: datos es undefined → no se puede hacer forEach
      datos.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${post.userId}</td>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>`;
        tbody.appendChild(row);
      });

      // ❌ Tampoco se puede leer datos.length (undefined)
      numPosts.textContent = datos.length;

      console.log("pintarTabla(): tabla actualizada con", datos.length, "posts");
    }
  });

});


// Esta función NO hace nada.
// Se supone que debería pintar la tabla, pero está vacía.
function pintarTabla(datos) {

}



// 🔥 FUNCIÓN PROBLEMÁTICA
function getPosts(idUser) {

  console.log("in getPosts: haciendo la peticion: GET: " 
              + SERVER + '/posts?userId=' + idUser);

  // Creamos la petición AJAX
  const peticion = new XMLHttpRequest();

  // Configuramos la petición GET
  peticion.open('GET', SERVER + '/posts?userId=' + idUser);

  // Enviamos la petición
  peticion.send();

  // Cuando el servidor responde...
  peticion.addEventListener('load', function () {

    // Si todo fue bien
    if (peticion.status === 200) {

      // Convertimos la respuesta JSON en array de objetos
      const datos = JSON.parse(peticion.responseText);

      console.log("in getPosts: datos: ", datos);

      // ❌ ERROR IMPORTANTE:
      // Este return SOLO devuelve dentro del callback del 'load'.
      // NO vuelve a la función getPosts.
      return datos;  
    } 
    else {
      console.error("Error " + peticion.status);
    }
  });

  // En caso de error en la petición
  peticion.addEventListener('error', () =>
    console.error('Error en la petición HTTP')
  );

  console.log("Saliendo de getPosts...");
  
  // ❌ La función NO devuelve nada → return undefined implícito.
}
