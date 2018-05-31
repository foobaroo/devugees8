var x = 0;

if(x > 0) {
    console.log('x is greater than 0');
}

// while(x < 6) {
//     console.log('x is '+ x +' and smaller than 6');
//     x = x + 1;
// }

var arrEmpty = [];
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(var i=0; i<=10; i = i + 1) {
    arrEmpty.push( i );
}

console.log( arrEmpty );

// [ 
//   [0],
//   [0,1],
//   [0, 1, 2],
//   [0, 1, 2, 3],
//   [0, 1, 2, 3, 4],
//   [0, 1, 2, 3, 4, 5]
//   ...
// ]

var x = [];
var y = [0];
var z = [0, 1];

x.push(y);
x.push(z);

console.log(x);



