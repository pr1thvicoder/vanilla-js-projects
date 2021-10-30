// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.links');

toggle.addEventListener('click', () => {
	// if (!menu.classList.contains('show-links')) {
	// 	menu.classList.add('show-links');
	// } else {
	// 	menu.classList.remove('show-links');
	// }
	menu.classList.toggle('show-links');
});
