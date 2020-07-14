var p1button=document.getElementById("p1");
let p2button=document.getElementById("p2");
let p1Display=document.querySelector("#p1Display");
let p2Display=document.querySelector("#p2Display");
let resetbutton=document.querySelector("#reset");
let numinput=document.querySelector("input");
let playing=document.querySelector("#playing");
var p1score=0;
let p2score=0;
let gameover=false;
let winningscore=5;

p1button.addEventListener("click",function(){
    if(!gameover){
        p1score++;
        // console.log(p1score);
        if(p1score==winningscore){
            gameover=true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent=p1score;
    }
});

p2button.addEventListener("click",function(){
    if(!gameover){
        p2score++;        
        // console.log(p1score);
        if(p2score==winningscore){
            gameover=true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent=p2score;
    }
 
});

resetbutton.addEventListener("click",function(){
    p1score=0;
    p2score=0;
    p1Display.textContent="0";
    p2Display.textContent="0";
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameover=false;
});

numinput.addEventListener("change",function(){
    playing.textContent=numinput.value;
    winningscore=numinput.value;
});