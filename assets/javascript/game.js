
var UserNumber = 10; // Prompt the user to pick a number between 1 and UserNumber.
var counter = 0;
var MaxTries = 5; //max number of times you can guess the random number

//Promote User and ask them to pick a number between 1 & x
var RandomNumber = Math.floor(Math.random() * UserNumber) + 1;

//Check to see if number is correct
while (Attempts != RandomNumber) {
    var Attempts = prompt("Please pick a number between 1 and" + UserNumber);
counter += 1;

if (counter > MaxTries){

document.write("You have no more tries left. Please press f5 to play again");
break
    }
} 

//If number is wrong prompt the User again and ask them to try to guess again. Repeat until user gets correct number of until they have used up all of their attempts.

//If user guesses the corect number, then tell them what the number is, how many attempts it took them to get the right  number, and thank them for playing.

//Program complete.