# JavaScript Vademecum

## Parte I - Fondamenti e Tipi di Dati

### 1. Variabili - I Contenitori di Dati 📦

Le variabili sono "scatole" etichettate in cui il programma conserva le informazioni. Immagina un trasloco: hai scatole diverse per oggetti diversi. Alcune le apri e le chiudi continuamente, altre le sigilli perché il loro riferimento non deve cambiare.

Ma c'è di più: ogni tipo di scatola ha le sue regole speciali. Alcune scatole possono essere spostate da una stanza all'altra (scope), altre rimangono fisse dove le hai messe. Alcune possono essere svuotate e riempite con oggetti completamente diversi, altre accettano modifiche solo al loro contenuto interno.

#### let – La Scatola Riutilizzabile (o la Lavagna)

`let` crea una variabile il cui valore può essere modificato nel tempo. È come una lavagna in cucina dove scrivi la lista della spesa: la aggiorni, cancelli e riscrivi continuamente.

```javascript
let messaggio = "Ciao";
messaggio = "Arrivederci"; // Perfetto, posso cambiare il valore

let contatore = 0;
contatore++; // Stessa cosa di contatore = contatore + 1
```

Ma perché si chiama `let`? Pensa a quando dici "lascia che questa variabile sia..." - è un permesso che dai a JavaScript di avere un contenitore flessibile. È come dire al programma: "Ti lascio gestire questo valore, e ti permetto di cambiarlo quando serve."

**Caratteristica Chiave: Block Scope** 

Una variabile `let` esiste solo all'interno del blocco `{...}` in cui è nata. Pensa a una chiave elettronica che funziona solo per una specifica stanza d'albergo: fuori da quella stanza, è inutile.

Questo concetto è rivoluzionario rispetto al vecchio `var`. È come se ogni coppia di parentesi graffe creasse una bolla invisibile: quello che succede nella bolla, resta nella bolla. Se provi a usare quella variabile fuori dalla sua bolla, JavaScript ti dirà "Non so di cosa stai parlando!"

```javascript
{
    let segreto = "Sono qui dentro";
    console.log(segreto); // Funziona!
}
console.log(segreto); // ERRORE! 'segreto' non esiste qui fuori
```

**Quando usarla?** 

Quando sai già che il valore di quella variabile dovrà cambiare. Ma non è solo questione di "cambiare" - è questione di *intenzione*. Usi `let` quando stai dicendo: "Questa cosa evolverà durante l'esecuzione del mio programma."

Esempi perfetti:
- **Contatori**: Devono incrementarsi ad ogni ciclo
- **Stato temporaneo**: Come la posizione attuale in un gioco
- **Accumulatori**: Quando stai costruendo qualcosa pezzo per pezzo
- **Flag di controllo**: Variabili che tengono traccia di condizioni che cambiano

#### const – La Scatola Sigillata (o la Cassaforte)

`const` crea una variabile che non può essere riassegnata a un nuovo valore o riferimento. È come incidere qualcosa nel marmo: una volta scritto, il riferimento rimane quello.

```javascript
const PI_GRECO = 3.14159;
// PI_GRECO = 3.14; // ERRORE! Non puoi riassegnare una costante.
```

Ma attenzione! C'è un trucco mentale importante qui. `const` non significa "costante" nel senso matematico. Significa "riferimento costante". È la differenza tra dire "questa cassaforte non si può spostare" e "il contenuto della cassaforte non si può toccare". 

**Concetto Cruciale: Contenitore vs. Contenuto** 

`const` blocca il contenitore, non necessariamente il contenuto. Se la variabile `const` contiene un oggetto o un array, puoi ancora modificarne le proprietà interne.

```javascript
const utente = { nome: "Mario" };
utente.nome = "Luigi"; // OK! Stai modificando il contenuto.
// utente = { nome: "Carlo" }; // ERRORE! Stai cercando di cambiare il contenitore.
```

L'analogia della cassaforte bullonata al pavimento è perfetta: non puoi spostare la cassaforte (cambiare il riferimento), ma puoi cambiare gli oggetti che ci sono dentro (modificare le proprietà). È come se `const` dicesse: "Questa variabile punterà sempre a QUESTO oggetto specifico in memoria, ma quello che c'è dentro l'oggetto può cambiare."

Questo comportamento confonde molti principianti! Ricorda: con i tipi primitivi (numeri, stringhe, booleani), `const` li rende davvero immutabili. Con oggetti e array, rende immutabile solo il "dove" puntano, non il "cosa" contengono.

**Quando usarla?** 

Sempre, come prima scelta. Questo è un cambio di mentalità importante: parti sempre da `const` e passa a `let` solo quando sei assolutamente certo che dovrai riassegnare la variabile. 

Perché? Perché rende il tuo codice più prevedibile. Quando vedi `const`, sai che quella variabile punterà sempre alla stessa cosa. È una promessa che fai a chi leggerà il codice (incluso il te stesso del futuro): "Questa cosa non cambierà riferimento, puoi fidarti."

#### var – Il Vecchio Modo (Da Evitare)

`var` è il modo in cui si dichiaravano le variabili prima di `let` e `const`. Ha un comportamento meno prevedibile (il function scope invece del block scope) che può portare a bug difficili da scovare. 

Immagina `var` come una vecchia serratura che a volte si apre da sola, o come un contenitore che magicamente appare in posti dove non te l'aspetti. Ha questo strano comportamento chiamato "hoisting" dove JavaScript la "solleva" all'inizio della funzione, anche se l'hai dichiarata più in basso. È come se il tuo codice venisse riorganizzato a tua insaputa!

```javascript
// Quello che scrivi
function test() {
    console.log(x); // undefined (non errore!)
    var x = 5;
}

// Quello che JavaScript vede (hoisting)
function test() {
    var x; // Dichiarazione "sollevata"
    console.log(x); // undefined
    x = 5;
}
```

Evitalo nei progetti moderni. Se vedi `var` in codice vecchio, considera di refactorarlo. È come vedere ancora Windows XP in un ufficio nel 2025 - funziona, ma perché rischiare?

#### null e undefined – L'Assenza Intenzionale vs. Accidentale

Questi due valori rappresentano il "nulla", ma con significati profondamente diversi. È una distinzione sottile ma importantissima che mostra l'intenzione del programmatore.

**null**: È l'assenza intenzionale di un valore. Sei tu, programmatore, che decidi di assegnare `null` per indicare che "qui, volutamente, non c'è nulla".

*Analogia più profonda:* Un posto a tavola vuoto, ma apparecchiato. Non è che ti sei dimenticato di mettere il piatto - hai consciamente deciso che quel posto deve rimanere vuoto per ora. Magari stai aspettando un ospite che potrebbe arrivare, o forse vuoi segnalare che qualcuno se n'è andato. Il punto è: c'è stata una decisione consapevole.

```javascript
let canzoneCorrente = null; // "Non c'è nessuna canzone in riproduzione, e lo so"
let prossimoOspite = null; // "Non c'è un prossimo ospite programmato"
let currentTask = null; // "Nessun task selezionato per l'editing"
```

**undefined**: È l'assenza accidentale o lo stato di "non ancora definito". È il valore di default di una variabile che è stata dichiarata ma a cui non è ancora stato assegnato un valore. JavaScript lo mette lì automaticamente, come a dire "Boh, non so cosa metterci."

*Analogia più profonda:* È come aprire una scatola appena comprata e trovarla vuota - non perché doveva essere vuota, ma perché nessuno ci ha ancora messo niente. O come un modulo con un campo lasciato in bianco - non sai se è stato lasciato vuoto di proposito o se qualcuno si è dimenticato di compilarlo.

```javascript
let prossimaCanzone; // Il suo valore è undefined - "Non ho idea di cosa sia"
console.log(nonEsiste); // undefined - "Questa variabile non l'hai mai dichiarata!"
```

La differenza filosofica è profonda: `null` è il vuoto buddhista - un vuoto pieno di significato. `undefined` è il vuoto esistenziale - un vuoto che non sa nemmeno di essere vuoto.

### 2. Tipi di Dati - Le Forme dell'Informazione 🎭

In JavaScript, ogni dato ha una sua "forma". Come in cucina usi contenitori diversi per liquidi, solidi e spezie, in programmazione usi strutture diverse per testi, numeri e collezioni di dati. Ma ogni forma ha le sue regole, i suoi superpoteri e le sue limitazioni.

#### Stringhe (String) - Il Testo ✍️

Le stringhe sono sequenze di caratteri. Ma pensarle solo come "testo" è riduttivo. Sono come i mattoncini LEGO del mondo della programmazione: puoi combinarle, spezzarle, trasformarle, cercare al loro interno. Sono la forma che prende qualsiasi informazione che vuoi mostrare o comunicare.

**Template Literals (``)** 

I backtick sono la scelta migliore per creare stringhe. Permettono l'interpolazione: inserire variabili o espressioni direttamente nel testo usando `${...}`.

```javascript
const nome = "Mario";
const eta = 25;
const presentazione = `Mi chiamo ${nome} e ho ${eta} anni.`;

// Puoi anche eseguire calcoli dentro ${}
const prezzo = 100;
const messaggio = `Il totale è €${prezzo * 1.22} (IVA inclusa)`;
```

Ma perché sono così potenti? Perché trasformano la stringa da un blocco monolitico a qualcosa di dinamico e vivo. È come la differenza tra una fotografia e un video: i template literals possono cambiare, adattarsi, reagire.

**Caratteri di Escape - I Caratteri Speciali**

A volte devi inserire caratteri speciali nel testo. Il backslash `\` è il tuo passepartout - dice al computer "il prossimo carattere è speciale".

```javascript
const negozio = "Sono nel \"Store\"";      // Virgolette dentro virgolette
const righe = "Prima riga\nSeconda riga";  // \n = A capo (new line)
const colonne = "Nome\tCognome\tEtà";      // \t = Tab per allineare
const percorso = "C:\\Users\\Documents";   // \\ = Backslash letterale

// Altri caratteri di escape comuni:
const apostrofo = 'L\'apostrofo';          // \' = Apostrofo in stringa con apici
const unicode = "\u2764";                  // \u = Carattere Unicode (❤)
const ritorno = "Riga1\rSovrascritta";     // \r = Ritorno carrello
const backspace = "Test\b\b\b\b";          // \b = Cancella carattere precedente
```

È come quando fai le "virgolette con le dita" mentre parli - il backslash è il gesto che dice "attenzione, questo è letterale, non un comando!"

**Metodi Utili (La Cassetta degli Attrezzi per Testi)**

Ogni stringa in JavaScript è segretamente un oggetto con decine di metodi nascosti. È come se ogni parola che scrivi venisse fornita con un kit completo di strumenti per modificarla.

```javascript
const testo = "JavaScript è potente";

// Proprietà e metodi di base
testo.length;           // 20 - Non è un metodo ma una proprietà!
testo.toUpperCase();    // "JAVASCRIPT È POTENTE"
testo.toLowerCase();    // "javascript è potente"

// Ricerca
testo.includes("potente"); // true - Cerca una sottostringa
testo.indexOf("Script");   // 4 - Dove inizia (-1 se non trova)
testo.startsWith("Java"); // true
testo.endsWith("nte");    // true

// Estrazione
testo.slice(0, 10);     // "JavaScript" - Dal carattere 0 al 10
testo.substring(0, 10); // "JavaScript" - Simile a slice
testo.substr(0, 10);    // "JavaScript" - DEPRECATO, evita!

// Pulizia e sostituzione
"  spazi ovunque  ".trim();     // "spazi ovunque"
testo.replace("potente", "fantastico"); // Sostituisce la prima occorrenza
testo.replaceAll("e", "3");     // Sostituisce tutte le occorrenze

// Ripetizione
"Na".repeat(4) + " Batman!";    // "NaNaNaNa Batman!"
```

**Il Metodo .split() - L'Affettatrice di Stringhe**

`.split()` è come un coltello magico che taglia una stringa nei punti che decidi tu. Ma la magia vera è che trasforma una stringa in un array - passa da un blocco unico a una lista di pezzi manipolabili singolarmente.

```javascript
"Ciao mondo felice".split(' ');    // ['Ciao', 'mondo', 'felice']
"2025-01-15".split('-');           // ['2025', '01', '15']
"hello".split("");                 // ["h", "e", "l", "l", "o"] - Ogni lettera!
"test".split();                    // ["test"] - Senza separatore, mette tutto in array

// Casi avanzati
"uno,,tre".split(",");             // ["uno", "", "tre"] - Mantiene vuoti
"ciao mondo".split(" ", 1);        // ["ciao"] - Limite al numero di split
```

Il separatore che scegli è come decidere dove tagliare una torta. E se non passi nessun separatore? La stringa intera diventa l'unico elemento di un array - utile quando vuoi uniformare il tipo di dato.

#### Numeri (Number) - I Valori Matematici 🔢

I numeri in JavaScript sono ingannevolmente semplici. Non c'è distinzione tra interi e decimali - tutto è un `Number`. Ma questa semplicità nasconde alcune stranezze: JavaScript usa il formato IEEE 754 per i numeri, il che significa che a volte `0.1 + 0.2` non fa esattamente `0.3` (fa `0.30000000000000004`). È come se JavaScript facesse i conti con una calcolatrice che ha troppe cifre decimali e a volte si confonde.

```javascript
// Tipi di numeri
const intero = 42;
const decimale = 3.14;
const negativo = -273.15;
const esponenziale = 5.2e3;  // 5200 (notazione scientifica)
const binario = 0b1010;      // 10 in binario
const ottale = 0o12;         // 10 in ottale
const esadecimale = 0xFF;    // 255 in esadecimale

// Valori speciali
const infinito = Infinity;
const menoInfinito = -Infinity;
const nonNumero = NaN;  // Not a Number

// Controlli
Number.isInteger(5.0);    // true - È intero anche se ha .0
Number.isFinite(100);     // true - È un numero finito
Number.isNaN(NaN);        // true - È NaN
```

**Math - La Calcolatrice Scientifica Integrata**

L'oggetto `Math` è come avere una calcolatrice scientifica sempre a disposizione, ma integrata nel linguaggio. Non devi crearlo o importarlo - è sempre lì, pronto all'uso.

```javascript
// Arrotondamenti
Math.floor(4.9);   // 4 - Taglia via i decimali, sempre verso il basso
Math.ceil(4.1);    // 5 - Arrotonda sempre verso l'alto
Math.round(4.5);   // 5 - Arrotonda al più vicino
Math.trunc(4.9);   // 4 - Taglia i decimali senza arrotondare

// Operazioni base
Math.abs(-10);     // 10 - Valore assoluto
Math.pow(2, 3);    // 8 - Potenza (2^3), come 2**3
Math.sqrt(16);     // 4 - Radice quadrata
Math.cbrt(8);      // 2 - Radice cubica

// Min e Max
Math.max(1, 5, 3); // 5 - Il più grande
Math.min(1, 5, 3); // 1 - Il più piccolo
// Con array: usa spread
const numeri = [1, 5, 3];
Math.max(...numeri); // 5

// Trigonometria (radianti!)
Math.sin(Math.PI / 2);  // 1
Math.cos(0);            // 1
Math.tan(Math.PI / 4);  // ~1

