const questions = [
  {
    question: "This watch is too _______. I cannot afford it.",
    answers: [
      { text: "hungry", correct: false },
      { text: "fresh", correct: false },
      { text: "expensive", correct: true },
      { text: "hot", correct: false },
    ],
  },
  {
    question: "Please wash all the _______ clothes.",
    answers: [
      { text: "honest", correct: false },
      { text: "dirty", correct: true },
      { text: "dangerous", correct: false },
      { text: "round", correct: false },
    ],
  },
  {
    question: "It is very _______ to go out alone at late night.",
    answers: [
      { text: "heavy", correct: false },
      { text: "dangerous", correct: true },
      { text: "expensive", correct: false },
      { text: "right", correct: false },
    ],
  },
  {
    question: "The rain is very _______. We had better stay at home.",
    answers: [
      { text: "hot", correct: false },
      { text: "weak", correct: false },
      { text: "hungry", correct: false },
      { text: "heavy", correct: true },
    ],
  },
  {
    question: "He is ill. He is too _______ to climb the stairs.",
    answers: [
      { text: "weak", correct: true },
      { text: "fresh", correct: false },
      { text: "blue", correct: false },
      { text: "late", correct: false },
    ],
  },
  {
    question: "The radio is _______. Please bring it for repair.",
    answers: [
      { text: "dirty", correct: false },
      { text: "round", correct: false },
      { text: "damaged", correct: true },
      { text: "heavy", correct: false },
    ],
  },
  {
    question: "Is this the _______ way to go to Sentosa Island?",
    answers: [
      { text: "right", correct: true },
      { text: "dangerous", correct: false },
      { text: "wealthy", correct: false },
      { text: "hot", correct: false },
    ],
  },
  {
    question: "The fish we bought this morning is _______. ",
    answers: [
      { text: "wealthy", correct: false },
      { text: "fresh", correct: true },
      { text: "late", correct: false },
      { text: "blue", correct: false },
    ],
  },
  {
    question: "Look at those girls. They are all wearing _______ jeans.",
    answers: [
      { text: "hungry", correct: false },
      { text: "right", correct: false },
      { text: "heavy", correct: false },
      { text: "blue", correct: true },
    ],
  },
  {
    question: "The weather is very _______. Please switch on the fan.",
    answers: [
      { text: "late", correct: false },
      { text: "round", correct: false },
      { text: "hot", correct: true },
      { text: "dangerous", correct: false },
    ],
  },
  {
    question: "He is very _______. He finished up all the food.",
    answers: [
      { text: "hungry", correct: true },
      { text: "fresh", correct: false },
      { text: "expensive", correct: false },
      { text: "hot", correct: false },
    ],
  },
  {
    question: "I was _______ for school this morning.",
    answers: [
      { text: "blue", correct: false },
      { text: "right", correct: false },
      { text: "expensive", correct: false },
      { text: "late", correct: true },
    ],
  },
  {
    question: "He comes from a _______ family whereby he can buy anything.",
    answers: [
      { text: "hungry", correct: false },
      { text: "wealthy", correct: true },
      { text: "expensive", correct: false },
      { text: "hot", correct: false },
    ],
  },
  {
    question: "He is an _______boy. He never tells lies.",
    answers: [
      { text: "dangerous", correct: false },
      { text: "round", correct: false },
      { text: "honest", correct: true },
      { text: "right", correct: false },
    ],
  },
  {
    question: "The earth is _______.",
    answers: [
      { text: "weak", correct: false },
      { text: "round", correct: true },
      { text: "expensive", correct: false },
      { text: "fresh", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  answerButton.innerHTML = ""; // Clear existing answer buttons

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // Loop through answer buttons and add "correct" class to correct answers
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  // Show the next button
  nextButton.style.display = "block";
}
function showScore() {
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Take Quiz Again!";
  nextButton.style.display = "block";

  // Remove the answer buttons
  answerButton.innerHTML = "";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz(); // Restart the quiz
  }
});
startQuiz();
