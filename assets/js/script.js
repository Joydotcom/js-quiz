// DOM VARIABLES
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("choices");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var timer = 100;

var currentQuestion = 0;

// FUNCTION DEFINITIONS

function displayQuestion() {
  answersEl.innerHTML = "";
  questionEl.textContent = questions[currentQuestion].question;

  var answers = questions[currentQuestion].answers;

  for (var i = 0; i < answers.length; i++) {
    var choice = document.createElement("div");
    choice.textContent = answers[i];
    answersEl.appendChild(choice);
  }
}

var questions = [
  {
    question: "Commonly used data types DO NOT include :",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within __________.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store___________.",
    answers: ["numbers & strings", "other arrays", "booleans", "all of the above",],
    correctAnswer: "all the above",
  },
  {
    question:
      "String values must be enclosed within ___________ when being assigned variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to te debugger is ______________.",
    answers: ["JavaScript", "terminal / bash", "for loops", "console log"],
    correctAnswer: "console log",
  },
];

// FUNCTION CALLS

displayQuestion();

function handleChoiceSelection(e) {
  if (questions[currentQuestion].correctAnswer === e.target.innerHTML) {
    alert("CORRECT");
    currentQuestion++;
    displayQuestion();
  } else {
    alert("Please try again");
    timer = timer - 10;
  }
  console.log(e);
}

function handleStart() {
  startEl.style.display = "none";
  quizEl.style.display = "block";

  setInterval(function () {
    timer--;
    timerEl.innerHTML = timer;
  }, 1000);
  
  }


// EVENT LISTENER
answersEl.addEventListener("click", handleChoiceSelection);
startEl.addEventListener("click", handleStart);


    // if(timer === 0) {
    // clearInterval(timerEl);
    // sendMessage("Times up thumb-thumb");}