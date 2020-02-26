var movieQuestions = [ 
    {
        question: "What was the title of the movie about Pooh?",
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan",
        correct: "A"
    },{

        question: "Which movie was released on June 24, 1994?", 
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan",
        correct: "B"

    },{
        question: "Which movie was release on July 28, 1951?", 
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan",
        correct: "C"
    },{
        question:   "Which movie was about a boy who didn't want to grow up?",
        choiceA: "Winnie the Pooh", 
        choiceB: "The Lion King",
        choiceC: "Alice in Wonderland", 
        choiceD: "Peter Pan",
        correct: "D"


    },{
        question: "In which movie was a deer friends with a rabbit named Thumper?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo",
        correct: "A"

    },{
        question:  "Which movie was about an elephant that could fly?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo",
        correct: "B"

    },{
        question: "What was the name of the wooden boy whose nose would grow after telling a lie?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo",
        correct: "C"
    },{
        question: "What was the title of the movie that featured a dwarf named Happy?",
        choiceA: "Bambi", 
        choiceB: "Snow White and the Seven Dwarfs",
        choiceC: "Pinocchio", 
        choiceD: "Dumbo",
        correct: "D"
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
var question = [];
//create a variable for possible answers
var choiceA = [];
var choiceB = [];
var choiceC = [];
var choiceD = [];
//displays correct or no after user guesses question
var result = "";
//display image/gif of answer
var imageAnswer = "";

var counter = 0;

// var timeGauge = "";
// var question = movieQuestions[Math.floor(Math.random() * movieQuestions.length)]
var lastQuestion = question.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 30;
var timer;
var score = 0;

display();
// resetGame();

function display(){
    $("#start-button").text("Start Playing!");
    $("#time-remaining").text(timeRemaining);
    $("#question").text(question);
    $("#result").text(result);
    $("#image-answer").text(imageAnswer);
    $("#A").text(choiceA);
    $("#B").text(choiceB);
    $("#C").text(choiceC);
    $("#D").text(choiceD);
    $("#counter").text(counter);
    // $("#timeGauge").text(timeGauge);
    $("#score").text(score);
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
    // question.innerHTML = "<p>" + q.question + "</p>"
    // choiceA.innerHTML = q.choiceA;
    // choiceB.innerHTML = q.choiceB;
    // choiceC.innerHTML = q.choiceC;
    // choiceD.innerHTML = q.choiceD;
    $("#question").html(q.question);
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    $("#D").html(q.choiceD);

};

//after start button click start quiz
//if start button is clicked display movie question with choices
$("#start-button").addEventListener("click", startQuiz());
function startQuiz(){
start.style.display = "none";
renderQuestion();
quiz.style.display = "block"; 
timer = setInterval(renderCounter, 1000)
};

//display time remaining
function renderCounter(){
 if(count <= question){
     counter.innerHTML = count;
    //  timeGauge.style.width = count++
 }
 else{
    count = 0;
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
function checkAnswer(answer){
    if(answer === questions[runningQuestion].correct){
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
}

//display score
function scoreRender(){
    score.style.display = "block";

    var scorePerCent = Math.round(100 * score/questions.length);

    $("#score").html += "<p>" + scorePerCent + "%</p>";
}

//if time runs out or there are no more questions display results
if(timer === 0 || movieQuestions.length === 0){
    scoreRender();
}
    

