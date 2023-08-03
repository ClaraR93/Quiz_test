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

// Function to update the form with the next question and answers
function askQuestions() {
    // Check if all questions have been asked
    if (currentQuestionIndex >= questions.length) {
        // Display the final results or navigate to a results page
        // For simplicity, let's assume you display the results here
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("label-a").innerHTML = "";
        document.getElementById("label-b").innerHTML = "";
        document.getElementById("label-c").innerHTML = "";
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

    // Increment the question index for the next call
    currentQuestionIndex++;
}

// Call askQuestion() to start the quiz
askQuestions();


const radioButton = document.querySelectorAll('input[type="radio"]');
