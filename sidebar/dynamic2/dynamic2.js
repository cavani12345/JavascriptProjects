const person = [
    {
id:1,
name:"Edison Cavani",
category:"CEO",
job:"Software developer",
description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eaque voluptatem optio cupiditate iusto itaque non rem quas necessitatibus sapiente.",
img:"../../imgs/eddy.jpg",

},
{
id:2,
name:"Philius hakizimana",
category:"CEO",
job:"Project Manager",
description:" He is in charge of managing new and existing project and also approve the project to be financed",
img:"../../imgs/urcst3.jpg",
},
{
id:3,
name:"Allianced Ishimwe",
category:"Software",
job:"Marketting Manager",
description:" responsible for marketing companies product world wide. we are highly welcoming everyone in this new world  ",
img:"../../imgs/conf.jpg",
},
{
    id:4,
    name:"Alberto Kevin",
    job:"CEO",
    category:"Software",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam laborum quibusdam dicta impedit vitae numquam asperiores commodi architecto earum! Neque enim molestiae sequi blanditiis minima corporis dolorum laudantium numquam. ",
    img:"../../imgs/alberto.png",
},
{
    id:5,
    name:"Warrent Buffet",
    category:"Designer",
    job:"Designer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam laborum quibusdam dicta impedit vitae numquam asperiores commodi architecto earum! Neque enim molestiae sequi blanditiis minima corporis dolorum laudantium numquam. ",
    img:"../../imgs/buffet.png",
},
{
    id:6,
    name:"Jack Ma",
    job:"Designer",
    category:"Designer",
    description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quisquam laborum quibusdam dicta impedit vitae numquam asperiores commodi architecto earum! Neque enim molestiae sequi blanditiis minima corporis dolorum laudantium numquam. ",
    img:"../../imgs/uthappizza.png",
},
{
    id:1,
name:"Edison Cavani",
category:"Manager",
job:"Software developer",
description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod eaque voluptatem optio cupiditate iusto itaque non rem quas necessitatibus sapiente.",
img:"../../imgs/buffet.png",

},
];

let mydynamic= document.getElementById("mydynamic");
let getname= document.getElementById("getname");
let btn = document.querySelectorAll(".btn");
let btncontainer= document.getElementById("btn-container");
//const mydynamic= document.querySelector(".mydynamic");
window.addEventListener('DOMContentLoaded',function(){
    displaymenu(person);
    displayperson();
});
function displaymenu(menu){
    let data = menu.map(function(item){
        return `<div class="col-12 col-md-6">
        <a href="edit.html " style="text-decoration:none;">
        <div class="media">
        <img class="d-flex mr-3 img-thumbnail img-fluid"
                src=${item.img} alt=${item.name} width="150px" height="150px">
        <div class="media-body">
            <p class="text-dark">${item.description}</p>
        </div>
    </div>
    </a>
    </div>`;
    }).join('');
    mydynamic.innerHTML= data;
}

function displayperson(){
    let categories= person.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ["all"]);
    
    //console.log(categories);

     const btndynamic= categories.map(function(category){
         return`<button class="btn btn-primary" data-id=${category}>${category}</button>&nbsp`;
     }).join("");
     btncontainer.innerHTML = btndynamic;
     let btn = document.querySelectorAll(".btn");
     btn.forEach(function(btn){
        btn.addEventListener('click',function(e){
    const current= e.currentTarget.dataset.id;
    const filter= person.filter(function(item){
        if(item.category == current){
        return item;
    }
    });
    if(current =='all'){
       displaymenu(person);
    }
    else{
        displaymenu(filter);
    }
        });
    });
}
