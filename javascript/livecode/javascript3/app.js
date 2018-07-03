/*
GAME Rules:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his round score.
- BUT, If the player rolls a 1, all his ROUND score gets lost. After that, It's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
-The first player to reach 100 points on GLOBAL score wins the game.

Learning points:

-How to create our fundamental games variables.
-How to generate random number
-How to manipulate the DOM
-How to read from the DOM
-How to change css styles.
*/

var score, roundScore,activePlayer, dice;

score=[0,0];
roundScore=0;
activePlayer=0


console.log(dice);

var tempPlayerScore=document.getElementById('score-0').innerHTML;


console.log(tempPlayerScore);

document.querySelector('#score-0').textContent=dice;

//document.querySelector('#current-0').textContent=dice;

document.querySelector('#current-'+activePlayer).innerHTML='<em>' + dice +'</em>';

//document.querySelector('.dice').style.display='none';

//1. Random Number
dice=Math.floor(Math.random()*6) +1;

//2. Display the result
var diceDOM=document.querySelector('.dice');
console.log(diceDOM);
diceDOM.style.display='block';
diceDOM.src='dice-'+ dice + '.png';

//3. Update the round score IF the rolled number was NOT a 1
if(dice !==1)
{
    //Add current score
    roundScore +=dice;

    document.querySelector('#current-'+activePlayer).textContent =roundScore;

}
else
{
    //now current score will be zero
    roundScore=0;

    //change the player
    activePlayer === 0 ? activePlayer=1 : activePlayer =0;

    //to show zero value instead of the undefined value.
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    //change the panel activation and show active player indication.
    //document.querySelector('player-0-panel').classList.remove('active');
    //document.querySelector('player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //diceDOM.style.display='none';
}




