$(document).ready(function(){

    $('.article').hide();

    //fade in  
    $('.readmore').on('click',function(){
        $('.article').fadeIn();
    });

    //fade out
    $('.readless').on('click',function(){
        $('.article').fadeOut();
    });

    //fade in slow
    $('.readmoreslow').on('click',function(){
        $('.article').fadeIn('slow');
    });

    //fade out slow
    $('.readlessslow').on('click',function(){
        $('.article').fadeOut('slow');
    });

    //fade in fast
    $('.readmorefast').on('click',function(){
        $('.article').fadeIn('fast');
    });

    //fade out fast
    $('.readlessfast').on('click',function(){
        $('.article').fadeOut('fast');
    });

    //fade in custom
    $('.readmorecustom').on('click',function(){
        $('.article').fadeIn(2000);
    });

    //fade out custom
    $('.readlesscustom').on('click',function(){
        $('.article').fadeOut(2000);
    });

});