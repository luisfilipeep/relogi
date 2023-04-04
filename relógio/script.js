function clock () {
const areaDoRelogio = document.querySelector(".relogio");
const horaAgora = new Date ();
const horas = horaAgora.getHours ();
const minutes = horaAgora.getMinutes ();
const seconds = horaAgora.getSeconds ();
const formatoHoras = horas.toString ().padStart (2, "0"); 
const formatoMinutes = minutes.toString ().padStart (2, "0");
const formatoSeconds = seconds.toString ().padStart (2, "0");

areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutes}:${formatoSeconds}` 


} 

setInterval(clock, 1000)
