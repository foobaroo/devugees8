$(document).ready(function(){

    $('.wrap').click(function(){
        $('.box').wrap('<div class="outer-box"></div>');
    });

    $('.wrapall').click(function(){
        $('.box').wrapAll('<div class="outer-box"></div>');
    });

});