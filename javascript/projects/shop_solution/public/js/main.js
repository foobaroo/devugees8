let thumbnailcontainerObj = document.getElementById('thumbnailcontainer');
let productdetailsObj = document.getElementById('productdetails');
let cartObj = document.getElementById('cart');
let products = [];

let cart = localStorage.getItem('cart');
if(!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
}

document.addEventListener('click', function (event) {
    if(event.target.matches('.thumbnail')) {
        let id = event.target.getAttribute('data-id');
        showProductDetails(id);
    }
    else if(event.target.matches('.btnpurchaseorder')) {
        purchase();
    }
}, false);



function showProductDetails(id) {
    let index = 0;
    for(let i=0; i<products.length; i++) {
        if(products[i].id === id) {
            index = i;
            break;
        }
    }
    
    // index should point the right position in the array
    thumbnailcontainerObj.style.display = 'none';
    productdetailsObj.style.display = 'block';
    cartObj.style.display = 'none';

    let productnameObj = document.getElementById('productname');
    productnameObj.innerHTML = products[index].name;

    let productdescriptionObj = document.getElementById('productdescription'); 
    productdescriptionObj.innerHTML = products[index].description;

    let productimageObj = document.getElementById('productimage');
    productimageObj.src = products[index].imgurl;    

    let priceObj = document.getElementById('price');
    priceObj.innerHTML = products[index].price;

    let totalamountObj = document.getElementById('totalamount');
    totalamountObj.innerHTML = 1 * products[index].price;
    let quantityObj = document.getElementById('quantity');
    quantityObj.value = "1";
    quantityObj.oninput = function() {
        totalamountObj.innerHTML = (products[index].price * quantityObj.value).toFixed(2);
    }

    let btnaddcartObj = document.getElementById('btnaddcart');
    btnaddcart.onclick = function() {
        let cart = JSON.parse(localStorage.getItem('cart'));

        let productExistsIndex = -1;
        for(let i=0; i<cart.length; i++) {
            if(cart[i].id === products[index].id) {
                // product exists ...
                productExistsIndex = i;
                break;
            }
        }

        if(productExistsIndex === -1) {
            products[index].quantity = quantityObj.value;
            cart.push(products[index]);
            localStorage.setItem('cart', JSON.stringify(cart));
            delete products[index].quantity;
        }
        else {
            let oldQuantity = parseInt(cart[productExistsIndex].quantity);
            let newQuantity = oldQuantity + parseInt(quantityObj.value);
            cart[productExistsIndex].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        showCart();
    }
}

function showCart() {
    thumbnailcontainerObj.style.display = 'none';
    productdetailsObj.style.display = 'none';
    cartObj.style.display = 'block';

    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart.length === 0) {
        cartObj.innerHTML = `
            <h2>You do not have any items in your cart yet</h2>
        `;
        return;
    }

    /*
        <div class="cart-item">
        <div>
            <img src="images/goodfellas.jpg" alt="" class="cart-picture">
        </div>
        <div class="cart-description">
            <div>
                <span class="cart-quantity">2</span> x
                <span class="cart-productname">Good Fellas</span>:
                <span class="cart-amount">40.00 €</span>
                <button class="remove-item">Remove</button>
            </div>
        </div>
        </div>
    */

    let total = 0;
    cartObj.innerHTML = '';
    for(let i=0; i<cart.length; i++) {
        let newCartItem = `
        <div class="cart-item" data-id="${cart[i].id}">
            <div>
                <img src="${cart[i].imgurl}" alt="" class="cart-picture">
            </div>
            <div class="cart-description">
                <div>
                    <span class="cart-quantity">${cart[i].quantity}</span> x
                    <span class="cart-productname">${cart[i].name}</span>:
                    <span class="cart-amount">${cart[i].price * cart[i].quantity} €</span>
                    <button onclick="removeCartItem('${cart[i].id}')"  class="remove-item">Remove</button>
                </div>
            </div>            
        </div>
        `;
        total += cart[i].quantity * cart[i].price;
        cartObj.innerHTML += newCartItem;
    }

    cartObj.innerHTML += `
        <hr class="cart-break">
        <div class="cart-buy">
            Total Amount: <span class="cart-totalamount" id="carttotalamount">${total}</span> € <button class="btnpurchaseorder">Buy Now</button>
        </div>           
    `;
}

function removeCartItem(id) {
    let elem = document.querySelector('#cart div[data-id="'+id+'"]');
    elem.parentNode.removeChild(elem);

    let cart = JSON.parse(localStorage.getItem('cart'));
    let removeIndex = 0;
    let total = 0;
    for(let i=0; i<cart.length; i++) {
        if(cart[i].id === id) {
            removeIndex = i;
        }
        else {
            total += cart[i].quantity * cart[i].price;
        }
    }

    cart.splice(removeIndex, 1);
    let carttotalamountObj = document.getElementById('carttotalamount');
    carttotalamountObj.innerHTML = total.toFixed(2);
    localStorage.setItem('cart', JSON.stringify(cart));

    if(cart.length === 0) {
        cartObj.innerHTML = `
            <h2>You do not have any items in your cart yet</h2>
        `;        
    }
}

function loadProducts(category) {
    let xhr = new XMLHttpRequest();
    if(category) {
        xhr.open('GET', 'http://localhost:3000/product?category='+category);
    }
    else {
        xhr.open('GET', 'http://localhost:3000/product');        
    }

    xhr.onload = function() {
        if(xhr.status === 200) {
            thumbnailcontainerObj.style.display = 'flex';
            productdetailsObj.style.display = 'none';
            cartObj.style.display = 'none';

            thumbnailcontainerObj.innerHTML = '';
            console.log('successfull request');
            let resultObj = JSON.parse(xhr.responseText);
            console.log(resultObj);
            products = resultObj.products;
        
            /* to create a div like this: 
                    <div class="thumbnail">
                        <div class="thumbnail-name">Goodfellas</div>
                        <div class="thumbnail-price">19.99 €</div>
                    </div>
            */
            
            for(let i=0; i<products.length; i++) {
                let newThumbnail = document.createElement('div');
                newThumbnail.className = 'thumbnail';

                let newThumbnailName = document.createElement('div');
                newThumbnailName.className = 'thumbnail-name';
                newThumbnailName.innerHTML = products[i].name;
            
                let newThumbnailPrice = document.createElement('div');
                newThumbnailPrice.className = 'thumbnail-price';
                newThumbnailPrice.innerHTML = products[i].price + ' €';

                newThumbnail.appendChild(newThumbnailName);
                newThumbnail.appendChild(newThumbnailPrice);

                newThumbnail.style.background = 'url('+products[i].imgurl+') no-repeat center';

                newThumbnail.setAttribute('data-id', products[i].id);

                thumbnailcontainerObj.appendChild(newThumbnail);
            }
        }
    }

    xhr.send();
}

function purchase() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/order');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
        if(xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            if(res.error === 0) {
                alert('Thank you for your purchase!');
                localStorage.setItem('cart', JSON.stringify([]));
                location.reload();
            }
            else {
                alert('Error: ' + res);
            }
        }
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    let data = {
        productids: cart
    };

    xhr.send(JSON.stringify(data));
}

loadProducts();