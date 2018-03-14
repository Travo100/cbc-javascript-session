// Comparing the word the computer is thinking of to the word the user guessed 
var wordsArray = ["soda", "carrots", "guitar", "headphones", "chips", "bagels", "chihuahua"];

var computerAnswer = wordsArray[Math.floor(Math.random()*wordsArray.length)];

console.log(computerAnswer);

function handleUserGuess() {
    var userAnswer = document.getElementById("guess").value;
    // If the match alert the user "You win!"
    if(userAnswer === computerAnswer) {
        alert("You win!");
        computerAnswer = wordsArray[Math.floor(Math.random()*wordsArray.length)];
        console.log(computerAnswer);
    } else {
        // Otherwise, if they do not match alert the user "You lose! Loser!"
        alert("You lose! Loser!");
    }
}

// setting the array up as a list in html
for(var i = 0; i < wordsArray.length; i++) {
    var ul = document.getElementById("computer-guess-words");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(wordsArray[i]));
    ul.appendChild(li);
}