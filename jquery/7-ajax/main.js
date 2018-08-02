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
                    $(rows[i]).children().eq(0).html( response[i].name);       
                    $(rows[i]).children().eq(1).html( response[i].subject);       
                }
            }
        });
    });

    // 2. create an ajax requests that 
    //    loads a file that DOES NOT exist
    //    and print out the status code in the "error" function
    //    of the ajax object.

    $('.getdatafail').click(function() {
        $.ajax({
            url: 'datasldkfjslfjsdkl.json',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.log('will not be called');
            },
            error: function(xhr, status, error) {
                console.log(`
                    error: ${error},
                    status: ${status},
                    xhr: ${JSON.stringify(xhr)}
                `);
            }
        });
    });

    // 3. create an $.get request that loads
    //    the "data.html" file into the #htmldata
    //    div

    $('.getdata').click(function() {
        $.get('data.html', function(response) {
            $('#htmldata').append(response);  
        });
    });

    // 4. load the script "dat a.js" using the
    //    $.getScript function

    $('.getscript').click(function() {
        $.getScript('data.js', function(response) {
            console.log( response );
        });
    });

    // Same as in 1., load the data.txt again using the $.getJSON function 
    // and load the contents into the table #tbl2

    $('.getjson').click(function() {
        $.getJSON('data.txt', function(response) {
            var rows = $('#tbl2 tr.row');
            for(var i=0; i<rows.length; i++) {
                $(rows[i]).children().eq(0).html(response[i].name);
                $(rows[i]).children().eq(1).html(response[i].subject);
            }
        });
    }); 

    // 5. Load all users from http://35.156.88.18:3050/users

    $.ajax({
        url: 'http://35.156.88.18:3050/users',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log( response );
        }
    });

    /*

	var xhr = new XMLHttpRequest();
	xhr.open( 'POST', 'http://35.156.88.18:3050/comments' );
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
		if( xhr.status === 200 ) {
			console.log( 'response successfull: ' + xhr.reponseText );
			var responseObj = JSON.parse(xhr.responseText);
			console.log(responseObj);

		}
		else {
			console.log( 'error: ' + xhr.status );
		}
	}
	
	xhr.send( JSON.stringify(params) );

    */

    // 6. Create a new user on http://35.156.88.18:3050/users
    
    $.ajax({
        url: 'http://35.156.88.18:3050/users',
        type: 'POST',
        data: JSON.stringify(
            {
                name: 'jan1234klefjklsjfklsjfklj',
                username: 'hallosdklfjsdklfj',
                email: 'jan@hallo.comekjekfhklshfkls'
            }
        ),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            console.log('response ' + response);
        },
        error: function(xhr, status, error) {
            console.log(`
                error: ${error},
                status: ${status},
                xhr: ${JSON.stringify(xhr)}
            `);
        }
    });

});

