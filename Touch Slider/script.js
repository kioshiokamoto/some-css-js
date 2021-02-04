const slider = document.querySelector('.slider-container'),
	slides = Array.from(document.querySelectorAll('.slide'));

let isDragging = false,
	startPos = 0,
	currentTranslate = 0,
	previTranslate = 0,
	animationId = 0,
	currentIndex = 0;

slides.forEach((slide, index) => {
	const slideImage = slide.querySelector('img');
	slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	slide.addEventListener('touchstart', touchStart(index));
	slide.addEventListener('touchend', touchEnd);
	slide.addEventListener('touchmove', touchMove);

	//Mouse events
	slide.addEventListener('mousedown', touchStart(index));
	slide.addEventListener('mouseup', touchEnd);
	slide.addEventListener('mouseleave', touchEnd);
	slide.addEventListener('mousemove', touchMove);
});
//Deshabilitar context menu
window.oncontextmenu = function (event) {
	event.preventDefault();
	event.stopPropagation();
	return false;
};

function touchStart(index) {
	return function (event) {
		currentIndex = index;
		startPos = getPositionX(event);
        isDragging = true;
        
        animationId = requestAnimationFrame(animation);
        slider.classList.add('grabbing');
	};
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationId);

    const movedBy  = currentTranslate - previTranslate;
    if(movedBy < -100 && currentIndex <slides.length - 1){
        currentIndex++;
    }
    if(movedBy > 100 && currentIndex > 0){
        currentIndex--;
    }
    setPositionByIndex();

    slider.classList.remove('grabbing')
}
function touchMove(event) {
	if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = previTranslate + currentPosition - startPos;
	}
}

function getPositionX(event){
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}
function animation(){
    setSliderPosition()
    if(isDragging) requestAnimationFrame(animation)
}
function setSliderPosition(){
    slider.style.transform = `translateX(${currentTranslate}px)`
}
function setPositionByIndex(){
    currentTranslate = currentIndex * -window.innerWidth;
    previTranslate = currentTranslate;
    setSliderPosition();
}