// Costanti utili
Math.PI;       // 3.141592653589793
Math.E;        // 2.718281828459045 (numero di Eulero)
Math.LN2;      // Logaritmo naturale di 2
Math.SQRT2;    // Radice quadrata di 2
```

**Math.random() - Il Generatore di Casualità**

`Math.random()` genera un numero pseudo-casuale tra 0 (incluso) e 1 (escluso). È come lanciare un dado con infinite facce microscopiche.

```javascript
// Base: numero tra 0 e 0.999...
Math.random(); // es: 0.7394728492836

// Numero tra 0 e 10 (escluso)
Math.random() * 10;

// Intero tra 0 e 9
Math.floor(Math.random() * 10);

// Intero tra 1 e 10 (incluso)
Math.floor(Math.random() * 10) + 1;

// Formula generale: intero tra min e max (inclusi)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Booleano casuale (50/50)
Math.random() < 0.5;

// Elemento casuale da array
const colori = ["rosso", "verde", "blu"];
const coloreCasuale = colori[Math.floor(Math.random() * colori.length)];
```

**parseInt() - L'Estrattore di Interi**

`parseInt()` è come un buttafuori molto specifico che estrae solo numeri interi da una stringa. Legge da sinistra a destra e si ferma appena trova qualcosa che non è un numero.

```javascript
parseInt("123");          // 123 - Stringa pulita
parseInt("42istheanswer"); // 42 - Si ferma alla prima lettera
parseInt("3.14");         // 3 - Ignora i decimali
parseInt("age42");        // NaN - Non inizia con un numero
parseInt("2e3");          // 2 - Si ferma alla 'e'
parseInt("   5  ");       // 5 - Ignora gli spazi

// Con base specificata (radix) - molto importante!
parseInt("1010", 2);      // 10 - Interpreta come binario
parseInt("FF", 16);       // 255 - Interpreta come esadecimale
parseInt("077", 8);       // 63 - Interpreta come ottale

// parseFloat per decimali
parseFloat("3.14");       // 3.14
parseFloat("3.14.15");    // 3.14 - Si ferma al secondo punto
```

La logica di `parseInt` è rigida ma prevedibile: "Inizio a leggere. Se il primo carattere è un numero o un segno +/-, continuo. Appena vedo qualcosa che non è una cifra valida per la base specificata, mi fermo e restituisco quello che ho raccolto."

#### Date - Il Calendario e l'Orologio 📅

Le date in JavaScript sono oggetti complessi che rappresentano un momento preciso nel tempo, misurato in millisecondi dal 1 gennaio 1970 00:00:00 UTC (l'Unix Epoch). Sono piene di trabocchetti storici e decisioni di design discutibili che risalgono ai primi giorni di JavaScript.

```javascript
// Creare date
const ora = new Date();                    // Data e ora correnti
const compleanno = new Date(2025, 0, 15);  // 15 gennaio 2025 (mese 0!)
const precisa = new Date(2025, 0, 15, 14, 30, 0); // Con ora
const daStringa = new Date("2025-01-15");  // Da stringa ISO
const daTimestamp = new Date(1234567890000); // Da millisecondi
```

**I Metodi Tricky delle Date**

JavaScript ha alcune scelte... particolari per le date. Preparati a delle sorprese!

```javascript
const date = new Date(2025, 0, 15, 14, 30, 45);

// GET methods - leggere valori
date.getFullYear();   // 2025 - Anno (usa sempre questo!)
date.getMonth();      // 0 - Gennaio (0-11, IL TRABOCCHETTO!)
date.getDate();       // 15 - Giorno del mese (1-31)
date.getDay();        // 3 - Mercoledì (0=Dom, 6=Sab)
date.getHours();      // 14 - Ore (0-23)
date.getMinutes();    // 30 - Minuti
date.getSeconds();    // 45 - Secondi
date.getMilliseconds(); // 0 - Millisecondi

// SET methods - modificare valori
date.setFullYear(2026);
date.setMonth(11);    // Dicembre (ricorda: 0-11!)
date.setDate(25);     // Puoi mettere anche 32 e passa al mese dopo!

// Conversioni utili
date.toString();      // "Wed Jan 15 2025 14:30:45 GMT+0100 (CET)"
date.toISOString();   // "2025-01-15T13:30:45.000Z" (sempre UTC!)
date.toLocaleDateString('it-IT'); // "15/01/2025"
date.toLocaleTimeString('it-IT'); // "14:30:45"
```

Perché `getMonth()` parte da 0? È una decisione storica ereditata dal linguaggio C. Gli sviluppatori pensavano sarebbe stato comodo per usare i mesi come indici di array. Spoiler: non lo è! È fonte di bug infiniti.

```javascript
// Il trabocchetto classico
const natale = new Date(2025, 12, 25); // SBAGLIATO! Questo è gennaio 2026!
const nataleCorretto = new Date(2025, 11, 25); // Dicembre = 11
```

**Date.now() - Il Cronometro Universale**

`Date.now()` è geniale nella sua semplicità. Non crea oggetti, non alloca memoria, restituisce solo un numero: i millisecondi dal 1 gennaio 1970.

```javascript
const timestamp = Date.now(); // es: 1757897460000

// ID unici basati sul tempo
const uniqueId = `task-${Date.now()}`;

// Misurare performance
const start = Date.now();
// ... codice da misurare ...
const end = Date.now();
console.log(`Operazione durata: ${end - start}ms`);

// Timer e scadenze
const scadenzaInUnOra = Date.now() + (60 * 60 * 1000);

// Confrontare date facilmente
const scadenza = new Date("2025-12-31");
if (Date.now() > scadenza.getTime()) {
    console.log("Scaduto!");
}
```

#### Booleani (Boolean) - Il Sistema Binario della Logica ✅❌

I booleani sono i bit filosofici di JavaScript. Solo due valori: `true` o `false`. Ma non lasciarti ingannare dalla loro semplicità - sono il cuore di ogni decisione che il tuo programma prende. Sono come gli interruttori della luce: acceso o spento, sì o no, procedi o fermati.

```javascript
const vero = true;
const falso = false;

// Nascono spesso da confronti
const maggiorenne = eta >= 18;
const isAdmin = ruolo === "admin";
const isEmpty = array.length === 0;
```

**Truthy vs Falsy - La Zona Grigia della Verità**

JavaScript ha questa caratteristica affascinante e a volte frustrante: in un contesto booleano, OGNI valore viene "costretto" a diventare true o false. È come se JavaScript avesse degli occhiali speciali che vedono tutto in bianco e nero.

**I Sei Cavalieri del Falsy** (memorizzali a memoria!):

```javascript
// I SOLI 6 valori falsy in JavaScript:
Boolean(false);      // false - L'ovvio
Boolean(0);         // false - Zero numerico  
Boolean("");        // false - Stringa vuota
Boolean(null);      // false - Vuoto intenzionale
Boolean(undefined); // false - Vuoto accidentale
Boolean(NaN);       // false - Not a Number

// TUTTO il resto è truthy! Anche cose controintuitive:
Boolean("0");       // true - È una stringa con contenuto!
Boolean("false");   // true - È una stringa con testo!
Boolean([]);        // true - Array vuoto ma è un oggetto!
Boolean({});        // true - Oggetto vuoto ma esiste!
Boolean(-1);        // true - Non è zero!
Boolean(" ");       // true - Stringa con spazio!
```

Questo comportamento ti permette di scrivere codice incredibilmente conciso:

```javascript
// Controllo verboso
if (username !== "" && username !== null && username !== undefined) {
    console.log(`Benvenuto ${username}`);
}

// Controllo elegante sfruttando truthy/falsy
if (username) {
    console.log(`Benvenuto ${username}`);
}

// Con operatore NOT per verificare falsy
if (!username) {
    alert("Per favore inserisci un username");
}

// Double NOT per convertire in booleano
const hasUsername = !!username; // true o false
```

#### Array (Array) - Le Liste Ordinate 🗂️

Gli array sono le collezioni ordinate di JavaScript. Ma pensarli solo come "liste" è limitante. Sono più come treni con vagoni: ogni vagone (elemento) ha un numero (indice), puoi aggiungere o rimuovere vagoni, riordinarli, o trasformare l'intero treno in qualcosa di completamente diverso.

```javascript
// Creazione array
const vuoto = [];
const numeri = [1, 2, 3, 4, 5];
const misto = ["testo", 42, true, null, {nome: "Mario"}];
const matrice = [[1,2], [3,4], [5,6]]; // Array di array

// Accesso elementi (indice parte da 0!)
const frutti = ["mela", "pera", "banana"];
console.log(frutti[0]);     // "mela" - primo elemento
console.log(frutti[2]);     // "banana" - terzo elemento
console.log(frutti[10]);    // undefined - non esiste
console.log(frutti.length); // 3 - numero di elementi
```

**Array.from() - Il Trasformatore Universale**

`Array.from()` converte strutture "simili ad array" in veri array. È come trasformare una collana di perle in perle singole che puoi riorganizzare liberamente.

```javascript
// Da stringa a array di caratteri
const lettere = Array.from("Ciao");  // ["C", "i", "a", "o"]

// Da NodeList a Array (FONDAMENTALE per il DOM!)
const paragrafi = document.querySelectorAll("p"); // NodeList (non è un vero array!)
const arrayParagrafi = Array.from(paragrafi);     // Ora è un vero array!

// Con funzione di trasformazione
const raddoppiati = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

// Creare array di lunghezza specifica
const cinqueZeri = Array.from({length: 5}, () => 0);        // [0, 0, 0, 0, 0]
const countdown = Array.from({length: 10}, (_, i) => 10 - i); // [10, 9, 8, ..., 1]

// Da Set a Array
const set = new Set([1, 2, 2, 3]);
const arrayDaSet = Array.from(set); // [1, 2, 3] - duplicati rimossi!
```

**Metodi di Modifica (Distruttivi) - Cambiano l'Array Originale**

Questi metodi sono come operazioni chirurgiche: modificano permanentemente il paziente (l'array originale).

```javascript
const frutti = ["mela", "pera"];

// AGGIUNGERE/RIMUOVERE DALLA FINE
frutti.push("banana");      // Aggiunge alla fine, ritorna nuova length: 3
frutti.pop();               // Rimuove e ritorna ultimo: "banana"

// AGGIUNGERE/RIMUOVERE DALL'INIZIO  
frutti.unshift("kiwi");     // Aggiunge all'inizio, ritorna nuova length
frutti.shift();             // Rimuove e ritorna primo: "kiwi"

// INVERSIONE
frutti.reverse();           // Inverte l'ordine (modifica originale!)
// frutti è ora ["pera", "mela"]

// ORDINAMENTO
frutti.sort();              // Ordina alfabeticamente (modifica originale!)
// Attenzione con i numeri!
[1, 10, 2, 21].sort();     // [1, 10, 2, 21] - ordina come stringhe!
// Soluzione: fornire comparatore
[1, 10, 2, 21].sort((a, b) => a - b); // [1, 2, 10, 21]
```

**Il Metodo .splice() - Il Coltellino Svizzero degli Array**

`.splice()` può fare tre cose: rimuovere, aggiungere e sostituire elementi. È il metodo più versatile ma anche il più complesso.

```javascript
const lettere = ['a', 'b', 'c', 'd', 'e'];

// splice(indiceInizio, quantiDaRimuovere, ...elementiDaAggiungere)

// 1. RIMUOVERE
const rimosse = lettere.splice(1, 2); 
// lettere: ['a', 'd', 'e']
// rimosse: ['b', 'c']

// 2. AGGIUNGERE (senza rimuovere)
lettere.splice(1, 0, 'x', 'y');
// lettere: ['a', 'x', 'y', 'd', 'e']

// 3. SOSTITUIRE
lettere.splice(2, 1, 'z');
// lettere: ['a', 'x', 'z', 'd', 'e']
// Sostituisce 'y' con 'z'

// Trucco: rimuovere da indice fino alla fine
const array = [1, 2, 3, 4, 5];
array.splice(2); // Rimuove tutto da indice 2
// array: [1, 2]
```

**Metodi di Lettura (Non Distruttivi) - Creano Nuovi Array**

Questi metodi sono più gentili: guardano l'array, creano qualcosa di nuovo, ma non toccano l'originale.

```javascript
const numeri = [1, 2, 3, 4, 5];

// FILTER - Il setaccio selettivo
const pari = numeri.filter(n => n % 2 === 0); 
// pari: [2, 4]
// numeri ancora: [1, 2, 3, 4, 5]

const maggioriDi2 = numeri.filter(n => n > 2); // [3, 4, 5]

// Con oggetti
const utenti = [
    {nome: "Mario", eta: 25},
    {nome: "Luigi", eta: 17},
    {nome: "Peach", eta: 20}
];
const maggiorenni = utenti.filter(u => u.eta >= 18);

// MAP - Il trasformatore
const doppi = numeri.map(n => n * 2);         // [2, 4, 6, 8, 10]
const quadrati = numeri.map(n => n ** 2);     // [1, 4, 9, 16, 25]

// Map per creare HTML
const nomi = ["Mario", "Luigi", "Peach"];
const html = nomi.map(nome => `<li>${nome}</li>`).join("");
// "<li>Mario</li><li>Luigi</li><li>Peach</li>"

// FIND - Il detective
const primo = numeri.find(n => n > 3);        // 4 (primo che matcha)
const nessuno = numeri.find(n => n > 10);     // undefined

// FINDINDEX - La posizione
const indice = numeri.findIndex(n => n > 3);  // 3 (indice di 4)
const nonTrovato = numeri.findIndex(n => n > 10); // -1

// JOIN - L'incollatore
["2025", "01", "15"].join("-");               // "2025-01-15"
["Hello", "World"].join(" ");                 // "Hello World"
[1, 2, 3].join("");                          // "123"

// SLICE - Il tagliatore (crea copia!)
const parte = numeri.slice(1, 3);             // [2, 3] (da indice 1 a 3 escluso)
const ultimi = numeri.slice(-2);              // [4, 5] (ultimi 2)
const copia = numeri.slice();                 // [1, 2, 3, 4, 5] (copia completa)

// INCLUDES - Il verificatore
numeri.includes(3);                           // true
numeri.includes(10);                          // false

// INDEXOF - Il cercatore di posizione
numeri.indexOf(3);                            // 2 (posizione)
numeri.indexOf(10);                           // -1 (non trovato)
```

**Spread Operator (...) - L'Esplosore di Array**

I tre puntini sono magia pura. "Esplodono" un array nei suoi elementi individuali.

```javascript
// UNIRE ARRAY
const arr1 = [1, 2];
const arr2 = [3, 4];
const uniti = [...arr1, ...arr2];  // [1, 2, 3, 4]
const conExtra = [...arr1, 99, ...arr2]; // [1, 2, 99, 3, 4]

// COPIARE ARRAY (shallow copy)
const originale = [1, 2, 3];
const copia = [...originale];
copia.push(4); // originale resta [1, 2, 3]

// CONVERTIRE IN ARGOMENTI
const numeri = [5, 2, 8, 1];
Math.max(...numeri);  // 8 - Come scrivere Math.max(5, 2, 8, 1)

// TRICKS UTILI
// Rimuovere duplicati
const conDuplicati = [1, 2, 2, 3, 3, 3];
const unici = [...new Set(conDuplicati)]; // [1, 2, 3]

