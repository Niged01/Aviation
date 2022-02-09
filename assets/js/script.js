// variables

// const start = document.querySelector("#start");
const questionRef = document.querySelector("#question");
const answersRef = Array.from(document.querySelectorAll(".answer-text"));
const answersContainerRef = Array.from(document.querySelectorAll(".answers-container"));
const nextQuestionsRef = document.querySelector('#next-question');
const finishRef = document.querySelector('#finish');
const scoreRef = document.querySelector('#score');
const incorrectScoreRef = document.querySelector('#incorrect');
const questionImageRef = document.querySelector('#fit-picture');

let currentQuestion = {};
let acceptingAnswers = false;
let answerSelected = true;
let currentQuestionIndex = -1;
let score = 0;
let inco
let availableQuestions= [];




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
        "question": "Who's tail does this belong to?",
        "options": [ "American", "Lufthansa", "British Airways", "Qantas"],
        "correct": 2,
        "imgSrc": "assets/images/lufthansa.jpg"
    },
    {
        "question": "Airbus's most produced plane is the?",
        "options": [ "A320", "A330", "A350", "A380" ],
        "correct": 1,
        "imgSrc": "assets/images/airbusfleet.jpg"
    },
    {
        "question": "ILS to a pilot means?",
        "options": [ "Information Localizer System", "Instrument Landing System", "Instrument Localizer System", "Information Landing System" ],
        "correct": 2,
        "imgSrc": "assets/images/cockpit.jpg"
    },
    {
        "question": "Who makes the A380 engines?",
        "options": [ "Boeing", "Land Rover", "Bentley", "Rolls-Royce"],
        "correct": 4,
        "imgSrc": "assets/images/a380engine.jpg"
    },
    {
        "question": "which has the longest flying capacity? ",
        "options": [ "A350-900ULR", "747-800", "A380-300", "787 Dreamliner"],
        "correct": 1,
        "imgSrc": "assets/images/planes.jpg"
    },
    {
        "question": "This is a cockpit of a?",
        "options": [ "747", "A320", "A330", "777" ],
        "correct": 3,
        "imgSrc": "assets/images/a330cockpit.jpg"
    },
    {
        "question": "What year was the 1st A380 produced?",
        "options": [ "1990", "1997", "2007", "2010" ],
        "correct": 3,
        "imgSrc": "assets/images/airbusa380.jpg"
    },
    {
        "question": "1st woman to fly solo around the globe?",
        "options": [ "Zara Rutherford", "Amelia Earhart", "Sarah Smith", "Jerrie Mock" ],
        "correct": 2,
        "imgSrc": "assets/images/earhart.jpg"
    },
    {
        "question": "Which Airline is the oldest?",
        "options": [ "Korean", "Delta", "British Airways", "KLM" ],
        "correct": 4,
        "imgSrc": "assets/images/tailfin.jpg"
    },
]

//disable button

// Start quiz

startGame = () => {
    currentQuestionIndex = -1;
    score = 0;
    availableQuestions= [...QUESTIONS];
    renderNextQuestion();
}

//Quiz game

function renderNextQuestion() {
    for (let button of answersRef) {
        button.classList.remove("correct");
        button.classList.remove("incorrect")
    }
    if (currentQuestionIndex == QUESTIONS.length -1) {
        nextQuestionsRef.style.display = 'none'  
        finishRef.style.display = 'inline'  
    } else {
        //nextQuestionsRef.style.display ='inline'
        finishRef.style.display = 'none'
    }
    if (answerSelected) {
        currentQuestionIndex++;
        let nextQuestion = QUESTIONS[currentQuestionIndex];

        questionRef.innerText = nextQuestion["question"]
        for (i = 0; i<nextQuestion["options"].length; i++){
            answersRef[i].innerText = nextQuestion["options"][i];
        }

        questionImageRef.src=nextQuestion["imgSrc"]
        answerSelected = false;
    } 
    
}

function onUserSelection(clickEvent) {
    let userSelection = clickEvent.currentTarget.children[1].dataset.number;
    let currentQuestion = QUESTIONS[currentQuestionIndex];
    let correctOption = currentQuestion["correct"];
    answerSelected = true;
    
    if (userSelection == correctOption) {
        clickEvent.currentTarget.children[1].classList.add('correct');
        incrementScore();
    } else {
        clickEvent.currentTarget.children[1].classList.add('incorrect');
        incrementWrongAnswer();
    }
    
}

// renderNextQuestion = () => {
//     currentQuestionIndex++;
//     for (let button of answersContainerRef) {
//         button.classList.remove("correct");
//         button.classList.remove("incorrect")
//     }
// }

function updateScore() {
    score++;
    // updateTallyBoard(score);
}

// scores area
function incrementScore() {
    let oldScore = parseInt(scoreRef.innerText);
    scoreRef.innerText = ++oldScore;
  }
  
  function incrementWrongAnswer() {
    let oldScore = parseInt(incorrectScoreRef.innerText);
    incorrectScoreRef.innerText = ++oldScore;
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    startGame()
});

for (const answer of answersContainerRef) {
    answer.addEventListener("click", onUserSelection);
}

function saveHighScore() {
    let score = parseInt(scoreRef.innerText);
    localStorage.setItem('score', score);
    window.location.assign("highscores.html");
}