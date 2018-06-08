var losses = 0;
var wins = 0;
var previous = [];
var guesses = 10;
var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q,","r","s","t","u","v","w","x","y","z"];
    var computerguesses = choices[Math.floor(Math.random() * choices.length)];


var psychic = 
"<p>" + "wins: " + wins + "</p>" +
"<p>" + "losses: " + losses + "</p>" +
"<p>" + "guesses left: " + guesses +
"<p>" + "your guesses so far: " + previous + "</p>"
console.log(psychic)
document.getElementById("game").innerHTML = psychic
function reset() {
    computerguesses = choices[Math.floor(Math.random() * choices.length)];
    
    guesses = 10 
    previous = []
}
document.onkeyup = function(event) {
    var yourGuess = event.key;
    console.log(computerguesses)
    console.log(yourGuess)
    if (computerguesses === yourGuess) {
        wins++;
        reset ()
        alert("yah!!")

        }

 else {
    guesses--;
    previous.push(yourGuess);

}

if (guesses <0) {
    alert("nope!")
    losses ++
    reset ()
}

 psychic = 
"<p>" + "wins: " + wins + "</p>" +
"<p>" + "losses: " + losses + "</p>" +
"<p>" + "guessesleft: " + guesses + "</p>" +
"<p>" + "your guesses so far: " + previous + "</p>" 
document.getElementById("game").innerHTML = psychic
}
