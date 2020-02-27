$(document).ready(function() {

var movieQuestions = [ 
    {
        question: "What was the title of the movie about Pooh?",
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "Winnie the Pooh"
    },{

        question: "Which movie was released on June 24, 1994?", 
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "The Lion King"

    },{
        question: "Which movie was release on July 28, 1951?", 
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "Alice in Wonderland"
    },{
        question:   "Which movie was about a boy who didn't want to grow up?",
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "Peter Pan"


    },{
        question: "In which movie was a deer friends with a rabbit named Thumper?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo"],
        correct: "Bambi"

    },{
        question: "Which movie was about an elephant that could fly?",
        choices: ["Bambi","Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo"] ,
        correct: "Snow White and the Seven Dwarfs"

    },{
        question: "What was the name of the wooden boy whose nose would grow after telling a lie?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs","Pinocchio", "Dumbo"],
        correct: "Pinocchio"
    },{
        question: "What was the title of the movie that featured a dwarf named Happy?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo"],
        correct: "Dumbo"
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
];

//create a variable for time remaining
var timeRemaining = [];
//create a variable for questions
var question = "";
//create a variable for possible answers
var choices = [];
//displays correct or no after user guesses question
var result = "";
//display image/gif of answer
var imageAnswer = "";

var counter = 0;
var selections= [];
var lastQuestion = question.length - 1;
var runningQuestion = 0;
var count = 30;
// var questionTime = 30;
var timer;
var score = 0;
// var checkAnswer = "";

display();
// resetGame();

function display(){
    $("#start-button").text("Start Playing!");
    $("#time-remaining").text(timeRemaining);
    $("#question").text(question);
    $("#result").text(result);
    $("#image-answer").text(imageAnswer);
    $("#A").text(choices[0]);
    $("#B").text(choices[1]);
    $("#C").text(choices[2]);
    $("#D").text(choices[3]);
    $("#counter").text(counter);
    // $("#timeGauge").text(timeGauge);
    $("#score").text(score);
    $(".choice").click(checkAnswer);
}


//reset game if time runs out or user answers all questions
// function resetGame() {
//     timer = 30;
//     for (var i = 0; i < 8; i++) {
//     question = movieQuestions[Math.floor(Math.random() * movieQuestions.length)]
//     $("#question").text(question);
//     console.log("Question: " + question);
//     }

// }

//display current question
function renderQuestion(){
    question = movieQuestions[Math.floor(Math.random() * movieQuestions.length)]
    q = question[runningQuestion];
    $("#question").text(question.question);
    $("#A").text(question.choices[0]);
    $("#B").text(question.choices[1]);
    $("#C").text(question.choices[2]);
    $("#D").text(question.choices[3]);

};

//after start button click start quiz
//if start button is clicked display movie question with choices
$("#start-button").on("click", function() {
// function startQuiz(){
$("#start-button").css(display = "none");
renderQuestion();
$("#question").css(display = "block");

var count = 30; 
var interval = setInterval(function(){
$("#counter").text = count;
count --;
if (count === 0){
    clearInterval(interval);
    $("#counter").text = "You're out of time!";
}
}, 1000);
});

//display time remaining
function renderCounter(){
 if(count <= question){
     $("#counter").text = count;
    //  timeGauge.style.width = count++
 }
 else{
    count = 30;
    //display next question 
    if(runningQuestion < lastQuestion){
        runningQuestion ++;
        renderQuestion();
    }else{
        //stop timer and display score
        clearInterval(timer);
        scoreRender();
    }
 }
}
//check answer
//user selects one choice
//if answer if correct display image and correct text
//if not correct display not correct and correct answer/image
function checkAnswer(){
    if (questions[i].choices[selections[i]] === questions[i].correct) {
    // for(var i = 0;i < choices.length; i++ )
    // if(choices[i] === question.correct){
        score++;
    }
    count = 0;
    //continue to next question with choices
    if(runningQuestion < lastQuestion){
        runningQuestion ++;
        renderQuestion();
    }else{
        clearInterval(timer);
    }
};
//display score
function scoreRender(){
    $("#score").css(display = "block");

    var score = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        score++;
      }
    }

    score.append(
      "You got " +
      numCorrect +
      " questions out of " +
      questions.length +
      " right!!!"
    );
    return score;
  };


//if time runs out or there are no more questions display results
// if(timer === 0 || movieQuestions.length === 0){
//     scoreRender();
// }
});  

