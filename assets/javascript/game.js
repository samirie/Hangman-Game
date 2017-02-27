// window.onload = function () {

//   var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//         'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//         't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
//   var categories;         // Array of topics
//   var chosenCategory;     // Selected catagory
//   var getHint ;          // Word getHint
//   var word ;              // Selected word
//   var guess ;             // Geuss
//   var geusses = [ ];      // Stored geusses
//   var lives ;             // Lives
//   var counter ;           // Count correct geusses
//   var space;              // Number of spaces in word '-'

//   // Get elements
//   var showLives = document.getElementById("mylives");
//   var showCatagory = document.getElementById("scatagory");
//   var getHint = document.getElementById("hint");
//   var showClue = document.getElementById("clue");



//   // create alphabet ul
//   var buttons = function () {
//     myButtons = document.getElementById('buttons');
//     letters = document.createElement('ul');

//     for (var i = 0; i < alphabet.length; i++) {
//       letters.id = 'alphabet';
//       list = document.createElement('li');
//       list.id = 'letter';
//       list.innerHTML = alphabet[i];
//       check();
//       myButtons.appendChild(letters);
//       letters.appendChild(list);
//     }
//   }
    
  
//   // Select Catagory
//   var selectCat = function () {
//     if (chosenCategory === categories[0]) {
//       catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
//     } else if (chosenCategory === categories[1]) {
//       catagoryName.innerHTML = "The Chosen Category Is Films";
//     } else if (chosenCategory === categories[2]) {
//       catagoryName.innerHTML = "The Chosen Category Is Cities";
//     }
//   }

//   // Create geusses ul
//    result = function () {
//     wordHolder = document.getElementById('hold');
//     correct = document.createElement('ul');

//     for (var i = 0; i < word.length; i++) {
//       correct.setAttribute('id', 'my-word');
//       guess = document.createElement('li');
//       guess.setAttribute('class', 'guess');
//       if (word[i] === "-") {
//         guess.innerHTML = "-";
//         space = 1;
//       } else {
//         guess.innerHTML = "_";
//       }

//       geusses.push(guess);
//       wordHolder.appendChild(correct);
//       correct.appendChild(guess);
//     }
//   }
  
//   // Show lives
//    comments = function () {
//     showLives.innerHTML = "You have " + lives + " lives";
//     if (lives < 1) {
//       showLives.innerHTML = "Game Over";
//     }
//     for (var i = 0; i < geusses.length; i++) {
//       if (counter + space === geusses.length) {
//         showLives.innerHTML = "You Win!";
//       }
//     }
//   }

//       // Animate man
//   var animate = function () {
//     var drawMe = lives ;
//     drawArray[drawMe]();
//   }

  
//    // Hangman
//   canvas =  function(){

//     myStickman = document.getElementById("stickman");
//     context = myStickman.getContext('2d');
//     context.beginPath();
//     context.strokeStyle = "#fff";
//     context.lineWidth = 2;
//   };
  
//     head = function(){
//       myStickman = document.getElementById("stickman");
//       context = myStickman.getContext('2d');
//       context.beginPath();
//       context.arc(60, 25, 10, 0, Math.PI*2, true);
//       context.stroke();
//     }
    
//   draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
//     context.moveTo($pathFromx, $pathFromy);
//     context.lineTo($pathTox, $pathToy);
//     context.stroke(); 
// }

//    frame1 = function() {
//      draw (0, 150, 150, 150);
//    };
   
//    frame2 = function() {
//      draw (10, 0, 10, 600);
//    };
  
//    frame3 = function() {
//      draw (0, 5, 70, 5);
//    };
  
//    frame4 = function() {
//      draw (60, 5, 60, 15);
//    };
  
//    torso = function() {
//      draw (60, 36, 60, 70);
//    };
  
//    rightArm = function() {
//      draw (60, 46, 100, 50);
//    };
  
//    leftArm = function() {
//      draw (60, 46, 20, 50);
//    };
  
//    rightLeg = function() {
//      draw (60, 70, 100, 100);
//    };
  
//    leftLeg = function() {
//      draw (60, 70, 20, 100);
//    };
  
//   drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


//   // OnClick Function
//    check = function () {
//     list.onclick = function () {
//       var geuss = (this.innerHTML);
//       this.setAttribute("class", "active");
//       this.onclick = null;
//       for (var i = 0; i < word.length; i++) {
//         if (word[i] === geuss) {
//           geusses[i].innerHTML = geuss;
//           counter += 1;
//         } 
//       }
//       var j = (word.indexOf(geuss));
//       if (j === -1) {
//         lives -= 1;
//         comments();
//         animate();
//       } else {
//         comments();
//       }
//     }
//   }
  
    
//   // Play
//   play = function () {
//     categories = [
//         ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
//         ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
//         ["manchester", "milan", "madrid", "amsterdam", "prague"]
//     ];

//     chosenCategory = categories[Math.floor(Math.random() * categories.length)];
//     word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
//     word = word.replace(/\s/g, "-");
//     console.log(word);
//     buttons();

//     geusses = [ ];
//     lives = 10;
//     counter = 0;
//     space = 0;
//     result();
//     comments();
//     selectCat();
//     canvas();
//   }

//   play();
  
//   // Hint

//     hint.onclick = function() {

//       hints = [
//         ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
//         ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
//         ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
//     ];

//     var catagoryIndex = categories.indexOf(chosenCategory);
//     var hintIndex = chosenCategory.indexOf(word);
//     showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
//   };

//    // Reset

//   document.getElementById('reset').onclick = function() {
//     correct.parentNode.removeChild(correct);
//     letters.parentNode.removeChild(letters);
//     showClue.innerHTML = "";
//     context.clearRect(0, 0, 400, 400);
//     play();
//   }
// }


var wordList = [
 "banana",
 "kiwi",
 "strawberry",
 "melon",
 "mango"
]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 15;

function startGame(){
/*
1. computer chooses a word from word list
2. computer breaks down that random word as letters and replace them with
underscores _
3. add those underscores to the HTML to display to the player
4. numguesses always equals 15, and blankandsuccess is an empty array, 
and wronggueses is empty as well.
*/
wrongGuesses = [];
console.log("this is wrong guesses in startGame", wrongGuesses);
numGuesses = 15;
blanksAndSuccesses = [];


chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks)

for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}
console.log(blanksAndSuccesses);
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;



}


function checkLetters(letter){
    /*
    1. Compare the letter the user picks matches any of the letters in the word
    2. I want a conditional statement to determine if the letter the user picked
    is in the word. If so, do something, if not, do something else
    3. If the user is wrong we want to decrease the numGuesses variables by one
    */

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] === letter){
            blanksAndSuccesses[i] = letter;

        }

        }
    }else{
        numGuesses --;
        wrongGuesses.push(letter)
    }

    /*
    to check if a letter is already in the wrong guesses array. What we want to do
    is set up an if/else conditional that will run a for loop that will iterate over
    all the letters and then use the if/else to check if it it already exists.
    */


}


function roundComplete(){
    /*
    1. Its going to update the HTML with letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the use won the game or not
    */

    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


    // if(blanksAndSuccesses.indexOf(letter >= 1)){
    //     console.log(letter)
    // }
    console.log(lettersInChosenWord);
    console.log(blanksAndSuccesses);
    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("You win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you don't have any more guesses");        
        startGame();
    }




}
startGame();
document.onkeyup = function(event){
    /*
    1. its going to take in the letter that we type in
    2. its going to pass it through the CheckLetter function 
    */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("this is the letter we typed", letterGuessed)
    checkLetters(letterGuessed)
    roundComplete();


}