// Convertire string in array
const caratteri = [..."Ciao"]; // ["C", "i", "a", "o"]
```

#### Oggetti (Object) - I Contenitori Strutturati 📇

Gli oggetti sono il cuore di JavaScript. Tutto in JavaScript è un oggetto o si comporta come tale. Ma a livello pratico, gli oggetti sono contenitori di coppie chiave-valore, come un dizionario o una rubrica telefonica dove ogni informazione ha un'etichetta.

```javascript
// Creazione oggetti
const vuoto = {};
const persona = { 
    nome: "Mario", 
    eta: 30,
    citta: "Roma",
    saluta: function() { 
        return `Ciao, sono ${this.nome}`; 
    }
};

// Oggetti annidati (nested)
const azienda = {
    nome: "Tech Corp",
    sede: {
        via: "Via Roma 1",
        citta: "Milano",
        coordinate: { lat: 45.464, lng: 9.189 }
    },
    dipendenti: [
        { nome: "Mario", ruolo: "CEO" },
        { nome: "Luigi", ruolo: "CTO" }
    ]
};
```

**Accesso ai Dati - Due Strade, Due Filosofie**

```javascript
const user = { nome: "Alice", "data-nascita": "1990-01-01" };

// NOTAZIONE A PUNTO (preferita quando possibile)
user.nome;         // "Alice"
user.nome = "Bob"; // Modifica

// NOTAZIONE A PARENTESI (per casi speciali)
user["data-nascita"];        // Chiavi con caratteri speciali
user["no" + "me"];          // Chiavi dinamiche
const prop = "nome";
user[prop];                  // Accesso con variabile

// Accesso sicuro con optional chaining (?.)
const via = azienda.sede?.indirizzo?.via; // undefined invece di errore
```

<br>
<br>
<br>
<br>
<br>
<br>

## Parte II - Input/Output e Strutture di Controllo

### 4. Output e Commenti 📢💭

#### console - La Cabina di Controllo

```javascript
console.log("Messaggio normale");
console.error("Errore critico!");     // Rosso
console.warn("Attenzione!");          // Giallo
console.info("Info utile");           // Info icon
console.table(arrayDiOggetti);        // Tabella formattata
console.group("Gruppo");              // Inizia gruppo
console.groupEnd();                   // Fine gruppo
console.time("timer");                // Inizia timer
console.timeEnd("timer");             // Ferma e mostra tempo
console.count("click");               // Conta chiamate
```

#### Commenti - La Documentazione del Codice

I commenti sono post-it nel tuo codice. Servono a te futuro e ai tuoi colleghi per capire cosa fa il codice e perché.

```javascript
// Commento singola linea - per note brevi

/* 
   Commento multi-linea
   Per spiegazioni più lunghe
   o disabilitare temporaneamente codice
*/

/**
 * JSDoc - Documentazione formale
 * @param {number} prezzo - Il prezzo base
 * @param {number} sconto - Percentuale di sconto
 * @returns {number} Prezzo scontato
 */
function applicaSconto(prezzo, sconto) {
    return prezzo * (1 - sconto / 100);
}

// Tag speciali per organizzare il lavoro:
// TODO: Implementare validazione email
// FIXME: Non gestisce numeri negativi  
// NOTE: L'API richiede formato ISO per le date
// HACK: Timeout per aspettare animazione CSS (400ms)
// DEPRECATED: Usare nuovoMetodo() dalla v2.0
```

**Best Practices per Commenti:**
- Spiega il "perché", non il "cosa"
- Mantienili aggiornati con il codice
- Non commentare l'ovvio
- Usa commenti per spiegare logiche complesse

```javascript
// CATTIVO: Commento ovvio
let count = 0;  // Imposta count a 0

// BUONO: Spiega il perché
let count = 0;  // Contatore tentativi falliti (max 3 prima del blocco account)
```

### 5. Controllo del Flusso - Le Decisioni del Programma 🚦

#### if/else - Il Bivio Classico

```javascript
const eta = 20;

if (eta < 18) {
    console.log("Minorenne");
} else if (eta >= 18 && eta < 65) {
    console.log("Adulto");
} else {
    console.log("Senior");
}

// Operatore ternario - versione compatta
const status = eta >= 18 ? "Maggiorenne" : "Minorenne";
```

#### switch - Il Centralino Telefonico

```javascript
const azione = "salva";

switch (azione) {
    case "salva":
        salvaDati();
        break;  // IMPORTANTE: ferma l'esecuzione
        
    case "carica":
        caricaDati();
        break;
        
    case "elimina":
    case "cancella":  // Due case insieme
        eliminaDati();
        break;
        
    default:  // Come "else"
        console.log("Azione sconosciuta");
}
```

#### Pattern "Return Early" - La Guardia all'Ingresso

```javascript
function processaPagamento(carta, importo) {
    // Controlli di validazione - esci subito se qualcosa non va
    if (!carta) {
        return { successo: false, errore: "Carta mancante" };
    }
    
    if (carta.scaduta) {
        return { successo: false, errore: "Carta scaduta" };
    }
    
    if (importo <= 0) {
        return { successo: false, errore: "Importo non valido" };
    }
    
    // Se arriviamo qui, tutto è valido
    elaboraPagamento();
    return { successo: true };
}
```

### 6. Cicli - Le Ripetizioni Automatizzate 🔄

#### for - Il Ciclo Contatore

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Iterazione ${i}`);
}
```

#### while - Il Ciclo Condizionale

```javascript
let tentativi = 0;
while (tentativi < 3) {
    console.log(`Tentativo ${tentativi + 1}`);
    tentativi++;
}
```

#### do...while - Il Ciclo Garantito

Esegue almeno una volta, poi controlla. Come assaggiare il cibo prima di decidere se aggiungere sale.

```javascript
let scelta;
do {
    scelta = prompt("Vuoi continuare? (s/n)");
} while (scelta !== "n" && scelta !== "N");

// Utile per menu che devono apparire almeno una volta
let opzione;
do {
    console.log("1. Nuovo");
    console.log("2. Apri");
    console.log("3. Esci");
    opzione = prompt("Scegli:");
    
    switch(opzione) {
        case "1": nuovo(); break;
        case "2": apri(); break;
    }
} while (opzione !== "3");
```

#### for...of - Il Ciclo per Collezioni

Itera direttamente sugli elementi, senza indici. Come esaminare ogni oggetto in una scatola uno alla volta.

```javascript
const carrello = ["mele", "pane", "latte"];

// for...of per array
for (const prodotto of carrello) {
    console.log(`Comprare: ${prodotto}`);
}

// Funziona anche con stringhe!
for (const lettera of "Ciao") {
    console.log(lettera);  // C, i, a, o
}

// Con Map e Set
const mappa = new Map([["chiave1", "valore1"], ["chiave2", "valore2"]]);
for (const [chiave, valore] of mappa) {
    console.log(`${chiave}: ${valore}`);
}

// Differenza con for...in (che itera sulle chiavi)
const obj = {a: 1, b: 2};
for (const key in obj) {
    console.log(key);  // "a", "b" - le chiavi
}
```

#### forEach - L'Iteratore di Array

```javascript
const frutti = ["mela", "pera", "banana"];

frutti.forEach((frutto, indice) => {
    console.log(`${indice}: ${frutto}`);
});
```

#### Controllo del Flusso nei Cicli

```javascript
// break - Ferma tutto e esci
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);  // 0, 1, 2, 3, 4
}

// continue - Salta al prossimo giro
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;  // Salta i pari
    console.log(i);  // 1, 3, 5, 7, 9
}
```
<br>
<br>
<br>
<br>
<br>
<br>

## Parte III - Funzioni e Scope

### 7. Funzioni - Le Ricette Riutilizzabili del Codice 🧩

Le funzioni sono i mattoni fondamentali di un programma ben organizzato. Sono come delle ricette: definisci una serie di passaggi una sola volta e poi puoi "cucinare" quel risultato ogni volta che vuoi.

#### Dichiarazione Classica vs Arrow Functions

```javascript
// Funzione classica
function saluta(nome) {
    return `Ciao, ${nome}!`;
}

// Arrow function
const saluta = (nome) => `Ciao, ${nome}!`;

// Con più righe
const calcola = (a, b) => {
    const somma = a + b;
    return somma * 2;
};
```

#### Parametri di Default

```javascript
function saluta(nome = "Ospite", orario = "giorno") {
    return `Buon${orario}, ${nome}!`;
}

saluta();                    // "Buongiorno, Ospite!"
saluta("Mario", "asera");    // "Buonasera, Mario!"
```

#### Destrutturazione nei Parametri

```javascript
// Senza destrutturazione
function presentaPersona(persona) {
    return `${persona.nome} ha ${persona.eta} anni`;
}

// Con destrutturazione - più pulito!
function presentaPersona({ nome, eta }) {
    return `${nome} ha ${eta} anni`;
}

// Con default values
function configuraPlayer({
    volume = 0.5,
    autoplay = false,
    quality = 'auto'
} = {}) {  // = {} rende l'intero parametro opzionale!
    // Configurazione robusta
}
```

### 8. Scope - La Visibilità delle Variabili 👁️

Lo scope determina dove una variabile è accessibile. È come le stanze di una casa - ciò che è in una stanza non è sempre visibile dalle altre.

#### Global Scope vs Local Scope

```javascript
// SCOPE GLOBALE - Visibile ovunque
let punteggioGlobale = 0;

function gioca() {
    // SCOPE LOCALE - Solo qui dentro
    let punteggioRound = 100;
    punteggioGlobale += punteggioRound;  // Posso accedere al globale
}

console.log(punteggioGlobale);  // OK
// console.log(punteggioRound);  // Errore! Non visibile
```

#### Scope Chain - La Catena di Visibilità

JavaScript cerca le variabili partendo dallo scope corrente e salendo verso l'esterno, come cercare le chiavi prima in tasca, poi nella borsa, poi in casa.

```javascript
const messaggio = "Globale";

function esterna() {
    const messaggio = "Esterna";  // Shadowing del globale
    
    function interna() {
        const messaggio = "Interna";  // Shadowing di nuovo
        console.log(messaggio);  // "Interna" - trova la più vicina
    }
    
    interna();
    console.log(messaggio);  // "Esterna"
}

esterna();
console.log(messaggio);  // "Globale"
```

**Concetto chiave**: JavaScript cerca sempre la variabile più vicina risalendo gli scope. È come cercare qualcosa partendo dalla stanza in cui sei, poi nel corridoio, poi in casa, poi nel quartiere.

#### Block Scope con let e const

```javascript
if (true) {
    let segreta = "Solo qui dentro";
    const ancheQuesta = "Invisibile fuori";
}
// console.log(segreta);  // Errore!

// Nei cicli ogni iterazione ha il suo scope
for (let i = 0; i < 3; i++) {
    let temporanea = i * 2;
    // i e temporanea esistono solo qui
}
```

<br>
<br>
<br>
<br>
<br>
<br>

## Parte IV - DOM e Interattività

### 9. DOM Manipulation - Il Ponte con il Browser 🌉

Il DOM è la rappresentazione del tuo HTML come un albero di oggetti. Manipolare il DOM è come ridecorare una stanza.

#### Selezione di Elementi

```javascript
// querySelector - Usa selettori CSS
const titolo = document.querySelector("#titolo");
const primaCard = document.querySelector(".card");
const bottoniAttivi = document.querySelectorAll(".btn.active");

// getElementById - Il più veloce per ID
const header = document.getElementById("header");
// Non serve il # perché cerca solo per ID!

// querySelectorAll - Trova tutti
const tuttiIParagrafi = document.querySelectorAll("p");

// Convertire NodeList in Array
const arrayBottoni = Array.from(document.querySelectorAll("button"));
// O con spread
const arrayCards = [...document.querySelectorAll(".card")];
```

#### Modifica del Contenuto

```javascript
const elemento = document.querySelector("#messaggio");

// textContent - Testo sicuro (per input utente)
elemento.textContent = "Testo sicuro, tags HTML vengono mostrati come testo";

// innerHTML - HTML potente (solo per contenuto trusted!)
elemento.innerHTML = "<strong>Testo</strong> formattato";
// PERICOLO: può eseguire script se usi input utente!

// innerText - Testo visibile rispettando CSS
elemento.innerText = "Solo testo visibile";
// Non mostra testo nascosto con display:none

// insertAdjacentHTML - Inserimento preciso
elemento.insertAdjacentHTML('beforebegin', '<p>Prima</p>');
elemento.insertAdjacentHTML('afterbegin', '<span>Inizio interno</span>');
elemento.insertAdjacentHTML('beforeend', '<span>Fine interno</span>');
elemento.insertAdjacentHTML('afterend', '<p>Dopo</p>');
```

#### Modifica degli Stili

```javascript
const box = document.querySelector(".box");

// style.property - Stili inline diretti
box.style.backgroundColor = "blue";  // Nota: camelCase!
box.style.width = "200px";
box.style.display = "none";  // Nasconde l'elemento
box.style.border = "2px solid red";

// Stili multipli con Object.assign
Object.assign(box.style, {
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
});

// classList - Gestione classi CSS (più pulito!)
box.classList.add("active", "highlighted");
box.classList.remove("hidden");
box.classList.toggle("expanded");  // Alterna
box.classList.contains("selected"); // Verifica
box.classList.replace("old", "new"); // Sostituisce
```

### 10. Eventi - Ascoltare e Reagire ⚡

Gli eventi sono il sistema nervoso della tua applicazione. Ogni click, movimento, pressione di tasto è un segnale che puoi intercettare.

#### onclick vs addEventListener - Due Filosofie

```javascript
const bottone = document.querySelector("#mio-bottone");

// onclick - Semplice ma limitato
bottone.onclick = function() {
    console.log("Cliccato!");
};
// Problema: puoi avere solo UN gestore per evento
bottone.onclick = altrafunzione; // Sovrascrive il precedente!

// addEventListener - Professionale e flessibile
bottone.addEventListener("click", function() {
    console.log("Primo gestore");
});

bottone.addEventListener("click", function() {
    console.log("Secondo gestore");
});
// Entrambi vengono eseguiti!

// Rimuovere un listener specifico
function gestoreClick() {
    console.log("Click gestito");
}

bottone.addEventListener("click", gestoreClick);
// Più tardi...
bottone.removeEventListener("click", gestoreClick);
```

**Confronto diretto:**

| Caratteristica | onclick | addEventListener |
|---------------|---------|-------------------|
| Gestori multipli | No (solo uno) | Sì (illimitati) |
| Controllo evento | Limitato | Completo (capturing, bubbling) |
| Rimozione | Difficile | Facile con removeEventListener |
| Best practice | Per demo rapide | Sempre in produzione |

#### L'Oggetto Event

```javascript
bottone.addEventListener("click", function(e) {
    // Informazioni sull'elemento
    e.target;              // Elemento che ha originato l'evento
    e.currentTarget;       // Elemento con il listener
    
    // Controllo comportamento
    e.preventDefault();    // Blocca azione default
    e.stopPropagation();  // Ferma il bubbling
    
    // Informazioni mouse
    e.clientX / e.clientY; // Posizione nella viewport
    e.pageX / e.pageY;     // Posizione nella pagina
    
    // Tasti modificatori
    e.ctrlKey;            // Ctrl premuto?
    e.shiftKey;           // Shift premuto?
});
```

#### Event Delegation - L'Ascoltatore Intelligente

Invece di mettere listener su ogni elemento, mettilo sul genitore:

```javascript
// INEFFICIENTE: Un listener per ogni bottone
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", gestisciClick);
});

