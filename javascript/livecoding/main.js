// ////////////////////
// // Variables  
// var name= "John";
// console.log(name);

// var lastName='Smith';
// console.log(lastName);

// var age=26;
// console.log(age);

// var fullAge=true;
// console.log(fullAge);

// var job, isMarried;

// job='teacher';
// isMarried=false;

// console.log(name+' is a ' +age+' years old '+job+'.Is he married?:'+isMarried+'.');

// age='thirty six"*2"';
// job='driver';

// console.log(name+ ' is a ' +age+' years old '+job+'.Is he married?: '+isMarried+'.');

// var now=2018;
// var ageYear=1981;
// var yearOld=now-ageYear;

// console.log(yearOld);
// age=3;
// var ageSteffi=age*2;
// console.log(ageSteffi);

// //////////////////////////
// //Operators

// now=2016;
// var birthYear=now-26;
// birthYear=now-26*2; //2016-52

// console.log(birthYear);

// var ageJohn=30;
// var ageMark=30;
// ageJohn=ageMark=(3+5)*4-6;

// ageJohn++; //ageJohn=ageJohn +1
// ageMark*=2; //ageMark=ageMark*2;
// ageMark+=2; //ageMark=ageMark+2;
// console.log(ageJohn);
// console.log(ageMark);

// //////////////////////////
// // if/else statements



// var isMarried=false;

// if(isMarried == 0)
// {
//     console.log(name+' is married!');
// }
// else {
//     console.log(name +' will hopefully marry soon');
// }


// isMarried=false;

// if(undefined)
// {
//     console.log('YES');
// }
// else
// {
//     console.log('NO');
// }

// if(23=="23")
// {
//     console.log('Something to print...');
// }

// ////////////////////////////////
// // Boolean Logic and switch

// var age=20;

// if(age < 20){
//     console.log('John is a teenager');
// }
// /*
// else if( age >=20 || age < 30)
// {
//     console.log('John is a young man');
// }*/
// else if(!(age > 30))
// {
//     console.log('Here not equal call...');
// }
// else{

//     console.log('John is man');
// }

// var job='teacher';

// //job=prompt('What does john do?');

// switch(job)
// {
//     case 'teacher' :
//                     console.log('First John teaches kids');
//                     //break;
//     case 'driver' :
//                     console.log('John drives a cab in Lisbon');
//                     //break;
//     case 'cop'    :
//                     console.log('John helps fight crime');
//                     break;
//     case 'teacher' :
//                     console.log('John teaches kids');
//                     break;
   
    
//     default :
//                     console.log('John does something else');
// }

// //

// var x = 1;
// var y = 2;

// if( x > y ) {
//     console.log('x is greater than y');
// }
// else {
//     console.log('x is not greater than y');
// }

// switch( x ) {
//     case y: 
//         console.log('x is equal to y');
//         break;

//     default:
//         console.log('x is not equal to y');
//         break;
// }

// switch (x < y) {
//     case true:
//         console.log('x is smaller than y');
//         break;
    
//     case false:
//         console.log('x is greater than y');
//         break;
// }


// // coding challenge 1

// var johnHeight = 185;
// var bobHeight = 190;

// var johnAge = 30;
// var bobAge = 27;

// var scoreJohn = johnHeight + 5 * johnAge;
// var scoreBob = bobHeight + 5 * bobAge;

// if( scoreJohn < scoreBob ) {
//     console.log('Bob won.')
// }
// else if (scoreJohn === scoreBob) {
//     console.log('It is a tie.')
// }
// else {
//     console.log('John won.');
// }

// // weather function

// function weatherFunction(weather) {
//     console.log('the weather today is really good.');

//     if(weather) { // not undefined, not false not null
//         if(weather > 8) {
//             console.log('weather is great.');
//         }
//         else if(weather > 5 && weather <= 8) {
//             console.log('weather is good.');
//         }
//         else if(weather <= 5 &&  weather > 2) {
//             console.log('weather is not so good');
//         }
//         else {
//             console.log('weather is really not good.')
//         }
//     }
// }

// weatherFunction();

// // task: write a function q that takes one parameter p
// //       and that prints out p if p is not undefined, not null 
// //       and not false

// function q(p) {
//     if(p) {
//         console.log(p);
//     }
// }

// q('hallo world');

