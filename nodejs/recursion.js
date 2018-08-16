var fs = require('fs');

function f(x) {
    if(x === 0) {
        console.log('x is 0. end of recursion stack');
    }
    else {
        console.log('x is ' + x);
        f(x-1);
    }
}

f(5);
function sum(x) {
    if(x === 1) return 1;
    else return sum(x-1) + x;
}

console.log( sum(5) );
