
//Global variables of the game:
//create an array with authors
const author = ['agatha christie', 'lewis carroll', 'stephen king', 'clarice lispector', 'monteiro lobato'];
// empty array of user's guesses
let userGuess = [];



// number of tries
const maxTries = 20;

//choose words randomly 
let randNum = Math.floor(Math.random() * author.length); 
console.log(randNum);
let chosenAuthor = author[randNum];
console.log(chosenAuthor);

// let underscores = []
// console.log(underscores);


//create underscore based on lenght of word
var underscores = " ";
    for(i = 0; i < chosenAuthor.length; i++){
    underscores = underscores + "_"
    } 
console.log(underscores);
//issue with underscore space between 2 words



// USING FUNCTION GENERATEUNDERSCORE
// function generateUnderscore(){
//     for(let i = 0; i < chosenAuthor.length; i++){
//         underScore[i] = chosenAuthorArray.push('_');
//     }
//     return underScore;
// }
// console.log(generateUnderscore());



//get users guess
document.addEventListener("keypress", myScript)




//check is user guess is right
//if right pushes to right array
//if wrong pushes to wrong array

//start the game
// function start(){
//     for (i = 0; i < chosenAuthor.length; i++){
//         letters[i] = "_";
//     }
//     document.getElementById("answer").innerHTML = letters.join(" ");
//     console.log(chosenAuthor);    
// }






//Questions for TA:
//1) Do I need a function to link all these "blocks" of JavaScript I created to run the game? 
//