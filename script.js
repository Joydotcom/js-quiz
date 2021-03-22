//dom variables
var questionsEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var questionAnswerChoicesEl = document.getElementById("answer-choices");

// javascript variables
var buttonOne =document.getElementById("choices".children[1]);
var buttonTwo =document.getElementById("choices".children[2]);
var buttonThree =document.getElementById("choices".children[3]);
var buttonFour =document.getElementById("choices".children[4]);
var buttons = document.querySelectorAll("button");

correctAnswer = 

const myQuestions = [
        {
          question: "Who invented JavaScript?",
          answers: {
            1: "Douglas Crockford",
            2: "Sheryl Sandberg",
            3: "Brendan Eich",
            4: "homie"
          },
          correctAnswer: "3"
        },
        {
          question: "Which one of these is a JavaScript package manager?",
          answers: {
            1: "Node.js",
            2: "TypeScript",
            3: "npm",
            4:"brother"

          },
          correctAnswer: "3"
        },
        {
          question: "Which tool can you use to ensure code quality?",
          answers: {
            1: "Angular",
            2: "jQuery",
            3: "RequireJS",
            4: "ESLint"
          },
          correctAnswer: "4"
        }
      ];
      console.log(myQuestions);




// var questionsAndAnswers = {
//     questionOne: {
//         question: "Whats good in your hood?",
//         answerChoiceOne: "nothing",
//         answerChoiceTwo: "sometheing",
//         answerChoiceThree: "everything",
//         answerChoiceFour: "alladat",

//     }
// };

// console.log(questionsAndAnswers[0].questionOne);

// buttonOne.textContent = questionsAndAnswers[0].questionOne.answerChoiceOne;

// //function definitions
questionAnswerChoicesEl.apprendChild(buttonOne);
buttonOne.setAttribute("value","correct-answer");
console.log(buttonOne)

var .addEventListener("click", function(event){
    if ("correct-answer"){
        alert("it worked!")
    }
});

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
