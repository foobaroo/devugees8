$(document).ready(function(){

    $('.article').hide();

    $('.readmorewith').on('click', function(){
        $('.article').fadeIn(3000).addClass('highlight');
    });

    $('.readmoreafter').on('click',function(){

        $('.article').fadeIn(3000,function(){
            $(this).addClass('highlight');
        });

    });

    $('.readless').on('click',function(){
        $('.article').hide().removeClass('highlight');

    });

});