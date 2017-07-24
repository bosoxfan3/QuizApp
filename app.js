const STATE = {
    questions: [
     {question: 'Go ahead, make my day',
        answer: ['Die Hard','Sudden Impact','Independence Day','Godfather'],
        correctIndex: 1},
     {question: 'I\'m walking here! I\'m walking here!',
        answer: ['Taxi Driver','Forrest Gump','Midnight Cowboy','Gangs of New York'],
        correctIndex: 2},
     {question: 'Show me the money!',
        answer: ['Jerry Maguire','Wolf of Wall Street','Goodfellas','Ocean\'s Eleven'],
        correctIndex: 0},
     {question: 'After all, tomorrow is another day!',
        answer: ['Day After Tomorrow','Casablanca','Gone With The Wind','The Terminator'],
        correctIndex: 2},
     {question: 'You can\'t handle the truth!',
        answer: ['Jaws','Citizen Kane','When Harry Met Sally','A Few Good Men'],
        correctIndex: 3}
    ],
    currentQuestion: 0,
    userScore: 0
   
    // {User's answer choice(s)}
    // {What is the current question?}
    // {Score? Anything else?}
};

console.log(STATE.questions[1].question) 

