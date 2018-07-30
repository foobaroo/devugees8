$(document).ready(function(){

    $('.small').click(function(){

        $('.text').animate(
            {
            'font-size' : '16px',
            'opacity' : '0.25'
            },
            2000,
            function() {
                console.log("Make Small done!");
            }

        );
    });
    

    $('.medium').click(function(){

        $('.text').animate(
            {
            'font-size' : '44px',
            'opacity' : '0.6'
            },
            2000,
            function() {
                console.log("Make Medium done!");
            }

        );
    });


    $('.big').click(function(){

        $('.text').animate(
            {
            'font-size' : '88px',
            'opacity' : '1'
            },
            2000,
            function() {
                console.log("Make Big done!");
            }

        );
    });


});