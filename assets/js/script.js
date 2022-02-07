document.addEventListener('DOMContentLoaded')

const start = document.getElementById('start')
const nextQuestion = document.getElementById('next-question')
const question = document.getElementById('question')
const answers = document.getElementsByClassName('.answer-text')
const score = document.getElementById('score')
const incorrect = document.getElementById('incorrect')



start.addEventListener('click', renderNextQuestion)

nextQuestion.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
  });


const questions = [
    {
        question: "Name this plane?",
        options: [
            "Boeing 747",
            "Airbus A380",
            "Boeing 787",
            "Airbus A350"
        ],
        correct: 4,
        imgSrc: "assets/images/a350.jpg"
    },
    {
        question: "What airline does this tail symbol belong to?",
        options: [
            "American",
            "Lufthansa",
            "British Airways",
            "Qantas"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "Airbus's most produced plane is the?",
        options: [
            "A320",
            "A330",
            "A350",
            "A380"
        ],
        "correct": 1,
        "hint_image": "url"
    },
    {
        question: "ILS to a pilot means?",
        options: [
            "Information Localizer System",
            "Instrument Landing System",
            "Instrument Localizer System",
            "Information Landing System"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "Who makes the A380 engines?",
        options: [
            "Boeing",
            "Landrover",
            "Bently",
            "Rolls-Royce"
        ],
        "correct": 4,
        "hint_image": "url"
    },
    {
        question: "Which one of these Aircraft has the longest flying capacity? ",
        options: [
            "A350-900ULR",
            "747-800",
            "A380-300",
            "787 Dreamliner"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "This is a cockpit of a?",
        options: [
            "747",
            "A320",
            "A330",
            "777"
        ],
        "correct": 3,
        "hint_image": "url"
    },
    {
        question: "What year was the 1st A380 produced?",
        options: [
            "1990",
            "1997",
            "2007",
            "2010"
        ],
        "correct": 3,
        "hint_image": "url"
    },
    {
        question: "who was the 1st woman to fly solo around the globe?",
        options: [
            "zara Rutherford",
            "Amelia Earhart",
            "Sarah Smith",
            "Jerrie Mock"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "Which Airline is the oldest?",
        options: [
            "Korean",
            "Delta",
            "British Airways",
            "KLM"
        ],
        "correct": 4,
        "hint_image": "url"
    },
]

let currentQuestionIndex = -1;
let score = 0;



function renderNextQuestion() {
    currentQuestionIndex++;
    let nextQuestion = questions[currentQuestionIndex];

    questions.text = nextQuestion["question"]
    for(option in nextQuestion["options"]) {
        option[index].text = option
    }
}


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

function nextQuestion() {
    defaultState();
    renderNextQuestion()

}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
  }
  
  function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
  }