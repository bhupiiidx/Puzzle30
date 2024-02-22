const root = document.getElementById("root");
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

root.innerHTML = rootLitral;

console.log("puzzeledArray", puzzeledArray);
