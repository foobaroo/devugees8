$(document).ready(function() {

    var randomProperties = [

        {
            'left' : '-=100',
            'opacity' : '-=0.1'
        },
        {
            'left': '+=200',
            'opacity':'+=0.1'
        },
        {
            'top':'-=50',
            'opacity' : '-=0.1'
        },
        {
            'top': '+=300',
            'opacity':'+=0.1'
        }

    ];


    $('.start').click(function(){

        $('.nodelay').animate(
            randomProperties[0],
            1000
        ).animate(
            randomProperties[1],
            1000
        ).animate(
            randomProperties[2],
            1000
        ).animate(
            randomProperties[3],
            1000
        );

        $('.delay').animate(
            randomProperties[0],
            1000
        ).delay(1500).animate(
            randomProperties[1],
            1000
        ).delay(1500).animate(
            randomProperties[2],
            1000
        ).delay(1500).animate(
            randomProperties[3],
            1000
        );


    });

});