// EFFICIENTE: Un solo listener sul contenitore
document.querySelector("#container").addEventListener("click", function(e) {
    // Controlla se il click viene da un bottone
    if (e.target.classList.contains("btn")) {
        console.log("Bottone cliccato:", e.target.textContent);
        
        // Puoi anche navigare il DOM
        const card = e.target.closest(".card");
        const id = e.target.dataset.id;
    }
});
```

Vantaggi enormi:
- Funziona anche per elementi aggiunti dopo
- Usa meno memoria
- Più facile da gestire

#### Eventi Speciali

```javascript
// change - Quando il valore cambia E l'utente ha finito
input.addEventListener("change", (e) => {
    console.log("Valore confermato:", e.target.value);
});

// input - Ad ogni modifica
input.addEventListener("input", (e) => {
    console.log("Digitando:", e.target.value);
});

// submit - Form inviato
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Impedisce refresh pagina
    // Gestisci i dati
});

// DOMContentLoaded - DOM pronto
document.addEventListener("DOMContentLoaded", () => {
    // Il DOM è caricato, puoi manipolarlo
});
```

### 11. Dialog e Modali 🪟

L'elemento `<dialog>` è una soluzione nativa moderna per creare modali.

```javascript
const dialog = document.querySelector("dialog");

// showModal() - Modale vero (consigliato)
dialog.showModal();
// - Blocca interazione con la pagina
// - Crea backdrop automatico
// - Focus trap automatico
// - Esc chiude

// show() - Dialogo non-modale
dialog.show();
// - Pagina ancora interagibile
// - Nessun backdrop
// - Nessun focus trap

// close() - Chiude il dialogo
dialog.close();
dialog.close("valore"); // Con returnValue

// Ascoltare la chiusura
dialog.addEventListener("close", () => {
    console.log("Chiuso con:", dialog.returnValue);
});
```

<br>
<br>
<br>
<br>
<br>
<br>

## Parte V - Pattern e Best Practices 🎯

### Pattern di Accumulo

L'accumulo è come riempire un secchio goccia a goccia - ogni iterazione aggiunge qualcosa al risultato.

```javascript
// Somma numerica
function calcolaTotale(prezzi) {
    let totale = 0;  // Il secchio vuoto
    for (const prezzo of prezzi) {
        totale += prezzo;  // Aggiungi ogni prezzo
    }
    return totale;
}

// Costruzione di stringa
function creaLista(elementi) {
    let html = "<ul>";  // Inizio
    for (const elemento of elementi) {
        html += `<li>${elemento}</li>`;  // Accumula
    }
    html += "</ul>";  // Chiudi
    return html;
}

// Filtraggio in nuovo array
function filtraPositivi(numeri) {
    const positivi = [];  // Array vuoto
    for (const num of numeri) {
        if (num > 0) {
            positivi.push(num);  // Accumula solo positivi
        }
    }
    return positivi;
}
```

### Flag Booleane - Gli Interruttori

Le flag sono interruttori che controllano il comportamento del programma.

```javascript
let debugMode = false;
let isLoading = false;
let hasError = false;

function eseguiOperazione() {
    isLoading = true;
    
    try {
        // Operazione...
        if (debugMode) {
            console.log("Operazione completata");
        }
    } catch (error) {
        hasError = true;
        console.error("Errore:", error);
    } finally {
        isLoading = false;
    }
}
```

### Variabili di Stato

Le variabili di stato tengono traccia di "dove siamo" nel programma.

```javascript
// Stati di un form
let formState = "editing";  // "editing", "submitting", "submitted", "error"

function gestisciForm() {
    switch(formState) {
        case "editing":
            abilitaCampi();
            break;
        case "submitting":
            mostraSpinner();
            disabilitaCampi();
            break;
        case "submitted":
            mostraSuccesso();
            break;
        case "error":
            mostraErrore();
            break;
    }
}
```

### Configuration Objects Pattern

Centralizzare le configurazioni rende il codice più manutenibile:

```javascript
const CONFIG = {
    API_URL: "https://api.example.com",
    MAX_RETRIES: 3,
    TIMEOUT: 5000,
    ITEMS_PER_PAGE: 20,
    COLORS: {
        primary: "#007bff",
        success: "#28a745",
        danger: "#dc3545"
    },
    MESSAGES: {
        error: "Si è verificato un errore",
        success: "Operazione completata",
        loading: "Caricamento in corso..."
    }
};

// Uso nel codice
async function fetchData(endpoint) {
    const url = `${CONFIG.API_URL}/${endpoint}`;
    
    try {
        const response = await fetch(url, {
            timeout: CONFIG.TIMEOUT
        });
        return response.json();
    } catch (error) {
        console.error(CONFIG.MESSAGES.error);
    }
}
```

### Gestione Errori con try-catch

Prevedi cosa può andare storto e gestiscilo con grazia:

```javascript
// Try-catch base
function parseJSON(jsonString) {
    try {
        // Codice che potrebbe fallire
        const data = JSON.parse(jsonString);
        return data;
    } catch (error) {
        // Gestisci l'errore
        console.error("JSON non valido:", error.message);
        return null;
    } finally {
        // Eseguito sempre (opzionale)
        console.log("Parsing completato");
    }
}

// Con async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Errore nel recupero dati:", error);
        // Ritorna dati di fallback
        return { id: userId, name: "Utente sconosciuto", error: true };
    }
}
```

### Best Practices - Naming Convention

I nomi dovrebbero raccontare una storia:

```javascript
// NAMING CONVENTION STANDARD

// Costanti globali: UPPER_SNAKE_CASE
const MAX_ATTEMPTS = 3;
const API_KEY = "abc123";
const DEFAULT_TIMEOUT = 5000;

// Variabili e funzioni: camelCase
let userName = "Mario";
let isActive = true;
function calculateTotal() {}
function getUserById(id) {}

// Classi e costruttori: PascalCase
class UserAccount {}
class ShoppingCart {}
function Person(name) {} // Costruttore

// Booleani: come domande che iniziano con is/has/can
let isVisible = true;
let hasPermission = false;
let canEdit = true;

// Funzioni: verbi che descrivono l'azione
function fetchData() {}
function calculateSum() {}
function validateEmail() {}
function renderComponent() {}

// Array: nomi plurali
const users = [];
const products = [];
const selectedItems = [];

// Oggetti: nomi singolari descrittivi
const user = {};
const product = {};
const configuration = {};
```

### Testing Incrementale

Testa mentre costruisci, come assaggiare mentre cucini:

```javascript
function processOrder(order) {
    console.log("1. Ordine ricevuto:", order);
    
    if (!order.items || order.items.length === 0) {
        console.log("2. Ordine vuoto");
        return null;
    }
    
    let total = 0;
    for (const item of order.items) {
        console.log(`3. Processo: ${item.name} - €${item.price}`);
        total += item.price * item.quantity;
    }
    
    console.log("4. Totale finale:", total);
    return total;
}
```

### Separazione delle Responsabilità

Ogni funzione dovrebbe fare una cosa sola e farla bene:

```javascript
// CATTIVO: Fa troppe cose
function processUserData(userData) {
    // Valida, salva, invia email, aggiorna UI...
    if (!userData.email) return false;
    database.save(userData);
    sendEmail(userData.email);
    updateUI(userData);
}

// BUONO: Responsabilità separate
function validateUser(userData) {
    return userData.email && userData.email.includes("@");
}

function saveUser(userData) {
    return database.save(userData);
}

function notifyUser(email) {
    return sendEmail(email);
}

function processUser(userData) {
    if (!validateUser(userData)) {
        return { success: false, error: "Validazione fallita" };
    }
    
    const saved = saveUser(userData);
    if (saved) {
        notifyUser(userData.email);
        updateUI(userData);
    }
    
    return { success: true };
}
```

### Evoluzione del Codice - Dal Semplice al Sofisticato

#### Da Hardcoded a Dinamico

```javascript
// EVOLUZIONE 1: Completamente hardcoded
console.log("Benvenuto Mario!");
console.log("Hai 25 anni");

// EVOLUZIONE 2: Con variabili
const nome = "Mario";
const eta = 25;
console.log(`Benvenuto ${nome}!`);
console.log(`Hai ${eta} anni`);

// EVOLUZIONE 3: Con input utente
const nome = prompt("Come ti chiami?");
const eta = prompt("Quanti anni hai?");
console.log(`Benvenuto ${nome}! Hai ${eta} anni`);

// EVOLUZIONE 4: Con oggetto e funzione
function presentaUtente(utente) {
    return `Benvenuto ${utente.nome}! Hai ${utente.eta} anni`;
}

const utente = {
    nome: document.querySelector("#nome").value,
    eta: parseInt(document.querySelector("#eta").value)
};

document.querySelector("#output").innerText = presentaUtente(utente);
```

#### Da Ripetitivo a DRY (Don't Repeat Yourself)

```javascript
// CODICE RIPETITIVO
let prezzo1 = 100;
let sconto1 = 20;
let finale1 = prezzo1 - (prezzo1 * sconto1 / 100);

let prezzo2 = 200;
let sconto2 = 15;
let finale2 = prezzo2 - (prezzo2 * sconto2 / 100);

// CODICE DRY
function applicaSconto(prezzo, percentuale) {
    return prezzo - (prezzo * percentuale / 100);
}

const prodotti = [
    { nome: "Scarpe", prezzo: 100, sconto: 20 },
    { nome: "Borsa", prezzo: 200, sconto: 15 }
];

prodotti.forEach(prodotto => {
    const finale = applicaSconto(prodotto.prezzo, prodotto.sconto);
    console.log(`${prodotto.nome}: €${finale}`);
});
```

#### Da Procedurale a Event-Driven

```javascript
// PROCEDURALE: Esegue subito in sequenza
const nome = prompt("Nome?");
const eta = prompt("Età?");
alert(`Ciao ${nome}, hai ${eta} anni`);

// EVENT-DRIVEN: Aspetta l'utente
document.querySelector("#form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.querySelector("#nome").value;
    const eta = document.querySelector("#eta").value;
    
    document.querySelector("#risultato").innerText = 
        `Ciao ${nome}, hai ${eta} anni`;
});
```

#### Da Globale a Modulare

```javascript
// TUTTO GLOBALE (problematico)
let punteggio = 0;
let vite = 3;
function aumentaPunteggio() { punteggio += 10; }
function perdiVita() { vite--; }

// MODULARE (migliore)
const Game = {
    stato: {
        punteggio: 0,
        vite: 3
    },
    
    aumentaPunteggio(punti = 10) {
        this.stato.punteggio += punti;
        this.aggiornaUI();
    },
    
    perdiVita() {
        this.stato.vite--;
        if (this.stato.vite <= 0) {
            this.gameOver();
        }
        this.aggiornaUI();
    },
    
    aggiornaUI() {
        document.querySelector("#punteggio").innerText = this.stato.punteggio;
        document.querySelector("#vite").innerText = this.stato.vite;
    },
    
    reset() {
        this.stato.punteggio = 0;
        this.stato.vite = 3;
        this.aggiornaUI();
    }
};
```

<br>
<br>
<br>
<br>
<br>
<br>

## Parte VI - Persistenza dei Dati e Storage 💾

### localStorage - La Memoria a Lungo Termine del Browser

Il localStorage è la memoria permanente del tuo sito web nel browser. È come avere un piccolo database personale per ogni utente che visita il tuo sito. I dati sopravvivono anche quando l'utente chiude il browser, spegne il computer, e torna dopo settimane. Ma c'è una regola d'oro che non puoi mai dimenticare: **localStorage parla solo "stringhese"** - può memorizzare esclusivamente stringhe di testo.

#### Il Problema Fondamentale: Il Muro delle Stringhe

JavaScript è un linguaggio ricco di strutture dati complesse: oggetti con proprietà, array di elementi, booleani, numeri. Il localStorage invece è come un vecchio archivio che accetta solo fogli di carta con testo scritto sopra. Non puoi infilarci direttamente un oggetto tridimensionale - devi prima "appiattirlo" in qualcosa di piatto come un foglio.

```javascript
// Questo è quello che vorresti fare (ma non funziona!)
const utente = {
    nome: "Alice",
    livello: 12,
    isPremium: true,
    inventario: ["spada", "pozione", "mappa"]
};

// ERRORE COMUNE: Salvare direttamente
localStorage.setItem('utente', utente);
// Cosa viene salvato? La stringa "[object Object]" 😱
// Hai perso TUTTO! Nome, livello, inventario... tutto diventato quella stringa inutile

const tasks = [
    { id: 1, testo: "Comprare il latte", fatto: false },
    { id: 2, testo: "Studiare JavaScript", fatto: true }
];

localStorage.setItem('tasks', tasks);
// Salvato: "[object Object],[object Object]" 
// Di nuovo, informazioni completamente perse!
```

È come provare a spedire un pacco attraverso un fax - il fax accetta solo carta, non oggetti tridimensionali!

#### JSON - Il Traduttore Universale dei Dati

JSON (JavaScript Object Notation) è il ponte magico tra il mondo ricco di JavaScript e il mondo piatto delle stringhe. Pensa a JSON come a un esperto di origami: sa come prendere una struttura complessa e "piegarla" in un foglio di carta (stringa), e poi sa come "riaprirla" perfettamente nella sua forma originale.

**JSON.stringify() - Lo Smontatore/Appiattitore**

`JSON.stringify()` prende i tuoi dati JavaScript e li trasforma in una stringa di testo che descrive perfettamente la struttura. È come fare una foto dettagliata di un mobile IKEA smontato - ogni pezzo è documentato e numerato.

```javascript
const impostazioni = {
    tema: 'dark',
    notifiche: true,
    volume: 80,
    suoni: {
        click: true,
        notifica: false
    }
};

// La magia dello "smontaggio"
const stringaJSON = JSON.stringify(impostazioni);
console.log(stringaJSON);
// '{"tema":"dark","notifiche":true,"volume":80,"suoni":{"click":true,"notifica":false}}'

// Ora è una stringa! Puoi salvarla
localStorage.setItem('settings', stringaJSON);

// JSON.stringify ha anche parametri opzionali utili
const bello = JSON.stringify(impostazioni, null, 2);
// Risultato indentato e leggibile:
// {
//   "tema": "dark",
//   "notifiche": true,
//   ...
// }
```

**JSON.parse() - Il Rimontatore/Ricostruttore**

`JSON.parse()` è l'operazione inversa: prende una stringa JSON e la ricostruisce nell'oggetto JavaScript originale. È come seguire le istruzioni IKEA al contrario per rimontare il mobile.

```javascript
// Recupera la stringa dal localStorage
const stringaSalvata = localStorage.getItem('settings');
console.log(typeof stringaSalvata); // "string" - è ancora solo testo!

// La magia del "rimontaggio"
const impostazioniRecuperate = JSON.parse(stringaSalvata);
console.log(typeof impostazioniRecuperate); // "object" - è tornato un oggetto!

// Ora puoi usarlo normalmente
if (impostazioniRecuperate.tema === 'dark') {
    document.body.classList.add('dark-mode');
}

