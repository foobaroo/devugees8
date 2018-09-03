var greet1 = require('./greet1.js');

greet1();

var greet2 = require('./greet2.js');

greet2.greet();

var greet2b = require('./greet2.js').greet;

greet2b();

var greet3 = require('./greet3.js');

var g3 = new greet3();

var greet4 = require('./greet4.js');

greet4.sayHallo();
greet4.sayWorld();