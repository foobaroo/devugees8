$(document).ready(function(){

    $('.addBtn').click(function(){

        var inputVal=$('#myInput').val();



        //$('#myUL').html('<li>'+inputVal+'<span class="close">x</span></li>');


    
        if(inputVal==='')
            alert('you must write something...');
        else
            $('#myUL').append('<li>'+inputVal+'<span class="close">x</span></li>');

        
    });

    

    $('#myUL').on('click','.close',function(){

            $(this).parent().remove();
    });

    $('#myUL').on('click','li',function(){

        $(this).toggleClass("checked");
});




   

   

});

