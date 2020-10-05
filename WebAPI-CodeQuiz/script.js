const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let countRightAnswers = 0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  countdown(2);
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  countRightAnswers = 0; 
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (selectedButton.dataset = correct) {
    countRightAnswers++;
  }
 document.getElementById('right-answers').innerHTML = countRightAnswers; 
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

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


//Countdown clock container function


function countdown(minutes) {
  var seconds = 60;
  var mins = minutes;
  function clockticker() {
      var counter = document.getElementById("gameTimer");
      var current_minutes = mins-1;
      seconds--;
      counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(clockticker, 1000);
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
  clockticker();
}