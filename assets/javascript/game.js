
//secret array
var authors = ["agatha christie", "stephen king", "monteiro lobato", "clarice lispector", "lewis carroll"];
//this is the array for underscores
var underscores = [];
//this is the right guesses array
var rightGuesses = []; 
//an array to store the user's wrong guesses
var wrongGuesses = [];
//get user input push into guesses array
//you might not need the guessesArray 
//since we have logic to determine the wrongArray || rightArray
var guesses = [];
//this is to store you secret array
var secretWord="";
//Game Score
var numTries = 10;
var numGuesses = 0;
//variable to start the game
var gameReady = false;



//QUESTIONS:
//1. How to prevent the game restarting every time I press enter?
//  using logic of the number of wrong guesses you can tell if you need to restart the game
//2. Am I missing something on the logic?
//3. How to create a function to automatically gerenate the underscores?
//4. How to display the rightGuesses and wrongGuesses array in the html? I used textContent associated with the ID but is not working



//-------------------------------------------------------------

function startGame()
{
    //clear out your wrongGuesses to start over
    wrongGuesses=[];
    //restart point score
    numGuesses=0;
    //change the var to true
    gameReady = true; 
    
    // -!-!-!!-!-!!-!-!!-!-!!-!-!!-!-!!-!-!!-!-!!-!-! 
    //CLICK ON THE BUTTON TO RUN THE FUNCTION startGame() AND CHANGE THE gameReady var TO TRUE - DIDN'T WORK

    //ATTEMPT 1:
    // gameReady = true;  //add a button on html and define a function
    //ATTEMPT 2:
    // var gameReady = document.getElementById("button");
    // gameReady.addEventListener("click", modifyText, true);
    //ATTEMPT 3: 
    // document.button.elements[ "gameReady" ].value = "true"
    // -!-!-!!-!-!!-!-!!-!-!!-!-!!-!-!!-!-!!-!-!!-!-!



    secretWord = authors[Math.floor(Math.random() * authors.length)];
    createSecretArray(secretWord);
    getUserInput(guesses);
    check(guesses,secretWord);
}

//-------------------------------------------------------------
//Choose randomly one author from the array

//create a fx takes in a secret word and converts to blank - DONE
function createSecretArray(author)
{
    underscores=[];
    
    console.log("secret word " +author)
    for(var i=0; i<author.length;i++)
    {
        if(secretWord[i] === " "){
            underscores.push(" ");
        }
        else{ 
            underscores.push("_");
        }
    }
    //remember to remove the commas so you just get blanks - DONE   
    //console.log(underscores);
    document.querySelector(".underscores").innerHTML = underscores.join("");

    return underscores;
}


//-------------------------------------------------------------
//Capture input from user 
// const input = document.querySelector("input");
var userInput; 

function getUserInput(){
    document.onkeyup = function(event)
    { 
        if(event.keyCode >= 65 && event.keyCode <=90){
            userInput = event.key;    
        
        
        console.log("This was the userinput: " + userInput);
        //if stmt saying if we are at the end of the game, do everything to restart,
        //check numGuesses<numTries
        //call the startGame() fx 
        //else run the check fx
            if(numGuesses >= numTries){
                alert("Game over!");
                gameReady=false;
            }
            else { 
                check(userInput,secretWord)
                document.querySelector("#user_guess").innerHTML = "What is your guess? "+event.key;}
                guesses.push(userInput);
             console.log("This is my 'guesses' array: " + guesses);
        }
    }
}



//-------------------------------------------------------------
// //Iterate over the author through a function and for loop
//this is a function called "check" and it passes in the userInput to see if it is a wrong guess or right guess.
//if correct, add to the rightGuesses array
//if wrong add to the wrongGuesses array

//THIS FUNCTION IS NOT COMPARING THE guesses ARRAY TO THE secretWord. CHECK THE IF
function check(usersInput,secretWord)
{
    console.log("This is a user's guess: " + usersInput + " and the secret word: "+secretWord);
    console.log("going into the check function")
    //so here you have the user input and secret word, you need to run a loop to check if the 
    //userinput matches the secret word
    
    guesses.forEach(Element => 
    {
        if(guesses === secretWord.charAt(usersInput.length-1))//compare the guesses' string to the secretWord 
        {
            console.log("The letter " + guesses + " is in the name!");
            rightGuesses.push(guesses);
            //when it is right go ahead and display the most updated rightGuess array
        } 
        else
        {
            console.log("Wrong guess!");
            wrongGuesses.push(guesses);
            numGuesses++; // ISSUE HERE: EVERY GUESS IS BEING ADDED AS 2 TRIES
            console.log("check fx: numGuesses "+numGuesses); 
        }
    });
    console.log("end of the check fx");
}

//this is where call the startGame fx to start the game
startGame();


//-------------------------------------------------------------
//Print rightGuesses and wrongGuesses array in html 

//rightGuesses = document.getElementById("right_guesses").textContent;
//console.log("how many right guesses: "+rightGuesses);

//document.querySelector("#right_guesses").innerHTML = rightGuesses;


//wrongGuesses = document.getElementById("wrong_guesses").textContent;
//console.log("how many wrong guesses: "+wrongGuesses);


// ids are wrong_guesses and right_guesses

// document.getElementById('right_guesses').innerHTML = rightGuesses;

// document.getElementById('wrong_guesses').innerHTML = wrongGuesses;

//-------------------------------------------------------------
