const btns= document.querySelectorAll(".btn");
let questions = document.querySelectorAll(".question")
const qtitle= document.querySelectorAll(".question-title")
const content = document.querySelectorAll('.question-content');
const btn1= document.querySelector(".btn1")
const btn2= document.querySelector(".btn2")
const btn3= document.querySelector(".btn3")
const q1= document.querySelector(".question1")
const q2= document.querySelector(".question2")
const q3= document.querySelector(".question3")
 
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
    let question= e.currentTarget.parentElement.parentElement.parentElement;
    question.classList.toggle('show-text');
   if(e.currentTarget.contains(btn1)){
       q2.classList.remove("show-text");
       q3.classList.remove("show-text");

   }
   else if(e.currentTarget.contains(btn2)){
    q1.classList.remove("show-text");
    q3.classList.remove("show-text");

   }
   else{
    q1.classList.remove("show-text");
    q2.classList.remove("show-text");  
   }
    });
    });