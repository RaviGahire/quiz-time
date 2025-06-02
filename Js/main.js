import jsQuestions from "./jsquestions.js";

let questionCount = document.querySelector(".total-count");
let totalQuestionAttempt = document.querySelector(".total-count-attempt");

let questionNum = document.querySelector(".question-number");
let questionOptions = document.querySelectorAll(".question-options");

let nextBtn = document.querySelector(".next-btn");

//Here, we set the question count dynamically
for (let i = 1; i <= jsQuestions.length; i++) {
  questionCount.innerText = i;
  // If the question is not present in question array then set the 0 
  if(!jsQuestions.length){
     questionCount.innerText = '0';
  }
}

//Here we set the data to local storage
const all_Local_Storage_Data = JSON.parse(localStorage.getItem('all_Local_Storage_Data')) || {}
localStorage.setItem('all_Local_Storage_Data', JSON.stringify(all_Local_Storage_Data))









