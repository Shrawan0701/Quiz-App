const questions = [
  {
    question: "What does Web3 refer to?",
    answers: [
      { text: "The third version of the World Wide Web", correct: false},
      { text: "A decentralized internet built on blockchain technology", correct: true},
      { text: "An upgrade to the existing HTTP protocol", correct: false},
      { text: "A new social media platform", correct: false},
    ]
  },
  {
    question: "Which technology is central to Web3 development?",
    answers: [
      { text: "Artificial Intelligence", correct: false},
      { text: "Virtual Reality", correct:false},
      { text: "Blockchain", correct: true},
      { text: "Augmented reality", correct: false},
    ]
  },
  {
    question: "What is a characteristic of Web3 applications?",
    answers: [
      { text: "Centralized control", correct: false},
      { text: "Dependency on traditional servers", correct: false},
      { text: "Ethereum-based decentralized finance (DeFi) platform", correct: true},
      { text: "Lack of transparency", correct: false},
    ]
  },
  {
    question: "Which of the following is an example of a Web3 application?",
    answers: [
      { text: "Facebook", correct: false},
      { text: "Google", correct: false},
      { text: "Ethereum-based decentralized finance (DeFi) platform", correct: true},
      { text: "Amazon", correct: false},
    ]
  },

  {
    question: "What role do smart contracts play in Web3 ecosystems?",
    answers: [
      { text: "Provides secure communication between servers.", correct: false},
      { text: "They enable automated and trustless transactions.", correct: true},
      { text: "They are used for creating traditional legal contracts.", correct: false},
      { text: "They are not relevant in Web3.", correct: false},
    ]
  },
  {
    question: "What does IPFS stand for in the context of Web3?",
    answers: [
      {text: "Internet Protocol File System", correct:false },
      {text: " International Platform for File Sharing", correct: false},
      {text: "InterPlanetary File System", correct: true},
      {text:" Intelligent Protocol for File Security",correct:false},
      ]
  },
  {
    question: "Which cryptocurrency is often associated with Web3 ecosystems?",
    answers: [
      {text: "Bitcoin", correct:false },
      {text: "Ripple", correct: false},
      {text: "Litecoin", correct: false},
      {text:"Ethereum",correct:true},
      ]
  },
  {
    question: "What is the main benefit of using blockchain technology in Web3?",
    answers: [
      {text: "Increased scalability", correct:false },
      {text: "Lower energy consumption", correct: false},
      {text: "Enhanced security and immutability", correct: true},
      {text:"Faster transaction processing",correct:true},
      ]
  },
      
      

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
