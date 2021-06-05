function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre");
    localStorage.numero = document.getElementById("num");
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.numero != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br>Numero: " + localStorage.numero;
    } else {
        document.getElementById("datos").innerHTML = "No hay ingresado nombre ni numero";
    }

}