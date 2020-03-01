$(document).ready(function() {

var movieIndex = 0
var movieQuestions = [ 
    {
        question: "What was the title of the movie about Pooh?",
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "Winnie the Pooh",
        answerImage: "assets/images/Pooh.png"
    },{

        question: "Which movie was released on June 24, 1994?", 
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "The Lion King",
        answerImage: "assets/images/LionKing.png"

    },{
        question: "Which movie was release on July 28, 1951?", 
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "Alice in Wonderland",
        answerImage: "assets/images/AliceInWonderland.png"
    },{
        question:   "Which movie was about a boy who didn't want to grow up?",
        choices: ["Winnie the Pooh", "The Lion King", "Alice in Wonderland", "Peter Pan"],
        correct: "Peter Pan",
        answerImage: "assets/images/PeterPan.png"
    },{
        question: "In which movie was a deer friends with a rabbit named Thumper?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo"],
        correct: "Bambi",
        answerImage: "assets/images/Bambi.png"

    },{
        question: "Which movie was about an elephant that could fly?",
        choices: ["Bambi","Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo"] ,
        correct: "Snow White and the Seven Dwarfs",
        answerImage: "assets/images/Dumbo.gif"

    },{
        question: "What was the name of the wooden boy whose nose would grow after telling a lie?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs","Pinocchio", "Dumbo"],
        correct: "Pinocchio",
        answerImage: "assets/images/Pinocchio.gif"
    },{
        question: "What was the title of the movie that featured a dwarf named Happy?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo"],
        correct: "Dumbo",
        answerImage: "assets/images/SnowWhite.jpg"
    }
];  


//create a variable for time remaining
var count = 30; 
//create a variable for questions
// var movieQuestions = [];
//create a variable for possible answers
// var choices = [];
//displays correct or no after user guesses question
// var result = "";

// var counter = 0;
var selections= [];

var numCorrect = 0;
var interval;
 

  //display countdown timer after start button is clicked
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
             
            }else{
              displayScore();
            }
            clearInterval(interval);
        }
        
  }

  //showing timer after game starts
  function startGame(){
    $("#hideTimer").show()
    display()
    interval = setInterval(countDown, 1000);
        
  }

  $("#start-button").on("click", function (){
      //  alert("Clicked");
      $(".hideButton").hide()
        startGame()
  });

  // display start button, questions, choices, answers and score
  function display(){

    $("#question").text(movieQuestions[movieIndex].question);

    var choiceArray = movieQuestions[movieIndex].choices
    $("#choice").empty()
    for(var i = 0; i < choiceArray.length; i++)
    {
      $("#choice").append("<p class='choicebtn'>" + choiceArray[i] + "<br>");
    }
  }


    //when user click button its either correct or incorrect
    //increase score for correct
    $(".choicebtn").on("click", function(){
      alert("clicked")
      // var type = $(this).data('clicked', true);
      // selections[i] = movieQuestions[movieIndex].correct
      // if(type === correctAnswer){
      //   numCorrect ++; 
      // } 
      // alert("testing")
      $("#hideQuiz").hide()
      // displayAnswer();
      // display(); 
      //if time runs out or there are no more questions display results
      // if(count === 0 || movieQuestions.length === 0){
      // displayScore()
      // }    
    });

    //dipslay answer after user selects choice
  function displayAnswer(){
    // if (movieQuestions[movieIndex].choices[i] === questions[i].correct){
    var correctText = movieQuestions[movieIndex].correct
    var disneyImage = movieQuestions[movieIndex].answerImage;
      $("#image-answer").html("You are correct. The answer is" + correctText + "<br>")
      $("#image-answer").append("<img src=" + disneyImage + ">");
      setTimeout(startGame,3000)
      numCorrect++;
    // }else{
    //   $("#image-answer").html("You are incorrect. The correct answer is" + correctText + "<br>")
    //   $("#image-answer").append("<img src=" + disneyImage + ">");
    //   setTimeout(startGame,3000)
    // }
  }

    function displayScore(){
    $("#score").css(display = "block");
    numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === movieQuestions[i].correctAnswer) {
        numCorrect++;
      }
    };
  

    $("#score").append(
      "You got " +
      numCorrect +
      " questions out of " +
      movieQuestions.length +
      " right!!!"
    );
    return score;

};
});
