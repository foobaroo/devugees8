let products = [];

function showProducts() {
    $('.content').empty();
    for(let i=0; i<products.length; i++) {
        let product = `
            <div class="product" data-id=${products[i].id}>
            <div class="product-title">${products[i].title}</div>
            <div class="product-price">${products[i].price}</div>
            </div>    
        `;
        $('.content').append(product);
        if(!products[i].imageurl.startsWith('http')) {
            $('.product[data-id='+products[i].id+']').css('background', "url('images/"+products[i].imageurl+"') no-repeat center")
        }
        else {
            $('.product[data-id='+products[i].id+']').css('background', "url('"+products[i].imageurl+"') no-repeat center")
        }
    }
}

function loadProducts(q) {
    let url = q ? 'http://localhost:3000/products?q='+q : 'http://localhost:3000/products';

    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            products = data;            
            showProducts();
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
            showProducts();
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

    $('#btn-search').on('click', function() {
        let q = $('.searchbox').val();
        loadProducts(q);
    });

    loadProducts();
});