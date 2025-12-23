



Intro

required -> obligatiro
pattern -> cumplir un patrón
minlength 
maxlenght  -> long. máxima a meter en el campo
min/max -> valores mínimo y máximo a itnroducir  (campo numérico)



Estilos para pseudoclases -> se añaden automáticamente 
```css
/* Estilos básicos */
form {
  width: 300px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Pseudo-clases para la validación */
input:required {
  border-left: 5px solid #0000FF;
  /* Borde azul para campos requeridos */
}

input:valid {
  border-left: 5px solid #00FF00;
  /* Borde verde para campos válidos */
}

input:invalid {
  border-left: 5px solid #FF0000;
  /* Borde rojo para campos inválidos */
}

/* Pseudo-clase para campo enfocado */
input:focus {
  outline: none;
  border-color: #66AFE9;
  box-shadow: 0 0 8px rgba(102, 175, 233, 0.6);
}
```


### Validación interna de html

- Navegador valida campo a campo
- Error en un campo, lo muestra y detiene la validación
- El formulario no se envía hasta que se soluciona el error actual.

-  Los mensajes de error que se muestran son los predeterminados del navegador -> pueden no ser muy claros

- Errores en el idioma como está configurado el navegador


https://www.w3schools.com/tags/tag_input.asp 