const QUESTIONS = [
    {
        question: "Name this plane?",
        options: [
            a:"Boeing 747",
            b:"Airbus A380",
            c:"Boeing 787",
            d:"Airbus A350"
        ],
        "correct": 4,
        "hint_image": "url"
    },
    {
        question: "What airline does this tail symbol belong to?",
        options: [
            a:"American",
            b:"Lufthansa",
            c:"British Airways",
            d:"Qantas"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "Airbus's most produced plane is the?",
        options: [
            a:"A320",
            b:"A330",
            c:"A350",
            d:"A380"
        ],
        "correct": 1,
        "hint_image": "url"
    },
    {
        question: "ILS to a pilot means?",
        options: [
            a:"Information Localizer System",
            b:"Instrument Landing System",
            c:"Instrument Localizer System",
            d:"Information Landing System"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "Who makes the A380 engines?",
        options: [
            a:"Boeing",
            b:"Landrover",
            c:"Bently",
            d:"Rolls-Royce"
        ],
        "correct": 4,
        "hint_image": "url"
    },
    {
        question: "Which one of these Aircraft has the longest flying capacity? ",
        options: [
            a:"A350-900ULR",
            b:"747-800",
            c:"A380-300",
            d:"787 Dreamliner"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "This is a cockpit of a?",
        options: [
            a:"747",
            b:"A320",
            c:"A330",
            d:"777"
        ],
        "correct": 3,
        "hint_image": "url"
    },
    {
        question: "What year was the 1st A380 produced?",
        options: [
            a:"1990",
            b:"1997",
            c:"2007",
            d:"2010"
        ],
        "correct": 3,
        "hint_image": "url"
    },
    {
        question: "who was the 1st woman to fly solo around the globe?",
        options: [
            a:"zara Rutherford",
            b:"Amelia Earhart",
            c:"Sarah Smith",
            d:"Jerrie Mock"
        ],
        "correct": 2,
        "hint_image": "url"
    },
    {
        question: "Which Airline is the oldest?",
        options: [
            a:"Korean",
            b:"Delta",
            c:"British Airways",
            d:"KLM"
        ],
        "correct": 4,
        "hint_image": "url"
    },
]


let currentQuestionIndex = -1;
let score = 0;


fuction renderNextQuestion() {
    currentQuestionIndex++;
    let nextQuestion = QUESTIONS[currentQuestionIndex];

    questionDiv.text = nextQuestion["question"]
    for(option in nextQuestion["options"]) {
        option[index].text = option
    }
}


function onUserSelection(option) {
    let userSelection = option.text;
    let currentQuestion = QUESTIONS[currentQuestionIndex];
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
    ...
    renderNextQuestion()
    ...
}