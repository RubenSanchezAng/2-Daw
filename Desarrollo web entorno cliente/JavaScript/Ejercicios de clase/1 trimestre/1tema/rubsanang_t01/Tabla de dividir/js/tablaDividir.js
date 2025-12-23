 
const mostrarTabla = (event) => {
    event.preventDefault();
    const numero = Number(document.getElementById('numero').value);

    if (numero >= 0 && numero <= 10) {
        let tabla = document.getElementById('rubsanang');
        let tablaDividir = `<h2>Tabla de dividir del número ${numero}</h2>`;
        tablaDividir += '<ul>';

        for (let i = 0; i <= numero*10 ; i++) {
            if(i % numero == 0){
            tablaDividir += `<li>${i} / ${numero} = ${i / numero }</li>`;
            }
        }

        tablaDividir += '</ul>';
        tabla.innerHTML = tablaDividir;

    } else {
        alert('El número introducido debe estar entre 0 y 100 (ambos inclusive');
        document.getElementById("numero").value = '';
    }
}