$(document).ready(function(){

$('.updatehtml').click(function(){

    console.log("update html clicked...");

   console.log("with id==>"+$('#htmlmarkup').val());
   console.log("input==>"+$('input').val());

   var htmlMarkup= $('input').val();
   $('.text').html(htmlMarkup);
});

$('.updatetext').click(function(){

    console.log("update text clicked...");

   console.log("with id==>"+$('#htmlmarkup').val());
   console.log("input==>"+$('input').val());

   var htmlMarkup= $('input').val();
   $('.text').text(htmlMarkup);
});


});