$(document).ready(function(){

    $('.add').click(function() {

        var attributes=$('.text').attr('id');

        $('.text').attr('id','differentid'); //attr(property, value)
        $('.text').attr('title','Loonycorn rocks!');

        console.log(attributes);

    });

    $('.remove').click(function(){

        $('#differentid').removeAttr('style');

    });

});