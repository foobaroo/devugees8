const bcrypt = require('bcrypt');

let password = 'halloworld';
// signup
bcrypt.hash(password, 10, function(err, hashedPassword) {
    console.log('hashed password: ' + hashedPassword);

    // login
    bcrypt.compare('halloworld', hashedPassword, function(err, result) {
        if(result) {
            console.log('passwords match');
        }
        else {
            console.log('passwords do not match');
        }
    });
});