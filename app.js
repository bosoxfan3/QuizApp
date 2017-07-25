
const STATE = {
  questions: [
    {
      question: 'Go ahead, make my day',
      answers: ['Die Hard', 'Sudden Impact', 'Independence Day', 'Godfather'],
      correctIndex: 1
    },
    {
      question: 'I\'m walking here! I\'m walking here!',
      answers: ['Taxi Driver', 'Forrest Gump', 'Midnight Cowboy', 'Gangs of New York'],
      correctIndex: 2
    },
    {
      question: 'Show me the money!',
      answers: ['Jerry Maguire', 'Wolf of Wall Street', 'Goodfellas', 'Ocean\'s Eleven'],
      correctIndex: 0
    },
    {
      question: 'After all, tomorrow is another day!',
      answers: ['Day After Tomorrow', 'Casablanca', 'Gone With The Wind', 'The Terminator'],
      correctIndex: 2
    },
    {
      question: 'You can\'t handle the truth!',
      answers: ['Jaws', 'Citizen Kane', 'When Harry Met Sally', 'A Few Good Men'],
      correctIndex: 3
    }
  ],
  currentQuestion: 0,
  userScore: 0,
  lastQuestionCorrect: null,
  route: 'start' || "question" || "feedback" || "score",
  title: 'My Cool Quiz App'

  // {User's answer choice(s)}
  // {What is the current question?}
  // {Score? Anything else?}
};

const PAGE_ELEMENTS = {
  'start': $('.js-start-page'),
  'question': $('.js-question-template'),
  'answer-feedback': $('.js-answer-template'),
  'final-feedback': $('.js-final-score-page')
}

//console.log(STATE.questions[1].question);

//we want to be able to click start and go to the first question.
//we want to hide the start page and show the question page

function renderApp(state, elements) {
  // default to hiding all routes, then show the current route
  Object.keys(elements).forEach(function(route) {
    elements[route].hide();
  });
  elements[state.route].show();

  if (state.route === 'start') {
      console.log('render Start Page');
      //renderStartPage(state, elements[state.route]);
  }
  else if (state.route === 'question') {
      console.log('render Question Page');
      renderQuestionPage(state, elements[state.route]);
  }
  else if (state.route === 'answer-feedback') {
    console.log('render Feedback Page');
    renderAnswerFeedbackPage(state, elements[state.route]);
  }
  else if (state.route === 'final-feedback') {
    console.log('render Final Page');
    renderFinalFeedbackPage(state, elements[state.route]);
  }
}

// function renderStartPage(state, element){
  
// }
$('.js-start-button').on('click', function(event) {
  event.preventDefault();
  console.log('start button clicked');
  STATE.route = 'question';
  renderApp(STATE, PAGE_ELEMENTS); 
});


function renderQuestionPage(state, element){
  
  let currentQuestion = state.questions[state.currentQuestion];
  let choices = state.questions[state.currentQuestion].answers.map(function(title, index){
    return (
      `
        <input type='radio' name='movie-title' value='${index}' id='choice-${index}' required/><label for='choice-${index}'> ${title}</label> 
        <br>
      `
    );
  });
  $('.js-current-question-number').text(`${STATE.currentQuestion + 1}`);
  $('.js-movie-quote').text(`What movie is this quote from: "${currentQuestion.question}"`);
  $('.choices').html(choices);
  //STATE.currentQuestion++;
} 


$("form[name='current-question']").submit(function(event) {
  event.preventDefault();
  let currentQuestion = STATE.questions[STATE.currentQuestion];
  let answer = $("input[name='movie-title']:checked").val();
  answer = parseInt(answer,10);
  STATE.lastQuestionCorrect = (answer === currentQuestion.correctIndex);
  STATE.route = 'answer-feedback';
  renderApp(STATE, PAGE_ELEMENTS);
});


function renderAnswerFeedbackPage(state, element) {
  let currentQuestion = state.questions[state.currentQuestion];
  if (STATE.lastQuestionCorrect) {
    $('.js-feedback').text('Correct!');
    STATE.userScore++;
  } else {
    $('.js-feedback').text(`Incorrect. The correct answer was ${currentQuestion.answers[currentQuestion.correctIndex]}`);
  }
  $('.js-current-score').text(`Current score: ${STATE.userScore} out of 5`)
  STATE.currentQuestion++;
}

$('.js-next').click(function(event){
  if (STATE.currentQuestion < STATE.questions.length) {
    STATE.route = 'question';
  } else {
    STATE.route = 'final-feedback';
  }
  renderApp(STATE, PAGE_ELEMENTS);
});

function renderFinalFeedbackPage(state, element) {
  $('.js-final-score-count').text(`Your final score is: ${STATE.userScore} out of 5`);
}

function restartQuiz(){
  STATE.currentQuestion = 0;
  STATE.userScore = 0;
  STATE.lastQuestionCorrect = null;
  document.getElementById('current-question').reset();
}

$('.js-restart').click(function(event){
  console.log('js restart clicked');
  event.preventDefault();
  restartQuiz();
  STATE.route = 'start';
  renderApp(STATE, PAGE_ELEMENTS);
});

$(document).ready(function() {
  renderApp(STATE, PAGE_ELEMENTS);
});