// function double(x) {
//     console.log('i am going to double x soon ...');
//     console.log('wait for it ...');

//     return 2*x;
//     console.log('i will not be executed.');
// }

// console.log(double(4));

// // task: write a function f that takes two parameters
// //       a and b. f should return a + b.
// //       1. call f using a string, b string
// //       2. call f using a number, b string
// //       3. call f using a number, b number
// //       4. call f using a number, b undefined
// //       5. call f using a null, b string
// //       6. call f using a undefined, b string
// //       7. call f using a undefined, b undefined
// //
// //       lastly, console.log out each return value of f
// //       console.log(f('hallo', 'world'))


// function f(a, b) {
//     return a + b;
// }

// var k;

// // 1
// console.log(f('aaa', 'bbb'));
// // 2
// console.log(f(3, 'ccc')); // type coercion
// // 3
// console.log(f(4, 7)); // no type coercion
// // 4
// console.log(f(4, k)); // type coercion not possible NaN
// // 5 
// console.log(f(k, 'hallo'));
// // 6
// console.log(f(k, 'hallo'));
// // 7
// console.log(f(k, k));


// function calculateAge(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMary = calculateAge(1988);

// console.log('age of john is:' + ageJohn);
// console.log('age of mary is:' + ageMary);

// // task:
// // 
// // Assume that the retirement age is 67. 
// // Write a function retiresIn that calculates
// // the number of years in which a person retires.
// // This function has two parameters:
// // 
// // name and year of birth.
// //
// // The return value should be a string like the following:
// // 'Jan retires in 35 years'
// //

// function retiresIn(name, yearOfBirth) {
//     var retires = 67 - (2018 - yearOfBirth);
//     return name + ' will retire in ' + retires + ' years';
// }
// console.log( retiresIn('Jan', 1985) );


// var hallo = 'hallo';
// var world = 'world';
// var name = 'jan';

// console.log(hallo+world+name)

// function f(x) {
//     return Math.pow(x, 2) + 2*x + 1;
// }
// console.log(f(1));

// /* task:
//    write a function introduction that generates an introduction
//    text about yourself. you have the parameters:

//    firstName, lastName, countryBorn, countryLiving, age,
//    residenceCity

//    returns: nothing (undefined)

//    EXAMPLE:

//    My name is Jan Schulz. I was born in Germany. I live in Germany.
//    I am 32 years old. I live in Berlin.
// */

// function introduction(
//     firstname,
//     lastName,
//     countryBorn,
//     countryLiving,
//     age,
//     residenceCity
// ) {
    
//     // console.log( 'My name is ' + firstname + ' ' + lastName + '.'
//     //             +'I was born in ' + countryBorn + '. I live in ' + countryLiving + '. I am ' + age + ' years old. I live in ' 
//     //             + residenceCity
//     //             );
    
//     console.log( `My name is  ${firstname} ${lastName}.
//                 I was born in ${countryBorn}. I live in ${countryLiving}. I am ${age} years old. I live in ${residenceCity}
//                 `);

//     var functionVariable = 2;
// }

// // console.log(functionVariable); // error 

// introduction('Jan', 'Schulz', 'Germany', 'Germany', 32, 'Berlin');

// var name0 = 'John';
// var name1 = 'Mary';
// var name2 = 'Bob';
// var name3 = 'Peter';
// var name4 = 'Julia';

// // var names = [];
// var names = ['John', 'Mary', 'Bob', 'Peter', 'Julia'];
// //             0       1       2       3        4


// console.log('first element of names: ' + names[0]);
// console.log('last element of names: ' + names[4]);

// var myInfo = ['Jan', 'Schulz', 32];
// console.log(myInfo);
// //              0        1     2

// console.log( myInfo[0] );

// // adds an element at the end of the array
// names.push('Ralf');
// console.log(names);

// myInfo.push('Berlin');
// console.log(myInfo);

// // adds element at the beginning
// myInfo.unshift('Mr.');
// console.log(myInfo);

// // removes last element
// myInfo.pop();
// console.log(myInfo);

// // removes first element
// myInfo.shift();
// console.log(myInfo);

// // task:
// // 
// // Create an array numberArray that consists of the numbers 5 to 10
// var numberArray = [5, 6, 7, 8, 9, 10];
// //                 0  1  2  3  4  5
// console.log(numberArray);

