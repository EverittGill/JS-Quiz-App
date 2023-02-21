// global variables
var question1 = document.getElementById("question1");

// global variables
var startButton = document.querySelector(".start-button");
var startScreen = document.getElementById("start-screen");
var questions = document.getElementById("questions")
var countdownTime = 200;
var countdownDisplay = document.getElementById("countdownDisplay");
// var answer0 = document.getElementById("answer0");
// var answer1 = document.getElementById("answer1");
// var answer2 = document.getElementById("answer2");
// var answer3 = document.getElementById("answer3");
var counter = 0
var numQuestions = 4;
var timer;
var userInitials = document.getElementById("initials")
var timesPlayed = 0;
var initials;
var mostRecentScore = localStorage.getItem("mostRecentScore")
var finalScore = document.getElementById("yourScore")
var highScores = {
        initials: "",
        score: 0,
        }


startButton.addEventListener("click", showQuestions); 

function showQuestions() {
    // startScreen.setAttribute("style", "display: none");
    // questions.setAttribute("style", "display: flex");
    startScreen.classList.add("hidden")
    document.querySelector("#question" + counter).classList.remove("hidden")
    countdown() 
}

// creates the timer
function countdown() {
        timer = setInterval(() => {
        countdownDisplay.innerHTML = "Your score " + countdownTime;
        countdownTime--;
        if (countdownTime <= 0) {
            document.getElementById("countdownDisplay").innerHTML = 0;
            gameOver()
            console.log("countdown")
        }
    }, 1000)
}



// function checkAnswers() {
//     correctAnswer.forEach(function(answer, index) {
        
//     })
// }

function checkAnswers(event) {
    var click = event.target.innerText
    // console.log(counter)
    document.querySelector("#question" + counter).classList.add("hidden")
    if (counter !== numQuestions) {
        document.querySelector("#question" + (counter + 1)).classList.remove("hidden")
    }
    if (counter === numQuestions - 1) {
        gameOver()
        console.log("checkAnswers")
    }
    console.log(click)
    // console.log(correctAnswer[counter],click)
    if (click !== correctAnswer[counter]) {
       console.log("testing")
        countdownTime -= 10;
        countdownDisplay.innerHTML = "Your score " + countdownTime;
    }

 counter++;
//  showQuestions()
}

// var answer = document.getElementsByClassName("answer")

var correctAnswer = ["[]","script tags","Document Object Model","Brendan Eich"];


function gameOver() {
    clearInterval(timer)
    timesPlayed++;
    console.log(timesPlayed)
}

function playAgain() {
    counter = 0
    countdownTime = 200
    document.getElementById("question4").classList.add("hidden")
    showQuestions()
}

function submit() {
    let initials = document.getElementById("initials").value
    console.log(initials)
    let yourScore = document.getElementById("yourScore")
    yourScore.innerText = initials + " " + (countdownDisplay.innerText);
    highScores.initials = initials;
    highScores.score = countdownTime;
    if(Array.isArray(JSON.parse(localStorage.getItem('scores')))){
        let array = JSON.parse(localStorage.getItem("scores"))
        array.push(highScores)
        localStorage.setItem("scores", JSON.stringify(array) )
    } else {
        localStorage.setItem("scores", JSON.stringify([highScores]))
    }
    console.log(JSON.parse(localStorage.getItem("scores")))
    displayScores()
}



function displayScores() {
    let displayedScores = JSON.parse(localStorage.getItem("scores"))
    let lists = document.getElementById("displayedScores")
    let innerHTML = ``;
    for (let i = 0; i < displayedScores.length; i++) {
        innerHTML += `<li>${displayedScores[i].initials} Scored ${displayedScores[i].score}</li>`
    }
    lists.innerHTML = innerHTML
}
displayScores()

function scoreButton() {
    let scores = JSON.parse(localStorage.getItem("scores"))
    let innerHTML = ""
    let modal = document.getElementById("modal")
    for (let i = 0; i < scores.length; i++) {
        innerHTML += `<li>${scores[i].initials} Scored ${scores[i].score}</li>`
    }
    modal.innerHTML = innerHTML
    console.log("score")
}
// function saveHighScore() {
//     console.log("clicked the submit button")
//     localStorage.setItem("mostRecentScore", countdownDisplay)
    // console.log(finalScore)
    // console.log(highScores)
    // console.log(mostRecentScore)
    // console.log(finalScore.innerText + "finalScore.innerText")
// }

// var highScores = [
//     {
//         initials: "",
//         score:
//     }
// ]

// push initials and scores into an array, then change that array into a json array and put it into local storage
// adding data for local storage







// let scores = [
//     {
//     initials: "",
//     countdownTime: 
//     }
// ]



// need a function to create a p element and display the initials and score as the innerText
// need to get the stored values put into a json array and be stringified 
// need a variable to keep track of how many times they've played the game. perhaps tie it to the submit button

