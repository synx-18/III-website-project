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
                question: "What is the opposite of the word 'happy'?",
                answers: [
                    { text: "Joyful", correct: false },
                    { text: "Sad", correct: true },
                    { text: "Excited", correct: false },
                    { text: "Content", correct: false }
                ],
                hint: "Think about the feeling you have when things don't go well."
            },
            {
                question: "What is the verb in the sentence: 'She sings beautifully.'?",
                answers: [
                    { text: "She", correct: false },
                    { text: "Sings", correct: true },
                    { text: "Beautifullly", correct: false },
                    { text: "None of the above", correct: false }
                ],
                hint: "it's describing an action."
            },
            {
                question: "What do you call a word that means the same as another word?",
                answers: [
                    { text: "Synonym", correct: true },
                    { text: "Same", correct: false },
                    { text: "Antonym", correct: false },
                    { text: "Opposite", correct: false }
                ],
                hint: "Think about different words for 'big' like 'large' or 'huge'."
            },
            {
                question: "Which punctuation mark is used at the end of a sentence that is asking?",
                answers: [
                    { text: "Question mark", correct: true },
                    { text: "Exclamation", correct: false },
                    { text: "Clause", correct: false },
                    { text: "All of the above", correct: false }
                ],
                hint: "It goes at the end of a sentence when you're asking something."
            },
            {
                question: "What do you call a word that joins two sentences together?",
                answers: [
                    { text: "Sentence", correct: false },
                    { text: "Pharagraph", correct: false },
                    { text: "Clause", correct: false },
                    { text: "Conjunction", correct: true }
                ],
                hint: "It's word use to connect. Examples include 'and,' 'but,' and 'or.'"
            },
            
            // Add more easy English questions as needed
        ],
        medium: [
            {
                question: "Who is the author of Romeo & Juliet?",
                answers: [
                    { text: "Adam Shulman", correct: false },
                    { text: "Anne Hathaway", correct: false },
                    { text: "William Shakespeare", correct: true },
                    { text: "All of the above", correct: false }
                ],
                hint: "He is also an actor of the Renaissance era. "
            },
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
            },
            {
                question: "What is the correct form of the verb to complete the sentence: 'The team _____ been practicing for the championship match'?",
                answers: [
                    { text: "Have", correct: false },
                    { text: "has", correct: true },
                    { text: "Is", correct: false },
                    { text: "Are", correct: false }
                ],
                hint: "Remember, when the subject is singular, the verb should also be singular."
            },
            {
                question: "Identify the adjective in the sentence: 'The bright sun warmed the beach.'",
                answers: [
                    { text: "Beach", correct: false },
                    { text: "Warmed", correct: false },
                    { text: "Sun", correct: false },
                    { text: "Bright", correct: true }
                ],
                hint: "Adjectives describe nouns. Which word describes the sun?"
            },
            // Add medium difficulty English questions here
        ],
        hard: [
            {
                question: "Choose the correct synonym for 'abundant'",
                answers: [
                    { text: "Scarce", correct: false },
                    { text: "Plentiful", correct: true },
                    { text: "Meager", correct: false },
                    { text: "Sparse", correct: false }
                ],
                hint: "Think about words that mean 'a lot of' or 'plenty of.'"
            },
            {
                question: "Which of the following is an example of a simile?",
                answers: [
                    { text: "She danced gracefully like a swan.", correct: true },
                    { text: "The tree branches reached towards the sky.", correct: false },
                    { text: "The rain fell heavily on the roof.", correct: false },
                    { text: "Time flies when you're having fun", correct: false }
                ],
                hint: "Similes use 'like' or 'as' to compare two different things."
            },
            {
                question: "What is the correct punctuation for the following sentence?What is the correct punctuation for the following sentence?",
                answers: [
                    { text: "Period after 'semester'", correct: false },
                    { text: "Comma after 'semester'", correct: false },
                    { text: "Semi-colon after 'semester'", correct: true },
                    { text: "No punctuation needed", correct: false }
                ],
                hint: "Consider the relationship between the two independent clauses."
            },
            {
                question: "What is the correct spelling of the word meaning 'to make a situation more difficult'?",
                answers: [
                    { text: "Exacerbate", correct: true },
                    { text: "Exacervate", correct: false },
                    { text: "Exasservate", correct: false },
                    { text: "Exaservate", correct: false }
                ],
                hint: "Focus on the root of the word and common English spelling patterns."
            },
            {
                question: "What is the correct definition of the word 'facetious'?",
                answers: [
                    { text: "Sarcastic or mocking", correct: false },
                    { text: "Serious and thoughtful", correct: false },
                    { text: "Humorous or joking", correct: true },
                    { text: "Irrelevant or off-topic", correct: false }
                ],
                hint: "Consider the context in which the word is typically used and its synonyms."
            },
            
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
            {
                question: "If a car travels at a speed of 60 kilometers per hour, how far will it travel in 3 hours?",
                answer: [
                    { text: "80 km", correct:"false"},
                    { text: "180 km", correct: "true"},
                    { text: "200 km", correct: "false"},
                    { text: "280 km", correct: "false"}
                ],
                hint: "Distance traveled is calculated by multiplying speed by time. "
            },
            {
                question: "If a box contains 24 chocolates and they are to be equally distributed among 6 friends, how many chocolates will each friend get?",
                answer: [ 
                    { text: "24 chocolate", correct: false },
                    { text: "6 chocolate", correct: true },
                    { text: "4 chocolate", correct: false },
                    { text: "none of the above", correct: false }
                ],
                hint: "Calculate how many slices are left out of the total number of slices."
            },
            {
                question: "What is the value of 5 + 3 * 2?",
                answer: [ 
                    { text: "8", correct: false },
                    { text: "9", correct: true },
                    { text: "11", correct: false },
                    { text: "none of the above", correct: false }
                ],
                hint: "order of operations, commonly known as PEMDAS (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction)."
            }        
            // Add more easy Math questions as needed

        ],
        medium: [
            {
                question: "What is the next number in the sequence: 2, 5, 8, 11, ...?",
                answers: [
                    { text: "2", correct: true },
                    { text: "4", correct: false },
                    { text: "6", correct: false },
                    { text: "10", correct: false }
                ],
                hint: "Remember, you just adding between the gap of numbers."
            },
            {
                question: "What is the result of 3² + 4²?",
                answers: [
                    { text: "5", correct: false },
                    { text: "25", correct: true },
                    { text: "50", correct: false },
                    { text: "100", correct: false }
                ],
                hint: "the square of a number is that number multiplied by itself."
            },
            {
                question: "If a rectangle has a length of 8 units and a width of 5 units, what is its perimeter?",
                answers: [
                    { text: "20 units", correct: false },
                    { text: "26 units ", correct: true },
                    { text: "40 units", correct: false },
                    { text: "46 units", correct: false }
                ],
                hint: "Perimeter is the sum of all sides of a shape. For a rectangle, it's twice the length plus twice the width."
            },
            {
                question: "If a triangle has angles measuring 30°, 60°, and 90°, what type of triangle is it?",
                answers: [
                    { text: "it's the left angle", correct: false },
                    { text: "it's the right angle", correct: true },
                    { text: "both right and left angles", correct: false },
                    { text: "none of the above", correct: true }
                ],
                hint: "Think about the relationship between the other two angles in relation to 90°."
            },
            {
                question: "If a pizza is divided into 8 equal slices and 4 slices are eaten, what fraction of the pizza remains?",
                answers: [
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "1/2", correct: true },
                    { text: "1/8", correct: false }
                ],
                hint: "divide the total number of chocolates by the number of friends."
            }
            // Add medium difficulty Math questions here
        ],
        hard: [
            {
                question: "What is the limit of lim⁡x→0sin⁡(x)xlimx→0​xsin(x)​?",
                answers: [
                    { text: "1", correct: false },
                    { text: "2", correct: false },
                    { text: "3", correct: true },
                    { text: "4", correct: false }
                ],
                hint: "Use L'Hôpital's Rule or recognize the definition of the derivative of sine function."
            },
            {
                question: " Solve for x: 2x−53=x+7232x−5​=2x+7​.",
                answers: [
                    { text: "x=197x=719​", correct: true },
                    { text: "x=297x=819​", correct: false },
                    { text: "x=95x=19​", correct: false },
                    { text: "x=85x=19​", correct: false }
                ],
                hint: "It multiply both sides by the least common multiple of the denominators."
            },
            {
                question: "If a circle has a radius of 5 units and an inscribed equilateral triangle, what is the length of one side of the triangle?",
                answers: [
                    { text: "643364", correct: false },
                    { text: "421142", correct: false },
                    { text: "532253", correct: true },
                    { text: "none of the above", correct: false }
                ],
                hint: "Use trigonometry to find the side length."
            },
            {
                question: "Evaluate the integral ∫x2ln⁡(x) dx∫x2ln(x)dx.",
                answers: [
                    { text: "x3ln⁡(x)3−x393x3ln(x)​−9x3​", correct: true },
                    { text: "x35n⁡(x)3−x293x35n(x)​−5x3​", correct: false },
                    { text: "x2ln⁡(x)3−x353x2ln(x)​−4x2​", correct: false },
                    { text: "none of the above​", correct: false }
                ],
                hint: "Use integration by parts, where one function is the natural logarithm and the other is a polynomial."
            },
            {
                question: "Calculate the derivative of f(x)=x3sin⁡(x) f(x)=sin(x)x3​.",
                answers: [
                    { text: "f′(x)=2x1sin⁡(x)−x2cos⁡(x)sin⁡1(x) f′(x)=sin1(x)2x1sin(x)−x2cos(x)​", correct: false },
                    { text: "f′(x)=3x2sin⁡(x)−x3cos⁡(x)sin⁡2(x) f′(x)=sin2(x)3x2sin(x)−x3cos(x)​", correct: true },
                    { text: "f′(x)=4x3sin⁡(x)−x4cos⁡(x)sin⁡3(x) f′(x)=sin3(x)4x3sin(x)−x4cos(x)​", correct: false },
                    { text: "f′(x)=3x2sin⁡(x)−x4cos⁡(x)sin⁡3(x) f′(x)=sin3(x)3x2sin(x)−x4cos(x)​", correct: false }
                ],
                hint: "Apply the quotient rule and trigonometric differentiation."
            }
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
                question: "What is the hardest mineral found on Earth?",
                answers: [
                    { text: "Diamond", correct: true },
                    { text: "Quartz", correct: false },
                    { text: "Feldspar", correct: false },
                    { text: "Talc", correct: false }
                ],
                hint: "Consider the Mohs scale of mineral hardness."
            },
            {
                question: "What is the name of the imaginary line that divides the Earth into Northern and Southern Hemispheres?",
                answers: [
                    { text: "outer", correct: false },
                    { text: "Equator", correct: true },
                    { text: "Atmosphere", correct: false },
                    { text: "inner", correct: false }
                ],
                hint: "It's located halfway between the North and South Poles."
            },
            {
                question: "What is the main function of the ozone layer in Earth's atmosphere?",
                answers: [
                    { text: "Regulating temperature", correct: false },
                    { text: "Absorbing ultraviolet radiation", correct: true },
                    { text: "Producing temperature", correct: false },
                    { text: "Filtering air polution", correct: false }
                ],
                hint: "Think about its role in protecting life on Earth from harmful solar radiation."
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
            {
                question: "Which of the following is not a renewable energy source?",
                answers: [
                    { text: "Solar power", correct: false },
                    { text: "Wind power", correct: false },
                    { text: "Natural gas", correct: true },
                    { text: "Biomass", correct: false }
                ],
                hint: "Renewable energy sources are those that can be replenished naturally."
            },
            {
                question: "What is the process by which plants make their food?",
                answers: [
                    { text: "Repiration", correct: false },
                    { text: "Photosynthesis", correct: true },
                    { text: "Transpiration", correct: false },
                    { text: "Germination", correct: false }
                ],
                hint: "This process involves the absorption of sunlight, carbon dioxide, and water."
            },
            {
                question: "What is the main function of the nucleus in a cell?",
                answers: [
                    { text: "Producing energy", correct: false },
                    { text: "Controlling cell activities", correct: true },
                    { text: "Storing waste", correct: false },
                    { text: "Transporting materials", correct: false }
                ],
                hint: "Think about the central role of the nucleus in cell function and growth."
            },
            {
                question: "What is the unit of measurement for force?",
                answers: [
                    { text: "Volts", correct: false },
                    { text: "Joules", correct: false },
                    { text: "Newtons", correct: true },
                    { text: "Watts", correct: false }
                ],
                hint: "This unit is named after a famous scientist known for his laws of motion."
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                answers: [
                    { text: "Venus", correct: true },
                    { text: "Mars", correct: false },
                    { text: "Jupiter", correct: false },
                    { text: "Saturn", correct: false }
                ],
                hint: "Consider the color of the planet's surface as seen from Earth."
            }
            // Add medium difficulty Science questions here
        ],
        hard: [
            {
                question: "Which of the following subatomic particles has the smallest mass?",
                answers: [
                    { text: "Proton", correct: false },
                    { text: "Neutron", correct: false },
                    { text: "Electron", correct: true },
                    { text: "Positron", correct: false }
                ],
                hint: "Consider the relative sizes of subatomic particles and their charges."
            },
            {
                question: "What is the process by which a cell engulfs solid particles from its surroundings?",
                answers: [
                    { text: "Osmosis", correct: false },
                    { text: "Phagocytosis", correct: true },
                    { text: "Pinocytosis", correct: false },
                    { text: "Diffusion", correct: false }
                ],
                hint: "Think about how cells take in large particles or organisms."
            },
            {
                question: "Which of the following is NOT a function of the liver?",
                answers: [
                    { text: "Carbohydrate metabolism", correct: false },
                    { text: "Protein synthesis", correct: false },
                    { text: "Detroxification", correct: false },
                    { text: "Red blood cell production", correct: true }
                ],
                hint: "Consider the roles of the liver in metabolism and detoxification."
            },
            {
                question: "What type of bond forms between two water molecules?",
                answers: [
                    { text: "Ionic bond", correct: false },
                    { text: "Covalent bond", correct: false },
                    { text: "Hydrogen bond", correct: true },
                    { text: "Metallic bond", correct: false }
                ],
                hint: "Consider the polar nature of water molecules and their ability to form weak attractions."
            },
            {
                question: "Which of the following is a characteristic of a eukaryotic cell?",
                answers: [
                    { text: "Lack of nucleus", correct: false },
                    { text: "Presence of membrane-bound organelles", correct: true },
                    { text: "Single circular chromosome", correct: false },
                    { text: "Smaller size compared to prokaryotic cells", correct: false }
                ],
                hint: "Think about the differences between eukaryotic and prokaryotic cells in terms of structure."
            },
            // Add hard difficulty Science questions here
        ]
    },
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
    nextButton.style.display = "block";
}

// Function to show the final score
function showScore() {
    resetState();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score").style.display = "block";
    scoreMessage.innerHTML = `You scored ${score} out of ${currentSubjectQuestions.length}!`;
}
