var difficultyMode = 6;
var colors = generateRandomColors(difficultyMode);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

//initialize game script
init();

//main game script
function init(){
    //adds event listener for Reset button and activates reset
    resetButton.addEventListener("click", resetColors);
    //displays RGB color that user needs to guess
    colorDisplay.textContent = pickedColor;
    //initialize event listener for click on Easy and Hard buttons
    modeButtonEventListener();
    //adds event listener to squares and checked if user guess collor
    squaresEventListener();
}

//adds event listener for click on Easy and Hard button
function modeButtonEventListener() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? difficultyMode = 3 : difficultyMode = 6;
            resetColors();
        });
    }
}

//adds event listener to squares and checke if user guess collor
function squaresEventListener() {
    for(var i = 0; i < square.length; i++) {
        initColors();
        //add event listenere to squares
        square[i].addEventListener("click", function(){
            //grab color of picked squuare
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                resetButton.textContent = "Play Again?";   
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

//resents collors of squares
function resetColors() {
    //generate all new colors
    colors = generateRandomColors(difficultyMode);
    //pick new color from array
    pickedColor = pickColor();
    //change all colors of squares
    colorDisplay.textContent = pickedColor;
    initColors();
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

//assigns colors to squares and reset h1 background
function initColors() {
    for(var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "#steelblue";
        colors[i] ? square[i].style.display = "block" : square[i].style.display = "none";

    }
};

//changes color of squares and H1 to the same color
function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        square[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generates random colors for a array
function generateRandomColors(num) {
    //make and array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return array
    return arr;
}

//generates 3 diferent numbers for rgb colors
function randomColor() {
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
