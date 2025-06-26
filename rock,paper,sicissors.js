let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");//access all choices element from html//
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];// connect the three strings with math.randon *3 the value will come in between 123//
  const randIdx = Math.floor(Math.random() * 3);// for generating random number use math.random pre-define function// with the help of math.floor then value will generate in number rather then decimal value//
  return options[randIdx]; // the return function will print the randIdx output//
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) { // if use and com output are same then will print draw // 
    //Draw Game
    drawGame();
  } else { // if game is not draw then down blow logic will applay//
    let userWin = true;// true mens we assume we win the game//
    if (userChoice === "rock") { // comp choice cannot be rock if it is then  will print draw//
      //scissors, paper
      userWin = compChoice === "paper" ? false : true; // if comp chose paper then comp will win and user will lose then userwin will return false// if comp choice is scissors then use will win then userwin will remain true //
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true; // if comp chose scissors then user will lose userwin value will set false// if comp will chose rock then user will win and userwin value will set true //
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});