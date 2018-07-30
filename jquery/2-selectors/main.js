$(document).ready(function() {
    console.log('document is ready: hallo world');

    // let headerObjects = document.getElementsByTagName('h1');

    // for(let i=0; i<headerObjects.length;i++) {
    //     headerObjects[i].classList.add('red-color');
    // }

    $('h1').addClass('red-color');
    $('#firstpara').addClass('blue-color');
    // $(firstpara).addClass('blue-color');
    $('.para-class').addClass('green-color');

    // 1. make all list items with the name "theking red"   
    $('li[name="theking"]').addClass('red-color');
    // also possible without "li"
    // 2. make all list items of class company and of class ceo underline
    $('.company,.ceo').addClass('underline');
    // 3. give all li items that are direct children of the element with id "companies" a border
    $('#companies > li').addClass('border');
    // 4. highlight all list items of class "company", if they have an index greater than 0
    $('li.company:gt(0)').addClass('highlight');
    // 5. make all list items which are children of ULs of class flagship blue
    $('ul.flagship li').addClass('blue-color');

    


});

