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
var conteggioBombe;

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

console.log("Campo con bombe");
console.log(campoFiorito);

/*
Assegno i numerini alle caselle in base alle bombe che ci sono vicino
Per ogni "casella" da [1][1] a [10][10] controllo le caselle adiecenti e conto le bombe.
*/
  // per ogni casella
x = 0;
y = 0;
for (var x = 1; x <= 10; x++) {
  for (var y = 1; y <= 10; y++) {
    // casella: campoFiorito[x][y]
    // se nella casella non c'è una bomba, conta le bombe nelle caselle adiacenti
    conteggioBombe = 0;
    if (campoFiorito[x][y] != "B") {

      if (campoFiorito[x][y-1] === "B") {
        conteggioBombe++;
      }
      if (campoFiorito[x][y+1] === "B") {
        conteggioBombe++;
      }
      if (campoFiorito[x-1][y-1] === "B") {
        conteggioBombe++;
      }
      if (campoFiorito[x-1][y] === "B") {
        conteggioBombe++;
      }
      if (campoFiorito[x-1][y+1] === "B") {
        conteggioBombe++;
      }
      if (campoFiorito[x+1][y-1] === "B") {
        conteggioBombe++;
      }
      if (campoFiorito[x+1][y] === "B") {
        conteggioBombe++;
      }
      if (campoFiorito[x+1][y+1] === "B") {
        conteggioBombe++;
      }

      // Assegno le bombe
      campoFiorito[x][y] = conteggioBombe;

    }

  }
}

console.log("------------------------------------------------------------");
console.log("Campo con bombe e numeri");
console.log(campoFiorito);

// DEBUG VISIVO
/*
i = 1;
var appoggio = "";
for (var i = 1; i <= 10; i++) {
  appoggio += campoFiorito[i]+"<br>";
}
document.getElementById('debug').innerHTML = appoggio;
*/

/*
Creo le celle nell'html. Ogni cella avrà la classe oscurata e una delle seguenti classi: numero, bomba.
*/


x = 0;
y = 0;
var contatoreCaselle = 0;
var appoggio = "";
for (var x = 1; x <= 10; x++) {
  for (var y = 1; y <= 10; y++) {
    // casella: campoFiorito[x][y]
    contatoreCaselle++;
    switch (campoFiorito[x][y]) {
      case "B":
        appoggio += '<div onclick="casellaCliccata(' + contatoreCaselle + ')"' + 'oncontextmenu="casellaCliccataDx(' + contatoreCaselle + ')"' + 'id="casella' + contatoreCaselle + '"' + 'class="oscurata bomba"><p id="contenutoCasella' + contatoreCaselle + '" class="elementoInvisibile">B</p></div>';
        break;
      case 0:
        appoggio += '<div onclick="casellaCliccata(' + contatoreCaselle + ')"' + 'oncontextmenu="casellaCliccataDx(' + contatoreCaselle + ')"' + 'id="casella' + contatoreCaselle + '"' + 'class="oscurata casellaNumero numero 0"><p id="contenutoCasella' + contatoreCaselle + '" class="elementoInvisibile">0</p></div>';
        break;
      case 1:
        appoggio += '<div onclick="casellaCliccata(' + contatoreCaselle + ')"' + 'oncontextmenu="casellaCliccataDx(' + contatoreCaselle + ')"' + 'id="casella' + contatoreCaselle + '"' + 'class="oscurata casellaNumero numero1"><p id="contenutoCasella' + contatoreCaselle + '" class="elementoInvisibile">1</p></div>';
        break;
      case 2:
        appoggio += '<div onclick="casellaCliccata(' + contatoreCaselle + ')"' + 'oncontextmenu="casellaCliccataDx(' + contatoreCaselle + ')"' + 'id="casella' + contatoreCaselle + '"' + 'class="oscurata casellaNumero numero2"><p id="contenutoCasella' + contatoreCaselle + '" class="elementoInvisibile">2</p></div>';
        break;
      case 3:
        appoggio += '<div onclick="casellaCliccata(' + contatoreCaselle + ')"' + 'oncontextmenu="casellaCliccataDx(' + contatoreCaselle + ')"' + 'id="casella' + contatoreCaselle + '"' + 'class="oscurata casellaNumero numero3"><p id="contenutoCasella' + contatoreCaselle + '" class="elementoInvisibile">3</p></div>';
        break;
      case 4:
        appoggio += '<div onclick="casellaCliccata(' + contatoreCaselle + ')"' + 'oncontextmenu="casellaCliccataDx(' + contatoreCaselle + ')"' + 'id="casella' + contatoreCaselle + '"' + 'class="oscurata casellaNumero numero4"><p id="contenutoCasella' + contatoreCaselle + '" class="elementoInvisibile">4</p></div>'
        break;
      default:
        appoggio += '<div onclick="casellaCliccata(' + contatoreCaselle + ')"' + 'oncontextmenu="casellaCliccataDx(' + contatoreCaselle + ')"' + 'id="casella' + contatoreCaselle + '"' + 'class="oscurata casellaNumero numero"><p id="contenutoCasella' + contatoreCaselle + '" class="elementoInvisibile">' + campoFiorito[x][y] + '</p></div>';
        break;
    }
  }
}

// console.log(appoggio);
document.getElementById('campoFiorito').innerHTML = appoggio;


/*
                  UTILITIES
*/
// Ritorna un numero casuale da 1 a max
function randomNumber(max){
  return Math.floor(Math.random() * max) + 1;
}

function casellaCliccata(numeroid){
  // come parametro mi viene passato un numero unico che viene preso direttamente dall'html.
  var idCasella = "casella" + numeroid;
  var idContenutoCasella = "contenutoCasella" + numeroid;
  console.log(idCasella);
  console.log(idContenutoCasella);
  var casella = document.getElementById(idCasella);
  var contenutoCasella = document.getElementById(idContenutoCasella);
  // al click:
  casella.classList.remove("oscurata");
  casella.classList.add("scoperta");

  contenutoCasella.classList.remove("elementoInvisibile");
  contenutoCasella.classList.add("elementoVisibile");

  if (contenutoCasella.value === "B") {
    console.log("hai perso");
  }
}

function casellaCliccataDx(numeroid){
  // come parametro mi viene passato un numero unico che viene preso direttamente dall'html.
}
