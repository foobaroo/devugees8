function q(p) { console.log(p); }

var txt1 = 'apple, banana, kiwi';
var result1 = txt1.slice(15, 19);

q(result1);
var result2 = txt1.slice(15);
q(result2);
var result3 = txt1.slice(-4);
q(result3);
var result4 = txt1.substr(7, 6);
q(result4);
var result5 = txt1.replace('kiwi', 'orange');
q(result5);
var result6 = txt1.toUpperCase();
q(result6);
var result7 = txt1.toLowerCase();
q(result7);

var firstName = 'Bob', secondName = 'Jones';
var result8 = firstName.concat(secondName);
q(result8);
q(firstName+secondName);

var result8a = 'Hallo'.concat(' ', 'World');
q(result8a);
var result8b = 'Hallo'.concat(' ', txt1.slice(0,5));
q(result8b);

var str1 = 'Hallo World';
var result9 = str1.charAt(0);
q(result9);

var result10 = str1[0];
q(result10);

var str2 = ['H', 'a', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];

q(str1);
q(str2);

var str3 = 'a,b,c,d,e';
q(str3);

var arrStr3 = str3.split(',');
q(arrStr3);

var str4 = 's,d,g,j;a,d,e:c';
var arrStr4 = str4.split(';');
q(arrStr4);

var str5 = 's,d,g,j,a,D,e,c';
var arrStr5 = str5.split(',').sort();
q(arrStr5);

var str6 = 'schulz ,schulzb,mueller,meier,schmidt,fischer,von bismarck';
var arrStr6 = str6.split(',').sort();
q(arrStr6);

// task: given is the following string
var str7 =   'devugees is a very good learning institute '
            +'where we learn good stuff like HTML, CSS and '
            +'JavaScript. again, learn good stuff';

// create a function named countWords which takes two
// parameters searchTerm and str which returns the total
// occurences of searchTermin in str.
// test with str7
// hint: keep things simple.
// do not use indexOf or search.

function countWords(searchTerm, str) {
    var arrayStr = str.split(' ');
    var counter = undefined;
    for(var i=0;i<arrayStr.length;i++) {
        if(searchTerm === arrayStr[i]) {
            counter += 1; 
            // counter = undefined + 1
        }
        
        console.log('haha');              
    }

    return counter;
}

console.log(countWords('learn', str7));

var str8 = 'hallo sun';
var result11 = str8.indexOf('sun');
q(result11);

var str9 = 'hallo world';
var result12 = str9.indexOf('sun');
q(result12);

var str10 = 's,x,g,j,a,o,e,c';
var arrStr10 = str10.split(',');
q(arrStr10);

var str11 = arrStr10.join(';');
q('joined together back as ' + str11);


var str12 = 'abcdefghijklmnopqrstuvxwz01234567890';
var arrStr12 = str12.split('');
q(arrStr12);
// task:
//
// 1) Google how to use Math.random()
// 2) Create a function activationCode(n) with one 
//    parameter n that returns a string of length n
//    whereas each character is a random character
//    of the alphabet and the numbers 0 to 9.
//
//  example: activationCode(5) = 'f94kxo';
//
// 3) Add a feature that each character randomly can be
//    either uppercase or lowercase
//
//  example: activationCode(5) = 'F94kXy';

function activationCode(n) {
    var retString = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var alphabetUppercase = alphabet.toUpperCase();
    var allCharacters = alphabet + numbers + alphabetUppercase;

    for(var i=0; i<n; i++) {
        var randomIndex = Math.floor( 
            Math.random() * allCharacters.length );
        
        retString += allCharacters[randomIndex];
    }

    return retString;
}

console.log(activationCode(10));


function validateEmailAddress(email) {
    var emailParts = email.split('@');

    // != ==
    // !== ===

    if(emailParts.length !== 2) {
        console.log('there is no @');
        return false;
    }
    
    if(emailParts[0].length > 32 || emailParts[0].length < 8) {
        console.log('first part is invalid');
        return false;
    }

    var firstPart = emailParts[0];
    var lastPart = emailParts[1];

    var numNumbers = 0;
    for(var i=0;i<firstPart.length;i++) {
        var numbers = [0,1,2,3,4,5,6,7,8,9];
        var numberFound = false;

        for(var j=0;j<numbers.length;j++) {
            if(firstPart.charAt(i) == numbers[j]) {
                numNumbers++;
                numberFound = true;
                break;
            }
        }
    }

    if(firstPart.length === numNumbers) {
        console.log('the first part is a number');
        return false;
    }    

    if(firstPart.indexOf('%') !== -1 || firstPart.indexOf('$') !== -1) {
        console.log('$ and % are not allowed in the first part.');
    }

    var domainParts = lastPart.split('.');
    if(     domainParts[domainParts.length - 1] !== 'com'
         && domainParts[domainParts.length - 1] !== 'de'
         && domainParts[domainParts.length - 1] !== 'org') {

        console.log('domain ending is invalid.');
        return false;
    }

    if(domainParts[0].length > 16 || domainParts[0].length < 5) {
        console.log('domain name is invalid');
        return false;
    }
 
    return true;
} 


function ifelsetest() {
    
    x = 5;
    
    if(x === 5) {
        console.log('x is 5.')
    }
    else if(x > 4) {
        console.log('x is greater than 4');
    }
}

ifelsetest();
var mailTemplate = `
    Hallo $USERNAME,
    Thank you for your registration at MyService.com.
    Your account balance is $ACCOUNT_BALANC.
    Please hit the following activation link in order
    to complete your registration at MyService.com:

    https://myservice.com/activation/$ACTIVATIONCODE

    Have Fun,
    Your MyService.com - Team
`;
// task:
// generate an email based on this mailTemplate and
// print it out.
// generate it for the user "alex" who has 100$ and 
// whose activationlink will be generated with the
// activationcode function and has 20 characters
// hint: use the replace function
var mail0 = mailTemplate.replace('$USERNAME', 'alex');
console.log(mail0);

var mail1 = mailTemplate.replace('$ACCOUNT_BALANCE', '$100');
console.log(mail1);

// Piping

var mailFinal2 = mailTemplate.replace('$USERNAME', 'alex')                           .replace('$ACCOUNT_BALANCE', '$100')                           .replace('$ACTIVATIONCODE', '12345');

console.log(mailFinal2);


var pipeMe = 'Hallo World';
var finalStr = pipeMe.replace('Hallo', 'Hi').replace('Hi', 'Good morning').toUpperCase().concat(', students').toLowerCase();

console.log(finalStr);





