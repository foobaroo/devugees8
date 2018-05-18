var info = [
    'Jan',       // 0 
    'Schulz',    // 1   
    32,          // 2
    'Berlin'     // 3
];

var objInfo = {
    firstName: 'Jan',
    lastName: 'Schulz',
    age: 32,
    city: 'Berlin'
};

console.log( objInfo.lastName );

function p(o) {
    console.log(o.lastName);
}

p(objInfo);

// task:    
// 
// write a function intro that does not return anything.
// it prints out an introductory about yourself based
// on the objInfo object.
// Hi my name is Jan I live in Berlin my age is 32.

function intro(o) {
    console.log('Hi my name is ' + o.firstName + 
                ' and my lastname is ' + o.lastName +
                ' and my age is ' + o.age);
}

intro(objInfo);

var family = {
    children: [
        {age: 3, name: 'paul'},
        {age: 4, name: 'susi'}
    ],
    father: 'peter',
    mother: 'sandra'
};

var appletree = {
    apples: [
        {
         color: 'red', 
         taste: 'very', 
         num: 12,
         size: [
             'big',
             'small',
             'medium'
         ]
        },
        {
         color: 'yellow', 
         taste: 'very', 
         num: 11
        }
    ],
    tree: 'wonderful'
}

console.log( appletree.apples[0].num );
console.log( appletree.apples[0].size[1] );



