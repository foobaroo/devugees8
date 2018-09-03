$(document).ready(function() {
    console.log('document is ready: hallo world');
    
    /*
    let clickbuttonObj = document.getElementById('clickbutton');
    document.addEventListener ...
    */

    $('#clickbutton').click(function(e) {
        alert('This is the click handler');
    });

    $('#clickbutton').click(function(e) {
        alert('This is 2nd click handler');
    });

    $('#bindbutton').bind('click', function(e) {
        alert('This is the bind handler');
    }); 

    $('#onbutton').on('click', function(e) {
        alert('this is the on handler');
    });

    // task:
    // 
    // create a click event for all li-items that alerts the html inside of the li. use the debugger of your browser to analyze the "this"-keyword inside the event-function. I.e. a click on the li with id user-1 alerts "User 1".

    $('li').on('click', function(e) {
        console.log('hi');
        // this = VanillaJS Object
        // $(this) = JQuery Object
        alert($(this).html());
    });

});