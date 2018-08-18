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

