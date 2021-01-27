//Inicializar feather icons
feather.replace();


//Obtener el input

const input = document.querySelector('input');

input.addEventListener('input', ()=>{
    //Expresiones regular
    //Reemplazar espacios
    const rxSpaces = /\s+/g;
    //Reemplazar guiones
    const rxDashes = /-+/g;
    //Reemplazar dash al inicio
    const rxDashStart = /^-/


    input.value = input.value
                    .replace(rxSpaces, '-')
                    .replace(rxDashes,'-')
                    .replace(rxDashStart,'');
})