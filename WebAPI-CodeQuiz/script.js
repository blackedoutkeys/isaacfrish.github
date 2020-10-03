var startButton = document.getElementById ('start-btn');
var questionContainerElement = document.getElementById ('question-container');
startButton.addEventListener('click', startGame);
var questionElement = document.getElementById('question');
var answerElements = document.getElementById('answer-buttons');

var randomQuestions, currentQuestionIndex;


//functions list for quiz
function startGame () {
    console.log ('Started');
    //works up to here
    startButton.classList.add('hide');
    randomQuestions = questions (Math.random() - 0.5);
    currentQuestionIndex = 0 ;
    questionContainerElement.classList.remove('hide');
    gotoNextQuestion();
}


function gotoNextQuestion () {
    revealQuestion(randomQuestions[questionsArray]);
}

function revealQuestion(question) {
    questionElement.innerText = questionsArray.question;
}
function selectAnswer () {

}



const questionsArray = [
    {
      question: 'Placeholder 1'
  		answer: [
            {text: 'answer 1', correct: true},
  					{text: 'answer 2', correct: false},
            {text: 'answer 3', correct: false},
            {text: 'answer 4', correct: false},
				]
    }
]   