// Define the questions and answers array
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

//An empty array to store user answers
let userAnswers = [];

// Function to update the form with the next question and answers
function askQuestions() {
    // Check if all questions have been asked
    if (currentQuestionIndex >= questions.length) {
        // Display the final results 
        displayResults();
        return;
    }

    // Get the current question and answers from the array
    const currentQuestion = questions[currentQuestionIndex];
    const [answerA, answerB, answerC] = currentQuestion.answers;

    // Update the form with the new question and answers
    document.getElementById("question").innerHTML = currentQuestion.question;
    document.getElementById("label-a").innerHTML = answerA;
    document.getElementById("label-b").innerHTML = answerB;
    document.getElementById("label-c").innerHTML = answerC;

    //Increment through the questions array by 1
    currentQuestionIndex ++;

    // Clear any previous selections when user selects next question
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });
}

 //Check if user has selected one radio button before proceeding
function checkUserInput() {
    //Defines radio button and saves as a variable
    const radioAnswers = document.querySelectorAll("input[type='radio']:checked");
   
    if (radioAnswers.length === 0) {
        alert("Please select an answer!");
    } else {
        askQuestions();
    }
}

//Navigate to next question in questions array when 'next' button is clicked
const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", checkUserInput);

askQuestions(); 


// Function to store the radio answer values in the userAnswers array
function storeRadioAnswerValues() {
    const radioInputs = document.querySelectorAll("input[type='radio']:checked");
    const answerValues = Array.from(radioInputs).map((input) => input.value);
    return answerValues;
}

// Example usage: Call the function when the user clicks a "Submit" button
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
    userAnswers = storeRadioAnswerValues();
    console.log(userAnswers); // Display the user's answers in the console (for demonstration purposes)
    // Now you have the user's answers stored in the 'userAnswers' array and can process them as needed.
});
