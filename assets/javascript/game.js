//created a word in an array
var wordlist = ["apple", "pear", "berry", "mango", "peach", "plum", "orange"];
var guess= 10;
var guessindex = document.getElementById("guess-left");
    guessindex.innerHTML = guess;

//create an function for random word

function randomword() {
    var randnum = [Math.floor(Math.random() * wordlist.length)];
    var word = wordlist[randnum];
    return word;
}

var newword = randomword();
console.log("My new random word is " + newword);

console.log(" ------------ ")

//creating a reset array
function resetvalue(){
    newword = randomword();
    replacedash=dashes();
    guess = 10;
    userinput=[];
    var guessedsofar = document.getElementById("guess-so-far");
    guessedsofar.innerHTML ="";
    var dashword = document.getElementById("word");
    dashword .innerHTML = replacedash;
    var guessindex = document.getElementById("guess-left");
    guessindex.innerHTML = guess;

}

//creating a dash array
function dashes() {
    var guessedword = [];
    console.log(" this is random " + newword);
    for (var i = 0; i < newword.length; i++) {
        guessedword[i] = "-";
    }
    console.log("text dashes value  is " + guessedword);

    return guessedword;
}
//put the dashes in the documnet
var replaced = dashes();
var guessed = document.getElementById("word");
guessed.innerHTML = replaced;

var replacedash = [];
replacedash =dashes();

//checking the guess index
for (var i = 10; i > 0; i--) {
   
//activating the key press to get user input
document.onkeyup = function (event) {
    var userInput = event.key;
    var userinput=userInput.toLowerCase();
  
    // this is the function to get each letter
    for (var i = 0; i < newword.length; i++) {
        console.log(newword.charAt(i));

        //checking the userinput with computer word
        if (userinput === newword.charAt(i) ) {
           replacedash[i]=userinput;
           //check the won funtion
          if(!replacedash.includes("-")){
              alert("Yeah you won lets start a new game");
              resetvalue();
              return; 
          }
          
        } else {      
           
            console.log("guesswords so far : " + userinput);
        }
        
    }
  
    //writing the guessed so far letters into the document
    var guessedsofar = document.getElementById("guess-so-far");
        guessedsofar.innerHTML += userinput;
        var dashword = document.getElementById("word");
        dashword .innerHTML = replacedash;
    //put the guess value in the document
    var guessindex = document.getElementById("guess-left");
    guessindex.innerHTML = guess;

    console.log(" -----------------");
  guess--;
 //this function is to check if we won

   
    
  if (guess < 0) {
      alert("You are starting a new game");
   resetvalue();
}


};
}

