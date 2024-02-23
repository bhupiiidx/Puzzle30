let timer = null;
let interval = 1000;
let seconds = 30;

const showPuzzle = () => {
	let newArr = [...Array(30)].map((x, i) => i + 1);
	let puzzeledArray = [];
	for (let i = 0; i < 30; i++) {
		let index = Math.floor(Math.random() * newArr.length);
		puzzeledArray.push(newArr[index]);
		newArr.splice(index, 1);
	}
	let rootLitral = "";
	for (let i = 0; i < 5; i++) {
		rootLitral += `<ul class="list-group">`;
		for (let j = i * 5; j < i * 5 + 5; j++) {
			rootLitral += `<li class="list-group-item">${puzzeledArray[j]}</li>`;
		}
		rootLitral += `</ul>`;
	}
	$("#rootPuzzle").html(rootLitral);
	rootPuzzle.innerHTML = rootLitral;
};
const startTimer = () => {
	// Update the countdown every 1 second
	let sec = seconds;
	timer = setInterval(function () {
		$("#rootTimer").html("0:" + sec + "s");
		sec--;

		// If the countdown reaches 0, stop the timer
		if (sec < 0) {
			clearInterval(timer);
			$("#rootTimer").html("Time's up!");
			$("#rootTimer").addClass("text-danger");
		}
	}, interval);
};

const startPuzzle = () => {
	$("#rootTimer").addClass("text-success").removeClass("text-danger").html("Starting Timer...");
	$("#start").addClass("d-none");
	$("#stop").removeClass("d-none");
	showPuzzle();
	startTimer();
	$("#wrapper").removeClass("d-none");
};
const stopPuzzle = () => {
	$("#stop").addClass("d-none");
	$("#start").removeClass("d-none");
	$("#wrapper").addClass("d-none");
	clearInterval(timer);
	timer = null;
};
