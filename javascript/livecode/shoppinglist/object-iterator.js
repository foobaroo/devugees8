var obj = {
    firstname: 'Bob',
    lastname: 'Smith',
    age:30,
    city: 'Berlin',
    house: {
        windows: 10,
        rooms: 5
    }
}

for(var key in obj) {
    console.log('key: ' + key + ', value: ' + obj[key]);

    if(typeof obj[key] === 'object') {
        console.log('is an object');
    }
}

function printX(o) {
    console.log(o.x);
}

printX({x:1});

var a = [
    {x:1, y:5},
    {x:2, y:6},
    {x:3, y:7}
];

for(var i=0;i<a.length;i++) {
    for(var key in a[i]) {
        console.log('object ' + i + ': key: ' + key + ', value: ' + a[i][key]);
    }
}