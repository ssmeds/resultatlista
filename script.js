// Creating element and giving them content and appending them to body
let inputBox = document.createElement("input");
let saveButton = document.createElement("button");
let playersDisplay = document.createElement("div");

inputBox.placeholder = "Name of new Player";
saveButton.textContent = "Save";

document.body.appendChild(inputBox);
document.body.appendChild(saveButton);
document.body.appendChild(playersDisplay);

// Creating the template and the first players in the object array
let players = [{
    "playerName": "Stina",
    "score": 0
  },
  {
    "playerName": "Fredrik",
    "score": 0
  }
];

// Function for displaying the players
function printPlayers() {
  playersDisplay.innerHTML = "";
  for (let player in players) {
    playersDisplay.insertAdjacentHTML("beforeend", `<div id="${player}">${players[player].playerName} ${players[player].score} <button class="inc">+</button> <button class="dec">-</button></div>`)
  }
}

printPlayers();

// Function for adding new players
function addPlayer() {
  let newPlayer = inputBox.value;
  players.push({
    playerName: newPlayer,
    score: 0
  });
  console.log(players);
  printPlayers();
  inputBox.value = "";
}


saveButton.addEventListener("click", function () {
  addPlayer();
});

// Eventlistener for increasing or decreasing the players score 
playersDisplay.addEventListener("click", function (e) {

  let playerScore = e.target.className;
  let playerId = e.target.parentNode.id;

  if (e.target.className == "inc") {
    players[playerId].score++;
  } else if (e.target.className == "dec") {
    players[playerId].score--;
  }
  printPlayers();
})