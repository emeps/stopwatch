function getTime(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR', {hour12:false, timeZone:'GMT'});
}
const relogio = document.querySelector('.relogio');
// const iniciar = document.querySelector('.iniciar');
// const pausar = document.querySelector('.pausar');
// const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;
function startTime(){
        timer =  setInterval(function() {
        segundos++;
        relogio.innerHTML = getTime(segundos); 
    }, 1000);
}
document.addEventListener('click', function(e){
    const el = e.target; // Elemento que esta sendo clicado
    if(el.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        console.log('Zerou');
    }
    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startTime();
        console.log('Funciona');

    }
    if(el.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
        console.log('pausou');
    }
})
// iniciar.addEventListener('click', function(event){
//     relogio.classList.remove('pausado');
//     clearInterval(timer);
//     startTime();
//     console.log('Funciona');

// });
// pausar.addEventListener('click', function(event){
//     relogio.classList.add('pausado');
//     clearInterval(timer);
//     console.log('pausou');
// });
// zerar.addEventListener('click', function(event){
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
//     console.log('Zerou');
    
// });