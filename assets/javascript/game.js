//list of words
var monsters = ['beholder', 'owlbear', 'dragon', 'goblin', 'vampire', 'ogre', 'ork', 'wearwolf'];
var monsterImages = [];

//global scope
var wordJoin;

//win count
var wins = 0;

//lives remaining and guesses
var guesses = 10;
var guess;
var wrongLetter = [];
var wrongGuess = true;

//win count
document.getElementById("winCount").innerHTML = 'Wins: ' + wins;

//loss count
document.getElementById("lossCount").innerHTML = guesses;

//pick random word
var word = monsters[Math.floor(Math.random() * monsters.length)];

//blank answer
var answer = [];

//////////////////  Game  ///////////////////
//loops through random word and converts letters to _, then joins
function startUp(){
    for (var i = 0; i < word.length; i++) {
        answer[i] = '_';
        wordJoin = answer.join(' ');
    }
    document.getElementById("currentWord").innerHTML = wordJoin;  
}
//compares key pressed to letter in word
window.addEventListener('keyup', function (evt){
    guess = String.fromCharCode(evt.keyCode).toLowerCase();
    //loop through word and check if guess is in word
    if (word.includes(guess)) { //true
        for (var j = 0; j < word.length; j++) {
            if (guess === word[j]) {
                answer[j] = guess.toUpperCase();
                document.getElementById("currentWord").innerHTML =  answer;
                //if word guessed correctly, alert win           
                if (!answer.includes('_')) {
                    //add img

                    setTimeout(function() {
                        if (window.confirm("You Win! Play Again?")) {
                            //remove last word here somehow
                            word = monsters[Math.floor(Math.random() * monsters.length)];
                            startUp();
                            wins++;
                            document.getElementById("winCount").innerHTML = 'Wins: ' + wins;
                        }
                    }, 10)
                }   
            } 
        }
    // if guess is not in word add to wrongLetter array and sub from lives
    } else {
        wrongLetter.push(guess.toUpperCase());
        document.getElementById("guessedLetter").innerHTML =  wrongLetter;
        //reduce lives
        guesses--;
        document.getElementById("lossCount").innerHTML =  guesses;
        if(guesses == 0) {
            if (window.confirm("You Lose! Play Again?")) {
                word = monsters[Math.floor(Math.random() * monsters.length)];
                startUp();
                guesses = 10;
                document.getElementById("lossCount").innerHTML = guesses;
            }
        }
    }
})

/////////////////  Game End  /////////////////


startUp();
