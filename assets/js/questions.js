//dom variables
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("choices");
var startEl = document.getElementById("start");
var quizEl = document.getElementById("quiz");
var timerEl = document.getElementById("timer");
var timer = 100;
// var questionTitleEl = document.getElementById("question-title");
// var questionAnswerChoicesEl = document.getElementById("answer-choices");
//var questionContainer = document.getElementById("question-title");
// javascript variables
//var firstChoiceButton = document.getElementById("first-choice"[1]);
// var buttonTwo =document.getElementById("choices".children[2]);
// var buttonThree =document.getElementById("choices".children[3]);
// var buttonFour =document.getElementById("choices".children[4]);
// var buttons = document.querySelectorAll("button");

var currentQuestion = 0;

function displayQuestion() {
  //var questionEl = document.createElement("h2");
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
    correctAnswer: "3",
  },
  {
    question: "Arrays in JavaScript can be used to store___________.",
    answers: {
      1: "numbers & strings",
      2: "other arrays",
      3: "booleans",
      4: "all of the above",
    },
    correctAnswer: "4",
  },
  {
    question:
      "String values must be enclosed within ___________ when being assigned variables.",
    answers: {
      1: "commas",
      2: "curly brackets",
      3: "quotes",
      4: "parenthesis",
    },
    correctAnswer: "3",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to te debugger is ______________.",
    answers: {
      1: "JavaScript",
      2: "terminal / bash",
      3: "for loops",
      4: "console log",
    },
    correctAnswer: "4",
  },
];

// FUNCTION CALLS
displayQuestion();

function handleChoiceSelection(e) {
  if (questions[currentQuestion].correctAnswer === e.target.innerHTML) {
    console.log("CORRECT");
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
// firstChoiceButton.addEventListener("click", function ()) {

// }
//       questionTitleEl.textContent = questions[0].question;
// questionOne.textContent= "1. " + questions[0].choices[0];
// questionTwo.textContent= "2. " + questions[0].choices[1];
// questionThree.textContent= "3. " + questions[0].choices[2];
// questionFour.textContent= "4. " + questions[0].choices[3];

//       console.log(myQuestions);

// var questionsAndAnswers = {
//     questionOne: {
//         question: "Whats good in your hood?",
//         answerChoiceOne: "nothing",
//         answerChoiceTwo: "something",
//         answerChoiceThree: "everything",
//         answerChoiceFour: "alladat",

//     }
// };

// console.log(questionsAndAnswers[0].questionOne);

// buttonOne.textContent = questionsAndAnswers[0].questionOne.answerChoiceOne;

// //function definitions
// questionAnswerChoicesEl.addEventListener("click", function(){
//     if (answers.value = correctAnswer) {
//         alert("correct");
//     } else {
//         alert("incorrect");
//     }
//     nextQuestion();
// });

// buttonOne.setAttribute("value","correct-answer");
// console.log(buttonOne)

// var .addEventListener("click", function(event){
//     if ("correct-answer"){
//         alert("it worked!")
//     }
// }

//   console.log(myQuestions);

//event listeners

//function calls

//another way to liast/do qustions
// const myQuestions = [
//     {
//       question: "Who invented JavaScript?",
//       answers: {
//         a: "Douglas Crockford",
//         b: "Sheryl Sandberg",
//         c: "Brendan Eich"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which one of these is a JavaScript package manager?",
//       answers: {
//         a: "Node.js",
//         b: "TypeScript",
//         c: "npm"
//       },
//       correctAnswer: "c"
//     },
//     {
//       question: "Which tool can you use to ensure code quality?",
//       answers: {
//         a: "Angular",
//         b: "jQuery",
//         c: "RequireJS",
//         d: "ESLint"
//       },
//       correctAnswer: "d"
//     }
//   ];
