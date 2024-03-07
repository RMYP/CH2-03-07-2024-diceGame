// Generate rand number
// math.random generate decimal num
let randNum1 = Math.floor(Math.random() * 6 + 1);
let randNum2 = Math.floor(Math.random() * 6 + 1);

//player1 
// get an image based on rand number 
let diceNumPng = "dice" + randNum1 +".png";
// const source
const randomImgSource1 = `images/${diceNumPng}`;
let player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", randomImgSource1);


// player2
let diceNumPng2 = "dice" + randNum2 +".png";
// const source
const randomImgSource2 = `images/${diceNumPng2}`;
let player2 = document.querySelector(".img2");
player2.setAttribute("src", randomImgSource2);

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "Player 1 WIN🎉"
}else if(randNum2 > randNum1){
    document.querySelector("h1").innerHTML = "Player 2 WIN🎉"
}else{
    document.querySelector("h1").innerHTML = "DRAW 😒"
}