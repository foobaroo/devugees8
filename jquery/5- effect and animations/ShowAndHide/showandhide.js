$(document).ready(function(){

    $('.article').hide();

    //read 
    $('.readmore').on('click',function(){
        $('.article').show();
    });

    //hide
    $('.readless').on('click',function(){
        $('.article').hide();
    });

    //read slow
    $('.readmoreslow').on('click',function(){
        $('.article').show('slow');
    });

    //hide slow
    $('.readlessslow').on('click',function(){
        $('.article').hide('slow');
    });


    //read fast
    $('.readmorefast').on('click',function(){
        $('.article').show('fast');
    });

    //hide fast
    $('.readlessfast').on('click',function(){
        $('.article').hide('fast');
    });


    //read custom
    $('.readmorecustom').on('click',function(){
        $('.article').show(2000);
    });

    //hide custom
    $('.readlesscustom').on('click',function(){
        $('.article').hide(2000);
    });

});