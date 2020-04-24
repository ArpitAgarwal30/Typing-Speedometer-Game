window.addEventListener('load',init);

// Levels
const levels = {
easy:5,
medium:3,
hard:1,
}

// Globals
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;


// Dom Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");

// Array of words
const words = [
   'hat',
   'rat',
   'adorable',
   'siblings',
   'investigate',
   'revolver',
   'establishment',
   'cocktail',
   'runaway',
   'moisture',
   'quarantine',
   'isolation',
   'relationship',
   'javascript',
   'python',
   'symptom',
   'corona',
   'covid19',
   'gocorona',
   'stayhome',
   'pandemic',
   'netflix',
   'horrendous'
];
// Initialize the game
function init(){
    // console.log("hello");
     showWord(words);
    // Checks Game status
     setInterval(checkStatus,50);
    // call countdown every second
     setInterval(countdown,1000);
    //  Start matching on word input
    wordInput.addEventListener('input',startMatch);
}
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel;
        showWord(words);
        wordInput.value = ''
        score++;
    } 
     if(score === -1){
        scoreDisplay.innerHTML = 0;
     }  
    scoreDisplay.innerHTML = score;
}

function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = "Correct.!!";
    return true;
    }
    else{
            message.innerHTML = " ";
            return false;
    }
}

function showWord(words){
    // Generte random index of array
    const randIndex = Math.floor(Math.random() * words.length);
    // console.log(randIndex);
    currentWord.innerHTML = words[randIndex];
}
    function countdown(){
        // console.log("hello");
        if(time>0){
            // decrement
            time--;
        }
        else if(time === 0)
        {
            isPlaying = false;
        }
        timeDisplay.innerHTML = time;
    }
    function checkStatus(){
     if(!isPlaying && time === 0){
         message.innerHTML = "Game Over.!!"
         score = -1;
     }
    }