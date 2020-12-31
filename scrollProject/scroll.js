const btn =document.getElementById("navtog");
const aboutheight= document.getElementById("about");
        const banner= document.querySelector(".banner");
        const link = document.querySelector(".scroll-link");
        const nav= document.getElementById("nav");
        const topli = document.querySelector(".top-link");
        const linnav= document.querySelectorAll(".nav-link");
        //const toplink = document.getElementById("top-link");

        btn.addEventListener('click',function(){
            banner.classList.toggle('scroll');
        //const heigh= aboutheight.getBoundingClientRect().height;
        const heighh= 
        console.log(heighh);

        });

const date= document.getElementById("date");
date.innerHTML= new Date().getFullYear();

window.addEventListener('scroll',function(){
   // console.log(window.pageYOffset);
   const windowheight = window.pageYOffset;
   const navheight= nav.getBoundingClientRect().height;
   if(windowheight > navheight){
       nav.classList.add("fixed-nav");
   }
   else{
       nav.classList.remove("fixed-nav");
   }
   if(windowheight > 500){
    topli.classList.add("show-toplink");
}
else{
 topli.classList.remove("show-toplink");
} 
});
window.addEventListener('DOMContentLoaded',function(){
    console.log(topli.parentElement.parentElement);
})
//
linnav.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
       let getattr= e.currentTarget.getAttribute("href").slice(1);
        let element= document.getElementById(getattr);
        const navheight= nav.getBoundingClientRect().height;
        let topposition =  element.offsetTop  - navheight;
         window.scrollTo({
             left:0,
             top:topposition,

         });
         nav.style.height = 0;

    });
   });