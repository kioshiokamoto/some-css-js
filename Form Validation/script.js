const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Usuario no puede estar en blanco');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Correo no puede estar en blanco');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Correo no valido');
    }else{
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Contraseña no puede estar en blanco');
    } else {
        setSuccessFor(password);
    }
    if (password2Value === '') {
        setErrorFor(password2, 'Contraseña no puede estar en blanco');
    } else if(password2Value !== passwordValue){
        setErrorFor(password2, 'Contraseñas no coinciden');
    }else{
        setSuccessFor(password2);
    }

    //Mensaje ingreso en


   
};
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Muestra mensaje error
    small.innerText = message;

    //Asigna clase
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;

    //Asigna clase
    formControl.className = 'form-control success';

}

