const viewBtn = document.querySelector('.view-modal'),
	popup = document.querySelector('.popup'),
	close = popup.querySelector('.close'),
	field = popup.querySelector('.field'),
	input = field.querySelector('input'),
	copy = field.querySelector('button');

viewBtn.onclick = () => {
	popup.classList.toggle('show');
};
close.onclick = () => {
	viewBtn.click();
};

copy.onclick = () => {
	input.select();
	if (document.execCommand('copy')) {
        //Cuando se copie
		field.classList.add('active');
		copy.innerText = 'Copiado';
		setTimeout(() => {
			window.getSelection().removeAllRanges(); //remove selection from document
			field.classList.remove('active');
			copy.innerText = 'Copiar';
		}, 3000);
	}
};
