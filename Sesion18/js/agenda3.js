function guardar() {
    var nombre = document.getElementById("nombre").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;

    var datos = {
        numero: numero,
        email: email
    };

    localStorage.setItem(nombre, JSON.stringify(datos));
    document.getElementById("nombre").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";

    actualizar();
}

function recuperar() {
    var nombre = document.getElementById("nombre").value;
    
    var stored = JSON.parse(localStorage.getItem(nombre));

    document.getElementById("numero").value = stored.numero;
    document.getElementById("email").value=stored.email;


}

function eliminar() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    document.getElementById("nombre").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";
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
            var data = JSON.parse(localStorage.getItem(key));
                registro += "<li>" + '<span class="nom">' + key + '</span>' + '<span class="nom">' + data.numero + '</span><span class="nom">' +data.email+'</span></li><br>';

        }
    }
    document.getElementById("contactos").innerHTML = registro;
}