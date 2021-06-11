

var cart = [];
$(function () {
    if (localStorage.cart) {
        cart = JSON.parse(localStorage.cart);
        showCart();
        var select = document.getElementById('products');
        select.addEventListener('change',
            function () {
                var selectedOption = this.options[select.selectedIndex];

                var data = "";
                if (selectedOption.text == "iPhone6 Plus") {
                    data = '<div class="product-card"><h2 id="product-name">' + selectedOption.text + '</h2><img id="product-img" src="../img/p1.png"><h4 id="product-price">$'
                    + selectedOption.value + '</h4><table class="info" border="1"><thead><th colspan="2">Características</th></thead><tbody><tr><td>Pantalla</td><td>IPS LCD 5,5"</td></tr><tr><td>Software</td><td>IOS 8</td></tr><tr><tr><td>Peso</td><td>172gr</td></tr><td>Bateria</td><td>1810mAh</td></tr></tbody></table><br></div>';
                }
                else {
                    if (selectedOption.text == "iPad Air 2") {
                        data = '<div class="product-card"><h2 id="product-name">' + selectedOption.text + '</h2><img id="product-img" src="../img/p2.png"><h4 id="product-price">$'
                        + selectedOption.value + '</h4><table class="info" border="1"><thead><th colspan="2">Características</th></thead><tbody><tr><td>Pantalla</td><td>IPS LCD 9,7"</td></tr><tr><td>Software</td><td>A8X 64BITS</td></tr><tr><tr><td>Peso</td><td>437gr</td></tr><td>Bateria</td><td>Hasta 10h</td></tr></tbody></table><br></div>';

                    } else {
                        if (selectedOption.text == "Apple Pencil") {
                            data = '<div class="product-card"><h2 id="product-name">' + selectedOption.text + '</h2><img id="product-img" src="../img/p3.png"><h4 id="product-price">$'
                            + selectedOption.value + '</h4><table class="info" border="1"><thead><th colspan="2">Características</th></thead><tbody><tr><td>Color</td><td>Blanco</td></tr><tr><td rowspan="3">Compatible</td><td>iPad 6ta gen</td></tr><tr><td>iPad Mini 5</td></tr><tr><td>iPad Air 10.5</td></tr></tbody></table><br></div>';

                        } else {

                            data = '<div class="product-card"><h2 id="product-name">' + selectedOption.text + '</h2><img id="product-img" src="../img/p4.png"><h4 id="product-price">$'
                            + selectedOption.value + '</h4><table class="info" border="1"><thead><th colspan="2">Características</th></thead><tbody><tr><td>Pantalla</td><td>IPS LCD 4,7"</td></tr><tr><td>Software</td><td>IOS 8</td></tr><tr><tr><td>Peso</td><td>129gr</td></tr><td>Bateria</td><td>1810mAh</td></tr></tbody></table><br><br></div>';
                        }
                    }
                }
                document.getElementById("info-product").innerHTML = data;
            });
    }
});

function addToCart() {
    var price = $("#products").val();
    var name = $("#products option:selected").text();
    var qty = $("#qty").val();
    
    // update qty if product is already present
    for (var i in cart) {
        if (cart[i].Product == name) {
           
            cart[i].Qty = qty;
            showCart();
            saveCart();
            return;
        }
    }
    // create JavaScript Object
    var item = { Product: name, Price: price, Qty: qty };
    cart.push(item);
    saveCart();
    showCart();
}

function deleteItem(index) {
    cart.splice(index, 1); // delete item at index
    showCart();
    saveCart();
}

function saveCart() {
    if (window.localStorage) {
        localStorage.cart = JSON.stringify(cart);
    }
}

function showCart() {
    if (cart.length == 0) {
        $("#cart").css("visibility", "hidden");
        document.getElementById("subTotal").innerHTML = "0.00";
        return;
    }
    var total = 0;
    $("#cart").css("visibility", "visible");
    $("#cartBody").empty();
    for (var i in cart) {
        var item = cart[i];
        var totalProducts = item.Price * item.Qty;

        var row = "<tr><td>" + item.Product + "</td><td>" +
            item.Price + "</td><td>" + item.Qty + "</td><td>"
            + item.Qty * item.Price + "</td><td>"
            + "<button onclick='deleteItem(" + i + ")'>Quitar</button></td></tr>";
        $("#cartBody").append(row);
        total += totalProducts;
        // console.log("Total en Show Cart: "+total);
        document.getElementById("subTotal").innerHTML = total;
        $("#totalCart").append(total);

    }
}

function see() { $('#btnAdd').show(); }