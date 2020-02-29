$(document).ready(function() {

    //after start button click start quiz
    //if start button is clicked display movie question with choices
    // $("#start-button").click(function() {
    //     $("#start-button").css(display = "none");
    //     renderQuestion();
    //     $("#question").css(display = "block");
    //     // $('#question').show(600);
    //     // $('#count').show(700);
    //     // $('#hide').hide(500);
    
    
    //   });
    // $("#start-button").on("click", function() {
    //     // function startQuiz(){
    //     $("#start-button").css(display = "none");
    //     renderQuestion();
    //     $("#question").css(display = "block");
        
    

var movieIndex = 0
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
var count = 30; 
         
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

var timer;
var score = 0;
var interval;
 


function countDown() {
  $("#count").text("")
        $("#displayTimer").html("00:" + count);
        count--;
        console.log(count)
       
        if (count === 0){

            if(movieIndex < movieQuestions.length){
              movieIndex++
              count = 30
             
              $("#hideTimer").hide()
              //$("#displayTimer").text("00:" + count);
              $("#count").text("You're out of time!");

              setTimeout(startGame,3000)
             
            }
            clearInterval(interval);
        }
        
}

function startGame(){
  $("#hideTimer").show()
  display()
  interval = setInterval(countDown, 1000);
      
}

$("#start-button").on("click", function (){
     //  alert("Clicked");
      startGame()
})


// display start button, questions, choices, answers and score
function display(){
    $("#start-button").text("Start Playing!");

   
    $("#question").text(movieQuestions[movieIndex].question);

    var choiceArray = movieQuestions[movieIndex].choices
    $("#choice").empty()
    for(var i = 0; i < choiceArray.length; i++)
  {
    $("#choice").append("<p class='choicebtn'>" + choiceArray[i] + "<br>");
  }


  $(".choicebtn").on("click", function(){
    alert("testing")
  })
  //  $("#result").text(result);
   // $("#image-answer").text(;
    // $("#A").text(choices[0]);
    // $("#B").text(choices[1]);
    // $("#C").text(choices[2]);
    // $("#D").text(choices[3]);
  //  $("#counter").text(counter);
   // $("#score").text(score);
  //  $(".choice").click(checkAnswer);
}
// displayNext();
  
      //  choice button
      // $("button").on("click", function(e) {
      //   e.preventDefault();
  
        // Suspend click listener during fade animation
        // if (quiz.is(":animated")) {
        //   return false;
        // }
        // choose();

//display current question
// function renderQuestion(){
//     question = movieQuestions[Math.floor(Math.random() * movieQuestions.length)]
//     q = question[runningQuestion];
//     $("#question").text(question.question);
//     $("#A").text(question.choices[0]);
//     $("#B").text(question.choices[1]);
//     $("#C").text(question.choices[2]);
//     $("#D").text(question.choices[3]);

// };

//display time remaining
function renderCounter(){
 if(count <= question){
     $("#count").text = count;
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
 // Creates and returns the div that contains the questions and
      // the answer selections
      function createQuestionElement(index) {
        var qElement = $("<div>", {
          id: "question"
        });
  
        var header = $("<h2>Question " + (index + 1) + ":</h2>");
        qElement.append(header);
  
        var question = $("<p>").append(questions[index].question);
        qElement.append(question);
  
        var buttons = createButtons(index);
        qElement.append(buttons);
  
        return qElement;
      }
 // Creates a list of the answer choices as buttons
 function createButtons(index) {
    var buttonList = $("<button>");
    var item;
    for (var i = 0; i < questions[index].choices.length; i++) {
      item += questions[index].choices[i];
      buttonList.append(item);
    }
    return buttonList;
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

function choose() {
    if (questions[i].choices[selections[i]] === questions[i].correctAnswer) {
    numCorrect++;
    }
};

// Displays next requested element
function displayNext() {
    quiz.fadeOut(function() {
      $("#question").remove();

      if (questionCounter < questions.length) {
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!isNaN(selections[questionCounter])) {
          $("input[value=" + selections[questionCounter] + "]").prop(
            "checked",
            true
          );
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
      }
    })
};
// Computes score and returns a paragraph element to be displayed
function displayScore(){
    $("#score").css(display = "block");

    var numCorrect = 0;
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
});
 

