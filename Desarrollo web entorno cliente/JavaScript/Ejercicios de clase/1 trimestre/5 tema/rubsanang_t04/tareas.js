let lista = document.getElementById("lista");
let input = document.getElementById("tarea");
let anyadir = document.getElementById("anyadir");
let tareas = [];

function cargarTareas() {
    let guardadas = localStorage.getItem("tareas");

    if (guardadas) {
        tareas = guardadas.split(";").filter(texto => texto.trim() != "");

        for (let i = 0; i < tareas.length; i++) {
          mostrarTarea(tareas[i]);
        }
    }
}

function anyadirTarea(){
    let tarea = input.value;
    tareas.push(tarea);
    localStorage.setItem("tareas", tareas.join(";") + ";");
    mostrarTarea(tarea);

    input.value = "";
    
}
function mostrarTarea(tarea) {

     let li = document.createElement("li");
     let botonBorrar = document.createElement("button");
     let botonCompletar = document.createElement("button");
     let botonEditar = document.createElement("button");

     botonEditar.textContent = "Editar tarea";
     botonCompletar.textContent = "Completar tarea";
     botonBorrar.textContent = "Borrar tarea";
     li.textContent = tarea;
    li.appendChild(botonEditar);
     li.appendChild(botonBorrar);
     li.appendChild(botonCompletar);
     lista.appendChild(li);

     botonEditar.addEventListener("click", editarTarea);
     botonBorrar.addEventListener("click", borrarTarea);
     botonCompletar.addEventListener("click", completarTarea);
}
function editarTarea(event) {
    let li = event.target.parentNode;
    let textoViejo = li.firstChild.textContent;  
    let nuevoTexto = prompt("Escribe el nuevo texto de la tarea:", textoViejo);

    li.firstChild.textContent = nuevoTexto;

    let index = tareas.indexOf(textoViejo);
    if (index !== -1) {
        tareas[index] = nuevoTexto;
    }
    localStorage.setItem("tareas", tareas.join(";") + ";");
  
}

function completarTarea(event){
   let li = event.target.parentNode;
   li.style.color = "green";
}



function borrarTarea(event){
   let boton = event.target;
   let li = boton.parentNode;
   let tareaEliminada = li.firstChild.textContent;
   tareas = tareas.filter((tareasBuenas) => tareasBuenas != tareaEliminada);

   localStorage.setItem("tareas", tareas.join(";") + ";");
    
   li.remove();
}

anyadir.addEventListener("click", anyadirTarea);
cargarTareas();