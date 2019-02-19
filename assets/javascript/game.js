//list of words
var monsters = ['beholder', 'owlbear', 'dragon', 'goblin', 'vampire', 'ogre'];

//global scope
var wordJoin;

//win count
var wins = 0;

//lives remaining and guesses
var guesses = 10;
var guess;
var wrongLetter = [];

//pick random word
var word = monsters[Math.floor(Math.random() * monsters.length)];

//blank answer
var answer = [];

//loops through random word and converts letters to _, then joins
function startUp(){
    for (var i = 0; i < word.length; i++) {
        answer[i] = '_';
        wordJoin = answer.join(' ');
    }
    document.getElementById("currentWord").innerHTML = wordJoin;
    
}
//////////////////  Game  ///////////////////

//compares key pressed to letter in word
window.addEventListener('keydown', function(evt){
    guess = String.fromCharCode(evt.keyCode).toLowerCase();
    for (var j = 0; j < word.length; j++) {
        if (guess === word[j]) {
            answer[j] = guess.toUpperCase();
            document.getElementById("currentWord").innerHTML =  answer;
        } else { //add wrong guess to wrongLetter array
            wrongLetter.push(guess.toUpperCase());
            //kill duplicates here somehow
            document.getElementById("guessedLetter").innerHTML =  wrongLetter;
        } 
    }
})



    //document.getElementById("guessedLetter").innerHTML = guess;
    // if(guess === answer[i]){
    //     console.log("works")
    // }    


// function letterGuessed() {
//     var guess = document.getElementById('letter').value;
// }
// if (guess.length > 0) {
//     // check to see if key matches letter on word
//     // if match, replace _

//     for (var i = 0; i < word.length; i++) {
//         //letter is in word
//         if (word[j] === guess) {
//             answer[j] = guess;
//         }
//     }
// }
/////////////////  Game End  /////////////////




startUp();