// // - change the value of the element with the index 1 to 7
// numberArray[1] = 7;
// numberArray[3] = 100;
// console.log(numberArray);
// // - add an element 11 at the end
// numberArray.push(11);
// console.log(numberArray);
// // - add an element -1 at the beginning
// numberArray.unshift(-1);
// console.log(numberArray);

// // deletes array item with one
// console.log(names);
// names.splice(2, 1);
// console.log(names);

// console.log('number of items in the names array: ' + names.length);
// console.log('last item of the names array: ' + names[names.length - 1]);

// names.splice(2, 0, 'Max');
// console.log(names);

// var mixedArray = [5, 'hallo', true, undefined, null];
// console.log(mixedArray);

// mixedArray[2] = 'world';
// console.log(mixedArray);

// function average(x, y, z) {
//     return (x+y+z) / 3;
// }

// console.log( average(5, 5, 4) );

// // task:
// //
// // rewrite average to accept one parameter instead of three
// // parameters and return the average. 
// // test your function with the same numeric values.


// function average2(arr) {
//     var avg = (arr[0] + arr[1] + arr[2]) / 3;
//     return avg;
// }

// var arrAvg = [5, 5, 4];
// console.log('average = ' + average2([5, 5, 4]));

// var fruits = ['Apple', 'Banana', 'Orange', 'Lemon'];
// console.log(fruits);

// // how to write a function that removes apple and lemon
// // and returns the rest of the fruits ?

// function fruitCutter(arrFruit) {
//     arrFruit.shift();
//     arrFruit.pop();
//     return arrFruit;
// }

// var cuttedFruits = fruitCutter(fruits);
// console.log(cuttedFruits);

// Objects

// var arrayInfo = [];
// arrayInfo[0] = 'Jan'; // firstname
// arrayInfo[1] = 'Schulz'; // lastname
// arrayInfo[2] = 'Germany'; // country
// arrayInfo[3] = 32; // age

// var objInfo = {
//     firstName: 'Jan',
//     lastName: 'Schulz',
//     age: 32,
//     country: 'Germany'
// };

// // 

// var apartment1 = {
//     type: 'laminate',
//     sofa: 'leather',
//     plants: true,
//     salonSize: 'big',
//     jalousy: true
// };

// var apartment2 = {
//     size: 'biggerthanavg',
//     ceiling: 'high',
//     form: 'non-standard',
//     comfort: 'high-comfort-end-furniture',
//     coziness: null,
//     plants: 'therearesome'
// };

// var apartment3 = {
//     floor: 'wood',
//     windows: 'frombuttontoceiling',
//     ceiling: 'white',
//     sofa: 'leatherandothers',
//     curtain: 'smokewight'
// };

// var apartment4 = {
//     numCouches: 3,
//     numWindows: 9,
//     style: 'luxury',
//     location: 'bigcity',
//     floors: 2
// };

// // prints out whole object
// console.log(apartment1);

// // print out one attribute of the object
// console.log(apartment2.comfort);
// console.log(apartment4.numCouches);
// console.log(apartment3.windows + ' & ' + apartment4.style);

//  function introduction(
//      firstname,
//      lastName,
//      countryBorn,
//      countryLiving,
//      age,
//      residenceCity
//  ) {
    
//      console.log( `My name is  ${firstname} ${lastName}.
//                  I was born in ${countryBorn}. I live in ${countryLiving}. I am ${age} years old. I live in ${residenceCity}
//                  `);
// }

// // task: rewrite the introduction function, that it does not
// //       accept six arguments anymore. it should accept one
// //       object as parameter. 
// //
// //       1) define an object that you pass to the introduction
// //          function
// //       2) rewrite the introduction function
// //       3) execute the introduction function with the intro object.

// //
// // Camelcase notation: shortLong, firstName, carEnginePower
// // 

// var myPersonObj = {
//     firstName: 'Jan',
//     lastName: 'Schulz',
//     countryBorn: 'Germany',
//     countryLiving: 'Germany',
//     age: 32,
//     residenceCity: 'Berlin',
//     retiresIn: function() { // functions of objects are called methods
//         console.log(67-this.age);
//     }
// };

