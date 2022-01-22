const slider = document.querySelector(".slider");
const sliderimges = document.querySelectorAll(".slider img");


//button
const prvebtn = document.querySelector("#prvebtn");
const nextbtn = document.querySelector("#nextbtn");

let counter = 1;
const size = sliderimges[0].clientWidth;
slider.style.transform = 'translateX('+ (-size * counter)+'px)';

//button functionality
nextbtn.addEventListener('click', () =>{
    if(counter >= sliderimges.length-1) return
    slider.style.transition = "transform 0.4s ease-in-out"
    counter++;
    slider.style.transform = 'translateX('+ (-size * counter)+'px)';
});

prvebtn.addEventListener('click', () =>{
    if(counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out"
    counter--;
    slider.style.transform = 'translateX('+ (-size * counter)+'px)';
});

slider.addEventListener('transitionend', () =>{
    if(sliderimges[counter].id ==='last-clone'){
        slider.style.transition ="none";
        counter.sliderimges.length-2;
        slider.style.transform = 'translateX('+ (-size * counter)+'px)';
    }

    if(sliderimges[counter].id ==='first-clone'){
        slider.style.transition ="none";
        counter.sliderimges.length-counter;
        slider.style.transform = 'translateX('+ (-size * counter)+'px)';
    }
})






