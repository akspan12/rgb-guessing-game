var numSquare=6;
var colors=generateRandomColors(numSquare);
var colorDisplay=document.getElementById("colorDisplay");
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var modeBtn=document.querySelectorAll(".mode");

for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click",function(){
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
	this.classList.add("selected");
	if(this.textContent==="Easy"){
		numSquare=3;
	}
	else{
		numSquare=6;
	}
	reset();
});
}

function reset(){
	colors=generateRandomColors(numSquare);
  pickedColor= pickColor();
  colorDisplay.textContent=pickedColor;

  for (var i = 0; i < squares.length; i++) {
	
	if(colors[i]){
		squares[i].style.display="block"; 
		squares[i].style.backgroundColor = colors[i];
	}
	else{
		squares[i].style.display="none";
	}
}
h1.style.backgroundColor="steelblue";
resetButton.textContent="new colors";
messageDisplay.textContent="";

}


resetButton.addEventListener("click",function(){
  reset()
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
        	resetButton.textContent="Play again?";
        	messageDisplay.textContent="CORRECT!";
        	changeColor(clickedColor);
        	h1.style.backgroundColor=clickedColor;
        } 
        else{
        	this.style.backgroundColor="#232323";
        	messageDisplay.textContent="TRY AGAIN!";
        }
	});
}

function changeColor(color){
	for (var i = 0; i < colors.length; i++) {
	  	squares[i].style.backgroundColor = color;
  	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for (var i = 0; i <num; i++) {
	arr.push(randomColor());
}
return arr;
}

function randomColor(){
	var valRed=Math.floor(Math.random()*256);
	var valGreen=Math.floor(Math.random()*256);
	var valBlue=Math.floor(Math.random()*256);
	var colorString="rgb("+valRed+", "+valGreen+", "+valBlue+")";
	return colorString;
}
