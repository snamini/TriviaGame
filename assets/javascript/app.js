// GLOBAL VARIABLES:


var start = 0;

var wins = 0; 

var losses = 0; 

var timeremaining = 30; 

var question1 = {
rightanswer: ["The Ring"],
}


var question2 = {
rightanswer: ["Black Cat"],
}



var question3 = {
rightanswer: ["Hocus Pocus"],
}


var question4 = {
rightanswer: ["Bloody Mary"],
}


var question5 = {
rightanswer: ["Jigsaw"],
}

// FUNCTIONS:

$( "#a" ).click(function() {
  	console.log( "clicked a" );

  	if (this == rightanswer) { 
    wins++

    $("#wins").text(wins);
    startGame();

} else
    losses--

    $("#losses").text(losses);
    startGame();

    });


  $( "#b" ).click(function() {
  console.log( "clicked b");
});

  $( "#c" ).click(function() {
  console.log( "clicked c");
});

  $( "#d" ).click(function() {
  console.log( "clicked d");

});


//   if 

//        $("#totalscore").text(totalscore);


// $( "#a" ).click(function() {
//   console.log( "clicked quartz." );
//   totalscore += quartz;
//     console.log(totalscore);

//        $("#totalscore").text(totalscore);

// if (totalscore == random) { 
//     wins++

//     $("#wins").text(wins);
//     startGame();

// } else if (totalscore > random) { 
//     losses--

//     $("#losses").text(losses);
//     startGame();

// }




// // You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// // If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
// // The scenario is similar for wrong answers and time-outs.
// // If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// // If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// // On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
// // A Few Last Notes

// // Styling and theme are completely up to you. Get creative!
// // If you get stuck anywhere in this assignment, remember to talk to a TA or instructor for support.
// // Good Luck!




// //User clicks button to have the quiz application pop up using jquery
// $('button').click(function(){
//   $('#quiz').slideDown();
//   $(this).hide();
//   $(".btn-primary").css("cssText", "display: block !important; margin:auto; width: 30%;");
// });

// var score = null;
// var questionNumber = 0;

// var questions = [
// //Question 1
//   {
//     'answer': 'b',
//     'question': 'What is Apple\'s most lucrative product of 2015?',
//     'options': ['Iphone', 'Apple Watch', 'Ipad']

//   },

// //Question 2  
//   {
//     'answer': 'a',
//     'question': 'Who invented the tablet?',
//     'options': ['Microsoft', 'Google', 'Apple']

//   },

// //Question 3
//   {
//     'answer': 'b',
//     'question': 'In 1999 who created the first mp3 phone?',
//     'options': ['Toshiba', 'Samsung', 'Sony']

//   },  

// //Question 4
// {
//   'answer': 'a',
//   'question': 'Which tech company released The Walkman?',
//   'options': ['Sony', 'Samsung', 'Toshiba']

// },

// //Question 5
// {
//   'answer': 'b',
//   'question': 'Which company created the "slide to unlock" on smartphones?',
//   'options': ['Apple', 'Microsoft', 'Google']

// },
