    const mybtn = document.querySelectorAll(".btn");
    const content = document.querySelectorAll(".content");
    const history= document.getElementById("history");
    let defaulttab = document.querySelector(".first");
    
    mybtn.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const current = e.currentTarget.dataset.id;
            if(current){
        content.forEach(function(content){
            content.classList.remove('active');
            const newcurrent = document.getElementById(current); 
            newcurrent.classList.add("active");
            });
            
        }

    });
    });
    window.addEventListener('DOMContentLoaded',function(){
        let findefaultab= document.getElementById(defaulttab.dataset.id);
        findefaultab.classList.add('active');
    });

