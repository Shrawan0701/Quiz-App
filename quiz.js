const questions = [
  {
    question: "Who is the current PM of India?",
    answers: [
      { text: "Rahul Gandhi", correct: false},
      { text: "Narendra Modi", correct: true},
      { text: "Arvind Kejriwal", correct: false},
      { text: "Amit Shah", correct: false},
    ]
  },
  {
    question: "Who is the current Captain of Indian Cricket Team?",
    answers: [
      { text: "KL Rahul", correct: false},
      { text: "Virat Kohli", correct:false},
      { text: "Rohit Sharma", correct: true},
      { text: "Hardik Pandya", correct: false},
    ]
  },
  {
    question: "Which is the smallest Continent in the World?",
    answers: [
      { text: "South America", correct: false},
      { text: "Asia", correct: false},
      { text: "Europe", correct: false},
      { text: "Australia", correct: true},
    ]
  },
  {
    question: "Which IPL team has won more titals from below options?",
    answers: [
      { text: "Punjab", correct: false},
      { text: "Bangalore", correct: false},
      { text: "Kolkata", correct: true},
      { text: "Hyderabad", correct: false},
    ]
  },

  {
    question: "What is the name of the highest civilian award in India??",
    answers: [
      { text: "Padmashri", correct: false},
      { text: "Padmabhushan", correct: false},
      { text: "Padmavibhushan", correct: false},
      { text: "Bharat Ratna", correct: true},
    ]
  }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuiz() {
  currentQuestionIndex=0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

  });
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach (button=> {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display="block";

}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", ()=> {
  if(currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
})


StartQuiz();