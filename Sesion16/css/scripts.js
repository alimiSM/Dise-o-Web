function compara(){
    var a=2;
    var b=4;

    if(a==b){
        alert("a = b");
    }
    else
    alert("No son")

}

function resta(x,y){
    var rest = x-y;
    document.write("<h2>La resta es: "+rest+" </h2>");

}

function suma(a,b){
    var sum = a+b;
    document.getElementById("sumar").innerHTML = "la suma es " +sum;
}