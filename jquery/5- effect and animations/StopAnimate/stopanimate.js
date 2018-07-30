$(document).ready(function(){

    var randomProperties  = [ 
        {
            'left': '-=800',
            'opacity':'-=0.1'
        },
        {
            'left':'+=800',
            'opacity':'+=0.1'
        },
        {
            'top':'-=800',
            'opacity':'-=0.1'
        },
        {
            'top':'+=800',
            'opacity' : '+=0.1'
        }
    ];

    $('.start').click(function(){

        $('.text').each(function(){

            console.log("id==>"+ $(this).attr('id'));
            
            $(this).animate(
                randomProperties[Math.floor(Math.random()*randomProperties.length)],
                16000
            );

        });

    });

    $('.stopone').click(function(){

        $('.text').filter(':animated').first().stop();

    });

    $('.stopall').click(function(){

        $('.text').filter(':animated').stop();

    });



});