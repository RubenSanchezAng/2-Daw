
https://marcosruiz.github.io/posts/validacion-formularios-javascript/

## Modificación de los inputs (ver web de Marcos)


## Ciclo del formulario en Js

- podemos hacer `preventDefault()` y hacer el el `form.submit()` de manera controlada con javascript

- haremos el submit si se cumplen ciertas cosas
- seguimos usando la API de HTML de validación
- podemos personalizar ciertas cosas sobre la validación (añadir más lógica)


**OJO!!**: Si se usa el atributo obsubmit -> USAR return!! porque si solo se llama a la función no funciona, y el valor es ignorado (lo mejor es usar addEventListener("submit"))
- Ojo con el onsubmit ="return validaForm();"
```html
<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

```


## `checkValidity()` 

NOTA: `reportValidity()` -> similar a checkvalidity pero muestra los mensajes del navegador

Se puede aplicar a un campo en concreto o al formulario 

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>checkValidity Example</title>
</head>
<body>

<h2>Formulario de ejemplo</h2>

<form id="miFormulario">
  <label for="nombre">Nombre*:</label>
  <input type="text" id="nombre" name="nombre" required minlength="3"><br><br>

  <label for="edad">Edad*:</label>
  <input type="number" id="edad" name="edad" required min="18" max="100"><br><br>

  <button type="submit">Enviar</button>
</form>

<script>
const form = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombre");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Evitar envío automático

  //  Validar un campo individual
  if (!nombreInput.checkValidity()) {
    alert("El campo Nombre no es válido");
    nombreInput.focus();
    return;
  }

  //  Validar todo el formulario
  if (!form.checkValidity()) {
    alert("El formulario tiene campos inválidos");
    return;
  }

  alert("Formulario válido. Se puede enviar al servidor.");
});
</script>

</body>
</html>

```