// function introductionObj(personObj) {   
//     console.log( `My name is  ${personObj.firstName} ${personObj.lastName}.
//                 I was born in ${personObj.countryBorn}. I live in ${personObj.countryLiving}. I am ${personObj.age} years old. I live in ${personObj.residenceCity}
//                 `);
// }

// introductionObj(myPersonObj);
// myPersonObj.retiresIn();

// myPersonObj.firstName = 'Max';
// myPersonObj.countryLiving = 'Norway';

// console.log(myPersonObj);
// console.log('New firstname is: ' + myPersonObj.firstName);
// console.log('New firstname is: ' + myPersonObj['firstName']);

// var apple1 = {
//     color: 'red',
//     size: 'big'
// }

// console.log(apple1);
// var apple2 = {
//     color: 'green',
//     size: 'small'
// }

// console.log(apple2);

// var apples = [
//     apple1,
//     apple2
// ];

// console.log(apples);

// // task:
// // create a third apple with color red and size small
// // and add it to apples, unnested

// var apple3 = {
//     color: 'red',
//     size: 'small'
// }

// // 1 reassigning a variable
// apples1 = [
//     apple1,
//     apple2,
//     apple3
// ];
// console.log('apples1 = ' + apples1);

// // 2 - nested
// apples2 = [apples, apple3];
// console.log('apples2 = ' + apples2);

// // 3
// apples.push( apple3 );
// console.log('apples3 = ' + apples);

// var child1 = { age: 3, name: 'sarah' };
// var child2 = { age: 4, name: 'peter' };
// var child3 = { age: 5, name: 'laura' };
// var car = { brand: 'audi', built: 2005 };
// var house = { squaremeter: 150, location: 'berlin' };
// var father = { age: 40, name: 'peter' }
// var mother = { age: 38, name: 'mary' }


// var family = {
//     father: father,
//     mother: mother,
//     child: child1
// }

// // 1 - reassigning family

// var family_reassignment = {
//     father: father,
//     mother: mother,
//     children: [child1 ,child2, child3],
//     car: car,
//     house: house
// }
// console.log( family );

// // 2 - mutating the object structure
// console.log( 'family before mutating: ');
// console.log( JSON.stringify(family) );
// family.car = car;
// family.house = house;
// family.children = [child1, child2, child3];
// console.log( 'family after mutating: ');
// console.log( JSON.stringify(family) );
// delete family.child;
// console.log( 'family after deleting child key-value pair: ');
// console.log( JSON.stringify(family) );

// task:
// give that family 
// 1. two more children 
// 2. a car and a house.
// - the car has a brand and year when it was built.
// - the house has a squaremeter size and a location-city.


// Task:
//
// 1. Imagine you have 3 users.
// 2. Each user has a email, a password a status that can
//    either true or false, and the number of logins.
// 3. email is a string, password is a string, status is boolean
//    (if status is true, he is active, false if he is inactive)
//    number of logins is a number and starts with 0.
// 4. status can be changed with a method activate() and the
//    number of logins can be increased by newLogin()

// var user1 = {
//     email: 'abc@mail.com',
//     password: 'abc',
//     status: false,
//     numLogins: 0,
//     activate: function() {
//         if( this.status ) {
//             this.status = false;
//         } 
//         else {
//             this.status = true;
//         }
//     },
//     newLogin: function() {
//         this.numLogins++;
//     }
// }

// var user2 = {
//     email: 'def@mail.com',
//     password: 'abc',
//     status: false,
//     numLogins: 0,
//     activate: function() {
//         if( this.status ) {
//             this.status = false;
//         } 
//         else {
//             this.status = true;
//         }
//     },
//     newLogin: function() {
//         this.numLogins++;
//     }
// }

// var user3 = {
//     email: 'hij@mail.com',
//     password: 'abc',
//     status: false,
//     numLogins: 0,
//     activate: function() {
//         if( this.status ) {
//             this.status = false;
//         } 
//         else {
//             this.status = true;
//         }
//     },
//     newLogin: function() {
//         this.numLogins++;
//     }
// }


// // how can i set the status to true if its false, 
// // or to false if its true
// user1.activate();
// user1.newLogin();
// user1.newLogin();
// user1.newLogin();
// console.log(user1);

// var userArray = [ user1, user2, user3 ];



// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');
// console.log('Hallo World');

// for(var i = 0; i < 10; i = i + 1) {
//     console.log('Hallo World ' + i);    
// }

