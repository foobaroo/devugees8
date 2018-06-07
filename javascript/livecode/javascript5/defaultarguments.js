function multiply(a, b=1) {
    return a*b;
}

console.log( multiply(5,2) );
console.log( multiply(5) );

// task: rewrite multiply with the same
//       return value under the restriction that
//       it does not use a default parameter.

function multiply2(a, b) {
    if(!b) {
        return a*1;
    }
    return a*b;
}

console.log(multiply2(12));