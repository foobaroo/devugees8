$(document).ready(function(){

    $('.start').click(function() {

        $('.noqueue_class')
            .slideUp(2000)
            .fadeIn(2000)
            .hide(2000)
            .slideDown(2000)
            .fadeOut(2000)
            .show(2000)
            .addClass('highlight')
            .hide(2000)
            .fadeIn(2000)
            .slideDown(2000)
            .show(2000);

        $('.queue_class')
            .slideUp(2000)
            .fadeIn(2000)
            .hide(2000)
            .slideDown(2000)
            .fadeOut(2000)
            .show(2000)
            .queue(function(){

                $(this).addClass('highlight');
                $(this).dequeue();

            })
            .hide(2000)
            .fadeIn(2000)
            .slideDown(2000)
            .fadeOut(2000)
            .show(2000);

          $('.queueagain_class')
                .slideUp(2000)
                .fadeIn(2000)
                .hide(2000)
                .slideDown(2000)
                .fadeOut(2000)
                .show(2000)
                .queue(function(next) {
                    $(this).addClass('highlight');
                    next();

                   
                })
                .hide(2000)
                .fadeIn(2000)
                .slideDown(2000)
                .fadeOut(2000)
                .show(2000)

    });

});