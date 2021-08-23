let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let schizers = document.getElementById("schizer");
let playerChoice = document.getElementById("player-choice");
let compChoice = document.getElementById("computer-choice");
let player1 = document.querySelector(".player-1");
let player2 = document.querySelector(".player-2");
let message = document.getElementById("message");
let reset = document.getElementById("reset");
let options = document.getElementById("options");

function restart() {}

rock.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * 3) + 1;
  playerChoice.src = "images/rpc3.png";
  compChoice.src = `images/rpc${rand}.png`;
  if (rand == 3) {
    message.innerText = "Tie";
  } else if (rand == 2) {
    message.innerText = "You Lost 🏳️";
  } else if (rand == 1) {
    message.innerText = "You Win 🏅";
  }
  reset.classList.remove("hidden");
  options.classList.toggle("hidden");
});

paper.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * 3) + 1;
  playerChoice.src = "images/rpc2.png";
  compChoice.src = `images/rpc${rand}.png`;
  if (rand == 2) {
    message.innerText = "Tie";
  } else if (rand == 1) {
    message.innerText = "You Lost 🏳️";
  } else if (rand == 3) {
    message.innerText = "You Win 🏅";
  }
  reset.classList.remove("hidden");
  options.classList.toggle("hidden");
});

schizers.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * 3) + 1;
  playerChoice.src = "images/rpc1.png";
  compChoice.src = `images/rpc${rand}.png`;
  if (rand == 1) {
    message.innerText = "Tie";
  } else if (rand == 3) {
    message.innerText = "You Lost 🏳️";
  } else if (rand == 2) {
    message.innerText = "You Win 🏅";
  }
  reset.classList.remove("hidden");
  options.classList.toggle("hidden");
});

reset.addEventListener("click", () => {
  playerChoice.src = "";
  compChoice.src = "";
  message.innerText = "Rock Paper Scissors";
  reset.classList.add("hidden");
  options.classList.toggle("hidden");
});
