$(document).ready(function(){

    $('.left').click(function() {

        $('.text').animate(
            {
                'left': ['-=200','swing'],
                'opacity':['-=0.1','swing']
            },
            2000,
            function()
            {
                console.log('Left and lighter!');
            }
        )

    });


    $('.right').click(function(){

        $('.text').animate(
            {
                'left' : ['+=200','swing'],
                'opacity' : ['+=0.1','linear']
            },
            2000,
            function()
            {
                console.log('Right and darker');
            }
        )

    });

    $('.up').click(function(){

        $('.text').animate(
            {
                'top' :['-=200','swing'],
                
            },
            2000,
            function()
            {
                console.log('Up!');
            }

        )
    });

    $('.down').click(function(){
        
        $('.text').animate(
            {
                'top' :['+=200','linear'],
                
            },
            2000,
            function()
            {
                console.log('Down!');
            }

        )
    });



});