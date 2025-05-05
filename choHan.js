let dieLeft, dieRight, dieResult;
const choHanResult = document.getElementById("choHanResult"),
	choHanWinOrLose = document.getElementById("choHanWinOrLose");

function rollDie(id) {
	dieLeft = Math.round(Math.random() * (1 - 6) + 6);
	dieRight = Math.round(Math.random() * (1 - 6) + 6);
	dieResult = dieLeft + dieRight;
	document.getElementById("dieResult").innerText = dieResult;
	dieImage(dieLeft, dieRight);
	choHanGameResult(dieResult, id);
}

function dieImage(dieLeft, dieRight) {
	document.getElementById("dieLeft").src = `/Pngs/die${dieLeft}.png`;
	document.getElementById("dieRight").src = `/Pngs/die${dieRight}.png`;
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
		} else {
			choHanWinOrLose.innerText = "Loser";
		}
	}
	if (id == "choHanChoiceHan") {
		if (choHanResult.innerText == "Han") {
			choHanWinOrLose.innerText = "Winner";
		} else {
			choHanWinOrLose.innerText = "Loser";
		}
	}
}
