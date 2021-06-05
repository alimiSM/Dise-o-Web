$("#f12").click(function () {
    $("#cont1").toggle("1500");
}, function () {
    $("#cont1").toggle("1500");
});

$("#cl").click(function () {
    alert("Haz hecho click en la imagen");
});

if ($("#cbx").is(':checked')) {
    alert("Está activado");
    $("#f4").hover(function () {
        $("#f4").css({ "background-color": "red" });
    });
}

$("#f2").dblclick(function () {
    alert("Haz hecho 2 clicks")
    document.getElementById("pos").innerHTML = "Ha confirmado la operación";

});