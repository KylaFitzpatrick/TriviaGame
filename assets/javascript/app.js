var movieQuestions = [ 
    {
        question: "What was the title of the movie about Pooh?",
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan"
    },{

        question: "Which movie was released on June 24, 1994?", 
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan"

    },{
        question: "Which movie was release on July 28, 1951?", 
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan"
    },{
        question:   "Which movie was about a boy who didn't want to grow up?",
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan" 

    },{
        question: "In which movie was a deer friends with a rabbit named Thumper?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo"

    },{
        question:  "Which movie was about an elephant that could fly?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo"

    },{
        question: "What was the name of the wooden boy whose nose would grow after telling a lie?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo"
    },{
        question: "What was the title of the movie that featured a dwarf named Happy?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo"
    }
]; 
    

// var answers = [
//     "Winnie the Pooh", 
//     "The Lion King", 
//     "Alice in Wonderland", 
//     "Peter Pan", 
//     "Bambi", 
//     "Dumbo", 
//     "Pinocchio", 
//     "Snow White and the Seven Dwarfs"
// ];

var answerImages = [
    "Pooh.png", 
    "LionKing.png", 
    "AliceInWonderland.png", 
    "PeterPan.png", 
    "Bambi.png", 
    "Dumbo.gif", 
    "Pinocchio.gif", 
    "SnowWhite.jpg"
]

//create a variable for time remaining
var timeRemaining = [];
//create a variable for questions
var questions = [];
//create a variable for possible answers
var answerChoices = [];
//displays correct or no after user guesses question
var result = "";
//display image/gif of answer
var imageAnswer = "";



resetGame();
//reset game if time runs out or user answers all questions
function resetGame() {
    $("#start-button").text("Start Playing!");
    $("#time-remaining").text(timeRemaining);
    $("#question").text(question);
    $("#answer").text(answerChoices);
    $("#result").text(result);
    $("#image-answer").text(imageAnswer);

    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#random-number").text(randomNumber);
    console.log("Number to guess: " + randomNumber);

}

for (var i = 0; i < 8; i++) {
    var question = movieQuestions[Math.floor(Math.random() * movieQuestions.length)]
}
//if start button is clicked display movie question with answerchoices
$("#start-button").on("click", function() {
if()
//user selects one answerchoice

//if answer if correct display image and correct text

//if not correct display not correct and correct answer/image

//continue to next question with answer choices

//if time runs out or there are no more questions display results
if(time === 0 || movieQuestions.length === 0){
    
}




for(var i = 0; i < movieQuestions.length; i++){
    questions = movieQuestions[Math.floor(Math.random() * movieQuestions.length)];
    
}




