$(document).ready(function(){

    $('.start').click(function(){

        $('.text')
        .fadeTo(1500,'0.5')
        .slideUp()
        .slideDown()
        .queue(function(next) {
            $(this).animate({'left' : '+=250'},1000);
        })
        .animate({
            'font-size' : '99px',
        },
        {
            'duration' : 4000,
            'queue' : false,
            'start' : function() { console.log('Font size animation start')},
            'easing' : 'linear'
        });

    });

});