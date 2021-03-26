const button = document.querySelector('.nav-toggler');
const navBar = document.getElementById('navigation');

button.addEventListener('click', ()=>{
    navBar.classList.toggle('hidden');
})