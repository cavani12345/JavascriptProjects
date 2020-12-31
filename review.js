const person = [
    {
   id:1,
   name:"Edison Cavani",
   job:"Software developer",
   description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eaque voluptatem optio cupiditate iusto itaque non rem quas necessitatibus sapiente.",
   img:"imgs/eddy.jpg",

},
{
id:2,
name:"Philius hakizimana",
job:"Project Manager",
description:" He is in charge of managing new and existing project and also approve the project to be financed",
img:"imgs/urcst3.jpg",
},
{
id:3,
name:"Allianced Ishimwe",
job:"Marketting Manager",
description:" responsible for marketing companies product world wide",
img:"imgs/conf.jpg",
},
];

const img= document.getElementById("myimg");
const name= document.getElementById("name");
const position= document.getElementById("position");
const description= document.getElementById("description");
var prevbtn= document.querySelector(".prev-btn");
const nextbtn= document.querySelector(".next-btn")
const suprise= document.querySelector(".suprise");
var currentItem= 0;
document.addEventListener("DOMContentLoaded",function(){
    showperson();
});
  
 function showperson(){
    const first= person[currentItem];
    img.src= first.img;
 }
 prevbtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem <0){
        currentItem = person.length -1;
    }
    showperson();
 });
 nextbtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > person.length -1){
        currentItem =0;
    }
    showperson();
});

suprise.addEventListener("click",function(){
   currentItem = Math.floor(Math.random()*person.length);
   showperson(); 

});
