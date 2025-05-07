const choHanGame = document.getElementById("gameButtonChoHan");
const choHanStyleSheet = document.getElementById("choHanStyleSheet");
let activeGame = "";

function currentGame(x) {
	activeGame = x;
	if (activeGame == "choHan") {
		choHanGame.style.backgroundColor = "#444444";
		console.log("current game: " + activeGame);
	}
}

function selectGame(id) {}
