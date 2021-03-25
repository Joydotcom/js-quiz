// DOM VARIABLES
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("choices");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var timer = 20;
var answers = [];
var currentQuestion = 0;
var timerInterval = null;

function displayQuestion() {
  answersEl.innerHTML = "";
  if (currentQuestion <5)
{
   questionEl.textContent = questions[currentQuestion].question;

  var answers = questions[currentQuestion].answers;

  console.log (currentQuestion);
  console.log (question);

  for (var i = 0; i < answers.length; i++) {
    console.log(answers);
    var choice = document.createElement("li");
    var ulEl = document.createElement("ul");
    choice.textContent = answers[i];
    choice.setAttribute("type", "button");
    choice.setAttribute(
      "class",
      "btn btn-outline-secondary mybutton btn-block"
    );
    ulEl.appendChild(choice);
    answersEl.appendChild(ulEl);

  } 

}   
else 
{
     clearInterval(timerInterval);
      sendMessage();
}
}



var questions = [
  {
    question: "1. Commonly used data types DO NOT include :",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "2. The condition in an if/else statement is enclosed within __________.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "parenthesis",
  },
  {
    question: " 3. Arrays in JavaScript can be used to store___________.",
    answers: ["numbers & strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above",
  },
  {
    question:
      "4. String values must be enclosed within ___________ when being assigned variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "quotes",
  },
  {
    question:
      "5. A very useful tool used during development and debugging for printing content to the debugger is ______________.",
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

   timerInterval = setInterval(function () {
    timer--;
    timerEl.innerHTML = timer;
    if (timer === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  quizEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "assets/images/mariogameover.jpeg");
  mainEl.appendChild(imgEl);
}
// if (currentQuestion < questions.length)
// {
//   displayQuestion();
// } else {
//     sendMessage();
//   }

// EVENT LISTENER
answersEl.addEventListener("click", handleChoiceSelection);
startEl.addEventListener("click", handleStart);

// Selects element by class
var timerEl = document.querySelector(".timer");

// Selects element by id
var mainEl = document.getElementById("main");

// // FUNCTION CALLS

// // if(timer === 0) {
// // clearInterval(timerEl);
// // sendMessage("Times up thumb-thumb");}

// // var scoreCountSpan = document.querySelector("scores");
// // var scoreList = document.querySelector("#score-list");
// // var score = []

// // FUNCTION DEFINITIONS

// // function renderScore() {
// //   scoreCountSpan.innerHTML = "";
// //   scoreCountSpan.textContent = score.length;

// //   for (var i=0; i < score.length; i++) {
// //     var score = score[i];

// //     var li = dpcument.createElement("li");
// //     li.trxtContent = todo;
// //     li.setAttribute("data-index", i);

// //   }
// // }

// // function init() {
// //   var storedScore = JSON.parse(localstorage.getItem("score"));

// //   if (storedScore !== null) {
// //     score = storedScore;
// //   }

// //   renderScore();
// // }

// // function setTime() {
// //   // Sets interval in variable
// //   var timerInterval = setInterval(function () {
// //     secondsLeft--;
// //     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

// //     if (secondsLeft === 0) {
// //       // Stops execution of action at set interval
// //       clearInterval(timerInterval);
// //       // Calls function to create and append image
// //       sendMessage();
// //     }
// //   }, 1000);
// // }
// // handleStart();
