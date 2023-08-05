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
        radio.removeEventListener("click", storeUserAnswers);
        radio.addEventListener("click", storeUserAnswers);
    });

     // Increment through the questions array by 1
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

function validateUserSubmission(){  
    const finalRadioAnswer = document.querySelectorAll("input[type='radio']:checked");
    if (finalRadioAnswer.length === 0) {
        alert("Please select final answer!");
    } else {
        //loggin a message for testing
        console.log("user submission is valid");

        //showresults();
    }
}

//WORK ON THIS FUNCTION - ARRAY NEEDS TO BE RECORDED//
//An empty array to store user answers
let userAnswers = [];    

let nextButtonClicked = false;

nextButton.addEventListener("click", function () {
    nextButtonClicked = true;
});

//Function to store user radio button selections in userAnswer array
function storeUserAnswers(event) {
    const selectedRadioButton = event.target;
    if (selectedRadioButton.checked && nextButtonClicked) {
        userAnswers[currentQuestionIndex -1] = selectedRadioButton.value;
        console.log(userAnswers);
    }
}

function runQuiz() {
    // Hide the "Submit" button initially
    hideSubmitButton();

    //Event listener for next button to check if user has submitted input
    nextButton.addEventListener("click", validateUserInput);

    //Event listener for submit button to check if user has submitted last input
    submitButton.addEventListener("click", validateUserSubmission);

    // Call askQuestions() to start the quiz
    askQuestions();

}

function calulateScore() {

}

function showResult() {

}