// local storage can only store strings



// if the event clicked matches anything in the correctAnswers array then 

// var correctAnswerCount = correctAnswer[0]
// for (let i = 0; i < correctAnswer.length; i++) {
//     // console.log(checkAnswers.event.target)
//     correctAnswerCount = correctAnswer[counter];
//     console.log(correctAnswer);
// }
// return correctAnswer



// array that holds the question and answer objects
// var questionCards = [
//     {
//         question: "What is used to indicate an array", 
//         answer: [
//             "{}",
//             "[]",
//             "&&",
//             "<>"
//         ],
//         correct: "<>" 
//     }, 
//     {
//         question: "Within HTML where do we put JavaScript",
//         answer: [
//             "<script>", 
//             "<logic>",
//             "<javascript>",
//             "<style>"
//         ],
//         correct: "<script>"
//     },
//     {
//         question: "What does DOM stand for?",
//         answer: [
//             "Document Object Model",
//             "Data Occurrence Mode", 
//             "Document Outstanding Method",
//             "Distributed Object Model"
//         ],
//         correct: "Document Object Model"
//     }
// ]

// // sets the content of the buttons
// document.getElementById("question-title").textContent = questionCards[0].question
// document.getElementById("answer0").textContent = questionCards[0].answer[0];
// document.getElementById("answer1").textContent = questionCards[0].answer[1];
// document.getElementById("answer2").textContent = questionCards[0].answer[2];
// document.getElementById("answer3").textContent = questionCards[0].answer[3];


// itterate through the questions
// for (let i = 0; i = < questionCards[0].length; i++); {
//     console.log[i];
// }


// itterate through the answers


// if the answer heard was the same as the correct answer then progress. if it was different then reduce score


// determines if the button clicked matches the correct answer
// function answerChecker() {
//     if (answer.includes(button.innerText)) {
//         console.log("Correct!");
//       } else {
//         console.log("Incorrect");
//       }
// };

// for (var i = 0; i < questionCards.length; i++)

// test for string match to get the correct answer

// itterate through the array with a for loop
// display the question
// itterate throught the answers to display them all
// when a user clicks an answwer thten check the string against the correct string 

// event listeners
// startButton.addEventListener("click", showQuestions()); 
// answer0.addEventListener("click", answerChecker());
// answer1.addEventListener("click", answerChecker());
// answer2.addEventListener("click", answerChecker());
// answer3.addEventListener("click", answerChecker());

// moves from the start screen to the question screen
// function showQuestions() {
//     startScreen.setAttribute("style", "display: none");
//     questions.setAttribute("style", "display: flex");
//     timer()
// }

// // creates the timer
// function timer(){
//     timer = setInterval(() => {
//         countdown.innerHTML = "Your score " + seconds;
//         seconds--;
//     }, 1000)
// }








// var count = "0"



// question 1   What is used to indicate an array
    // {}, [], $, ""

//  question 2  what does DOM stand for
    // Document Object Model, Data Occurrence Mode, Document Outstanding Method, Distributed Object Model

// question 3   Within HTML where do we put JavaScript
    // <script>, <logic>, <javascript>, <style>




// display welcome screen
// display a start button that's linked to the timer, needs it's own onclick function
// when start button is clicked, display the questions and answers, and get rid of the welcome screen. getelementbyid"welcomescreen" setattribute.style.displayNone
// display a timer
//

// that start button funciton needs to display the answers and start the whole application
// can have a funciton that has the timer and a function that displays the answers. could have a funciton(startquiz) and in that is the timer function
// possible function getquestion(showsquestions)


// HTML starts of with empty divs. will need a div for the question and for the answers
// willl need to use createElement in javascript to make the buttons and setAttribute to style it. attributes will be what's inside the button
// will need an array that has 
// will need variable and inside that variable is an array. inside that array we will store objects. inside the first object we will need, title, choices, and answers. each of those will have info in them
// we will need an object for each question that we will need. we will need on object per question in that array that is stored in the variable . all objects will need the same names for the parameters 
// to access it use something like access questions[i], thats the variable name.
// we will need onclick functions for each button. the onclick function goes on the btn variable. you're going to add an event listener to btn.   btn will have value/textcontent. if btn.value/textconten = question[i].answer   double check with a console.log(answer)    once its clicked look at it's attributes and match one of its attributes to answer in the array. then move on with a for loop
// when evaluating if the question is right or wrong then address the timer and adjust the time
// once at the last question is answered the time remaining is their score. have a div containing their remaining time which is their score and bleow that have a div textbox where they can store their initials and display that on screen too



// welcome screen text <p> Think fast and and choose wisely for the clock will determine your score. Get a question right and move along. But get one wrong and your score will be reduced. Log your name and score at the end