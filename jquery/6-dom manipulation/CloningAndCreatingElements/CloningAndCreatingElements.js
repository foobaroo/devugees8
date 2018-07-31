$(document).ready(function(){

var classNames=['.red','.green','.yellow','.brown','.blue'];

$('.clone').click(function(){

    var className=classNames[Math.floor(Math.random()*classNames.length)];

    console.log(className);

    //$('.red').first().clone()
    $(className).first().clone().appendTo($('#colorboxes'));
});


$('.createpink').click(function(){

   /// $('<div class="pink box"></div>').insertAfter('#colorboxes div:last');

    var element=$('<div class="pink box"></div>');
    $('#colorboxes').append(element);

});

$('.createpurple').click(function(){

    /// $('<div class="pink box"></div>').insertAfter('#colorboxes div:last');
 
     var element=$('<div class="purple box"></div>');
     $('#colorboxes').append(element);
 
 });


 $('.createrandom').click(function(){

    var className=classNames[Math.floor(Math.random()*classNames.length)]; //.red or .green


    className=className.substr(1);

   // $('#colorboxes').append("<div class='"+className+" box'></div>");

    $('#colorboxes').append($("<div></div>",{ 'class': className+ ' box'}));


    
 });

});