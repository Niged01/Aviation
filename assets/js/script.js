// variables

// const start = document.getElementById("start");
const question = document.getElementById("question");
const answers = document.getElementsByClassName("answer-text");

let currentQuestion = {};
let acceptingAnswers = false;
let currentQuestionIndex = 0;
let score = 0;
let availableQuestions= [];

let nextQuestion = document.getElementById('next-question');
let tally = document.getElementById('score');
let incorrect = document.getElementById('incorrect');

// Constants
const MAX_NUMBER = 10;
const QUESTIONS = [
    {
        "question": "Name this plane?",
        "options": [ "Boeing 747", "Airbus A380", "Boeing 787", "Airbus A350"],
        "correct": 4,
        "imgSrc": "assets/images/a350.jpg"
    },
    {
        "question": "What airline does this tail symbol belong to?",
        "options": [ "American", "Lufthansa", "British Airways", "Qantas"],
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "Airbus's most produced plane is the?",
        "options": [ "A320", "A330", "A350", "A380" ],
        "correct": 1,
        "imgSrc": "url"
    },
    {
        "question": "ILS to a pilot means?",
        "options": [ "Information Localizer System", "Instrument Landing System", "Instrument Localizer System", "Information Landing System" ],
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "Who makes the A380 engines?",
        "options": [ "Boeing", "Land Rover", "Bentley", "Rolls-Royce"],
        "correct": 4,
        "imgSrc": "url"
    },
    {
        "question": "Which one of these Aircraft has the longest flying capacity? ",
        "options": [ "A350-900ULR", "747-800", "A380-300", "787 Dreamliner"],
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "This is a cockpit of a?",
        "options": [ "747", "A320", "A330", "777" ],
        "correct": 3,
        "imgSrc": "url"
    },
    {
        "question": "What year was the 1st A380 produced?",
        "options": [ "1990", "1997", "2007", "2010" ],
        "correct": 3,
        "imgSrc": "url"
    },
    {
        "question": "who was the 1st woman to fly solo around the globe?",
        "options": [ "Zara Rutherford", "Amelia Earhart", "Sarah Smith", "Jerrie Mock" ],
        "correct": 2,
        "imgSrc": "url"
    },
    {
        "question": "Which Airline is the oldest?",
        "options": [ "Korean", "Delta", "British Airways", "KLM" ],
        "imgSrc": "url"
    },
]

// Event Listener

// Start quiz

startGame = () => {
    currentQuestionIndex = 0;
    score = 0;
    availableQuestions= [...QUESTIONS];
    renderNextQuestion();
}

//Quiz game

function renderNextQuestion() {
    currentQuestionIndex++;
    let nextQuestion = QUESTIONS[currentQuestionIndex];

    question.innerText = nextQuestion["question"]
    for (i = 0; i<nextQuestion["options"].length; i++){
        answers[i].innerText = nextQuestion["options"][i];
    }

    // hintImageTag.src = nextQuestion["imgSrc"];
}

function onUserSelection(clickEvent) {
    let userSelection = clickEvent.target.dataset.number;
    let currentQuestion = QUESTIONS[currentQuestionIndex];
    let correctOption = currentQuestion["correct"];

    if (userSelection == correctOption) {
        showPopUp()
    } else {
        showAnotherPopUp()
    }

    updateScore();
}

function showPopUp() {
    alert("correct answer");
}

function showAnotherPopUp() {
    alert("incorrect answer");
}

function updateScore() {
    score++;
    // updateTallyBoard(score);
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

  window.addEventListener('DOMContentLoaded', (event) => {
    startGame()
});

for (answer of answers) {
    answer.addEventListener("click", onUserSelection);    
}

// answers.forEach(answer => {
// });