// var counter = 0;
// while(counter < 10){
//     console.log('Hallo World ' + counter);
//     counter = counter + 1;
// }

// var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// console.log( names[0] );
// console.log( names[1] );

// for (var i=0; i<names.length; i++) {
//     console.log(names[i]);
// }

// // for( var i=0; true; i++ ) {
// //     console.log(' chrome is kind of slow and i = ' + i);
// // }

// for( var i=0; false; i++ ) {    
//     console.log( 'this loop will never be entered' );
// }

// var apple1 = { color: 'red', size: 'big' };
// var apple2 = { color: 'green', size: 'small' };
// var apple3 = { color: 'yellow', size: 'big' };
// var apples = [ apple1, apple2, apple3 ];

// // task: create a for-loop that prints out all the
// //       sizes of the apples.

// console.log( apples[1].size );

// for(var i=0; i<apples.length; i++) {
//     console.log( apples[i].size );
// }

/*
Task:

Create a function numArray which takes two parameters
a and b. a and b are numbers like 1 and 10 or 5 and 20.
So, the function returns false if a > b or a < 0 or b < 0.

Otherwise, it returns an array of all numbers between a and b
including a and b.

EXAMPLE: a = 12 and b = 16
numArray returns [12, 13, 14, 15, 16]

hint: consider using push() for creating the resulting array.
*/


// function numArray(a, b) {
//     if( a > b || a < 0 || b < 0 ) {
//         return false;
//     } 
//     else {
//         var retArray = [];
//         for(var i=a; i<=b; i++) {
//             retArray.push(i);
//         }

//         return retArray;
//     }
// }

// console.log( numArray(2, 8) );

// task 1:
// 
// - lets assume we have 100 images in our image/ folder.
// - we want to create an array of images 
// - and the array should consist of the filenames which are
//   image_1.jpg to image_100.jpg

// 0 -> 'image_1.jpg'
// 1 -> 'image_2.jpg'
// 2 -> 'image_3.jpg'

// task 2:
// - we want to standardize the filenaming and also display
//   the number of digits. 
// - image_001.jpg to image_100.jpg 

// 0 -> 'image_001.jpg'
// 1 -> 'image_002.jpg'
// 2 -> 'image_003.jpg'

// for both tasks, create a function imageArray1 and imageArray2 that
// does not take any parameters and returns an array of 100 filenames.

// function imageArray1() {
//     var retArray = [];

//     for(var i=1; i <= 100; i++) {
//         retArray.push('image_' + i + '.jpg');
//     }
//     return retArray;
// }
// console.log( imageArray1() );

// function imageArray2() {
//     var retArray = [];

//     for(var i=1; i <= 100; i++) {
//         if( i < 10 ) { // is from 1 to 9
//             retArray.push('image_00' + i + '.jpg');
//         }
//         else if (i > 9 && i < 100) { // i from 10 to 99
//             retArray.push('image_0' + i + '.jpg');
//         }
//         else { // i = 100
//             retArray.push('image_' + i + '.jpg');
//         }
//     }
//     return retArray;
// }
// console.log( imageArray2() );

// for(var i=0; i<5; i++) {
//     console.log('i = ' + i);

//     for(var j=0; j<3; j++) {
//         console.log('   j = ' + j);

//         for(var k=0; k<2; k++) {
//             console.log('       k = ' + k);
//         }
//     }
// }

function printStars1() {
    var stars = '';
    for(var i=0; i<5; i++) {
        stars = stars + '*';       
        console.log(stars);
    }
}

function printStars2() {
    var stars = '';
    for(var i=0; i<5; i++) {
     for(var j=0; j<1; j++) {
        stars = stars + '*';       
        console.log(stars);
        }
    }
}

function printStars3() {
    for(var i=0; i<6; i++) {
        var stars = '';
        for(var j=0;j<=i;j++) {
            stars = stars + '*';
        }
        console.log(stars);
    }
}

printStars1();
printStars2();
printStars3();
// implement printStars with a nested loop

var numbers = [3, 6, 10, 12, 15, -1];
// for(var i=0;i<numbers.length;i++) {
//     console.log(numbers[i]);
// }

var i=0;
while( i<numbers.length ) {
    console.log(numbers[i]);
    i++;
}

console.log('i=' + i);

// Repetition Functions

