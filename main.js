/*

Il programma dovrà chiedere all'utente 
    - il numero di chilometri che vuole percorrere 
    - l'età del passeggero.

Sulla base di queste informazioni 
    -  dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60



*/
console.log("hi");
//chiedere all'utente num chilometri che vuole percorrere e l'età del passeggero
const numChilometri = prompt('Quanti chilometri vuoi percorrere?'); //memorizzo num chilometri
const etaPasseggero = prompt('mi dici l eta del passeggero?'); //memorizzo eta

console.log(numChilometri);
console.log(etaPasseggero);

//memorizzo il prezzo base del biglietto e inizializzo la variabile prezzoBigliettoScontato a 0
let prezzoBigliettoBase = numChilometri * 0.21;
let prezzoBigliettoScontato = 0;

// controllo età passeggero
if (etaPasseggero < 18){
    let scontoMinorenni = 20 / 100 * prezzoBigliettoBase;
    console.log (prezzoBigliettoBase - scontoMinorenni);
    prezzoBigliettoScontato = prezzoBigliettoBase - scontoMinorenni;
    document.getElementById("prezzo").innerHTML = "Il prezzo del tuo biglietto è " + prezzoBigliettoScontato;
} else if (etaPasseggero > 65){
    let scontoOver65 = 40 / 100 * prezzoBigliettoBase;
    console.log (prezzoBigliettoBase - scontoOver65);
    prezzoBigliettoScontato = prezzoBigliettoBase - scontoOver65;
    document.getElementById("prezzo").innerHTML = "Il prezzo del tuo biglietto è " + prezzoBigliettoScontato;
} else {
    console.log (prezzoBigliettoBase);
    document.getElementById("prezzo").innerHTML = "Il prezzo del tuo biglietto è " + prezzoBigliettoBase;

}
