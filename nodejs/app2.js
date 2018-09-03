var fs = require('fs');

var file1 = fs.readFileSync('./halloworld.txt', 'utf-8');

console.log( file1 );

var str1 = 'Hallo World to a new file';

fs.writeFileSync('./newfile.txt', str1);

var str2 = 'This will override a file ...';

fs.writeFileSync('./newfile.txt', str2);

var str3 = 'This will be appended to a file ...';

fs.appendFileSync('./newfile.txt', str3);

var objFromFile = JSON.parse(
    fs.readFileSync('./person.json', 'utf-8')
);

console.log( objFromFile );

var objFromFile2 = require('./person.json');
console.log( objFromFile2 );

// task:
//
// open the users.csv and
// create an array of 4 javascript objects having the proper key and value pairs.

let users = [];
var str = fs.readFileSync('./users.csv', 'utf-8');
var userLines = str.split('\n');

for(let i=0; i<userLines.length; i++) {
    let user = userLines[i].split(',');

    let userObj = {
        name: user[0],
        email: user[1],
        lastLogin: user[2]
    };
    users.push( userObj );
}

console.log( users );

let usersJson = JSON.stringify(users);

fs.writeFileSync('./users.json', usersJson);

fs.unlinkSync('./users.json');