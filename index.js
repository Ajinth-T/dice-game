let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🥳"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🥳"
} 
else{
    document.querySelector("h1").innerHTML = "Its a Draw!😮"
}

let refreshBtn = document.querySelector(".playBtn");

function handleClick() {
    let audio = new Audio("sounds/diceRoll.mp3");
    audio.play();
    audio.addEventListener("ended", function() {
        window.location.reload();
    });
    
}

refreshBtn.addEventListener("click", handleClick);


