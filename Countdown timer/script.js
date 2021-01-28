const countdown = document.getElementById('countdown');
const iniciar = document.getElementById('iniciar');
const pausa = document.getElementById('pausa');
const reiniciar = document.getElementById('reiniciar');

const botonDefecto = document.getElementById('defecto');
const botonCorto= document.getElementById('corto');
const botonLargo = document.getElementById('largo');

const defecto = 25 * 60;
const descansoCorto = 5 * 60;
const descansoLargo = 10 * 60;

let valor; // Se asigna el tiempo para el contdown
let valorReseteo = defecto;
let interval; // Contendra intervalo

function pomodoro() {
	interval = setInterval(() => {
		let minutes = Math.floor(valor / 60);
		let seconds = valor % 60;

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		countdown.innerHTML = `${minutes} : ${seconds}`;
		if (valor > 0) {
			valor--;
		}
	}, 1000);
}

botonDefecto.addEventListener('click', () => {
	countdown.innerHTML = `25 : 00`;
	valor = defecto;
	valorReseteo = defecto;
});
botonDefecto.click();

botonCorto.addEventListener('click', ()=>{
    countdown.innerHTML = `05 : 00`;
	valor = descansoCorto;
	valorReseteo = descansoCorto;
})
botonLargo.addEventListener('click', ()=>{
    countdown.innerHTML = `10 : 00`;
	valor = descansoLargo;
	valorReseteo = descansoLargo;
})

iniciar.addEventListener('click', () => {
	pomodoro();
});

pausa.addEventListener('click', () => {
	clearInterval(interval);
});

reiniciar.addEventListener('click', () => {
	valor = valorReseteo;
    clearInterval(interval);
    
	let minutes = Math.floor(valor / 60);
	let seconds = valor % 60;

	minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
	countdown.innerHTML = `${minutes} : ${seconds}`;
});
