const mysql = require('mysql');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'foobar',
    database: 'halloworld'
});

// read data example 1
// con.query('select * from users',
//     function(err, rows) {
//         if(err) throw err;

//         console.log( rows );
//         console.log( rows[2].username );
//     });

// read example 2
// con.query('select * from users where username = ?', ['moritz'],
//     function(err, rows) {
//         if(err) throw err;

//         console.log( rows );
//     });

// update example 
// con.query('update users set username = ? where username = ?', ['rolf', 'lars'],
//     function(err, rows) {
//         if(err) throw err;

//         console.log( rows );
//     });

// Lets learn this:
//
// <> Angle brackets
// () parenthesis
// `` backticks
// ' singlequotes
// "" doublequotes
// {} curly brackets/braces
// / slash
// \ backslash
// ^ carrot
// , comma
// ; semicolon
// : colon
// _ underscore
// ! exclamation mark / bang

// insert example
// con.query('insert into users (username) values (?)', ['fritz'],
//     function(err, rows) {
//         if(err) throw err;

//         console.log( 'id of last insert: ' + rows.insertId );
//     });

// delete example
con.query('delete from users where username = ?', ['moritz'],
    function(err, rows) {
        if(err) throw err;

        console.log( rows );
    });
