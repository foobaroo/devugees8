function whichOne(f) {
    a();
    b();
    f(); 
}

function a() { 
    console.log('i am a'); 
}

function b() { 
    console.log('i am b'); 
}

function c() { 
    console.log('i am c');
    return 42;
}

// whichOne(  c() ); // -> error at c()
whichOne(b);

//
// Wait 5 Seconds, then print out hallo world.
// 

function sayHalloWorld() {
    console.log('Hallo World');
}

window.setTimeout(sayHalloWorld, 5000); // 5 seconds

// task:
//
// code a countdown, that counts down from 10 to
// 0 and each time appends a new div to the body
// displaying the current number. 10, 9, 8, 7, ..., 1
// after the 1 a big "Hallo World" will be displayed
// i.e. as h1 

function newDiv(n) {
    var bodyObj = document.getElementsByTagName('body')[0];

    var div = document.createElement('div');
    div.innerHTML = n;
    bodyObj.appendChild(div);

    if(n===0) {
        var h1 = document.createElement('h1');
        h1.innerHTML = 'Hallo World';
        bodyObj.appendChild(h1);
    } else {
        window.setTimeout(function() {
            newDiv(n-1);
        }, 1000);
    }
}

window.setTimeout(function() {
    newDiv(10)
}, 1000);

// loop solution:
// var i=0;
// while(i<10) {
//     window.setTimeout(function() {
//         newDiv(i--);
//     }, i*1000);
//     i++;
// }



