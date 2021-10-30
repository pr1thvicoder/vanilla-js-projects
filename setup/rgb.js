const btn = document.querySelector('#btn');
const displayColor = document.querySelector('.color');

function makeRGB() {
	let r = Math.floor(Math.random() * 225);
	let g = Math.floor(Math.random() * 225);
	let b = Math.floor(Math.random() * 225);
	return `rgb(${r},${g},${b})`;
}

btn.addEventListener('click', () => {
	let rgbval = makeRGB();
	displayColor.textContent = rgbval;
	document.body.style.backgroundColor = rgbval;
});
