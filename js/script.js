const num = 21;
let nomeUtente = prompt('Inserisci il tuo nome');
nomeUtente = nomeUtente.replace(/ /g, "");
let cognomeUtente = prompt('Inserisci il tuo cognome');
cognomeUtente = cognomeUtente.replace(/ /g, "");
let coloreUtente = prompt('Inserisci un colore che preferisci');
coloreUtente = coloreUtente.replace(/ /g, "");

if (nomeUtente && cognomeUtente && coloreUtente) {
    document.getElementById('password').innerHTML = `${nomeUtente+cognomeUtente+coloreUtente+num}`;
    console.log(nomeUtente, cognomeUtente, coloreUtente);
} 

else{
    document.getElementById('password').innerHTML = `<h2>NON FARE IL FURBO CON ME INSERISCI VALORI VALIDI!!!</h2>`;
}





