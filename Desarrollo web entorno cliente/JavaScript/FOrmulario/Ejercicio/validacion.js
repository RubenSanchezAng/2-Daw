//Formulario
let formulario = document.getElementById("registro");

//Guardar valores de los input
let nombre = document.getElementById("nombre");
let apellido1 = document.getElementById("apellido1");
let apellido2 = document.getElementById("apellido2");
let fechaNacimiento = document.getElementById("fechaNacimiento");
let tipoDocumento = document.getElementById("tipoDocumento");
let dni = document.getElementById("dni");
let idesp = document.getElementById("idesp");
let contrasena = document.getElementById("contrasena");
let repetirContrasena = document.getElementById("repetirContrasena");
let email = document.getElementById("email");
let repetirEmail = document.getElementById("repetirEmail");
let telefono = document.getElementById("telefono");
let consentimiento = document.getElementById("consentimiento");
let ciertos = document.getElementById("ciertos");

//Coger los errores para poder añadir texto
let errorNombre = document.getElementById("errorNombre");
let errorApellido1 = document.getElementById("errorApellido1");
let errorApellido2 = document.getElementById("errorApellido2");
let errorFechaNacimiento = document.getElementById("errorFechaNacimiento");
let errorTipoDocumento = document.getElementById("errortipoDocumento"); 
let errorDni = document.getElementById("errorDni");
let errorContrasena = document.getElementById("errorContrasena");
let errorRepetirContrasena = document.getElementById("errorRepetirContrasena");
let errorIdesp = document.getElementById("errorIdesp");
let errorEmail = document.getElementById("errorEmail");
let errorRepetirEmail = document.getElementById("errorRepetirEmail");
let errorTelefono = document.getElementById("errorTelefono");
let errorConsentimiento = document.getElementById("errorConsentimiento");
let errorCierto = document.getElementById("errorCierto");

//Función para validar lo que ha seleccionado y a quien tiene que avisar
function validarIdesp(){
    let texto = idesp.value;
    let correcto = true;
    if (tipoDocumento.value === "DNI") {
        if (texto == "") {
            errorIdesp.textContent = "Si seleccionas DNI hay que informar el IDESP.";
            correcto = false;
        }
    } else if (tipoDocumento.value === "NIE") {
        if (texto == "") {
            errorIdesp.textContent = "Si seleccionas NIE hay que informar el IXESP.";
            correcto = false;
        }
    }
    if (correcto) {
        errorIdesp.textContent = "";
    }

    return correcto;
}

//Función para validar que los emails son los mismos
function validarEmails() {
    let correcto = true;
    if (email.value.trim() !== repetirEmail.value.trim()) {
        errorRepetirEmail.textContent = "Los correos electrónicos no coinciden.";
        correcto = false;
    } else {
        errorRepetirEmail.textContent = "";
    }

    return correcto;
}

//Función para validar el nombre
function validarNombre() {
    let correcto = true;
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El campo Nombre es obligatorio.";
        correcto = false;
    } else {
        errorNombre.textContent = "";
    }
    return correcto;
}

//Función para validar primer apellido
function validarApellido1() {
    let correcto = true;
    if (apellido1.value.trim() === "") {
        errorApellido1.textContent = "El campo apellido1 es obligatorio.";
        correcto = false;
    } else {
        errorApellido1.textContent = "";
    }
    return correcto;
}

//Función para validar el segundo apellido
function validarApellido2() {
    let correcto = true;
    if (apellido2.value.trim() === "") {
        errorApellido2.textContent = "El campo apellido2 es obligatorio.";
        correcto = false;
    } else {
        errorApellido2.textContent = "";
    }
    return correcto;
}

//Función para validar la contraseña
function validarContrasenyas() {

    let correcto = true;
    let regex = /^(?=.*[0-9])(?=.*[!@#%^&*]).{12,}$/;

    if (!regex.test(contrasena.value)) {
        errorContrasena.textContent = "La contraseña debe tener más de 12 caracteres, al menos un número y un símbolo (!@#%^&*).";
        correcto = false;
    } else {
        errorContrasena.textContent = "";
    }

    if (contrasena.value !== repetirContrasena.value) {
        errorRepetirContrasena.textContent = "Las contraseñas no coinciden.";
        correcto = false;
    } else {
        errorRepetirContrasena.textContent = "";
    }

    return correcto;
}

//Función para validar fecha de nacimiento
function validarFechaNacimiento() {
    let correcto = true;
    let fechaNac = new Date(fechaNacimiento.value);
    let fechaAct = new Date();
    let edad = fechaAct.getFullYear() - fechaNac.getFullYear();

    if(fechaAct.getMonth() < fechaNac.getMonth()){
        edad--;
    }else if(fechaAct.getDate() < fechaNac.getDate()){
        edad--;
    }
    if (edad < 18) {
        errorFechaNacimiento.textContent = "Debes ser mayor de edad.";
        correcto = false;
    } else {
        errorFechaNacimiento.textContent = "";
    }

    return correcto;
}

//Función para validar DNI
function validarDni() {
    let correcto = true;
    let regex = /^[0-9]{8}[A-Za-z]$/;
    if (!regex.test(dni.value)) {
        errorDni.textContent = "El DNI debe tener 8 números y una letra.";
        correcto = false;
    } else {
        errorDni.textContent = "";
    }
    return correcto;
}

//Función para validar telefono
function validarTelefono() {
    let correcto = true;
    let regex = /^[6-9]\d{8}$/; 
    if (!regex.test(telefono.value)) {
        errorTelefono.textContent = "El teléfono debe tener 9 dígitos y empezar por 6, 7, 8 o 9.";
        correcto = false;
    } else {
        errorTelefono.textContent = "";
    }
    return correcto;
}

//Función para validar consentimientos
function validarConsentimientos() {
    let correcto = true;

    if (!consentimiento.checked) {
        errorConsentimiento.textContent = "Debes dar tu consentimiento para continuar.";
        correcto = false;
    } else {
        errorConsentimiento.textContent = "";
    }

    if (!ciertos.checked) {
        errorCierto.textContent = "Debes declarar que los datos son correctos.";
        correcto = false;
    } else {
        errorCierto.textContent = "";
    }

    return correcto;
}

//Función para enviar formulario y mostrar posibles errores
formulario.addEventListener("submit", function(e) {
    let valido = true;
    if (!confirm("¿Seguro que quieres enviar el formulario?")) {
        e.preventDefault();
    }


    if (!validarNombre()){
        valido = false;        
    } 
        if (!validarApellido1()){
            valido = false;            
        } 
        if (!validarApellido2()){
            valido = false;            
        } 
        if (!validarContrasenyas()){
            valido = false;            
        } 
        if (!validarFechaNacimiento()){
            valido = false;            
        } 
        if (!validarDni()){
            valido = false;            
        } 
        if (!validarIdesp()){
            valido = false;            
        } 
        if (!validarEmails()){
            valido = false;            
        } 
        if (!validarTelefono()){
            valido = false;            
        } 
        if (!validarConsentimientos()){
            valido = false;            
        } 

        if (!valido){
            e.preventDefault();
        } 
});
