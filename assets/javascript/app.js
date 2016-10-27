
$( document ).ready(function() {


      $( "#start" ).click(function() {

          $(this).hide();
            game.start();
       });

      $( "#resetgame" ).click(function() {
            game.reset();
           });


    var questions = [
        //Question 1
          {
            'answer': 1,
            'question': 'Which one of these is a scary movie?',
            'options': ['Finding Nemo', 'The Ring', 'Aladdin', "Half Baked"],
            'image': "assets/images/thering"

          },


        //Question 2  
          {
            'answer': 0,
            'question': 'You will have bad luck if a _____ crosses your path?',
            'options': ['Black Cat', 'Giraffe', 'Squirrel', 'Dog'],
            'image': "assets/images/meow"

          },

        //Question 3
          {
            'answer': 3,
            'question': 'Which one of these movies involves witches?',
            'options': ['Road Trip', 'Scary Movie II', 'The Cat In The Hat', 'Hocus Pocus'],
            'image': "assets/images/meow"

          },  

        //Question 4
        {
          'answer': 2,
          'question': 'Who appears in the mirror when you call her name three times?',
          'options': ['Paris Hilton', 'Beatle Juice', 'Bloody Mary', 'Jimbo'],
          'image': "assets/images/meow"

        },

        //Question 5
        {
          'answer': 0,
          'question': 'What movie involves a creepy lookin robot in a wheelchair?',
          'options': ['Saw', 'Paulie', 'Sex in the City', 'Star Wars'],
          'image': "assets/images/meow"

        }

    ];


    var timeremaining = 30;
    var question = 0;

    var game = {

          // timer: 0,
          // Questions: questions,
          // currentQuestion: 0,
          // correct: 0,
          // incorrect: 0,

          start: function() {

            var number = 30;

            function run(){
              counter = setInterval (increment, 1000);

            }

            function increment(){
              number--;
              $("#timer").html('<h2>' + number + '</h2>');
              if (number === 0) {
                stop();
              }
            }
              function stop () {
                  clearInterval(counter);
              }

              run();

              $("#questions").html(questions[0].question);

              var answerChoices = "<div> ";

              for (i = 0; i < questions[0].options.length; i++) { 
               answerChoices+='<h2 class="choice" id= "' + i + '">' + questions[0].options[i] + '</h2></br>';
                }

                answerChoices+= "</div>";
              $(".choice").click(function() {
                if ($(this).attr('id') == questions[0].answer)
                  alert("correct")
                  currentQuestion++;
                  correct++;
                game.nextQuestion();

                  // game.correctAnswer() //to be defined
                }

              }
              else {
                 alert("incorrect")
                currentQuestion++;
                incorrect++;
                game.nextQuestion();
                // game.wrongAnswer(); //to be defined
              }

            });

            }

          }


nextQuestion: function() {

            var number = 30;

            function run(){
              counter = setInterval (increment, 1000);

            }

            function increment(){
              number--;
              $("#timer").html('<h2>' + number + '</h2>');
              if (number === 0) {
                stop();
              }
            }
              function stop () {
                  clearInterval(counter);
              }

              run();

              $("#questions").html(questions[currentQuestion].question);

              var answerChoices = "<div> ";

              for (i = 0; i < questions[currentQuestion].options.length; i++) { 
               answerChoices+='<h2 class="choice" id= "' + i + '">' + questions[0].options[i] + '</h2></br>';
                }

                answerChoices+= "</div>";
              $(".choice").click(function() {
                if ($(this).attr('id') == questions[currentQuestion].answer)
                  alert("correct")
                  currentQuestion++;
                  correct++;
               

                  // game.correctAnswer() //to be defined
                }

              }
              else {
                 alert("incorrect")
                currentQuestion++;
                incorrect++;
                game.nextQuestion();
                // game.wrongAnswer(); //to be defined
              }

            });

            }

          }

          

      reset: function() {
            
            // time remaining
            // // questions : go to the first question
            // clear all answers

          },

          
});





      //     nextQuestion: function() {
      //        game.currentQuestion++ 
      //        console.log(game.Questions[game.currentQuestion])
      //        // add 1 to current question number ^^
      //   // get the next question
      //   // reset timer back to 30s
      //   // update html with new question


      //   timer !!

      //     },

      //       youWon: function() {
      //   // replace by using .html with an image tag with some text that says YOU WON THE WHOLE GAME

      //     },

      //     youLost: function() {
      //   // replace by using .html with an image tag with some text that says YOU LOST THE WHOLE GAME


      //     },

      //      showScore: function() {
      //   // replace by using .html with an image tag with some text that says YOU LOST THE WHOLE GAME


      //     },


      // reset: function() {
            
      //       // time remaining
      //       // // questions : go to the first question
      //       // clear all answers

      //     },



      //   }



      //   // CALL FUNCTION


