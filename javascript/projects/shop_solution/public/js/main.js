let thumbnailcontainerObj = document.getElementById('thumbnailcontainer');
let productdetailsObj = document.getElementById('productdetails');
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

        products[index].quantity = quantityObj.value;
        cart.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(cart));
        delete products[index].quantity;
        showCart();
        // task: implement the task feature for this
        //       webshop
    }
}

function showCart() {

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

            thumbnailcontainerObj.innerHTML = '';
            console.log('successfull request');
            let resultObj = JSON.parse(xhr.responseText);
            console.log( resultObj );
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

loadProducts();