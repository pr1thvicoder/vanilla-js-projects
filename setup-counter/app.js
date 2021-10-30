let value = document.querySelector('#value');
// const decreaseBtn = document.querySelector('.decrease');
// const resetBtn = document.querySelector('.reset');
// const increaseBtn = document.querySelector('.increase');
const btns = document.querySelectorAll('.btn');
let counter = 0;

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const styles = e.currentTarget.classList;
		if (styles.contains('decrease')) {
			counter--;
		} else if (styles.contains('increase')) {
			counter++;
		} else {
			counter = 0;
		}

		//add colors
		if (counter > 0) {
			value.style.color = 'green';
		} else if (counter < 0) {
			value.style.color = 'red';
		} else if (counter === 0) {
			value.style.color = 'black';
		}
		value.textContent = counter;
	});
});

// increaseBtn.addEventListener('click', () => {
// 	counter++;
// 	value.textContent = counter;
// 	if (counter > 0) {
// 		// value.classList.add('greater');
// 		// value.classList.remove('lesser');
// 		value.style.color = 'green';
// 	}
// });

// decreaseBtn.addEventListener('click', () => {
// 	counter--;
// 	value.textContent = counter;
// 	if (counter < 0) {
// 		// value.classList.remove('greater');
// 		// value.classList.add('lesser');
// 	}
// });

// resetBtn.addEventListener('click', () => {
// 	counter = 0;
// 	value.textContent = counter;
// 	// value.classList.remove('greater');
// 	// value.classList.remove('lesser');
// });
