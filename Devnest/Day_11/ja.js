const quizDB = [
  {
    question: "Q1: What is the Capital of INDIA ?",
    a: "Mumbai",
    b: "Kolkata",
    c: "Channai",
    d: "Delhi",
    ans: "ans4",
  },
  {
    question: "Q2: What is the Capital of USA ?",
    a: "Washington DC",
    b: "New York",
    c: "San Francisco",
    d: "Los Angeles",
    ans: "ans1",
  },
  {
    question: "Q3: What is the Capital of AUSTRALIA ?",
    a: "Perth",
    b: "Melbourne",
    c: "Canberra",
    d: "Sydney",
    ans: "ans3",
  },
  {
    question: "Q4: What is the Capital of ENGLAND ?",
    a: "London",
    b: "Manchester",
    c: "Cambridge",
    d: "Oxford",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelectorAll("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionlist = quizDB[questionCount];
  question.innerText = questionlist.question;
  option1.innerText = questionlist.a;
  option2.innerText = questionlist.b;
  option3.innerText = questionlist.c;
  option4.innerText = questionlist.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  

  if (questionCount < quizDB.length) {
    loadQuestion();
    const checkedAnswer = getCheckAnswer();
  //console.log(checkedAnswer);
  console.log(questionCount);
  if (checkedAnswer === quizDB[questionCount].ans) {
    
    score++;
  }
  
    
  } else {
    console.log('hi');
    let Score=document.querySelector('.showScore');
    console.log(Score);
    let btn= document.createElement('button');
    btn.innerHTML="Play Again";
    btn.className='btn';
    let heading=document.createElement('h3');
    heading.innerHTML=`Your score is ${score}/4.`
    Score.appendChild(heading);
    Score.appendChild(btn);
    Score.style.display="block";
    
    //console.log(score);
  }
  questionCount++;
});