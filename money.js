let playerMoney = 1000;
let betAmount;
const placeBetButton = document.getElementById("placeBetButton");
const placeBetInput = document.getElementById("betAmount");
let currentBet;
let hasBetBeenPlaced = false;

document.getElementById("playerMoney").innerText = "$" + playerMoney;

function placeBet() {
	betAmount = document.getElementById("betAmount").value;
	if (betAmount <= playerMoney && betAmount > 0) {
		playerMoney -= betAmount;
		document.getElementById("playerMoney").innerText = "$" + playerMoney;
		lockBet();
		currentBet = betAmount;
		hasBetBeenPlaced = true;
		choHanButtonEnable();
	} else {
		betAmount = 0;
		document.getElementById("betAmount").value = "";
	}
}

function lockBet() {
	if (placeBetButton.disabled == false) {
		placeBetButton.disabled = true;
		placeBetButton.style.backgroundColor = "lightcoral";
		placeBetInput.disabled = true;
		placeBetInput.style.color = "grey";
	} else if (placeBetButton.disabled == true) {
		placeBetButton.disabled = false;
		placeBetButton.style.backgroundColor = "red";
		placeBetInput.disabled = false;
		placeBetInput.style.color = "white";
	}
}

function betAmountButtons(id) {
	betAmount = document.getElementById("betAmount").value;
	console.log(betAmount);
	if (id == "betButtonHalf") {
		betAmount = Math.floor(betAmount / 2);
		document.getElementById("betAmount").value = betAmount;
		console.log("half");
	} else if (id == "betButtonDouble") {
		betAmount = Math.floor(betAmount * 2);
		document.getElementById("betAmount").value = betAmount;
		console.log("double");
	} else if (id == "betButtonMax") {
		betAmount = playerMoney;
		document.getElementById("betAmount").value = betAmount;
		console.log("max");
	}
	console.log(betAmount);
}