impostazioniRecuperate.volume = 90; // Puoi modificarlo
console.log(impostazioniRecuperate.suoni.click); // true - tutto è stato preservato!
```

#### Il Ciclo di Vita Completo dei Dati

Vediamo il processo completo, dall'inizio alla fine, come fosse il ciclo di vita di un documento importante:

```javascript
// FASE 1: CREAZIONE - Hai i tuoi dati JavaScript
const todoList = [
    { id: 1, testo: "Imparare localStorage", completato: true },
    { id: 2, testo: "Creare un'app", completato: false },
    { id: 3, testo: "Conquistare il mondo", completato: false }
];

// FASE 2: SERIALIZZAZIONE - Trasformi in stringa
const todoListStringa = JSON.stringify(todoList);
// Ora è: '[{"id":1,"testo":"Imparare localStorage","completato":true},...]'

// FASE 3: SALVATAGGIO - Metti nel localStorage
localStorage.setItem('todos', todoListStringa);
// I dati ora sono salvati nel browser dell'utente!

// ... L'utente chiude il browser, spegne il PC, va a dormire ...
// ... Il giorno dopo riapre il tuo sito ...

// FASE 4: RECUPERO - Leggi dal localStorage
const todoListRecuperata = localStorage.getItem('todos');
// È ancora una stringa!

// FASE 5: DESERIALIZZAZIONE - Ritrasformi in oggetto
const todoListRicostruita = JSON.parse(todoListRecuperata);
// È tornata un array di oggetti JavaScript!

// FASE 6: USO - Lavori con i dati come sempre
todoListRicostruita.forEach(todo => {
    console.log(`${todo.testo}: ${todo.completato ? '✓' : '○'}`);
});
```

#### Gestire il Primo Avvio - Il Pattern Robusto

Il problema più comune è gestire il caso in cui non ci sono ancora dati salvati (primo avvio dell'app). Se provi a fare `JSON.parse(null)`, JavaScript genera un errore. Devi essere preparato!

```javascript
// PATTERN 1: Controllo Esplicito
function caricaDatiDalStorage() {
    const datiSalvati = localStorage.getItem('dati');
    
    if (datiSalvati !== null) {
        // Esistono dati salvati, parsali
        try {
            return JSON.parse(datiSalvati);
        } catch (error) {
            // I dati erano corrotti
            console.error('Dati corrotti, uso default');
            return [];
        }
    } else {
        // Primo avvio, non ci sono dati
        return [];
    }
}

// PATTERN 2: Operatore OR (più conciso)
const taskData = JSON.parse(localStorage.getItem("data")) || [];
// Come funziona:
// 1. getItem("data") ritorna stringa o null
// 2. Se stringa: JSON.parse la trasforma in oggetto/array
// 3. Se null: JSON.parse(null) ritorna null
// 4. L'operatore || vede null (falsy) e usa []

// PATTERN 3: Try-Catch Completo (più robusto)
function loadSafeData(key, defaultValue = []) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Errore caricamento ${key}:`, error);
        return defaultValue;
    }
}

// PATTERN 4: Funzione Helper Riutilizzabile
const Storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    }
};

// Uso semplificato
const userData = Storage.get('user', { nome: 'Ospite' });
Storage.set('user', { nome: 'Mario', punti: 100 });
```

#### Ispezionare il localStorage nei DevTools - La Finestra Segreta

Gli strumenti per sviluppatori del browser ti permettono di vedere dentro il localStorage come se avessi i raggi X. È fondamentale per il debugging!

**Come Accedere (in tutti i browser moderni):**

1. **Apri i DevTools**: F12 (o Cmd+Opt+I su Mac)
2. **Trova la sezione Storage**:
   - **Chrome/Edge**: Tab "Application" → Storage → Local Storage
   - **Firefox**: Tab "Storage" → Local Storage
   - **Safari**: Tab "Storage" → Local Storage

**L'Interfaccia del localStorage:**

Vedrai una tabella con due colonne principali:
- **Key (Chiave)**: Il nome che hai dato al dato
- **Value (Valore)**: Il contenuto (sempre come stringa)

```javascript
// Nel tuo codice
localStorage.setItem('user', JSON.stringify({nome: 'Mario', level: 5}));

// Nei DevTools vedrai:
// Key: "user"
// Value: "{\"nome\":\"Mario\",\"level\":5}"
```

**Cosa Puoi Fare nei DevTools:**

1. **Verificare**: Controlla se i dati sono salvati correttamente
2. **Modificare**: Doppio click su un valore per editarlo al volo
3. **Eliminare**: Seleziona una riga e premi Canc
4. **Svuotare Tutto**: Click sul cestino per fare clear totale
5. **Filtrare**: Usa la barra di ricerca per trovare chiavi specifiche

È come avere un pannello di controllo segreto per la memoria del tuo sito!

#### I Limiti del localStorage - Le Regole del Gioco

Il localStorage ha delle limitazioni importanti che devi conoscere:

```javascript
// LIMITE 1: Solo Stringhe
localStorage.setItem('numero', 42);
typeof localStorage.getItem('numero'); // "string" - è diventato "42"!

// LIMITE 2: Spazio Limitato (circa 5-10 MB)
try {
    const datiBigData = new Array(1000000).fill('dati enormi');
    localStorage.setItem('big', JSON.stringify(datiBigData));
} catch (e) {
    console.error('Quota exceeded!'); // Spazio esaurito
}

// LIMITE 3: Sincrono (blocca il browser)
// Non fare questo con dati enormi!
const milleOggetti = new Array(1000).fill({...oggettoComplesso});
localStorage.setItem('huge', JSON.stringify(milleOggetti)); // Freeze!

// LIMITE 4: Solo stesso dominio
// localStorage di esempio.com non può leggere quello di altro.com

// LIMITE 5: Non per dati sensibili!
// NON fare questo:
localStorage.setItem('password', 'supersegreta123'); // NO!
localStorage.setItem('cartaCredito', '1234-5678-9012-3456'); // NO!
```

#### Best Practices e Pattern Avanzati

```javascript
// 1. VERSIONAMENTO - Gestisci cambiamenti di struttura
const STORAGE_VERSION = 'v2';

function migrateData() {
    const version = localStorage.getItem('version');
    if (version !== STORAGE_VERSION) {
        // Migra vecchi dati alla nuova struttura
        const oldData = localStorage.getItem('data');
        if (oldData) {
            // Trasforma vecchia struttura in nuova
            const migrated = migrateFromV1(JSON.parse(oldData));
            localStorage.setItem('data', JSON.stringify(migrated));
        }
        localStorage.setItem('version', STORAGE_VERSION);
    }
}

// 2. EXPIRATION - Dati con scadenza
function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl
    };
    localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    
    const item = JSON.parse(itemStr);
    const now = new Date();
    
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

// 3. COMPRESSIONE - Per dati grandi
// Usa librerie come lz-string per comprimere
// const compressed = LZString.compress(JSON.stringify(bigData));
// localStorage.setItem('compressed', compressed);

// 4. NAMESPACE - Evita collisioni
const APP_PREFIX = 'myapp_';

function saveAppData(key, value) {
    localStorage.setItem(APP_PREFIX + key, JSON.stringify(value));
}

function getAppData(key) {
    return JSON.parse(localStorage.getItem(APP_PREFIX + key) || 'null');
}
```

#### I Comandamenti del localStorage 📜

1. **Salverai solo stringhe** - Usa sempre `JSON.stringify()`
2. **Parserai con cautela** - Controlla `null` prima di `JSON.parse()`
3. **Non salverai dati sensibili** - È facilmente ispezionabile
4. **Gestirai gli errori** - `JSON.parse()` può fallire su stringhe malformate
5. **Rispetterai i limiti** - Circa 5-10 MB di spazio
6. **Pulirai quando necessario** - `removeItem()` o `clear()`
7. **Testerai nei DevTools** - Ispeziona sempre i dati salvati
8. **Fornirai valori default** - Per il primo avvio
9. **Versionerai se necessario** - Per future migrazioni
10. **Userai namespace** - Per evitare conflitti

Il localStorage è uno strumento potentissimo per creare applicazioni web che "ricordano" l'utente. Padroneggiare il ciclo JSON.stringify → setItem → getItem → JSON.parse è una competenza fondamentale per ogni sviluppatore web moderno!

<br>
<br>
<br>
<br>
<br>
<br>

## Parte VII - Pattern Avanzati e Algoritmi 🎯

### Regex - Il Linguaggio dei Pattern 🔍

Le espressioni regolari (regex) sono come metal detector super sofisticati per il testo. Mentre un metal detector normale trova solo metallo, una regex può trovare qualsiasi pattern tu possa descrivere: email, numeri di telefono, date, codici fiscali, o anche pattern personalizzati che inventi tu. Immagina di dover trovare tutti i numeri di telefono in un documento di 1000 pagine - manualmente ci metteresti giorni, una regex lo fa in millisecondi!

#### Anatomia di una Regex

Una regex è racchiusa tra due slash `/pattern/`, come una formula matematica tra parentesi. Ma questi slash sono più che semplici delimitatori - sono il confine tra il mondo normale di JavaScript e il mondo magico dei pattern.

```javascript
// Regex letterale (più comune)
const regex = /ciao/;

// Costruttore RegExp (quando il pattern è dinamico)
const parola = "ciao";
const regexDinamica = new RegExp(parola);

// Test base: c'è o non c'è?
const testo = "ciao mondo";
console.log(regex.test(testo));    // true - trova "ciao"
console.log(testo.match(regex));   // ["ciao"] - restituisce il match
console.log(testo.search(regex));  // 0 - posizione del primo match
```

Ma la vera potenza inizia quando usi caratteri speciali...

#### Caratteri Speciali - I Superpoteri delle Regex

Alcuni caratteri nelle regex hanno significati speciali, come simboli magici in un incantesimo. Questi sono i tuoi strumenti principali:

```javascript
// . (punto) = Qualsiasi carattere singolo
/c.ao/.test("ciao");  // true
/c.ao/.test("c9ao");  // true
/c.ao/.test("c ao");  // true
/c.ao/.test("cao");   // false - manca un carattere

// ^ = Inizio stringa
/^ciao/.test("ciao mondo");  // true
/^ciao/.test("oh ciao");     // false - non inizia con ciao

// $ = Fine stringa
/mondo$/.test("ciao mondo"); // true
/mondo$/.test("mondo ciao"); // false - non finisce con mondo

// | = OR logico
/cane|gatto/.test("ho un cane");  // true
/cane|gatto/.test("ho un gatto"); // true
/cane|gatto/.test("ho un topo");  // false
```

#### Character Classes [] - Il Club Esclusivo

Le parentesi quadre creano un "club" di caratteri - il pattern matcha se trova UNO QUALSIASI dei membri del club.

```javascript
// Set di caratteri
/[aeiou]/.test("ciao");     // true - trova 'i'
/c[aeiou]ao/.test("ciao");  // true - 'i' è nel set

// Range con il trattino
/[a-z]/.test("hello");      // true - lettere minuscole
/[A-Z]/.test("Hello");      // true - trova 'H'
/[0-9]/.test("anno2025");   // true - trova '2'
/[a-zA-Z0-9]/.test("Test1"); // true - alfanumerico

// Negazione con ^ (dentro le quadre significa "NON")
/[^aeiou]/.test("xyz");     // true - consonanti
/[^0-9]/.test("123");       // false - solo numeri
```

**Trucco importante**: Dentro le `[]`, molti caratteri speciali perdono il loro potere!

```javascript
// Fuori dalle [], questi caratteri sono speciali
/a.b/.test("a.b");     // false - . significa "qualsiasi carattere"
/a\.b/.test("a.b");    // true - \. escape per punto letterale

// Dentro [], sono letterali automaticamente!
/[.]/.test(".");       // true - punto letterale
/[.?*+]/.test("?");    // true - tutti letterali dentro []
```

#### Classi Predefinite - Le Scorciatoie

JavaScript offre delle "macro" per i pattern più comuni. Sono come abbreviazioni che tutti conoscono:

```javascript
// \d = digit (cifra 0-9)
/\d/.test("anno2025");           // true
/\d{4}/.test("2025");            // true - esattamente 4 cifre
"ho 25 anni e peso 70kg".match(/\d+/g); // ["25", "70"]

// \D = NON cifra (opposto di \d)
/\D/.test("abc");                // true
/^\D+$/.test("solo-lettere");    // true - nessuna cifra

// \w = word character (lettere, numeri, _)
/\w/.test("hello_123");          // true
/^\w+$/.test("user_name");       // true - username valido
/^\w+$/.test("user-name");       // false - il trattino non è \w

// \W = NON word character
/\W/.test("hello world");        // true - lo spazio

// \s = spazio bianco (space, tab, newline)
/\s/.test("hello world");        // true
/\s+/.test("   ");               // true - uno o più spazi
const pulizia = str => str.replace(/\s+/g, ' '); // Normalizza spazi

// \S = NON spazio
/\S/.test("   ");                // false - solo spazi
/\S/.test(" a ");                // true - c'è 'a'

// \b = word boundary (confine di parola)
/\bcat\b/.test("the cat sat");   // true - 'cat' come parola intera
/\bcat\b/.test("category");      // false - 'cat' è parte di 'category'
/\bthe\b/.test("thematic");      // false
```

#### Quantificatori - Quante Volte?

I quantificatori specificano quante volte un elemento deve ripetersi. Sono come dire "voglio 3 di questi" invece di "voglio questo, questo e questo".

```javascript
// ? = zero o uno (opzionale)
/colou?r/.test("color");      // true - americana
/colou?r/.test("colour");     // true - britannica
/https?:/.test("http:");      // true - s opzionale

// + = uno o più (almeno uno)
/\d+/.test("123");           // true - una o più cifre
/\s+/.test("   ");           // true - uno o più spazi
/ab+c/.test("abbbbc");       // true - una o più 'b'

// * = zero o più (può non esserci)
/ab*c/.test("ac");           // true - zero 'b'
/ab*c/.test("abbbbc");       // true - molte 'b'
/\d*/.test("");              // true - zero cifre è ok!

// {n} = esattamente n volte
/\d{4}/.test("2025");        // true - esattamente 4 cifre
/\d{4}/.test("25");          // false - ne servono 4

// {n,m} = da n a m volte
/\d{2,4}/.test("25");        // true - 2 cifre ok
/\d{2,4}/.test("2025");      // true - 4 cifre ok
/\d{2,4}/.test("12345");     // true - matcha "1234"

// {n,} = almeno n volte
/\d{3,}/.test("12");         // false - servono almeno 3
/\d{3,}/.test("123456");     // true - 3 o più
```

#### Escape - Quando il Speciale Diventa Normale

Il backslash `\` è il tuo "disattivatore" di poteri speciali. Se vuoi cercare letteralmente un carattere che ha significato speciale, devi "escaparlo".

```javascript
// Caratteri che necessitano escape: . * + ? ^ $ { } ( ) [ ] \ |

// Cercare un punto letterale
/\./.test("3.14");              // true
/\$\d+\.\d{2}/.test("$19.99");  // true - prezzo

// Cercare parentesi
/\(.*\)/.test("(contenuto)");    // true

// Cercare backslash (doppio escape!)
/\\/.test("C:\\Users");          // true

