let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let pink = document.querySelector("#pink");
let red = document.querySelector("#red");
let body = document.querySelector("body");

green.addEventListener("click",function(){
    body.style.backgroundColor = "aquamarine";
})

blue.addEventListener("click",function(){
    body.style.backgroundColor = "bisque";
})

pink.addEventListener("click",function(){
    body.style.backgroundColor = "rgb(238, 173, 247)";
})

red.addEventListener("click",function(){
    body.style.backgroundColor = "rgb(120, 149, 236)";
})

