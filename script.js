const container = document.querySelector('.container');
const btnRegistro = document.querySelector('.aba-registro');
const btnEntrar = document.querySelector('.aba-entrar');

btnEntrar.addEventListener('click', ()=>{
    container.classList.add('active');
});

btnRegistro.addEventListener('click', ()=>{
    container.classList.remove('active');
});