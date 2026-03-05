const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

red.addEventListener("click", function(){
document.body.style.backgroundColor = "red";
});

blue.addEventListener("click", function(){
document.body.style.backgroundColor = "blue";
});

green.addEventListener("click", function(){
document.body.style.backgroundColor = "green";
});

yellow.addEventListener("click", function(){
document.body.style.backgroundColor = "yellow";
});