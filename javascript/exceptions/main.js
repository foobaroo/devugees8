// console.log('hallo world');
// idontexist;
// console.log('hallo mars');

// 1

try {
    console.log('hallo world');
    idontexist; // error is thrown here ...
    console.log('hallo mars'); // is not executed
}
catch(e) {
    console.log('something wrong: ' + e.stack);
}
finally {
    console.log('this always runs');
}

console.log('this is run after try/catch-block');

// 2

let json = '{"age": 33}';
try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw SyntaxError('Incomplete data: no name given');
    }
}
catch(e) {
    console.log('json invalid' + e.message);
}

// 3 
function doSomething(x) {
    if(x > 5) {
        throw 'Ooops, something wrong';
    }
    console.log('x is less or equal to 5, all good!');
}

// try {
//     doSomething(6);
//     console.log('not reached');
// }
// catch(e) {
//     console.log('Exception: ' + e);
// }

function doSomethingAgain() {
    doSomething(6);
}

// try {
//     doSomethingAgain();
//     console.log('not reached');
// }
// catch(e) {
//     console.log('Exception: ' + e);
// }

function doSomethingAgainAndAgain() {
    doSomethingAgain();
}

try {
    doSomethingAgainAndAgain();
    console.log('not reached');
}
catch(e) {
    console.log('Exception: ' + e);
}