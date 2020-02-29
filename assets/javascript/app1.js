$(document).ready(function() {


    $("#clickStart").click(function() {
      $('#questions').show(600);
      $('#clock').show(700);
      $('#hide').hide(500);
  
  
    });
  
  
    (function() {
      var questions = [{
          question: "The great Victoria Desert is located in?",
          choices: ['Canada', 'West Africa', 'Australia', 'North America'],
          correctAnswer: 'Australia'
        },
        {
          question: "The intersecting lines drawn on maps and globes are?",
          choices: ['lattitudes', 'longitudes', 'geographic grids', 'none of the above'],
          correctAnswer: 'geographic gird'
        },
        {
          question: "The landmass of which of the following continents is the least?",
          choices: ['Africa', 'Asia', 'Australia', 'Europe'],
          correctAnswer: 'Australia'
        },
        {
          question: "Without ____ the equator would be much hotter than it is while the poles would be much cooler",
          choices: ['Lattitude of redistribution of heat', 'Cycle of air circulation', 'Global wind pattern', 'All are similiar'],
          correctAnswer: 'All are simliar'
        },
        {
          question: "The habitats valuable for commercially harvested species are called?",
          choices: ['Coral reefs', 'Sea grass bed', 'hot spots', 'None of the above'],
          correctAnswer: 'Sea grass bed'
        }
      ];
  
      var questionCounter = 0; //Tracks question number
      var selections = []; //Array containing user choices
      var quiz = $("#quiz"); //Quiz div object
  
      // Display initial question
      displayNext();
  
      //  'next' button
      $("#next").on("click", function(e) {
        e.preventDefault();
  
        // Suspend click listener during fade animation
        if (quiz.is(":animated")) {
          return false;
        }
        choose();
  
        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
          alert("Please make a selection!");
        } else {
          questionCounter++;
          displayNext();
        }
      });
  
      // 'prev' button
      $("#prev").on("click", function(e) {
        e.preventDefault();
  
        if (quiz.is(":animated")) {
          return false;
        }
        choose();
        questionCounter--;
        displayNext();
      });
  
      // 'Start Over' button
      $("#start").on("click", function(e) {
        e.preventDefault();
  
        if (quiz.is(":animated")) {
          return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $("#start").hide();
      });
  
      // Animates buttons on hover
      $(".button").on("mouseenter", function() {
        $(this).addClass("active");
      });
      $(".button").on("mouseleave", function() {
        $(this).removeClass("active");
      });
  
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
  
        var radioButtons = createRadios(index);
        qElement.append(radioButtons);
  
        return qElement;
      }
  
      // Creates a list of the answer choices as radio inputs
      function createRadios(index) {
        var radioList = $("<ul>");
        var item;
        var input = "";
        for (var i = 0; i < questions[index].choices.length; i++) {
          item = $("<li>");
          input = '<input type="radio" name="answer" value=' + i + " />";
          input += questions[index].choices[i];
          item.append(input);
          radioList.append(item);
        }
        return radioList;
      }
  
      // Reads the user selection and pushes the value to an array
      function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
      }
  
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
  
            // Controls display of 'prev' button
            if (questionCounter === 1) {
              $("#prev").show();
            } else if (questionCounter === 0) {
              $("#prev").hide();
              $("#next").show();
            }
          } else {
            var scoreElem = displayScore();
            quiz.append(scoreElem).fadeIn();
            $("#next").hide();
            $("#prev").hide();
            $("#start").show();
          }
        });
      }
  
      // Computes score and returns a paragraph element to be displayed
      function displayScore() {
        var score = $("<p>", {
          id: "question"
        });
  
        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
          if (selections[i] === questions[i].correctAnswer) {
            numCorrect++;
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
      }
    })();
  });