// In una stringa devi fare doppio escape
const pattern = "\\d+\\.\\d+";   // Per ottenere \d+\.\d+
const regex = new RegExp(pattern);
```

#### Flags - I Modificatori Globali

Le flag sono come interruttori che cambiano il comportamento della regex. Si mettono dopo lo slash finale:

```javascript
// g = global (trova TUTTI i match, non solo il primo)
"ciao ciao".match(/ciao/);       // ["ciao"] - solo il primo
"ciao ciao".match(/ciao/g);      // ["ciao", "ciao"] - tutti

// i = case insensitive (ignora maiuscole/minuscole)
/javascript/i.test("JavaScript"); // true
/CIAO/i.test("ciao");            // true

// m = multiline (^ e $ matchano inizio/fine di ogni riga)
const testo = `prima riga
seconda riga
terza riga`;
testo.match(/^.*$/gm);           // ["prima riga", "seconda riga", "terza riga"]

// s = dotAll (il . matcha anche newline)
/.*/s.test("riga1\nriga2");      // true - . include \n

// Combinare flag
/ciao/gi  // Global + case insensitive
/^test/gm // Global + multiline
```

#### Pattern del Mondo Reale - Le Regex Utili

Ecco pattern che userai davvero nei tuoi progetti:

```javascript
// EMAIL (semplificata ma efficace)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
emailRegex.test("user@example.com");  // true
emailRegex.test("invalid@");          // false

// TELEFONO ITALIANO
const telRegex = /^(\+39\s?)?3\d{2}\s?\d{6,7}$/;
telRegex.test("+39 333 1234567");     // true
telRegex.test("333 1234567");         // true

// CODICE FISCALE ITALIANO
const cfRegex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;

// URL
const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;

// PASSWORD FORTE (min 8 char, maiuscola, minuscola, numero)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

// DATA ITALIANA (GG/MM/AAAA)
const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

// RIMUOVI CARATTERI SPECIALI (sanitizzazione)
function pulisciInput(str) {
    return str.replace(/[^a-zA-Z0-9\s-]/g, '');
}

// ESTRAI NUMERI DA TESTO
const testo = "Ho comprato 3 mele e 2 pere per €5.50";
const numeri = testo.match(/\d+\.?\d*/g); // ["3", "2", "5.50"]

// RIMUOVI HTML TAGS
const testoSenzaHTML = htmlString.replace(/<[^>]*>/g, '');

// CAPITALIZZA PRIME LETTERE
const capitalizza = str => str.replace(/\b\w/g, l => l.toUpperCase());
capitalizza("ciao mondo"); // "Ciao Mondo"

// TROVA PAROLE DUPLICATE
const trovaDuplicati = str => {
    const regex = /\b(\w+)\s+\1\b/gi;
    return str.match(regex);
};
trovaDuplicati("il il gatto sul sul tetto"); // ["il il", "sul sul"]
```

#### Lookahead e Lookbehind - Gli Occhi del Futuro

Questi sono pattern avanzati che "guardano avanti" o "indietro" senza consumare caratteri:

```javascript
// Lookahead positivo (?=...)
/\d+(?=€)/.exec("costa 50€")[0];  // "50" - numero seguito da €

// Lookahead negativo (?!...)
/\d+(?!€)/.exec("50 mele")[0];    // "50" - numero NON seguito da €

// Lookbehind positivo (?<=...)
/(?<=€)\d+/.exec("€50")[0];       // "50" - numero preceduto da €

// Lookbehind negativo (?<!...)
/(?<!€)\d+/.exec("50 mele")[0];   // "50" - numero NON preceduto da €
```

### Call Stack e Ricorsione - La Torre di Piatti 📚

Il Call Stack è il "taccuino" di JavaScript dove tiene traccia di quale funzione sta eseguendo e quali sono in attesa. È fondamentale capirlo per comprendere come JavaScript esegue il codice, specialmente con la ricorsione.

#### Il Modello Mentale: La Pila di Piatti

Immagina di lavare i piatti. Hai una pila dove metti i piatti sporchi:
- Quando arriva un piatto sporco, lo metti **sopra** la pila (push)
- Quando lavi un piatto, prendi quello **in cima** (pop)
- Non puoi prendere un piatto dal mezzo senza far cadere quelli sopra

Questo si chiama LIFO (Last In, First Out) - l'ultimo arrivato è il primo a uscire. È esattamente come funziona il Call Stack di JavaScript!

```javascript
// Simuliamo visivamente il Call Stack
function prima() {
    console.log("Inizio prima");
    seconda();
    console.log("Fine prima");
}

function seconda() {
    console.log("Inizio seconda");
    terza();
    console.log("Fine seconda");
}

function terza() {
    console.log("Eseguo terza");
}

prima();

// Output:
// Inizio prima
// Inizio seconda
// Eseguo terza
// Fine seconda
// Fine prima

// Il Call Stack evolve così:
// []                    - Vuoto
// [prima]               - Entra prima
// [prima, seconda]      - Entra seconda
// [prima, seconda, terza] - Entra terza
// [prima, seconda]     - Esce terza
// [prima]               - Esce seconda
// []                    - Esce prima
```

#### Visualizzare il Call Stack

Creiamo un "mock" Call Stack per vedere cosa succede:

```javascript
// Call Stack visuale
const callStack = [];

function mostraStack() {
    console.log("Stack:", [...callStack]);
}

function a() {
    callStack.push("a()");
    mostraStack(); // ["a()"]
    b();
    callStack.pop();
}

function b() {
    callStack.push("b()");
    mostraStack(); // ["a()", "b()"]
    c();
    callStack.pop();
}

function c() {
    callStack.push("c()");
    mostraStack(); // ["a()", "b()", "c()"]
    callStack.pop();
}

a();
```

Ma il vero potere del Call Stack si vede con la ricorsione...

#### Ricorsione - La Funzione che Chiama Se Stessa

La ricorsione è quando una funzione risolve un problema chiamando se stessa con una versione "più piccola" del problema. È come le matrioske russe - ogni bambola contiene una versione più piccola di se stessa.

**Anatomia di una Funzione Ricorsiva:**

```javascript
function ricorsiva(input) {
    // 1. CASO BASE - La condizione di STOP
    if (condizioneFinale) {
        return risultatoFinale;
    }
    
    // 2. CASO RICORSIVO - Chiama se stessa con input modificato
    return ricorsiva(inputPiùPiccolo);
}
```

**Esempio Classico: Fattoriale**

Il fattoriale di n (n!) è n × (n-1) × (n-2) × ... × 1

```javascript
// Versione iterativa (con loop)
function fattorialeIterativo(n) {
    let risultato = 1;
    for (let i = n; i > 0; i--) {
        risultato *= i;
    }
    return risultato;
}

// Versione ricorsiva (elegante!)
function fattoriale(n) {
    // CASO BASE: 0! = 1 e 1! = 1
    if (n <= 1) return 1;
    
    // CASO RICORSIVO: n! = n × (n-1)!
    return n * fattoriale(n - 1);
}

// Come funziona fattoriale(4):
// fattoriale(4) = 4 * fattoriale(3)
// fattoriale(3) = 3 * fattoriale(2)
// fattoriale(2) = 2 * fattoriale(1)
// fattoriale(1) = 1 (caso base!)
// Ora risale:
// fattoriale(2) = 2 * 1 = 2
// fattoriale(3) = 3 * 2 = 6
// fattoriale(4) = 4 * 6 = 24
```

#### Conversione Decimale a Binario - Ricorsione in Azione

Convertiamo un numero decimale in binario usando la ricorsione:

```javascript
// ALGORITMO:
// 1. Dividi per 2 e prendi il resto (0 o 1)
// 2. Continua con il quoziente
// 3. I resti in ordine inverso sono il binario

function decimalToBinary(num) {
    // CASO BASE: 0 e 1 sono già binari
    if (num === 0 || num === 1) {
        return String(num);
    }
    
    // CASO RICORSIVO
    // Quoziente per la prossima chiamata, resto per questo bit
    const quoziente = Math.floor(num / 2);
    const resto = num % 2;
    
    // La magia: concatena il risultato ricorsivo con il resto
    return decimalToBinary(quoziente) + resto;
}

// Tracciamo decimalToBinary(5):
// decimalToBinary(5)
//   → decimalToBinary(2) + 1
//     → decimalToBinary(1) + 0
//       → "1" (caso base)
//     → "1" + 0 = "10"
//   → "10" + 1 = "101"

console.log(decimalToBinary(5));  // "101"
console.log(decimalToBinary(10)); // "1010"
```

#### Ricorsione con Memorizzazione - Ottimizzazione

La ricorsione può essere inefficiente se ricalcola gli stessi valori. La memorizzazione (memoization) salva i risultati già calcolati:

```javascript
// Fibonacci senza memorizzazione (LENTO!)
function fibLento(n) {
    if (n <= 1) return n;
    return fibLento(n - 1) + fibLento(n - 2);
}

// Fibonacci con memorizzazione (VELOCE!)
const fibMemo = (function() {
    const cache = {};
    
    return function fib(n) {
        // Già calcolato?
        if (n in cache) return cache[n];
        
        // Caso base
        if (n <= 1) return n;
        
        // Calcola e memorizza
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
})();

console.time("Lento");
fibLento(40);      // ~2 secondi
console.timeEnd("Lento");

console.time("Veloce");
fibMemo(40);       // ~0.01 secondi!
console.timeEnd("Veloce");
```

### setTimeout e Animazioni - Il Controllo del Tempo ⏰

`setTimeout` è il modo di JavaScript per dire "fai questo, ma tra un po'". Non è un timer che blocca tutto - è più come impostare una sveglia che suonerà mentre continui a fare altro.

#### setTimeout - La Sveglia Asincrona

```javascript
// Sintassi base
setTimeout(funzione, millisecondi);

// Esempio semplice
console.log("1. Inizio");
setTimeout(() => {
    console.log("2. Dopo 1 secondo");
}, 1000);
console.log("3. Continuo subito");

// Output:
// 1. Inizio
// 3. Continuo subito
// 2. Dopo 1 secondo (dopo 1s)
```

Il punto fondamentale: JavaScript NON si ferma ad aspettare! Imposta il timer e continua immediatamente.

#### setTimeout con Parametri e Cancellazione

```javascript
// Passare parametri alla funzione
function saluta(nome, titolo) {
    console.log(`Ciao ${titolo} ${nome}`);
}

setTimeout(saluta, 2000, "Mario", "Signor");
// Dopo 2 secondi: "Ciao Signor Mario"

// Cancellare un timeout
const timerId = setTimeout(() => {
    console.log("Non mi vedrai mai!");
}, 5000);

// Cambi idea e cancelli
clearTimeout(timerId);

// Timeout condizionale
let conferma = false;

const bomber = setTimeout(() => {
    if (!conferma) {
        console.log("Timeout scaduto!");
    }
}, 3000);

// Se l'utente conferma prima...
document.querySelector("#confirm").onclick = () => {
    conferma = true;
    clearTimeout(bomber);
    console.log("Confermato in tempo!");
};
```

#### Animazioni con setTimeout Ricorsivo

Combinare setTimeout con ricorsione crea animazioni fluide e controllabili:

```javascript
// Animazione base: muovi un elemento
function anima(posizione = 0) {
    const elemento = document.querySelector("#box");
    
    // Aggiorna posizione
    elemento.style.left = posizione + "px";
    
    // Continua fino a destinazione
    if (posizione < 300) {
        // Richiama se stessa dopo un frame
        setTimeout(() => anima(posizione + 2), 16); // ~60 FPS
    } else {
        console.log("Animazione completata!");
    }
}

anima(); // Avvia l'animazione
```

#### Animazione del Call Stack - Visualizzazione Temporizzata

Ecco un esempio complesso che mostra come animare la visualizzazione del Call Stack:

```javascript
const animationContainer = document.querySelector("#animation");

// Dati per ogni "frame" dell'animazione
const animationData = [
    {
        inputVal: 5,
        addElDelay: 1000,      // Quando aggiungere l'elemento
        msg: 'decimalToBinary(5) returns "10" + 1',
        showMsgDelay: 5000,    // Quando mostrare il messaggio
        removeElDelay: 10000   // Quando rimuovere l'elemento
    },
    {
        inputVal: 2,
        addElDelay: 1500,
        msg: 'decimalToBinary(2) returns "1" + 0',
        showMsgDelay: 4000,
        removeElDelay: 9000
    },
    {
        inputVal: 1,
        addElDelay: 2000,
        msg: 'decimalToBinary(1) returns "1" (base case)',
        showMsgDelay: 3000,
        removeElDelay: 8000
    }
];

function showAnimation() {
    // Pianifica ogni evento dell'animazione
    animationData.forEach(frame => {
        // Step 1: Aggiungi elemento al DOM
        setTimeout(() => {
            const div = document.createElement("div");
            div.id = `frame-${frame.inputVal}`;
            div.className = "stack-frame";
            div.textContent = `decimalToBinary(${frame.inputVal})`;
            animationContainer.appendChild(div);
        }, frame.addElDelay);
        
        // Step 2: Aggiorna con risultato
        setTimeout(() => {
            const div = document.getElementById(`frame-${frame.inputVal}`);
            div.textContent = frame.msg;
            div.classList.add("resolved");
        }, frame.showMsgDelay);
        
        // Step 3: Rimuovi (pop dallo stack)
        setTimeout(() => {
            const div = document.getElementById(`frame-${frame.inputVal}`);
            div.classList.add("popping");
            setTimeout(() => div.remove(), 300); // Dopo animazione CSS
        }, frame.removeElDelay);
    });
    
    // Mostra risultato finale
    setTimeout(() => {
        animationContainer.innerHTML = `
            <div class="result">
                Risultato: decimalToBinary(5) = "101"
            </div>
        `;
    }, 11000);
}
```

#### setTimeout vs setInterval - Due Filosofie

```javascript
// setInterval - Ripete ogni X millisecondi
const intervalId = setInterval(() => {
    console.log("Ogni secondo");
}, 1000);

// Fermalo dopo 5 secondi
setTimeout(() => clearInterval(intervalId), 5000);

// PROBLEMA di setInterval: può accumularsi!
let count = 0;
setInterval(() => {
    // Se questa operazione dura più di 1 secondo...
    heavyOperation(); // 1.5 secondi
    count++;
}, 1000);
// Le chiamate si accumulano!

// SOLUZIONE: setTimeout ricorsivo
function intervalloSicuro() {
    heavyOperation();
    
    // Prossima chiamata DOPO che questa finisce
    setTimeout(intervalloSicuro, 1000);
}
intervalloSicuro();
```

#### Pattern di Animazione Moderni

```javascript
// 1. EASE-IN-OUT Animation
function animaConEasing(durata = 1000) {
    const inizio = Date.now();
    const elemento = document.querySelector("#elemento");
    const distanza = 300;
    
    function frame() {
        const elapsed = Date.now() - inizio;
        const progress = Math.min(elapsed / durata, 1);
        
        // Easing function (ease-in-out)
        const eased = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        elemento.style.left = (eased * distanza) + "px";
        
        if (progress < 1) {
            setTimeout(frame, 16);
        }
    }
    
    frame();
}

// 2. PROMISE-BASED Animation
function animaPromise(elemento, proprieta, valore, durata) {
    return new Promise(resolve => {
        const inizio = Date.now();
        const valoreIniziale = parseFloat(
            getComputedStyle(elemento)[proprieta]
        );
        
        function frame() {
            const elapsed = Date.now() - inizio;
            const progress = Math.min(elapsed / durata, 1);
            
            const current = valoreIniziale + 
                (valore - valoreIniziale) * progress;
            elemento.style[proprieta] = current + "px";
            
            if (progress < 1) {
                setTimeout(frame, 16);
            } else {
                resolve();
            }
        }
        
        frame();
    });
}

// Uso con async/await
async function sequenzaAnimazioni() {
    const box = document.querySelector("#box");
    
    await animaPromise(box, "left", 200, 1000);
    await animaPromise(box, "top", 100, 500);
    await animaPromise(box, "left", 0, 1000);
    await animaPromise(box, "top", 0, 500);
    
    console.log("Sequenza completata!");
}

// 3. DEBOUNCE Pattern (ritarda fino a che l'utente smette)
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Uso: cerca solo quando l'utente smette di digitare
const searchInput = document.querySelector("#search");
const debouncedSearch = debounce((query) => {
    console.log("Cerco:", query);
    // Fai chiamata API
}, 500);

searchInput.addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
});

