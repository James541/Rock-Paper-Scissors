

const yourChoice = document.getElementById("yourChoice");
const oppChoice = document.getElementById("oppChoice");
const theResult = document.getElementById("theResult");

let oppPick = Math.floor(Math.random() * 31);





function rock() {
    let playersResult = "rock"
    let oppResult = " "
yourChoice.innerText = "You Choose:";
yourChoice.innerText += " ROCK!";
oppChoice.innerText = "Opponent Chooses:";
let oppPick = Math.floor(Math.random() * 3 + 1);
if (oppPick === 1) {
    oppChoice.innerText += " ROCK!"
    oppResult = "rock"
} else if (oppPick === 2) {
    oppChoice.innerText += " PAPER!"
    oppResult = "paper"
} else {
    oppChoice.innerText += " SCISSORS!"
    oppResult = "scissors"
}

if (oppResult === "rock" ){
    theResult.innerText = "Result:"
    theResult.innerText += " Draw!"
} else if (oppResult === "paper"){
    theResult.innerText = "Result:"
    theResult.innerText += " You Lose!"
    } else {
        theResult.innerText = "Result:"
        theResult.innerText += " You WIN!" 
    }



    }

function paper() {
    let playersResult = "paper"
    let oppResult = " "
    yourChoice.innerText = "You Choose:";
    yourChoice.innerText += " PAPER!";
    oppChoice.innerText = "Opponent Chooses:";
let oppPick = Math.floor(Math.random() * 3 + 1);
if (oppPick === 1) {
    oppChoice.innerText += " ROCK!"
    oppResult = "rock"
} else if (oppPick === 2) {
    oppChoice.innerText += " PAPER!"
    oppResult = "paper"
} else {
    oppChoice.innerText += " SCISSORS!"
    oppResult = "scissors"
}

if (oppResult === "rock" ){
    theResult.innerText = "Result:"
    theResult.innerText += " You WIN!"
} else if (oppResult === "paper"){
    theResult.innerText = "Result:"
    theResult.innerText += " Draw!"
    } else {
        theResult.innerText = "Result:"
        theResult.innerText += " You Lose!" 
    }
    }

function scissors() {
    let playersResult = "scissors"
    let oppResult = " "
    yourChoice.innerText = "You Choose:";
    yourChoice.innerText += " SCISSORS!";
    oppChoice.innerText = "Opponent Chooses:";
let oppPick = Math.floor(Math.random() * 3 + 1);
if (oppPick === 1) {
    oppChoice.innerText += " ROCK!"
    oppResult = "rock"
} else if (oppPick === 2) {
    oppChoice.innerText += " PAPER!"
    oppResult = "paper"
} else {
    oppChoice.innerText += " SCISSORS!"
    oppResult = "scissors"
}

if (oppResult === "rock" ){
    theResult.innerText = "Result:"
    theResult.innerText += " You Lose!"
} else if (oppResult === "paper"){
    theResult.innerText = "Result:"
    theResult.innerText += " You WIN!"
    } else {
        theResult.innerText = "Result:"
        theResult.innerText += " Draw!" 
    }
    
    }
    