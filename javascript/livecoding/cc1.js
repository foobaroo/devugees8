//code challenge 1

var heightJohn=170;
var heightMike=195;
var ageJohn=36;
var ageMike=29;

var scoreJohn=heightJohn + 5*ageJohn;
var scoreMike=heightMike + 5*ageMike;

console.log('john score: ' +scoreJohn);
console.log('mike score: ' +scoreMike);

if(scoreJohn>scoreMike){
    console.log('John wins the game with '+scoreJohn+' points!');
}
else if(scoreMike>scoreJohn){
    console.log('Mike wins the game with '+scoreMike+' points!'); 
}
else if (scoreJohn===scoreMike){
    console.log('There is a draw');
}

var heightMary=158;
var ageMary=31;
var scoreMary=heightMary + 5*ageMary;

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John wins the game with '+scoreJohn + ' points!');
}
else if(scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('Mike wins the game with '+scoreMike + ' points!');
}
else if(scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log('Mary wins the game with '+scoreMary + ' points!');
}
else{
    console.log('It is a draw');
}