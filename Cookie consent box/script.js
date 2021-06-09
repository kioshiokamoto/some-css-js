const cookieBox = document.querySelector('.wrapper'),
	acceptBtn = cookieBox.querySelector('button');

acceptBtn.onclick = () => {
    //Se establece cookie por 1 dia.
	document.cookie = 'UsandoCookies=KioshiTest; max-age=' + 60 * 60 * 24 * 1;
	if (document.cookie) {
        //si ya existe cookie
		cookieBox.classList.add('hide'); //hide cookie box
	} else {
		//if cookie not set then alert an error
		alert("¡No se puede configurar la cookie! Desbloquee este sitio de la configuración de cookies de su navegador.");
	}
};
let checkCookie = document.cookie.indexOf('UsandoCookies=KioshiTest'); //Verificar si ya existe cookie!
//SI ya existe cookie se oculta mensaje caso contrario mostrara notificacion
checkCookie != -1 ? cookieBox.classList.add('hide') : cookieBox.classList.remove('hide');
