/*
Descrizione
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati

In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.

Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


fatto 1- BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50

fatto 2- oppure gestisco qualche caso limite (es.: se utente non inserisce numeri?.. etc.)

3- arricchisco un pò la mia interazione/layout
*/

// Variabili usate in tutto il codice
var exit;

/*
CHIEDO IL LIVELLO DI DIFFICOLTA'
*/

exit = false;
var difficolta;
do {
  difficolta = prompt("Inserisci la difficolta 0: facile; 1: media; 2: difficile");
  if (difficolta == "0" || difficolta == "1" || difficolta == "2") {
   exit = true;
 } else {
   console.log("Inserisci la difficoltà correttamente");
 }
} while (exit != true);

if (difficolta == "0") {
  difficolta = 100;
} else if (difficolta == "1") {
  difficolta = 80;
} else if (difficolta == "2") {
  difficolta = 50;
}

/*
GENERO LE BOMBE.
16 numeri casuali diversi. li metto dentro un vettore.
*/
var bombe = [];
var numeroCasuale;

for (var i = 0; i < 16; i++) {
  // controllo se la bomba è già stata inserita
  exit = false;
  do {
    numeroCasuale = randomNumber(difficolta);
    // console.log(numeroCasuale);
    // se numero non presente
    if (bombe.indexOf(numeroCasuale) === -1) {
      bombe.push(numeroCasuale);
      exit = true;
    } else {
      // console.log("numero già ripetuto: ", numeroCasuale);
    }
  } while (exit != true);

}

console.log("bombe:", bombe);

/*
L'UTENTE TENTA LA FORTUNA.
per 100, 80 o 50 volte a seconda della difficoltà, chiedo all'utente di inserire x volte un numero casuale.
Default caso 100:
*/

// Ciclo per 100-16 volte
var punteggio = 0;
var numeroInseritoUtente;
var numeriGiaInseriti = [];
var numeroDiGiri = difficolta - 16;
i=0;
for (var i = 0; i < numeroDiGiri; i++) {

  // 1-Utente inserisce numero.
  // 2-Se numero non è presente nella lista numeri inseriti, lo inserisce e va avanti.
  exit = false;

  do {
    numeroInseritoUtente = parseInt(prompt("Inserisci un numero da 1 a...", difficolta));

    // BONUS: controllo che il numero inserito sia valido (nel range giusto e che sia un numero)

    if (numeriGiaInseriti.indexOf(numeroInseritoUtente) === -1 && numeroInseritoUtente > 0 && numeroInseritoUtente <= difficolta) {
      console.log("Numero inserito:", numeroInseritoUtente);
      numeriGiaInseriti.push(numeroInseritoUtente);
      exit = true;
    } else {
      console.log("Hai già inserito questo numero oppure numero non valido.");
    }
  } while (exit != true);

  // 3-Se numero è uguale a un numero bomba, esce dal ciclo.
  if (bombe.indexOf(numeroInseritoUtente) !== -1) {
    console.log("Sei esploso!");
    i = numeroDiGiri;
  // incremento il punteggio
  } else {
    punteggio++;
  }
}

// 4-Stampo il punteggio così scritto: punteggio/max punteggio. max punteggio = 100-16.
console.log("Hai totalizzato:", punteggio,"/",numeroDiGiri,"punti!");




/*
                  UTILITIES
*/
// Ritorna un numero casuale da 1 a max
function randomNumber(max){
  return Math.floor(Math.random() * max) + 1;
}
