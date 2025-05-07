let dieLeftAmount, dieRightAmount, dieResult;
const choHanResult = document.getElementById("choHanResult"),
	choHanWinOrLose = document.getElementById("choHanWinOrLose"),
	choHanChoiceCho = document.getElementById("choHanChoiceCho"),
	choHanChoiceHan = document.getElementById("choHanChoiceHan"),
	dieLeft = document.getElementById("dieLeft"),
	dieRight = document.getElementById("dieRight");

function choHanButtonEnable() {
	if (hasBetBeenPlaced == true) {
		choHanChoiceCho.disabled = false;
		choHanChoiceHan.disabled = false;
		choHanChoiceCho.style.backgroundColor = "#121212";
		choHanChoiceHan.style.backgroundColor = "#121212";
	} else if (hasBetBeenPlaced == false) {
		choHanChoiceCho.disabled = true;
		choHanChoiceHan.disabled = true;
		choHanChoiceCho.style.backgroundColor = "#444444";
		choHanChoiceHan.style.backgroundColor = "#444444";
	}
}

function rollDie(id) {
	dieLeftAmount = Math.round(Math.random() * (1 - 6) + 6);
	dieRightAmount = Math.round(Math.random() * (1 - 6) + 6);
	dieResult = dieLeftAmount + dieRightAmount;
	document.getElementById("dieResult").innerText = dieResult;
	dieLeft.src = `/Pngs/die${dieLeftAmount}.png`;
	dieRight.src = `/Pngs/die${dieRightAmount}.png`;
	choHanGameResult(dieResult, id);
	lockGame();
	lockBet();
}

function choHanGameResult(dieResult, id) {
	if (dieResult % 2 == 0) {
		choHanResult.innerText = "Cho";
	} else {
		choHanResult.innerText = "Han";
	}

	if (id == "choHanChoiceCho") {
		if (choHanResult.innerText == "Cho") {
			choHanWinOrLose.innerText = "Winner";
			playerMoney += currentBet * 2;
			document.getElementById("playerMoney").innerText = "$" + playerMoney;
		} else {
			choHanWinOrLose.innerText = "Loser";
		}
	}
	if (id == "choHanChoiceHan") {
		if (choHanResult.innerText == "Han") {
			choHanWinOrLose.innerText = "Winner";
			playerMoney += currentBet * 2;
			document.getElementById("playerMoney").innerText = "$" + playerMoney;
		} else {
			choHanWinOrLose.innerText = "Loser";
		}
	}
}

function lockGame() {
	choHanChoiceCho.disabled = true;
	choHanChoiceHan.disabled = true;
	choHanChoiceCho.style.backgroundColor = "#444444";
	choHanChoiceHan.style.backgroundColor = "#444444";
}
