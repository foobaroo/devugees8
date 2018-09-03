$(document).ready(function(){

    //$('.article').hide();

    $('.toggle').on('click',function(){
        $('.article').toggle();
    });

    $('.slidetoggleslow').on('click',function(){
        $('.article').slideToggle('slow');
    });

    $('.fadetogglecustom').on('click',function(){

        $('.article').fadeToggle(2000);

        /*
        var currentOpacity=1;
        var finalOpacity=0.1;

        var id=setInterval(function(){

            $('.article').css('opacity',currentOpacity);

            currentOpacity=currentOpacity-0.1;

            if(currentOpacity < finalOpacity)
            {
                clearInterval(id);
            }

        }, 100);
        */

    });

});