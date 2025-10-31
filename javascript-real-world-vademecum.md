# JavaScript Real World Vademecum

## Parte I - Fondamenti e Tipi di Dati

### 1\. Variabili - I Contenitori di Dati 📦

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

Questo concetto è rivoluzionario rispetto al vecchio `var`. È come se ogni coppia di parentesi graffe creasse una bolla invisibile: quello che succede nella bolla, resta nella bolla. Se provi a usare quella variabile fuori dalla sua bolla, JavaScript ti dirà "Non so di cosa stai parlando\!"

```javascript
{
    let segreto = "Sono qui dentro";
    console.log(segreto); // Funziona!
}
// console.log(segreto); // ERRORE! 'segreto' non esiste qui fuori
```

**Quando usarla?**

Quando sai già che il valore di quella variabile dovrà cambiare. Ma non è solo questione di "cambiare" - è questione di *intenzione*. Usi `let` quando stai dicendo: "Questa cosa evolverà durante l'esecuzione del mio programma."

Esempi perfetti:

  * **Contatori**: Devono incrementarsi ad ogni ciclo
  * **Stato temporaneo**: Come la posizione attuale in un gioco
  * **Accumulatori**: Quando stai costruendo qualcosa pezzo per pezzo
  * **Flag di controllo**: Variabili che tengono traccia di condizioni che cambiano

-----

#### const – La Scatola Sigillata (o la Cassaforte)

`const` crea una variabile che non può essere riassegnata a un nuovo valore o riferimento. È come incidere qualcosa nel marmo: una volta scritto, il riferimento rimane quello.

```javascript
const PI_GRECO = 3.14159;
// PI_GRECO = 3.14; // ERRORE! Non puoi riassegnare una costante.
```

Ma attenzione\! C'è un trucco mentale importante qui. `const` non significa "costante" nel senso matematico. Significa "**riferimento costante**". È la differenza tra dire "questa cassaforte non si può spostare" e "il contenuto della cassaforte non si può toccare".

**Concetto Cruciale: Contenitore vs. Contenuto**

`const` blocca il contenitore, non necessariamente il contenuto. Se la variabile `const` contiene un tipo complesso come un **Oggetto** o un **Array**, puoi ancora modificarne le proprietà interne.

```javascript
const utente = { nome: "Mario" };
utente.nome = "Luigi"; // OK! Stai modificando il contenuto.
// utente = { nome: "Carlo" }; // ERRORE! Stai cercando di cambiare il contenitore.

const numeri = [1, 2, 3];
numeri.push(4); // OK! Stai modificando il contenuto.
// numeri = [5, 6]; // ERRORE! Stai cercando di cambiare il contenitore.
```

L'analogia della **cassaforte bullonata al pavimento** è perfetta: non puoi spostare la cassaforte (cambiare il riferimento), ma puoi aprire lo sportello e cambiare gli oggetti che ci sono dentro (modificare le proprietà). È come se `const` dicesse: "Questa variabile punterà sempre a QUESTO oggetto specifico in memoria, ma quello che c'è dentro l'oggetto può cambiare."

**Quando usarla?**

**Sempre, come prima scelta.** Questo è un cambio di mentalità importante: parti sempre da `const` e passa a `let` solo quando sei assolutamente certo che dovrai riassegnare la variabile.

Perché? Perché rende il tuo codice più prevedibile. Quando vedi `const`, sai che quella variabile punterà sempre alla stessa cosa. È una promessa che fai a chi leggerà il codice (incluso il te stesso del futuro): "Questa cosa non cambierà riferimento, puoi fidarti."

-----

#### var – Il Vecchio Modo (Da Evitare)

`var` è il modo in cui si dichiaravano le variabili prima di `let` e `const` (prima di ES6). Ha un comportamento meno prevedibile (il **function scope** invece del block scope) che può portare a bug difficili da scovare.

Immagina `var` come una vecchia serratura che a volte si apre da sola, o come un contenitore che magicamente appare in posti dove non te l'aspetti. Ha questo strano comportamento chiamato **hoisting** (sollevamento).

**Hoisting**

JavaScript, prima di eseguire il codice, prende tutte le dichiarazioni `var` e le "solleva" (hoists) all'inizio della loro funzione (o all'inizio globale), inizializzandole a `undefined`. È come se il tuo codice venisse riorganizzato a tua insaputa\!

```javascript
// Quello che scrivi
function test() {
    console.log(x); // Stampa 'undefined' (non dà errore!)
    var x = 5;
    console.log(x); // Stampa 5
}

// Quello che JavaScript "vede" e esegue
function test() {
    var x;          // 1. Dichiarazione "sollevata" e inizializzata a undefined
    console.log(x); // 2. Stampa 'undefined'
    x = 5;          // 3. Assegnazione
    console.log(x); // 4. Stampa 5
}
```

Evitalo nei progetti moderni. Se vedi `var` in codice vecchio, considera di refactorarlo (sostituirlo con `let` o `const`). È come vedere ancora Windows XP in un ufficio nel 2025 - funziona, ma perché rischiare?

-----

#### null e undefined – L'Assenza Intenzionale vs. Accidentale

Questi due valori rappresentano il "nulla", ma con significati profondamente diversi. È una distinzione sottile ma importantissima che mostra l'**intenzione** del programmatore.

**null**

È l'**assenza intenzionale** di un valore. Sei tu, programmatore, che decidi di assegnare `null` per indicare che "qui, volutamente, non c'è nulla".

  * **Analogia più profonda:** Un posto a tavola vuoto, ma apparecchiato. Non è che ti sei dimenticato di mettere il piatto - hai consciamente deciso che quel posto deve rimanere vuoto per ora. Magari stai aspettando un ospite che potrebbe arrivare, o forse vuoi segnalare che qualcuno se n'è andato. Il punto è: c'è stata una **decisione consapevole**.

<!-- end list -->

```javascript
let canzoneCorrente = null; // "Non c'è nessuna canzone in riproduzione, e lo so"
let utenteSelezionato = null; // "L'utente non ha ancora selezionato nulla"
```

**undefined**

È l'**assenza accidentale** o lo stato di "non ancora definito". È il valore di default di una variabile che è stata dichiarata ma a cui non è ancora stato assegnato un valore. JavaScript lo mette lì automaticamente, come a dire "Boh, non so cosa metterci."

  * **Analogia più profonda:** È come aprire una scatola appena comprata e trovarla vuota - non perché doveva essere vuota, ma perché nessuno ci ha ancora messo niente. O come un modulo con un campo lasciato in bianco - non sai se è stato lasciato vuoto di proposito o se qualcuno si è dimenticato di compilarlo.

<!-- end list -->

```javascript
let prossimaCanzone; 
console.log(prossimaCanzone); // undefined - "Non ho idea di cosa sia"

const utente = { nome: "Mario" };
console.log(utente.eta); // undefined - "Questa proprietà non è stata definita"
```

La differenza filosofica è profonda: `null` è il vuoto buddhista - un vuoto pieno di significato. `undefined` è il vuoto esistenziale - un vuoto che non sa nemmeno di essere vuoto.

<br>
<br>
<br>
<br>
<br>
<br>














### 2\. Tipi di Dati - Le Forme dell'Informazione 🎭

In JavaScript, ogni dato ha una sua "forma". Come in cucina usi contenitori diversi per liquidi, solidi e spezie, in programmazione usi strutture diverse per testi, numeri e collezioni di dati. Ma ogni forma ha le sue regole, i suoi superpoteri e le sue limitazioni. Capire queste forme è fondamentale per non fare confusione, come provare a versare della farina in un colino.

#### Stringhe (String) - Il Testo ✍️

Le stringhe sono sequenze di caratteri. Ma pensarle solo come "testo" è riduttivo. Sono come i mattoncini LEGO del mondo della programmazione: puoi combinarle, spezzarle, trasformarle, cercare al loro interno. Sono la forma che prende qualsiasi informazione che vuoi mostrare o comunicare a un utente.

