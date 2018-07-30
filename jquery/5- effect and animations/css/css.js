$(document).ready(function(){

    $('#smaller').click(function(){

        var fontSizeText= $('.fontbox').css('font-size');
        console.log(fontSizeText); // 20px
        console.log(fontSizeText.length);
        var fontSize=parseInt(fontSizeText.substring(0,fontSizeText.length-2));

        console.log(fontSize);
        fontSize=Math.max(6,fontSize-1);
        console.log('Changing font size to: '+ fontSize);

        $('.fontbox').css('font-size',fontSize + 'px');

    });


    $('#bigger').click(function(){

        console.log('===Clicked Bigger Button===');

        var fontSizeText= $('.fontbox').css('font-size');
        var fontSize=parseInt(fontSizeText.substring(0,fontSizeText.length-2));

        fontSize++;
        console.log('Changing font size to:' + fontSize);

        $('.fontbox').css('font-size',fontSize + 'px');


    });



    $('#manyProperties').click(function(){

        var colors=['red','blue','green','yellow','grey','pink','brown','fuchsia'];

        var fonts=['Arial','Times','Georgia','Verdana','Comic Sans'];

        var properties=$('.propertiesbox').css(['color','background-color','font-family']);
        console.log(properties);

        $('.propertiesbox').css(
            {
                'color' : colors[Math.floor(Math.random()*colors.length)],
                'background-color':colors[Math.floor(Math.random()*colors.length)],
                'font-family': fonts[Math.floor[Math.random()*fonts.length]]
            });

    });

});