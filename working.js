alert("BEFORE THE GAME STARTS DECIDE WHO IS PLAYER 1 & PLAYER 2  ");

var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

var pictures = [];

pictures=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var picSrc1 = pictures[randomNumber1];
document.querySelectorAll("img")[0].setAttribute("src",picSrc1);

var picSrc2 = pictures[randomNumber2];
document.querySelectorAll("img")[1].setAttribute("src",picSrc2);



if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="player 1 wins"+"🏅";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins"+"🏅";
}

else{
    document.querySelector("h1").innerHTML="draw"+"⭕";
}