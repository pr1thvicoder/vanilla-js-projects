const colors = [ 'green', 'red', 'rgba(133,122,200)', '#f15025' ];
const btn = document.querySelector('#btn');
let displayColor = document.querySelector('.color');

function makeRandomNum() {
	return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', () => {
	const randomNum = makeRandomNum();
	document.body.style.backgroundColor = colors[randomNum];
	displayColor.textContent = colors[randomNum];
});
