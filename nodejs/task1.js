/*
task 1:
Create a module countdown.js
that counts from 20 to 0. Import it to this file and use it.
*/

var countdown = require('./countdown.js');

countdown();

/*
task 2:
create a module introduction.js that exports a function with one parameter userInfo. userInfo should consist of firstName, lastName, email and birthYear.

When calling the function "introduction", the module should print out a text like:

"Hi my name is FIRSTNAME LASTNAME and my email is EMAIL. I was born in BIRTHYEAR".
*/

var introduction = require('./introduction').introduction;

introduction({
    firstName: 'Jan',
    lastName: 'Schulz',
    email: 'jan.schulz@devugees.org',
    birthYear: '1985'
});

/*
task 3:
Create a module that exports the following class:

class Person {
    constructor(firstname, lastname, email, yearOfBirth) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.yearOfBirth = yearOfBirth;
    }
}

Create 3 different persons!
*/

var Person = require('./Person.js');

var maria = new Person('maria', 'mueller', 'maria@gmail.com', 1990);
var bernd = new Person('bernd', 'mueller', 'bernd@gmail.com', 1985);
var volker = new Person('volker', 'mueller', 'volker@gmail.com', 1970);

console.log( maria, bernd, volker );
