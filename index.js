const showPuzzle = () => {
	let newArr = [...Array(30)].map((x, i) => i);
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
	let seconds = 30;

	// Update the countdown every 1 second
	const timer = setInterval(function () {
		$("#rootTimer").removeClass("text-danger");
		$("#rootTimer").addClass("text-success");
		$("#rootTimer").html("0:" + seconds + "s");
		seconds--;

		// If the countdown reaches 0, stop the timer
		if (seconds < 0) {
			clearInterval(timer);
			$("#rootTimer").html("Time's up!");
			$("#rootTimer").addClass("text-danger");
		}
	}, 1000);
};

const startPuzzle = () => {
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
};
