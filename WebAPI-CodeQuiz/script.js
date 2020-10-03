var startButton = document.getElementById ('start-btn');
var nextButton = document.getElementById ('next-btn');
// var questionContainerElement = document.getElementById ('game');
// var questionElement = document.getElementById('question');
var answerButtonElements = document.getElementById('answer-buttons');
var countDownTimer = document.getElementById('gameTimer');
startButton.addEventListener('click', startGame);


const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('#question'));
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')
let currentQuestion = {}
let acceptingAnswers=true
let score=0
let questionCounter = 0
let availableQuestions = []
let questions = [
  {
    question: 'placeHolder1',
      choice1: 'blah',
      choice2: 'bleh',
      choice3: 'bloh',
      choice4: 'bluh',
  },
  {
    question: 'placeHolder2',
      choice1: 'blah2',
      choice2: 'bleh2',
      choice3: 'bloh2',
      choice4: 'bluh2',
  },
  {
    question: 'placeHolder3',
      choice1: 'blah3',
      choice2: 'bleh3',
      choice3: 'bloh3',
      choice4: 'bluh3',
  },
  {
    question: 'placeHolder4',
      choice1: 'blah4',
      choice2: 'bleh4',
      choice3: 'bloh4',
      choice4: 'bluh4',
  },
  {
    question: 'placeHolder5',
      choice1: 'blah5',
      choice2: 'bleh5',
      choice3: 'bloh5',
      choice4: 'bluh5',
  },
]


const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

//functions list for quiz
function startGame () {
    console.log ('Started');
    //works up to here
    score = 0; // to reset the counter after the test started - add score indicator
    startButton.classList.add('hide');
    // shuffledQuestions = questions.sort (() => Math.random() - 0.5);
    availableQuestions = [...questions]
    getNewQuestion()
    timerStart
    nextButton.classList.remove('hide');
    questionContainerElement.classList.remove('hide');
    showQuestion
}


// // function getNewQuestion  = () => {
//   if (availableQuestions.length=0 || questionCounter > MAX_QUESTIONS) {
//     localStorage.setItem('mostRecentScore', score)
//     return window.location.assign()
//   }
// }

function timerStart () {
  var timer = new Timer();
  timer = getElementById('gameTimer');
  timer.start({countdown: true, startValues: {seconds: 60}});
  
  $('#countdownExample .values').html(timer.getTimeValues().toString());
  
  timer.addEventListener('secondsUpdated', function (e) {
      $('#countdownExample .values').html(timer.getTimeValues().toString());
  });
  
  timer.addEventListener('targetAchieved', function (e) {
      $('#countdownExample .values').html('Quiz Over You Fail!!');
  });
  }

function showQuestion() {
    questionElement.innerText = questions.question;
    question.answers.array.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add ('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElements.appendChild(button);
    });
}



// const questions = [
//     {
//       question: 'Placeholder 1',
//   		answers: [
//             {text: 'answer 1', correct: true},
//   			    {text: 'answer 2', correct: false},
//             {text: 'answer 3', correct: false},
//             {text: 'answer 4', correct: false},
// 				]
//     }
// ];