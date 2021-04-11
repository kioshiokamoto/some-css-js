var cartButtons = document.querySelectorAll('.cart-button');
var card_value = document.querySelector('.added');
var pqtplus = document.querySelector('.pqt-plus');
var pqtminus = document.querySelector('.pqt-minus');
var cartvalue = 0;

cartButtons.forEach((button) => {
	button.addEventListener('click', cartClick);
});
function cartClick() {
	let button = this;
	button.classList.add('clicked');
	card_value.textContent = cartvalue += 1;
}

pqtplus.addEventListener('click', function () {
	if (card_value.nodeValue <= 0) {
		card_value.textContent = cartvalue += 1;
	}
});

pqtminus.addEventListener('click', function () {
	if (Number(card_value.innerText) - 1 >= 0) {
		card_value.textContent = cartvalue -= 1;
	}
});
