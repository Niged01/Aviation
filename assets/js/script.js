
// variables
const start = document.getElementById("start");
const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let currentQuestionIndex = 0;
score = 0;
let availableQuestions= [];

let nextQuestion = document.getElementById('next-question');
let score = document.getElementById('score');
let incorrect = document.getElementById('incorrect');

// Constants
const MAX_NUMBER = 10;


// Start quiz

startGame = () => {
    currentQuestionIndex = 0;
    score = 0;
    availableQuestions= [...questions];
    renderNextQuestion()
}

function startGame()
// event listeners



// quiz questions
const questions = [
    {
        "question": "Name this plane?",
        "choice1": "Boeing 747",
        "choice2": "Airbus A380",
        "choice3": "Boeing 787",
        "choice4": "Airbus A350",
        "correct": 4,
        "imgSrc": "assets/images/a350.jpg"
    },
    {
        "question": "What airline does this tail symbol belong to?",
        "choice1" : "American",
        "choice2" : "Lufthansa",
        "choice3" : "British Airways",
        "choice4" : "Qantas",
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "Airbus's most produced plane is the?",
        "choice1" : "A320",
        "choice2" : "A330",
        "choice3" : "A350",
        "choice4" : "A380",
        "correct": 1,
        "imgSrc": "url"
    },
    {
        "question": "ILS to a pilot means?",
        "choice1" : "Information Localizer System",
        "choice2" : "Instrument Landing System",
        "choice3" : "Instrument Localizer System",
        "choice4" : "Information Landing System",
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "Who makes the A380 engines?",
        "choice1" : "Boeing",
        "choice2" : "Landrover",
        "choice3" : "Bently",
        "choice4" : "Rolls-Royce",
        "correct": 4,
        "imgSrc": "url"
    },
    {
        "question": "Which one of these Aircraft has the longest flying capacity? ",
        "choice1" : "A350-900ULR",
        "choice2" : "747-800",
        "choice3" : "A380-300",
        "choice4" : "787 Dreamliner",
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "This is a cockpit of a?",
        "choice1" : "747",
        "choice2" : "A320",
        "choice3" : "A330",
        "choice4" : "777",
        "correct": 3,
        "imgSrc": "url"
    },
    {
        "question": "What year was the 1st A380 produced?",
        "choice1" : "1990",
        "choice2" : "1997",
        "choice3" : "2007",
        "choice4" : "2010",
        "correct": 3,
        "imgSrc": "url"
    },
    {
        "question": "who was the 1st woman to fly solo around the globe?",
        "choice1" : "zara Rutherford",
        "choice2" : "Amelia Earhart",
        "choice3" : "Sarah Smith",
        "choice4" : "Jerrie Mock",
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "Which Airline is the oldest?",
        "choice1" : "Korean",
        "choice2" : "Delta",
        "choice3" : "British Airways",
        "choice4" : "KLM",
        "correct": 4,
        "imgSrc": "url"
    },
]




// quiz game
function renderNextQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    currentQuestionIndex++;
    const questionIndex = math.floor(math.random () * availbleQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    answers.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

answers.forEach( choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        renderNextQuestion()
    })
})

function onUserSelection(option) {
    let userSelection = option.text;
    let currentQuestion = questions[currentQuestionIndex];
    let correctOption = currentQuestion["correct"];

    if (userSelection == correctOption) {
        showPopUp()
    } else {
        showAnotherPopUp()
    }

    updateScore();
}

function updateScore() {
    score++;
    updateTallyBoard(score);
}


// scores area
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
  }
  
  function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
  }