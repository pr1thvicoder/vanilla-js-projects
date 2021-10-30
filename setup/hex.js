const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];

const btn = document.querySelector('#btn');
let displayColor = document.querySelector('.color');

function makeRandomNum() {
	return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', () => {
	let hexColor = '#';

	for (let i = 0; i < 6; i++) {
		let randomNum = makeRandomNum();
		hexColor += hex[randomNum];
	}
	displayColor.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});
