
function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  

let numeroCasuale = generaNumeroCasuale(1, 99);
console.log(numeroCasuale);

let nomeUtente = prompt('Inserisci il tuo nome');
nomeUtente = nomeUtente.replace(/ /g, "");
let cognomeUtente = prompt('Inserisci il tuo cognome');
cognomeUtente = cognomeUtente.replace(/ /g, "");
let coloreUtente = prompt('Inserisci un colore che preferisci');
coloreUtente = coloreUtente.replace(/ /g, "");

if (nomeUtente && cognomeUtente && coloreUtente) {
    document.getElementById('password').innerHTML = `${nomeUtente+cognomeUtente+coloreUtente+numeroCasuale}`;
    console.log(nomeUtente, cognomeUtente, coloreUtente, numeroCasuale);
} 

else{
    document.getElementById('password').innerHTML = `<h2>NON FARE IL FURBO CON ME INSERISCI VALORI VALIDI!!!</h2>`;
}





