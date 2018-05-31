// homework task 3

var personsBorn = [1990, 1989, 1975, 2005];
function printFullAge( paramPersonsBorn ) {
    var a = [];
    for(var i=0; i<paramPersonsBorn.length; i++) {
        console.log(2018 - paramPersonsBorn[i]);
        a.push(2018 - paramPersonsBorn[i]);
    }

    console.log( a );
    var b = [];
    for(var j=0; j<a.length; j++) {
        if(a[j] >= 18) {
            console.log('age is ' + a[j] + ', fullage');
            b.push(true);
        }
        else {
            console.log('age is ' + a[j] + ', not fullage');
            b.push(false);
        }
    }

    return b;
}

console.log('printFullAge returns: ');
console.log( printFullAge(personsBorn) );

var full_1 = printFullAge([1999, 2003, 1980]);
var full_2 = printFullAge([1995, 1990, 1978]);

console.log('full_1 = ' + full_1);
console.log('full_2 = ' + full_2);

function numberTable(rows, columns) {
    var retArray = [];
    var c = 0;
    for(var i=0; i<rows; i++) {
        var x = [];        
        for(var j=0; j<columns; j++) {
            c++;
            x.push(c);
            // x.push(i*rows+j+1);
        }
        retArray.push( x );
    }

    return retArray;
}

console.log(numberTable(8, 8));

