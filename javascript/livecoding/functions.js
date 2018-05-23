console.log; // name of the function
console.log(); // name of the function
console.log('My name is Jan'); // name of the function

console.log('Hey');
console.log('How are you doing?');
console.log('I am fine, thanks');
console.log(2);
// multiple parameters are separated by
// commas
console.log(2, 5);
console.log(2, 5, 10, 20);
console.log(2,5,10,20);

console.log('hallo','world');
console.log('hallo','world','earth');
console.log('hallo','world','earth',); // last one undefined automatically

function intro() {
    var a = 1+3;
    console.log('Hi my name is Jan');
    console.log('I am 32 years old.');
    console.log('1+3 = ' + a);
}

var a = 4;
console.log('1+3' + a);
// intro();


function intro2(paramName) {
    var varName = 'Jan';
    console.log('Hi my name is ' + paramName);
}

intro2('Marko');

// task: add a second and a third parameter
//       to intro2: city and age and 
//       extend your introductory text.
//       finally: call the function!

function intro3(name, city, age) {
    console.log('Hi my name is ' + name + ' I come from ' + age + ' I am ' + city + ' years old. Again, my name ' + name );
}

intro3('Jan', 'Berlin', 32);

function intro(paramName, paramCity, paramAge){
    var name  = "my name is " + paramName,
        city  = "i live in " + paramCity,
        age   = "my age is " + paramAge;

        console.log(name + city + age);
}

// intro('Zafer', 'Munich', 36);

function triple(number, number2) {
    console.log('product = ' + number * number2);
}

triple(3, 5);

function returnOne() {
    return 1;
}

var x = 1;
var y = returnOne();

if(x === y) {
    console.log('will this be printed?');
}

function double(x) {
    console.log('I am about to double x ...');
    console.log('In a moment.');
    return 2*x;
    console.log('???');
}

var z = double(4);
console.log(z);

// task:
//
// define a function that has one parameter: yearBorn
// and it returns the age based on the current year 2018
 
function calcAge(yearBorn) {
    return 2018 - yearBorn;
}

console.log( calcAge(1985) );


function calcTwoAges(yearBorn1, yearBorn2) {
    var age1 = 2018 - yearBorn1;
    var age2 = 2018 - yearBorn2;

    var ages = [age1, age2];
    return ages;
}

// task: analyze this function and what would be 
//       the output if you call 
//       calcTwoAges( 1990, 1992 ) ?
function giveMeHallo() {
    var x = 2;
    return 'hallo' + x;
}

var a = 2;
var b = 4;
var c = 7;
var d = 9;

var numArray = [2, 4, 7, 9, giveMeHallo()];
var numArray2 = [a, 
                 b+2*returnOne(), 
                 c, 
                 d, 
                 returnOne()];
var fruits = ['Orange', 'Apple', 'Banana', 'Kiwi'];

console.log(numArray);
console.log(numArray2);
console.log(fruits);

//        1. call f using a string, b string
//        2. call f using a number, b string
//        3. call f using a number, b number
//        4. call f using a number, b undefined
//        5. call f using a null, b string
//        6. call f using a undefined, b string
//        7. call f using a undefined, b undefined
//     
//        -> console.log out the return values!

function f(a, b) {
    return 'a is ' + a + ' and b is ' + b;
}

console.log( f('aaa', 'bbb') );
console.log( f(2, 'bbb') );
console.log( f(3, 4) );
console.log( f(5, undefined) );
console.log( f(null, 'bbb') );
console.log( f(undefined, 'bbb') );
console.log( f(undefined, undefined) );
// task:
//
// write a function greaterTen that returns true
// if the parameter n is greater than 10. return
// false if it less than 10.

// task:
// 
// write a function weather with one parameter
// "quality".
// return 'great' -> quality between 8 and 10
// return 'good' -> quality between 6 and 8
// return 'okay' -> quality between 3 and 6
// return 'not so okay' -> quality between 0 and 3

function greaterTen(n) {
    if(n > 10) {
        return true;
    }
    else if(n < 10) {
        return false;
    }
}

function weather(quality) {
    if(quality >= 8 && quality < 10) {
        return 'great';
    }
    else if(quality >= 6 && quality < 8) {
        return 'good';
    }
    else if(quality >= 3 && quality < 6) {
        return 'okay';
    }
    else {
        return 'not so great';
    }
}

console.log( weather(8) );

// task: invent one function with two parameters
//       that returns a string using the two parameters.


function a(one, two) {
    return one + two;
}

function funcName(param1, param2) {
    return param1 + param2;
}

function form(firstName, lastName) {
    return 'My name is ' + firstName + ' ' + lastName;
}

