$(document).ready(function(){

    $('.article').hide();

    //Slide Down
    $('.readmore').on('click',function(){
        $('.article').slideDown();
    });

    //Slide Up
    $('.readless').on('click',function(){
        $('.article').slideUp();
    });

    //slide down slow
    $('.readmoreslow').on('click',function(){
        $('.article').slideDown('slow');
    });

    //slide up slow
    $('.readlessslow').on('click',function(){
        $('.article').slideUp('slow');
    });

    //slide down fast
    $('.readmorefast').on('click',function(){
        $('.article').slideDown('fast');
    });

    //slide up fast
    $('.readlessfast').on('click',function(){
        $('.article').slideUp('fast');
    });

    //slide down custom
    $('.readmorecustom').on('click',function(){
        $('.article').slideDown(2000);
    });

    //slide up custom
    $('.readlesscustom').on('click',function(){
        $('.article').slideUp(2000);
    });

});