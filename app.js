const STATE = {
  questions: [
    {
      question: 'Go ahead, make my day',
      answer: ['Die Hard', 'Sudden Impact', 'Independence Day', 'Godfather'],
      correctIndex: 1
    },
    {
      question: 'I\'m walking here! I\'m walking here!',
      answer: ['Taxi Driver', 'Forrest Gump', 'Midnight Cowboy', 'Gangs of New York'],
      correctIndex: 2
    },
    {
      question: 'Show me the money!',
      answer: ['Jerry Maguire', 'Wolf of Wall Street', 'Goodfellas', 'Ocean\'s Eleven'],
      correctIndex: 0
    },
    {
      question: 'After all, tomorrow is another day!',
      answer: ['Day After Tomorrow', 'Casablanca', 'Gone With The Wind', 'The Terminator'],
      correctIndex: 2
    },
    {
      question: 'You can\'t handle the truth!',
      answer: ['Jaws', 'Citizen Kane', 'When Harry Met Sally', 'A Few Good Men'],
      correctIndex: 3
    }
  ],
  currentQuestion: 0,
  userScore: 0,
  route: 'start'

  // {User's answer choice(s)}
  // {What is the current question?}
  // {Score? Anything else?}
};

//console.log(STATE.questions[1].question);

//we want to be able to click start and go to the first question.
//we want to hide the start page and show the question page


$('.js-start-button').on('click', function(event) {
  event.preventDefault();
  console.log('start button clicked');
  $(this).parents('div').attr('hidden', true);
  renderQuestion();
  $('.js-question-template').removeAttr('hidden'); 
});


function renderApp(state, elements) {
  // default to hiding all routes, then show the current route
  Object.keys(elements).forEach(function(route) {
    elements[route].hide();
  });
  elements[state.route].show();

  if (state.route === 'start') {
      renderStartPage(state, elements[state.route]);
  }
  else if (state.route === 'question') {
      renderQuestionPage(state, elements[state.route]);
  }
  else if (state.route === 'answer-feedback') {
    renderAnswerFeedbackPage(state, elements[state.route]);
  }
  else if (state.route === 'final-feedback') {
    renderFinalFeedbackPage(state, elements[state.route]);
  }
}

// function renderQuestion() {
//   let result = '';
//   let index = STATE.currentQuestion;
//   let template = `<form name='current-question' class='question-form' action='/'>
//   <h1>Question ${STATE.currentQuestion + 1}</h1>
//   <fieldset>
//     <h3>${STATE.questions[index].question}</h3>
//     <p>What movie is this quote from?</p>
//     <input type="radio" name="movie-title" id="movie-title-1" value="0"><label for="movie-title-1">  ${STATE.questions[index].answer[0]}</label>
//       <br>
//       <input type="radio" name="movie-title" id="movie-title-2" value="1"><label for="movie-title-2">  ${STATE.questions[index].answer[1]}</label>
//       <br>
//       <input type="radio" name="movie-title" id="movie-title-3" value="2"><label for="movie-title-3">  ${STATE.questions[index].answer[2]}</label>
//       <br>
//       <input type="radio" name="movie-title" id="movie-title-4" value="3"><label for="movie-title-4">  ${STATE.questions[index].answer[3]}</label>
//       <br>
//       <br>
//       <button class="js-submit" type="button">Submit</button>
//       </fieldset>
// </form>`;

// result += template;
// $('.js-question-template').append(result);
// STATE.currentQuestion++;
// }

const PAGE_ELEMENTS = {
  'start': $('.js-start-page'),
  'question': $('.js-question-template'),
  'answer-feedback': $('.js-answer-template'),
  'final-feedback': $('.js-final-score-page')
}

function renderChoices(state, element){
  var currentQuestion = state.questions[state.currentQuestion];
  var choices = state.questions[state.currentQuestion].answers.map(function(choice, index){
    return (
      `<li>
        <label>
        <input type="radio" name="user-answer" value=${index} id="choice-${index} required> ${choice}
        </label>
        </li>`
    );
  });
  STATE.currentQuestion++;
}

renderChoices(question, element.find('.choices'));

$("form[name='current-question']").submit(function(event) {
  event.preventDefault();
  let answer = $("input[name='movie-title']:checked").val();
  //answer = parseInt(answer,10);
  console.log(answer);
});

$(document).ready(function(){
//  console.log('DOM Loaded!')
});

