$(document).ready(function(){

$('.insertAfter').click(function(){

    var value=$('input').val();

    $('<li>'+value+'</li>').insertAfter('#contendersList li:last');
});


$('.after').click(function(){

    var value=$('input').val();

    $('#contendersList li:last').after('<li>'+value+'</li>');

});


$('.insertBefore').click(function(){

    var value=$('input').val();

    $('<li>'+value+'</li>').insertBefore('#contendersList li:first');
});

$('.before').click(function(){

    var value=$('input').val();

    $('#contendersList li:first').before('<li>'+value+'</li>');

});

$('.appendTo').click(function(){

    $('#contendersList li:first').appendTo('#contendersList');

});

$('.append').click(function(){

    $('#contendersList').append($('#contendersList li:first'));

});


});
