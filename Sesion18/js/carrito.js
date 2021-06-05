function agregar(clicked_id) {
    if (clicked_id == "b1") {
        var final = document.getElementsByClassName('shop-item-title')[0].innerText;
        var precio = document.getElementsByClassName('shop-item-price')[0].innerText;

    } else {
        if (clicked_id == "b2") {
            var final = document.getElementsByClassName('shop-item-title')[1].innerText;
            var precio = document.getElementsByClassName('shop-item-price')[1].innerText;

        } else {
            var final = document.getElementsByClassName('shop-item-title')[2].innerText;
            var precio = document.getElementsByClassName('shop-item-price')[2].innerText;

        }
    }
    console.log(final);

    const items = {
        name: final,
        price: precio
    }

    localStorage.setItem(final, precio);
    actualizar();
}

function actualizar() {
    var registro = "";
    var registro2 = "";
    if (localStorage.length === 0) {
        registro += '<li>No ha agregado productos</li>';
        console.log(localStorage.length);
    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            console.log(i);
            var price = localStorage.getItem(key);
            /*
            registro +='<li>'+'<span class="nom">'+ key + '</span>'+'</li><br>'; 
            registro2 += '<li>'+'<span class="">'+localStorage.getItem(key) + '</span>'+'</li>'*/

            registro += '<div class="cart-row"><div class="cart-item cart-column"><span class="cart-item-title">' + key + '</span></div><span class="cart-price cart-column">' + price + '</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-danger" type="button" onclick="quitar()">QUITAR</button></div></div>';

        }
    }
    /*
    document.getElementById("cart-items-names").innerHTML = registro;
    document.getElementById("cart-items-prices").innerHTML = registro2;
    */

    document.getElementById("cart-items").innerHTML = registro;
}

function quitar(clicked_id) {



    if (clicked_id == "b1") {
        var final = document.getElementsByClassName('shop-item-title')[0].innerText;
        var precio = document.getElementsByClassName('shop-item-price')[0].innerText;

    } else {
        if (clicked_id == "b2") {
            var final = document.getElementsByClassName('shop-item-title')[1].innerText;
            var precio = document.getElementsByClassName('shop-item-price')[1].innerText;

        } else {
            var final = document.getElementsByClassName('shop-item-title')[2].innerText;
            var precio = document.getElementsByClassName('shop-item-price')[2].innerText;

        }
    }
}


function calcular(){
    var init = document.get
}