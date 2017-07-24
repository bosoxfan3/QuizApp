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
  userScore: 0

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
  renderQuestion(STATE.currentQuestion);
  $('.js-question-template').removeAttr('hidden');
  
});



function renderQuestion() {
  let result = '';
  let index = STATE.currentQuestion;
  let template = `<form class='question-form action='/'>
  <h1>Question ${STATE.currentQuestion + 1}</h1>
  <fieldset>
    <h3>${STATE.questions[index].question}</h3>
    <p>What movie is this quote from?</p>
    <input type="radio" name="movie-title" id="movie-title-1" value="0"><label for="movie-title-1">  ${STATE.questions[index].answer[0]}</label>
      <br>
      <input type="radio" name="movie-title" id="movie-title-2" value="1"><label for="movie-title-2">  ${STATE.questions[index].answer[1]}</label>
      <br>
      <input type="radio" name="movie-title" id="movie-title-3" value="2"><label for="movie-title-3">  ${STATE.questions[index].answer[2]}</label>
      <br>
      <input type="radio" name="movie-title" id="movie-title-4" value="3"><label for="movie-title-4">  ${STATE.questions[index].answer[3]}</label>
      <br>
      <br>
      <button class="js-submit" type="button">Submit</button>
      <button class="js-restart" type="button">Restart</button>
      </fieldset>
</form>`;

result += template;
$('.js-question-template').append(result);
STATE.currentQuestion++;
}