// 4. THROTTLE Pattern (limita frequenza)
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Uso: gestisci scroll ma non troppo spesso
const handleScroll = throttle(() => {
    console.log("Scrolling...");
}, 100); // Max ogni 100ms

window.addEventListener("scroll", handleScroll);
```

### Algoritmi Pratici - Le Ricette del Codice 🧮

Gli algoritmi sono le ricette step-by-step per risolvere problemi. Vediamo alcuni algoritmi fondamentali implementati in JavaScript.

#### Algoritmo di Conversione Decimale → Binario

Convertiamo un numero decimale in binario usando l'algoritmo classico della divisione successiva:

```javascript
// VERSIONE DIDATTICA - Con tracciamento
function decimalToBinaryVerbose(input) {
    console.log(`Conversione di ${input} in binario:`);
    
    const steps = [];
    let numero = input;
    
    if (numero === 0) return "0";
    
    while (numero > 0) {
        const quoziente = Math.floor(numero / 2);
        const resto = numero % 2;
        
        steps.push({
            numero,
            divisione: `${numero} ÷ 2 = ${quoziente}`,
            resto,
            bit: resto
        });
        
        console.log(`${numero} ÷ 2 = ${quoziente}, resto ${resto}`);
        numero = quoziente;
    }
    
    // I bit in ordine inverso formano il binario
    const binario = steps.map(s => s.bit).reverse().join("");
    console.log(`Binario: ${binario}`);
    
    return binario;
}

// VERSIONE OTTIMIZZATA - Concisa ed efficiente
function decimalToBinary(input) {
    if (input === 0) return "0";
    
    let binary = "";
    while (input > 0) {
        binary = (input % 2) + binary; // Prepend invece di append
        input = Math.floor(input / 2);
    }
    return binary;
}

// VERSIONE RICORSIVA - Elegante
function decimalToBinaryRecursive(num) {
    if (num <= 1) return String(num);
    return decimalToBinaryRecursive(Math.floor(num / 2)) + (num % 2);
}

// Test
console.log(decimalToBinary(10));  // "1010"
console.log(decimalToBinary(255)); // "11111111"
```

#### Algoritmi di Ordinamento

**Bubble Sort - Il Più Semplice (ma Inefficiente)**

```javascript
function bubbleSort(arr) {
    const array = [...arr]; // Copia per non modificare originale
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        
        // Ottimizzazione: se non ci sono swap, è ordinato
        if (!swapped) break;
    }
    
    return array;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]
```

**Quick Sort - Veloce ed Elegante**

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));
// [1, 1, 2, 3, 6, 8, 10]
```

#### Algoritmi di Ricerca

**Binary Search - Ricerca Binaria (Array Ordinato)**

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Trovato!
        }
        
        if (arr[mid] < target) {
            left = mid + 1; // Cerca nella metà destra
        } else {
            right = mid - 1; // Cerca nella metà sinistra
        }
    }
    
    return -1; // Non trovato
}

const sorted = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sorted, 7));  // 3 (indice)
console.log(binarySearch(sorted, 6));  // -1 (non trovato)
```

#### Algoritmi su Stringhe

**Palindromo - Verifica se una Stringa è Palindroma**

```javascript
function isPalindrome(str) {
    // Pulisci la stringa
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Metodo 1: Confronta con reverse
    return cleaned === cleaned.split('').reverse().join('');
}

// Metodo 2: Due puntatori
function isPalindromeTwoPointers(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
```

**Anagrammi - Verifica se Due Stringhe sono Anagrammi**

```javascript
function areAnagrams(str1, str2) {
    // Pulisci e ordina
    const clean = s => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return clean(str1) === clean(str2);
}

// Metodo con conteggio caratteri
function areAnagramsCount(str1, str2) {
    const clean = s => s.toLowerCase().replace(/[^a-z]/g, '');
    const s1 = clean(str1);
    const s2 = clean(str2);
    
    if (s1.length !== s2.length) return false;
    
    const count = {};
    
    for (const char of s1) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (const char of s2) {
        if (!count[char]) return false;
        count[char]--;
    }
    
    return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```

#### Algoritmi Numerici

**Numeri Primi - Verifica e Generazione**

```javascript
```javascript
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    // Controlla solo fino alla radice quadrata
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

// Crivello di Eratostene - Genera tutti i primi fino a n
function sieveOfEratosthenes(max) {
    const prime = new Array(max + 1).fill(true);
    prime[0] = prime[1] = false;
    
    for (let i = 2; i * i <= max; i++) {
        if (prime[i]) {
            // Marca tutti i multipli come non primi
            for (let j = i * i; j <= max; j += i) {
                prime[j] = false;
            }
        }
    }
    
    // Raccoglie i numeri primi
    const primes = [];
    for (let i = 2; i <= max; i++) {
        if (prime[i]) primes.push(i);
    }
    
    return primes;
}

console.log(sieveOfEratosthenes(30)); 
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

**Fibonacci - La Sequenza Aurea**

```javascript
// Iterativo (efficiente)
function fibonacciIterative(n) {
    if (n <= 1) return n;
    
    let prev = 0, curr = 1;
    
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    
    return curr;
}

// Generatore di sequenza
function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    
    while (true) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
    }
}

// Uso del generatore
const fib = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

**Greatest Common Divisor (MCD) - Algoritmo di Euclide**

```javascript
// Versione iterativa
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Versione ricorsiva
function gcdRecursive(a, b) {
    return b === 0 ? a : gcdRecursive(b, a % b);
}

// Least Common Multiple (MCM)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(gcd(48, 18));   // 6
console.log(lcm(12, 15));   // 60
```

### Sanitizzazione e Validazione Input 🛡️

La validazione dell'input è la prima linea di difesa contro bug e vulnerabilità. È come il controllo di sicurezza all'aeroporto - meglio essere rigorosi all'ingresso che avere problemi dopo.

#### Validazione Robusta con Pattern Guards

Il pattern "guard clause" significa controllare e uscire subito se qualcosa non va, invece di annidare molti if. È come un buttafuori che controlla i documenti all'ingresso.

```javascript
// CATTIVO: Piramide dell'inferno
function processData(data) {
    if (data) {
        if (data.isValid) {
            if (data.value > 0) {
                // Finalmente fai qualcosa
                return data.value * 2;
            }
        }
    }
}

// BUONO: Guard clauses
function processData(data) {
    // Esci subito se qualcosa non va
    if (!data) return null;
    if (!data.isValid) return null;
    if (data.value <= 0) return null;
    
    // Codice principale pulito
    return data.value * 2;
}
```

#### Validazione di Input Numerici

```javascript
function validateNumber(input, options = {}) {
    const {
        min = -Infinity,
        max = Infinity,
        integer = false,
        positive = false
    } = options;
    
    // Converti e valida
    const num = Number(input);
    
    // Controlli in sequenza con messaggi specifici
    if (input === "" || input == null) {
        return { valid: false, error: "Input richiesto" };
    }
    
    if (isNaN(num)) {
        return { valid: false, error: "Deve essere un numero" };
    }
    
    if (integer && !Number.isInteger(num)) {
        return { valid: false, error: "Deve essere un intero" };
    }
    
    if (positive && num <= 0) {
        return { valid: false, error: "Deve essere positivo" };
    }
    
    if (num < min) {
        return { valid: false, error: `Minimo ${min}` };
    }
    
    if (num > max) {
        return { valid: false, error: `Massimo ${max}` };
    }
    
    return { valid: true, value: num };
}

// Uso
const result = validateNumber(userInput, {
    min: 1,
    max: 100,
    integer: true,
    positive: true
});

if (!result.valid) {
    alert(result.error);
} else {
    processNumber(result.value);
}
```

#### Rimozione Caratteri Speciali e Sanitizzazione

La sanitizzazione rimuove o escapa caratteri potenzialmente pericolosi. È come filtrare l'acqua prima di berla.

```javascript
// Rimuovi caratteri speciali base
function removeSpecialChars(str) {
    // Mantiene solo lettere, numeri, spazi e trattini
    return str
        .trim()                               // Rimuove spazi iniziali/finali
        .replace(/[^a-zA-Z0-9\s-]/g, '')    // Solo alfanumerici, spazi, trattini
        .replace(/\s+/g, ' ');               // Normalizza spazi multipli
}

// Sanitizzazione per diversi contesti
const Sanitizer = {
    // Per ID e chiavi
    forId(str) {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, '')
            .replace(/-+/g, '-')              // Multipli trattini → uno
            .replace(/^-|-$/g, '');           // Rimuove trattini iniziali/finali
    },
    
    // Per nomi file
    forFilename(str) {
        return str
            .replace(/[<>:"/\\|?*]/g, '')    // Caratteri illegali Windows/Unix
            .replace(/\s+/g, '_')             // Spazi → underscore
            .slice(0, 255);                   // Limite lunghezza
    },
    
    // Per HTML (previeni XSS)
    forHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;                // textContent escapa HTML
        return div.innerHTML;
    },
    
    // Per URL
    forURL(str) {
        return encodeURIComponent(str);
    },
    
    // Per SQL (base - usa sempre prepared statements!)
    forSQL(str) {
        return str.replace(/['";\\]/g, '');
    }
};

// Esempio: Crea ID sicuro da input utente
function createSafeId(title) {
    const sanitized = Sanitizer.forId(title);
    const timestamp = Date.now();
    return `${sanitized}-${timestamp}`;
}

console.log(createSafeId("Hello World!")); // "hello-world-1234567890"
```

#### Validazione Email e Pattern Comuni

```javascript
const Validator = {
    patterns: {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^(\+\d{1,3}[- ]?)?\d{10}$/,
        url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
        creditCard: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/,
        postalCode: {
            IT: /^\d{5}$/,
            US: /^\d{5}(-\d{4})?$/,
            UK: /^[A-Z]{1,2}\d{1,2} ?\d[A-Z]{2}$/i
        }
    },
    
    validate(type, value, country = 'IT') {
        if (!value) return false;
        
        if (type === 'postalCode') {
            return this.patterns.postalCode[country]?.test(value) || false;
        }
        
        return this.patterns[type]?.test(value) || false;
    },
    
    // Validazione con feedback dettagliato
    validateWithFeedback(type, value) {
        const errors = [];
        
        if (!value) {
            errors.push("Campo richiesto");
            return { valid: false, errors };
        }
        
        switch(type) {
            case 'email':
                if (!value.includes('@')) {
                    errors.push("Manca @");
                }
                if (!this.patterns.email.test(value)) {
                    errors.push("Formato email non valido");
                }
                break;
                
            case 'password':
                if (value.length < 8) {
                    errors.push("Minimo 8 caratteri");
                }
                if (!/[A-Z]/.test(value)) {
                    errors.push("Almeno una maiuscola");
                }
                if (!/[a-z]/.test(value)) {
                    errors.push("Almeno una minuscola");
                }
                if (!/\d/.test(value)) {
                    errors.push("Almeno un numero");
                }
                break;
        }
        
        return {
            valid: errors.length === 0,
            errors
        };
    }
};
```

### Pattern di Gestione Stato 🎯

La gestione dello stato è come dirigere un'orchestra - ogni parte deve essere sincronizzata e sapere cosa stanno facendo le altre.

#### Il Pattern "Single Source of Truth"

Mantieni lo stato in un unico posto centralizzato. È come avere un unico libro mastro invece di appunti sparsi ovunque.

```javascript
// State Manager Centralizzato
const StateManager = {
    // Stato privato
    _state: {
        user: null,
        tasks: [],
        settings: {
            theme: 'light',
            notifications: true
        },
        ui: {
            isLoading: false,
            currentModal: null,
            errors: []
        }
    },
    
    // Getter sicuro (ritorna copia per evitare modifiche dirette)
    getState(path) {
        if (!path) return { ...this._state };
        
        // Accesso nested con path tipo "user.name"
        const keys = path.split('.');
        let value = this._state;
        
        for (const key of keys) {
            value = value[key];
            if (value === undefined) return undefined;
        }
        
        // Ritorna copia se oggetto/array
        return typeof value === 'object' ? JSON.parse(JSON.stringify(value)) : value;
    },
    
    // Setter con validazione
    setState(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        
        let target = this._state;
        for (const key of keys) {
            if (!(key in target)) {
                target[key] = {};
            }
            target = target[key];
        }
        
        const oldValue = target[lastKey];
        target[lastKey] = value;
        
        // Notifica listeners
        this._notify(path, value, oldValue);
        
        // Persisti se necessario
        this._persist();
    },
    
    // Sistema di sottoscrizione
    _listeners: {},
    
    subscribe(path, callback) {
        if (!this._listeners[path]) {
            this._listeners[path] = [];
        }
        this._listeners[path].push(callback);
        
        // Ritorna funzione per unsubscribe
        return () => {
            const index = this._listeners[path].indexOf(callback);
            if (index > -1) {
                this._listeners[path].splice(index, 1);
            }
        };
    },
    
    _notify(path, newValue, oldValue) {
        // Notifica listeners specifici
        if (this._listeners[path]) {
            this._listeners[path].forEach(cb => cb(newValue, oldValue));
        }
        
        // Notifica listeners generali (con *)
        if (this._listeners['*']) {
            this._listeners['*'].forEach(cb => cb(path, newValue, oldValue));
        }
    },
    
    // Persistenza automatica
    _persist() {
        const toPersist = {
            user: this._state.user,
            settings: this._state.settings,
            tasks: this._state.tasks
        };
        localStorage.setItem('appState', JSON.stringify(toPersist));
    },
    
    // Carica stato salvato
    load() {
        try {
            const saved = localStorage.getItem('appState');
            if (saved) {
                const data = JSON.parse(saved);
                Object.assign(this._state, data);
            }
        } catch (error) {
            console.error('Errore caricamento stato:', error);
        }
    }
};

// Uso
StateManager.subscribe('user', (newUser) => {
    console.log('User cambiato:', newUser);
    updateUIForUser(newUser);
});

StateManager.setState('user', { nome: 'Mario', ruolo: 'admin' });
```

