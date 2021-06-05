$(document).ready(function () {
    $("#usat").click(function () {
        alert("Haz pulsado en enlace USAT");
    })
    $("#color").click(function () {
        alert("Haz pulsado el boton");
        $("#usat").css({ "color": "red", "font-weight": "bold" });
    });
})

$("#show").click(function () {
    $("#cont1").toggle("1500");
}, function () {
    $("#cont1").toggle("1500");
});
