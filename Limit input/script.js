const input = document.querySelector('form input'),
	counter = document.querySelector('form .counter'),
	maxLength = input.getAttribute('maxlength');

input.onkeyup = () => {
	counter.innerText = maxLength - input.value.length;
};
