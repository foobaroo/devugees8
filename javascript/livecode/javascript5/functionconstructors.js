// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var jane = {
//     name: 'Jane',
//     yearOfBirth: 1991,
//     job: 'marketing'
// };

// var mark = {
//     name: 'Mark',
//     yearOfBirth: 1948,
//     job: 'taxidriver'
// };

function Person(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    this.calculateAge();
}

Person.prototype.calculateAge = function() {
    this.age = (2018 - this.yearOfBirth);
}

Person.prototype.lastname = 'Smith';
var sandra = new Person('Sandra', 1995, 'waitress');
sandra.__proto__.translate = function() {
    return 'french';
}
var mark = new Person('Mark', 1948, 'taxidriver');
var jane = new Person('Jane', 1991, 'marketing');
var john = new Person('John', 1990, 'teacher');

john.hasOwnProperty('job');

// sandra.calculateAge();
// mark.calculateAge();

