var x0 = +3;
var x1 = +'3';
var x2 = +'-3';
var x3 = +'3.14';
var x4 = +true; // 1
var x5 = +false; // 0
var x6 = +'true';

var x7 = this.x4 + this.x5; // 1+0
var x8 = this.x4 + this.x4 + this.x5; // 1+1+0

var x9 = -this.x8;
var x10 = -'15';
var x11 = -'15+5';
var x12 = this.x0+this.x3;
var x13 = '-15'-'5';

var x14 = !false;
var x15 = !NaN; // true
var x16 = !this.x11;
var x17 = !null; 
var x18 = !!NaN;
var x19 = !undefined;
var x20 = !"";
var x21 = !true;
var x22 = !0;
var x23 = !-3;
var x24 = !"-3";
var x25 = !"true";
var x26 = !{};
var x27 = ![]

var a = 4;
var b = a++; // "returns" 4 and then increments itself
console.log('a = ' + a + ', b = ' + b);
a++; // a = a + 1; only increments itself

console.log('a = ' + a + ', b = ' + b);

var x = 5;
var y = ++x; // "returns" 6 after it has been incremented 
console.log('x = ' + x + ', y = ' + y);

var x28 = typeof 2;
var x29 = typeof -3.14;
var x30 = typeof 0xFF;
var x31 = typeof true;
var x32 = typeof false;
var x33 = typeof null;
var x34 = typeof Infinity;
var x35 = typeof [1,2,3];
var x36 = typeof {a:1, b:2};
var x37 = typeof function() {};
var x38 = typeof 'hallo';
var x39 = typeof { f: function() {} };
var x40 = typeof hi;
var x41 = typeof this.x4

var hi = 'hi';
delete hi;

function yo() { }
delete yo;

var pub = {bar: 1};
delete pub;

var code = [1,2,3,4];
delete code;

var fruits = { abc: 'apple', def: 'mango' };
delete fruits['abc']; 

var numbers = [1,2,3,4,5];
delete numbers[2];

