//Global variables of the game:
//create an array with authors
const author = ['agatha christie', 'lewis carroll', 'stephen king', 'clarice lispector', 'monteiro lobato'];
const maxTries = 20;

var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;

//Reset the game level level variables
function resetGame(){
    remainingGuesses = maxTries;
    gameStarted = false;
}

    //Determine random number to choose an author from the array
    currentWordIndex = Math.floor(Math.random() * (author.length))
    console.log(currentWordIndex);

    //clear out arrays
    guessedLetters = [];
    guessingWord = [];

    //build the guessing word and clear it out
    for( var i = 0; i < author[currentWordIndex].length; i++){
        guessingWord.push("_");
        console.log(guessingWord);
    }


    //work on the underscore replace for word 

document.onkeydown = function(event){
    //if the game has finished
    if(hasFinished = true) {
        resetGame();
        hasFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90){
            makeGuess(event.key.toLowerCase());
        }
    }
}

function makeGuess(letter){
    if(remainingGuesses > 0){
        if(!gameStarted) {
            gameStarted = true;
        } 
    }
    checkWin(); 
}

//this function take a letter and finds all instances of appearance in the string and replaces them in the guess word
function evaluateGuess(letter){
    //array to store positions of letter in string
    var positions = [];

    //loop through word finding all instances of guessed letter, store the indicies in an array
    for(var i=0; i < author[currentWordIndex].length; i++){
        if(author.[currentWordIndex][i] === letter){
            positions.push(i);
        }    
    }
