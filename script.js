//получение значения свойства width атрибута style, string+%
let jWidth = elem.style.width;

//получение числового значения ширины прогрессбара

let counter = Number(jWidth.slice(0, -1)); //перевод в number значения width и отсечение символа %

let newWidth = '';

let button1 = $('.j-btn-1');
let button3 = $('.j-btn-3');
let button7 = $('.j-btn-7');

button1.click(function() {
	counter += 1;
	progressBar();
	checkCount();
});

button3.click(function() {
	counter += 3;
	progressBar();
	checkCount();
});

button7.click(function() {
	counter += 7;
	progressBar();
	checkCount();
});

// замена значения свойства width в атрибуте style

function progressBar() {
	newWidth = String(counter + '%');
	elem.style.width = newWidth;
}

// определение максимального значения и отключение кнопок

function checkCount () {
	if(counter <= 100) {
		$('button').prop("disabled", false);
		} else {
			$('button').prop("disabled", true);
				// если счетчик >= 100 - отключение доп.стилей
			setTimeout(stopAnimation, 200);
		}
}

// задержка остановки анимации

function stopAnimation() {
	let elBar = document.querySelector('#elem');
	elBar.classList.remove('progress-bar-animated', 'progress-bar-striped');
}