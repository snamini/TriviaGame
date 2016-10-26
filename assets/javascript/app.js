// a) Title and button to start game

// b) first question and choices pops up with time remaining starting at 30 seconds

// c) css hover property on answers 

// d) when you select an answer, it stops the timer, and replaces the question&answer options with an image and html that either says correct or incorrect or out of time and gives correct answer

// e) after a few seconds, it the image is replaced with the second question, answer options, and time remaining


$( document ).ready(function() {

console.log(questions);

    // console.log( "ready!" );


        // GLOBAL VARIABLES

        var timeremaining = 30;
        var question = 0;
        // setInterval('#timer', 3000);

        // CLICK FUNCTIONS

        $( "#start" ).click(function() {

          $(this).hide();
          game.start();
          });

        $( "#resetgame" ).click(function() {
            game.reset();
           });


        // (we are going to append the questions to the page!! you must write box.append)
//    box.append('<h3>Correct Answers: ' + game.correct + '</h3>');    
//            box.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');    
//             box.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');    
//             box.append('<br><button id="start-over">Start Over?</button>');

// });

  // console.log(questions[0].question);

        // QUESTIONS

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


        // for (var i = 0; i < questions.length; i++) { 

        // console.log(questions[i].question);

        // }



        var game = {

          // timer: 0,
          // Questions: questions,
          // currentQuestion: 0,
          // correct: 0,
          // incorrect: 0,



          start: function() {

            // var number = 30;

            // function run(){
            //   counter = setInterval (increment, 1000);

            // }

            // function increment(){
            //   number--;
            //   $("#timer").html('<h2>' + number + '</h2>');
            //   if (number === 0) {
            //     stop();
            //   }
            // }
            //   function stop () {
            //       clearInterval(counter);
            //   }

            //   run();

            //   $("#questions").html("HELLLOOOO");
            //   $("#options").html("I WILL REMEMBAAAAH");


            }


          }
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


