var obj = {
    a: 1,
    b: 2,
    c: 3
};

console.log( obj );
var objJSON = JSON.stringify(obj);

console.log( objJSON );
console.log( objJSON.b );

// var h = 'abcdef';
// var h2 = 'abc\'def';  
// var h3 = "abc\"def";
// var h4 = "abc'def";

var objJSONreconverted = JSON.parse(objJSON);
console.log(objJSONreconverted);

if(localStorage.getItem('myname')) {
    var name = localStorage.getItem('myname');

    var greetingObj = document.getElementById('greeting');
    greetingObj.innerHTML = 'Hallo ' + name;
}
else {
    var greetingObj = document.getElementById('greeting');
    greetingObj.innerHTML = 'Hallo stranger';
}

var n = [];
var x = localStorage.getItem('n');
if(x) {
    n = JSON.parse(x);
}

console.log(n);
var addnumberObj = document.getElementById('addnumber');
addnumberObj.onclick = function() {
    n.push(n.length);
    console.log(n);

    var nJSON = JSON.stringify(n);
    localStorage.setItem('n', nJSON);
}