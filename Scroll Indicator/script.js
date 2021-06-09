window.addEventListener('scroll', () => indicateScrollBar());

function indicateScrollBar() {
	const winScroll = document.body.scrollTop || document.documentElement.scrollTop;  //Actia;
    
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //Total
    
	const scrolled = (winScroll / height) * 100;
	document.querySelector('.scroll-bar').style.width = `${scrolled}%`;
}
