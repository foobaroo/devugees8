let products = [];

function loadProducts() {
    $.ajax({
        url: 'http://localhost:3000/products',
        method: 'GET',
        success: function(data) {
            products = data;            
            for(let i=0; i<products.length; i++) {
                let product = `
                    <div class="product" data-id=${products[i].id}>
                    <div class="product-title">${products[i].title}</div>
                    <div class="product-price">${products[i].price}</div>
                    </div>    
                `;
                $('.content').append(product);
                $('.product[data-id='+products[i].id+']').css('background', "url('images/"+products[i].imageurl+".jpg') no-repeat center")
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function addProduct() {
    
    let newProduct = {
        title: $('#title').val(),
        price: $('#price').val(),
        type: $('#type option:selected').val(),
        description: $('#description').val(),
        imageurl: $('#imageurl').val()        
    };

    $.ajax({
        url: 'http://localhost:3000/products',
        method: 'POST',
        data: JSON.stringify(newProduct),
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
            products.push(data);
            $('#navlink-startpage').trigger('click');
        },
        error: function(err) {
            console.log(err);
        }
    });    
}

$('document').ready(function() {


    console.log('document ready');
    $('#navlink-startpage').on('click', function(e) {
        $('.content').css('display', 'flex')
        $('.addproduct').hide();
    });

    $('#navlink-product').on('click', function(e) {
        $('.content').hide();
        $('.addproduct').show();
    });    

    $('#btn-addproduct').on('click', function(e) {
        addProduct();
    });   

    loadProducts();
});