**Template Literals (\`\`)**

I backtick (o accenti gravi, \`\`) sono la scelta migliore e più moderna per creare stringhe. Il loro superpotere è l'**interpolazione**: ti permettono di inserire variabili o espressioni JavaScript direttamente nel testo usando la sintassi `${...}`.

```javascript
const nome = "Mario";
const eta = 25;
// Vecchio modo (goffo)
const presentazioneVecchia = "Mi chiamo " + nome + " e ho " + eta + " anni.";

// Modo moderno (pulito e leggibile)
const presentazione = `Mi chiamo ${nome} e ho ${eta} anni.`;

// Puoi anche eseguire calcoli dentro ${}
const prezzo = 100;
const messaggio = `Il totale è €${prezzo * 1.22} (IVA inclusa)`;
```

Ma perché sono così potenti? Perché trasformano la stringa da un blocco monolitico a qualcosa di dinamico e vivo. È come la differenza tra una fotografia (una stringa statica) e un video (un template literal): possono cambiare, adattarsi, reagire ai dati. Inoltre, gestiscono nativamente gli "a capo" senza bisogno di `\n`.

**Caratteri di Escape - I Caratteri Speciali**

A volte devi inserire caratteri speciali nel testo. Il backslash `\` è il tuo passepartout: dice a JavaScript "il prossimo carattere è speciale, non interpretarlo come un comando".

```javascript
const negozio = "Sono nel \"Store\"";      // Virgolette dentro virgolette
const righe = "Prima riga\nSeconda riga";  // \n = A capo (new line)
const colonne = "Nome\tCognome\tEtà";      // \t = Tab per allineare
const percorso = "C:\\Users\\Documents";   // \\ = Backslash letterale
const apostrofo = 'L\'apostrofo';          // \' = Apostrofo in stringa con apici
```

È come quando fai le "virgolette con le dita" mentre parli: il backslash è il gesto che dice "attenzione, questo è letterale, non un comando\!"

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

// Pulizia e sostituzione
"  spazi ovunque  ".trim();     // "spazi ovunque"
testo.replace("potente", "fantastico"); // Sostituisce la *prima* occorrenza
testo.replaceAll("e", "3");     // Sostituisce *tutte* le occorrenze
```

**Il Metodo .split() - L'Affettatrice di Stringhe**

`.split()` è come un coltello magico che taglia una stringa nei punti che decidi tu. Ma la magia vera è che trasforma una stringa in un **array**: passa da un blocco unico a una lista di pezzi manipolabili singolarmente.

```javascript
"Ciao mondo felice".split(' ');    // ['Ciao', 'mondo', 'felice']
"2025-01-15".split('-');           // ['2025', '01', '15']
"hello".split("");                 // ["h", "e", "l", "l", "o"] - Ogni lettera!
```

Il separatore che scegli è come decidere dove tagliare una torta.

**`.charCodeAt()` vs `.codePointAt()` (Gestione Unicode/Emoji)**

`.charCodeAt()` è il traduttore "classico" da carattere a numero (il suo codice Unicode). Ma è vecchio e si confonde con le emoji\! 😵
Pensa a `.charCodeAt()` come a un traduttore che non capisce le parole composte. Le emoji (e alcuni caratteri rari) sono spesso composte da due "pezzi" di codice (surrogate pairs). `.charCodeAt()` vede solo i pezzi singoli e ti dà due numeri strani e inutili.

```javascript
"A".charCodeAt(0); // 65
"🎉".charCodeAt(0); // 55357 (sbagliato!)
"🎉".charCodeAt(1); // 56894 (l'altro pezzo)
```

`.codePointAt()` è il traduttore **moderno**. È più intelligente: capisce le coppie surrogate e ti dà il loro vero, unico codice numerico.

```javascript
"A".codePointAt(0); // 65
"🎉".codePointAt(0); // 127881 (Corretto!)
```

**Regola:** Impara `.charCodeAt()`, ma usa **sempre `.codePointAt()`** nel codice moderno per evitare problemi con emoji e caratteri speciali.

**`String.fromCharCode()` vs `String.fromCodePoint()`**

Questa è l'operazione inversa: da numero a carattere.
`String.fromCharCode()` è il traduttore "classico" (numero ➡️ carattere). Come `charCodeAt()`, non capisce i codici alti delle emoji.

```javascript
String.fromCharCode(65); // "A"
// String.fromCharCode(127881); // ERRORE, non funziona o dà caratteri strani
```

`String.fromCodePoint()` è il traduttore **moderno**. Dagli il codice giusto e lui ti darà l'emoji. È un metodo *statico*, quindi si chiama su `String` (maiuscolo).

```javascript
String.fromCodePoint(65); // "A"
String.fromCodePoint(127881); // "🎉" (Corretto!)
```

**Regola:** Impara `fromCharCode()`, ma usa **sempre `String.fromCodePoint()`**.

**`.startsWith()` (Controllo Inizio Stringa)**

Questo metodo moderno (ES6) controlla se una stringa inizia con un'altra stringa. È preferito perché comunica l'**intento** (cosa vuoi fare) invece dei *passi* (come farlo).

```javascript
const file = "documento.pdf";

// MODO MODERNO (chiaro, leggibile: "La stringa inizia con...?")
file.startsWith("documento"); // true

// MODO CLASSICO (meccanico: "Prendi il primo carattere...")
file.charAt(0) === 'd'; // true, ma meno chiaro e robusto
file.slice(0, 9) === "documento"; // Funziona, ma verboso
```

-----

#### Numeri (Number) - I Valori Matematici 🔢

I numeri in JavaScript sono ingannevolmente semplici. Non c'è distinzione tra interi e decimali - tutto è un `Number`. Ma questa semplicità nasconde alcune stranezze fondamentali, come un pavimento lucido che ha qualche mattonella scivolosa.

**Tipi di numeri e Valori speciali (Infinity, NaN)**

```javascript
const intero = 42;
const decimale = 3.14;
const esponenziale = 5.2e3;  // 5200 (notazione scientifica)
const infinito = Infinity;
const nonNumero = NaN;  // Not a Number
```

`NaN` è un valore subdolo: è l'unico valore in JavaScript che **non è uguale a se stesso** (`NaN === NaN` è `false`\!). Per questo servono funzioni apposite per controllarlo.

**Conversioni e Controlli**

Qui è dove le cose si fanno interessanti. Hai diversi strumenti per convertire e controllare i numeri, ognuno con un lavoro diverso.

  * **`isNaN()` (La Spiegazione Approfondita)**

    Pensa a `isNaN()` (quella globale) come a un doganiere un po' confuso. Il suo lavoro *dovrebbe* essere controllare se un valore è `NaN`, ma prima di farlo **prova a convertirlo forzatamente in un numero\!**

    ```javascript
    isNaN(NaN);       // true (Ovvio)
    isNaN("Ciao");    // true (Perché? Prova Number("Ciao") -> NaN. Doganiere: "Sì, è NaN!")
    isNaN("123");     // false (Perché? Prova Number("123") -> 123. Doganiere: "No, è 123")
    isNaN(undefined); // true (Perché? Number(undefined) -> NaN)

    // IL TRABOCCHETTO!
    isNaN(null);      // false (Perché? Number(null) -> 0. Doganiere: "No, è 0")
    ```

    È un controllo inaffidabile. Per un controllo moderno e rigoroso se un valore è *esattamente* il tipo `Number` e il valore `NaN`, usa `Number.isNaN()`:

    ```javascript
    Number.isNaN(NaN);       // true
    Number.isNaN("Ciao");    // false (Non è *già* NaN, è una stringa!)
    ```

  * **`Number()` (Conversione rigorosa)**

    `Number()` è un traduttore "tutto o niente". Tenta di convertire l'intero valore. Se fallisce, restituisce `NaN`. È il più rigoroso e prevedibile.

    ```javascript
    Number("123");    // 123
    Number("3.14");   // 3.14
    Number(true);     // 1
    Number(false);    // 0
    Number(null);     // 0
    Number("");       // 0 (Attenzione!)

    // Rigoroso: fallisce se c'è testo
    Number("42px");   // NaN
    Number("Ciao");   // NaN
    ```

  * **`parseInt()` e `parseFloat()` (Conversioni tolleranti)**

    Questi sono "estrattori". Sono come netturbini che leggono da sinistra a destra e prendono solo i numeri che trovano all'inizio, buttando via il resto.

    **`parseInt()` (Solo Interi):**

    ```javascript
    parseInt("42.5px");  // 42 (Estrae 42, vede "." e si ferma)
    parseInt("age 42");  // NaN (Inizia con testo, fallisce subito)
    ```

    **Best Practice:** Usa sempre il secondo argomento (la "base" o *radix*) per dire a `parseInt` che stai lavorando in base 10 (il nostro sistema decimale).

    ```javascript
    parseInt("10", 10); // 10
    parseInt("10", 2);  // 2  (interpreta "10" come binario)
    ```

    **`parseFloat()` (Con Decimali):**

    ```javascript
    parseFloat("42.5px"); // 42.5 (Estrae 42.5, vede "p" e si ferma)
    parseFloat("3.14.15"); // 3.14 (Vede il secondo "." e si ferma)
    ```

**Math - La Calcolatrice Scientifica**

L'oggetto `Math` è come avere una calcolatrice scientifica sempre a disposizione, ma integrata nel linguaggio. È un oggetto statico, non devi mai crearlo (`new Math()` non esiste).

  * **`Math.floor()`, `Math.ceil()`, `Math.round()`**

      * `Math.floor(4.9)`: **4** (Pensa a "floor" - pavimento. Arrotonda sempre *giù* all'intero inferiore).
      * `Math.ceil(4.1)`: **5** (Pensa a "ceiling" - soffitto. Arrotonda sempre *su* all'intero superiore).
      * `Math.round(4.5)`: **5** (Arrotonda al più vicino, come a scuola. `4.4` -\> `4`, `4.5` -\> `5`).

  * **`Math.random()` (Generatore di Casualità)**

    `Math.random()` genera un numero pseudo-casuale tra 0 (incluso) e 1 (escluso). È come lanciare un dado con infinite facce microscopiche. Da solo non è molto utile, ma è la base per tutto.

    ```javascript
    // Formula generale: intero tra min e max (inclusi)
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomInt(1, 6); // Un numero casuale tra 1 e 6
    ```

  * **`Math.pow()` vs Operatore `**`**

    Entrambi fanno l'elevamento a potenza, ma `**` è la scorciatoia moderna (ES6+).

    ```javascript
    // Modo classico
    Math.pow(2, 3); // 8 (2 alla terza)

    // Modo moderno (preferito)
    2 ** 3; // 8
    ```

  * **`Math.sqrt()` (Leggibilità e Intento)**

    Per la radice quadrata, hai tre opzioni. `Math.sqrt()` è la migliore perché comunica l'**intento**. Il codice non deve solo *funzionare*, deve anche *spiegare* cosa fa.

    ```javascript
    // 1. Matematicamente corretto, ma "difficile" da leggere
    Math.pow(9, 0.5); // 3

    // 2. Moderno, ma richiede di "sapere" che ** 0.5 è la radice
    9 ** 0.5; // 3

    // 3. Il migliore: chiaro, leggibile, auto-esplicativo
    Math.sqrt(9); // 3 (sqrt = SQuare RooT)
    ```

    Scrivi codice che si spiega da solo: usa `Math.sqrt()` per le radici quadrate.

**Gestione Decimali (Floating Point)**

  * **Il Problema (IEEE-754)**
    I computer "sbagliano" i calcoli con i decimali. Prova a scrivere `0.1 + 0.2` nella console: non fa `0.3`, ma `0.30000000000000004`.
    *Perché?* I computer pensano in binario (base 2). Alcuni numeri semplici in base 10 (come 0.1, cioè 1/10) sono numeri *infiniti e periodici* in binario (per lo stesso motivo per cui 1/3 è 0.333... in base 10). Il computer deve "tagliarli", introducendo piccoli errori di precisione.

  * **`.toFixed()` (Arrotondamento a Stringa)**
    La soluzione per la *visualizzazione* è `.toFixed()`. Arrotonda il numero a `n` cifre decimali.
    **Attenzione:** Restituisce una **STRINGA**, non un numero\! È fatto per mostrare il valore all'utente, non per farci altri calcoli.

    ```javascript
    const risultato = 0.1 + 0.2; // 0.30000000000000004
    const visualizza = risultato.toFixed(2); // "0.30" (una stringa!)
    ```

  * **`parseFloat()` (Riconversione a Numero)**
    Se devi usare quel numero arrotondato in *altri calcoli* (come per le valute), devi riconvertirlo da stringa a numero. Questo è un pattern fondamentale.

    ```javascript
    const subTotal = 100.50;
    const taxRate = 0.0825;

    // Calcola, arrotonda a stringa, riconverti a numero
    const taxes = parseFloat((subTotal * taxRate).toFixed(2)); // 8.30 (un numero!)

    const total = subTotal + taxes; // 108.80
    ```

-----

### 3\. Date - Il Calendario e l'Orologio 📅

Le date in JavaScript sono oggetti complessi che rappresentano un momento preciso nel tempo, misurato in millisecondi dal 1 gennaio 1970 00:00:00 UTC (l'Unix Epoch). Sono notoriamente difficili da gestire.

#### Creare date

```javascript
const ora = new Date();                    // Data e ora correnti
const compleanno = new Date(2025, 0, 15);  // 15 gennaio 2025 (mese 0!)
const daStringa = new Date("2025-01-15T10:00:00");  // Da stringa ISO
```

#### I Metodi Tricky (getMonth 0-indexed)

Attenzione\! Le date sono piene di trabocchetti storici ereditati da altri linguaggi.

  * **IL TRABOCCHETTO PEGGIORE:** `getMonth()` restituisce il mese da **0 a 11**. (Gennaio è 0, Dicembre è 11).
  * `getDay()` restituisce il giorno della settimana da **0 a 6**. (Domenica è 0, Sabato è 6).
  * `getDate()` restituisce il giorno del mese da **1 a 31** (questo è normale, per fortuna).

<!-- end list -->

```javascript
const oggi = new Date(2025, 11, 25); // 25 Dicembre 2025
oggi.getMonth(); // 11 (Dicembre)
oggi.getDate();  // 25
oggi.getDay();   // 4 (Giovedì)
```

È una fonte inesauribile di bug. Ricordalo sempre\!

#### Date.now() (Timestamp)

`Date.now()` è geniale nella sua semplicità. Non crea un oggetto, restituisce solo un numero: i millisecondi totali passati dal 1970. È perfetto per misurare il tempo, creare ID unici, o gestire scadenze.

```javascript
const start = Date.now();
// ... codice pesante da misurare ...
const end = Date.now();
console.log(`Operazione durata: ${end - start}ms`);
```

-----

### 4\. Booleani (Boolean) - Il Sistema Binario della Logica ✅❌

I booleani sono i bit filosofici di JavaScript. Solo due valori: `true` o `false`. Sono il cuore di ogni decisione (`if`, `while`, ternario) che il tuo programma prende. Sono come gli interruttori della luce: acceso o spento, sì o no, procedi o fermati.

#### Truthy vs Falsy - La Zona Grigia della Verità

JavaScript ha questa caratteristica affascinante e a volte frustrante: in un contesto booleano, OGNI valore viene "costretto" a diventare `true` o `false`. È come se JavaScript avesse degli occhiali speciali che vedono tutto solo in bianco e nero.

**I Sei Cavalieri del Falsy** (memorizzali\! Questi sono gli UNICI valori "falsi"):

1.  `false`
2.  `0` (zero numerico)
3.  `""` (stringa vuota)
4.  `null`
5.  `undefined`
6.  `NaN`

**TUTTO il resto è truthy\!** Anche cose controintuitive:

  * `"0"` (true - è una stringa con contenuto\!)
  * `"false"` (true - è una stringa con testo\!)
  * `[]` (true - un array vuoto è un oggetto e gli oggetti sono truthy\!)
  * `{}` (true - un oggetto vuoto esiste\!)

Questo ti permette di scrivere controlli molto concisi:

```javascript
const username = ""; // Falsy
if (!username) { // !username è true
    console.log("Per favore, inserisci un nome!");
}
```

-----

### 5\. Array (Array) - Le Liste Ordinate 🗂️

Gli array sono le collezioni ordinate di JavaScript. Pensa a loro come treni con vagoni: ogni vagone (elemento) ha un numero (indice), puoi aggiungere o rimuovere vagoni, riordinarli, o trasformare l'intero treno.

#### Creazione (`[]` vs `Array()` (Costruttore))

  * **`[]` (Sintassi Letterale - Preferita):** È il modo standard.
    `const arr = [1, 2, 3];`
  * **`Array()` (Costruttore):** Ha un comportamento "strano" e utile.
      * `Array(1, 2, 3)`: Crea `[1, 2, 3]`.
      * `Array(3)`: **NON** crea `[3]`. Crea `[ <3 empty items> ]` (un array vuoto con 3 posti vuoti, come una scatola per uova vuota).

#### Accesso (Indice da 0)

L'informatica conta da zero. Il primo elemento è sempre all'indice 0.
`const frutti = ["mela", "pera", "banana"];`
`frutti[0]` è "mela". `frutti[2]` è "banana".

#### Proprietà .length

`frutti.length` è **3**. È una **proprietà** (senza parentesi `()`) che indica il numero di elementi.

  * L'ultimo elemento è sempre a `frutti.length - 1`.
  * È modificabile: `frutti.length = 0` **svuota** l'array\!

#### Set e Proprietà .size (Per valori unici)

Un `Set` è una struttura dati correlata, un "club VIP" che accetta solo **valori unici**.
`new Set([1, 1, 2, 3, 3])` -\> `Set { 1, 2, 3 }`
Per contare gli elementi unici, si usa la proprietà `.size` (non `.length`).

```javascript
const numeri = [1, 1, 2, 3];
numeri.length; // 4
new Set(numeri).size; // 3
```

#### Metodi di Modifica (Distruttivi)

Questi metodi sono come operazioni chirurgiche: **modificano l'array originale**. Usali con cautela.

  * `.push(el)`: Aggiunge alla **fine**.

  * `.pop()`: Rimuove dalla **fine**.

  * `.unshift(el)`: Aggiunge all'**inizio** (è un'operazione lenta per array grandi\!).

  * `.shift()`: Rimuove dall'**inizio** (anch'essa lenta).

  * **`.splice()` (Il Coltellino Svizzero)**
    È il metodo più potente e complesso. Può rimuovere, aggiungere o sostituire.
    `array.splice(indiceInizio, quantiDaRimuovere, ...elementiDaAggiungere)`

    ```javascript
    const lettere = ['a', 'b', 'c', 'd'];
    // Sostituiamo 2 elementi ('b', 'c') a partire dall'indice 1 con 'X'
    lettere.splice(1, 2, 'X'); 
    // lettere ora è: ['a', 'X', 'd']
    ```

  * **`.sort()` (Attenzione: modifica originale, default alfabetico)**
    La trappola più famosa\! `.sort()` ordina alfabeticamente (come stringhe) di default.

    ```javascript
    const numeri = [10, 2, 5];
    numeri.sort(); // [10, 2, 5] (sbagliato! "10" viene prima di "2")

    // La soluzione: la funzione di confronto
    numeri.sort((a, b) => a - b); // [2, 5, 10] (Corretto, crescente)
    numeri.sort((a, b) => b - a); // [10, 5, 2] (Decrescente)
    ```

#### Metodi di Lettura (Non Distruttivi)

Questi metodi sono "gentili": creano un **nuovo array** senza toccare l'originale. Sono fondamentali per la programmazione funzionale e l'**immutabilità** (un pattern che vedremo).

  * **`.slice()` (Creare copie)**
    `.slice()` è la "fotocopiatrice" degli array.

    ```javascript
    const numeri = [1, 2, 3, 4, 5];
    const copia = numeri.slice(); // Fotocopia l'intero array
    const primiDue = numeri.slice(0, 2); // [1, 2] (indice 2 escluso)

    // Pattern per ordinare senza distruggere:
    const ordinati = numeri.slice().sort((a, b) => a - b);
    ```

  * **`.filter(fn)`:** Il "setaccio". Crea un nuovo array solo con gli elementi che passano il test.
    `numeri.filter(n => n > 2); // [3, 4, 5]`

  * **`.find(fn)`:** Il "detective". Restituisce il **primo elemento** che matcha la condizione (o `undefined`).
    `numeri.find(n => n > 2); // 3`

  * **`.findIndex(fn)`:** Restituisce l'**indice** del primo elemento che matcha (o `-1`).
    `numeri.findIndex(n => n > 2); // 2`

  * **`.includes(val)`:** Controllo rapido: "C'è questo valore?". Restituisce `true` o `false`.

  * **`.indexOf(val)`:** Dov'è questo valore? Restituisce l'indice (o `-1` se non trovato).

  * **`.join(sep)`:** L'"incollatore". Unisce un array in una stringa, usando un separatore.
    `["a", "b", "c"].join("-"); // "a-b-c"`

#### Metodi Funzionali (Iterazione/Trasformazione)

  * **`.map(fn)` (Trasformazione)**
    La "fabbrica di trasformazione". Prende un array, applica una funzione a ogni elemento e restituisce un **nuovo array** della stessa lunghezza con i risultati.

    ```javascript
    const numeri = [1, 2, 3];
    const doppi = numeri.map(n => n * 2); // [2, 4, 6]
    ```

  * **`.reduce(fn, valIniziale)` (Accumulazione)**
    Il "caldaia" o "robot da cucina". Fa bollire un intero array per produrre un **singolo valore** (una somma, un oggetto, una stringa...).

    ```javascript
    const numeri = [1, 2, 3];
    // (acc = accumulatore, curr = valore corrente)
    const somma = numeri.reduce((acc, curr) => acc + curr, 0); // 6
    ```

    Il `, 0` è il `valoreIniziale`. È una **best practice fondamentale** fornirlo sempre, altrimenti `reduce` usa il primo elemento come valore iniziale e salta la prima iterazione, causando bug con array vuoti.

  * **`.some(fn)` (Almeno uno)**
    Controlla se *almeno un* elemento passa il test. È super efficiente: si ferma al primo `true` che trova.
    `numeri.some(n => n > 2); // true`

  * **`.every(fn)` (Tutti)**
    Controlla se *tutti* gli elementi passano il test. Si ferma al primo `false` che trova.
    `numeri.every(n => n > 0); // true`

  * **`.fill(val)` (Riempimento, ponte per `.map()`)**
    Come abbiamo visto, `Array(3)` crea `[ <3 empty items> ]` (posti vuoti). `.map()` ignora i posti vuoti\!
    `.fill()` è il "ponte" che trasforma i posti vuoti in posti pieni (es. `[undefined, undefined, undefined]`), rendendo `.map()` utilizzabile.

#### Pattern e Logica con Array

  * **Pattern: Creare un Range di Numeri**
    Questo pattern unisce `Array(N)`, `.fill()` e `.map()`.

    ```javascript
    const range = (start, end) => {
        const lunghezza = end - start + 1;
        // 1. Crea posti vuoti
        // 2. .fill() li rende "mappabili" (riempiendoli con undefined)
        // 3. .map() usa l'indice per creare la sequenza
        return Array(lunghezza).fill().map((_, index) => start + index);
    };
    range(1, 5); // [1, 2, 3, 4, 5]
    ```

  * **Logica: Trovare la Mediana (Dispari e Pari)**
    (Richiede un array *già ordinato*\!)

    ```javascript
    const arrOrdinatoPari = [1, 2, 3, 4, 5, 6]; // Lunghezza 6
    const arrOrdinatoDispari = [1, 2, 3, 4, 5]; // Lunghezza 5

    // Caso Dispari (lunghezza 5)
    const indiceDispari = Math.floor(arrOrdinatoDispari.length / 2); // floor(2.5) -> 2
    const medianaDispari = arrOrdinatoDispari[indiceDispari]; // 3

    // Caso Pari (lunghezza 6)
    const centroDx = arrOrdinatoPari.length / 2;     // 3
    const centroSx = centroDx - 1;               // 2
    const el1 = arrOrdinatoPari[centroSx];           // 3
    const el2 = arrOrdinatoPari[centroDx];           // 4
    const medianaPari = (el1 + el2) / 2;             // 3.5
    ```

-----

### 6\. Oggetti (Object) - I Contenitori Strutturati 📇

Gli oggetti sono il cuore di JavaScript. Se gli array sono "liste ordinate", gli oggetti sono "collezioni non ordinate" di coppie **chiave-valore**. Sono come un dizionario o una rubrica telefonica dove ogni informazione ha un'etichetta (la chiave).

#### Creazione e Oggetti annidati (nested)

Gli oggetti possono contenere altri oggetti. È come avere scatole dentro altre scatole.

```javascript
const utente = {
    nome: "Mario",
    email: "mario@rossi.it",
    indirizzo: { // Oggetto annidato
        citta: "Roma",
        cap: "00100"
    },
    // Pattern comune per raggruppare stati
    keys: { 
        rightKey: { pressed: false },
        leftKey: { pressed: false }
    }
};
```

Questo è fondamentale per l'**organizzazione**. Invece di avere variabili sparse come `utenteCitta`, `utenteCAP`, `utenteRightKeyPressed`, raggruppi tutto logicamente.

#### Accesso (Notazione a Punto, Parentesi, Optional Chaining `?.`)

  * **Notazione a Punto (`.`):** La più comune, pulita e veloce.
    `utente.nome; // "Mario"`
    `utente.indirizzo.citta; // "Roma"`

  * **Notazione a Parentesi (`[]`):** Obbligatoria in due casi:

    1.  La chiave è una variabile: `const chiave = "nome"; utente[chiave]; // "Mario"`
    2.  La chiave ha caratteri speciali: `utente["data-di-nascita"] = "..."`

  * **Optional Chaining (`?.`):** Il salvavita (ES2020)\! Impedisce errori se un oggetto intermedio non esiste.

    ```javascript
    // Senza: ERRORE se `utente.lavoro` non esiste
    // const stipendio = utente.lavoro.stipendio; // Crash!

    // Con: Sicuro
    const stipendio = utente.lavoro?.stipendio; // undefined (nessun crash!)
    ```

#### Shorthand Property Names (ES6)

Una scorciatoia sintattica comodissima. Se il nome della chiave che vuoi creare è *identico* al nome della variabile che contiene il valore, puoi scriverlo una volta sola.

```javascript
const nome = "Mario";
const eta = 30;

// Classico:
const utenteClassico = { nome: nome, eta: eta };

// Moderno (Shorthand):
const utenteModerno = { nome, eta }; // Fa la stessa identica cosa!
```

#### Destructuring (ES6)

L'operazione inversa: estrarre valori da un oggetto e "spacchettarli" in variabili separate.

```javascript
const prodotto = { id: 1, nome: "Libro", prezzo: 15 };

// Classico:
const nomeClassico = prodotto.nome;
const prezzoClassico = prodotto.prezzo;

// Moderno (Destructuring):
const { nome, prezzo } = prodotto;
// Ora hai due nuove variabili: nome ("Libro") e prezzo (15)
```

#### Metodi Statici (`Object.keys()`, `Object.values()`, `Object.entries()`)

Questi sono strumenti per trasformare un oggetto (che non puoi ciclare facilmente con `map` o `filter`) in un array (che puoi\!).

  * `Object.keys(utente)`: `["nome", "email", "indirizzo", "keys"]` (Un array delle chiavi)
  * `Object.values(utente)`: `["Mario", "mario@rossi.it", {...}, {...}]` (Un array dei valori)
  * `Object.entries(utente)`: `[["nome", "Mario"], ["email", "mario@rossi.it"], ...]` (Un array di coppie `[chiave, valore]`)

<!-- end list -->

```javascript
// Uso pratico:
const prezzi = { mela: 1, pera: 2, banana: 1.5 };
// Aumentiamo tutti i prezzi del 10%
Object.entries(prezzi).forEach(([frutto, prezzo]) => {
    prezzi[frutto] = prezzo * 1.10;
});
```

#### `hasOwnProperty()` vs `Object.hasOwn()` (Moderno)

`hasOwnProperty` controlla se una proprietà appartiene *direttamente* all'oggetto (non ereditata dal `prototype`). È come controllare se una stanza è sul *tuo* rogito di casa o se è una parte comune del condominio.

```javascript
const utente = { nome: "Mario" };
utente.hasOwnProperty("nome"); // true
utente.hasOwnProperty("toString"); // false (è ereditata!)

// Moderno (preferito):
Object.hasOwn(utente, "nome"); // true
```

Usa `Object.hasOwn()` perché è un metodo statico e previene rari errori in cui un oggetto potrebbe essere stato creato senza ereditare `hasOwnProperty` (es. `Object.create(null)`).

#### Pattern: Mappa di Frequenza (Contatore)

Un uso comune degli oggetti è contare le occorrenze, creando una "mappa di frequenza".

```javascript
const voti = ["A", "B", "A", "A", "C", "B"];
const conteggio = {};

voti.forEach(voto => {
    // La magia è qui: (conteggio[voto] || 0)
    // Se conteggio[voto] esiste, usa il suo valore
    // Altrimenti (è undefined, falsy), usa 0
    // Poi aggiungi 1
    conteggio[voto] = (conteggio[voto] || 0) + 1;
});
// conteggio ora è: { A: 3, B: 2, C: 1 }
```

<br>
<br>
<br>
<br>
<br>
<br>











### 7\. Operatori Logici e Sintassi ⚙️

Se le variabili sono i "contenitori" e i tipi di dati sono la "forma" dell'informazione, gli operatori sono gli **ingranaggi** e la **colla** del tuo programma. Sono i verbi che ti permettono di combinare, confrontare, trasformare e prendere decisioni.

#### Operatore `||` (OR) per Valori di Default

Questo è uno degli operatori più fraintesi ma più utili. Molti pensano che `||` (OR) restituisca solo `true` o `false`, ma in JavaScript è molto più potente: è un **selettore di valori**.

La sua logica è: "restituisci il primo valore *truthy* che incontri".

Pensa a `||` come a un "Piano B". JavaScript controlla il primo valore. Se è "abbastanza buono" (truthy), lo restituisce. Se è "inutile" (falsy), allora e solo allora, restituisce il secondo valore come fallback.

Ricorda i **Sei Cavalieri del Falsy** (gli unici valori "inutili"):

1.  `false`
2.  `0`
3.  `""` (stringa vuota)
4.  `null`
5.  `undefined`
6.  `NaN`

*Tutto il resto* è truthy (inclusi `[]` e `{}`).

```javascript
// Esempio 1: Fornire un fallback
const nomeUtente = "" || "Ospite";
// JavaScript vede "" (falsy), quindi sceglie il "Piano B"
// nomeUtente è "Ospite"

const nomeUtenteReale = "Mario" || "Ospite";
// JavaScript vede "Mario" (truthy), lo prende subito
// nomeUtenteReale è "Mario"

// Esempio 2: Il Pattern del Contatore (FONDAMENTALE)
// Immagina di contare le parole in un testo
const conteggi = {};
const parola = "ciao";

// Prima volta che incontriamo "ciao":
// conteggi[parola] è undefined (falsy)
// Quindi (undefined || 0) diventa 0
// E 0 + 1 fa 1
conteggi[parola] = (conteggi[parola] || 0) + 1;
// conteggi ora è { ciao: 1 }

// Seconda volta che incontriamo "ciao":
// conteggi[parola] è 1 (truthy)
// Quindi (1 || 0) diventa 1
// E 1 + 1 fa 2
conteggi[parola] = (conteggi[parola] || 0) + 1;
// conteggi ora è { ciao: 2 }
```

**Alternativa Moderna (`??`):** Attenzione\! A volte `0` o `""` sono valori *validi* che non vuoi scartare. In quel caso, usa il "Nullish Coalescing Operator" (`??`), che scatta solo per `null` o `undefined`.

#### Operatore `!` (NOT) e Pattern "Toggle"

L'operatore `!` (NOT) è l'**interruttore della luce** della logica. Inverte un valore booleano.

  * `!true` diventa `false`
  * `!false` diventa `true`

Come `||`, lavora con i valori truthy/falsy. Prima "costringe" qualsiasi valore a diventare `true` o `false`, e *poi* lo inverte.

```javascript
!true;       // false
!false;      // true

!"Pizza";  // "Pizza" è truthy, quindi Boolean("Pizza") è true. !true è false.
!"";       // "" è falsy. Boolean("") è false. !false è true.
!0;         // 0 è falsy. Boolean(0) è false. !false è true.
!null;      // null è falsy. Boolean(null) è false. !false è true.
![];        // [] è truthy. Boolean([]) è true. !true è false.
```

**Il Pattern "Toggle" (Interruttore)**

Questo è l'uso più elegante di `!`. Ti permette di invertire uno stato booleano in una singola, leggibilissima riga.

```javascript
let isMenuOpen = false; // Il menu è chiuso

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    // 1° click: isMenuOpen = !false -> isMenuOpen diventa true
    // 2° click: isMenuOpen = !true  -> isMenuOpen diventa false
    // 3° click: isMenuOpen = !false -> isMenuOpen diventa true
    // ...e così via, come un interruttore della luce.
}
```

**Il trucco del Doppio NOT (`!!`)**
A volte vedi `!!valore`. Non è un errore, è un trucco\! È il modo più veloce per *convertire* qualsiasi valore nel suo equivalente booleano puro (truthy/falsy).

```javascript
!!5;       // true
!!"";      // false
!!{};      // true
```

#### Operatore Spread (`...`)

L'operatore spread (o "di diffusione") è magia pura. Pensa a un array o a un oggetto come a uno **scatolone chiuso**. I tre puntini `...` sono l'atto di **aprire lo scatolone e svuotarne il contenuto** sul tavolo, pezzo per pezzo.

**Con gli Array (Liste)**

1.  **Creare Copie (Immutabilità):**

    ```javascript
    const originale = ["a", "b", "c"];
    // const copiaSbagliata = originale; // ERRORE! Questa è solo un'altra etichetta per lo stesso scatolone!

    const copiaCorretta = [...originale]; // Prendi uno scatolone nuovo e svuotaci dentro i pezzi dell'originale
    copiaCorretta.push("d");
    // originale è ancora ["a", "b", "c"]
    ```

2.  **Unire (Concatenare):**

    ```javascript
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const uniti = [...arr1, 5, ...arr2]; // [1, 2, 5, 3, 4]
    ```

3.  **Passare Argomenti a Funzioni:**
    Alcune funzioni (come `Math.max`) non accettano uno scatolone (array), vogliono i pezzi singoli.

    ```javascript
    const numeri = [10, 5, 20];
    // Math.max(numeri); // ERRORE: NaN

    Math.max(...numeri); // Corretto! È come scrivere Math.max(10, 5, 20)
    ```

**Con gli Oggetti (Dizionari)**

1.  **Creare Copie e Aggiornare (Immutabilità):**
    ```javascript
    const utente = { nome: "Mario", eta: 30 };

    // Copia e aggiorna l'età
    const utenteAggiornato = { ...utente, eta: 31 };
    // { nome: "Mario", eta: 31 }
    // L'originale è intatto!

    // L'ordine conta!
    const utenteConflitto = { ...utente, nome: "Luigi" }; // { nome: "Luigi", eta: 30 }
    const utenteConflitto2 = { nome: "Luigi", ...utente }; // { nome: "Mario", eta: 30 }
    ```

**Distinzione: Spread vs. Rest**
Attento a non confondere "Spread" (che *espande*) con "Rest" (che *raccoglie*). La sintassi è la stessa (`...`), ma il contesto è opposto.

  * `...` in una *chiamata* o *definizione* di array/oggetto = **Spread** (espandi)
  * `...` nei *parametri di una funzione* = **Rest** (raccogli)
    `function(...args) { /* args è un array di tutti gli argomenti */ }`

#### Operatore di Esponenziazione (`**`)

Questa è una scorciatoia moderna (ES6+) per l'elevamento a potenza. È il "tasto rapido" sulla calcolatrice.

Prima, per fare $2^3$ (2 alla terza), dovevi usare la "calcolatrice scientifica" `Math`:

```javascript
// Modo classico
Math.pow(2, 3); // 8
Math.pow(9, 0.5); // 3 (per la radice quadrata)
```

Ora, puoi usare `**` che è più pulito, leggibile e si integra con gli altri operatori matematici.

```javascript
// Modo moderno (preferito)
2 ** 3; // 8
9 ** 0.5; // 3
```

#### Assegnazione a Catena

È una sintassi che vedi a volte per inizializzare più variabili allo stesso valore.

```javascript
let a, b, c;
a = b = c = "valore";

console.log(a); // "valore"
console.log(b); // "valore"
console.log(c); // "valore"
```

**Come funziona? (Il "Gotcha")**
L'assegnazione in JavaScript viene valutata **da destra a sinistra** e l'intera operazione di assegnazione *restituisce* il valore assegnato.

1.  `"valore"` viene assegnato a `c`.
2.  L'espressione `c = "valore"` *restituisce* il valore `"valore"`.
3.  Questo valore (`"valore"`) viene assegnato a `b`.
4.  L'espressione `b = "valore"` *restituisce* `"valore"`.
5.  Questo valore (`"valore"`) viene assegnato a `a`.

**L'Errore Comune (Sintassi Sbagliata)**
Non puoi usare operatori logici per assegnazioni multiple.

```javascript
// ERRORE DI SINTASSI!
// a && b = "valore"; // Sbagliato!
```

Questo non funziona perché il lato sinistro di un'assegnazione (`=`) deve essere un riferimento valido (come un nome di variabile, es. `a`), non un'espressione booleana (`a && b`).

**Best Practice:**
Evita l'assegnazione a catena. È sinteticamente carina, ma può essere **pessima per la leggibilità e il debugging**. Scrivere le assegnazioni su righe separate è quasi sempre meglio, più chiaro e più facile da manutenere.

```javascript
// Meglio così:
let a = "valore";
let b = "valore";
let c = "valore";
```

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>











## Parte II - Input/Output e Strutture di Controllo

### 8\. Output e Commenti 📢💭

Comunicare è fondamentale, non solo con l'utente, ma anche con te stesso e con gli altri sviluppatori. Il tuo codice deve "parlare". L'output tramite `console` è il tuo megafono durante lo sviluppo, mentre i commenti sono i tuoi appunti a margine, essenziali per la comprensione a lungo termine.

#### console - La Cabina di Controllo

Pensa alla `console` come alla **cabina di pilotaggio** del tuo programma. Non è un output per i tuoi passeggeri (gli utenti) - per quello userai il DOM (vedi Parte IV). È il pannello di controllo per te, il pilota (lo sviluppatore). È il posto dove il motore ti dice se sta funzionando bene, dove controlli i valori al volo e dove diagnostichi i problemi.

Il metodo `console.log()` è il tuo strumento principale. È come un "walkie-talkie" che ti permette di inviare un messaggio da qualsiasi punto del tuo codice alla cabina di controllo.

```javascript
// Puoi passare qualsiasi cosa:
console.log("Il programma è partito!");
console.log("Valore del contatore:", contatore); // Passa più argomenti
console.log(utente); // Ispeziona un intero oggetto!
console.log(unArrayDiDati); // Ispeziona un array
```

Ma la cabina di controllo è molto più sofisticata di un singolo `log`. Ha un intero pannello di strumenti specializzati:

```javascript
// STRUMENTI DI DEBUG AVANZATI

// 1. Log Semantici (per colore e contesto)
console.log("Messaggio normale");
console.info("Informazione utile");        // Spesso con un'icona (i)
console.warn("Attenzione!");               // Giallo ⚠️
console.error("Errore critico!");          // Rosso ❌ (blocca l'esecuzione se è un errore vero)

// 2. Ispezione Dati (fondamentale!)
const utenti = [
    { id: 1, nome: "Mario", eta: 30 },
    { id: 2, nome: "Luigi", eta: 28 }
];
console.table(utenti); // Mostra una tabella interattiva e ordinabile!

// 3. Organizzazione Output
console.group("Inizio Validazione Utente"); // Inizia un gruppo collassabile
console.log("Controllo nome...");
console.warn("Email mancante");
console.groupEnd(); // Chiude il gruppo

// 4. Misurazione Performance
console.time("timerLoop"); // Avvia un cronometro chiamato "timerLoop"
for (let i = 0; i < 1000; i++) {
    // ...
}
console.timeEnd("timerLoop"); // Ferma il cronometro e stampa il tempo trascorso

// 5. Conteggio
function bottoneCliccato() {
    console.count("clickBottone"); // Stampa: "clickBottone: 1", "clickBottone: 2", ...
}
```

Usare `console` è l'arte del **testing incrementale**. Invece di scrivere 100 righe di codice e sperare che funzionino, ne scrivi 5 e usi `console.log()` per "assaggiare" il risultato, proprio come uno chef assaggia il sugo mentre cucina.

#### Commenti - La Documentazione del Codice

I commenti sono **post-it** nel tuo codice. Sono messaggi per il "te stesso del futuro" o per i tuoi colleghi. Il codice ti dice *come* fa qualcosa, ma i commenti devono spiegare *perché* lo fa.

```javascript
// Commento singola linea - per note brevi
const tasse = prezzo * 0.22; // Applica IVA al 22%

/* Commento multi-linea
   Usato per spiegazioni più lunghe, per descrivere
   la logica complessa di una funzione, o per
   disabilitare temporaneamente un blocco di codice
   senza cancellarlo.
*/
/*
function vecchiaFunzione() {
    console.log("Questa non serve più");
}
*/
```

**JSDoc - La Documentazione Formale**

Quando scrivi una funzione o una classe, usare il formato `/** ... */` (JSDoc) è una best practice professionale. Non è solo un commento, è documentazione che il tuo editor (e altri strumenti) possono leggere per darti suggerimenti automatici.

```javascript
/**
 * JSDoc - Documentazione formale
 * @param {number} prezzo - Il prezzo base dell'articolo
 * @param {number} sconto - La percentuale di sconto (es. 20)
 * @returns {number} Il prezzo finale scontato
 */
function applicaSconto(prezzo, sconto) {
    return prezzo * (1 - sconto / 100);
}
```

**Tag Speciali - Organizzare il Lavoro**

Usa tag standard per creare una "lista di cose da fare" interna al codice.

```javascript
// TODO: Implementare la validazione dell'email con una regex
// FIXME: Questo non gestisce i numeri negativi, crasha
// NOTE: L'API richiede il formato data ISO (AAAA-MM-GG)
// HACK: Aggiunto un piccolo timeout per aspettare l'animazione CSS (400ms)
// DEPRECATED: Usare la nuova funzione `calcolaTotaleV2()` dalla v2.0
```

**Best Practices per Commenti: Spiega il "Perché", non il "Cosa"**

I commenti non devono essere un'eco del codice. Devono aggiungere valore.

```javascript
// CATTIVO: Commento ovvio e inutile
let count = 0;  // Imposta count a 0

// BUONO: Spiega il "perché" e il contesto
let count = 0;  // Contatore tentativi falliti (max 3 prima del blocco account)
```

Un buon commento è come una nota a margine su un libro difficile: non ripete il testo, ma ti dà la chiave di lettura per capirlo.

<br>
<br>
<br>
<br>
<br>
<br>












### 9\. Controllo del Flusso - Le Decisioni del Programma 🚦

Se il codice fosse una ricetta, finora abbiamo visto solo gli ingredienti (i tipi di dato) e gli utensili (gli operatori). Il **controllo del flusso** è la ricetta stessa: è la sequenza di passaggi, le decisioni, i "se" e gli "altrimenti" che trasformano una lista statica di istruzioni in un programma dinamico e intelligente. È il punto in cui il tuo codice smette di essere un sasso e inizia a essere un robot.

#### if/else - Il Bivio Classico

Pensa a `if` come a un **bivio sulla strada**. Il tuo programma arriva al bivio e deve prendere una decisione. La condizione tra parentesi `()` è il cartello stradale che il programma legge.

```javascript
// La condizione è la domanda
if (condizione) {
    // ...blocco di codice se la condizione è 'true'
}
```

La parte cruciale da capire è che la `condizione` viene *sempre* costretta a diventare un booleano. Qui è dove i concetti di **Truthy e Falsy** (Parte I, Sezione 2) diventano fondamentali.

```javascript
const username = "Mario";
if (username) { // "Mario" è truthy, quindi il codice entra
    console.log(`Benvenuto, ${username}`);
}

const punteggio = 0;
if (punteggio) { // 0 è falsy, quindi il codice NON entra
    console.log("Hai un punteggio!");
}
```

  * **if / else - Il Bivio a Due Vie**
    Se `if` è il bivio, `else` è l'altra strada. È il "Piano B" garantito. Se la condizione `if` è falsa, il blocco `else` viene eseguito.

    ```javascript
    const eta = 15;
    if (eta >= 18) {
        console.log("Accesso consentito: Maggiorenne");
    } else {
        console.log("Accesso negato: Minorenne");
    }
    ```

  * **if / else if / else - La Rotatoria a Più Uscite**
    Quando hai più di due scelte, puoi incatenare gli `else if` per creare una serie di controlli.

    ```javascript
    const voto = 85;
    if (voto > 90) {
        console.log("A");
    } else if (voto > 80) {
        console.log("B"); // Entra qui!
    } else if (voto > 70) {
        console.log("C");
    } else {
        console.log("F");
    }
    ```

    JavaScript esegue i controlli in ordine e si ferma al *primo* che risulta `true`.

**Operatore Ternario - Il Bivio Compatto (per Assegnazioni)**

L'operatore ternario è una versione ultra-compatta di `if/else`. Pensa a `if/else` come a una lettera formale, e al ternario come a un post-it.

La sua sintassi è: `condizione ? valore_se_true : valore_se_false;`

È progettato per **restituire un valore**, quindi è perfetto per assegnare dati a una variabile.

```javascript
const eta = 20;

// Modo classico
let status;
if (eta >= 18) {
    status = "Maggiorenne";
} else {
    status = "Minorenne";
}

// Modo ternario (più pulito)
const statusTernario = eta >= 18 ? "Maggiorenne" : "Minorenne";
// Leggilo come: "L'età è >= 18? Se sì, usa 'Maggiorenne', altrimenti usa 'Minorenne'."
```

**Quando usarlo?** Usalo *solo* per assegnazioni semplici. Se inizi a "annidare" i ternari (un ternario dentro l'altro), stai creando un mostro illeggibile. Per logica complessa, `if/else` è sempre la scelta migliore per la chiarezza.

-----

#### switch - Il Centralino Telefonico

Se `if/else` è una rotatoria, `switch` è un **centralino telefonico**. È perfetto quando hai *una singola variabile* (l'"interno" che vuoi chiamare) da confrontare con una lista di *valori statici* (gli "interni disponibili"). È molto più pulito di una lunga catena di `if (x === 1) else if (x === 2) else if (x === 3)...`.

```javascript
const azione = "salva";

switch (azione) { // 1. Il valore da controllare
    case "salva": // 2. "Corrisponde a 'salva'?"
        console.log("Dati salvati.");
        break;  // 3. FONDAMENTALE: esci!

    case "carica":
        console.log("Caricamento...");
        break;
        
    case "elimina":
    case "cancella":  // 4. "Fall-through": raggruppa più casi
        console.log("Elemento eliminato.");
        break;
        
    default:  // 5. L'"else" dello switch
        console.log("Azione sconosciuta.");
}
```

**I Segreti di `switch`:**

1.  **Il `break` è il tuo migliore amico:** Dimenticare `break` è l'errore più comune. Senza di esso, il codice "cade attraverso" (fall-through) ed esegue anche il caso successivo, e quello dopo ancora, fino a che non trova un `break` o la fine. È come un centralinista che ti collega all'ufficio giusto, ma dimentica di scollegare quello precedente, e ora sei in una conference call con tutto l'edificio.
2.  **Confronto Stretto (`===`):** `switch` usa un confronto di identità stretto (come `===`). Questo significa che `switch(5)` **non** corrisponderà a `case "5"`, perché un numero non è una stringa.

-----

#### Pattern "Return Early" - La Guardia all'Ingresso

Questo non è un comando, ma un *pattern*, un modo di scrivere codice più pulito e robusto. Pensa a questa tecnica come a una **guardia di sicurezza (o "buttafuori")** all'ingresso di una funzione.

Il modo "classico" di scrivere una funzione è controllare le condizioni positive, creando una "piramide della rovina" (pyramid of doom) di `if` annidati.

```javascript
// CATTIVO: La piramide 👎
function processaPagamento(utente, carrello) {
    if (utente) {
        if (utente.cartaDiCreditoValida) {
            if (carrello.totale > 0) {
                // ...finalmente, il codice che ci interessa...
                // ...sepolto dentro 3 livelli di indentazione...
                eseguiPagamento(carrello.totale, utente.carta);
            } else {
                console.error("Carrello vuoto");
            }
        } else {
            console.error("Carta non valida");
        }
    } else {
        console.error("Utente non loggato");
    }
}
```

Questo codice è difficile da leggere. Il "percorso felice" (quello che fa il vero lavoro) è nascosto in fondo.

Il pattern **Return Early** (o *Guard Clauses*) ribalta la logica: controlla prima tutte le condizioni *negative* e esci subito (`return`) se qualcosa non va.

```javascript
// BUONO: Piatto e leggibile (Guard Clauses) 👍
function processaPagamento(utente, carrello) {
    // 1. Guardia: l'utente esiste?
    if (!utente) {
        console.error("Utente non loggato");
        return; // Esci subito
    }

    // 2. Guardia: la carta è valida?
    if (!utente.cartaDiCreditoValida) {
        console.error("Carta non valida");
        return; // Esci subito
    }
    
    // 3. Guardia: il carrello è pieno?
    if (carrello.totale <= 0) {
        console.error("Carrello vuoto");
        return; // Esci subito
    }

    // Se siamo arrivati qui, è tutto valido.
    // Il "percorso felice" è piatto e facile da leggere.
    eseguiPagamento(carrello.totale, utente.carta);
}
```

Questo stile è immensamente superiore perché:

  * Riduce l'indentazione.
  * Rende la logica principale della funzione immediatamente visibile.
  * Gestisce tutti i casi limite all'inizio, come un buttafuori che filtra la coda.

<br>
<br>
<br>
<br>
<br>
<br>










### 10\. Cicli - Le Ripetizioni Automatizzate 🔄

I cicli sono l'essenza dell'automazione. Sono il modo in cui dici al computer: "Fai questa cosa, e poi falla ancora, e ancora... finché non ti dico di smettere." Senza cicli, dovresti scrivere `console.log(1)`, `console.log(2)`... mille volte. Con un ciclo, lo scrivi una volta sola.

Pensa ai cicli come a diversi tipi di robot operai, ognuno specializzato per un compito diverso.

#### `for` - Il Ciclo Contatore (Il Robot Industriale)

Il ciclo `for` è il tuo robot industriale su un nastro trasportatore. È preciso, metodico e sa *esattamente* cosa deve fare prima ancora di iniziare. È perfetto quando sai in anticipo quante volte devi ripetere un'azione.

La sua sintassi è come il suo pannello di controllo, con tre impostazioni fondamentali:
`for (inizializzazione; condizione; incremento) { ... }`

1.  **Inizializzazione (`let i = 0`):** Il "punto di partenza". Il robot imposta il suo contatore a 0. Questa variabile `i` (sta per "indice") vive *solo* all'interno del ciclo, grazie al **Block Scope** di `let`.
2.  **Condizione (`i < 5`):** Il "limite di lavoro". *Prima* di ogni singolo giro, il robot controlla: "Il mio contatore è ancora sotto 5?". Se sì, lavora. Se no, si ferma.
3.  **Incremento (`i++`):** L'azione "dopo il lavoro". *Dopo* aver completato un giro, il robot preme il pulsante per far avanzare il nastro e incrementa il suo contatore (`i` diventa 1, poi 2, ecc.).

<!-- end list -->

```javascript
// Stampa i numeri da 0 a 4
for (let i = 0; i < 5; i++) {
    console.log(`Iterazione ${i}`);
}
// Output: 0, 1, 2, 3, 4
```

**Quando usarlo?**
È la scelta perfetta per iterare su un array quando hai bisogno dell'**indice**:

```javascript
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
    console.log(`Indice ${i}: ${arr[i]}`);
}
```

-----

#### `while` - Il Ciclo Condizionale (La Guardia Notturna)

Se `for` è un robot industriale, `while` è una **guardia notturna**. Non sa quanti giri farà stanotte. Sa solo che deve "continuare a pattugliare *mentre* (`while`) la porta principale è chiusa".

Controlla la condizione *prima* di fare qualsiasi cosa.

`while (condizione) { ... }`

1.  Controlla la `condizione`.
2.  Se è `true`, esegue il blocco di codice.
3.  Torna al punto 1 e ricontrolla.

**Il Pericolo: Il Loop Infinito\!**
La guardia notturna *deve* avere un modo per cambiare la condizione. Se la porta non si apre mai (e la guardia non ha una chiave), pattuglierà per sempre. Devi *sempre* assicurarti che qualcosa all'interno del `while` (o all'esterno) prima o poi renda la condizione `false`.

```javascript
let tentativi = 0;
let passwordInserita = "";

while (passwordInserita !== "segreta" && tentativi < 3) {
    console.log(`Tentativo ${tentativi + 1}`);
    // Qualcosa DEVE cambiare la condizione
    passwordInserita = prompt("Inserisci password:"); // Modifica la condizione
    tentativi++; // Modifica la condizione
}

if (passwordInserita === "segreta") {
    console.log("Accesso consentito!");
} else {
    console.log("Account bloccato.");
}
```

**Quando usarlo?**
Quando *non sai* quante iterazioni serviranno, ma sai a quale **condizione** devi fermarti. (Es: "continua a scaricare dati finché non c'è più niente", "continua a chiedere all'utente finché non risponde 'sì'").

-----

#### `do...while` - Il Ciclo Garantito (Prima Fai, Poi Chiedi)

Questo è il cugino impulsivo di `while`. È una guardia notturna che fa **almeno un giro di pattuglia prima ancora di controllare** se la porta è chiusa. È il "prima spara, poi fai domande".

`do { ... } while (condizione);`

1.  Esegue il blocco `do` (la prima volta, sempre\! Senza fare domande).
2.  *Poi*, alla fine del giro, controlla la `condizione`.
3.  Se è `true`, torna al punto 1 e ripete.

**Quando usarlo?**
Quando devi eseguire l'azione *almeno una volta*, indipendentemente dalla condizione. È il re indiscusso per creare **menu** interattivi.

```javascript
let scelta;
do {
    console.log("--- MENU ---");
    console.log("1. Gioca");
    console.log("2. Opzioni");
    console.log("3. Esci");
    scelta = prompt("Scegli un'opzione (1-3):");
    
    // ... logica per scelta 1 e 2 ...
    
} while (scelta !== "3"); // Continua a mostrare il menu finché non sceglie "3"

console.log("Arrivederci!");
```

-----

#### `for...of` - Il Ciclo per Collezioni (L'Esploratore Elegante)

Questo è il modo moderno ed elegante di ciclare. È come avere una **scatola magica** (`const carrello`) e dire a JavaScript: "esamina ogni oggetto (`const prodotto`) *nella* (`of`) scatola, uno alla volta, non mi interessa l'ordine o l'indice, dammeli e basta".

`for (const elemento of iterabile) { ... }`

  * Funziona magicamente su "iterabili": **Array**, **Stringhe**, **Map**, **Set**, e le `NodeList` del DOM.
  * **Non funziona** sugli oggetti semplici `{}` (non sono iterabili in questo modo).

**Vantaggi:**

1.  **Leggibilità:** `for (const prodotto of carrello)` è molto più pulito di `for (let i = 0; i < carrello.length; i++) { ... }`.
2.  **Sicurezza:** `const elemento` previene modifiche accidentali.
3.  **Senza Indici:** Non devi preoccuparti di `i`, `length`, o di sbagliare con `i <= length`.

<!-- end list -->

```javascript
// Esempio 1: Iterare su un Array
const carrello = ["mele", "pane", "latte"];
for (const prodotto of carrello) {
    console.log(`Comprare: ${prodotto}`);
}

// Esempio 2: Iterare su una Stringa
for (const lettera of "Ciao") {
    console.log(lettera);  // Stampa C, i, a, o
}
```

**Distinzione Fondamentale: `for...of` vs `for...in`**
Non confonderli\!

  * `for...of` itera sui **valori** di un *iterabile* (Array, Stringa...). È quello che vuoi il 99% delle volte.
  * `for...in` itera sulle **chiavi (proprietà)** di un *oggetto*.

<!-- end list -->

```javascript
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key);  // Stampa "a", "b" (le chiavi!)
}
```

-----

#### `forEach` - L'Iteratore di Array (Il Caposquadra)

`forEach` non è un ciclo "nativo" di JavaScript (come `for` o `while`), è un **metodo** che *vive solo sugli Array*. È come un caposquadra che dice: "Per ciascun (`forEach`) operaio (elemento) nella mia squadra (array), digli di eseguire questo compito (la callback)".

`array.forEach(function(elemento, indice) { ... });`

  * Accetta una *callback* (un'istruzione) che viene eseguita per ogni elemento.
  * La callback riceve automaticamente `(elemento, indice, arrayCompleto)` come argomenti.

<!-- end list -->

```javascript
const frutti = ["mela", "pera", "banana"];

frutti.forEach((frutto, indice) => {
    console.log(`${indice + 1}. ${frutto}`);
});
// Output:
// 1. mela
// 2. pera
// 3. banana
```

**Il "Difetto" (o Caratteristica): Non Puoi Fermarlo\!**
`forEach` è come un treno che deve visitare tutte le stazioni. I comandi `break` e `continue` **NON FUNZIONANO** al suo interno. Se hai bisogno di fermarti a metà (ad esempio, per cercare un elemento), non usare `forEach`. Usa un ciclo `for` classico, `for...of`, o i metodi `.find()`/`.some()`.

-----

#### Controllo del Flusso nei Cicli (I Teletrasporti)

`break` e `continue` sono i "teletrasporti" del ciclo. Sono i comandi di emergenza per il tuo robot. Funzionano in `for`, `while` e `do...while` (ma **non** in `forEach`).

**`break` - Il Pulsante di Stop Emergenza 🚨**

  * **Cosa fa:** Ferma *immediatamente* l'intero ciclo (quello più interno in cui si trova) e "salta" fuori, continuando l'esecuzione del codice *dopo* il ciclo.
  * **Analogia:** È il pulsante di emergenza rosso. Non importa quanti bulloni mancano, il robot si ferma e il nastro trasportatore si spegne.

<!-- end list -->

```javascript
// Trova il primo numero pari e fermati
const numeri = [1, 3, 5, 6, 7, 9, 8];
let primoPari;

for (const num of numeri) {
    if (num % 2 === 0) {
        primoPari = num;
        break; // Trovato! Esci dal ciclo. Non continuare a cercare.
    }
}
// primoPari è 6 (non 8)
```

**`continue` - Salta al Prossimo Giro ⏭️**

  * **Cosa fa:** Ferma *solo l'iterazione corrente* e "salta" immediatamente all'inizio del giro successivo (all'incremento `i++` nel `for`, o al controllo `while (condizione)`).
  * **Analogia:** È il comando "scarta questo pezzo". Il robot vede un bullone difettoso, lo butta via (`continue`) e passa subito al bullone successivo sul nastro trasportatore, senza completare le altre operazioni per quello difettoso.

<!-- end list -->

```javascript
// Stampa solo i numeri dispari
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) { // Se è pari...
        continue; // ...salta questo giro, non eseguire il console.log.
    }
    // Questo codice viene eseguito solo se `continue` non è scattato
    console.log(i); // 1, 3, 5, 7, 9
}
```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>








## Parte III - Funzioni e Scope

### 11\. Funzioni - Le Ricette Riutilizzabili del Codice 🧩

Le funzioni sono i mattoni fondamentali di un programma ben organizzato. Sono come delle **ricette**: definisci una serie di passaggi *una sola volta* (es. "come fare una torta") e poi puoi "cucinare" quel risultato ogni volta che vuoi, semplicemente *chiamando* la ricetta e fornendo gli ingredienti (i "parametri").

Sono il tuo strumento principale per applicare il principio **DRY (Don't Repeat Yourself)**. Se ti trovi a scrivere lo stesso blocco di codice più di una volta, è il momento di trasformarlo in una funzione.

#### Dichiarazione Classica vs Arrow Functions

Esistono due modi principali per scrivere una funzione, ognuno con le sue caratteristiche.

  * **Dichiarazione Classica (`function`)**
    Questo è il modo tradizionale, robusto e universale. Pensa a questa come alla **ricetta formale** scritta su una pergamena.

    ```javascript
    // Dichiarazione classica
    function saluta(nome) {
        return `Ciao, ${nome}!`;
    }

    // Espressione di funzione (quasi identica, ma assegnata a una variabile)
    const salutaComeEspressione = function(nome) {
        return `Ciao, ${nome}!`;
    };
    ```

    **Caratteristiche chiave:**

    1.  Vengono "sollevate" (**hoisted**): Puoi *chiamare* una funzione classica *prima* di averla definita nel codice.
    2.  Hanno il loro *proprio* valore `this`, che cambia a seconda di *come* e *dove* vengono chiamate (questo è un argomento avanzato, spesso fonte di confusione).

  * **Arrow Functions (`=>`)**
    Introdotte in ES6, sono il modo moderno, conciso e spesso preferito. Pensa a loro come a una **nota rapida su un post-it**.

    ```javascript
    const saluta = (nome) => {
        return `Ciao, ${nome}!`;
    };
    ```

    **Caratteristiche chiave:**

    1.  **Sintassi concisa:** Meno "rumore" (niente parola `function`).
    2.  **Niente `this` proprio:** Non hanno un loro `this`\! Lo "ereditano" dal contesto in cui sono state create. Questo risolve *enormi* mal di testa, specialmente con `addEventListener` e metodi di classe.

#### Return Implicito vs Esplicito

Questo è uno dei superpoteri delle Arrow Functions.

  * **Return Esplicito (Con `{}`)**
    Se la tua funzione freccia usa le parentesi graffe `{}`, stai definendo un "blocco di codice" (che può contenere più righe). Come in una funzione classica, devi usare la parola chiave `return` per restituire un valore.

    ```javascript
    // Esplicito (con graffe, serve return)
    const somma = (a, b) => {
        const risultato = a + b;
        return risultato; // Devi scrivere 'return'
    };
    ```

  * **Return Implicito (Senza `{}`)**
    Se la tua funzione fa solo *una cosa* (una singola espressione, un "one-liner"), puoi omettere sia le graffe `{}` sia la parola `return`. JavaScript restituirà *automaticamente* il risultato di quell'unica espressione.

    ```javascript
    // Implicito (senza graffe, return automatico)
    const somma = (a, b) => a + b;

    // Perfetto per i metodi array
    const raddoppiati = [1, 2, 3].map(n => n * 2); // [2, 4, 6]
    ```

#### Return Oggetto (con `()`)

**Il Trabocchetto Fondamentale\!**
Cosa succede se vuoi restituire *implicitamente* un oggetto?

```javascript
// SBAGLIATO! ❌
const creaUtente = (nome) => { nome: nome, eta: 30 };
// Questo ritorna 'undefined'!
```

Perché? JavaScript vede la `{` e pensa che sia l'inizio di un *blocco di codice* (return esplicito), non un *oggetto letterale*.

**La Soluzione:** Avvolgi l'oggetto tra parentesi tonde `()`.
Questo dice a JavaScript: "Ehi, tratta quello che c'è dentro le graffe come una singola *espressione* (un oggetto), non come *istruzioni*."

```javascript
// CORRETTO! ✅
const creaUtente = (nome) => ({ nome: nome, eta: 30 });
// Questo ritorna correttamente l'oggetto { nome: "Mario", eta: 30 }
```

È come mettere un'etichetta sulla scatola che dice: "Questo è un oggetto, non una lista di comandi."

#### Parametri di Default

Un modo pulito (ES6+) per rendere le tue funzioni più robuste, fornendo "valori di fallback" per i parametri che non vengono passati.

*Analogia:* Una ricetta che dice "un pizzico di sale (o 1g se non sai cos'è 'un pizzico')".

```javascript
// Prima dovevi fare così (goffo)
function salutaVecchio(nome) {
    nome = nome || "Ospite";
    return `Ciao, ${nome}`;
}

// Ora (molto più pulito)
function saluta(nome = "Ospite", orario = "giorno") {
    return `Buon${orario}, ${nome}!`;
}

saluta();                    // "Buongiorno, Ospite!"
saluta("Mario");             // "Buongiorno, Mario!"
saluta("Mario", "asera");    // "Buonasera, Mario!"
```

#### Destrutturazione nei Parametri

Questo è un pattern avanzato ma incredibilmente pulito. Ti permette di "spacchettare" (destrutturare) un oggetto o un array *direttamente nella firma della funzione*.

*Analogia:* Invece di ricevere un intero cesto di frutta (l'oggetto `utente`) e dover poi estrarre la mela (`utente.nome`) e la banana (`utente.eta`), dici alla funzione: "Mi servono solo la mela e la banana, dammi quelle direttamente."

```javascript
const utente = { id: 1, nome: "Mario", eta: 30 };

// Senza destrutturazione (goffo)
function presentaPersona(u) {
    return `${u.nome} ha ${u.eta} anni`;
}

// Con destrutturazione (pulito!)
function presentaPersona({ nome, eta }) {
    return `${nome} ha ${eta} anni`;
}
presentaPersona(utente); // "Mario ha 30 anni"

// Il top: destrutturazione + parametri di default
function configura({ tema = "light", volume = 50 } = {}) {
    // ...
}
configura(); // Funziona senza errori, usando i default
```

#### Callback (Concetto Base)

Questo è un concetto *fondamentale* in JavaScript. Una **callback** è una funzione che viene passata *come argomento* a un'altra funzione, con l'intenzione di essere "richiamata" (called back) in un secondo momento.

*Analogia: L'Ordine della Pizza 🍕*

1.  Tu chiami la pizzeria (la funzione `ordinaPizza`).
2.  Non resti al telefono ad aspettare che la pizza sia pronta (il codice non si blocca).
3.  Dai al pizzaiolo il tuo **numero di telefono** (la **callback**).
4.  Quando la pizza è pronta (l'evento), il fattorino *ti chiama* (esegue la callback).

**Perché è Fondamentale?**

1.  **Asincronia (La Pizza):** Per operazioni che richiedono tempo (download, timer). Permette al tuo codice di "continuare a fare altro" mentre aspetta.

    ```javascript
    console.log("Ordino...");
    // setTimeout è una funzione che accetta una callback e un tempo
    setTimeout(() => { // Questa è la callback (il tuo numero)
        console.log("🍕 Pizza arrivata!"); // Eseguita dopo 2 secondi
    }, 2000);
    console.log("Intanto apparecchio la tavola.");
    ```

2.  **Specializzazione (La Macchina):** Per dire a una funzione generica *cosa* fare.
    `map` è una macchina generica che "scorre un array". La tua callback è l'istruzione specifica (es. "raddoppia il numero") da eseguire a ogni passo.

    ```javascript
    const numeri = [1, 2, 3];
    const raddoppia = n => n * 2; // Questa è la callback (l'istruzione)
    const doppi = numeri.map(raddoppia); // [2, 4, 6]
    ```

#### Currying

Il Currying è una tecnica di programmazione funzionale che trasforma una singola funzione con *multipli* argomenti (es. `fn(a, b, c)`) in una *sequenza* di funzioni, ognuna con *un solo* argomento (es. `fn(a)(b)(c)`).

*Analogia: Il Cuoco Specializzato 👨‍🍳*

  * `preparaPiatto(ing1, ing2, ing3)`: È un cuoco che ha bisogno di tutti e 3 gli ingredienti *subito* per iniziare a cucinare.
  * `preparaPiattoCurry(ing1)`: Tu dai al cuoco il primo ingrediente (es. "pasta"). Lui non ti restituisce il piatto finito. Invece, ti restituisce un **nuovo cuoco specializzato** che ora sa solo come fare piatti a base di pasta.
  * `chefPasta(ing2)`: Tu dai a questo nuovo cuoco "pomodoro". Lui ti restituisce un cuoco *ancora più specializzato* che sa fare solo pasta al pomodoro e aspetta l'ultimo ingrediente.

**Vantaggio (Partial Application)**

Il vero potere non è chiamare `fn(a)(b)(c)` tutto in una volta. È **salvare i cuochi specializzati\!** Questo si chiama "Applicazione Parziale" (Partial Application).

```javascript
// Funzione "curryficata"
const curriedAdd = (a) => { // Il primo chef
    return (b) => { // Il cuoco specializzato
        return a + b;
    };
};

// --- Applicazione Parziale ---
// Creiamo un cuoco specializzato!
const add10 = curriedAdd(10); 
// add10 è ora una *nuova funzione* (b => 10 + b)
// È un "cuoco" che ha il 10 "bloccato" dentro di sé.

// Ora usiamo il nostro cuoco specializzato quando vogliamo
console.log(add10(5));  // 15
console.log(add10(20)); // 30
console.log(add10(90)); // 100
```

È incredibilmente utile per creare funzioni riutilizzabili e configurabili.

**Come Funziona (Closure):** Questo è possibile solo grazie alla **Closure**. La funzione interna (`b => ...`) "si ricorda" del valore di `a` anche dopo che la funzione esterna ha finito di essere eseguita.

**Sintassi (Arrow Function)**

Il Currying e le Arrow Function (con return implicito) sono fatti l'uno per l'altra.

```javascript
// La versione lunga (con return espliciti)
const curriedAddLunga = (a) => {
    return (b) => {
        return a + b;
    };
};

// La versione "compressa" con arrow functions
const curriedAdd = a => b => a + b;

// Funzionano allo stesso modo!
const add5 = curriedAdd(5);
console.log(add5(3)); // 8
```

#### Convenzione Underscore (`_`) per Parametri Non Usati

Questa non è una regola di JavaScript, ma una **convenzione stilistica** (un "patto tra gentiluomini" tra programmatori).

A volte, una funzione (specialmente una callback) ti *fornisce* più parametri, ma a te ne serve solo uno successivo.
Esempio: `arr.map((elemento, indice) => ...)`
E se volessi solo l'indice e non l'elemento? Non puoi scrivere `arr.map((indice) => ...)` perché JavaScript penserà che `indice` sia il *primo* parametro (l'elemento).

*Analogia: La Posta 📬*
Devi controllare la posta per trovare l'unica bolletta importante. La cassetta contiene `(pubblicità, bolletta, rivista)`.
Sei *costretto* a prendere anche la pubblicità per arrivare alla bolletta.

**La Soluzione:** Definisci comunque il parametro, ma chiamalo `_` (o `_elemento`) per segnalare a chi legge (e agli strumenti di analisi del codice) che: "Sì, so che questo parametro esiste, ma l'ho **intenzionalmente ignorato**."

```javascript
// Voglio creare un array di indici [0, 1, 2]
const arr = ["a", "b", "c"];

// Non mi serve il valore ("a", "b", "c"), solo l'indice
const indici = arr.map((_elemento, indice) => {
    return indice;
});
// indici è [0, 1, 2]
// L'_elemento dice "ignoro il primo parametro, non è un bug"
```
<br>
<br>
<br>
<br>
<br>
<br>










### 12\. Scope - La Visibilità delle Variabili 👁️

Lo **Scope** (o *campo di visibilità*) è l'insieme di regole che determina dove una variabile è accessibile nel tuo codice. Non è un concetto astratto, è una regola fisica del linguaggio, come la gravità.

Pensa al tuo programma come a una **grande casa** (`Global Scope`). Dentro questa casa, ci sono molte **stanze private** (`Function Scope`) e dentro quelle stanze ci sono dei **ripostigli chiusi** (`Block Scope`).

Lo Scope risponde alla domanda: "Se mi trovo in questa stanza, quali variabili posso *vedere* e *usare*?"

#### Global Scope vs Local Scope

Questa è la distinzione fondamentale, la differenza tra la piazza della città e il tuo salotto di casa.

  * **Global Scope (La Piazza)**
    Una variabile è nello Scope Globale se è dichiarata *al di fuori* di qualsiasi funzione o blocco.

    ```javascript
    // QUESTE SONO GLOBALI
    let punteggioMassimo = 1000;
    const NOME_GIOCO = "Avventura JS";

    function mostraPunteggio() {
        console.log(punteggioMassimo); // Posso vederla da qui!
    }
    ```

    *Analogia:* È un **monumento nella piazza principale**. Chiunque, da qualsiasi finestra di qualsiasi palazzo (funzione), può affacciarsi e vederlo.
    *Il Pericolo:* È anche un "inquinamento". Se troppe cose sono globali, chiunque può anche provare a *modificarle* (se sono `let`). È come lasciare il portafoglio su una panchina pubblica: comodo, ma pericoloso.

  * **Local Scope o Function Scope (Il Salotto)**
    Una variabile è nello Scope Locale se è dichiarata *all'interno* di una funzione.

    ```javascript
    function gioca() {
        // QUESTA È LOCALE
        let punteggioRound = 100;
        console.log(`Hai totalizzato ${punteggioRound} punti!`);
        
        // Posso vedere anche il globale da qui
        console.log(`Il punteggio massimo è ${punteggioMassimo}`);
    }

    gioca();

    // console.log(punteggioRound); // ERRORE! ❌
    // ReferenceError: punteggioRound is not defined
    ```

    *Analogia:* `punteggioRound` è il **telecomando del tuo salotto**. Esiste solo in quella stanza. Chi è fuori (Global Scope) non può vederlo, non può usarlo e non sa nemmeno che esiste. Quando esci dalla stanza (la funzione finisce), il telecomando "sparisce" (la variabile viene distrutta dal Garbage Collector).

-----

#### Scope Chain - La Catena di Visibilità

Ok, ma *come* fa JavaScript a decidere quale variabile usare? Segue un processo chiamato **Scope Chain** (Catena di Visibilità).

Pensa a quando **cerchi le chiavi di casa**:

1.  **Guardi nelle tue tasche** (lo Scope Attuale, quello più interno). Le trovi? Perfetto, ti fermi e le usi.
2.  Non sono nelle tasche? **Guardi sul tavolo del salotto** (lo Scope Esterno, la funzione che ti contiene). Le trovi? Ok, usi quelle.
3.  Non sono sul tavolo? **Guardi sull'attaccapanni all'ingresso** (lo Scope Globale). Trovate? Usi quelle.
4.  Non sono nemmeno lì? **Ti arrendi.** (JavaScript lancia un `ReferenceError`).

JavaScript fa *esattamente* la stessa cosa. Cerca la variabile nel suo scope attuale e, se non la trova, "risale" la catena degli scope, un anello alla volta, fino a raggiungere quello Globale.

**Il Concetto di "Shadowing" (Ombreggiatura)**
Cosa succede se hai due variabili con lo stesso nome a livelli diversi? Vince quella più vicina\!

```javascript
const messaggio = "Globale"; // 3. Attaccapanni all'ingresso

function esterna() {
    const messaggio = "Esterna"; // 2. Tavolo del salotto
    
    function interna() {
        const messaggio = "Interna"; // 1. Nelle tue tasche
        
        console.log(messaggio); // Cerca... e la trova subito!
    }
    
    interna(); // Output: "Interna"
    console.log(messaggio); // Cerca... la trova sul "tavolo"
}

esterna(); // Output: "Esterna"
console.log(messaggio); // Cerca... la trova all'"ingresso"
// Output: "Globale"
```

La variabile `messaggio = "Interna"` "mette in ombra" (shadows) quella esterna, e quella esterna mette in ombra quella globale.

-----

#### Block Scope con `let` e `const`

Questa è la rivoluzione moderna (introdotta con ES6).

  * Prima, solo le `function` creavano una "stanza" (Function Scope).
  * Ora, con `let` e `const`, *qualsiasi coppia di parentesi graffe `{}`* crea un "ripostiglio" (un **Block Scope**).

Questo include `if`, `else`, `for`, `while`, o anche solo delle graffe messe a caso.

**`var` (il vecchio modo) IGNORA i blocchi:**

```javascript
if (true) {
    var x = 10;
}
console.log(x); // 10
// 'x' è "scappata" dal blocco if! È come se il ripostiglio non avesse la porta.
```

**`let` e `const` RISPETTANO i blocchi:**

```javascript
if (true) {
    let y = 20;
    const z = 30;
}
// console.log(y); // ERRORE! y is not defined
// console.log(z); // ERRORE! z is not defined
// 'y' e 'z' sono rinchiuse nel ripostiglio `{}`.
```

**Perché questo è FONDAMENTALE: I Cicli `for`**

Questo è l'esempio che fa capire tutto. Guarda il "bug" classico con `var`:

```javascript
// Il "bug" classico di var
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        // Quando questo codice viene eseguito, il loop è GIÀ FINITO.
        // La variabile 'i' è stata sollevata (hoisted)
        // e il suo valore finale è 3.
        console.log(i);
    }, 100);
}
// Output: 3, 3, 3
```

Questo succede perché c'è *una sola* `i` per *tutto* il ciclo, che vive nello scope della funzione.

Ora guarda la magia di `let`:

```javascript
// Con 'let', ogni giro del loop crea una NUOVA 'i'
for (let i = 0; i < 3; i++) {
    // Ogni 'i' (0, 1, 2) è una copia diversa,
    // "congelata" nello scope del suo specifico giro di loop (grazie alla closure)
    setTimeout(() => {
        console.log(i);
    }, 100);
}
// Output: 0, 1, 2 (Come ti aspetteresti!)
```

Usare `let` nei cicli `for` ti salva da mal di testa inimmaginabili. È come avere un ripostiglio separato per ogni singolo giro del nastro trasportatore.

<br>
<br>
<br>
<br>
<br>
<br>










## Parte IV - Classi (Programmazione a Oggetti) 🏭

Le classi sono il tuo ingresso nella **Programmazione Orientata agli Oggetti (OOP)**. Se finora hai costruito capanne con funzioni e variabili sparse (programmazione procedurale), le classi sono come ottenere il **progetto per costruire un grattacielo**. Ti permettono di creare "tipi" di cose riutilizzabili, organizzate e potenti (come `Giocatore`, `Nemico`, `Piattaforma`), ognuna con i propri dati (proprietà) e le proprie abilità (metodi).

### 13\. Concetto Base (Lo Stampo 🍪)

Una `class` è un **progetto**, una **ricetta**, o uno **stampo per biscotti**.
Non è *il* biscotto. È il *disegno* che ti dice come fare un biscotto (che avrà una forma, un tipo di cioccolato, ecc.).

  * La **Classe** (es. `class Giocatore`) è lo stampo.
  * L'**Oggetto** (o **Istanza**) (es. `const mario = new Giocatore()`) è il biscotto che hai creato usando lo stampo.

Puoi usare *un solo* stampo (Classe) per creare *infiniti* biscotti (Istanze), e ogni biscotto è un'entità separata e indipendente.

```javascript
// 1. DEFINIZIONE DELLO STAMPO (La Classe)
class Giocatore {
    // Qui definiremo come è fatto un giocatore
}

// 2. CREAZIONE DEI "BISCOTTI" (Le Istanze)
const mario = new Giocatore();
const luigi = new Giocatore();

// mario e luigi sono due oggetti diversi,
// ma sono stati entrambi creati dallo stesso "stampo" Giocatore.
```

-----

### 14\. Zucchero Sintattico (vs Funzioni Costruttore) 👻

Questo è il "segreto" più importante delle classi in JavaScript: **le classi sono un'illusione**.

JavaScript, nel suo cuore, è un linguaggio basato sui **prototipi**, non sulle classi. Prima di ES6, per creare "stampi" si usava una cosa chiamata "Funzione Costruttore". Era goffa ma potente:

```javascript
// IL VECCHIO MODO (pre-ES6)
function PersonaVecchia(nome) {
    this.nome = nome;
}

PersonaVecchia.prototype.saluta = function() {
    console.log("Ciao, sono " + this.nome);
}

const marioVecchio = new PersonaVecchia("Mario");
marioVecchio.saluta();
```

Questo `prototype` confondeva tutti, specialmente chi veniva da linguaggi come Python, Java o C\# che usavano la parola `class`.

Così, ES6 ha introdotto la sintassi `class`. Ma non è un nuovo sistema\! È solo **"zucchero sintattico"** (syntactic sugar). È come mettere una carrozzeria sportiva e moderna sopra il vecchio motore a prototipi.

```javascript
// IL NUOVO MODO (Moderno, "zucchero")
class Persona {
    constructor(nome) {
        this.nome = nome;
    }

    saluta() {
        console.log(`Ciao, sono ${this.nome}`);
    }
}

const mario = new Persona("Mario");
mario.saluta();
```

I due esempi sopra fanno *esattamente la stessa identica cosa*. La parola `class` è solo un "travestimento" più pulito e leggibile per creare una funzione costruttore e assegnare metodi al suo `prototype`.

-----

### 15\. `constructor()` e Parametri 🛠️

Il `constructor()` è un **metodo speciale** e unico. È il "reparto assemblaggio" della tua fabbrica.

  * Viene chiamato **automaticamente** e *una sola volta* nel momento esatto in cui usi la parola chiave `new`.
  * Il suo lavoro è **impostare lo stato iniziale** dell'istanza (il biscotto). È qui che dici "questo biscotto avrà gocce di cioccolato" e "quest'altro avrà la marmellata".

I **Parametri** sono gli "ingredienti personalizzati" che passi alla fabbrica per creare un'istanza specifica.

```javascript
class Piattaforma {
    // Il costruttore accetta 'x' e 'y' come ingredienti
    constructor(x, y) {
        console.log("Sto costruendo una piattaforma...");
        
        // 'this' si riferisce all'oggetto che stiamo creando
        this.posizione = { x: x, y: y };
        this.larghezza = 100;
        this.altezza = 20;
    }
}

// Passiamo gli ingredienti (i parametri) quando usiamo 'new'
const piattaforma1 = new Piattaforma(50, 300);
const piattaforma2 = new Piattaforma(250, 400);

// piattaforma1 avrà { posizione: {x: 50, y: 300}, ... }
// piattaforma2 avrà { posizione: {x: 250, y: 400}, ... }
```

Se non devi impostare nulla, puoi omettere il `constructor` (JavaScript ne userà uno vuoto di default).

-----

### 16\. `new` (I 4 Passaggi) ✨

Cosa fa *davvero* la parola chiave `new`? È un processo magico che avviene in quattro passaggi automatici:

1.  **Crea un Oggetto Vuoto:** JavaScript crea un nuovo oggetto vuoto: `{}`.
2.  **Lega il Prototype:** "Lega" questo oggetto vuoto allo "zaino condiviso" (il `prototype`) della classe. (Ora sa dove trovare il metodo `saluta()`).
3.  **Esegue il Costruttore:** Esegue la funzione `constructor`, e imposta la parola chiave `this` perché punti all'oggetto vuoto creato al punto 1. Il costruttore "riempie" l'oggetto con le proprietà (`this.nome = ...`).
4.  **Restituisce `this`:** Restituisce *automaticamente* l'oggetto (il `this`), ormai "pieno" e pronto all'uso.

Non sei tu che fai `return this` nel costruttore, lo fa `new` per te.

-----

### 17\. `this` (Contesto dell'istanza) 👈

Questo è il concetto più importante e più confuso dell'OOP.

`this` è una parola chiave dinamica. Pensa a `this` come alla parola **"io"** o **"me stesso"**.

  * Se *io* dico "la mia maglietta è blu", "mia" si riferisce a me.
  * Se *tu* dici "la mia maglietta è rossa", "mia" si riferisce a te.

All'interno di una classe, `this` significa "**questa specifica istanza**", "questo biscotto che sto creando ORA" o "questo biscotto su cui stai chiamando il metodo".

```javascript
class Contatore {
    constructor() {
        this.valore = 0;
    }

    incrementa() {
        // 'this' qui significa "il contatore specifico
        // su cui hai chiamato .incrementa()"
        this.valore++;
        console.log(this.valore);
    }
}

const c1 = new Contatore();
const c2 = new Contatore();

c1.incrementa(); // Output: 1 (this === c1)
c1.incrementa(); // Output: 2 (this === c1)

c2.incrementa(); // Output: 1 (this === c2)
```

`this` è il ponte che collega lo *stampo* generico (la classe) all'oggetto *concreto* (l'istanza).

-----

### 18\. Proprietà di Classe (Sintassi Moderna)

Questa è una scorciatoia moderna (chiamata *Class Fields*) per rendere il `constructor` più pulito. Invece di definire tutte le proprietà "di base" dentro il costruttore...

```javascript
// Modo Classico
class GiocatoreVecchio {
    constructor(nome) {
        this.nome = nome;
        this.vite = 3;
        this.punteggio = 0;
    }
}
```

...puoi dichiararle *direttamente* nel corpo della classe. Pensa a queste come alle "impostazioni di fabbrica" dello stampo.

```javascript
// Modo Moderno (più pulito)
class Giocatore {
    // Impostazioni di fabbrica
    vite = 3;
    punteggio = 0;
    
    // Il costruttore imposta solo le cose personalizzate
    constructor(nome) {
        this.nome = nome;
    }
}

const player = new Giocatore("Sonic");
// player avrà { vite: 3, punteggio: 0, nome: "Sonic" }
```

Funziona esattamente allo stesso modo, è solo più ordinato.

-----

### 19\. Metodi (nel `prototype`) 🎒

Dove vanno a finire le funzioni (i "metodi") come `saluta()` o `incrementa()`?

**Errore comune:** pensare che *ogni* istanza (ogni biscotto) ottenga una *copia* della funzione. Se avessi 1000 giocatori, avresti 1000 copie del metodo `saluta()`. Questo sprecherebbe tonnellate di memoria\!

**La Realtà:** C'è *una sola* copia di `saluta()`. Vive in un posto speciale e condiviso chiamato **`prototype`** (lo "zaino condiviso" della classe).

  * Quando definisci un metodo (`saluta() { ... }`) dentro una `class`, JavaScript lo attacca *automaticamente* a `Persona.prototype`.
  * Quando chiami `mario.saluta()`, JavaScript controlla: "Mario ha un metodo `saluta` *su di sé*?"
  * "No."
  * "Ok, allora controllo nello 'zaino' (il `prototype`) da cui è stato creato."
  * "Ah, eccolo\! Lo eseguo e imposto `this` perché sia `mario`."

Questo meccanismo (la *prototype chain*) è incredibilmente efficiente. Hai un solo manuale di istruzioni (`prototype`) per migliaia di oggetti (istanze).

-----

### 20\. Pattern: Metodo `claim()` (Disattivazione Oggetti)

Questo è un esempio pratico che unisce tutto. Invece di cancellare un oggetto da un array (che può essere complicato), spesso è più facile "disattivarlo".

È un metodo (una funzione nello "zaino" `prototype`) che modifica le *proprietà* (`this.width`, `this.position`) dell'istanza *specifica* (`this`).

*Analogia:* È come un pulsante di "autodistruzione" che ogni oggetto eredita. Quando `checkpoint1.claim()` viene chiamato, solo *quel* checkpoint si disattiva, modificando sé stesso.

```javascript
class Checkpoint {
    constructor(x, y) {
        this.position = { x, y };
        this.width = 50;
        this.height = 70;
        this.claimed = false; // Flag booleano
    }
    
    // Metodo per "disattivare" questo specifico checkpoint
    claim() {
        console.log("Checkpoint preso!");
        
        // Modifica le proprietà di *questa* istanza
        this.width = 0; // Diventa invisibile
        this.height = 0;
        this.position.y = Infinity; // Sparisce dal mondo di gioco
        this.claimed = true; // Segna come "usato"
    }
}

// Nel tuo gioco:
const checkpoint1 = new Checkpoint(100, 200);

// ...quando il giocatore lo tocca...
checkpoint1.claim(); 
// checkpoint1 ora è { width: 0, height: 0, position: {y: Infinity}, claimed: true }
// checkpoint2 (un'altra istanza) è ancora intatto.
```

Questo si chiama **Incapsulamento**: la logica per "come si disattiva un checkpoint" è contenuta *all'interno* della classe `Checkpoint` stessa, invece di essere sparsa in giro per il codice.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>










## Parte V - DOM e Interattività

### 21\. Caricamento Script 📜

Se il DOM è la "casa" (la struttura HTML) che il browser costruisce, il tuo file JavaScript è l'"**impianto elettrico**" e gli "elettrodomestici" (l'interattività). La domanda fondamentale è: *quando* fai entrare l'elettricista?

#### Posizionamento Tag `<script>`

Pensa al browser come a un **operaio 👷‍♂️ che legge le istruzioni (il tuo file HTML) dall'alto verso il basso, una riga alla volta, e costruisce la casa**.

**Il Problema: `<script>` in `<head>` (Il Modo "Vecchio" Sbagliato)**

Se metti l'elettricista (`<script>`) nell'`<head>` (le fondamenta), succede un disastro:

1.  L'operaio legge `<html>`, legge `<head>`.
2.  Trova `<script src="app.js">`.
3.  **L'operaio si ferma.** Smette *immediatamente* di costruire la casa. Questo si chiama **render-blocking**.
4.  Va a cercare il furgone dell'elettricista (scarica il file `app.js`).
5.  Aspetta che l'elettricista faccia tutto il suo lavoro (esegue il file `app.js`).
6.  *Solo allora*, l'operaio torna a leggere le istruzioni e a costruire il `<body>` (i muri, le stanze, i mobili).

**Perché è un disastro?**
Se nel tuo `app.js` c'è scritto `document.getElementById("bottone")`, lo script viene eseguito al punto 5, ma il "bottone" (che è nel `<body>`) non esiste ancora\! Verrà costruito solo al punto 6. Il tuo script cercherà un bottone in una casa senza muri. Risultato: `null` e un crash dell'applicazione.

**La Soluzione "Classica": `<script>` alla Fine del `<body>`**

Per decenni, la soluzione è stata mettere l'elettricista come *ultima* cosa da fare:

```html
    ...
    <button id="bottone">Cliccami</button>
  </body>
  <script src="app.js"></script> </html>
```

  * **Come funziona:** L'operaio costruisce *tutta* la casa (`<head>`, `<body>`, `bottone`, tutto). Solo quando ha finito, come ultimissima istruzione, fa entrare l'elettricista.
  * **Vantaggio:** L'elettricista entra e *vede* tutta la casa già costruita. `document.getElementById("bottone")` funziona al 100%.
  * **Svantaggio:** Se l'impianto elettrico è enorme (un file JS da 5MB), l'utente vedrà una casa *costruita ma spenta* (non interattiva) per secondi, finché il furgone dell'elettricista non finisce di scaricare.

-----

#### Attributo `defer` (Best Practice)

`defer` è la soluzione moderna e intelligente. È un'istruzione speciale che dai all'operaio.

Pensa a `defer` come a dire all'operaio: "Vedi quel furgone dell'elettricista? Inizia pure a fargli scaricare tutti i cavi *mentre tu continui a costruire i muri* (download non-blocking). Potrà entrare a collegare i fili *solo quando avrai finito la struttura*, ma non preoccuparti di aspettare che abbia finito di lucidare le prese" (esegue dopo il parsing, prima di `DOMContentLoaded`).

Si usa così, nell'`<head>`:

```html
<head>
  ...
  <script src="app.js" defer></script>
</head>
```

  * **Come funziona:**
    1.  Il browser vede `<script defer>` nell'`<head>`.
    2.  **Inizia a scaricare `app.js` in sottofondo.**
    3.  **NON SI FERMA\!** Continua a costruire il `<body>` (non è render-blocking).
    4.  Quando ha finito di *leggere* tutto l'HTML, esegue lo script `app.js` (che era già pronto).
    5.  *Infine*, dichiara la casa pronta (evento `DOMContentLoaded`).

È il meglio di entrambi i mondi: il download inizia presto, non blocca la costruzione della casa, e l'esecuzione è garantita *dopo* che tutti gli elementi esistono.

**E `async`?**
`async` è un altro attributo, ma è un "elettricista indisciplinato". Scarica in parallelo, ma poi *interrompe* l'operaio ed esegue il codice *appena ha finito di scaricare*, anche se la casa è a metà. È utile per script che non dipendono dal DOM (es. Google Analytics), ma `defer` è quasi sempre la scelta migliore e più sicura per i tuoi script principali.

-----

#### `window.onload` vs `DOMContentLoaded`

Questi sono **eventi**, sono i "permessi di lavoro" che dicono al tuo codice: "OK, ora puoi partire".

  * **`DOMContentLoaded` (Il Permesso dell'Architetto)**
    Questo evento scatta non appena l'operaio ha finito di *leggere le istruzioni* (HTML) e ha *costruito la struttura* (il DOM).

    *Analogia:* È l'architetto che dice: "I muri portanti e il tetto sono su. La casa è strutturalmente pronta."
    *Cosa *non* aspetta:* Non aspetta che i mobili siano consegnati (immagini), che le tende siano appese (CSS), o che gli inquilini arrivino (iframe).
    *Perché è il migliore:* È **veloce**. Il tuo JavaScript può rendere la pagina interattiva *molto prima* che tutte le pesanti immagini finiscano di caricare.

    ```javascript
    // Si usa così:
    window.addEventListener('DOMContentLoaded', () => {
        // Il DOM è pronto!
        const bottone = document.getElementById("bottone");
        bottone.addEventListener("click", () => alert("Ciao!"));
    });
    ```

    (Se usi `defer`, il tuo script viene eseguito *proprio prima* di questo evento, quindi spesso non hai nemmeno bisogno di aspettarlo\!)

  * **`window.onload` (Il Permesso del Proprietario di Casa)**
    Questo evento è il "vecchio modo". È molto più lento e paziente. Scatta solo quando *letteralmente tutto* è stato caricato.

    *Analogia:* È il proprietario di casa che dice: "Ok, la casa è finita, i mobili sono dentro, le tende sono appese, le luci funzionano e il giardino è piantato. *Ora* potete entrare."
    *Il Problema:* Se hai una galleria di 50 immagini pesanti, il tuo JavaScript (e la tua app) rimarrà "congelato" e non interattivo finché l'ultima immagine non è stata scaricata. È pessimo per l'esperienza utente (UX).

    ```javascript
    // Vecchio stile (da evitare se non per motivi specifici)
    window.onload = () => {
        // Tutto (incluse le immagini) è caricato.
    };
    ```

**Regola Pratica:** Usa sempre `<script defer>` nell'`<head>`. Se per qualche motivo non puoi, metti il tuo codice dentro un listener `DOMContentLoaded`. Evita `window.onload` a meno che tu non debba *davvero* aspettare il caricamento delle immagini.

<br>
<br>
<br>
<br>
<br>
<br>













### 22\. DOM Manipulation - Il Ponte con il Browser 🌉

Se il tuo file HTML è il **progetto di una casa**, il **DOM (Document Object Model)** è la **casa reale costruita dal browser**. È una struttura *viva* e interattiva fatta di oggetti.

Il tuo JavaScript, quindi, non legge il file HTML. Il tuo JavaScript è l'**arredatore d'interni, l'elettricista e la squadra di demolizione** che entrano nella casa *già costruita* (il DOM) per spostare mobili, dipingere pareti e installare interruttori.

Manipolare il DOM è l'atto di usare JavaScript per modificare questa casa.

#### Selezione di Elementi

Prima di poter dipingere un muro, devi *trovarlo*. La selezione è come dare un indirizzo preciso alla tua squadra di lavoro.

  * **`getElementById(id)` (Il Più Veloce)**
    Questo è come avere il **codice fiscale** di un elemento. È il modo più veloce e diretto per trovare un elemento *unico*.

    ```javascript
    // HTML: <div id="header-principale">...</div>
    // Nota: non serve il '#' nel nome!
    const header = document.getElementById("header-principale");
    ```

  * **`querySelector(selettore)` (Il GPS Moderno)**
    Questo è lo strumento più flessibile e moderno. È come un GPS: puoi dargli qualsiasi tipo di indirizzo (un selettore CSS) e lui troverà il **primo** elemento che corrisponde.

    ```javascript
    // Trova per ID
    const header = document.querySelector("#header-principale");
    // Trova per Classe (il primo)
    const primoBottone = document.querySelector(".btn-primary");
    // Trova per Tag e Attributo
    const inputEmail = document.querySelector('input[type="email"]');
    ```

  * **`querySelectorAll(selettore)` (Il Censimento)**
    Simile al GPS, ma fa il censimento: crea una **lista** (una `NodeList`) di *tutti* gli elementi che corrispondono al selettore.

    ```javascript
    const tuttiIBottoni = document.querySelectorAll(".btn");
    // Ora puoi ciclarli:
    tuttiIBottoni.forEach(bottone => {
        bottone.style.color = "red";
    });
    ```

  * **`getElementsByClassName(classe)` (Il Vecchio Metodo "Live")**
    Questo metodo, come `getElementsByTagName`, è il "vecchio modo". È ancora utile, ma ha una stranezza importante: restituisce una `HTMLCollection`.

      * **La Stranezza (`HTMLCollection` Live):** Pensa a una `HTMLCollection` come a un **feed di una videocamera di sicurezza**. È *live*. Se un nuovo elemento con quella classe viene aggiunto alla pagina *dopo* che hai eseguito il comando, apparirà magicamente nella tua variabile\!
      * Una `NodeList` (da `querySelectorAll`) è invece una **fotografia**. È *statica*. Non si aggiorna se la pagina cambia.
      * **Svantaggio:** `HTMLCollection` non è un vero array. Manca di metodi moderni come `.forEach()`.

  * **Convertire `NodeList` / `HTMLCollection` in Array**
    Per usare la potenza dei metodi array (`.map`, `.filter`, ecc.) su una `NodeList` o `HTMLCollection`, devi prima "trasformarla" in un vero array.
    *Analogo:* È come prendere i dati grezzi dal feed della videocamera e stamparli su fogli di carta che puoi manipolare.

    ```javascript
    // Metodo Moderno (Spread Operator '...')
    const arrayDiElementi = [...document.getElementsByClassName("mia-classe")];

    // Metodo Formale
    const arrayDiElementi2 = Array.from(document.querySelectorAll(".btn"));

    // Ora puoi usare .map()!
    arrayDiElementi.map(el => el.textContent);
    ```

-----

#### Proprietà vs Metodi (Distinzione)

Questa è una distinzione filosofica fondamentale. Come distingui un *sostantivo* da un *verbo*?

  * **Proprietà (I Sostantivi: "Cosa è")**
    Sono i **dati** di un elemento. Sono valori che *leggi* o *assegni* usando il simbolo `=`. Non hanno le parentesi `()`.
    *Analogo:* `altezza`, `colore`, `peso`, `testo scritto`.

    ```javascript
    // Assegnare un valore a una proprietà
    elemento.textContent = "Nuovo testo";
    input.value = "Valore predefinito";
    elemento.id = "nuovo-id";
    ```

  * **Metodi (I Verbi: "Cosa fa")**
    Sono le **azioni** che un elemento può compiere. Li *chiami* usando le parentesi `()`.
    *Analogo:* `clicca!`, `aggiungiFiglio!`, `rimuoviti!`.

    ```javascript
    // Chiamare un metodo
    elemento.addEventListener("click", miaFunzione);
    elemento.remove();
    container.appendChild(nuovoElemento);
    ```

**L'Errore Ricorrente:** Confondere i due è l'errore più comune.

```javascript
// SBAGLIATO ❌
elemento.textContent("Testo"); // Errore: textContent non è una funzione!

// CORRETTO ✅
elemento.textContent = "Testo"; // È una proprietà, si assegna!

// SBAGLIATO ❌
elemento.addEventListener = "click"; // Errore: addEventListener è un metodo, va chiamato!

// CORRETTO ✅
elemento.addEventListener("click", () => {}); // Si chiama con ()!
```

-----

#### Attributi HTML vs Proprietà DOM

Questo è sottile. Qual è la differenza tra il progetto e la casa reale?

  * **Attributo HTML (Il Progetto  blueprints):**
    È quello che scrivi *letteralmente* nel tuo file `.html`. È la *dichiarazione* iniziale.
    `<input type="text" value="Valore Iniziale">`

  * **Proprietà DOM (La Realtà fisica):**
    È la proprietà *viva* sull'oggetto JavaScript che il browser crea.
    `const input = document.querySelector("input");`
    `input.value; // "Valore Iniziale"`

Per la maggior parte del tempo, **le proprietà e gli attributi sono "riflessi"**: se cambi uno, cambia anche l'altro.
`input.id = "test"` -\> L'HTML ora è `<input id="test">`

**La Differenza Cruciale (con `value`):**
Cosa succede se l'utente *digita* nell'input?

1.  L'utente scrive "Ciao".
2.  La *proprietà* `input.value` (la realtà) diventa `"Ciao"`.
3.  L'*attributo* HTML (il progetto) **rimane `"Valore Iniziale"`**\!

L'attributo rappresenta il valore *di default* (quello che carichi), la proprietà rappresenta il valore *attuale*.
**Regola Pratica:** Lavora sempre con le **proprietà** (es. `input.value`, `input.id`, `input.className`). È più veloce e diretto. Usa `elemento.setAttribute()` solo per attributi personalizzati (come `data-*`) o quando vuoi modificare il "valore di default" del progetto.

-----

#### Creazione e Aggiunta Elementi

Non sei limitato a modificare ciò che esiste. Puoi costruire stanze nuove\!

  * **`document.createElement(tag)` (La Fabbrica)**
    Questo comando crea un nuovo elemento *in memoria* (nel "magazzino"), non ancora sulla pagina.

    ```javascript
    const nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.textContent = "Sono nuovo!";
    ```

    In questo momento, `nuovoParagrafo` esiste, ma l'utente non lo vede. È un muro costruito in fabbrica, in attesa di essere installato.

  * **`container.appendChild(elemento)` (L'Installazione)**
    Questo è l'atto di prendere l'elemento creato e "installarlo" nella casa. Lo aggiunge come **ultimo figlio** dell'elemento `container`.

    ```javascript
    // Trova la "stanza" dove vuoi installarlo
    const container = document.querySelector("#main-content");

    // Installa il muro
    container.appendChild(nuovoParagrafo);
    // ORA l'utente lo vede!
    ```

-----

#### Modifica del Contenuto

Ci sono diversi modi per cambiare cosa c'è scritto in un elemento, ognuno con i suoi pro e contro.

  * **`textContent` (La Scelta Sicura ✅)**

      * **Cosa fa:** Imposta o legge solo il *testo puro* all'interno di un elemento. Ignora qualsiasi HTML.
      * **Analogo:** È come scrivere su un muro con un pennarello. Se provi a scrivere `<strong>Ciao</strong>`, vedrai letteralmente il testo "\<strong\>Ciao\</strong\>" sul muro.
      * **Perché usarlo:** È **veloce** e **sicuro al 100%** contro attacchi XSS (Cross-Site Scripting). Se un utente scrive codice malevolo (`<script>...`) nel suo nome, `textContent` lo tratterà come testo innocuo.

    <!-- end list -->

    ```javascript
    elemento.textContent = "Ciao mondo!";
    ```

  * **`innerHTML` (La Scelta Potente e Pericolosa ⚠️)**

      * **Cosa fa:** Imposta o legge l'*HTML completo* all'interno di un elemento.
      * **Analogo:** È come una penna magica di *Harry Potter*. Se scrivi `<strong>Ciao</strong>`, crea *veramente* del testo in grassetto.
      * **Il Pericolo:** Se scrivi `<script>...` (magari proveniente da un input utente), la penna magica lo *eseguirà*. Questo è un enorme buco di sicurezza.
      * **Regola:** Usa `innerHTML` **SOLO** se 1) sei tu a scrivere l'HTML, o 2) la fonte è 100% sicura. Non usarlo *mai* per mostrare dati inseriti da un utente.

  * **`innerText` (La Scelta Confusa ❓)**

      * **Cosa fa:** È il "cugino strano". Prova a leggere il testo *così come lo vede l'utente*. Ignora elementi nascosti da CSS (`display: none`) e interpreta gli spazi e gli "a capo".
      * **Perché evitarlo:** È molto più lento di `textContent` (deve calcolare il layout CSS) e ha comportamenti imprevedibili. Il 99% delle volte, vuoi `textContent`.

  * **`insertAdjacentHTML(posizione, testoHTML)` (Il Chirurgo)**
    È come `innerHTML`, ma più preciso. Invece di rimpiazzare tutto, ti permette di "iniettare" HTML in 4 punti precisi rispetto all'elemento:

    1.  `'beforebegin'`: Prima dell'elemento.
    2.  `'afterbegin'`: Dentro l'elemento, prima di tutto il resto.
    3.  `'beforeend'`: Dentro l'elemento, dopo tutto il resto (come `appendChild`).
    4.  `'afterend'`: Dopo l'elemento.

-----

#### Modifica degli Stili

Come per il contenuto, hai due modi: quello diretto (e sporco) e quello pulito (e preferito).

  * **`style.property` (camelCase) (Il Modo Diretto/Sporco)**
    Ti permette di impostare stili *inline* (quelli nell'attributo `style="..."`).
    *Analogo:* Prendere un secchio di vernice e buttarlo sul muro con le mani. Funziona, ma è un casino da pulire e sovrascrive tutto.

    ```javascript
    const elemento = document.querySelector("#avviso");

    // NOTA: 'background-color' (CSS) diventa 'backgroundColor' (JS)
    elemento.style.backgroundColor = "red";
    elemento.style.fontSize = "20px";
    elemento.style.display = "block"; // Per mostrare
    elemento.style.display = "none";  // Per nascondere
    ```

    **Svantaggio:** Crea stili inline, che hanno una "specificità" altissima e sono difficili da sovrascrivere con i tuoi file CSS. Mescola la logica (JS) con la presentazione (CSS).

  * **`classList` (La Best Practice ✅)**
    Questo è il modo professionale.
    *Analogo:* Invece di verniciare il muro, attacchi un'etichetta al muro che dice "Muro-Importante". Poi, in un foglio di stile (CSS) separato, definisci `.Muro-Importante { background-color: red; }`.
    Questo separa le responsabilità: **JavaScript gestisce lo *stato*** (l'etichetta), **CSS gestisce l'*aspetto***.

    ```javascript
    // CSS:
    // .is-hidden { display: none; }
    // .is-active { color: blue; }

    // JS:
    elemento.classList.add("is-active");      // Aggiunge la classe
    elemento.classList.remove("is-hidden");   // Rimuove la classe
    elemento.classList.toggle("evidenziato"); // Aggiunge se non c'è, rimuove se c'è
    elemento.classList.contains("is-active"); // true
    ```

    È più pulito, più facile da manutenere e non incasina la specificità CSS.

-----

#### Modifica Attributi/Proprietà

  * **Proprietà `disabled` (true/false)**
    Questa è una proprietà booleana fondamentale per i form. È l'interruttore On/Off per un input.

    ```javascript
    const mioBottone = document.querySelector("#submit-btn");

    // Per disabilitare (l'utente non può cliccare)
    mioBottone.disabled = true; // Appare grigio, non cliccabile

    // Per riabilitare
    mioBottone.disabled = false;
    ```

    Quando un input è `disabled`, il suo valore **non viene inviato** con il form.

  * **`disabled` vs `readonly`**
    Questa è una distinzione chiave per la UX:

      * **`disabled`:** L'elemento è **spento**. L'utente non può cliccarci, non può farci focus (con Tab), e il suo valore non viene inviato. È un muro.
      * **`readonly`:** L'elemento è **bloccato in sola lettura**. L'utente può vederlo, può farci focus (e copiarne il testo), ma non può modificarlo. Il suo valore **viene inviato** con il form.

    *Analogo:* `disabled` è una porta sbarrata. `readonly` è una porta di vetro chiusa a chiave (puoi guardare dentro, ma non toccare).

-----

#### Navigazione DOM

  * **Selettore CSS: Child Combinator (`>`)**
    Questo è uno strumento di *selezione* potente.

      * **`div p` (Selettore Discendente - lo Spazio):**
        *Analogo:* "Trova tutti i `p` che sono *discendenti* di un `div`". Questo include figli, nipoti, pronipoti... chiunque viva dentro il `div`.
      * **`div > p` (Selettore Figlio - il `>`):**
        *Analogo:* "Trova tutti i `p` che sono *figli diretti* (immediati) di un `div`". Questo ignora i nipoti. È molto più specifico.

    *Perché usarlo?* Previene che il tuo stile o script "trapeli" in componenti annidati più profondamente. Ti dà un controllo chirurgico sulla selezione.

<br>
<br>
<br>
<br>
<br>
<br>











### 23\. Eventi - Ascoltare e Reagire ⚡

Gli eventi sono il sistema nervoso della tua applicazione. Ogni click, movimento, pressione di tasto è un segnale che puoi intercettare per far scattare una logica. Senza eventi, il DOM è solo una scultura statica. Con gli eventi, diventa un robot interattivo.

#### `onclick` vs `addEventListener` - Due Filosofie

Esistono due modi per "collegare un filo" a un sensore (come un bottone).

  * **`onclick` (Il Modo Vecchio / La Linea Telefonica Singola)**
    Questo è un attributo (o proprietà) dell'elemento. È semplice e diretto.

    ```javascript
    const bottone = document.querySelector("#mio-bottone");

    bottone.onclick = function() {
        console.log("Cliccato!");
    };
    ```

    *Il Problema:* È come una **linea telefonica singola**. Puoi collegare *solo una* funzione a `onclick`. Se provi a collegarne un'altra, la seconda *sovrascrive* la prima.

  * **`addEventListener` (Il Modo Moderno / Il Centralino)**
    Questo è un *metodo*. È come un **centralino telefonico**: puoi "aggiungere" (`add`) più "ascoltatori" (`Listener`) allo stesso evento (`click`).

    ```javascript
    // Aggiungi il primo ascoltatore
    bottone.addEventListener("click", function() {
        console.log("Primo gestore: salvo i dati.");
    });

    // Aggiungi un secondo ascoltatore
    bottone.addEventListener("click", function() {
        console.log("Secondo gestore: invio analytics.");
    });
    ```

    Entrambi vengono eseguiti\! È più pulito, più flessibile e ti permette di *rimuovere* (`removeEventListener`) un gestore specifico senza toccare gli altri.
    **Regola:** Usa `addEventListener` sempre. È la best practice professionale.

-----

#### Riferimento (`fn`) vs Esecuzione (`fn()`)

Questo è l'errore concettuale più comune e *critico* da capire.

*Analogia:* Pensa di dover dare un'istruzione a un assistente.

  * **Riferimento (`miaFunzione`):**
    `bottone.addEventListener("click", miaFunzione);`
    Questo è come dare all'assistente un **manuale di istruzioni** (la funzione `miaFunzione`) e dirgli: "Quando il telefono squilla (l'evento `click`), *allora* leggi ed esegui le istruzioni in questo manuale." Stai passando la *ricetta*, non la *torta*.

  * **Esecuzione (`miaFunzione()`):**
    `bottone.addEventListener("click", miaFunzione());` // SBAGLIATO ❌
    Questo è come **cucinare la torta *subito***, dare la torta (il *risultato* della funzione, che spesso è `undefined`) all'assistente e dirgli: "Quando il telefono squilla, dai al cliente questa torta".
    JavaScript *esegue* `miaFunzione()` *immediatamente* (una sola volta, al caricamento della pagina) e assegna il suo risultato (`undefined`) al listener. Il click non farà mai nulla.

**Regola:** Quando assegni un gestore di eventi, devi passare il **nome della funzione (il riferimento)**, non il risultato della sua esecuzione.

-----

#### L'Oggetto `event`

Quando un evento si scatena (l'utente clicca), il browser non si limita a eseguire la tua funzione. La esegue passandole automaticamente un **oggetto speciale** come primo argomento. Pensa a questo oggetto (`e` o `event`) come al **report dettagliato dell'incidente**.

```javascript
bottone.addEventListener("click", function(event) { // Eccolo!
    console.log(event); // Ispezionalo! È pieno di informazioni
    
    // Informazioni utili:
    console.log(event.type); // "click"
    console.log(event.timeStamp); // Quando è successo
    console.log(event.ctrlKey); // Ha premuto Ctrl mentre cliccava?
    console.log(event.clientX, event.clientY); // Dove ha cliccato
});
```

#### `e.target`

Questa è la proprietà **più importante** dell'oggetto `event`.
*Analogia:* Se l'oggetto `event` è il report dell'allarme antincendio, `e.target` è **il sensore specifico che è scattato**.
È un riferimento diretto all'elemento HTML che ha *originato* l'evento.

```javascript
// 'e.target' è il bottone esatto che è stato cliccato
container.addEventListener("click", function(e) {
    console.log(e.target); // Mostra l'elemento HTML cliccato
});
```

#### `e.preventDefault()`

Questo è il tuo **freno di emergenza** per fermare il comportamento *predefinito* del browser.
Certi elementi HTML hanno un "lavoro" predefinito:

  * Cliccare su un link (`<a>`) ti fa cambiare pagina.
  * Premere "Invio" su un form (`<form>`) fa ricaricare la pagina.

`e.preventDefault()` dice al browser: "Grazie, ma **non farlo**. Lascia gestire a me (JavaScript)."

```javascript
const mioForm = document.querySelector("#mio-form");

mioForm.addEventListener("submit", function(e) {
    // 1. FERMA IL REFRESH DELLA PAGINA!
    e.preventDefault(); 
    
    // 2. Ora posso prendere i dati con JS senza che la pagina sparisca
    const nome = document.querySelector("#nome").value;
    console.log(`Ciao, ${nome}!`);
});
```

-----

#### Event Delegation - L'Ascoltatore Intelligente

Questo è un pattern fondamentale per la performance.

  * **Il Problema:** Immagina di avere una lista (un `<ul>`) con 1000 elementi (`<li>`). Devi aggiungere un listener a *ognuno* di essi? Sarebbe un incubo di performance (1000 fili collegati) e non funzionerebbe per i nuovi `<li>` aggiunti dopo.
  * **La Soluzione:** Sfrutta il "Bubbling" (gli eventi "risalgono" come bolle). Metti *un solo* ascoltatore sul **genitore** (`<ul>`).
  * **Analogia:** Invece di mettere una guardia del corpo su ogni persona in una stanza (`<li>`), metti **un solo buttafuori all'unica porta d'uscita (`<ul>`)**.

<!-- end list -->

```javascript
const lista = document.querySelector("#lista-spesa");

// Un solo listener sul genitore!
lista.addEventListener("click", function(e) {
    
    // 'e.target' è il sensore che ha scatenato (l'<li> cliccato)
    
    // Chiediamo al "buttafuori":
    // "L'elemento cliccato (e.target) è un LI?"
    if (e.target.tagName === "LI") {
        console.log("Hai cliccato su:", e.target.textContent);
        e.target.classList.toggle("comprato");
    }
});
```

**Vantaggi:**

1.  **Performance:** Un solo listener invece di 1000.
2.  **Dinamicità:** Funziona *automaticamente* anche per i nuovi `<li>` che aggiungi in futuro\!

-----

#### Il Problema di Contesto: `this` e `addEventListener`

Questo è un problema avanzato che colpisce quando usi le Classi (OOP).
`this` è una parola chiave "camaleontica", il suo significato cambia in base a *chi* sta chiamando la funzione.

  * **Il Problema:**
    Quando `addEventListener` esegue la tua funzione (es. `this.clearCart`), la esegue *lui* (il listener del bottone). Di conseguenza, all'interno della funzione, `this` **non sarà più il tuo carrello**, ma diventerà **il bottone stesso**\!

<!-- end list -->

```javascript
class Carrello {
    constructor() {
        this.items = ["mela"];
        const btn = document.querySelector("#svuota");
        
        // SBAGLIATO ❌
        btn.addEventListener("click", this.svuotaCarrello);
    }
    
    svuotaCarrello() {
        console.log(this); // 'this' qui sarà il <button>, non il Carrello!
        // this.items.length = 0; // CRASH! Il bottone non ha 'items'.
    }
}
```

#### Soluzione: `.bind(this)`

`.bind()` è come creare un "clone" della tua funzione con il `this` **permanentemente bloccato**.
*Analogia:* È come dare al tuo assistente (il listener) un manuale di istruzioni (la funzione) con una **targhetta con il tuo nome (`this`) incollata sopra con la supercolla**. Non importa chi leggerà quel manuale, saprà sempre che "io" si riferisce a *te* (l'istanza del `Carrello`).

```javascript
// ...dentro il constructor...
// CORRETTO ✅
btn.addEventListener("click", this.svuotaCarrello.bind(this));
```

`this.svuotaCarrello.bind(this)` crea una *nuova* funzione che, quando chiamata, avrà `this` impostato correttamente sul `Carrello`.

#### Soluzione: Arrow Function Wrapper

Questo è il modo più moderno e spesso preferito.
Le **Arrow Function (`=>`)** non hanno un loro `this`\! "Ereditano" il `this` del luogo in cui sono state *scritte*.

*Analogia:* È come se tu (il `constructor`) dicessi al tuo assistente: "Quando il telefono suona, non chiamare tu *direttamente* il magazzino. Chiama *me*, e poi *io* chiamerò il magazzino."

```javascript
// ...dentro il constructor...
// CORRETTO (e moderno) ✅
btn.addEventListener("click", () => {
    // Questa è una arrow function
    // Il 'this' qui dentro è lo stesso 'this' del constructor
    // (cioè l'istanza del Carrello)
    this.svuotaCarrello(); 
});
```

-----

#### Eventi Speciali

  * **`keydown` vs `keypress` (Deprecato) vs `keyup`**
    *Analogia: La Macchina da Scrivere*

      * **`keydown` (Il Tasto Scende):** Il momento in cui il tuo dito *preme fisicamente* il tasto verso il basso. Rileva **TUTTI** i tasti (Frecce, Shift, Ctrl, 'a'). **Usa questo** per i giochi e i controlli.
      * **`keyup` (Il Tasto Risale):** Il momento in cui *rilasci* il tasto.
      * **`keypress` (Il Carattere Appare):** Il momento in cui la pressione produce un *carattere* sulla carta. Ignora Frecce, Shift, Ctrl. **È DEPRECATO** (obsoleto), non usarlo.

  * **`change` vs `input` (UX Feedback)**
    Questa è una distinzione *cruciale* per la User Experience (UX).

      * **`change` (Quando hai "finito"):** Si attiva solo quando l'utente *conferma* la modifica (di solito cliccando *fuori* dall'input box o premendo Invio).
          * *Uso:* Validazione finale, quando l'utente ha finito di scrivere.
      * **`input` (In Tempo Reale):** Si attiva *ad ogni singolo tasto premuto*. Se l'utente scrive "Ciao", l'evento si attiva 4 volte.
          * *Uso:* Barre di ricerca istantanee, contatori di caratteri, filtri live.

  * **`submit`**
    Questo evento si attiva solo sull'elemento `<form>`, quando l'utente prova a inviarlo (premendo Invio o cliccando un `<button type="submit">`). È qui che devi usare `e.preventDefault()`.

  * **`DOMContentLoaded`**
    (Vedi Sezione 9) L'evento che scatta quando l'HTML è stato costruito, ma prima che le immagini siano caricate. È il "via" standard per il tuo codice.

-----

#### Interazioni del Browser

  * **`confirm()` (Dialogo Bloccante)**
    Questo *non* è un evento, ma una funzione che *crea* un evento di interazione.
    `confirm("Sei sicuro?")` mostra una finestra di dialogo nativa (e bruttina) che **blocca l'esecuzione** di *tutto* il JavaScript finché l'utente non fa una scelta.

    ```javascript
    console.log("Prima della conferma");

    const utenteHaConfermato = confirm("Vuoi davvero eliminare tutto?");
    // Il codice si ferma qui e aspetta...

    if (utenteHaConfermato) { // 'confirm' restituisce true (OK) o false (Annulla)
        console.log("Eliminazione in corso...");
    } else {
        console.log("Annullato.");
    }
    ```

    *Attenzione:* Blocca l'intera interfaccia. Le app moderne evitano `confirm` e usano modali personalizzati (come `<dialog>`) per un'esperienza migliore.

<br>
<br>
<br>
<br>
<br>
<br>








### 24\. Dialog e Modali 🪟

Per decenni, per mostrare un "pop-up" (un *modale*), gli sviluppatori hanno dovuto combattere con `div` posizionati in modo assoluto, `z-index`, div semi-trasparenti per lo sfondo (`backdrop`) e complicate logiche JavaScript per "intrappolare" il focus della tastiera. Era un incubo di accessibilità e manutenzione.

L'elemento `<dialog>` è la **soluzione nativa e moderna** del browser a questo problema. È come se il browser ti fornisse un **palco portatile** pre-costruito.

#### `<dialog>` (L'Elemento Palcoscenico)

Pensa all'elemento `<dialog>` come a un palco che tieni nel backstage (nascosto) del tuo teatro (la pagina web).

```html
<dialog id="mio-dialogo">
  <h2>Titolo del Modale</h2>
  <p>Questo è un messaggio importante.</p>
  <button id="chiudi-btn">Chiudi</button>
  <form method="dialog">
      <button value="confermato">Conferma</button>
      <button value="annullato">Annulla</button>
  </form>
</dialog>

<button id="apri-btn">Apri Modale</button>
```

Di base, questo elemento non fa nulla ed è invisibile. Per farlo "salire sul palco", hai due metodi JavaScript, ed è qui che la magia accade.

#### `showModal()` (Modale) vs `show()` (Non-Modale)

Questa è la distinzione fondamentale. Stai portando l'attore sul palco, ma come?

  * **`showModal()` (Il Faro da Palcoscenico 🔦)**
    Questo è il metodo che vorrai usare il 99% delle volte. È il "vero" modale.

    *Analogo:* È come **accendere un faro (spotlight) sull'attore** (`<dialog>`) e **abbassare completamente le luci su tutto il resto della pagina** (il *backdrop*).

    ```javascript
    const dialog = document.querySelector("#mio-dialogo");
    const apriBtn = document.querySelector("#apri-btn");

    apriBtn.addEventListener("click", () => {
        dialog.showModal();
    });
    ```

    **Cosa fa `showModal()` automaticamente per te:**

    1.  **Crea un Backdrop:** Aggiunge uno sfondo semi-trasparente (`::backdrop`) che copre il resto della pagina.
    2.  **Blocca l'Interazione:** L'utente *non può* cliccare o interagire con nient'altro sulla pagina (link, bottoni, ecc.) finché il modale non è chiuso.
    3.  **Intrappola il Focus (Focus Trap):** Se l'utente preme `Tab`, il focus della tastiera rimane *intrappolato* all'interno del modale, ciclando solo tra i suoi elementi interattivi. È un requisito fondamentale per l'accessibilità (a11y).
    4.  **Si chiude con `Esc`:** L'utente può chiudere il modale semplicemente premendo il tasto `Esc`.

  * **`show()` (Il Pannello Informativo 📰)**
    Questo metodo è per un "non-modale" o "dialogo".

    *Analogo:* È come un **pannello informativo** o un *sottotitolo* che appare in un angolo dello schermo (come una chat o un avviso di cookie). Puoi ancora interagire con il resto della pagina mentre è visibile.

    ```javascript
    // Meno comune
    dialog.show();
    ```

    **Cosa *NON* fa `show()`:**

    1.  Nessun backdrop.
    2.  Nessun blocco dell'interazione.
    3.  Nessun focus trap.
    4.  Il tasto `Esc` *non* lo chiude.

**Regola:** Usa `showModal()` per qualsiasi cosa che richieda l'attenzione *esclusiva* dell'utente (conferme, form, avvisi). Usa `show()` per notifiche non invadenti (raro).

-----

#### `close()` (Uscita di Scena)

Questo è il metodo per chiudere programmaticamente il dialogo.

*Analogo:* È l'attore che fa l'inchino e **esce di scena**.

```javascript
const dialog = document.querySelector("#mio-dialogo");
const chiudiBtn = document.querySelector("#chiudi-btn");

// Modo 1: Chiudere con JavaScript
chiudiBtn.addEventListener("click", () => {
    dialog.close(); // Chiude il dialogo
});

// Modo 2: Il trucco del Form (più pulito!)
// Qualsiasi <button> dentro un <form method="dialog">
// chiuderà automaticamente il dialogo quando cliccato.
// NON serve JavaScript!
```

**Il Superpotere: Il `returnValue`**
Quando chiudi un dialogo, puoi opzionalmente passare un "messaggio di chiusura" (un `returnValue`).

*Analogo:* È come se l'attore, uscendo di scena, ti consegnasse un **bigliettino** con sopra scritto cosa ha deciso ("confermato" o "annullato").

```html
<form method="dialog">
    <button value="confermato">Conferma</button>
    <button value="annullato">Annulla</button>
</form>
```

```javascript
// JS per "ascoltare" il bigliettino
const dialog = document.querySelector("#mio-dialogo");

// Ascolta l'evento 'close'
dialog.addEventListener("close", () => {
    // Leggi il bigliettino!
    console.log("Il dialogo si è chiuso. Valore restituito:", dialog.returnValue);
    
    if (dialog.returnValue === "confermato") {
        console.log("L'utente ha confermato!");
        //...esegui la logica di conferma...
    } else {
        console.log("L'utente ha annullato.");
    }
});
```

Se l'utente preme `Esc`, il `returnValue` sarà una stringa vuota `""` (o il valore di un eventuale bottone `cancel`).

L'elemento `<dialog>` elimina da solo il 90% del lavoro sporco e dei bug che affliggevano i modali "fatti a mano", gestendo focus, backdrop e chiusura in modo nativo e accessibile.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>












## Parte VI - API Canvas e Logica di Gioco 🎮

Se il DOM è come un set di **mattoncini LEGO** (elementi rigidi come `<div>`, `<p>`, `<button>` che puoi solo impilare e spostare), l'API **Canvas** è un **foglio di carta bianco immacolato** e un astuccio pieno di colori.

Non ci sono "elementi". C'è solo *tu* e una griglia di pixel. Ti dà un potere immenso (puoi disegnare *qualsiasi cosa*) ma anche più responsabilità (devi *tu* disegnare *tutto*, ad ogni fotogramma). È la tecnologia alla base della maggior parte dei giochi 2D sul web.

### 25\. Canvas (Generale) - Il Tuo Quaderno Digitale

L'elemento `<canvas>` in HTML è solo il "quaderno".
`<canvas id="mio-gioco"></canvas>`

Da solo, è inutile. Per disegnarci sopra, devi prima "afferrare" i suoi strumenti di disegno (il "contesto") con JavaScript.

#### `getContext("2d")` - Ottenere gli Strumenti

Pensa al `<canvas>` come al quaderno e al `getContext("2d")` come all'azione di **aprire l'astuccio** e prendere pennarelli, penne e la gomma.

```javascript
const canvas = document.querySelector("#mio-gioco");
// Apri l'astuccio per disegnare in 2D
const ctx = canvas.getContext("2d"); 
// 'ctx' (abbreviazione di "context") è ora il tuo oggetto magico
// con tutti i metodi per disegnare: ctx.fillRect(), ctx.beginPath()...
```

#### Coordinate (0,0 in alto a sinistra) - La Mappa Rovesciata

Questo è il primo "muro" concettuale da superare. A differenza della matematica scolastica dove (0,0) è in *basso a sinistra*, nel Canvas (e in quasi tutta la computer grafica):

  * **`(0, 0)` è l'angolo IN ALTO A SINISTRA.**
  * L'asse **X** aumenta andando verso **destra** (come sempre).
  * L'asse **Y** aumenta **SCENDENDO** verso il basso.

Quindi, `(x: 10, y: 50)` significa "10 pixel da sinistra, 50 pixel *dall'alto*".

#### Stili (`fill` vs `stroke`) - Pennarello vs Penna

Hai due modi principali per disegnare:

1.  **`fill` (Riempimento):** È il tuo **pennarello**. Crea forme piene e solide. Il suo colore si controlla con `ctx.fillStyle`.
2.  **`stroke` (Contorno):** È la tua **penna a china**. Disegna solo i bordi. Il suo colore si controlla con `ctx.strokeStyle`.

**Concetto Chiave: Sono "Stati"**
Pensa a `fillStyle` e `strokeStyle` come a **tenere in mano un pennarello**.

```javascript
ctx.fillStyle = "red";
// Da questo momento, *tutto* ciò che disegni con fill()
// sarà rosso...
ctx.fillRect(10, 10, 50, 50); // Un quadrato rosso

ctx.fillStyle = "blue";
// ...finché non cambi pennarello.
ctx.fillRect(70, 10, 50, 50); // Un quadrato blu
```

Non devi specificare il colore per ogni forma. Lo imposti una volta e rimane "attivo".

#### Forme (Rettangoli, Percorsi) - Gli Elementi di Base

Ci sono due modi per disegnare forme:

  * **1. Rettangoli (I Facili)**
    I rettangoli sono così comuni che hanno i loro metodi "scorciatoia". Non devi fare altro.

    ```javascript
    // ctx.fillRect(x, y, larghezza, altezza);
    ctx.fillStyle = "green";
    ctx.fillRect(20, 20, 100, 50); // Disegna un rettangolo verde pieno

    // ctx.strokeRect(x, y, larghezza, altezza);
    ctx.strokeStyle = "black";
    ctx.strokeRect(150, 20, 100, 50); // Disegna un bordo di rettangolo nero

    // ctx.clearRect(x, y, larghezza, altezza);
    ctx.clearRect(30, 30, 30, 30); // È una *gomma*! Cancella un pezzo
    ```

  * **2. Percorsi (Tutto il Resto)**
    Per *qualsiasi altra cosa* (linee, triangoli, cerchi, forme strane), devi usare una "ricetta" in 3 fasi. Pensa a questo come a disegnare con un pennino:

    1.  **`beginPath()`:** "Alzo la penna dal foglio e inizio un nuovo disegno da zero." (Questo è *fondamentale*\! Se lo dimentichi, ricollegherai il tuo nuovo disegno a quello vecchio).
    2.  **(Definizione):** "Sposto la penna e traccio le linee." (Usi metodi come `moveTo(x, y)`, `lineTo(x, y)`, `arc(x, y, raggio, ...)`).
    3.  **`fill()` o `stroke()`:** "Ho finito il percorso. Ora, riempilo col pennarello (`fill`) o ripassa i bordi con la penna (`stroke`)."

    <!-- end list -->

    ```javascript
    // Esempio: Disegnare un triangolo
    ctx.beginPath();       // 1. Alzo la penna
    ctx.moveTo(75, 50);    // 2. Sposto la penna (senza disegnare) a (75, 50)
    ctx.lineTo(100, 75);   //    Traccio una linea fino a (100, 75)
    ctx.lineTo(100, 25);   //    Traccio una linea fino a (100, 25)
    ctx.lineTo(75, 50);    //    Traccio una linea per chiudere
    ctx.stroke();          // 3. Ripassa i bordi!
    ```

-----

### 26\. Dimensioni Canvas (Risoluzione vs. Dimensione)

Questo è uno dei concetti più importanti e che crea più confusione. Un canvas ha **DUE dimensioni separate**.

*Analogo: Il Monitor Sgranato 🖥️*
Pensa al tuo canvas come a un monitor per PC. Il monitor ha:

1.  Una **Dimensione Fisica** (misurata in cm, es. "un monitor da 24 pollici").
2.  Una **Risoluzione** (misurata in pixel, es. "1920x1080").

Nel Canvas:

1.  La **Dimensione Visiva (CSS)** è la "dimensione fisica" (es. `style="width: 800px"`).
2.  La **Risoluzione (JS)** è il "numero di pixel" (es. `canvas.width = 800`).

#### Il Problema dell'Effetto Sfocato

**Di default, un canvas ha una risoluzione di 300x150 pixel.**

Cosa succede se prendi un `<canvas>` e gli dici (con il CSS) di essere largo 800px?
`  <canvas id="gioco" style="width: 800px; height: 600px;"></canvas> `

Il browser prenderà la tua griglia di 300x150 pixel e la **stiracchierà** per riempire 800x600 pixel. Il risultato? Tutto apparirà **sfocato, sgranato e distorto**. È come prendere un francobollo e ingrandirlo per farci un poster.

#### Soluzione (`canvas.width = innerWidth`) - La Sincronizzazione Perfetta

Per risolvere questo, devi *sempre* far coincidere la Risoluzione (JS) con la Dimensione Visiva (CSS). Per un gioco a schermo intero, la soluzione è:

```javascript
const canvas = document.querySelector("#gioco");
const ctx = canvas.getContext("2d");

// Sincronizza la RISOLUZIONE con la dimensione della finestra
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ora, se lo schermo è 1920x1080, il canvas avrà
// 1920x1080 pixel reali. Niente più sfocatura!
```

**Attenzione: Il Reset Totale\!**
C'è un "effetto collaterale" importante: ogni volta che modifichi `canvas.width` o `canvas.height` con JavaScript, il **canvas viene istantaneamente e completamente cancellato**. È come prendere un foglio di carta nuovo di zecca. Per questo motivo, le dimensioni si impostano *all'inizio* (o in un evento `resize`, ridisegnando tutto).

-----

### 27\. requestAnimationFrame (Il Game Loop) ❤️

Il tuo gioco deve ridisegnare tutto 60 volte al secondo (60 FPS - Frames Per Second) per creare l'illusione del movimento. Come si fa a creare un "orologio" così preciso?

Non si usa `setInterval`. Si usa `requestAnimationFrame` (o `rAF`).

#### Concetto e Loop Infinito - La Staffetta Ricorsiva

`requestAnimationFrame` (rAF) è un metodo speciale del browser. È come dire al browser: "Ehi, *appena prima* che tu ridisegni lo schermo (il prossimo "frame"), potresti per favore eseguire questa mia funzione?"

Per creare un loop infinito ("Game Loop"), la funzione deve semplicemente... **richiedere se stessa**.

*Analogo: La Staffetta Ricorsiva 🏃*

1.  Tu chiami `gameLoop()` per la prima volta (la partenza).
2.  `gameLoop()` fa tutto il suo lavoro (aggiorna, disegna...).
3.  Come ultima cosa, dice: `requestAnimationFrame(gameLoop)`. È come se *passasse il testimone* al browser.
4.  Il browser tiene il testimone per 16.67 millisecondi (per 60 FPS).
5.  Quando è pronto per il prossimo frame, *restituisce il testimone* chiamando `gameLoop()` di nuovo.
6.  Il ciclo ricomincia, all'infinito.

<!-- end list -->

```javascript
function gameLoop() {
    // 1. Pulisci lo schermo (fondamentale!)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. Aggiorna la logica (muovi il giocatore, gravità, collisioni)
    aggiornaPosizioni();
    
    // 3. Disegna tutto nella nuova posizione
    disegnaGiocatore();
    disegnaPiattaforme();
    
    // 4. Chiedi di essere richiamato per il prossimo frame
    requestAnimationFrame(gameLoop); 
}

// Avvia il motore per la prima volta!
requestAnimationFrame(gameLoop);
```

**Nota:** Stai passando `gameLoop` (il *riferimento* alla funzione, la "ricetta") non `gameLoop()` (l'*esecuzione* immediata, la "torta").

#### Vantaggi vs. `setInterval` - Il Motore Intelligente

Perché non usare semplicemente `setInterval(gameLoop, 16)`?
`setInterval` è un "orologio stupido". `requestAnimationFrame` è un "motore intelligente".

1.  **Sincronizzazione Perfetta:** `rAF` si sincronizza *perfettamente* con il ciclo di refresh del monitor. `setInterval` è "stupido": spara ogni 16ms, anche se il browser è occupato a fare altro. Questo causa *stuttering* (animazione a scatti) perché potresti disegnare *mentre* il browser sta già inviando l'immagine allo schermo.
2.  **Efficienza (Pausa Automatica):** Questo è il vantaggio migliore. Se l'utente **cambia tab** nel browser, `requestAnimationFrame` **si mette in pausa automaticamente**. `setInterval` continuerebbe a far girare il tuo gioco a 60 FPS in background, consumando CPU e batteria per niente.
3.  **Fluidità:** Il browser può ottimizzare `rAF`, raggruppando animazioni e garantendo un risultato visivo più fluido.

-----

### 28\. Logica di Gioco - Dare un'Anima al Codice 🎮

Questi sono i pattern logici che trasformano un disegno statico in un *gioco*.

#### Logica di Gioco: Gravità (Accelerazione vs Velocità)

Questo è un concetto di fisica cruciale. Nei giochi, non sposti semplicemente gli oggetti; applichi loro delle *forze*.

  * La **Posizione** è *dove* sei (es. `player.y`).
  * La **Velocità** è *quanto velocemente* cambia la tua posizione (es. `player.velocityY`).
  * La **Gravità** (Accelerazione) è *quanto velocemente* cambia la tua *velocità* (es. `const gravity = 0.5`).

*Analogo: La Palla di Neve ❄️*
La gravità (`gravity`) è la pendenza della collina.
La palla di neve (`player`) ha una `velocità`.
La pendenza (`gravity`) non sposta *direttamente* la palla, ma la fa *accelerare* (aumenta la sua `velocità`). È la `velocità` (ora più alta) che sposta la palla.

**La Catena (ad ogni frame):**

```javascript
// 1. Applica la gravità alla velocità
player.velocityY += gravity; // La velocità aumenta (es. da 0 a 0.5, poi a 1.0, poi 1.5...)

// 2. Applica la velocità alla posizione
player.y += player.velocityY; // L'oggetto si sposta verso il basso, sempre più velocemente
```

**Esempio Salto:** Per saltare, dai al giocatore una `velocityY` *negativa* (es. -15) per farlo andare *su*. La gravità (0.5) "mangerà" quel valore ad ogni frame (-14.5, -14, ...), fino a farlo diventare `0` (l'apice del salto) e poi positivo (iniziando la caduta).

#### Logica di Gioco: Flag Booleani (Collision Debouncing)

*Analogo: Il Tornello della Metropolitana 🚇*

  * **Il Problema:** Il tuo giocatore tocca un checkpoint. Il gioco gira a 60 FPS. Il giocatore rimane fisicamente sul checkpoint per, diciamo, 10 frame (1/6 di secondo). Risultato: il suono di "checkpoint\!" suona 10 volte e il punteggio aumenta di 1000. Un disastro.
  * **La Soluzione (Flag):** Una variabile "interruttore" (un flag booleano).

<!-- end list -->

```javascript
let isCheckpointCollisionActive = true;

// ...nel game loop...
if (collisioneConCheckpoint && isCheckpointCollisionActive) {
    
    // 1. DISATTIVA L'INTERRUTTORE!
    // Sei appena passato dal tornello. Non puoi ripassare subito.
    isCheckpointCollisionActive = false;
    
    // 2. Fai la tua azione UNA SOLA VOLTA
    salvaPunteggio();
    suonaSuono();
    
    // 3. (Opzionale) Riattiva l'interruttore dopo un po',
    // o (meglio) quando il giocatore si allontana dal checkpoint
    setTimeout(() => {
        isCheckpointCollisionActive = true; // Il tornello si resetta
    }, 1000); // 1 secondo di immunità
}
```

Questo pattern si chiama **Debouncing** (o Throttling, a seconda del contesto) e previene che un singolo evento venga "spammat" migliaia di volte.

#### Logica di Gioco: Responsive (Funzioni Proporzionali)

*Analogo: Lo Zoom Automatico 🔍*

  * **Il Problema:** Progetti il tuo gioco sul tuo monitor gigante da 2000 pixel. Decidi che il giocatore deve avere una `larghezza = 100`. Un utente apre il gioco sul suo telefono, che è largo solo 400 pixel. Il tuo giocatore ora occupa 1/4 dell'intero schermo\!
  * **La Soluzione:** Non usare valori *assoluti* (100px), ma valori *proporzionali* alla dimensione della finestra.

Crea una "funzione traduttore" che converte la tua "dimensione di sviluppo" nella dimensione attuale.

```javascript
// La dimensione "standard" su cui stai progettando
const larghezzaStandard = 1920; 

function proportionalSize(size) {
    // 1. Calcola la proporzione dell'oggetto rispetto allo standard
    // es: 100px / 1920px = 0.052 (il giocatore è il 5.2% dello schermo)
    const proporzione = size / larghezzaStandard; 
    
    // 2. Applica quella proporzione alla finestra *attuale*
    // es: 0.052 * 400px (telefono) = 20.8px
    const risultato = window.innerWidth * proporzione;
    
    // Evita che gli oggetti spariscano (es. 0.5px)
    return Math.ceil(risultato); 
}

// Uso nel tuo gioco:
player.width = proportionalSize(100); // Sarà 100 sul tuo PC, 21 sul telefono
player.x = proportionalSize(800); // Sarà 800 sul tuo PC, 333 sul telefono
```

In questo modo, l'intero gioco si "restringe" o "ingrandisce" in modo proporzionale, mantenendo la stessa *sensazione* e giocabilità su tutti i dispositivi.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>








## Parte VII - Pattern e Best Practices 🎯

Scrivere codice che *funziona* è il primo passo. Scrivere codice *buono* è l'obiettivo finale. Un "buon" codice è pulito, leggibile, facile da manutenere e difficile da rompere. Questa sezione raccoglie i "pattern" (modelli) e le "best practice" (abitudini) che trasformano un programmatore in un professionista.

### 29\. Pattern di Sviluppo

#### Pattern di Accumulo

L'accumulo è uno dei pattern più comuni. È come **riempire un secchio goccia a goccia**. Inizi con un "contenitore" vuoto (che sia un numero, una stringa, o un array) e poi, dentro un ciclo, "accumuli" i risultati.

```javascript
// 1. Accumulo Numerico (Somma)
let totale = 0;  // Il secchio vuoto
const prezzi = [10, 20, 30];
for (const prezzo of prezzi) {
    totale += prezzo;  // Aggiungi ogni "goccia"
}
// totale ora è 60

// 2. Accumulo di Stringa (Costruzione)
let html = "<ul>"; // Il contenitore iniziale
const frutti = ["Mela", "Pera"];
for (const frutto of frutti) {
    html += `<li>${frutto}</li>`; // Accumula pezzi di stringa
}
html += "</ul>";
// html ora è "<ul><li>Mela</li><li>Pera</li></ul>"

// 3. Accumulo in Array (Filtraggio)
const positivi = []; // L'array vuoto
const numeri = [-1, 10, -5, 20];
for (const num of numeri) {
    if (num > 0) {
        positivi.push(num); // Accumula solo i positivi
    }
}
// positivi ora è [10, 20]
```

Il metodo `.reduce()` (visto nella Parte II) è la versione funzionale e compatta del pattern di accumulo.

#### Flag Booleane - Gli Interruttori

Una "flag" (bandiera) è un **interruttore della luce**. È una variabile booleana (`true`/`false`) che usi per *ricordare* uno stato e controllare il flusso del programma.

*Analogo:* Stai cercando le chiavi in un cassetto. Tieni un dito (la flag `trovato = false`) alzato. Appena le trovi, abbassi il dito (`trovato = true`) e smetti di cercare.

```javascript
let isLoading = false; // Flag: "Stiamo caricando dati?"
let hasError = false;  // Flag: "C'è stato un errore?"

function fetchData() {
    isLoading = true;
    mostraSpinner(); // Mostra l'icona di caricamento
    
    // ...simula chiamata di rete...
    setTimeout(() => {
        if (operazioneFallita) {
            hasError = true;
        }
        isLoading = false;
        nascondiSpinner();
        aggiornaUI();
    }, 2000);
}
```

#### Variabili di Stato

Questa è l'evoluzione di una flag booleana. Invece di un semplice `true/false`, una variabile di stato tiene traccia di *in quale "modalità"* si trova la tua applicazione.

*Analogo:* Un semaforo. Non è solo "acceso/spento", ma ha stati precisi: `"rosso"`, `"giallo"`, `"verde"`.

```javascript
// Stati di un form
let formState = "editing";  // Possibili stati: "editing", "submitting", "submitted", "error"

function gestisciForm() {
    switch(formState) {
        case "editing":
            abilitaCampi();
            nascondiSpinner();
            break;
        case "submitting":
            disabilitaCampi();
            mostraSpinner();
            break;
        case "submitted":
            mostraMessaggioSuccesso();
            break;
        case "error":
            mostraMessaggioErrore();
            abilitaCampi();
            break;
    }
}
```

Usare una variabile di stato previene bug, come permettere all'utente di cliccare "Invia" (`submitting`) mentre sta già inviando.

#### Configuration Objects Pattern - Il Pannello di Controllo

Questo pattern consiste nel **raggruppare tutte le tue impostazioni e "numeri magici"** in un unico oggetto `const` all'inizio del file.

*Analogo:* Invece di avere post-it con password e impostazioni sparsi per tutto l'ufficio, li tieni tutti in un **unico pannello di controllo** chiuso a chiave.

```javascript
// CATTIVO: Numeri magici sparsi
function checkTentativi(tentativi) {
    if (tentativi > 3) { ... }
}
fetch("https://api.example.com/v1/users");

// BUONO: Oggetto di configurazione
const CONFIG = {
    API_URL: "https://api.example.com/v1",
    MAX_RETRIES: 3,
    TIMEOUT_MS: 5000,
    MESSAGES: {
        error: "Si è verificato un errore",
        loading: "Caricamento in corso..."
    }
};

// Ora il codice è pulito e manutenibile
function checkTentativi(tentativi) {
    if (tentativi > CONFIG.MAX_RETRIES) { ... }
}
fetch(`${CONFIG.API_URL}/users`);
```

Se un domani l'API cambia o vuoi cambiare il numero massimo di tentativi, modifichi **un solo posto**.

#### Gestione Errori con `try-catch`

Il codice fallirà. È una certezza. `try-catch` è la tua **rete di sicurezza**.

*Analogo:* Sei un trapezista. Il `try` è il tuo numero acrobatico. Il `catch` è la rete di sicurezza sotto di te. Puoi provare il salto (codice rischioso) senza paura di sfracellarti al suolo (far crashare l'intera applicazione).

```javascript
function parseJSON(jsonString) {
    try {
        // 1. Prova a eseguire questo codice rischioso
        const data = JSON.parse(jsonString);
        console.log("Parsing riuscito:", data);
        return data;
        
    } catch (error) {
        // 2. Se *qualsiasi cosa* nel 'try' fallisce,
        // l'esecuzione salta immediatamente qui.
        console.error("ERRORE! JSON non valido:", error.message);
        // 'error' è un oggetto che contiene i dettagli dell'errore
        return null; // Ritorna un valore sicuro
        
    } finally {
        // 3. (Opzionale) Eseguito *sempre*,
        // sia che il try riesca o che il catch scatti.
        // Utile per pulizia, es. nascondere uno spinner.
        console.log("Tentativo di parsing completato.");
    }
}

parseJSON('{"nome": "Mario"}'); // Riuscito
parseJSON('{nome: "Mario"}'); // Fallisce (mancano le virgolette sulla chiave), ma non crasha!
```

-----

### 30\. Best Practice di Stile e Qualità

#### Best Practices - Naming Convention

I nomi nel tuo codice sono importanti quanto il codice stesso. Devono **raccontare una storia**. Un nome ben scelto elimina la necessità di un commento.

*Analogo:* È la differenza tra etichettare una scatola "ROBA" e etichettarla "Fatture Elettriche 2023".

  * **Costanti globali (Configurazione):** `UPPER_SNAKE_CASE` (Tutto maiuscolo, con underscore).
    `const MAX_ATTEMPTS = 3;`
    `const API_KEY = "abc123";`

  * **Variabili e Funzioni:** `camelCase` (Inizia minuscolo, ogni nuova parola maiuscola).
    `let userName = "Mario";`
    `function calculateTotal() {}`

  * **Classi (Stampi):** `PascalCase` (Inizia maiuscolo).
    `class UserAccount {}`
    `class ShoppingCart {}`

  * **Nomi Semantici (che parlano):**

      * **Booleani (Flag):** Iniziali come domande: `isVisible`, `hasPermission`, `canEdit`.
      * **Funzioni:** Verbi che descrivono l'azione: `fetchData()`, `validateEmail()`, `renderComponent()`.
      * **Array:** Nomi plurali: `users`, `products`, `items`.
      * **Oggetti:** Nomi singolari descrittivi: `user`, `product`, `configuration`.

#### Testing Incrementale

*Analogo:* **Assaggiare il sugo mentre cucini.**
Non scrivere 100 righe di codice e *poi* premere "play" sperando che tutto funzioni. È una ricetta per il disastro.

Il flusso di lavoro professionale è **scrivi-testa-scrivi-testa**:

1.  Scrivi 3 righe (es. una funzione vuota).
2.  Testa (`console.log("Funzione chiamata")`).
3.  Scrivi altre 5 righe (la logica interna).
4.  Testa (`console.log("Risultato intermedio:", risultato)`).
5.  Finisci la funzione.
6.  Testa (`console.log("Risultato finale:", finale)`).

`console.log` è il tuo strumento di debug più potente. Usalo. Sempre.

#### Separazione delle Responsabilità (SoC)

Questo è un principio di design fondamentale. Ogni "pezzo" del tuo codice (funzione, classe, modulo) deve avere **una sola, chiara responsabilità**.

*Analogo:* In un ristorante, lo chef cucina, il cameriere prende gli ordini, il cassiere gestisce i soldi. È un disastro se lo chef deve anche prendere gli ordini e pulire i tavoli.

```javascript
// CATTIVO: La funzione "tuttofare" 👎
function processUserData(userData) {
    // 1. Valida...
    if (!userData.email) return false;
    // 2. Salva...
    database.save(userData);
    // 3. Invia email...
    sendEmail(userData.email);
    // 4. Aggiorna UI...
    updateUI(userData);
}

// BUONO: Funzioni specializzate 👍
function validateUser(userData) { ... }
function saveUser(userData) { ... }
function notifyUser(email) { ... }
function updateUserUI(userData) { ... }

// Funzione "direttore d'orchestra"
function processUser(userData) {
    if (!validateUser(userData)) return;
    
    saveUser(userData);
    notifyUser(userData.email);
    updateUserUI(userData);
}
```

Questo codice è più facile da testare, debuggare e riutilizzare.

#### `style.display` vs `classList` (Best Practice di SoC)

Questo è un esempio perfetto di Separazione delle Responsabilità.

  * **JavaScript** (Logica) gestisce lo *stato* (es. "il menu è aperto?").

  * **CSS** (Presentazione) gestisce l'*aspetto* (es. "se il menu è aperto, mostralo").

  * **`style.display` (Approccio non ottimale):**
    `elemento.style.display = "block";`
    *Analogo:* Il JS scavalca il CSS e **vernica a mano** l'elemento. Mescola le responsabilità. È difficile aggiungere un'animazione (dovresti farla in JS) ed è difficile da sovrascrivere.

  * **`classList` (Approccio Migliore):**
    `elemento.classList.add("is-visible");`
    *Analogo:* Il JS **attacca un'etichetta** (`.is-visible`) all'elemento. Il CSS, in un file separato, vede quell'etichetta e decide cosa fare.

    ```css
    /* CSS */
    .menu { display: none; opacity: 0; }
    .menu.is-visible { display: block; opacity: 1; transition: opacity 0.3s; }
    ```

    Ora puoi cambiare l'animazione o l'aspetto modificando *solo* il CSS, senza mai toccare il JavaScript.

#### `innerHTML =` vs `innerHTML +=` (Performance)

  * **`innerHTML = "..."` (Assegnazione): OK.**
    *Cosa fa:* Cancella *tutto* il contenuto vecchio e lo *sostituisce* con quello nuovo. È un'operazione singola ed efficiente.

  * **`innerHTML += "..."` (Concatenazione): PESSIMA PERFORMANCE ❌**
    *Cosa fa:* Per *aggiungere* un elemento:

    1.  Il browser legge tutto l'HTML esistente e lo trasforma in una stringa.
    2.  Aggiunge il tuo nuovo pezzo di stringa.
    3.  **Distrugge tutti i nodi DOM esistenti.**
    4.  **Riesegue il parsing e ricrea *tutti* i nodi da zero** (vecchi + nuovo).
        \*Analogo (`+=`): Per **aggiungere un solo libro a una libreria**, svuoti completamente *tutti* gli scaffali, butti via i vecchi libri, e poi rimetti dentro le *copie* dei vecchi libri più quello nuovo. È follia.

  * **Soluzione (per aggiungere):** Usa `createElement()` e `appendChild()`.
    *Analogo:* Prendi il nuovo libro e lo metti nello scaffale. Finito. Non tocchi gli altri.

#### `.className` vs `.classList` (Best Practice)

  * **`.className` (L'Arma Spuntata):**
    È una *stringa*. Se un elemento ha `class="vecchia-classe"` e tu fai `el.className = "nuova-classe"`, hai *cancellato* la vecchia classe.

  * **`.classList` (Il Kit Chirurgico):**
    È un oggetto speciale con metodi precisi. È il modo moderno e sicuro.

    ```javascript
    el.classList.add("nuova");
    el.classList.remove("vecchia");
    el.classList.toggle("attivo"); // Aggiunge se non c'è, rimuove se c'è
    ```

    **Regola:** Usa sempre `classList`.

#### `.textContent` vs `innerHTML` (Sicurezza)

*Analogo:* `textContent` è un **pennarello** (sicuro). `innerHTML` è una **penna magica di Harry Potter** (potente ma pericolosa).

  * **`.textContent` (La Scelta Sicura ✅)**

      * Inserisce *solo testo puro*.
      * Se un utente scrive `<script>alert('attaccato!')</script>` nel suo nome, `textContent` lo tratterà come testo innocuo e mostrerà letteralmente la stringa `<script>...` sulla pagina.
      * **Usa questo di default per qualsiasi dato proveniente da un utente.**

  * **`.innerHTML` (La Scelta Pericolosa ⚠️)**

      * *Interpreta ed esegue* qualsiasi tag HTML nella stringa.
      * Se un utente scrive `<script>...` e tu lo inserisci con `innerHTML`, **lo script verrà eseguito**. Questo è il buco di sicurezza n. 1 del web (Cross-Site Scripting - XSS).
      * **Regola:** Usa `innerHTML` solo se 1) sei *tu* a scrivere l'HTML o 2) la fonte è 100% sicura e fidata.

-----

### 31\. Immutabilità e Stile

#### Immutabilità (Concetto Generale)

Questo è un pattern fondamentale per scrivere codice prevedibile.
*Analogo:* La differenza tra **modificare un documento master originale** (Mutazione) e **fare una fotocopia e modificare quella** (Immutabilità).

  * **Mutazione ❌ (Il Male):** Modifichi un array o un oggetto originale.

    ```javascript
    function aggiungiUtente(utenti) {
        utenti.push({ nome: "Nuovo" }); // Muta l'array originale!
        return utenti;
    }
    const miaLista = [{ nome: "Mario" }];
    const nuovaLista = aggiungiUtente(miaLista);
    // Problema: ora 'miaLista' è cambiata! [ {nome: "Mario"}, {nome: "Nuovo"} ]
    // Qualsiasi altra parte del codice che usava 'miaLista' ora è "rotta"
    // o ha dati inaspettati. Questo si chiama "Effetto Collaterale" (Side Effect).
    ```

  * **Immutabilità ✅ (Il Bene):** Crei una *copia* con le modifiche e restituisci la copia. L'originale rimane intatto.

    ```javascript
    function aggiungiUtente(utenti) {
        // Usa lo Spread Operator per fare una fotocopia
        const nuovaLista = [...utenti, { nome: "Nuovo" }];
        return nuovaLista;
    }
    const miaLista = [{ nome: "Mario" }];
    const nuovaLista = aggiungiUtente(miaLista);
    // 'miaLista' è ancora [ {nome: "Mario"} ] (intatta!)
    // 'nuovaLista' è [ {nome: "Mario"}, {nome: "Nuovo"} ]
    ```

    Questo codice è prevedibile, sicuro e più facile da debuggare.

#### `.sort()` (Distruttivo) vs `.toSorted()` (Immutabile)

Questo è l'esempio perfetto di Immutabilità.

  * **`.sort()` ❌:** È un metodo *distruttivo*. Modifica (muta) l'array originale.
  * **`.toSorted()` ✅:** È un metodo *moderno e immutabile*. **Restituisce una nuova copia** ordinata, lasciando l'originale intatto.
  * (Lo stesso vale per `reverse()` vs `toReversed()` e `splice()` vs `toSpliced()`).

#### Stile: Leggibilità vs Concisa (One-liner vs Multi-line)

*Analogo:* Un "one-liner" (codice su una riga) è come cercare di essere "furbi" e parlare in modo super-compatto. Il codice multi-line "racconta una storia" chiara.

  * **One-liner (Conciso ma difficile da debuggare):**
    `const media = array.map(n => n * 2).filter(n => n > 10).reduce((a, b) => a + b, 0);`
    *Dove metti `console.log` per vedere i risultati intermedi? Non puoi.*

  * **Multi-line (Leggibile e facile da debuggare):**

    ```javascript
    const mappato = array.map(n => n * 2);
    // Facile da debuggare!
    console.log("Dopo map:", mappato); 

    const filtrato = mappato.filter(n => n > 10);
    console.log("Dopo filter:", filtrato);

    const media = filtrato.reduce((a, b) => a + b, 0);
    ```

**Verdetto:** La **leggibilità** e la **facilità di debug** battono quasi sempre la furbizia della concisione. Scrivi codice che anche un "te stesso" assonnato tra 6 mesi possa capire.

#### Algoritmo di Scambio (Swap)

Come scambiare i valori di due variabili.

  * **Classic (`temp`) (La "Giostra" a Tre Posti):**
    *Analogo:* Devi scambiare due persone (A e B) su due sedie, ma non possono alzarsi insieme. Hai bisogno di una sedia temporanea (temp).

    1.  A si sposta su temp.
    2.  B si sposta sulla sedia di A.
    3.  A (che era su temp) si sposta sulla sedia di B.

    <!-- end list -->

    ```javascript
    const temp = a;
    a = b;
    b = temp;
    ```

  * **Destructuring (Moderno, ES6):**
    *Analogo:* Magia. Le due persone si scambiano di posto istantaneamente.

    ```javascript
    [a, b] = [b, a];
    ```

    Questo è più pulito, conciso e fa la stessa identica cosa.

-----

### 32\. Evoluzione del Codice

Il tuo codice non nasce mai perfetto. Evolve. Capire questi passaggi ti aiuta a scrivere codice migliore fin dall'inizio.

  * **Da Hardcoded a Dinamico:**

      * *Prima:* `console.log("Benvenuto Mario!");`
      * *Dopo:* `const nome = prompt("Come ti chiami?"); console.log(`Benvenuto ${nome}\!`);`
        Il codice smette di avere valori "scolpiti" e inizia a usare variabili.

  * **Da Ripetitivo a DRY (Don't Repeat Yourself):**

      * *Prima:* Copi e incolli lo stesso blocco di 10 righe in tre punti diversi.
      * *Dopo:* Crei *una sola funzione* con quelle 10 righe e la chiami in tre punti diversi.
      * *Vantaggio:* Se devi fare una modifica, la fai in *un solo posto*.

  * **Da Procedurale a Event-Driven:**

      * *Prima (Procedurale):* Il codice esegue tutto in ordine, dall'alto in basso, una sola volta, e poi finisce.
      * *Dopo (Event-Driven):* Il codice carica le sue funzioni e poi... *aspetta*. Non fa nulla finché l'utente non fa qualcosa (es. `addEventListener("click", ...)`). Questo è il modello di quasi tutto il web.

  * **Da Globale a Modulare:**

      * *Prima (Globale):* Tutte le tue variabili (`punteggio`, `vite`, `nomeUtente`) sono nella "piazza pubblica" (Global Scope), dove chiunque può toccarle e romperle.
      * *Dopo (Modulare):* Raggruppi le variabili correlate in "case" (Oggetti) o "fabbriche" (Classi) che le proteggono.

    <!-- end list -->

    ```javascript
    // Da così:
    let punteggio = 0;
    let vite = 3;
    function aumentaPunteggio() { ... }

    // A così:
    const Game = {
        punteggio: 0,
        vite: 3,
        aumentaPunteggio() { ... },
        perdiVita() { ... }
    };
    ```

    Questo protegge i tuoi dati e rende il codice infinitamente più organizzato.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>













## Parte VI - Persistenza dei Dati e Storage 💾

### 33\. localStorage - La Memoria a Lungo Termine

Finora, tutte le nostre variabili (`let`, `const`) hanno vissuto nella **RAM** del browser. Sono come appunti scritti su una lavagna bianca: veloci, utili, ma appena l'utente *aggiorna* o *chiude* la pagina (`F5`), la lavagna viene pulita. Tutto svanisce.

Il **`localStorage`** è una tecnologia completamente diversa. È la **memoria a lungo termine** del tuo sito web.

*Analogo:* Non è una lavagna bianca, è un **cassetto della scrivania** (o una cassaforte) incorporato nel browser dell'utente. I dati che metti qui dentro (impostazioni, punteggi, un carrello della spesa) **sopravvivono** ai refresh, alle chiusure del browser e persino allo spegnimento del computer. Quando l'utente torna sul tuo sito dopo una settimana, i dati sono ancora lì ad aspettarlo.

#### Il Problema Fondamentale: Il Muro delle Stringhe

C'è una regola d'oro, un "però" grande come una casa, che non puoi mai dimenticare: **il `localStorage` può memorizzare solo ed esclusivamente stringhe di testo.**

Pensa al `localStorage` come a un **vecchio fax**. Un fax non può spedire un *pacco* (un oggetto), un *mazzo di carte* (un array), o un *interruttore* (un booleano). Può spedire solo un *foglio di carta piatto* (una stringa).

Questo è l'errore che fanno tutti all'inizio:

```javascript
// Questo è quello che vorresti fare
const utente = {
    nome: "Alice",
    livello: 12,
    isPremium: true
};

// ERRORE COMUNE: Salvare direttamente ❌
localStorage.setItem('utente', utente);

// Cosa hai salvato davvero?
const salvato = localStorage.getItem('utente');
console.log(salvato); // Output: "[object Object]"
```

Hai perso *tutto*\! Il nome, il livello, tutto è stato schiacciato in quella stringa inutile, `"[object Object]"`. È come aver provato a mandare via fax un pacco: dall'altra parte è arrivato solo un foglio nero e illeggibile.

-----

#### JSON - Il Traduttore Universale dei Dati

Come risolviamo il problema del fax? Non spediamo il pacco, ma spediamo un **documento che *descrive* il contenuto del pacco**, pezzo per pezzo.

**JSON (JavaScript Object Notation)** è il linguaggio universale per *descrivere* dati complessi (oggetti, array) in un formato di testo piatto (una stringa).

*Analogo:* JSON è il **manuale di istruzioni IKEA**. Prende un mobile complesso (il tuo oggetto) e lo "appiattisce" in un manuale (la stringa). Chiunque riceva il manuale può "ricostruire" un mobile identico.

Ci sono due comandi principali che devi conoscere:

#### `JSON.stringify()` (Lo Smontatore/Appiattitore)

`JSON.stringify()` (letteralmente "string-ifà", *trasforma in stringa*) è il processo di "smontaggio". Prende il tuo oggetto o array JavaScript vivo e lo converte in una stringa di testo JSON che lo descrive perfettamente.

*Analogo:* È la macchina che **smonta i mobili IKEA** e li impacchetta nella scatola piatta.

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
// Output (una singola, lunga stringa di testo):
// '{"tema":"dark","notifiche":true,"volume":80,"suoni":{"click":true,"notifica":false}}'

// ORA puoi salvarlo! È solo testo!
localStorage.setItem('settings', stringaJSON);
```

#### `JSON.parse()` (Il Rimontatore/Ricostruttore)

`JSON.parse()` è l'operazione inversa. Prende una stringa di testo JSON (il "manuale") e la "analizza" (*parse*), ricostruendo l'oggetto o l'array JavaScript originale.

*Analogo:* È l'atto di **seguire le istruzioni IKEA** per rimontare il mobile.

```javascript
// Recupera la stringa dal localStorage (il "manuale")
const stringaSalvata = localStorage.getItem('settings');
console.log(typeof stringaSalvata); // "string" - è ancora solo testo!

// La magia del "rimontaggio"
const impostazioniRicostruite = JSON.parse(stringaSalvata);
console.log(typeof impostazioniRicostruite); // "object" - è tornato un oggetto!

// Ora puoi usarlo come un normale oggetto JavaScript
if (impostazioniRicostruite.tema === 'dark') {
    document.body.classList.add('dark-mode');
}
console.log(impostazioniRicostruite.volume); // 80
```

-----

#### Il Ciclo di Vita Completo dei Dati

Questo è il flusso che userai sempre:

```javascript
// FASE 1: CREAZIONE - Hai i tuoi dati JavaScript (un array)
const todoList = [
    { id: 1, testo: "Imparare localStorage" },
    { id: 2, testo: "Conquistare il mondo" }
];

// FASE 2: SERIALIZZAZIONE (Smontaggio) - Trasformi in stringa
const todoListStringa = JSON.stringify(todoList);

// FASE 3: SALVATAGGIO (setItem) - Metti la stringa nel "cassetto"
localStorage.setItem('todos', todoListStringa);

// ... L'utente chiude il browser, spegne il PC, va a dormire ...
// ... Il giorno dopo riapre il tuo sito ...

// FASE 4: RECUPERO (getItem) - Leggi dal "cassetto"
const todoListRecuperata = localStorage.getItem('todos');
// È ancora una stringa! '[{"id":1,...}, ...]'

// FASE 5: DESERIALIZZAZIONE (Rimontaggio) - Ritrasformi in oggetto
const todoListRicostruita = JSON.parse(todoListRecuperata);

// FASE 6: USO - Lavori con i dati come sempre
console.log(todoListRicostruita[0].testo); // "Imparare localStorage"
```

-----

#### Gestire il Primo Avvio - Il Pattern Robusto

Cosa succede quando un utente visita il tuo sito *per la prima volta*?
Il "cassetto" è vuoto. `localStorage.getItem('todos')` restituirà `null`.

Se provi a fare `JSON.parse(null)`, il risultato è `null` (non un errore). Ma se ci provi a fare `.push()`... CRASH.

Devi *sempre* fornire un valore di **default** (un "Piano B").

  * **Il Pattern con `||` (OR) - Il Più Comune**
    Questo è il modo più rapido e conciso, che sfrutta i valori "falsy".

    ```javascript
    // Prova a parsare i dati salvati.
    // Se `getItem` restituisce `null`, `JSON.parse(null)` restituisce `null`.
    // `null` è "falsy", quindi l'operatore OR (||) sceglie il "Piano B": un array vuoto.
    const tasks = JSON.parse(localStorage.getItem("data")) || [];
    ```

  * **Il Pattern `try-catch` - Il Più Sicuro**
    Cosa succede se i dati nel `localStorage` sono *corrotti*? (es. una stringa JSON scritta male: `"{nome: 'mario'}"`). In questo caso, `JSON.parse()` **lancerà un errore** e farà crashare la tua app.
    Il `try-catch` è la rete di sicurezza che previene questo.

    ```javascript
    function caricaDatiSicuri(key, valoreDefault) {
        try {
            const item = localStorage.getItem(key);
            // Se 'item' è null, il ternario restituisce il default.
            // Se 'item' c'è, prova a parsarlo.
            return item ? JSON.parse(item) : valoreDefault;
        } catch (error) {
            // Se il parse fallisce (dati corrotti),
            // stampa l'errore e restituisci il default.
            console.error(`Errore nel parsing di ${key} dal localStorage:`, error);
            return valoreDefault;
        }
    }

    // Uso:
    const tasks = caricaDatiSicuri('data', []);
    ```

-----

#### Ispezionare il localStorage nei DevTools

Non devi lavorare alla cieca\! Il browser ti dà una **finestra segreta** per guardare dentro il cassetto del `localStorage`.

*Analogo:* È come avere una **visione a raggi X** sulla scrivania dell'utente.

**Come Accedere (in Chrome/Edge/Firefox):**

1.  **Apri i DevTools**: `F12` (o click destro \> Ispeziona)
2.  **Trova la sezione Storage**:
      * **Chrome/Edge**: Tab "**Application**" → Storage → Local Storage
      * **Firefox**: Tab "**Storage**" → Local Storage
3.  Clicca sul tuo dominio (es. `http://127.0.0.1:5500`)

Vedrai una tabella semplicissima:
| Key | Value |
|---|---|
| `settings` | `{"tema":"dark","notifiche":true,...}` |
| `todos` | `[{"id":1,"testo":"..."},...]` |

Da qui puoi **verificare**, **modificare** al volo i valori (doppio click), **eliminare** singole chiavi (`Canc`) o **svuotare tutto** (icona cestino). È lo strumento n.1 per il debug della persistenza.

-----

#### I Limiti del localStorage - Le Regole del Gioco

Il `localStorage` è fantastico, ma non è un database infinito. Ha regole e limiti precisi:

1.  **Solo Stringhe:** (L'abbiamo già detto, ma è *così* importante).
2.  **Spazio Limitato (circa 5-10 MB):**
    *Analogo:* È un cassetto, non un magazzino. È perfetto per impostazioni, un carrello, il nome utente. È *pessimo* per salvare foto, file audio, o migliaia di record.
3.  **Sincrono (Bloccante):**
    Quando chiami `localStorage.setItem('roba', '...')`, il tuo JavaScript **si ferma** e aspetta che l'operazione sia scritta sul disco. Se salvi 1KB, è istantaneo. Se provi a salvare una stringa da 4MB, la tua pagina si *congelerà* (freezerà) per una frazione di secondo. Usalo per dati piccoli e veloci.
4.  **Sicurezza Inesistente (È testo in chiaro\!):**
    *Analogo:* È un **post-it** appiccicato sullo schermo, non una cassaforte.
    Chiunque abbia accesso fisico al browser dell'utente (o tramite un attacco XSS) può aprire i DevTools e leggere *tutto* quello che c'è dentro.
    **NON SALVARE MAI:**
      * Password
      * Token API (se non strettamente necessario)
      * Numeri di carte di credito
      * Qualsiasi dato sensibile.

-----

#### Best Practices e Pattern Avanzati

  * **Versionamento:** Cosa succede se la `v2` della tua app cambia la struttura dei dati (es. da `utente: "Mario"` a `utente: { nome: "Mario" }`)? Devi gestire la migrazione.
    ```javascript
    const APP_VERSION = "v2";
    const versioneSalvata = localStorage.getItem("appVersion");

    if (versioneSalvata !== APP_VERSION) {
        // Logica di migrazione... (es. carica i vecchi dati,
        // trasformali, salvali nel new formato)
        localStorage.setItem("appVersion", APP_VERSION);
    }
    ```
  * **Expiration (TTL - Time To Live):** `localStorage` **non ha una data di scadenza**. I dati restano lì per sempre. Se vuoi che scadano (es. un login), devi costruirtelo da solo:
    ```javascript
    function setConScadenza(key, value, ttl_ms) {
        const item = {
            value: value,
            expiry: Date.now() + ttl_ms // Salva il timestamp di scadenza
        };
        localStorage.setItem(key, JSON.stringify(item));
    }
    // ...e una funzione get() che controlla il timestamp...
    ```
  * **Namespace (Prefissi):** Se più script (o app diverse sullo stesso dominio) usano `localStorage`, potrebbero sovrascriversi a vicenda (es. entrambi usano la chiave `user`).
    *Analogo:* È come etichettare le tue scatole del trasloco con "App. 12B" per non confonderle con quelle dell'"App. 10A".
    ```javascript
    const PREFISSO_APP = "miaApp_";
    localStorage.setItem(PREFISSO_APP + 'user', '...');
    localStorage.setItem(PREFISSO_APP + 'settings', '...');
    ```

-----

#### I Comandamenti del localStorage 📜

1.  **Salverai Solo Stringhe** (Ricorda `JSON.stringify()`).
2.  **Parserai con Cautela** (Ricorda `JSON.parse()`).
3.  **Non Ti Fiderai Mai** (Gestisci il `null` del primo avvio con `|| []`).
4.  **Proteggerai dai Crash** (Usa `try-catch` per i dati corrotti).
5.  **Non Salverai Dati Sensibili** (È un post-it, non una cassaforte).
6.  **Rispetterai i Limiti** (Mantieni i dati piccoli, sotto i 5MB).
7.  **Eviterai di Bloccare** (Non salvare dati enormi in modo sincrono).
8.  **Ispezionerai nei DevTools** (Non lavorare alla cieca).
9.  **Userai un Prefisso (Namespace)** (Evita conflitti con altre app).
10. **Gestirai le Versioni** (Prepara il tuo codice a migrare i dati futuri).

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>











## Parte VII - Pattern Avanzati e Algoritmi

### 34\. Regex - Il Linguaggio dei Pattern 🔍

Le **Espressioni Regolari (Regex o RegExp)** sono come un **metal detector super sofisticato** per il testo. Mentre un metal detector normale trova solo "metallo", una regex può essere programmata per trovare *qualsiasi pattern* tu possa descrivere: indirizzi email, numeri di telefono, date, codici fiscali, parole duplicate, o anche pattern complessi come "tutte le parole che iniziano con 'A' e finiscono con 'o'".

Immagina di dover trovare tutti i numeri di telefono in un documento di 1000 pagine: manualmente ci metteresti giorni, una regex lo fa in millisecondi.

#### Anatomia di una Regex

Una regex è racchiusa tra due slash `/pattern/`, come una formula matematica tra parentesi. Ma questi slash sono più che semplici delimitatori: sono il confine tra il mondo normale di JavaScript e il mondo magico dei pattern.

```javascript
// 1. Regex Letterale (più comune e performante)
// Pensa a questo come a /ciao/
const regex = /ciao/i; // Cerca "ciao", ignorando maiuscole/minuscole

// 2. Costruttore RegExp (usato quando il pattern è dinamico)
const parolaDaCercare = "mondo";
const regexDinamica = new RegExp(parolaDaCercare, "i"); // Cerca "mondo"

// Come si usa?
const testo = "Ciao Mondo, come stai?";

// .test() - Il Metal Detector (Sì/No)
// Risponde solo: "C'è o non c'è?" Restituisce true o false.
console.log(regex.test(testo)); // true
console.log(regexDinamica.test(testo)); // true

// .match() - L'Estrattore (Cosa hai trovato?)
// String.prototype.match() ti dà i risultati.
console.log(testo.match(regex)); // ["Ciao"]
console.log(testo.match(regexDinamica)); // ["Mondo"]
```

#### Flags - I Modificatori Globali

Le **flag** sono come **interruttori** che cambi sul tuo metal detector. Vanno *dopo* lo slash finale e cambiano il *comportamento* globale della ricerca.

  * **`g` (global):** È l'interruttore "Trova Tutti".
    Senza `g`, la regex si ferma al *primo* match che trova.
    Con `g`, continua a cercare fino alla fine della stringa, restituendo *tutti* i match.

    ```javascript
    "ciao ciao".match(/ciao/);  // ["ciao"] (si ferma al primo)
    "ciao ciao".match(/ciao/g); // ["ciao", "ciao"] (trova tutto)
    ```

  * **`i` (case-insensitive):** L'interruttore "Ignora Maiuscole/Minuscole".
    Tratta "A" e "a" come se fossero lo stesso carattere.

    ```javascript
    /javascript/.test("JavaScript"); // false
    /javascript/i.test("JavaScript"); // true
    ```

  * **`m` (multiline):** L'interruttore "Multi-Riga".
    Di default, i caratteri speciali `^` (inizio) e `$` (fine) funzionano solo sull'intera stringa. Con `m`, `^` e `$` matchano l'inizio e la fine di *ogni singola riga* (separata da `\n`).

  * **`s` (dotAll):** L'interruttore "il Punto è Tutto".
    Di default, il `.` (punto) matcha *qualsiasi carattere tranne* l' "a capo" (`\n`). Con `s`, il `.` matcha *davvero tutto*, incluso l' "a capo".

**Combinare le Flag:** Puoi attaccarle tutte insieme, in qualsiasi ordine.
`/pattern/gi` (Globale + Case-Insensitive)

-----

#### Caratteri Speciali - I Superpoteri delle Regex

Alcuni caratteri nelle regex hanno significati speciali, come simboli magici in un incantesimo. Questi sono i tuoi strumenti principali:

  * **`.` (Il Jolly):** Il punto (dot) matcha **qualsiasi carattere singolo** (lettera, numero, spazio, simbolo), tranne l' "a capo" (a meno che non usi la flag `s`).

    ```javascript
    /c.ao/.test("ciao");  // true
    /c.ao/.test("c9ao");  // true
    /c.ao/.test("c ao");  // true
    /c.ao/.test("cao");   // false (manca un carattere)
    ```

  * **`^` (L'Ancora di Inizio):** Matcha l'**inizio della stringa**.
    *Analogo:* Dice "la stringa deve *iniziare* con questo".

    ```javascript
    /^Ciao/.test("Ciao mondo");  // true
    /^Ciao/.test("Ehi, Ciao");   // false (non inizia con Ciao)
    ```

  * **`$` (L'Ancora di Fine):** Matcha la **fine della stringa**.
    *Analogo:* Dice "la stringa deve *finire* con questo".

    ```javascript
    /mondo$/.test("Ciao mondo"); // true
    /mondo$/.test("mondo ciao"); // false (non finisce con mondo)
    // Combinati: /^Ciao$/ testa ESATTAMENTE "Ciao"
    ```

  * **`|` (L'Alternativa / OR):** Il simbolo "pipe" significa "o".
    *Analogo:* È un bivio. "Prendi questa strada O quest'altra".

    ```javascript
    /cane|gatto/.test("Mi piace il cane");  // true
    /cane|gatto/.test("Mi piace il gatto"); // true
    /cane|gatto/.test("Mi piace il topo");  // false
    ```

-----

#### Character Classes `[]` - Il Club Esclusivo

Le parentesi quadre creano un "club" di caratteri. Il pattern matcha se trova **UNO QUALSIASI** dei membri del club in quella posizione.

  * **Set di Caratteri (Il Club):**
    `/[aeiou]/` matcha *una singola* vocale.

    ```javascript
    /c[aeiou]t/.test("cat"); // true ('a' è nel club)
    /c[aeiou]t/.test("cot"); // true ('o' è nel club)
    /c[aeiou]t/.test("c9t"); // false ('9' non è nel club)
    ```

    *Utile per "leetspeak":* `m[o0]n[e3]y` matcha "money", "m0ney", "m0n3y", ecc.

  * **Range (Il Trattino):** Per non scrivere `[0123456789]`, usi un trattino.
    `/[a-z]/` // Qualsiasi lettera minuscola
    `/[A-Z]/` // Qualsiasi lettera maiuscola
    `/[0-9]/` // Qualsiasi cifra
    `/[a-zA-Z0-9_]/` // Alfanumerico più underscore (identico a `\w`)

  * **Negazione (Il Buttafuori `^`):**
    Se il *primo* carattere dentro `[]` è `^`, significa "matcha qualsiasi carattere **TRANNE** quelli in questo club".
    `/[^aeiou]/` // Matcha qualsiasi *consonante* (o numero, o spazio...)
    `/[^0-9]/` // Matcha qualsiasi cosa *non* sia una cifra

-----

#### Classi Predefinite - Le Scorciatoie

Per i "club" più comuni, JavaScript ti dà delle scorciatoie (o "macro"):

  * **`\d` (Digit):** Qualsiasi cifra.
    Equivalente a: `[0-9]`

  * **`\D` (Non-Digit):** Qualsiasi cosa *non* sia una cifra.
    Equivalente a: `[^0-9]`

  * **`\w` (Word Character):** Qualsiasi carattere alfanumerico (A-Z, a-z, 0-9) più l'underscore (`_`).
    Equivalente a: `[A-Za-z0-9_]`
    *Attenzione:* **Non** include il trattino `-`\!

  * **`\W` (Non-Word Character):** Qualsiasi cosa *non* sia un `\w` (spazi, punteggiatura, simboli).

  * **`\s` (Space):** Qualsiasi carattere di spazio bianco (spazio, tab `\t`, "a capo" `\n`).

  * **`\S` (Non-Space):** Qualsiasi cosa *non* sia uno spazio bianco.

  * **`\b` (Word Boundary):** Questo è speciale. È un'"ancora" a larghezza zero. Matcha la *posizione* tra un `\w` e un `\W` (cioè, il **confine di una parola**).
    *Analogo:* È come cercare la "fine del marciapiede" di una parola.

    ```javascript
    /\bcat\b/.test("the cat sat"); // true ('cat' è una parola intera)
    /\bcat\b/.test("category");   // false ('cat' è *dentro* una parola)
    ```

-----

#### Quantificatori - Quante Volte?

I quantificatori specificano *quante volte* l'elemento *immediatamente precedente* deve ripetersi.

  * **`?` (Zero o Uno):** Rende l'elemento **opzionale**.
    *Analogo:* "Colore o Colore? Non importa".

    ```javascript
    /colou?r/.test("color");  // true (0 'u')
    /colou?r/.test("colour"); // true (1 'u')
    ```

  * **`+` (Uno o Più):** L'elemento deve esserci **almeno una volta**.
    *Analogo:* "Voglio un numero\!"

    ```javascript
    /\d+/.test("12345"); // true (ci sono 5 cifre)
    /\d+/.test("abc");   // false (non c'è *almeno una* cifra)
    ```

  * **`*` (Zero o Più):** L'elemento **può esserci o non esserci**, anche tante volte.
    *Analogo:* "Spazi? Forse sì, forse no, forse tanti".

    ```javascript
    /ab*c/.test("ac");     // true (0 'b')
    /ab*c/.test("abbbc");  // true (3 'b')
    /\s*/.test("");        // true (0 spazi)
    ```

  * **`{n}` (Esattamente `n` volte):**
    `/\d{4}/` // Matcha *esattamente* 4 cifre (es. un PIN)

  * **`{n,m}` (Da `n` a `m` volte):**
    `/\d{2,4}/` // Matcha da 2 a 4 cifre

  * **`{n,}` (Almeno `n` volte):**
    `/\d{3,}/` // Matcha *almeno* 3 cifre

-----

#### Escape `\` - Quando il Speciale Diventa Normale

Il backslash `\` è il tuo **"disattivatore" di poteri speciali**. Se vuoi cercare letteralmente un carattere che *ha* un significato speciale (come `.`, `+`, `*`, `?`, `$`), devi "escaparlo" mettendogli un `\` davanti.

```javascript
// SBAGLIATO: Voglio cercare "10.00"
/10.00/.test("prezzo 10.00"); // true
/10.00/.test("prezzo 10X00"); // true! (Perché '.' è un Jolly)

// CORRETTO: Escapo il punto
/10\.00/.test("prezzo 10.00"); // true
/10\.00/.test("prezzo 10X00"); // false

// Altri esempi:
// Per cercare un "+" letterale: \+
// Per cercare un "$" letterale: \$
// Per cercare un "\" letterale: \\ (doppio escape)
```

-----

#### Anchors (`^`, `$`) vs Spazio (`\s`) (Soluzione parola intera)

  * **Il Problema:** Vuoi trovare `word` ma solo se è una parola intera.
    `/\sword\s/` (con spazi) è una trappola\!

      * Matcha: `" in word here "` (OK)
      * **Non** matcha: `"word"` (all'inizio/fine, non ha spazi intorno)

  * **Le Ancore (`^`, `$`):** Come visto, `^` e `$` sono "asserzioni di posizione" (zero-width). Verificano una *posizione* (inizio/fine stringa), non consumano un *carattere*.

  * **La Soluzione (Combinata):** Per matchare una parola *circondata da spazi OPPURE ai confini del testo*, devi usare un gruppo OR. E per non "catturare" (vedi sotto) quegli spazi, usiamo un gruppo non-capturing `(?:...)`.

    `/(\s|^)word(\s|$)/` (Versione semplice con cattura)
    `/(?:\s|^)word(?:\s|$)/` (Versione ottimizzata)

      * `(?:\s|^)` = "matcha uno spazio OPPURE l'inizio della stringa"
      * `(?:\s|$)` = "matcha uno spazio OPPURE la fine della stringa"
        Questo pattern matcha `word` in tutti questi casi:
        `"word"` (OK)
        `"word here"` (OK)
        `"see word"` (OK)
        `"see word here"` (OK)

-----

#### Gruppi: Capturing `()` vs Non-Capturing `(?:...)`

Le parentesi `()` sono fondamentali, ma fanno **due cose contemporaneamente**:

1.  **Raggruppano:** Permettono di applicare un quantificatore (come `?`, `+`) a un *gruppo* di caratteri.
      * `abc?` (solo la `c` è opzionale)
      * `(abc)?` (l'intero gruppo "abc" è opzionale)
2.  **Catturano:** *Memorizzano* il pezzo di stringa che ha matchato quel gruppo.

*Analogo: Il Pullman 🚌*

  * **`()` (Gruppo di Cattura):**
    È un pullman. **Raggruppa** gli studenti (li tiene insieme) E il professore **fa una foto 📸** di quel gruppo specifico per l'annuario (lo **cattura**).

    ```javascript
    const testo = "user@example.com";
    const match = testo.match(/(\w+)@(\w+\.\w+)/);
    // match[0] = "user@example.com" (match intero)
    // match[1] = "user" (Foto 📸 del Gruppo 1)
    // match[2] = "example.com" (Foto 📸 del Gruppo 2)
    ```

  * **`(?:...)` (Gruppo Non-Capturing):**
    A volte vuoi solo **raggruppare**, ma non ti interessa la **foto** (non vuoi salvare quel pezzo). La sintassi `(?:...)` fa questo.
    *Analogo:* È un pullman (raggruppa) ma il professore **non fa la foto** (non cattura).

    ```javascript
    // Voglio solo sapere se inizia con "http" o "https",
    // ma non mi interessa *quale* dei due.
    const regex = /(?:http|https):\/\//;
    const match = "https://google.com".match(regex);
    // match[0] = "https://"
    // match[1] = undefined (Nessuna foto 📸!)
    ```

  * **Perché usarlo?**

    1.  **Performance:** Non spreca memoria per salvare "foto" che non userai.
    2.  **Chiarezza:** Mantiene l'array dei risultati pulito, contenente solo i gruppi che *volevi* estrarre.
        **Regola:** Usa `()` *solo* se devi *estrarre* quel pezzo. Se devi solo *raggruppare* (per un `|` o un `?`), usa `(?:...)`.

-----

#### Lookahead e Lookbehind - Gli Occhi del Futuro

Questi sono pattern avanzati che "guardano" avanti o indietro senza *consumare* caratteri. Matchano una *condizione* in una posizione.

  * **`(?=...)` (Lookahead Positivo):** "Trova X, *solo se* è seguito da Y".
    *Analogo:* "Trova il numero, solo se vedi il simbolo € *dopo*."

    ```javascript
    // Estrae solo il numero da un prezzo
    /\d+(?=€)/.exec("costa 50€")[0]; // "50"
    // "€" è la condizione, ma non fa parte del match.
    ```

  * **`(?!...)` (Lookahead Negativo):** "Trova X, *solo se* NON è seguito da Y".

  * **`(?<=...)` (Lookbehind Positivo):** "Trova X, *solo se* è preceduto da Y".
    *Analogo:* "Trova il numero, solo se vedi il simbolo $ *prima*."

    ```javascript
    /(?<=€)\d+/.exec("costa €50")[0]; // "50"
    ```

  * **`(?<!...)` (Lookbehind Negativo):** "Trova X, *solo se* NON è preceduto da Y".

-----

#### Pattern del Mondo Reale - Le Regex Utili

Ecco alcuni pattern che ti troverai a usare spesso:

```javascript
// EMAIL (semplificata ma efficace)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// URL (semplificata)
const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\S*)$/i;

// DATA ITALIANA (GG/MM/AAAA)
const dataRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

// ESTRAI NUMERI DA TESTO
const testo = "Ho 3 mele e 2 pere per €5.50";
const numeri = testo.match(/\d+(\.\d+)?/g); // ["3", "2", "5.50"]

// RIMUOVI TAG HTML (semplificata)
const testoSenzaHTML = htmlString.replace(/<[^>]*>/g, '');

// CAPITALIZZA PRIME LETTERE (usa una funzione nella replace!)
const capitalizza = str => str.replace(/\b\w/g, (lettera) => lettera.toUpperCase());
capitalizza("ciao mondo"); // "Ciao Mondo"
```

<br>
<br>
<br>
<br>
<br>
<br>











### 35\. Call Stack e Ricorsione - La Torre di Piatti 📚

Il **Call Stack** (o "Pila delle Chiamate") è il **taccuino** di JavaScript. È il suo "cervello" a breve termine, dove tiene traccia di quale funzione sta eseguendo in questo preciso istante e quali sono in "pausa", in attesa di essere completate.

#### Il Modello Mentale: La Pila di Piatti (LIFO)

L'analogia perfetta è una **pila di piatti sporchi** accanto al lavandino.

1.  Hai un piatto sporco (chiami la `funzioneA`), lo metti sulla pila. `[funzioneA]`
2.  Arriva un altro piatto (la `funzioneA` chiama la `funzioneB`), lo metti *sopra* il primo. `[funzioneA, funzioneB]`
3.  Arriva un terzo piatto (la `funzioneB` chiama la `funzioneC`), lo metti *in cima*. `[funzioneA, funzioneB, funzioneC]`
4.  Ora devi lavare. Quale lavi? **L'ultimo che hai messo in cima** (la `funzioneC`).
5.  Finito di lavare `C`, la togli dalla pila (pop). `[funzioneA, funzioneB]`
6.  Ora lavi `B`, la togli dalla pila. `[funzioneA]`
7.  Infine, lavi `A` (il primo che avevi messo) e la pila è vuota. `[]`

Questo si chiama **LIFO (Last In, First Out)**: l'ultimo piatto aggiunto è il primo ad essere lavato. Il Call Stack funziona *esattamente* così.

**Vediamolo nel codice:**

```javascript
function prima() {
    console.log("1. Inizio prima");
    seconda();
    console.log("5. Fine prima");
}

function seconda() {
    console.log("2. Inizio seconda");
    terza();
    console.log("4. Fine seconda");
}

function terza() {
    console.log("3. Eseguo terza");
}

// 1. Inizia l'esecuzione
prima();

// Output:
// 1. Inizio prima
// 2. Inizio seconda
// 3. Eseguo terza
// 4. Fine seconda
// 5. Fine prima

// Il Call Stack si è evoluto così:
// []                    - (Vuoto)
// [prima]               - (Entra 'prima')
// [prima, seconda]      - ('prima' chiama 'seconda')
// [prima, seconda, terza] - ('seconda' chiama 'terza')
// [prima, seconda]      - ('terza' finisce, viene tolta)
// [prima]               - ('seconda' finisce, viene tolta)
// []                    - ('prima' finisce, lo stack è vuoto)
```

**L'Errore Famoso: `Stack Overflow`**
Cosa succede se continui a mettere piatti sulla pila, all'infinito, senza mai lavare? La torre crolla. Questo è uno **Stack Overflow**: hai chiamato troppe funzioni (spesso una funzione che chiama se stessa all'infinito) senza mai farle finire, riempiendo il "taccuino" di JavaScript fino a farlo esplodere.

-----

#### Ricorsione - La Funzione che Chiama Se Stessa

La ricorsione è quando una funzione risolve un problema **chiamando se stessa** con una versione "più piccola" del problema.

*Analogo:* Pensa alle **matrioske russe** 🪆. Per aprire la matrioska (risolvere il problema), devi aprirla e trovare... una matrioska più piccola (una versione più piccola del problema). Continui ad aprirle finché non trovi l'ultima, piccolissima bambola solida (il "caso base").

Una funzione ricorsiva ha **due parti obbligatorie**:

1.  **Caso Base (La Matrioska Solida):** La **condizione di stop**. È la versione *più semplice* del problema che può essere risolta senza un'altra chiamata. Senza questo, avrai uno Stack Overflow (la pila di piatti infinita).
2.  **Caso Ricorsivo (Le Matrioske Intermedie):** Il punto in cui la funzione "rompe" il problema in un pezzo più piccolo e **chiama se stessa** per risolverlo.

-----

#### Esempio: Fattoriale (\!)

Il fattoriale di `n` (scritto `n!`) è `n * (n-1) * (n-2) * ... * 1`.
Es. `4! = 4 * 3 * 2 * 1 = 24`.

  * **Versione Iterativa (con un `for` loop):**

    ```javascript
    function fattorialeIterativo(n) {
        let risultato = 1;
        for (let i = n; i > 1; i--) {
            risultato = risultato * i;
        }
        return risultato;
    }
    ```

  * **Versione Ricorsiva (Elegante):**
    La logica è: `4! = 4 * 3!` ... e `3! = 3 * 2!` ... e `2! = 2 * 1!`.

    ```javascript
    function fattoriale(n) {
        // 1. CASO BASE (La matrioska solida)
        if (n <= 1) {
            return 1;
        }
        
        // 2. CASO RICORSIVO (n * versione più piccola)
        return n * fattoriale(n - 1);
    }

    // Tracciamo fattoriale(4)
    // 
    // STACK (Pila di piatti):
    // [fattoriale(4)] -> deve aspettare fattoriale(3)
    // [f(4), f(3)]  -> deve aspettare fattoriale(2)
    // [f(4), f(3), f(2)]  -> deve aspettare fattoriale(1)
    // [f(4), f(3), f(2), f(1)] -> f(1) è il CASO BASE!
    // 
    // Ora la pila si "risolve" (lavi i piatti dall'alto):
    // f(1) restituisce 1.
    // [f(4), f(3), f(2)] -> f(2) riceve 1 e fa return 2 * 1 = 2
    // [f(4), f(3)]      -> f(3) riceve 2 e fa return 3 * 2 = 6
    // [f(4)]          -> f(4) riceve 6 e fa return 4 * 6 = 24
    // []                -> Risultato finale: 24
    ```

-----

#### Esempio: Conversione Decimale a Binario

Come converti un numero decimale (es. 10) in binario (es. "1010")?
L'algoritmo è:

1.  Dividi il numero per 2.
2.  Annota il **resto** (sarà 0 o 1).
3.  Ripeti il processo con il **quoziente**.
4.  Continua finché il quoziente non è 0 o 1.
5.  Leggi i resti al contrario.

La ricorsione è *perfetta* per questo, perché il Call Stack "ricorda" i resti nell'ordine giusto per noi\!

```javascript
function decimalToBinary(num) {
    // 1. CASO BASE (La matrioska solida)
    if (num <= 1) {
        return String(num); // Restituisce "1" o "0"
    }

    // 2. CASO RICORSIVO
    const quoziente = Math.floor(num / 2);
    const resto = num % 2;

    // La magia: chiama la funzione sul quoziente (più piccolo)
    // e attacca il resto *alla fine*.
    return decimalToBinary(quoziente) + String(resto);
}

// Tracciamo decimalToBinary(10):
// 
// STACK:
// [d(10)] -> deve aspettare d(5). Resto: 0
// [d(10), d(5)] -> deve aspettare d(2). Resto: 1
// [d(10), d(5), d(2)] -> deve aspettare d(1). Resto: 0
// [d(10), d(5), d(2), d(1)] -> d(1) è il CASO BASE!
// 
// La pila si "risolve":
// d(1) restituisce "1".
// [d(10), d(5), d(2)] -> d(2) riceve "1" e fa return "1" + "0" = "10"
// [d(10), d(5)]      -> d(5) riceve "10" e fa return "10" + "1" = "101"
// [d(10)]          -> d(10) riceve "101" e fa return "101" + "0" = "1010"
// []                -> Risultato finale: "1010"
```

-----

#### Ricorsione con Memorizzazione (Memoization)

**Il Problema:** La ricorsione pura può essere incredibilmente *inefficiente*.
Prendiamo l'esempio di Fibonacci (dove `fib(n) = fib(n-1) + fib(n-2)`).
Per calcolare `fib(5)`, devi calcolare:

  * `fib(4)` e `fib(3)`
  * Per `fib(4)`, devi calcolare `fib(3)` e `fib(2)`
    ... hai già calcolato `fib(3)` *due volte*\! Per `fib(40)`, calcolerai `fib(2)` *milioni* di volte.

**La Soluzione (Memoization):**
*Analogo:* È come **scrivere la risposta a un problema difficile su un post-it**. La prossima volta che ti fanno la *stessa identica domanda*, non la ricalcoli da zero. Leggi semplicemente il post-it.

Usiamo un "cache" (un oggetto) per memorizzare i risultati già calcolati.

```javascript
// Versione LENTA (Esponenziale)
function fibLento(n) {
    if (n <= 1) return n;
    return fibLento(n - 1) + fibLento(n - 2);
}

// Versione VELOCE (Memoization)
// Usiamo una IIFE (una funzione che si auto-chiama)
// per creare una "cache" privata che la funzione interna può usare.
const fibMemo = (function() {
    const cache = {}; // Il nostro "bloc-notes" privato
    
    return function fib(n) {
        // 1. Controllo il bloc-notes (cache)
        if (n in cache) {
            return cache[n]; // Trovato! Leggo il post-it.
        }

        // 2. Caso base
        if (n <= 1) {
            return n;
        }

        // 3. Non trovato? Calcolo E memorizzo
        const risultato = fib(n - 1) + fib(n - 2);
        cache[n] = risultato; // Scrivo il risultato sul post-it
        return risultato;
    };
})(); // La () finale esegue la funzione esterna

console.time("Lento");
console.log(fibLento(40));      // Ci mette secondi!
console.timeEnd("Lento");

console.time("Veloce");
console.log(fibMemo(40));       // È istantaneo!
console.timeEnd("Veloce");
```

La ricorsione è un concetto elegante, e la memorizzazione la rende uno strumento pratico e potente.

<br>
<br>
<br>
<br>
<br>
<br>










### 36\. Algoritmi Pratici - Le Ricette del Codice 🧮

Gli algoritmi sono il cuore della programmazione. Non sono codice, sono *idee*. Sono le "ricette" testate e collaudate che i programmatori usano da decenni per risolvere problemi comuni, come ordinare una lista o trovare un dato. Imparare questi pattern è come per uno chef imparare a fare la besciamella o un impasto base: sono i mattoni fondamentali per creare piatti (programmi) complessi.

#### Algoritmo di Conversione Decimale → Binario

Abbiamo già visto la versione **ricorsiva** di questo algoritmo (nella Sezione 19 sul Call Stack), che è elegante e sfrutta lo stack per "ricordare" i resti.

Esiste anche una versione **iterativa** (con un ciclo `while`), che è spesso più performante e non rischia uno "Stack Overflow" con numeri enormi. È l'implementazione "manuale" dello stesso concetto.

*Analogo:* Invece di usare le matrioske (ricorsione), usi un **blocco note** (`binary`) e un **pallottoliere** (`input`).

L'algoritmo è: "Dividi per 2, segna il resto, ripeti con il quoziente."

```javascript
function decimalToBinary(input) {
    if (input === 0) return "0"; // Caso base
    
    let binary = ""; // Il nostro "blocco note" (stringa)
    let numero = input; // Il nostro "pallottoliere"
    
    // Continua finché il pallottoliere non è a zero
    while (numero > 0) {
        // 1. Qual è il resto della divisione per 2?
        const resto = numero % 2; // Sarà 0 o 1
        
        // 2. "Attacca" il resto *davanti* alla stringa
        // (perché i resti si leggono al contrario)
        binary = resto + binary;
        
        // 3. Prepara il prossimo giro con il quoziente
        numero = Math.floor(numero / 2);
    }
    
    return binary;
}

// Test
console.log(decimalToBinary(10));  // "1010"
console.log(decimalToBinary(255)); // "11111111"
```

-----

#### Algoritmi di Ordinamento (Sorting)

Ordinare una lista è uno dei problemi più classici dell'informatica.

**Bubble Sort - Il Più Semplice (ma Inefficiente)**

*Analogo:* È come un barattolo di bolle. Le bolle più "leggere" (i numeri più piccoli) "salgono" lentamente verso l'inizio della lista.

  * **Come funziona:** Scorre l'array, confrontando ogni elemento (`array[j]`) con quello successivo (`array[j+1]`). Se sono nell'ordine sbagliato, li **scambia** (swap). Ripete questo intero processo più e più volte, finché l'array non è ordinato.
  * **Performance:** È terribilmente lento ($O(n^2)$). Se l'array raddoppia, il tempo di esecuzione quadruplica. **Non usarlo mai in produzione**, ma è fantastico per imparare gli "swap".

<!-- end list -->

```javascript
function bubbleSort(arr) {
    const array = [...arr]; // Copia per non modificare l'originale
    const n = array.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // Ottimizzazione
        
        for (let j = 0; j < n - i - 1; j++) {
            // Confronta elementi adiacenti
            if (array[j] > array[j + 1]) {
                // Scambia (Swap) con destrutturazione
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        
        // Ottimizzazione: se un intero giro non ha fatto scambi,
        // l'array è già ordinato. Esci presto.
        if (!swapped) break;
    }
    
    return array;
}
```

**Quick Sort - Veloce ed Elegante (Divide et Impera)**

*Analogo:* È come **ordinare una biblioteca**.

1.  Prendi un libro a caso (`pivot`).
2.  Dividi tutti gli altri libri in due mucchi: `sinistra` (quelli che vengono *prima* del pivot nell'alfabeto) e `destra` (quelli che vengono *dopo*).
3.  Affidi i due mucchi più piccoli a due assistenti, dicendo loro: "Fate la stessa identica cosa che ho fatto io" (Ricorsione\!).
4.  Quando ti restituiscono i mucchi ordinati, li unisci: `[mucchiosinistra_ordinato, pivot, mucchiodestra_ordinato]`.

<!-- end list -->

  * **Performance:** È uno degli algoritmi più veloci in media ($O(n \log n)$). Si basa pesantemente sulla **ricorsione** (e quindi sul Call Stack\!).

<!-- end list -->

```javascript
function quickSort(arr) {
    // Caso Base: un array con 0 o 1 elemento è già ordinato
    if (arr.length <= 1) return arr;
    
    // 1. Scegli un Pivot (prendiamo l'ultimo)
    const pivot = arr[arr.length - 1];
    
    // 2. Dividi in due mucchi (left/right)
    const left = [];
    const right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    // 3. & 4. Chiama ricorsivamente e unisci
    return [...quickSort(left), pivot, ...quickSort(right)];
}
```

-----

#### Algoritmi di Ricerca

**Binary Search - Ricerca Binaria (Il Dizionario)**

Questo è un algoritmo *incredibilmente* veloce per trovare un elemento, ma ha un **prerequisito fondamentale: l'array DEVE essere già ordinato.**

*Analogo:* È il modo in cui **cerchi una parola in un dizionario**.

1.  Apri il dizionario *esattamente a metà*.
2.  La parola che vedi (`mid`) è quella che cerchi? Fantastico, hai finito.
3.  La parola che cerchi viene *dopo* (è più grande)? Allora sai che è *inutile* guardare la prima metà del dizionario. **Butti via** mentalmente tutta la metà sinistra.
4.  La parola che cerchi viene *prima* (è più piccola)? **Butti via** tutta la metà destra.
5.  Ripeti il processo (apri a metà, confronta, butta via metà) sul mucchio rimasto.

<!-- end list -->

  * **Performance:** È velocissima ($O(\log n)$). Per trovare 1 elemento su *un miliardo*, ci mette al massimo 30 controlli (mentre un ciclo `for` ne farebbe in media 500 milioni).

<!-- end list -->

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        // 1. Trova l'indice di mezzo
        const mid = Math.floor((left + right) / 2);
        
        // 2. Controlla se è lui
        if (arr[mid] === target) {
            return mid; // Trovato! Restituisci l'indice
        }
        
        // 3. È più grande? Butta via la metà sinistra
        if (arr[mid] < target) {
            left = mid + 1;
        } 
        // 4. È più piccolo? Butta via la metà destra
        else {
            right = mid - 1;
        }
    }
    
    return -1; // Non trovato
}

const sorted = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(sorted, 7));  // 3 (indice)
console.log(binarySearch(sorted, 6));  // -1 (non trovato)
```

-----

#### Algoritmi su Stringhe

**Palindromo - Verifica se una Stringa è Palindroma**

*Definizione:* Una stringa che si legge allo stesso modo nei due sensi (es. "anna", "i topi non avevano topi").
*Sfida:* Bisogna ignorare maiuscole/minuscole, spazi e punteggiatura.

```javascript
function isPalindrome(str) {
    // 1. Pulisci la stringa
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Metodo "Pigro": confronta con il suo inverso
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Metodo "Due Puntatori" (più performante)
function isPalindromeTwoPointers(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false; // Non corrispondono
        }
        left++;
        right--;
    }
    
    return true; // Sono arrivati al centro
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
```

**Anagrammi - Verifica se Due Stringhe sono Anagrammi**

*Definizione:* Due stringhe che usano esattamente le stesse lettere, ma in ordine diverso (es. "listen", "silent").

```javascript
// Metodo 1: Il Trucco dell'Ordinamento
function areAnagramsSort(str1, str2) {
    // Funzione helper per pulire e ordinare
    const cleanSort = s => s.toLowerCase()
                           .replace(/[^a-z]/g, '')
                           .split('')
                           .sort()
                           .join('');
                           
    return cleanSort(str1) === cleanSort(str2);
}

// Metodo 2: Mappa di Frequenza (vedi Parte II)
function areAnagramsMap(str1, str2) {
    const s1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    const s2 = str2.toLowerCase().replace(/[^a-z]/g, '');
    
    if (s1.length !== s2.length) return false;
    
    const count = {};
    
    // Conta le lettere della prima stringa
    for (const char of s1) {
        count[char] = (count[char] || 0) + 1;
    }
    
    // Sottrai le lettere della seconda stringa
    for (const char of s2) {
        if (!count[char]) return false; // Lettera extra
        count[char]--;
    }
    
    return true; // Se tutti i conteggi sono a 0, è un anagramma
}

console.log(areAnagramsSort("listen", "silent")); // true
```

-----

#### Algoritmi Numerici

**Numeri Primi - Verifica e Generazione**

*Definizione:* Un numero maggiore di 1, divisibile solo per 1 e per se stesso.

```javascript
// Verifica se UN numero è primo (versione ottimizzata)
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    
    // Ottimizzazione: escludi subito i multipli di 2 e 3
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    // Ottimizzazione: controlla solo fino alla radice quadrata
    for (let i = 5; i * i <= n; i += 6) {
        // Controlla i=5 e i+2=7, poi i=11 e i+2=13, ecc.
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}

// Crivello di Eratostene - Genera TUTTI i primi fino a 'max'
function sieveOfEratosthenes(max) {
    // 1. Crea un array di "sì" (true)
    const prime = new Array(max + 1).fill(true);
    prime[0] = prime[1] = false; // 0 e 1 non sono primi
    
    for (let i = 2; i * i <= max; i++) {
        // 2. Se 'i' è ancora "sì" (è primo)...
        if (prime[i]) {
            // 3. ...allora "cancella" tutti i suoi multipli
            for (let j = i * i; j <= max; j += i) {
                prime[j] = false;
            }
        }
    }
    
    // 4. Raccogli i risultati
    const primes = [];
    prime.forEach((èPrimo, numero) => {
        if (èPrimo) primes.push(numero);
    });
    
    return primes;
}
```

**Fibonacci - La Sequenza Aurea**

*Definizione:* Ogni numero è la somma dei due precedenti (0, 1, 1, 2, 3, 5, 8...).
La versione ricorsiva con memoization è ottima (vista nella Sezione 19). La versione **iterativa** (con loop) è la più efficiente in assoluto.

```javascript
function fibonacciIterative(n) {
    if (n <= 1) return n;
    
    let prev = 0;
    let curr = 1;
    
    for (let i = 2; i <= n; i++) {
        // La magia dello swap con destrutturazione:
        // Il nuovo 'prev' diventa il 'curr'
        // Il nuovo 'curr' diventa (vecchio prev + vecchio curr)
        [prev, curr] = [curr, prev + curr];
    }
    
    return curr;
}

console.log(fibonacciIterative(7)); // 13
```

**MCD/MCM (Algoritmo di Euclide)**

  * **MCD (GCD - Greatest Common Divisor):** Il numero *più grande* che divide entrambi.
  * **MCM (LCM - Least Common Multiple):** Il numero *più piccolo* che è multiplo di entrambi.

L'**Algoritmo di Euclide** per il MCD è uno degli algoritmi più antichi e veloci.
*Analogo:* `gcd(a, b)` è `a` se `b` è 0. Altrimenti, è `gcd(b, a % b)`.

```javascript
// Algoritmo di Euclide (Ricorsivo)
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Formula per il MCM
function lcm(a, b) {
    // (a * b) può essere enorme, meglio dividere prima
    return (a / gcd(a, b)) * b;
}

console.log(gcd(48, 18));   // 6
console.log(lcm(21, 6));    // 42
```

<br>
<br>
<br>
<br>
<br>
<br>









### 37\. Sanitizzazione e Validazione Input 🛡️

La **Validazione** dell'input è la tua prima linea di difesa contro bug, dati corrotti e vulnerabilità di sicurezza. È come il **controllo di sicurezza all'aeroporto**: non puoi (e non devi) fidarti di ciò che l'utente ti passa. Devi controllare rigorosamente *prima* di far "salire a bordo" i dati nel tuo sistema.

  * **Validazione:** È il processo di *controllo*. Risponde alla domanda: "Questi dati sono nel formato che mi aspetto?". (Es. "È un numero? È un'email valida?"). L'azione è **accettare** o **rifiutare**.
  * **Sanitizzazione:** È il processo di *pulizia*. Risponde alla domanda: "Come posso rendere sicuri questi dati?". (Es. "Rimuovo i tag `<script>`"). L'azione è **modificare** e **pulire**.

#### Validazione Robusta con Pattern Guards

Il pattern "Guard Clause" (o "Return Early") è il modo più pulito per scrivere funzioni di validazione.

*Analogo:* È come un **buttafuori** a una festa. Invece di far entrare tutti e poi cercare quelli che non vanno bene (if annidati), il buttafuori controlla i documenti *all'ingresso*. Se non hai il biglietto, ti rimbalza (`return`) *subito*. Solo chi ha tutti i requisiti arriva alla festa (la logica principale).

**CATTIVO: La "Piramide della Rovina" (Pyramid of Doom) 👎**
Questo codice è difficile da leggere. Il "percorso felice" (quello che fa il vero lavoro) è sepolto in fondo, dentro tre livelli di `if`.

```javascript
function processData(data) {
    if (data) {
        if (data.isValid) {
            if (data.value > 0) {
                // ...finalmente, il codice che ci interessa...
                // ...sepolto qui dentro...
                return data.value * 2;
            } else {
                return null; // Caso di errore 3
            }
        } else {
            return null; // Caso di errore 2
        }
    } else {
        return null; // Caso di errore 1
    }
}
```

**BUONO: Pattern "Guard Clauses" 👍**
Il codice è "piatto", leggibile e la logica principale è l'ultima cosa, non la più interna.

```javascript
function processData(data) {
    // Guardia 1: I dati esistono?
    if (!data) {
        return null; // Esci subito
    }
    
    // Guardia 2: I dati sono validi?
    if (!data.isValid) {
        return null; // Esci subito
    }
    
    // Guardia 3: Il valore è positivo?
    if (data.value <= 0) {
        return null; // Esci subito
    }
    
    // Se siamo arrivati qui, tutte le guardie ci hanno fatto passare.
    // Il "percorso felice" è piatto e facile da leggere.
    return data.value * 2;
}
```

#### Validazione di Input Numerici

Quando ricevi un numero da un `<input>`, ricorda che è *sempre una stringa*\! Devi validarlo rigorosamente. Ecco una funzione robusta che usa le Guard Clauses:

```javascript
function validateNumber(input, options = {}) {
    // Imposta opzioni di default
    const {
        min = -Infinity,
        max = Infinity,
        integer = false, // Deve essere un intero?
        positive = false  // Deve essere > 0?
    } = options;
    
    // Guardia 1: È richiesto?
    if (input === "" || input === null || input === undefined) {
        return { valid: false, error: "Input richiesto" };
    }
    
    // Converti
    const num = Number(input);
    
    // Guardia 2: È un numero? (Usa Number.isNaN per sicurezza)
    if (Number.isNaN(num)) {
        return { valid: false, error: "Deve essere un numero" };
    }
    
    // Guardia 3: È un intero?
    if (integer && !Number.isInteger(num)) {
        return { valid: false, error: "Deve essere un numero intero" };
    }
    
    // Guardia 4: È positivo?
    if (positive && num <= 0) {
        return { valid: false, error: "Deve essere un numero positivo" };
    }
    
    // Guardia 5: Rispetta il minimo?
    if (num < min) {
        return { valid: false, error: `Il numero deve essere almeno ${min}` };
    }
    
    // Guardia 6: Rispetta il massimo?
    if (num > max) {
        return { valid: false, error: `Il numero non deve superare ${max}` };
    }
    
    // Se è arrivato qui, è valido!
    return { valid: true, value: num };
}

// --- Esempio di utilizzo ---
const userInput = "25";
const result = validateNumber(userInput, {
    min: 1,
    max: 100,
    integer: true
});

if (!result.valid) {
    alert(result.error);
} else {
    console.log("Numero valido:", result.value); // result.value è 25 (un numero!)
}
```

#### Rimozione Caratteri Speciali e Sanitizzazione

La sanitizzazione è il processo di **pulizia** dei dati. Non li rifiuti, li modifichi per renderli sicuri.
*Analogo:* È come **filtrare l'acqua** prima di berla. Togli lo sporco (i caratteri pericolosi) e tieni l'acqua (il contenuto sicuro).

Lo strumento principale è `String.prototype.replace()` con una Regex.

```javascript
// Esempio 1: Sanitizzazione base (rimuove tutto tranne lettere, numeri, spazi)
function sanitizeBasic(str) {
    // Regex: [^a-zA-Z0-9\s] -> "trova tutto ciò che NON (^)
    // è una lettera (a-z, A-Z), un numero (0-9) o uno spazio (\s)"
    // ...e rimpiazzalo con una stringa vuota (cancellalo).
    return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

console.log(sanitizeBasic("Ciao! Questo è un test al 100%?"));
// Output: "Ciao Questo è un test al 100"

// Esempio 2: Sanitizzatore per contesti diversi
const Sanitizer = {
    
    // Pulisce per creare un ID o "slug" (es. per un URL)
    forId(str) {
        return str
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')    // Solo lettere, numeri, spazi, trattini
            .replace(/\s+/g, '-')               // Spazi -> trattini
            .replace(/-+/g, '-')                // Trattini multipli -> uno
            .replace(/^-|-$/g, '');             // Rimuove trattini all'inizio/fine
    },
    
    // Il più importante: Sanitizzazione per HTML (Prevenire XSS)
    // Non usare regex! È troppo facile sbagliare.
    // Usa il trucco del 'textContent'!
    forHTML(str) {
        const div = document.createElement('div');
        // Impostando textContent, il browser "uccide"
        // qualsiasi tag HTML (es. <script>) e lo tratta come testo.
        div.textContent = str; 
        
        // Rileggendo innerHTML, ottieni la versione "escapata" e sicura.
        // <script> diventa &lt;script&gt;
        return div.innerHTML;
    }
};

console.log(Sanitizer.forId(" L'ultimo caffè -- a €2.50! "));
// Output: "lultimo-caff-a-250"
```

#### Validazione Email e Pattern Comuni

Per la validazione complessa, non reinventare la ruota. Usa pattern Regex collaudati.

```javascript
const Validator = {
    
    patterns: {
        // Questa regex è lo standard "pratico" (RFC 5322).
        // Non provare a scriverla da solo!
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        
        // Esempio di password (min 8, 1 maiuscola, 1 minuscola, 1 numero)
        passwordStrong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        
        // Data italiana
        dateIT: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    },
    
    // Funzione di validazione semplice (Sì/No)
    validate(type, value) {
        if (!this.patterns[type]) {
            console.error(`Validatore "${type}" non trovato.`);
            return false;
        }
        return this.patterns[type].test(value);
    },
    
    // Funzione di validazione con feedback (per UI)
    validatePassword(password) {
        const errors = []; // Un accumulatore di errori!
        
        if (password.length < 8) {
            errors.push("Deve contenere almeno 8 caratteri");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("Deve contenere almeno una lettera maiuscola");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("Deve contenere almeno una lettera minuscola");
        }
        if (!/\d/.test(password)) {
            errors.push("Deve contenere almeno un numero");
        }
        
        return {
            valid: errors.length === 0,
            errors: errors // Restituisce la lista di problemi
        };
    }
};

// --- Esempio di utilizzo ---
console.log(Validator.validate('email', 'test@test.com')); // true
console.log(Validator.validate('email', 'test.com'));    // false

const passwordFeedback = Validator.validatePassword("pass");
console.log(passwordFeedback.valid); // false
console.log(passwordFeedback.errors); 
// ["Deve contenere almeno 8 caratteri", "Deve contenere almeno una lettera maiuscola", ...]
```

<br>
<br>
<br>
<br>
<br>
<br>











### 38\. Pattern di Gestione Stato 🎯

La **Gestione dello Stato** (State Management) è come **dirigere un'orchestra**. Lo "Stato" è la *partitura musicale* (i dati: chi è loggato, il punteggio, gli articoli nel carrello). Se ogni musicista (componente UI) ha la sua versione leggermente diversa della partitura (dati duplicati o non sincronizzati), il risultato sarà il caos.

Questi pattern servono a garantire che tutti stiano suonando dallo **stesso identico spartito**.

#### Il Pattern "Single Source of Truth" (SSOT)

Questo è il principio più importante: **lo stato della tua applicazione deve vivere in un unico posto**.

*Analogo:* Invece di avere **appunti sparsi** su post-it per tutto l'ufficio (un `userName` nel header, un altro `userName` nel profilo, una `listaTask` qui e una là), hai un **unico "libro mastro" centrale** (o una lavagna principale) a cui tutti fanno riferimento.

**Il Problema (Senza SSOT):**

1.  Un componente `Header` ha una variabile `userName = "Mario"`.
2.  Un componente `ProfilePage` ha *un'altra* variabile `userName = "Mario"`.
3.  L'utente aggiorna il suo nome in "Luigi" nella `ProfilePage`.
4.  La `ProfilePage` aggiorna la *sua* variabile.
5.  **RISULTATO (BUG):** La `ProfilePage` ora dice "Luigi", ma l'`Header` dice ancora "Mario". I dati non sono sincronizzati.

**La Soluzione (Con SSOT):**
Esiste un unico oggetto `StateManager` (il "libro mastro").

```javascript
// Un "libro mastro" centralizzato (Single Source of Truth)
const StateManager = {
    // 1. Stato privato (il vero libro mastro)
    _state: {
        user: { nome: "Mario" },
        tasks: [],
        settings: { theme: 'light' }
    },
    
    // 2. Un "cancello" per LEGGERE (ritorna sempre una copia)
    getState() {
        // Ritorna una copia per evitare modifiche accidentali
        return JSON.parse(JSON.stringify(this._state));
    },
    
    // 3. Un "cancello" per SCRIVERE (l'unico modo per cambiare)
    setState(path, value) {
        // Es. path = "user.nome", value = "Luigi"
        const keys = path.split('.');
        let target = this._state;
        
        // Naviga l'oggetto per trovare dove scrivere
        for (let i = 0; i < keys.length - 1; i++) {
            target = target[keys[i]];
        }
        
        target[keys[keys.length - 1]] = value;
        
        // 4. Notifica tutti che qualcosa è cambiato!
        this._notify(path, value);
    },
    
    // Sistema di notifica (vedi "Event-Driven")
    _listeners: [],
    subscribe(callback) {
        this._listeners.push(callback);
    },
    _notify(path, value) {
        this._listeners.forEach(cb => cb(path, value));
    }
};
```

  * **Come funziona ora:**
    1.  `Header` e `ProfilePage` *leggono* entrambi da `StateManager.getState()`.
    2.  L'utente cambia nome. `ProfilePage` chiama `StateManager.setState("user.nome", "Luigi")`.
    3.  Lo `StateManager` aggiorna il *suo* stato e `_notify()` allerta tutti i "sottoscrittori".
    4.  L'`Header`, essendo un sottoscrittore, riceve la notifica e aggiorna la sua UI.
    5.  **RISULTATO:** Tutta l'app è perfettamente sincronizzata.

-----

#### Pattern CRUD per Liste

**CRUD** è un acronimo che descrive le quattro operazioni fondamentali per gestire qualsiasi collezione di dati (come una lista di task, un carrello della spesa, una lista di utenti).

  * **C**reate (Creare)
  * **R**ead (Leggere)
  * **U**pdate (Aggiornare)
  * **D**elete (Eliminare)

*Analogo:* È come gestire una **biblioteca** di libri (task).

Creare una classe (come un `TaskManager`) è il modo più pulito per incapsulare questa logica, combinando lo stato (SSOT) con i metodi per manipolarlo.

```javascript
class TaskManager {
    constructor() {
        // SSOT: 'this.tasks' è l'unica fonte di verità per i task
        this.tasks = [];
        this.loadTasksFromStorage(); // Carica dati salvati
    }
    
    // --- CREATE ---
    // (Aggiungere un nuovo libro alla biblioteca)
    addTask(text) {
        const newTask = {
            id: `task-${Date.now()}`, // ID unico
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        this.tasks.push(newTask);
        this.save(); // Salva dopo ogni modifica
        this.render(); // Aggiorna l'UI
        return newTask;
    }
    
    // --- READ ---
    // (Trovare libri nella biblioteca)
    getTask(id) {
        return this.tasks.find(task => task.id === id);
    }
    
    getAllTasks() {
        return [...this.tasks]; // Ritorna una *copia* (Immutabilità!)
    }
    
    getFilteredTasks(filter) { // Es. filter = 'completed'
        if (filter === 'completed') {
            return this.tasks.filter(t => t.completed);
        }
        if (filter === 'pending') {
            return this.tasks.filter(t => !t.completed);
        }
        return this.getAllTasks();
    }
    
    // --- UPDATE ---
    // (Cambiare la copertina o il titolo di un libro)
    updateTask(id, updates) { // 'updates' è un oggetto, es. { text: "Nuovo testo" }
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) return false; // Non trovato
        
        // Unisci il vecchio task con le nuove modifiche
        this.tasks[index] = {
            ...this.tasks[index], // Vecchi dati
            ...updates,           // Nuovi dati (sovrascrivono)
            updatedAt: new Date().toISOString()
        };
        
        this.save();
        this.render();
        return this.tasks[index];
    }
    
    // Metodo helper per un update comune
    toggleTask(id) {
        const task = this.getTask(id);
        if (task) {
            this.updateTask(id, { completed: !task.completed });
        }
    }
    
    // --- DELETE ---
    // (Rimuovere un libro dalla biblioteca)
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) return false;
        
        this.tasks.splice(index, 1); // .splice() modifica l'array originale
        this.save();
        this.render();
        return true;
    }
    
    // --- METODI DI SUPPORTO ---
    save() {
        // Usa i pattern di localStorage (Parte VI)
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    loadTasksFromStorage() {
        // Usa il pattern "Gestire il Primo Avvio"
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
    
    render() {
        // Logica per aggiornare il DOM (Parte IV)
        console.log("Aggiorno l'interfaccia con i nuovi task...", this.tasks);
    }
}
```

-----

#### Pattern di Reset e Stato Iniziale

Come gestisci il "reset di fabbrica" della tua applicazione? (Es. quando un utente fa il logout, o inizia una "Nuova Partita").

**Il Problema:** Potresti essere tentato di resettare manualmente ogni pezzo dello stato.

```javascript
// CATTIVO: Facile dimenticare qualcosa 👎
function resetApp() {
    StateManager.state.user = null;
    StateManager.state.tasks = [];
    StateManager.state.settings.theme = 'light';
    // Ops! Ho dimenticato di resettare state.ui.isLoading!
}
```

**La Soluzione (Pattern: Stato Iniziale come Funzione):**
Definisci il tuo stato iniziale *non* come un oggetto statico, ma come una **funzione che *restituisce* un nuovo oggetto**.

*Analogo:* Invece di avere un *singolo* "modulo di iscrizione" originale che tutti scarabocchiano (un oggetto), hai una **pila di moduli nuovi e puliti** (una funzione). Per resettare, butti via il modulo scarabocchiato e ne prendi uno nuovo dalla pila.

```javascript
// 1. Definisci la "fabbrica" di stato iniziale
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

// 2. Il tuo manager usa la fabbrica per iniziare
const FormManager = {
    state: createInitialState(), // Crea il primo "modulo"
    
    // 3. Il reset ora è pulito, sicuro e completo!
    reset() {
        // Butta via il vecchio stato e ne prende uno nuovo di fabbrica
        this.state = createInitialState();
        this.render(); // Aggiorna l'UI
    },
    
    // ...altri metodi...
    render() {
        console.log("Renderizzo lo stato...", this.state);
    }
};

// Uso:
FormManager.state.form.nome = "Mario"; // Modifico lo stato
FormManager.reset(); // Resettato!
```

**Perché una funzione e non un oggetto `const`?**
Se `createInitialState` fosse un oggetto `const`, quando lo assegni a `state` (`this.state = initialState`), staresti assegnando un *riferimento* (un "collegamento"). Se modificassi `this.state.form.nome`, staresti modificando *anche* l'originale `initialState`\! La funzione garantisce che tu ottenga sempre una **copia fresca e pulita**.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>






## Tabella di Riferimento Rapido Completa

| Categoria | Strumento/Concetto | Analogia/Scopo | Esempio/Sintassi |
| :--- | :--- | :--- | :--- |
| **FONDAMENTI - VARIABILI** |
| | `let` | La Lavagna: valore modificabile | `let counter = 0;`<br>`counter = 1;` |
| | `const` | La Cassaforte: riferimento immutabile | `const USER_ID = 123;`<br>`const user = {nome: 'Mario'}; user.nome = 'Luigi';` (OK) |
| | `var` | Il Vecchio Modo (evitare\!) | Ha `function scope` e `hoisting` problematico |
| | `null` vs `undefined` | Vuoto intenzionale vs. Vuoto accidentale | `let x = null;` (scelto da te)<br>`let y;` (il valore di `y` è `undefined`) |
| **FONDAMENTI - TIPI DI DATI** |
| | String | Testo con metodi | `const s = "Ciao";` |
| | Template Literals (` ) | Stringhe con "buchi" per variabili |  ` `Ciao ${nome}` `<br>` `Totale: ${prezzo * 1.22}` \`\` |
| | Escape chars | Caratteri speciali | `\n` (a capo)<br>\`\\t\` (tab)<br>\`"\` (virgoletta)<br>\`\\\` (backslash) |
| | \`.split()\` | Affettatrice di stringhe | \`"a-b-c".split('-')\` → \`['a', 'b', 'c']\`<br>\`"ciao".split('')\` → \`['c', 'i', 'a', 'o']\` |
| | \`.charCodeAt()\` | Carattere → Numero (Vecchio) | \`"A".charCodeAt(0)\` → \`65\` (si rompe con emoji "🎉") |
| | \`.codePointAt()\` | Carattere → Numero (Moderno) | \`"🎉".codePointAt(0)\` → \`127881\` (corretto) |
| | \`String.fromCharCode()\` | Numero → Carattere (Vecchio) | \`String.fromCharCode(65)\` → \`"A"\` (non gestisce emoji) |
| | \`String.fromCodePoint()\` | Numero → Carattere (Moderno) | \`String.fromCodePoint(127881)\` → \`"🎉"\` |
| | \`.startsWith()\` | Controllo Inizio Stringa (Intento) | \`file.startsWith("doc")\` → \`true\`<br>\`"Ciao".startsWith("C")\` → \`true\` |
| | Number | IEEE 754, interi e decimali | \`const n = 3.14;\` |
| | Valori Speciali | Non-numeri e infiniti | \`Infinity\`, \`-Infinity\`<br>\`NaN\` (non è uguale a se stesso) |
| | \`isNaN()\` | Doganiere confuso: "È... NaN?" | \`isNaN("ciao")\` → \`true\` (converte prima)<br>\`isNaN(null)\` → \`false\` (perché \`Number(null)\` è 0) |
| | \`Number.isNaN()\` | Doganiere rigoroso: "È *già* NaN?" | \`Number.isNaN("ciao")\` → \`false\`<br>\`Number.isNaN(NaN)\` → \`true\` |
| | \`Number()\` | Conversione "tutto o niente" (rigorosa) | \`Number("42px")\` → \`NaN\`<br>\`Number("123")\` → \`123\` |
| | \`parseInt()\` | Estrattore di interi (tollerante) | \`parseInt("42.5px", 10)\` → \`42\`<br>\`parseInt("1010", 2)\` → \`10\` (binario) |
| | \`parseFloat()\` | Estrattore di decimali (tollerante) | \`parseFloat("42.5px")\` → \`42.5\`\<br\`parseFloat("3.14.15")\` → \`3.14\` |
| | \`Math\` | Calcolatrice scientifica integrata | Oggetto statico, es. \`Math.PI\` |
| | \`Math.floor()\` | Arrotonda al pavimento | \`Math.floor(4.9)\` → \`4\` |
| | \`Math.ceil()\` | Arrotonda al soffitto | \`Math.ceil(4.1)\` → \`5\`<br>\`Math.ceil(0.1)\` → \`1\` |
| | \`Math.round()\` | Arrotonda al più vicino | \`Math.round(4.5)\` → \`5\`<br>\`Math.round(4.4)\` → \`4\` |
| | \`Math.random()\` | Generatore di casualità (0 - 0.99...) | \`Math.random()\`<br>\`Math.floor(Math.random() \* 10) + 1\` (da 1 a 10) |
| | \`Math.pow()\` vs \`**\` | Elevamento a potenza | \`Math.pow(2, 3)\` → \`8\`<br>\`2 \*\* 3\` → \`8\` (moderno) |
| | \`Math.sqrt()\` | Radice quadrata (Leggibilità) | \`Math.sqrt(9)\` → \`3\` (meglio di \`9 \*\* 0.5\`) |
| | Problema (IEEE-754) | Calcoli decimali "sbagliati" | \`0.1 + 0.2\` → \`0.30000000000000004\` |
| | \`.toFixed()\` | Soluzione per *visualizzare* (stringa\!) | \`(0.1 + 0.2).toFixed(2)\` → \`"0.30"\` |
| | \`parseFloat()\` (con \`toFixed\`) | Soluzione per *calcolare* (numero) | \`parseFloat((0.1 + 0.2).toFixed(2))\` → \`0.30\` |
| | \`new Date()\` | Crea un oggetto data | \`new Date()\` (ora)<br>\`new Date("2025-01-15")\` |
| | Metodi Tricky (Date) | Attenzione ai bug\! | \`getMonth()\` → \`0-11\` (Gennaio è 0\!)<br>\`getDay()\` → \`0-6\` (Domenica è 0\!) |
| | \`Date.now()\` | Timestamp (millisecondi) | \`Date.now()\` (per misurare performance o ID unici) |
| | Boolean | Vero o Falso | \`true\` / \`false\` |
| | Truthy/Falsy | La "zona grigia" della verità | 6 falsy: \`false, 0, "", null, undefined, NaN\`<br>Tutto il resto è truthy (anche \`[]\` e \`{}\`) |
| | Creazione \`[]\` vs \`Array()\` | Scatola per uova vuota | \`Array(5)\` → \`[ \<5 empty items\> ]\` (non \`[5]\`) |
| | \`.length\` | Quanti elementi (proprietà) | \`arr[arr.length - 1]\` (ultimo elemento)<br>\`arr.length = 0\` (svuota array) |
| | \`Set\` e \`.size\` | Collezione di *unici* | \`new Set([1,1,2]).size\` → \`2\`<br>\`[...new Set([1,1,2])]\` → \`[1, 2]\` |
| | \`.push()\` / \`.pop()\` | Modifica la *fine* (Distruttivo) | \`arr.push(3)\` (aggiunge)<br>\`arr.pop()\` (rimuove) |
| | \`.unshift()\` / \`.shift()\` | Modifica l'*inizio* (Distruttivo) | \`arr.unshift(1)\` (aggiunge)<br>\`arr.shift()\` (rimuove) |
| | \`.splice()\` | Coltellino svizzero (Distruttivo) | \`arr.splice(1, 2, 'X')\` (da indice 1, rimuovi 2, aggiungi 'X') |
| | \`.sort()\` | Ordina (Distruttivo\!) | \`arr.sort()\` (alfabetico\!)<br>\`arr.sort((a, b) =\> a - b)\` (numerico) |
| | \`.filter()\` | Setaccio (Crea nuovo array) | \`arr.filter(n =\> n \> 2)\`<br>\`arr.filter(u =\> u.attivo)\` |
| | \`.find()\` | Detective (Trova il primo) | \`arr.find(n =\> n \> 2)\` → \`3\` (o \`undefined\`) |
| | \`.findIndex()\` | Detective (Trova l'indice) | \`arr.findIndex(n =\> n \> 2)\` → \`2\` (o \`-1\`) |
| | \`.includes()\` | Verificatore (C'è?) | \`arr.includes(3)\` → \`true\` |
| | \`.indexOf()\` | Cercatore (Dov'è?) | \`arr.indexOf(3)\` → \`2\` (o \`-1\`) |
| | \`.join()\` | Incollatore (Array → Stringa) | \`['a','b'].join('-')\` → \`"a-b"\`<br>\`['c','i','a','o'].join('')\` → \`"ciao"\` |
| | \`.slice()\` | Fotocopiatrice (Crea nuovo array) | \`arr.slice()\` (copia)<br>\`arr.slice(1, 3)\` (da indice 1 a 3 escluso) |
| | \`.map()\` | Fabbrica di trasformazione | \`arr.map(n =\> n \* 2)\`<br>\`arr.map(u =\> u.nome)\` |
| | \`.reduce()\` | Caldaia (Array → Valore singolo) | \`arr.reduce((acc, n) =\> acc + n, 0)\` (somma)<br>\`arr.reduce((obj, k) =\> ({...obj, [k]: true}), {})\` |
| | \`.some()\` | Almeno uno? (true/false) | \`arr.some(n =\> n \> 2)\` → \`true\` |
| | \`.every()\` | Tutti? (true/false) | \`arr.every(n =\> n \> 0)\` → \`true\` |
| | \`.fill()\` | Ponte per \`.map()\` su \`Array(N)\` | \`Array(3).fill(0)\` → \`[0, 0, 0]\`<br>\`Array(3).fill().map((*, i) =\> i)\` → \`[0, 1, 2]\` |
| | Pattern: Creare Range | Unisce \`Array(N)\`, \`.fill\`, \`.map\` | \`Array(5).fill().map((*, i) =\> i + 1)\` → \`[1, 2, 3, 4, 5]\` |
| | Logica: Mediana | Trova il centro (richiede sort) | Gestire \`length % 2 === 0\` (pari) vs \`else\` (dispari) |
| | Creazione Oggetti \`{}\` | Contenitore \`chiave: valore\` | \`const user = { nome: "Mario" }\` |
| | Oggetti Annidati | Oggetti dentro oggetti (Organizzazione) | \`user.indirizzo = { citta: "Roma" }\`<br>\`user.keys = { right: false }\` |
| | Accesso \`.\` vs \`[]\` vs \`?.\` | Punto (statico) vs Parentesi (dinamico) vs Safe | \`obj.nome\` vs \`obj[miaVar]\`<br>\`obj.lavoro?.stipendio\` (safe) |
| | Shorthand Properties | Scorciatoia ES6 | \`const user = { nome, eta }\` (se \`nome\` e \`eta\` esistono) |
| | Destructuring | "Spacchettare" oggetti | \`const { nome, eta } = user;\`<br>\`const { nome: nomeUtente } = user;\` |
| | \`Object.keys()\` | Array di sole chiavi | \`Object.keys(user)\` → \`['nome', 'eta']\` |
| | \`Object.values()\` | Array di soli valori | \`Object.values(user)\` → \`['Mario', 30]\` |
| | \`Object.entries()\` | Array di coppie \`[k, v]\` | \`Object.entries(user).forEach(([key, val]) =\> ...)\` |
| | \`hasOwnProperty()\` | Controllo proprietà (Vecchio) | \`user.hasOwnProperty('nome')\` → \`true\` |
| | \`Object.hasOwn()\` | Controllo proprietà (Moderno) | \`Object.hasOwn(user, 'nome')\` → \`true\` |
| | Pattern: Mappa Frequenza | Contare occorrenze | \`counts[item] = (counts[item] || 0) + 1\` |
| FONDAMENTI - OPERATORI |
| | \`||\` (OR) | Selettore di Default (usa primo truthy) | \`const nome = input || "Ospite"\`<br>\`valore = (valore || 0) + 1\` |
| | \`\!\` (NOT) e "Toggle" | Invertitore Booleano | \`isMenuOpen = \!isMenuOpen;\`<br>\`if (\!user) { ... }\` |
| | \`...\` (Spread) | "Svuota" scatola (Array/Oggetti) | \`const copia = [...arr];\`<br>\`const o2 = {...o1, b: 2};\` |
| | \`**\` (Esponenziazione) | Elevamento a potenza (Moderno) | \`2 \*\* 3\` → \`8\`<br>\`9 \*\* 0.5\` → \`3\` |
| | Assegnazione a Catena | Inizializzazione multipla (rischiosa) | \`a = b = c = 10;\` (Evitare se possibile) |
| **CONTROLLO - OUTPUT E COMMENTI** |
| | \`console\` | Cabina di pilotaggio (Debug) | \`console.log(variabile)\`<br>\`console.error("Errore\!")\` |
| | \`console.table()\` | Visualizza array/oggetti | \`console.table(arrayDiOggetti)\` |
| | Commenti \`//\` \`/\* */\` | Note (Perché, non Cosa) | \`// Contatore tentativi falliti\` |
| | JSDoc \`/*\* */\` | Documentazione formale | \`/*\* @param {string} nome ... */\` |
| | Tag \`TODO\` \`FIXME\` \`NOTE\` | Organizzazione lavoro | \`// FIXME: Non gestisce numeri negativi\` |
| **CONTROLLO - FLUSSO** |
| | \`if/else if/else\` | Bivio decisionale | \`if (x \> 10) { ... } else { ... }\` |
| | Operatore Ternario | \`if/else\` compatto (per assegnazioni) | \`const stato = eta \>= 18 ? "Adulto" : "Minore"\`<br>\`el.style.display = isVisible ? "block" : "none"\` |
| | \`switch\` | Centralino (per valori statici) | \`switch (azione) { case 'salva': ... break; default: ... }\` |
| | Return Early (Guard Clauses) | Buttafuori (Valida e esci subito) | \`function f(user) { if (\!user) return; ... }\` |
| **CONTROLLO - CICLI** |
| | \`for\` | Robot industriale (sai n. giri) | \`for (let i = 0; i \< 10; i++) { ... }\` |
| | \`while\` | Guardia notturna (condizione) | \`while (x \< 10) { x++; }\` |
| | \`do...while\` | Prima fai, poi chiedi (almeno 1 giro) | \`do { ... } while (cond);\` (per menu) |
| | \`for...of\` | Esploratore elegante (per *valori*) | \`for (const el of array) { ... }\`<br>\`for (const char of "ciao") { ... }\` |
| | \`forEach\` | Caposquadra (solo per Array) | \`arr.forEach((el, i) =\> console.log(i, el))\` |
| | \`break\` | Stop di emergenza (Esci dal ciclo) | \`if (x === 5) break;\` |
| | \`continue\` | Salta al prossimo giro | \`if (x % 2 === 0) continue;\` |
| **FUNZIONI E SCOPE** |
| | Dichiarazione vs Arrow \`=\>\` | \`function\` (ha \`this\`) vs \`=\>\` (eredita \`this\`) | \`function f() {}\` vs \`const f = () =\> {}\` |
| | Return Implicito (Arrow) | One-liner (senza \`{}\`) | \`n =\> n \* 2\` |
| | Return Oggetto (Arrow) | Richiede \`()\` attorno a \`{}\` | \`() =\> ({ nome: "Mario" })\` (NON \`() =\> { nome: "Mario" }\`) |
| | Parametri di Default | Valori di fallback | \`function f(n = 10) { ... }\` |
| | Destrutturazione (Parametri) | "Spacchetta" argomenti | \`function f({ id, nome }) { ... }\`<br>\`function g([primo, secondo]) { ... }\` |
| | Callback | Ricetta passata come argomento | \`arr.map(n =\> n \* 2)\` (\`n =\> n*2\` è la callback)<br>\`btn.addEventListener('click', () =\> ...)\` |
| | Currying | Fabbrica di funzioni specializzate | \`const add = a =\> b =\> a + b;\`<br>\`const add10 = add(10); add10(5);\` → \`15\` |
| | Convenzione Underscore \`\_\` | Parametro ignorato | \`arr.map((\_el, index) =\> index)\`<br>\`btn.addEventListener('click', \_ =\> console.log('click'))\` |
| | Global Scope | Piazza pubblica (visibile a tutti) | Variabile fuori da tutto |
| | Local/Function Scope | Salotto privato (visibile solo in \`function\`) | \`function f() { let x = 5; }\` |
| | Block Scope | Ripostiglio (visibile solo in \`{}\`) | \`let\` e \`const\` in \`if\`, \`for\`, \`while\` |
| | Scope Chain | Ricerca chiavi (Tasca → Stanza → Casa) | Cerca da interno a esterno |
| **CLASSI (OOP)** |
| | \`class\` | Stampo per biscotti (Progetto) | \`class Giocatore { ... }\` |
| | Zucchero Sintattico | Maschera moderna per \`prototype\` | \`typeof Giocatore\` → \`"function"\` |
| | \`constructor()\` | Reparto assemblaggio (chiamato da \`new\`) | \`constructor(x, y) { this.x = x; }\` |
| | \`new\` | Comando "Crea" (I 4 passaggi) | \`const p = new Giocatore(10, 20)\` |
| | \`this\` | Contesto ("questo specifico biscotto") | \`this.vite = 3;\` |
| | Proprietà di Classe | Impostazioni di fabbrica | \`class G { vite = 3; }\` (fuori dal constructor) |
| | Metodi (nel \`prototype\`) | Zaino condiviso (Abilità) | \`salta() { this.y -= 10; }\` |
| | Pattern: \`claim()\` | Metodo per "disattivare" un'istanza | \`this.width = 0; this.y = Infinity; this.claimed = true;\` |
| **DOM - CARICAMENTO** |
| | Posizionamento \`\<script\>\` | \`head\` vs \`body\` | \`\<script\>\` prima di \`\</body\>\` (vecchio ma sicuro) |
| | \`defer\` (Best Practice) | Scarica in parallelo, esegui dopo | \`\<script src="..." defer\>\</script\>\` (in \`head\`) |
| | \`window.onload\` | Aspetta *tutto* (immagini incluse) | Lento, da evitare se non serve |
| | \`DOMContentLoaded\` | Aspetta solo HTML/DOM (Veloce) | \`window.addEventListener('DOMContentLoaded', () =\> ...)\` |
| **DOM - MANIPOLAZIONE** |
| | \`querySelector\` / \`All\` | GPS Moderno (Usa selettori CSS) | \`document.querySelector(".btn-primario")\`<br>\`document.querySelectorAll("ul \> li")\` |
| | \`getElementById\` | Veloce per ID | \`document.getElementById("header-principale")\` |
| | \`getElementsByClassName\` | Vecchio modo (Restituisce \`HTMLCollection\` *live*) | \`document.getElementsByClassName("nota")\` |
| | Convertire \`NodeList\`/\`Coll.\` | Trasforma in vero Array | \`[...nodelist]\`<br>\`Array.from(nodelist)\` |
| | Proprietà vs Metodi | Sostantivi (dati) vs Verbi (azioni) | \`el.id = "..."\` (Prop) vs \`el.remove()\` (Metodo) |
| | Attributi HTML vs Prop. DOM | Progetto vs Casa reale | \`input.value\` (realtà) vs \`input.getAttribute('value')\` (progetto) |
| | \`document.createElement()\` | Fabbrica (Crea in memoria) | \`const p = document.createElement("p")\` |
| | \`container.appendChild()\` | Installazione (Aggiungi alla pagina) | \`container.appendChild(p)\` |
| | \`textContent\` (Sicuro) | Pennarello (Solo testo, no HTML) | \`el.textContent = "Ciao \<strong\>"\` → \`Ciao \<strong\>\` |
| | \`innerHTML\` (Pericoloso) | Penna magica (Interpreta HTML) | \`el.innerHTML = "\<strong\>Ciao\</strong\>"\` → **Ciao** (Rischio XSS) |
| | \`style.property\` | Stile inline (sporco) | \`el.style.backgroundColor = "red"\` (usa camelCase) |
| | \`classList\` (Best Practice) | Etichetta (JS stato, CSS aspetto) | \`el.classList.add('is-hidden')\`<br>\`el.classList.toggle('active')\` |
| | \`disabled\` | Attributo Booleano (On/Off) | \`btn.disabled = true;\` (non cliccabile)<br>\`btn.disabled = false;\` (riabilita) |
| | \`disabled\` vs \`readonly\` | Porta sbarrata vs Vetro chiuso | \`readonly\` è visibile e viene inviato col form |
| | Child Combinator \`\>\` | Selettore "Figlio Diretto" | \`div \> p\` (solo figli, non nipoti) |
| **DOM - EVENTI** |
| | \`onclick\` vs \`addEventListener\` | Linea singola vs Centralino | \`addEventListener\` (moderno, multipli listener) |
| | Riferimento (\`fn\`) vs Esecuzione (\`fn()\`) | Manuale vs Torta (Passa il manuale\!) | \`el.addEventListener('click', miaFunzione)\` ✅<br>\`el.addEventListener('click', miaFunzione())\` ❌ |
| | Oggetto \`event\` | Report dettagliato | \`e.target\` (chi ha scatenato)<br>\`e.key\` (tasto premuto) |
| | \`e.preventDefault()\` | Freno di emergenza (Stop azione default) | \`form.addEventListener('submit', e =\> e.preventDefault())\` (stop refresh) |
| | Event Delegation | Buttafuori (1 listener sul genitore) | \`ul.addEventListener('click', e =\> { if(e.target.tagName === 'LI') ... })\` |
| | Problema: \`this\` e listener | \`this\` diventa il bottone, non la classe | \`btn.addEventListener('click', this.metodo)\` ❌ |
| | Soluzione: \`.bind(this)\` | Incolla \`this\` con supercolla | \`btn.addEventListener('click', this.metodo.bind(this))\` ✅ |
| | Soluzione: Arrow Function | Eredita \`this\` (Moderno) | \`btn.addEventListener('click', () =\> this.metodo())\` ✅ |
| | \`keydown\` vs \`keyup\` | Tasto giù vs Tasto su (Usa questi) | \`e.key === "ArrowUp"\` |
| | \`keypress\` (Deprecato) | Carattere digitato (Ignora frecce, ecc) | Non usare |
| | \`change\` vs \`input\` | "Finito" (blur) vs "Tempo Reale" (ogni tasto) | \`input\` per UX reattiva (es. ricerca live)<br>\`change\` per validazione finale |
| | \`submit\` | Evento del \`\<form\>\` | Usare \`e.preventDefault()\` |
| | \`confirm()\` | Dialogo bloccante (Vecchio) | \`const sì = confirm("Sicuro?")\` (Evitare se possibile) |
| **DOM - DIALOG E MODALI** |
| | \`\<dialog\>\` | Palco portatile (Nativo HTML) | \`\<dialog id="modale"\>...\</dialog\>\` |
| | \`showModal()\` | Faro (Blocca pagina, backdrop, Esc) | \`dialog.showModal()\` (Quello che vuoi 99%) |
| | \`show()\` | Pannello info (Non-modale) | \`dialog.show()\` (Pagina ancora attiva) |
| | \`close()\` | Uscita di scena | \`dialog.close("valore")\`<br>\`dialog.addEventListener('close', () =\> ...)\` |
| **API CANVAS E GIOCHI** |
| | \`getContext("2d")\` | Aprire l'astuccio (Penne, pennarelli) | \`const ctx = canvas.getContext("2d")\` |
| | Coordinate (0,0) | Alto a sinistra | \`Y\` aumenta scendendo (\`ctx.fillRect(0, 10, ...)\` è 10px *dall'alto*) |
| | \`fill\` vs \`stroke\` | Pennarello (pieno) vs Penna (bordo) | \`ctx.fillStyle = "red"\`<br>\`ctx.strokeStyle = "blue"\` |
| | Forme (Rettangoli, Percorsi) | Scorciatoie (\`fillRect\`) vs Ricetta (\`beginPath\`) | \`ctx.fillRect(10, 10, 50, 50)\`<br>\`ctx.beginPath(); ctx.arc(...); ctx.fill();\` |
| | Risoluzione vs Dimensione | Pixel (JS) vs Dimensione (CSS) | \`canvas.width = 1920\` vs \`canvas.style.width = "100%"\` |
| | Problema: Effetto Sfocato | Risoluzione 300x150 "stirata" | Se JS \`width\` non combacia con CSS \`width\` |
| | Soluzione: Sincronizzare | Imposta JS \`width\` uguale a \`innerWidth\` | \`canvas.width = window.innerWidth\` (cancella il canvas\!) |
| | \`requestAnimationFrame\` | Motore del gioco (Loop 60 FPS) | \`function loop() { ...; requestAnimationFrame(loop); }\` |
| | Vantaggi vs \`setInterval\` | Sincronizzato, Pausa automatica, Fluido | \`rAF\` è il re delle animazioni (non consuma batteria in background) |
| | Logica: Gravità | Accel. modifica Velocità, Velocità modifica Posizione | \`velY += grav; posY += velY;\` |
| | Logica: Flag Debouncing | Tornello (Evita 60 trigger/sec) | \`if (coll && \!isHit) { isHit = true; ... }\` |
| | Logica: Responsive | Zoom automatico (Adatta al viewport) | \`player.width = proportionalSize(100)\` |
| **PATTERN E BEST PRACTICE** |
| | Pattern di Accumulo | Riempire il secchio (loop) | \`let total = 0; arr.forEach(n =\> total += n)\`<br>\`let html = ""; arr.forEach(s =\> html += \`\<li\>${s}\</li\>\`)\` |
| | Flag Booleane | Interruttori di stato (On/Off) | \`let isLoading = true;\`<br>\`let hasError = false;\` |
| | Variabili di Stato | Semaforo (Stati multipli) | \`let formState = "submitting"\` (vs \`"editing"\`, \`"error"\`) |
| | Configuration Objects | Pannello di controllo (No "numeri magici") | \`const CONFIG = { MAX\_RETRIES: 3 }\` |
| | \`try-catch\` | Rete di sicurezza (Gestione errori) | \`try { JSON.parse(str) } catch (e) { ... }\`<br>\`async function f() { try { await fetch(...) } catch(e) { ... } }\` |
| | Naming Convention | Nomi parlanti (Codice leggibile) | \`isVisible\` (bool)<br>\`fetchUsers\` (funz)<br>\`users\` (array) |
| | Testing Incrementale | Assaggiare il sugo (Debug con \`console.log\`) | Scrivi-testa-scrivi-testa |
| | Separazione Responsabilità | Una funzione = un compito (SoC) | Logica (JS) vs Presentazione (CSS) |
| | \`style.display\` vs \`classList\` | Vernice a mano (sporco) vs Etichetta (pulito) | Usa \`classList\` (JS stato, CSS aspetto)<br>\`el.classList.toggle("is-hidden")\` |
| | \`innerHTML =\` vs \`+=\` | Sostituisci (OK) vs Ricrea (LENTO\!) | \`+=\` distrugge e ricrea tutto il DOM (usa \`appendChild\`\!) |
| | \`.className\` vs \`.classList\` | Stringa intera vs Kit chirurgico | Usa \`classList\` (\`.add\`, \`.remove\`) |
| | \`.textContent\` vs \`innerHTML\` | Pennarello (Sicuro) vs Penna Magica (Pericoloso) | Usa \`textContent\` per dati utente (previene XSS) |
| | Immutabilità | Fare fotocopie, non modificare originali | \`const copia = [...arr, 4]\` (Evita "Side Effects") |
| | \`.sort()\` vs \`.toSorted()\` | Distruttivo (muta) vs Immutabile (copia) | \`.toSorted()\` (moderno, non modifica l'originale)<br>\`.slice().sort()\` (classico) |
| | Stile: Leggibilità vs Concisa | Raccontare storia vs Essere furbi | Leggibilità \> Concisa (per debug)<br>\`const doppi = arr.map(n =\> n \* 2)\` (conciso ok) |
| | Algoritmo di Scambio (Swap) | Giostra (\`temp\`) vs Magia (Destructuring) | \`[a, b] = [b, a]\` (moderno)<br>\`let temp = a; a = b; b = temp;\` (classico) |
| | Evoluzione Codice | Da Hardcoded a DRY a Event-Driven | \`DRY\` = Don't Repeat Yourself (usa funzioni) |
| **STORAGE (localStorage)** |
| | localStorage | Cassetto (Memoria a lungo termine) | \`localStorage.setItem('chiave', 'valore')\`<br>\`localStorage.getItem('chiave')\` |
| | Problema: Muro delle Stringhe | Il fax (Salva solo stringhe) | \`localStorage.setItem('user', {nome: 'a'})\` → \`"[object Object]"\` |
| | \`JSON.stringify()\` | Smontatore (Oggetto → Stringa) | \`localStorage.setItem('user', JSON.stringify(user))\` |
| | \`JSON.parse()\` | Rimontatore (Stringa → Oggetto) | \`const user = JSON.parse(localStorage.getItem('user'))\` |
| | Gestire il Primo Avvio | Fallback (Piano B) | \`const data = JSON.parse(localStorage.getItem('k')) || []\` |
| | Ispezionare (DevTools) | Visione a Raggi X (Tab Application) | Debug, modifica, cancella |
| | Limiti | 5MB, Sincrono (lento), Non sicuro (post-it) | Non salvare password\! |
| | Pattern Avanzati | Versionamento, Scadenza, Namespace | \`const k = "miaApp\_user"\` (namespace)<br>\`setWithExpiry(key, val, ttl)\` |
| | Comandamenti | Le 10 regole del localStorage | "Salverai solo stringhe", "Non ti fiderai mai", ... |
| **ALGORITMI - REGEX** |
| | \`/pattern/flags\` | Metal detector per testo | \`/ciao/gi\` (globale, case-insensitive) |
| | \`.\` \`^\` \`$`   `|`| Jolly, Inizio, Fine, OR |`^Ciao.\*mondo$\` |
| | \`[]\` (Character Class) | Club (Uno di questi) | \`[aeiou]\` (vocali)<br>\`[a-z0-9]\` (range) |
| | \`\\d\` \`\\w\` \`\\s\` \`\\b\` | Scorciatoie (Cifra, Parola, Spazio, Confine) | \`/\\bcat\\b/\` (parola "cat" intera) |
| | \`?\` \`+\` \`\*\` \`{n,m}\` | Quantificatori (Quanti?) | \`\\d+\` (uno o più cifre)<br>\`colou?r\` (opzionale) |
| | \`\` (Escape) | Disattivatore poteri speciali | \`.\` (punto letterale)<br>\`\\\` (backslash letterale) |
| | \`()\` vs \`(?:...)\` | Pullman (Raggruppa) vs Foto (Cattura) | \`(?:http|https)\` (raggruppa senza salvare)<br>\`/(\\w+)@(\\w+)/\` (cattura user e domain) |
| | Lookahead \`(?=...)\` | "Seguito da..." (non consuma) | \`\\d+(?=€)\` (numero prima di €)\<br\`\\d+(?\![a-z])\` (numero non seguito da lettera) |
| | Lookbehind \`(?\<=...)\` | "Preceduto da..." (non consuma) | \`(?\<=€)\\d+\` (numero dopo €) |
| | Pattern Reali | Email, URL, Password | \`emailRegex.test(email)\` |
| **ALGORITMI - RICORSIONE** |
| | Call Stack (LIFO) | Pila di piatti (Last In, First Out) | Gestisce l'ordine di esecuzione delle funzioni |
| | Stack Overflow | Troppi piatti, la pila crolla | Ricorsione infinita |
| | Ricorsione | Matrioske (Funzione chiama se stessa) | \`return n \* fattoriale(n - 1)\` |
| | Caso Base | Matrioska solida (Condizione di stop) | \`if (n \<= 1) return 1;\` |
| | Memoization | Post-it (Cache per risultati) | Evita ricalcoli (es. Fibonacci)<br>\`if (cache[n]) return cache[n];\` |
| **ALGORITMI - TIMING** |
| | \`setTimeout(fn, ms)\` | Sveglia (Esegui *dopo* ms) | \`const t = setTimeout(() =\> ..., 1000)\` |
| | \`setInterval(fn, ms)\` | Metronomo (Esegui *ogni* ms) | \`const i = setInterval(() =\> ..., 1000)\` |
| | \`clearTimeout/Interval\` | Cancella timer | \`clearTimeout(t)\`<br>\`clearInterval(i)\` |
| | \`setTimeout\` vs \`setInterval\` | Orologio stupido (può accavallarsi) | \`setTimeout\` ricorsivo è più sicuro per animazioni |
| | Debounce | "Esegui *dopo* che l'utente ha finito" | \`onkeyup\` in una barra di ricerca |
| | Throttle | "Esegui *al massimo* ogni X ms" | \`onscroll\` per non sovraccaricare |
| **ALGORITMI - PRATICI** |
| | Decimale → Binario | Divisione per 2, leggi resti | \`binary = (num % 2) + binary; num = Math.floor(num / 2);\` |
| | Bubble Sort | Bolle (Semplice ma lento) | \`if (arr[j] \> arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]\` |
| | Quick Sort | Divide et Impera (Veloce) | Scegli \`pivot\`, dividi in \`left\`/\`right\`, ricorsione |
| | Binary Search | Ricerca dizionario (Richiede sort) | Taglia la ricerca a metà a ogni giro (\`mid = floor((l+r)/2)\`) |
| | Palindromo | \`str === str.reverse()\` | \`const c = str.toLowerCase().replace(...)\`<br>\`return c === c.split('').reverse().join('')\` |
| | Anagrammi | Stesse lettere | \`const c1 = str1.split('').sort().join('')\`<br>\`return c1 === c2;\` |
| | Numeri Primi (Test) | Controlla divisori fino a \`sqrt(n)\` | \`for (let i = 2; i \* i \<= n; i++) ...\` |
| | Fibonacci (Iterativo) | Somma i due precedenti | \`[prev, curr] = [curr, prev + curr]\` |
| | MCD (Euclide) | Massimo Comun Divisore | \`gcd(a, b) = gcd(b, a % b)\` |
| **PATTERN - VALIDAZIONE E STATO** |
| | Guard Clauses | Buttafuori (Return early) | \`if (\!data) return;\`<br>\`if (num \< 0) return;\` (pulisce il codice) |
| | Sanitizzazione | Pulizia (Rimuovi/Escapa) | \`str.replace(/[^a-z0-9]/g, '')\`<br>\`el.textContent = str\` (sanitizza per HTML) |
| | Validazione | Controllo (Accetta/Rifiuta) | \`emailRegex.test(email)\` |
| | Single Source of Truth (SSOT) | Libro mastro (Unico stato centrale) | Previene dati non sincronizzati (es. \`const state = { ... }\`) |
| | CRUD | Create, Read, Update, Delete | Pattern per gestire liste (es. TaskManager) |
| | Pattern di Reset | Fabbrica di stato | \`state = createInitialState()\` (evita reset manuale) |
