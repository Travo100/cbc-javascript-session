// Comparing the word the computer is thinking of to the word the user guessed 
var wordsArray = ["soda", "carrots", "guitar", "headphones", "chips", "bagels"];

var computerAnswer = wordsArray[Math.floor(Math.random()*wordsArray.length)];

console.log(computerAnswer);

function handleUserGuess() {
    var userAnswer = document.getElementById("guess").value;
    // If the match alert the user "You win!"
    if(userAnswer === computerAnswer) {
        alert("You win!");
    } else {
        // Otherwise, if they do not match alert the user "You lose! Loser!"
        alert("You lose! Loser!");
    }
}