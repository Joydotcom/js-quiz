//dom variables
// var questionsEl = document.getElementById("questions");
// var questionTitleEl = document.getElementById("question-title");
// var questionAnswerChoicesEl = document.getElementById("answer-choices");

// javascript variables
var buttonOne =document.getElementById("choices".children[1]);
var buttonTwo =document.getElementById("choices".children[2]);
var buttonThree =document.getElementById("choices".children[3]);
var buttonFour =document.getElementById("choices".children[4]);
var buttons = document.querySelectorAll("button");


const myQuestions = [
        {
          question: "Commonly used data types DO NOT include :",
          answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
          },
          correctAnswer: "3"
        },
        {
          question: "The condition in an if/else statement is enclosed within __________.",
          answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"

          },
          correctAnswer: "3"
        },
        {
          question: "Arrays in JavaScript can be used to store___________.",
          answers: {
            1: "numbers & strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
          },
          correctAnswer: "4"
        }
    {"String values must be enclosed within ___________ when being assigned variables."
        question: 
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: "3"
    }
    {"A very useful tool used during development and debugging for printing content to te debugger is ______________."
        question: 
        answers: {
            1: "JavaScript",
            2: "terminal / bash",
            3: "for loops",
            4: "console log"
        },
        correctAnswer: "4"
    }
      ];
      
      questionTitleEl.textContent = questions[0].question;
questionOne.textContent= "1. " + questions[0].choices[0];
questionTwo.textContent= "2. " + questions[0].choices[1];
questionThree.textContent= "3. " + questions[0].choices[2];
questionFour.textContent= "4. " + questions[0].choices[3];

      console.log(myQuestions);




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
questionAnswerChoicesEl.addEventListener("click", function(){
    if (answers.value = correctAnswer) {
        alert("correct"); 
    } else {
        alert("incorrect");
    }
    nextQuestion();
});







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
