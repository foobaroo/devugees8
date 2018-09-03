$(document).ready(function(){

 var el=$('.box');

 el.click(function(){
    alert("Click event! And Loonycorn rocks!");
 });

 $('.remove').click(function(){
    el=$('.box').remove(); //it will remove element and as well as attached all events.
 });

 $('.detach').click(function(){
    el=$('.box').detach(); //it will remove just element and all events will stay there 
 });

 $('.empty').click(function(){
    $('.box').empty(); //it will remove inside the contents of the element.
 });


 $('.add').click(function(){

    $('#container').append(el);

 });


});