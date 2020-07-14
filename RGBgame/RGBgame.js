let numSquares = 12;
let colors=generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let pickedColor = pickColor();
let h1=document.querySelector("h1");
let messageDisplay=document.querySelector("#message");
let resetButton=document.querySelector("#reset");
let easyBtn=document.querySelector("#easyBtn");
let moderateBtn=document.querySelector("#moderateBtn");
let hardBtn=document.querySelector("#hardBtn");



easyBtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    easyBtn.classList.add("selected");
    moderateBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})

moderateBtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    easyBtn.classList.remove("selected");
    moderateBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        } else {
            squares[i].style.display="none";
        }
        
    }
})

hardBtn.addEventListener("click",function(){
    messageDisplay.textContent="";
    easyBtn.classList.remove("selected");
    moderateBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=12;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]) {
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        } else {
            squares[i].style.display="none";
        }
        
    }
})

colorDisplay.textContent=pickedColor;

resetButton.addEventListener("click",function(){
    resetButton.textContent="New Colors";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent="";

    for(var i=0;i<squares.length;i++){
        //add initial colors to squares
        squares[i].style.backgroundColor=colors[i];
    }

    h1.style.backgroundColor="steelblue";

})

for(var i=0;i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor=colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){

        let clickedColor=this.style.backgroundColor;

        if(clickedColor==pickedColor){
            messageDisplay.textContent="Correct!"
            changeColors(clickedColor);
            h1.style.backgroundColor=pickedColor;
            resetButton.textContent="Play Again?"
        }
        else{
           this.style.backgroundColor="#232323";
           messageDisplay.textContent="Try Again!"
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(let i=0; i<squares.length; i++){
        //change each color
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr=[];
    //add num random colors
    for(let i=0;i<num;i++){
        //getrandomcolorand push into array
        arr.push(randomColor());

    }
    //return array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r=Math.floor(Math.random()*256);
    //pick a green from 0-255
    var g=Math.floor(Math.random()*256);
    //pick a blue from 0-255
    var b=Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b +")";

}