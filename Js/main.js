import jsQuestions from "./jsquestions.js";

let questionCount = document.querySelector(".total-count");
let totalQuestionAttempt = document.querySelector(".total-count-attempt");

let questionNum = document.querySelector(".question-number");
let questionOptions = document.querySelectorAll(".question-options");

let nextBtn = document.querySelector(".next-btn");

//Here, we set the question count dynamically
for (let i = 1; i <= jsQuestions.length; i++) {
  questionCount.innerText = i;
}


  

jsQuestions.forEach((elem, index) => {
  totalQuestionAttempt.innerText = index + 1;
  questionNum.innerText = elem.question
 
  console.log(elem.options)



});




nextBtn.addEventListener("click", (e) => {});
