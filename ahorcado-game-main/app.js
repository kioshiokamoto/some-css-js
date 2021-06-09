const form = document.querySelector('.form');
const valueiInput = document.querySelector('#input-letra');

let divAhorcado = document.querySelector('.ahorcado-img');

const vector = ["MARIPOSA" , "GOKU", "CHIKISTRIKIS","ASISEHACE",
                "PAPAGAYO", "CELULAR", "CARGADOR","TRIPODE",
                "EEG","UNIVERSIDAD", "CODIGO", "JAVASCRIPT",
                "CBAZCODE"];

//Variables globales
let palabraEnJuego;
let letra;
let comenzamos;
let indiceRandom;

//Vector
let vectorLetrasEncontradas = [];


//Banderas
let estaJugado = false;
let encontrado =false;
let primeraVez = true;

//Contadores
let contadorFallos = 0;
let contadorLetrasMostradas = 0;





const generarPalabra = () =>{
      indiceRandom = obtenerNumeroRandom(0,(vector.length-1));
      console.log(indiceRandom);
      palabraEnJuego = vector[indiceRandom];
      estaJugado = true;
      creadorLetras(palabraEnJuego);
}

const obtenerNumeroRandom= (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min;
}

const creadorLetras = (palabra) => {
    console.log("creando ...",palabra);
    const contenedorPrincipal = document.querySelector('.contenedor-principal');
    const contenedorPalabra = document.querySelector('.contenedor-palabra');

    let contenedorTamano = document.createElement("div");
    contenedorTamano.classList.add('title');
    contenedorTamano.innerHTML = `El tamaño de la palabra es ${palabra.length}`
    contenedorPrincipal.insertBefore(contenedorTamano, contenedorPalabra);

    for(i = 0; i < palabra.length; i++){
        let contenedorLetraGuion = document.createElement("div");      
        let contenedorLetra = document.createElement("div");
        let contenedorGuion = document.createElement("div");

        contenedorLetra.classList.add('letra');
        contenedorGuion.classList.add('guion');
        contenedorLetraGuion.classList.add('letra-guion');
        
        contenedorLetra.innerHTML = palabra[i];
        
       
        contenedorLetraGuion.appendChild(contenedorLetra);
        contenedorLetraGuion.appendChild(contenedorGuion);

        contenedorPalabra.appendChild(contenedorLetraGuion);
        
    }
}

generarPalabra();

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    letra = obtenerLetra(); 
    
    if(letra){
            actualizarVisibilidad(letra);
        if(!encontrado ){        
            contadorFallos++;
            moverBackground();
            verificarJuegoPerdido();
        }else{
            verificarJuegoGanado();
            console.log('letras encontradas:', contadorLetrasMostradas);
        }
    }else{
        console.log('No se pudo actualizar visibilidad');   
    }
    
})




const obtenerLetra = () =>{
    if(valueiInput.value.length === 1 ){

        const letra = valueiInput.value; 
        valueiInput.value = "";
        
        return letra.toUpperCase();
    
    }else{
        //alert con el siguente mensaje 
        Swal.fire({
            title: 'Ooops...',
            text: "Debes ingresar solo un caracter",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!'
          })
          valueiInput.value = "";
        return "";
    } 
}

const letraRepetida = () => {
    let repeticion = false;
    if(vectorLetrasEncontradas.length === 0){
        repeticion = false;
    }
    else{
        vectorLetrasEncontradas.forEach(element => {
            if(element === letra){
                encontrado = true;
                repeticion = true;
            }else{
                // if(!repeticion){
                //     repeticion = false;
                // }
                !repeticion && (repeticion = false);
            }
        });
    }
    return repeticion;
}

const actualizarVisibilidad = (letra) => {
    //agregar clase activate para mostrar visibilidad de la letra
    const vectorL = document.querySelectorAll('.letra');
    let pushear = false;
    encontrado = false;
    if(!letraRepetida()){
        for(i = 0; i < palabraEnJuego.length ; i++){        
            if(vectorL[i].innerHTML === letra ){
                vectorL[i].classList.add('activate');

                //bandera para pushear al vectorLetrasEncontradas
                pushear = true;
                contadorLetrasMostradas++;          
                encontrado = true;
            }
            
        }
        
        if(pushear){            
            vectorLetrasEncontradas.push(letra);
        }
     }
    else{
        Swal.fire({
            title: 'Ooops...',
            text: "Letra repetida",
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!'
          })
    }
}

const moverBackground = () => {
    divAhorcado.style.backgroundPosition = `-${199*contadorFallos}px 0`
}

const mostrarPalabra = () => {
    const vectorL = document.querySelectorAll('.letra');
    for(i = 0; i < palabraEnJuego.length ; i++){        
    
           vectorL[i].classList.add('activate');
        
    }
}

let btnSubmit = document.querySelector('.btn-submit');
let btnReinicio = document.querySelector('.reinicio');

const verificarJuegoPerdido = () => {
    if(contadorFallos === 4 ){
        //alert con el siguente mensaje
        Swal.fire({
            title: 'Perdiste !',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!'
          })
        btnSubmit.style.display = 'none';
        btnReinicio.style.display = 'inline';
        valueiInput.setAttribute('disabled','');
        mostrarPalabra();
    }
}


const verificarJuegoGanado = () => {
    if(contadorLetrasMostradas === palabraEnJuego.length){
        //alert con el siguente mensaje
        Swal.fire({
            title: 'Ganaste !',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok!'
        })
        console.log('Ganaste');
        btnSubmit.style.display = 'none';
        btnReinicio.style.display = 'inline';
        valueiInput.setAttribute('disabled','');
        
    }
}

btnReinicio.addEventListener('click', ()=>{
    window.location.reload();
})