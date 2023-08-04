//Wait for the dom to finish loading before running game
document.addEventListener("DOMContentLoaded", runQuiz);

//Define questions and answers in an array
const questions = [
    {
        question: "What is your preferred activity level?",
        answers: ["Easy and leisurely", "Moderate with some challenges", "Strenuous and adventurous"],
    },
    {
        question: "How do you feel about heights and steep terrains?",
        answers: ["Not a fan; prefer flat and low-altitude landscapes", "I'm okay with some heights and moderate inclines", "Love them!"],
    },
    {
        question: "How much time are you willing to spend on the activity",
        answers: ["1-2 hours", "Short outings or half-day trips", "Full day out"],
    },
];

// Keep track of the current question index
let currentQuestionIndex = 0;

// Add event listener to the "Next" button
const nextButton = document.getElementById("next-button");

// Add event listener to the "Submit" button
const submitButton = document.getElementById("submit-button");

// Function to hide the submit button initially
function hideSubmitButton() {
    const submitButton = document.getElementById("submit-button");
    submitButton.style.display = "none";
}

// Function to show the submit button by the final question
function showSubmitButton() {
    submitButton.style.display = "block";
}

// Function to hide the next button by the final question
function hideNextButton() {
    nextButton.style.display = "none";
}

// Function to update the form with the next question and answers
function askQuestions() {
    // Get the current question and answers from the array
    const currentQuestion = questions[currentQuestionIndex];
    const [answerA, answerB, answerC] = currentQuestion.answers;

    // Update the form with the new question and answers
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("label-a").textContent = answerA;
    document.getElementById("label-b").textContent = answerB;
    document.getElementById("label-c").textContent = answerC;


    // Clear any previous selections when user selects next question
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });

    currentQuestionIndex ++;

    // Check if it's the last question and show the "Submit" button
    if (currentQuestionIndex === questions.length) {
        showSubmitButton();
        hideNextButton();
    }
}

//Check if user has selected one radio button before proceeding
function validateUserInput(){
    //Defines checked radio button and saves as a variable
    const radioAnswers = document.querySelectorAll("input[type='radio']:checked");
    if (radioAnswers.length === 0) {
        alert("Please select an answer!");
    } else {
        askQuestions();
    }
}

function runQuiz() {
    // Hide the "Submit" button initially
    hideSubmitButton();

    nextButton.addEventListener("click", validateUserInput);
    submitButton.addEventListener("click", validateUserSubmission);

    // Call askQuestions() to start the quiz
    askQuestions();
}


function validateUserSubmission(){  
    const finalRadioAnswer = document.querySelectorAll("input[type='radio']:checked");
    if (finalRadioAnswer.length === 0) {
        alert("Please select final answer!");
    } else {
        //loggin a message for testing
        console.log("user submission is valid");
    }
}

function storeUserAnswers() {

}

function calulateScore() {

}

function showResult() {

}