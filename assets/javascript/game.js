// Asking the user what word is the computer thinking of
var userAnswer = prompt("What word am I thinking of?");

// Comparing the word the computer is thinking of to the word the user guessed 
var computerAnswer = "soda";

// If the match alert the user "You win!"
if(userAnswer === computerAnswer) {
    alert("You win!");
} else {
    // Otherwise, if they do not match alert the user "You lose! Loser!"
    alert("You lose! Loser!");
}

