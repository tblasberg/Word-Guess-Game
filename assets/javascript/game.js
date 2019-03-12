
var authors = ["agatha", "stephen", "monteiro", "clarice", "lewis"];
var rightGuesses = []; 
var wrongGuesses = [];
var guesses = [];

//-------------------------------------------------------------
//Game Score
var numTries = 10;
var numGuesses = 0;


//-------------------------------------------------------------
//Choose randomly one author from the array
let author = authors[Math.floor(Math.random() * authors.length)];
console.log(author); 


//-------------------------------------------------------------
//Capture input from user 
// const input = document.querySelector("input");
userInput = document.getElementById("user_guess").value;
document.onkeyup = function(event){ //how to add this to the id #user_guess ??
    guesses.push(event.key);
    // console.log(guesses);
}

//-------------------------------------------------------------
// //Iterate over the author through a function and for loop
function check(){
    guesses.forEach(Element => {
        if(guesses === author.charAt(letter)){
            console.log("The letter "+ guesses + " is in the name!");
            rightGuesses.push(guesses);
        } 
        else{
            console.log("Wrong guess!");
            wrongGuesses.push(guesses);
        }
    });
}

check();


//-------------------------------------------------------------
//Print rightGuesses and wrongGuesses array in html 

rightGuesses = document.getElementById("right_guesses").textContent;
console.log(rightGuesses);

wrongGuesses = document.getElementById("wrong_guesses").textContent;
console.log(wrongGuesses);


// ids are wrong_guesses and right_guesses

// document.getElementById('right_guesses').innerHTML = rightGuesses;

// document.getElementById('wrong_guesses').innerHTML = wrongGuesses;

//-------------------------------------------------------------
//QUESTIONS:
//1. How to prevent the game restarting every time I press enter?
//2. Am I missing something on the logic?
//3. How to create a function to automatically gerenate the underscores?
//4. How to display the rightGuesses and wrongGuesses array in the html? I used textContent associated with the ID but is not working