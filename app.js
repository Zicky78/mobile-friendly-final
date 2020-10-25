//Movement Animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const controller = document.querySelector('.controller img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const options = document.querySelector('.options');


//Moving Animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20 ;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.1s ease";
    title.style.transition = "all 0.3s ease-in";
    controller.style.transition = "all 0.3s ease-in";
    description.style.transition = "all 0.3s ease-in";
    options.style.transition = "all 0.3s ease-in";
    purchase.style.transition = "all 0.3s ease-in";
    //Popout
    title.style.transform = `translateZ(100px)`;
    controller.style.transform = `translateZ(100px) rotateZ(-25deg)`;
    description.style.transform = `translateZ(100px)`;
    options.style.transform = `translateZ(100px)`;
    purchase.style.transform = `translateZ(100px)`;

})

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
     title.style.transition = "all 0.5s ease-out";
    title.style.transform = `translateZ(0px)`;
    description.style.transition = "all 0.5s ease-out";
    description.style.transform = `translateZ(0px)`;
    options.style.transition = "all 0.5s ease-out";
    options.style.transform = `translateZ(0px)`;
    purchase.style.transition = "all 0.5s ease-out";
    purchase.style.transform = `translateZ(0px)`;
    controller.style.transition = "all 0.5s ease-out";
    controller.style.transform = "translateZ(0px) rotateZ(0deg)";
});