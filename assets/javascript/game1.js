//created a word in an array
var computerword = ["apple", "pear", "berry", "mango", "peach", "plum", "banana", "orange"];
var guessword = [];
var guess = 5;
var correctLetter = " ";

//random word
var randnum = [Math.floor(Math.random() * computerword.length)];
var randword = computerword[randnum];
console.log("random word is " + randword);


var myfun = function (letter) {
    for (var i = 0; i < letter.length; i++) {
        console.log(letter.charAt(i));
        console.log()
    }

}
// this is the function to get each letter
myfun(randword);

console.log(" -----------------");



//activating the key press to get user input
document.onkeyup = function (event) {

    //getting a key from user and change to lowercase and store it in a variable
    //var userInput = String.fromCharCode(event.which).toLowerCase();
    var userinput=event.key;

    //pusing the guess into an array
    guessword.push(userInput);

//replace correct letter
    function start() {
        for (i = 0; i < randword.length; i++) {
          guessword[i] = "__";
        }
      
        document.getElementById('words').innerHTML = guessword.join(" ");
        console.log(randword);
      }

    //taking one letter fromthe array and checking
    if (guessword != randword) {
        for (var i = 0; i < randword.length; i++) {

            if (userInput === randword.charAt(i)) {


                // for (i = 0; i < randword.length; i++) {
                //     if (randword.charAt(i) == " ") {
                //         correctLetter += " ";
                //     } else {
                //         correctLetter += "-";
                //     }
                // }

                console.log(" the letters are"+ correctLetter);
                console.log("yes the letter is  : " + randword.charAt(i));
            }
            else {

                console.log("guesswords so far : " + guessword);
            }
        }
    } else {
        alert("yes you guessed the correct fruit" + randword);
    }



    var guess1 = "<p>Guess left :  " + guess + "</p>";

    var guessword1 = "<p> Computer Guess  " + guessword + " </p>";
    var correctLetter1 = "<p> Computer Guess  " + correctLetter + " </p>";


   // document.getElementById("guess").innerHTML = guess1;
    document.getElementById('guesssofar').innerHTML ="<p> Your Guess So Far : " + userinput + " </p>";
   // document.getElementById("words").innerHTML = correctLetter1;

    guess--;
    console.log("guess" + guess);
    if (guess < 0) {
        guess = 5;
        guessword = [];
        randword = computerword[randnum];

    }



};