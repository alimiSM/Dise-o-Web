function ancho(){
var frase = prompt("Frase:", "");
var largo = frase.length;
document.getElementById("len").innerHTML = "El largo de la frase es: " +largo;
}

function en(){
    var frase = prompt("Frase:", "");
    var buscar = prompt("Buscar en:", "");

    var rpta = frase.charAt(buscar);
    document.getElementById("cha").innerHTML = "La busqueda en la frase: "+frase+" en la posición " +buscar+" es "+rpta;
    
}

function agregar(){
    var frase = prompt("Frase:", "");
    var agregar = prompt("Agregar:", " ");

    var rpta = frase.concat(agregar);
    document.getElementById("con").innerHTML = "La frase: "+frase+". La final es " +rpta;
    
}

function posicion(){
    var frase = prompt("Frase:", "");
    var agregar = prompt("Buscar:", " ");

    var rpta = frase.indexOf(agregar);
    document.getElementById("pos").innerHTML = "La busqueda esta en la posicion " +rpta;
    
}