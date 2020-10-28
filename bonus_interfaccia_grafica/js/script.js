/*
Obiettivo:
Creo una griglia 10x10 per il mio prato fiorito.
Tutto il gioco sarà utilizzabile dalla pagina web graficamente.
*/

// Variabili globali

var numeroBombe = 16;
var numeroCasuale;
var exit;
var x;
var y;

// Non utilizzo l'intera matrice ma i bordi esterni li lascio vuoti. C'è una specie di cornice vuota.
var campoFiorito = [
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
  ['nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc', 'nc'],
];

/*
Inserisco le bombe in modo casuale dentro la matrice (utilizzo solo indici da 1 a 10).
Controllo di non aver inserito nella stessa posizione.
*/

i = 0;
for (var i = 0; i < numeroBombe; i++) {

  exit = false;
  do {
    // Genera delle coordinate casuali per accedere alla matrice
    x = randomNumber(10);
    y = randomNumber(10);

    // se le coordinate sono vuote:
    if (campoFiorito[x][y] === "nc") {
      campoFiorito[x][y] = "B";
      exit = true;
    }

  } while (exit != true);

}

console.log(campoFiorito);











/*
                  UTILITIES
*/
// Ritorna un numero casuale da 1 a max
function randomNumber(max){
  return Math.floor(Math.random() * max) + 1;
}
