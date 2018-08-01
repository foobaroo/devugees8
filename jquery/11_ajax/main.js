$(document).ready( function() {
    console.log('Document is loaded.');


    // 1. use the $.ajax method, to load 
    //    the data.json and load its contents
    //    into the table #tbl1 (not the getJSON here)

    $('.getdatasuccess').click(function() {
        $.ajax({
            url: 'data.json',
            type: 'GET',
            dataType: 'json',
            success: function(response) { 
                var rows = $('#tbl1 tr.row');
                for(var i=0; i<rows.length; i++) {
                    $(rows[i]).children().eq(0).html( response[i].name );
                    $(rows[i]).children().eq(1).html( response[i].subject );    
                }
            },
            complete: function(xhr, status) {

            },
            error: function(xhr, status) {

            }
        });   
    });

    // 2. create an ajax requests that 
    //    loads a file that DOES NOT exist
    //    and print out the status code in the "error" function
    //    of the ajax object.

    $('.getdatafail').click(function() {
        $.ajax({
            url: 'error.json',
            type: 'GET',
            dataType: 'json',
            success: function(response) { 
                console.log('This will not be called.');
            },
            complete: function(xhr, status) {
                console.log('This will always be called');
            },
            error: function(xhr, status, error) {
                console.log('error: ' + error);
                console.log('status: ' + status);
                console.log('xhr: ' + xhr);
            }
        });   
    });

    // 3. create an $.get request that loads
    //    the "data.html" file into the #htmldata
    //    div

    $('.getdata').click(function() {
        // also works: $('#htmldata').load('data.html');
        $.get('data.html', function(response) {
            $('#htmldata').append(response);
        });
    });

    // 4. load the script "data.js" using the
    //    $.getScript function

    $('.getscript').click(function() {
        // $.getScript('data.js', function(){ $('#htmldata').append(); });
        $.getScript('data.js', function( response ) {
            console.log(response);
        });
    });

    // Same as in 1., load the data.txt again using the $.getJSON function 
    // and load the contents into the table #tbl2

    $('.getjson').click(function() {
        $.getJSON('data.txt', function(response) {
            var rows = $('#tbl2 tr.row');
            for(var i=0; i<rows.length; i++) {
                $(rows[i]).children().eq(0).html( response[i].name );
                $(rows[i]).children().eq(1).html( response[i].subject );    
            }            
        });
    });


});

