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
        correct: "Dumbo",
        answerImage: "assets/images/Dumbo.gif"

    },{
        question: "What was the name of the wooden boy whose nose would grow after telling a lie?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs","Pinocchio", "Dumbo"],
        correct: "Pinocchio",
        answerImage: "assets/images/Pinocchio.gif"
    },{
        question: "What was the title of the movie that featured a dwarf named Happy?",
        choices: ["Bambi", "Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo"],
        correct: "Snow White and the Seven Dwarfs",
        answerImage: "assets/images/SnowWhite.jpg"
    }
];  


//variable for time remaining
var count = 30;
//variable for incorrect answers
var numIncorrect = 0;
//variable for correct answers
var numCorrect = 0;
//variable for unanswered
var unanswered = 0;
//clears interval set by javascript
var interval;

 

  //display countdown timer after start button is clicked
  function countDown() {
  
        $("#count").text("")
        $("#displayTimer").html("Time remaining: 00:" + count);
        count--;
        console.log(count)
       
        if (count === 0){

            if(movieIndex < movieQuestions.length - 1){
              movieIndex++
              count = 30
             
              $("#count").text("You're out of time!");

              setTimeout(startGame,3000)
              
            }else if(movieIndex <= movieQuestions.length - 1 && count === 0){
              showResults()
            }
            clearInterval(interval);

          }
        } 
        
        

  //showing timer after game starts
  function startGame(){
    $("#hideQuiz").show()
    $("#score").hide()
    $("#image-answer").hide()
    display()
    interval = setInterval(countDown, 1000)
    
  }
  //after user clicks start button the button is hidden
  $("#start-button").on("click", function (){
      //  alert("Clicked");
      $(".hideButton").hide()
        startGame()    
  });

  // display questions and choices
  function display(){
    if(movieIndex < movieQuestions.length){
      $("#question").text(movieQuestions[movieIndex].question);
      // var choiceCorrect = movieQuestions[movieIndex].correct
      var choiceArray = movieQuestions[movieIndex].choices


      console.log(movieQuestions[movieIndex].question)
      $("#choice").empty()
      for(var i = 0; i < choiceArray.length; i++)
      {
        $("#choice").append("<p class='choicebtn'>" + choiceArray[i] + "<br>");
      }
      //if user click button check if clicked button is correct answer
      
      //when user clicks button its either correct or incorrect
      $(".choicebtn").on("click", function(){
        
      //console.log($(this).val(), $(".choicebtn").val())
        // alert("clicked");
        $("#hideQuiz").hide()
        //show answer
        $("#score").show()
        $("#image-answer").show()
  
        var userChoice = $(this).text()
        //show image and answer
        displayAnswer(userChoice)
      
      
      });
    }

   
  
  }
    //displays correct answer text and correct image
    function displayAnswer(userChoice){
      // var choiceCorrect = movieQuestions[movieIndex].correct
      // var choiceText = movieQuestions[movieIndex].choices
      var correctText = movieQuestions[movieIndex].correct
      var disneyImage = movieQuestions[movieIndex].answerImage;
      console.log(correctText, userChoice)
      if( correctText  === userChoice){
        $("#image-answer").text(" You are correct. The answer is " + correctText)
        $("#image-answer").append("<img src=" + disneyImage + ">");
         numCorrect++
      }else if(correctText  !== userChoice){
        $("#image-answer").text(" You are incorrect. The answer is " + correctText)
        $("#image-answer").append("<img src=" + disneyImage + ">");
        numIncorrect++
      }else{
        $("#image-answer").text("The answer is " + correctText)
        $("#image-answer").append("<img src=" + disneyImage + ">");
      }
      

      $("#score").show()
      $("#image-answer").show()
      clearInterval(interval)
      // setTimeout(startGame,3000)
      //timeout for 3 seconds
      movieIndex++
      count = 30

      console.log(movieIndex, movieQuestions.length)
      if(  movieIndex >= movieQuestions.length ){
       
        setTimeout(showResults, 3000)

        return
         //dipslay answer after user selects choice
       }
      setTimeout(startGame,3000)
    
  }

  function showResults(){
      $("#score").show()
      $("#hideQuiz").hide()
      clearInterval(interval)
      unanswered = movieQuestions.length - numCorrect + numIncorrect
      $("#score").append(
        "You got " +
        numCorrect + "correct" +"<br>"+
        numIncorrect + "incorrect" +"<br>"+
        unanswered + "unanswered" +"<br>"+
        " questions out of " +
        movieQuestions.length 
      );
    
  }
});
    

