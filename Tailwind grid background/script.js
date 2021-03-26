const gridItems = document.querySelectorAll(".grid-background > div");

//Incrementar delay para animacion
gridItems.forEach(item => {
    //Numero aleatorio para delay
    const delay = getRandomInt(0,5);
    //Numero aleatorio para duracion de animacion
    const duration = getRandomInt(3,6);
    //Establecer
    item.style.animationDelay = `${delay}s`;
    item.style.animationDuration = `${duration}s`;
});

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