#### Pattern CRUD per Liste

CRUD (Create, Read, Update, Delete) è il pattern fondamentale per gestire collezioni di dati.

```javascript
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentEditId = null;
    }
    
    // CREATE
    addTask(taskData) {
        const task = {
            id: this.generateId(),
            ...taskData,
            createdAt: new Date().toISOString(),
            completed: false
        };
        
        this.tasks.push(task);
        this.save();
        this.render();
        
        return task;
    }
    
    // READ
    getTask(id) {
        return this.tasks.find(task => task.id === id);
    }
    
    getAllTasks() {
        return [...this.tasks]; // Ritorna copia
    }
    
    getFilteredTasks(filter) {
        switch(filter) {
            case 'completed':
                return this.tasks.filter(t => t.completed);
            case 'pending':
                return this.tasks.filter(t => !t.completed);
            case 'today':
                const today = new Date().toDateString();
                return this.tasks.filter(t => 
                    new Date(t.createdAt).toDateString() === today
                );
            default:
                return this.getAllTasks();
        }
    }
    
    // UPDATE
    updateTask(id, updates) {
        const index = this.tasks.findIndex(task => task.id === id);
        
        if (index === -1) {
            console.error(`Task ${id} non trovato`);
            return false;
        }
        
        // Mantieni dati originali, sovrascrivi con updates
        this.tasks[index] = {
            ...this.tasks[index],
            ...updates,
            updatedAt: new Date().toISOString()
        };
        
        this.save();
        this.render();
        
        return this.tasks[index];
    }
    
    toggleTask(id) {
        const task = this.getTask(id);
        if (task) {
            this.updateTask(id, { completed: !task.completed });
        }
    }
    
    // DELETE
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        
        if (index === -1) return false;
        
        const deleted = this.tasks.splice(index, 1)[0];
        this.save();
        this.render();
        
        return deleted;
    }
    
    deleteCompleted() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.save();
        this.render();
    }
    
    // UTILITIES
    generateId() {
        return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    
    save() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    loadTasks() {
        try {
            return JSON.parse(localStorage.getItem('tasks')) || [];
        } catch {
            return [];
        }
    }
    
    // EDIT MODE
    startEdit(id) {
        const task = this.getTask(id);
        if (!task) return;
        
        this.currentEditId = id;
        
        // Popola form
        document.querySelector('#task-input').value = task.title;
        document.querySelector('#task-desc').value = task.description || '';
        document.querySelector('#submit-btn').textContent = 'Update Task';
    }
    
    cancelEdit() {
        this.currentEditId = null;
        this.resetForm();
    }
    
    resetForm() {
        document.querySelector('#task-form').reset();
        document.querySelector('#submit-btn').textContent = 'Add Task';
        this.currentEditId = null;
    }
    
    // RENDERING
    render() {
        const container = document.querySelector('#tasks-container');
        
        if (this.tasks.length === 0) {
            container.innerHTML = '<p class="empty">Nessun task</p>';
            return;
        }
        
        container.innerHTML = this.tasks.map(task => `
            <div class="task ${task.completed ? 'completed' : ''}" data-id="${task.id}">
                <input type="checkbox" 
                       ${task.completed ? 'checked' : ''}
                       onchange="taskManager.toggleTask('${task.id}')">
                <div class="task-content">
                    <h3>${this.escapeHtml(task.title)}</h3>
                    ${task.description ? `<p>${this.escapeHtml(task.description)}</p>` : ''}
                    <small>${this.formatDate(task.createdAt)}</small>
                </div>
                <div class="task-actions">
                    <button onclick="taskManager.startEdit('${task.id}')">✏️</button>
                    <button onclick="taskManager.deleteTask('${task.id}')">🗑️</button>
                </div>
            </div>
        `).join('');
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    formatDate(dateString) {
        return new Date(dateString).toLocaleString('it-IT');
    }
}

// Inizializzazione
const taskManager = new TaskManager();
taskManager.render();
```

#### Pattern di Reset e Stato Iniziale

Resettare lo stato in modo pulito è fondamentale per evitare bug sottili.

```javascript
// Pattern: Stato Iniziale come Funzione
const createInitialState = () => ({
    form: {
        nome: '',
        email: '',
        messaggio: ''
    },
    ui: {
        isSubmitting: false,
        errors: [],
        successMessage: null
    },
    data: []
});

const FormManager = {
    state: createInitialState(),
    
    reset() {
        // Non modificare, ricrea!
        this.state = createInitialState();
        this.render();
    },
    
    resetPartial(section) {
        // Reset solo una sezione
        this.state[section] = createInitialState()[section];
        this.render();
    },
    
    // Pattern: Backup e Restore
    backup() {
        this._backup = JSON.stringify(this.state);
    },
    
    restore() {
        if (this._backup) {
            this.state = JSON.parse(this._backup);
            this.render();
        }
    }
};
```

## Tabella di Riferimento Rapido Completa

| Categoria | Strumento/Concetto | Analogia/Scopo | Esempio/Sintassi |
|-----------|-------------------|----------------|------------------|
| **VARIABILI** |
| | `const` | Cassaforte: riferimento immutabile | `const user = {}` |
| | `let` | Lavagna: valore modificabile | `let counter = 0` |
| | `var` | Vecchio modo (evitare!) | Hoisting problematico |
| | `null` vs `undefined` | Vuoto intenzionale vs accidentale | `let x = null` |
| **TIPI PRIMITIVI** |
| | String | Testo con metodi potenti | `` `Hello ${name}` `` |
| | Escape chars | Caratteri speciali | `\n` `\t` `\"` `\\` |
| | Number | IEEE 754, interi e decimali | `Math.floor(3.7)` |
| | Boolean | true/false binario | `true`/`false` |
| | Truthy/Falsy | 6 valori falsy da ricordare | `false, 0, "", null, undefined, NaN` |
| **CONVERSIONI** |
| | `parseInt()` | Estrattore di interi | `parseInt("42px")` → `42` |
| | `parseFloat()` | Con decimali | `parseFloat("3.14")` → `3.14` |
| | `Number()` | Conversione stretta | `Number("42")` → `42` |
| | `String()` | A stringa | `String(42)` → `"42"` |
| | `Boolean()` | A booleano | `Boolean(1)` → `true` |
| | `JSON.stringify()` | Oggetto → Stringa JSON | Per localStorage |
| | `JSON.parse()` | Stringa JSON → Oggetto | Da localStorage |
| | `Array.from()` | Simil-array → Array vero | NodeList → Array |
| **OPERATORI** |
| | Assegnazione `=` | Base | `x = 10` |
| | Abbreviati | Op + assegnazione | `+=` `-=` `*=` `/=` `%=` |
| | Incremento | Pre/post | `++x` vs `x++` |
| | Confronto `===` | Identità stretta | Valore E tipo uguali |
| | Confronto `==` | Con coercizione (evitare) | Converte tipi |
| | Logici | AND OR NOT | `&&` `\|\|` `!` |
| | Short-circuit | Valutazione pigra | Si ferma appena sa risultato |
| | Optional chaining | Navigazione sicura | `obj?.prop?.method?.()` |
| | Nullish coalescing | Default per null/undefined | `value ?? default` |
| | Ternario | If inline | `cond ? true : false` |
| **CONTROLLO FLUSSO** |
| | `if`/`else if`/`else` | Bivio multiplo | Condizioni in cascata |
| | `switch` | Centralino | Con `break` e `default` |
| | Return early | Guard clauses | Valida e esci subito |
| **CICLI** |
| | `for` | Contatore preciso | `for(let i=0; i<n; i++)` |
| | `while` | Condizione generica | `while(condition)` |
| | `do...while` | Almeno una volta | Controlla dopo |
| | `for...of` | Itera valori | Array, stringhe, iterabili |
| | `for...in` | Itera chiavi | Oggetti (evitare per array) |
| | `forEach` | Metodo array | `.forEach((el, i) => {})` |
| | `break` | Esci dal ciclo | Ferma tutto |
| | `continue` | Salta iterazione | Va al prossimo giro |
| **FUNZIONI** |
| | Dichiarazione | Classica | `function name() {}` |
| | Espressione | Assegnata | `const fn = function() {}` |
| | Arrow `=>` | Moderna concisa | `() => {}` |
| | Parametri default | Valori fallback | `(x = 0) => {}` |
| | Rest params | Argomenti variabili | `(...args) => {}` |
| | Destrutturazione | Estrai proprietà | `({id, name}) => {}` |
| | Return | Risultato e stop | Termina esecuzione |
| **SCOPE** |
| | Global | Ovunque | Fuori da tutto |
| | Function | Dentro funzione | `var` o parametri |
| | Block | Dentro `{}` | `let`/`const` |
| | Scope chain | Ricerca nested | Interno → esterno |
| | Closure | Accesso a scope padre | Funzioni annidate |
| **DOM - SELEZIONE** |
| | `querySelector` | CSS selector | `#id` `.class` `tag` |
| | `getElementById` | Veloce per ID | Solo ID, no `#` |
| | `querySelectorAll` | Tutti i match | Restituisce NodeList |
| | `getElementsBy*` | Live collection | Si aggiorna automatica |
| **DOM - MODIFICA** |
| | `textContent` | Testo sicuro | Per input utente |
| | `innerHTML` | HTML (attenzione!) | Solo contenuto trusted |
| | `innerText` | Testo visibile | Rispetta CSS |
| | `insertAdjacentHTML` | Inserimento preciso | 4 posizioni |
| | `style.property` | Stili inline | `elem.style.color = "red"` |
| | `classList` | Gestione classi | `.add()` `.remove()` `.toggle()` |
| **EVENTI** |
| | `onclick` | Un solo gestore | Semplice ma limitato |
| | `addEventListener` | Multi gestore | Professionale |
| | `removeEventListener` | Rimuovi listener | Serve stesso riferimento |
| | Event object | Info evento | `e.target` `e.preventDefault()` |
| | Event delegation | Un listener per molti | Sul parent, check target |
| | Event bubbling | Propaga verso alto | Dal target al document |
| | Event capturing | Propaga verso basso | Fase discesa (raro) |
| **OGGETTI** |
| | Notazione punto | Accesso diretto | `obj.prop` |
| | Bracket notation | Accesso dinamico | `obj["prop"]` |
| | `Object.keys()` | Array chiavi | `["key1", "key2"]` |
| | `Object.values()` | Array valori | `[val1, val2]` |
| | `Object.entries()` | Array coppie | `[[k,v], [k,v]]` |
| | `Object.assign()` | Copia/merge | Shallow copy |
| | `Object.freeze()` | Immutabile totale | No modifiche |
| | `Object.seal()` | Struttura fissa | Modifica valori ok |
| **ARRAY - MODIFICA** |
| | `.push()` | Aggiungi fine | Ritorna length |
| | `.pop()` | Rimuovi fine | Ritorna elemento |
| | `.unshift()` | Aggiungi inizio | Ritorna length |
| | `.shift()` | Rimuovi inizio | Ritorna elemento |
| | `.splice()` | Swiss knife | Rimuovi/aggiungi ovunque |
| | `.sort()` | Ordina (modifica!) | Serve comparatore numeri |
| | `.reverse()` | Inverte (modifica!) | Cambia originale |
| **ARRAY - NON MODIFICA** |
| | `.filter()` | Filtra elementi | Nuovo array filtrato |
| | `.map()` | Trasforma elementi | Nuovo array trasformato |
| | `.reduce()` | Aggrega a valore | Somme, medie, etc |
| | `.find()` | Primo che matcha | Elemento o undefined |
| | `.findIndex()` | Indice primo match | Indice o -1 |
| | `.includes()` | Contiene valore? | true/false |
| | `.indexOf()` | Prima posizione | Indice o -1 |
| | `.slice()` | Copia porzione | Non modifica originale |
| | `.join()` | Array → stringa | Con separatore |
| | `.some()` | Almeno uno? | true/false |
| | `.every()` | Tutti? | true/false |
| **SPREAD/REST** |
| | Spread `...` | Espande elementi | `[...arr1, ...arr2]` |
| | Rest `...` | Raccoglie argomenti | `function(...args)` |
| | Object spread | Copia oggetti | `{...obj1, ...obj2}` |
| **STORAGE** |
| | localStorage | Permanente | Sopravvive refresh |
| | sessionStorage | Temporaneo | Solo sessione |
| | `.setItem()` | Salva | Solo stringhe! |
| | `.getItem()` | Legge | Ritorna stringa o null |
| | `.removeItem()` | Elimina chiave | Specifica |
| | `.clear()` | Svuota tutto | Tutte le chiavi |
| **REGEX** |
| | `/pattern/` | Definizione | Tra slash |
| | Flags | Modificatori | `g` `i` `m` `s` |
| | `.test()` | Verifica match | true/false |
| | `.match()` | Trova matches | Array o null |
| | Character class `[]` | Uno di questi | `[aeiou]` |
| | Quantifiers | Ripetizioni | `+` `*` `?` `{n,m}` |
| | `\d` `\w` `\s` | Classi predefinite | Digit Word Space |
| | Escape `\` | Letterale | `\.` per punto |
| **TIMING** |
| | `setTimeout()` | Ritarda esecuzione | Non blocca |
| | `setInterval()` | Ripete periodico | Ogni X ms |
| | `clearTimeout()` | Cancella timeout | Serve ID |
| | `clearInterval()` | Ferma interval | Serve ID |
| | `Date.now()` | Timestamp ms | Dal 1970 |
| | `performance.now()` | Alta precisione | Per misurazioni |
| **RICORSIONE** |
| | Base case | Condizione stop | Previene infinito |
| | Recursive case | Chiama se stessa | Input più piccolo |
| | Call stack | Pila chiamate | LIFO |
| | Stack overflow | Troppa ricorsione | Errore |
| | Tail recursion | Ottimizzabile | Return diretto |
| **PATTERN** |
| | Guard clauses | Return early | Valida e esci |
| | Accumulator | Costruisci risultato | Loop con aggregazione |
| | Flag boolean | Interruttori stato | `isLoading` `hasError` |
| | State variables | Traccia posizione | Stati form/game |
| | Config object | Centralizza settings | Un oggetto per tutto |
| | Single source truth | Stato centralizzato | Un posto solo |
| | CRUD | Create Read Update Delete | Operazioni base |
| | DRY | Don't Repeat Yourself | Riusa codice |
| | Separation concerns | Una funzione = un task | Single responsibility |
| **ERROR HANDLING** |
| | `try-catch` | Gestione errori | Previeni crash |
| | `finally` | Sempre eseguito | Pulizia |
| | `throw` | Lancia errore | Personalizzato |
| | Guard pattern | Controlla prima | Previeni errori |
| **BEST PRACTICES** |
| | camelCase | Variabili/funzioni | `myVariable` |
| | PascalCase | Classi/costruttori | `MyClass` |
| | UPPER_SNAKE | Costanti | `MAX_VALUE` |
| | Commenti `//` | Singola linea | Note brevi |
| | Commenti `/* */` | Multi linea | Blocchi |
| | JSDoc `/** */` | Documentazione | Con `@param` |
| | TODO FIXME NOTE | Tag organizzazione | Track lavoro |
| | Semantic naming | Nomi descrittivi | `getUserById` |
| | Testing incrementale | Console.log strategici | Debug step by step |

---
