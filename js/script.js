const num = 21;
let nomeUtente = prompt('Inserisci il tuo nome');
let cognomeUtente = prompt('Inserisci il tuo cognome');
let coloreUtente = prompt('Inserisci un colore che preferisci');

console.log(nomeUtente, cognomeUtente, coloreUtente);

document.getElementById('password').innerHTML = `${nomeUtente+cognomeUtente+coloreUtente+num}`;