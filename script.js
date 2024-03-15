// Initialize score
let score = 0;
let hintCount = 3; // Initial hint count

// Event listener for starting the quiz
document.getElementById("startBtn").addEventListener("click", function() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("subject-selection").style.display = "block";
});


// Object containing questions for each subject
const questions = {
    English: {
        easy: [
            {
                question: "What is the capital of England?",
                answers: [
                    { text: "London", correct: true },
                    { text: "Paris", correct: false },
                    { text: "Berlin", correct: false },
                    { text: "Madrid", correct: false }
                ],
                hint: "It's a major global city and financial center."
            },
            {
                question: "Who wrote 'To Kill a Mockingbird'?",
                answers: [
                    { text: "Harper Lee", correct: true },
                    { text: "J.K. Rowling", correct: false },
                    { text: "Charles Dickens", correct: false },
                    { text: "Jane Austen", correct: false }
                ],
                hint: "The author's first name is Nelle."
            }
            // Add more easy English questions as needed
        ],
        medium: [
            // Add medium difficulty English questions here
        ],
        hard: [
            // Add hard difficulty English questions here
        ]
    },
    Math: {
        easy: [
            {
                question: "What is the value of π (pi)?",
                answers: [
                    { text: "3.14", correct: true },
                    { text: "2.71", correct: false },
                    { text: "1.618", correct: false },
                    { text: "4.20", correct: false }
                ],
                hint: "It's approximately equal to 3.14159."
            },
            {
                question: "What is the square root of 64?",
                answers: [
                    { text: "8", correct: true },
                    { text: "6", correct: false },
                    { text: "10", correct: false },
                    { text: "12", correct: false }
                ],
                hint: "It's the number multiplied by itself that equals 64."
            },
            // Add more easy Math questions as needed
        ],
        medium: [
            // Add medium difficulty Math questions here
        ],
        hard: [
            // Add hard difficulty Math questions here
        ]
    },
    Science: {
        easy: [
            {
                question: "What is the chemical symbol for water?",
                answers: [
                    { text: "H2O", correct: true },
                    { text: "CO2", correct: false },
                    { text: "O2", correct: false },
                    { text: "NaCl", correct: false }
                ],
                hint: "It consists of two hydrogen atoms and one oxygen atom."
            },
            {
                question: "What is the largest organ in the human body?",
                answers: [
                    { text: "Skin", correct: true },
                    { text: "Liver", correct: false },
                    { text: "Heart", correct: false },
                    { text: "Brain", correct: false }
                ],
                hint: "It covers the entire body and has multiple layers."
            }
            // Add more easy Science questions as needed
        ],
        medium: [
            // Add medium difficulty Science questions here
        ],
        hard: [
            // Add hard difficulty Science questions here
        ]
    }
};

// Elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const hintButton = document.getElementById("hint-btn");
const returnToSubjectsButton = document.getElementById("return-to-subjects-btn");
const scoreMessage = document.getElementById("score-message");

// Variables
let currentQuestionIndex = 0;
let currentSubjectQuestions = [];
let timer;

// Event listener for next button
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentSubjectQuestions.length) {
        showQuestion(currentSubjectQuestions);
    } else {
        showScore();
    }
});

// Event listener for hint button
hintButton.addEventListener("click", () => {
    if (hintCount > 0) {
        const currentQuestion = currentSubjectQuestions[currentQuestionIndex];
        alert(currentQuestion.hint);
        hintCount--;
        hintButton.innerText = `Hint (${hintCount} left)`;
    } else {
        alert("You've used all your hints for this quiz!");
    }
});

// Event listener for returning to subject selection
returnToSubjectsButton.addEventListener("click", () => {
    document.getElementById("score").style.display = "none";
    document.getElementById("subject-selection").style.display = "block";
    hintCount = 3; // Reset hint count when returning to subject selection
    hintButton.innerText = `Hint (${hintCount} left)`;
});

// Function to start the quiz with selected subject and difficulty level
function startQuiz(subject, level) {
    score = 0; // Reset score to 0
    currentSubjectQuestions = questions[subject][level];
    currentQuestionIndex = 0;
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    nextButton.innerHTML = "Next";
    hintCount = 3; // Reset hint count when starting a new quiz
    hintButton.innerText = `Hint (${hintCount} left)`;
    showQuestion(currentSubjectQuestions);
}

// Function to display a question
function showQuestion(questions) {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    // Start the timer for each question
    startTimer();

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to start the timer
function startTimer() {
    let timeLeft = 10; // Set the initial time (in seconds)
    const timerElement = document.getElementById("timer");

    timer = setInterval(() => {
        timerElement.innerText = `Time Left: ${timeLeft}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            // Auto-select the next button when time runs out
            nextButton.click();
        }
    }, 1000);
}

// Function to reset the state of the quiz
function resetState() {
    nextButton.style.display = "none";
    document.getElementById("timer").innerText = ""; // Clear timer display
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    clearInterval(timer); // Clear timer when an answer is selected

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++; // Increment the score if the answer is correct
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    if (isCorrect) {
        nextButton.style.display = "block"; // Show next button only if the answer is correct
    } else {
        // Automatically retry the question when the answer is incorrect without showing the correct answer
        setTimeout(() => {
            showQuestion(currentSubjectQuestions);
        }, 1000); // Wait for 1 second before retrying the question
    }
}

// Function to show the final score
function showScore() {
    resetState();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score").style.display = "block";
    scoreMessage.innerHTML = `You scored ${score} out of ${currentSubjectQuestions.length}!`;
}

// Function to start the quiz with selected subject and difficulty level
function startQuiz(subject, level) {
    score = 0; // Reset score to 0
    currentSubjectQuestions = questions[subject][level];
    currentQuestionIndex = 0;
    document.getElementById("subject-selection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    nextButton.style.display = "none"; // Hide next button initially
    hintCount = 3; // Reset hint count when starting a new quiz
    hintButton.innerText = `Hint (${hintCount} left)`;
    showQuestion(currentSubjectQuestions);
}

// Function to display a question
function showQuestion(questions) {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    // Start the timer for each question
    startTimer();

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Function to start the timer
function startTimer() {
    let timeLeft = 10; // Set the initial time (in seconds)
    const timerElement = document.getElementById("timer");

    timer = setInterval(() => {
        timerElement.innerText = `Time Left: ${timeLeft}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            // Auto-select the next button when time runs out
            nextButton.click();
        }
    }, 1000);
}

// Function to reset the state of the quiz
function resetState() {
    nextButton.style.display = "none";
    document.getElementById("timer").innerText = ""; // Clear timer display
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    clearInterval(timer); // Clear timer when an answer is selected

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Increment the score if the answer is correct
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    if (isCorrect) {
        nextButton.style.display = "block"; // Show next button only if the answer is correct
    } else {
        // Automatically retry the question when the answer is incorrect without showing the correct answer
        setTimeout(() => {
            showQuestion(currentSubjectQuestions);
        }, 1000); // Wait for 1 second before retrying the question
    }
}

// Function to show the final score
function showScore() {
    resetState();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score").style.display = "block";
    scoreMessage.innerHTML = `You scored ${score} out of ${currentSubjectQuestions.length}!`;
}
