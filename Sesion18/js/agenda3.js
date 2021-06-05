function guardar() {
    var nombre = document.getElementById("nombre").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;

    const datos = {
        'numero': numero,
        ' email': email,
    };

    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";

    actualizar();
}

function recuperar() {
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("numero").value = localStorage.getItem(nombre);


}

function eliminar() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizar();
}

function eliminarTodo() {
    localStorage.clear();
    actualizar();
}

function actualizar() {
    var registro = "";
    if (localStorage.length === 0) {
        registro += '<li>Vacio</li>'
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            const val = localStorage.getItem(key);
            console.log(val.);

                registro += "<li>" + '<span class="nom">' + key + '</span>' + '<span class="nom">' + val + '</span>' + '<span class="nom">' + val + '</span>' + '</li><br>';

        }
    }
    document.getElementById("contactos").innerHTML = registro;
}