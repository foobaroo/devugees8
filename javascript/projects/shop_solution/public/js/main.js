let thumbnailcontainerObj = document.getElementById('thumbnailcontainer');

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
            console.log('successfull request');
            let resultObj = JSON.parse(xhr.responseText);
            console.log( resultObj );
            let products = resultObj.products;
            /*
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

                thumbnailcontainerObj.appendChild(newThumbnail);
            }
        }
    }

    xhr.send();
}

loadProducts();