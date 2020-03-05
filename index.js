const order = document.querySelector('.order');
let hide = document.querySelector('.flavours');
let options = document.querySelectorAll('.option');
let candyImg = document.querySelector('.candy-img');

let toggleOptions = (e) => {
	e.preventDefault();
	if (hide.style.visibility === 'visible') {
		hide.style.visibility = 'hidden';
	} else {
		hide.style.visibility = 'visible';
	}
};
order.addEventListener('click', toggleOptions);

options.forEach((option, i) => {
	options[i].addEventListener('click', (e) => {
		e.preventDefault();

		if (options[i].className === 'option cho') {
			candyImg.src = '/images/01.jpg';
		}
		if (options[i].className === 'option mel') {
			candyImg.src = '/images/02.jpg';
		}
		if (options[i].className === 'option roy') {
			candyImg.src = '/images/03.jpg';
		}
		if (options[i].className === 'option swe') {
			candyImg.src = '/images/04.jpg';
		}
	});
});
