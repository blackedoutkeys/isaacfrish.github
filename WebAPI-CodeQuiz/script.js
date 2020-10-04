var startButton = document.getElementById ('start-btn');
var nextButton = document.getElementById ('next-btn');
var questionContainer = document.getElementById ('questionBox');
var answerContainer = document.getElementById ('answers');

startButton.addEventListener('click', startGame);
var questionsArray = ['What does HTML stand for?',
                    'When pulling data from an array, what number do you begin counting with?',
                    'What number will print when you print the following function to the console? ()',
                    'Which of the following strings is a true boolean value?',
                    'What is the proper sequence to push data to Gihub?',
                    'To add Javascript to an HTML document you can use which of the following methods?',
                    'Who is the best at writing code?' 
                    ];
let question1 = questionsArray[0]
let question2 = questionsArray[1]
let question3 = questionsArray[2] 
let question4 = questionsArray[3]
let question5 = questionsArray[4]  
let question6 = questionsArray[5] 
let question7 = questionsArray[6]

var answerArray = [
  ['HyperText Markup Language', 'HypoText Markdown Language', 'HyperTextual Makeup Linguistics', 'HypedUp Texty Bois'],
  [],
  [],
  [],
  [],
  [],
  []
];


let answer1 = answerArray[0]
let answer2 = answerArray[1]
let answer3 = answerArray[2] 
let answer4 = answerArray[3]
let answer5 = answerArray[4]  
let answer6 = answerArray[5] 
let answer7 = answerArray[6]



//functions list for quiz



// Function To begin game 
function startGame () {
  // console.log ('Started');
  countdown(1);
  score = 0; // to reset the counter after the test started - add score indicator
  startButton.classList.add('hide');
  nextButton.classList.remove('hide');
  // initialQuestion();
  questionContainer.classList.remove('hide')
  answerContainer.classList.remove('hide');
  actualGame
}

function actualGame () {
  questionsArray.Math.floor(math.random() * 6)
  nextQuestion;
  //works up to here

}
// function initialQuestion () {
  
// }


//pushes data arrays into container for each subsequent question
function nextQuestion() {
  
  }



//end game functions







//Countdown clock container function
function countdown(minutes) {
  var seconds = 60;
  var mins = minutes
  function tick() {
      var counter = document.getElementById("gameTimer");
      var current_minutes = mins-1
      seconds--;
      counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      } else {
          
          if(mins > 1){
              
              countdown(mins-1);        
              //this section doesn't fire   
          if(mins === 0) {
            alert('You ran out of time! You have failed the quiz. Try Again!');
            }
          }
      }
  }
  tick();
}

//Log Hi score

function leaderBoard  () {
  //call end game function, log score post to leaderboard
}