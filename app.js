let horas = 0
let minutos = 0
let segundos = 0
let milisegundos = 1000

let intervalo;
let emProcesso = false;
const timeText = document.querySelector('h1')

function start() {
    if(!emProcesso) {
        intervalo = setInterval(update, milisegundos)
        emProcesso = true
    }
}

function pause() {
    clearInterval(intervalo)
    emProcesso = false
}

function reset() {
    segundos = 0
    minutos = 0
    horas = 0

    timeText.innerHTML = "00:00:00"
}

function update() {
    segundos++

    if(segundos == 59) {
        segundos = 0
        minutos++
    }
    if(minutos == 59) {
        minutos = 0
        horas++
    }

    timeText.innerHTML = `${format(horas)}:${format(minutos)}:${format(segundos)}`
}

function format(time) {
    return time > 10 ? time : `0${time}`
}