//GB - Global variable
//GB to pull start button from HTML
const startButton = document.getElementById('start-btn');

//GB to pull next button from HTML
const nextButton = document.getElementById('next-btn');

//GB to pull question container from HTML
const questionContainerElement = document.getElementById('question-container');

//GB to pull question div from HTML
const questionElement = document.getElementById('question');

//GB to pull four answer buttons from HTML
const answerButtonsElement = document.getElementById('answer-buttons');

//sets score to 0
let countRightAnswers = 0;

//creates GB for shuffled questions and index array for said questions
let shuffledQuestions, currentQuestionIndex;

//sets GB for on click/toggle to access Leaderboard with local storage
let leaderBoardButtonEl = document.getElementById('leaderBoardButton').addEventListener('click', accessLeaderboard);

//sets GB to pull game timer from the HTML
var timeEl = document.getElementById("gameTimer");

//GB sets timer to 60 seconds
var secondsLeft = 60;


//starts a click function and calls start of game function
startButton.addEventListener('click', startGame);

//sets click function to move onto next questions
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});


//sets timer for a basic countdown from 60 seconds to 0
function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";
  
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          
      }
  
    }, 1000);
    stopGame;
	}  

//initializes game, sets timer, score, and all counters to zero and begins the randomized array pull. also hides start button/start container
function startGame() {
    
	setTime (); 
  startButton.classList.add('hide');

  //look up this part of function for better understanding
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  countRightAnswers = 0; 
  //
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}
//this function is in between questions to prep the array for a pull and calls for a reset in between answering a question
function setNextQuestion() {
  resetState();
  //figure out what this means
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
//pulls questions from question data array and populates them into their appropriate objects
function showQuestion(question) {
  //look up to understand this entire function
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
//this function is to reset state in between questions to unhide and re-hide elements in container
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//look up the e trigger and the rest of this function
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    stopGame(); 
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
  }
 document.getElementById('right-answers').innerHTML = countRightAnswers; 
  
 countRightAnswers;
}


function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}



function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

//this is a halt game function for when the player either runs out of time or finishes the quiz
function stopGame () {
  userInitials = prompt('Please enter your initials for the leaderboard!');
  localStorage.setItem ('userInitials');
  resetState;
}
  
//toggle feature to access leaderboard. can be accessed at any time during the game
function accessLeaderboard () {
  let leaderboard = document.getElementById('jumbotronLeader');
    leaderboard.classList.remove('hide');
    localStorage.setItem ('userInitials', userName);
    document.getElementById('leaderBoardEl').textContent = localStorage.getItem(userName);
 }

//Questions array. Questions are set as objects and pull their appropriate answers (also objects) into container on next button click 
    const questions = [ 
      { question: 'What does HTML stand for?',
        answers:[
                  {text:'HyperText Markup Language', correct:true},
                  {text:'HypedUp Texty Bois', correct:false},
                  {text:'HyperTextual Makeup Linguistics', correct:false},
                  {text:'HypoText Markdown Language', correct:false},
                ] }, 
      { question: 'When pulling data from an array, what number do you begin counting with?',
        answers:[
                  {text:'1', correct:false},
                  {text:'0', correct:true},
                  {text:'2', correct:false},
                  {text:'What is an array?', correct:false}, 
                ] },            
      { question: 'What symbol will be referenced in a CSS doc to call an ID?',
        answers:[
                  {text:'!', correct:false},
                  {text:'#', correct:true},
                  {text:'.', correct:false},
                  {text:'&*$^', correct:false},
                ] },
      { question: 'Which of the following strings prints a true boolean value?',
        answers:[
                  {text:'+=', correct:false},
                  {text:'+-%', correct:false},
                  {text:'===', correct:true},
                  {text:'==-', correct:false},
                ] },     
      { question: 'What is the proper sequence to push data to Github?',
        answers:[
                  {text:'git add, git push, git commit', correct:false},
                  {text:'git ice, git ice, git baby', correct:false},
                  {text:'git add, git commit, git push', correct:true},
                  {text:'git push, git pushit, git pushitrealgood', correct:false},
                ] },
      { question: 'To add Javascript to an HTML document you can use which of the following methods?',
        answers:[
                  {text:'Inline with the HTML doc', correct:false},
                  {text:'External Linking', correct:false},
                  {text:'add defer method at top of HTML', correct:false},
                  {text:'All of the above', correct:true},
                ] },    
      { question: 'Who is the best at writing code?',
        answers:[
                  {text:'You', correct:false},
                  {text:'Me', correct:false},
                  {text:'Everyone', correct:false},
                  {text:'Nobody', correct:true},                 
                ] }
              ];








              /*leader board will open and not close, toggle not functioning correclty. 
              local stroage not showing users or pulling proper data. score doesnt reset properly.
              timer ending doesnt trigger end game functionality
              edit CSS to be my styling and simplify for "appropriate leveling."
              changing to correct answer allows for infinite score increase
              clicking restart once clock hits zero starts timer again in negative state
              make readme*/
