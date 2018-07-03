var name = 'John';
function first() {
    var greeting = 'Hallo ';
    var x = greeting + name;
    second();
    console.log(x);
}
function second() {
    var greeting = 'Hi ';
    var x = greeting + name;
    third();
    console.log(x);
}
function third() {
    var greeting = 'Hey ';
    var x = greeting + name;
    console.log(x);
}
// first();

console.log('x: ' + x);
var x = 5; // expression, usually are marked by var

hello();
function hello() { // statement
    console.log('hallo');
}

// hello2(); 
var hello2 = function() { // expression
    console.log('hallo2');
}
hello2();

var global = 0;
function parent() {
    var x = 1;

    function child1() {
        console.log('child1 x is ' + x);
    }

    function child2() {
        var x = 2;
        console.log('child2 x is ' + x);
        child2_1();
        
        child1();

        function child2_1() {
            console.log('child2_1 x is ' + x);
        }
    }
}

parent();

// difference between execution stack and scope chain
var a = 'hallo';
function f() {
    var b = 'Hi';
    g();

    function g() {
        var c = 'Hey';
        h();        
    }
}

function h() {
    var d = 'John';
    // console.log(c);
    console.log(a+d);
}

f();


//

function hallo() {
    console.log('hi');
    return;
}

hallo();

// some objects

// homework task:
//
// implement function methods in each object that
// change the object attributes

// a monster in computer game
var monster = { 
    name: 'casper',
    color: 'white',
    height: 'flexible',
    visible: false,
    opacity: 0.6,
    brothers: 3,

    attack: function(address) {},
    sleep: function() {},
    charm: function() {}
}; 

var playerLoL = {
    mana: 200,
    health: 200,
    skills: ['ignite', 'flash', 'heal', 'exhaust'],
    inventory: ['sword', 'tesla', 'shield', 'potion'],

    // type either "melee" or "range"
    fight: function(type, enemy) {},
    kill: function(enemy) {},
    die: function() {},
    move: function(speed, direction, style) {}

}; // the player figure in LoL

var entenhausen = {
    population: 150,
    shops: 10,
    weather: '50/50',
    animals: ['ducks', 'mice', 'dogs', 'geese', 'cats'],

    grow: function(numPopulation) {},
    celebrate: function() { this.weather = 'really sunny'; },
    burn: function() { 
        this.population -= Math.floor(Math.random() * this.population);
    },
    occupied: function() {}
}; // the city where donald duck etc. live


// the this keyword
console.log( this );

function calculateAge(year) {
    console.log( 2018 - year );
    console.log( this );
}

console.log(calculateAge(1985));
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);       
    },
    changeName: function(newName) {
        this.name = newName;
    }
}
john.calculateAge();


var haha = true;