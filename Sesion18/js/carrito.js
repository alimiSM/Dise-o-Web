if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    actualizar();

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    console.log(quantityInputs.length);

    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i].innerText;
        input.addEventListener('change', quantityChanged);

    }
}


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

    } else {
        for (var i = 0; i <= localStorage.length - 1; i++) {
            var key = localStorage.key(i);
            console.log(key);
            var price = localStorage.getItem(key);
            var id = "";
            var inp = "";

            if (key == "RANDOM 1") {
                id = "b1";
                inp = "i1";

            } else {
                if (key == "RANDOM 2") {
                    id = "b2";
                    inp = "i2";
                } else {
                    id = "b3";
                    inp = "i3";

                }
            }

            /*
            registro +='<li>'+'<span class="nom">'+ key + '</span>'+'</li><br>'; 
            registro2 += '<li>'+'<span class="">'+localStorage.getItem(key) + '</span>'+'</li>'*/

            registro += '<div class="cart-row"><div class="cart-item cart-column"><span class="cart-item-title">' + key + '</span></div><span class="cart-price cart-column">' + price + '</span><div class="cart-quantity cart-column"><input id="' + inp + '" class="cart-quantity-input" type="number" value="1"><button id="' + id + '" class="btn btn-danger" type="button" onclick="quitar(this.id)">QUITAR</button></div></div>';
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

    } else {
        if (clicked_id == "b2") {
            var final = document.getElementsByClassName('shop-item-title')[1].innerText;

        } else {
            var final = document.getElementsByClassName('shop-item-title')[2].innerText;

        }
    }

    localStorage.removeItem(final);
    actualizar();
}

function limpiar() {
    localStorage.clear();
    actualizar();
}

function compra() {
    alert("Compra Exitosa");
    limpiar();
}
