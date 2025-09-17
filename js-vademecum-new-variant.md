# JavaScript Vademecum - Edizione Completa 📚

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

Ideale per:
- **Elementi del DOM**: Una volta selezionato un elemento, sarà sempre quello
- **Configurazioni**: Impostazioni che rimangono fisse durante l'esecuzione
- **Funzioni**: Le funzioni stesse sono valori che assegni a variabili
- **Moduli importati**: Le librerie che importi non cambiano riferimento

#### var – Il Vecchio Modo (Da Evitare)

`var` è il modo in cui si dichiaravano le variabili prima di `let` e `const`. Ha un comportamento meno prevedibile (il function scope invece del block scope) che può portare a bug difficili da scovare. 

Immagina `var` come una vecchia serratura che a volte si apre da sola, o come un contenitore che magicamente appare in posti dove non te l'aspetti. Ha questo strano comportamento chiamato "hoisting" dove JavaScript la "solleva" all'inizio della funzione, anche se l'hai dichiarata più in basso. È come se il tuo codice venisse riorganizzato a tua insaputa!

Evitalo nei progetti moderni. Se vedi `var` in codice vecchio, considera di refactorarlo. È come vedere ancora Windows XP in un ufficio nel 2025 - funziona, ma perché rischiare?

#### null e undefined – L'Assenza Intenzionale vs. Accidentale

Questi due valori rappresentano il "nulla", ma con significati profondamente diversi. È una distinzione sottile ma importantissima che mostra l'intenzione del programmatore.

**null**: È l'assenza intenzionale di un valore. Sei tu, programmatore, che decidi di assegnare `null` per indicare che "qui, volutamente, non c'è nulla".

*Analogia più profonda:* Un posto a tavola vuoto, ma apparecchiato. Non è che ti sei dimenticato di mettere il piatto - hai consciamente deciso che quel posto deve rimanere vuoto per ora. Magari stai aspettando un ospite che potrebbe arrivare, o forse vuoi segnalare che qualcuno se n'è andato. Il punto è: c'è stata una decisione consapevole.

```javascript
let canzoneCorrente = null; // "Non c'è nessuna canzone in riproduzione, e lo so"
let prossimoOspite = null; // "Non c'è un prossimo ospite programmato"
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
```

Ma perché sono così potenti? Perché trasformano la stringa da un blocco monolitico a qualcosa di dinamico e vivo. È come la differenza tra una fotografia e un video: i template literals possono cambiare, adattarsi, reagire. Puoi persino inserire intere espressioni JavaScript dentro `${}` - JavaScript le calcola e poi inserisce il risultato nella stringa.

```javascript
const prezzo = 100;
const messaggio = `Il totale è €${prezzo * 1.22} (IVA inclusa)`;
```

**Metodi Utili (La Cassetta degli Attrezzi per Testi)**

Ogni stringa in JavaScript è segretamente un oggetto con decine di metodi nascosti. È come se ogni parola che scrivi venisse fornita con un kit completo di strumenti per modificarla.

```javascript
const testo = "JavaScript è potente";
testo.length;           // 20 - Non è un metodo ma una proprietà!
testo.toUpperCase();    // "JAVASCRIPT È POTENTE"
testo.includes("potente"); // true - Cerca una sottostringa
testo.slice(0, 10);     // "JavaScript" - Taglia un pezzo
```

**Il Metodo .split() - L'Affettatrice di Stringhe**

`.split()` è come un coltello magico che taglia una stringa nei punti che decidi tu. Ma la magia vera è che trasforma una stringa in un array - passa da un blocco unico a una lista di pezzi manipolabili singolarmente.

```javascript
"Ciao mondo felice".split(' '); // ['Ciao', 'mondo', 'felice']
"2025-01-15".split('-');        // ['2025', '01', '15']
```

Il separatore che scegli è come decidere dove tagliare una torta: puoi tagliare ad ogni spazio (per ottenere le parole), ad ogni virgola (per dati CSV), o persino ad ogni lettera (passando una stringa vuota). E se non passi nessun separatore? La stringa intera diventa l'unico elemento di un array - utile quando vuoi uniformare il tipo di dato.

#### Numeri (Number) - I Valori Matematici 🔢

I numeri in JavaScript sono ingannevolmente semplici. Non c'è distinzione tra interi e decimali - tutto è un `Number`. Ma questa semplicità nasconde alcune stranezze: JavaScript usa il formato IEEE 754 per i numeri, il che significa che a volte `0.1 + 0.2` non fa esattamente `0.3` (fa `0.30000000000000004`). È come se JavaScript facesse i conti con una calcolatrice che ha troppe cifre decimali e a volte si confonde.

**Math - La Calcolatrice Scientifica** 

L'oggetto `Math` è come avere una calcolatrice scientifica sempre a disposizione, ma integrata nel linguaggio. Non devi crearlo o importarlo - è sempre lì, pronto all'uso.

```javascript
Math.random();     // Un numero tra 0 e 0.999... - Il dado infinito
Math.floor(4.9);   // 4 - Taglia via i decimali, sempre verso il basso
Math.ceil(4.1);    // 5 - Arrotonda sempre verso l'alto
Math.round(4.5);   // 5 - Arrotonda al più vicino
Math.max(1,5,3);   // 5 - Trova il più grande
```

Il trucco con `Math.random()` è capire che restituisce un numero tra 0 (incluso) e 1 (escluso). Per ottenere numeri casuali in un range specifico, devi fare un po' di matematica:

```javascript
// Numero casuale tra 1 e 10
Math.floor(Math.random() * 10) + 1;
```

#### Date - Il Calendario e l'Orologio 📅

Le date in JavaScript sono oggetti complessi che rappresentano un momento preciso nel tempo. Ma attenzione: sono piene di trabocchetti storici e decisioni di design discutibili.

```javascript
const currentDate = new Date();
```

Quel `new` è importante - sta creando un'istanza di un oggetto. È come chiedere a JavaScript: "Costruiscimi un orologio che segna questo preciso momento." Senza `new`, `Date()` restituisce solo una stringa, non un oggetto manipolabile.

**I Metodi Tricky delle Date**

```javascript
const date = new Date();
date.getMonth();     // 0-11 (Gennaio è 0! Il trabocchetto più famoso)
date.getDay();       // 0-6 (Domenica è 0! Un altro trabocchetto)
date.getDate();      // 1-31 (Finalmente normale!)
date.getFullYear();  // 2025 (Usa sempre questo, mai getYear())
```

Perché `getMonth()` parte da 0? È una decisione storica ereditata da linguaggi più vecchi. Gli sviluppatori JavaScript del 1995 pensavano che sarebbe stato più facile usare i mesi come indici di array. Spoiler: non lo è. È fonte di bug infiniti. Ricordati sempre di aggiungere 1!

**Date.now() - Il Cronometro Universale**

`Date.now()` è geniale nella sua semplicità. Non crea oggetti, non alloca memoria, restituisce solo un numero: i millisecondi dal 1 gennaio 1970 (l'Unix Epoch - il "Big Bang" del tempo informatico).

```javascript
const timestamp = Date.now(); // es: 1757897460000
```

Perché è così utile? Perché i numeri sono facilissimi da confrontare, sottrarre, ordinare. È come tradurre il tempo in un linguaggio che i computer adorano: la matematica pura.

Usi pratici che cambiano la vita:
- **ID unici**: Due chiamate a `Date.now()` non daranno MAI lo stesso numero (a meno che non avvengano nello stesso millisecondo)
- **Performance tracking**: Sottrai due timestamp e hai la durata esatta
- **Ordinamento cronologico**: Ordina per timestamp e hai l'ordine temporale

#### Booleani (Boolean) - Vero o Falso ✅❌

I booleani sono i bit filosofici di JavaScript. Solo due valori: `true` o `false`. Ma non lasciarti ingannare dalla loro semplicità - sono il cuore di ogni decisione che il tuo programma prende.

**Truthy vs Falsy - La Zona Grigia** 

JavaScript ha questa caratteristica affascinante e a volte frustrante: in un contesto booleano, OGNI valore viene "costretto" a diventare true o false. È come se JavaScript avesse degli occhiali speciali che vedono tutto in bianco e nero.

**I Sei Cavalieri del Falsy** (memorizzali!):
1. `false` - L'ovvio
2. `0` - Lo zero numerico
3. `""` - La stringa vuota
4. `null` - Il vuoto intenzionale
5. `undefined` - Il vuoto accidentale
6. `NaN` - Not a Number (il risultato di operazioni matematiche impossibili)

Tutto il resto è truthy! Anche cose che potresti non aspettarti:
- `"0"` - È una stringa, quindi truthy!
- `"false"` - È una stringa, quindi truthy!
- `[]` - Array vuoto ma è un oggetto, quindi truthy!
- `{}` - Oggetto vuoto ma esiste, quindi truthy!
- `-1` - Non è zero, quindi truthy!

Questo comportamento è una spada a doppio taglio. Ti permette di scrivere codice conciso, ma può anche portare a bug subdoli se non stai attento.

#### Array (Array) - Le Liste Ordinate 🗂️

Gli array sono le collezioni ordinate di JavaScript. Ma pensarli solo come "liste" è limitante. Sono più come treni con vagoni: ogni vagone (elemento) ha un numero (indice), puoi aggiungere o rimuovere vagoni, riordinarli, o trasformare l'intero treno in qualcosa di completamente diverso.

Gli array in JavaScript sono dinamici - possono crescere e rimpicciolirsi a piacimento. Non devi dichiarare una dimensione fissa come in altri linguaggi. È come avere una valigia magica che si espande per contenere tutto quello che ci metti dentro.

**Metodi di Modifica - I Distruttori**

Questi metodi modificano l'array originale. Sono come operazioni chirurgiche: cambiano permanentemente il paziente.

**Il Metodo .reverse() - Il Capovolgitore**

`.reverse()` è brutalmente semplice: prende il primo elemento e lo scambia con l'ultimo, il secondo con il penultimo, e così via. Ma attenzione - modifica l'array originale!

```javascript
const lettere = ['a', 'b', 'c'];
lettere.reverse(); // lettere è ora ['c', 'b', 'a']
```

È come prendere una pila di piatti e capovolgerla: quello che era sopra ora è sotto. Il problema è che non puoi "annullare" l'operazione - l'ordine originale è perso per sempre (a meno che tu non l'abbia salvato prima).

La soluzione moderna? Usa `.toReversed()` (ES2023) che crea una copia invertita, o il pattern dello spread: `[...array].reverse()`.

**Il Metodo .sort() - L'Ordinatore Caotico**

`.sort()` ha una personalità complessa. Senza parametri, ordina tutto come se fosse testo, il che porta a risultati assurdi con i numeri:

```javascript
[1, 10, 2, 21].sort(); // [1, 10, 2, 21] - What?!
```

Perché? Perché converte tutto in stringhe e le ordina alfabeticamente! "10" viene prima di "2" alfabeticamente, proprio come "apple" viene prima di "banana".

La soluzione è dargli una funzione di confronto - le sue "istruzioni" su come ordinare:

```javascript
// Per numeri
[1, 10, 2, 21].sort((a, b) => a - b); // [1, 2, 10, 21]

// La logica: se a - b è negativo, a viene prima
// Se è positivo, b viene prima
// Se è zero, sono uguali
```

**Il Metodo .splice() - Il Coltellino Svizzero**

`.splice()` è il metodo più versatile e potente per modificare array. Può fare tre cose: rimuovere, aggiungere, e sostituire elementi. È come avere forbici, colla e bianchetto in un unico strumento.

```javascript
const frutti = ['mela', 'pera', 'banana', 'kiwi'];

// Rimuovi 2 elementi a partire dall'indice 1
frutti.splice(1, 2); // frutti è ora ['mela', 'kiwi']

// Aggiungi senza rimuovere
frutti.splice(1, 0, 'arancia'); // ['mela', 'arancia', 'kiwi']

// Sostituisci
frutti.splice(0, 1, 'mango'); // ['mango', 'arancia', 'kiwi']
```

Il bello di `.splice()` è che restituisce gli elementi rimossi in un array. È come se ti dicesse: "Ecco cosa ho tagliato via, nel caso ti servisse."

**Metodi di Lettura - I Non-Distruttivi**

Questi metodi sono più gentili: guardano l'array, ne creano uno nuovo basato su quello che vedono, ma non toccano l'originale. Sono come fare una fotocopia invece di scrivere sull'originale.

**Il Metodo .filter() - Il Setaccio Selettivo**

`.filter()` è come un buttafuori all'ingresso di un club esclusivo. Ogni elemento deve superare un test per entrare nel nuovo array.

```javascript
const numeri = [1, 2, 3, 4, 5];
const pari = numeri.filter(n => n % 2 === 0); // [2, 4]
// numeri è ancora [1, 2, 3, 4, 5]
```

La funzione che passi a filter deve restituire `true` o `false`. È una domanda binaria: "Questo elemento può passare?" Se sì, entra nel nuovo array. Se no, viene lasciato fuori.

**Il Metodo .map() - La Fabbrica di Trasformazione**

`.map()` è il trasformatore universale. Prende ogni elemento e lo trasforma in qualcos'altro, creando un nuovo array con i risultati.

```javascript
const prezzi = [100, 200, 300];
const prezziScontati = prezzi.map(p => p * 0.8); // [80, 160, 240]
```

La differenza chiave con `.forEach()`? `.map()` RESTITUISCE un nuovo array, `.forEach()` no. `.map()` è per trasformare, `.forEach()` è per fare effetti collaterali (come console.log o modificare qualcosa esterno).

**Il Metodo .join() - L'Incollatore**

`.join()` è l'opposto di `.split()`. Se `.split()` taglia una stringa in pezzi per farne un array, `.join()` prende i pezzi di un array e li incolla insieme in una stringa.

```javascript
['2025', '01', '15'].join('-');  // "2025-01-15"
['Hello', 'World'].join(' ');    // "Hello World"
[1, 2, 3].join('');              // "123" - Nessun separatore!
```

Ma perché è così importante nel contesto di `.map()`? Perché quando usi `.map()` per generare HTML, ottieni un array di stringhe HTML. Il browser non sa come mostrare un array - sa solo mostrare stringhe. Senza `.join('')`, JavaScript convertirebbe l'array in stringa aggiungendo virgole tra gli elementi!

```javascript
// Senza join: virgole indesiderate nell'HTML
const html = items.map(item => `<li>${item}</li>`);
// Se items è ['a','b'], html diventa "<li>a</li>,<li>b</li>" nel DOM

// Con join: HTML pulito
const html = items.map(item => `<li>${item}</li>`).join('');
// Ora è "<li>a</li><li>b</li>" - perfetto!
```

**Spread Operator (...) - Lo "Spacchettatore"** 

I tre puntini sono magia pura. Prendono un array e lo "esplodono" nei suoi elementi individuali. È come aprire una scatola di cioccolatini e spargerli sul tavolo.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const unione = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Clonare un array (shallow copy)
const copia = [...arr1]; // [1, 2]
```

Ma lo spread fa più che unire array. Ti permette di trasformare array in argomenti di funzione:

```javascript
const numeri = [5, 2, 8, 1];
Math.max(...numeri); // 8 - Come scrivere Math.max(5, 2, 8, 1)
```

#### Oggetti (Object) - I Contenitori Strutturati 📇

Gli oggetti sono il cuore di JavaScript. Tutto in JavaScript è un oggetto o si comporta come tale. Ma a livello pratico, gli oggetti sono contenitori di coppie chiave-valore, come un dizionario o una rubrica telefonica.

```javascript
const persona = { 
    nome: "Mario", 
    eta: 30,
    saluta: function() { return "Ciao!" }
};
```

**Accesso ai Dati - Due Strade**

La notazione a punto è elegante e diretta:
```javascript
persona.nome; // "Mario"
```

La notazione a parentesi quadre è più flessibile:
```javascript
persona["nome"]; // "Mario"
const proprieta = "eta";
persona[proprieta]; // 30 - Puoi usare variabili!
```

Quando usare quale? Usa il punto quando conosci il nome della proprietà. Usa le parentesi quando il nome è dinamico o contiene caratteri speciali.

**La Struttura delle Tue Applicazioni** 

Il 90% del codice JavaScript moderno lavora con array di oggetti. È il formato naturale per rappresentare collezioni di entità simili:

```javascript
const utenti = [
    { id: 1, nome: "Alice", ruolo: "admin" },
    { id: 2, nome: "Bob", ruolo: "user" },
    { id: 3, nome: "Charlie", ruolo: "user" }
];
```

Questa struttura è così comune perché rispecchia come pensiamo: abbiamo una lista (array) di cose (oggetti) con proprietà (chiavi) e valori. È come un foglio Excel trasformato in codice.

### 3. Operatori - Gli Strumenti del Programmatore 🔧

Gli operatori sono i simboli che ti permettono di eseguire operazioni, confrontare valori e combinare logica. Ma sono più che semplici simboli - sono il linguaggio con cui esprimi la logica del tuo programma.

#### Operatori di Assegnazione e Confronto - Il Cuore della Logica

La distinzione tra `=` e `===` è fondamentale. È la differenza tra dire e chiedere, tra affermare e domandare.

**= (Assegnazione) - "Riceve"**

Il singolo uguale è un'azione, un comando. Non sta chiedendo se due cose sono uguali - sta RENDENDO una cosa uguale all'altra.

```javascript
let x = 5; // x RICEVE 5, non "x è uguale a 5?"
```

C'è un flusso direzionale qui: il valore a destra fluisce verso la variabile a sinistra. È come versare acqua in un bicchiere - l'acqua (valore) va nel bicchiere (variabile), mai il contrario.

Le forme abbreviate sono scorciatoie per operazioni comuni:
```javascript
x += 3;  // Invece di x = x + 3
x *= 2;  // Invece di x = x * 2
count++; // Invece di count = count + 1
```

**=== (Confronto Stretto) - "È Identico a?"**

Il triplo uguale è una domanda. Controlla se due valori sono identici sia nel valore che nel tipo. È il detective più rigoroso di JavaScript.

```javascript
5 === 5;      // true - Stesso valore, stesso tipo
5 === "5";    // false - Stesso valore, tipo diverso!
```

Perché non usare `==` (doppio uguale)? Perché `==` fa "type coercion" - cerca di convertire i tipi per farli combaciare. Questo porta a risultati assurdi:

```javascript
"5" == 5;        // true (converte la stringa in numero)
0 == false;      // true (converte false in 0)
"" == false;     // true (entrambi sono falsy)
null == undefined; // true (caso speciale)
```

Il doppio uguale è come un matchmaker disperato che cerca di far funzionare relazioni impossibili. Il triplo uguale è onesto: "Sono identici o no?"

#### Operatori Logici - Combinare le Condizioni

Gli operatori logici sono i mattoncini con cui costruisci logiche complesse. Sono le congiunzioni del linguaggio di programmazione.

**&& (AND) - "E anche"**

L'operatore AND è esigente: TUTTE le condizioni devono essere vere.

```javascript
const puoNoleggiareAuto = haPatente && eta >= 21 && haCartaCredito;
```

Ma c'è un trucco: `&&` non restituisce sempre `true` o `false`. Restituisce il primo valore falsy che trova, o l'ultimo valore se sono tutti truthy:

```javascript
const risultato = "ciao" && 5 && true; // true (l'ultimo)
const risultato2 = "ciao" && 0 && true; // 0 (il primo falsy)
```

Questo comportamento permette pattern eleganti:
```javascript
// Esegui funzione solo se esiste
oggetto && oggetto.metodo && oggetto.metodo();
```

**|| (OR) - "Oppure"**

L'operatore OR è generoso: basta che UNA condizione sia vera.

```javascript
const puoEntrare = èMembro || haInvito || èVIP;
```

Come `&&`, anche `||` ha un comportamento speciale: restituisce il primo valore truthy che trova, o l'ultimo valore se sono tutti falsy:

```javascript
const nome = inputUtente || nomeDatabase || "Ospite";
// Usa il primo valore "vero" che trova
```

Questo è il pattern del "default fallback" - cascata di opzioni dalla più specifica alla più generica.

**! (NOT) - "Non"**

Il NOT è il ribelle: inverte qualsiasi valore booleano.

```javascript
const èMinorenne = !èMaggiorenne;
const listaVuota = !array.length; // Se length è 0 (falsy), diventa true
```

Il doppio NOT (`!!`) è un trucco per convertire qualsiasi valore in booleano:
```javascript
!!"ciao";  // true (stringa non vuota è truthy)
!!0;       // false (0 è falsy)
!!null;    // false (null è falsy)
```

#### Operatori Speciali - I Superpoteri di ES6+

Questi operatori moderni risolvono problemi comuni in modi eleganti. Sono come upgrade al linguaggio che lo rendono più sicuro e espressivo.

**Optional Chaining (?.) - La Rete di Sicurezza**

Prima di `?.`, accedere a proprietà annidate era pericoloso:

```javascript
// Il vecchio modo pericoloso
const via = user.address.street; // CRASH se address non esiste!

// Il vecchio modo sicuro ma verboso
const via = user && user.address && user.address.street;

// Il nuovo modo elegante
const via = user?.address?.street; // undefined se qualcosa manca
```

L'optional chaining è come avere un esploratore cauto: ad ogni passo controlla se il terreno è solido prima di procedere. Se trova il vuoto, si ferma e torna indietro con `undefined` invece di crashare.

Funziona anche con metodi e array:
```javascript
const risultato = oggetto?.metodo?.(); // Chiama il metodo solo se esiste
const primo = array?.[0]; // Accede all'elemento solo se array esiste
```

**Nullish Coalescing (??) - Il Default Intelligente**

L'operatore `??` è nato per risolvere un problema specifico di `||`. Con `||`, valori come `0` o `""` vengono considerati falsy e sostituiti, anche quando sono valori validi:

```javascript
// Problema con ||
const quantita = 0;
const finale = quantita || 10; // 10 - Ma volevo 0!

// Soluzione con ??
const finale = quantita ?? 10; // 0 - Perfetto!
```

`??` controlla solo `null` e `undefined`. È come dire: "Usa questo valore a meno che non sia VERAMENTE mancante, non solo falsy."

**Operatore Ternario - La Scelta Rapida**

Il ternario è un if-else compressa in una singola espressione. È elegante per scelte semplici:

```javascript
const messaggio = eta >= 18 ? "Benvenuto" : "Accesso negato";
```

Ma la sua vera forza è che PRODUCE un valore, quindi puoi usarlo ovunque:
```javascript
// In JSX/React
<div className={isActive ? "active" : "inactive"}>

// In oggetti
const user = {
    name: "Mario",
    role: isAdmin ? "admin" : "user"
};

// In return
return successo ? datiSalvati : null;
```

Non abusarne! Per logiche complesse, un if-else tradizionale è più leggibile. Il ternario brilla per scelte binarie semplici.

<br>
<br>
<br>
<br>

## Parte II - Input/Output e Strutture di Controllo

### 4. Output - Comunicare con l'Esterno 📢

L'output è il modo in cui il tuo programma comunica. Ma è più di semplice "stampa" - è il sistema nervoso del debugging, la voce del tuo programma, il modo in cui rendi visibile l'invisibile.

#### console - La Tua Cabina di Pilotaggio per il Debug

L'oggetto `console` è molto più di `console.log()`. È un intero toolkit di debugging, ognuno con uno scopo specifico.

**console.log() - Il Diario di Bordo**

`console.log()` è il tuo amico più fedele nel debugging. Ma non è solo per stampare - è per capire il flusso del tuo programma, per vedere cosa succede davvero dietro le quinte.

```javascript
console.log("Checkpoint 1: Entrato nella funzione");
console.log("Valore ricevuto:", valore);
console.log({ nome, eta }); // Trucco: mostra sia nomi che valori!
```

Il trucco delle parentesi graffe è geniale: invece di scrivere `console.log("nome:", nome, "eta:", eta)`, puoi semplicemente wrappare le variabili in un oggetto. JavaScript mostrerà automaticamente i nomi come chiavi.

**Log Specializzati - Comunicazione Visiva**

I browser moderni colorano diversamente questi log per aiutarti a distinguerli nel mare di output:

```javascript
console.warn("⚠️ Attenzione: API key mancante");  // Giallo
console.error("❌ Errore critico: Database non raggiungibile"); // Rosso
console.info("ℹ️ Server avviato sulla porta 3000"); // Blu (in alcuni browser)
```

Usali semanticamente! Non usare `console.error()` per semplici messaggi. È come gridare "al lupo" - perdi credibilità e rendi più difficile trovare i veri problemi.

**console.table() - Il Visualizzatore di Dati**

Questo è un superpotere sottovalutato. Trasforma array e oggetti in tabelle interattive:

```javascript
const users = [
    { name: "Alice", age: 28, role: "admin" },
    { name: "Bob", age: 32, role: "user" }
];
console.table(users);
```

Nella console apparirà una vera tabella con colonne e righe, ordinabile cliccando sulle intestazioni. È fantastico per debugging di dati complessi - molto più leggibile di un wall of text.

**Altri Metodi Utili**

```javascript
console.time("operazione");
// ... codice da misurare ...
console.timeEnd("operazione"); // Stampa: "operazione: 123.45ms"

console.count("click"); // Conta quante volte viene chiamato
console.count("click"); // "click: 2"

console.group("Dettagli Utente");
console.log("Nome:", nome);
console.log("Email:", email);
console.groupEnd(); // Raggruppa i log in una sezione collassabile
```

#### alert() - Il Messaggio Urgente che Blocca Tutto

`alert()` è il residuo di un'era più semplice del web. È come suonare un allarme antincendio per dire che il pranzo è pronto - funziona, ma è eccessivo.

```javascript
alert("Attenzione!"); // Blocca TUTTO finché l'utente non clicca OK
```

**Perché evitarlo?**
1. **Blocca l'intera pagina**: L'utente non può fare nient'altro
2. **Non è stilizzabile**: Sempre uguale, sempre brutto
3. **Esperienza utente terribile**: È invasivo e fastidioso
4. **Non professionale**: Nessuna app moderna usa alert()

Usa invece: modal custom, notifiche toast, o messaggi inline. L'unico uso accettabile oggi è per debugging velocissimo e temporaneo quando `console.log()` non basta.

### 5. Controllo del Flusso - Le Decisioni del Programma 🚦

Il controllo del flusso è ciò che trasforma il tuo codice da una lista di istruzioni a un programma intelligente che prende decisioni. È la differenza tra una ricetta e uno chef.

#### if / else - Il Bivio Classico

`if / else` è la struttura decisionale fondamentale. Ma non pensarla solo come "se questo, fai quello" - è il modo in cui modelli la logica del mondo reale nel codice.

```javascript
if (piove) {
    prendiOmbrello();
} else if (freddoModerato) {
    prendiGiacca();
} else if (moltoFreddo) {
    prendiCappotto();
} else {
    esciCosi();
}
```

La catena di `else if` è valutata in ordine - appena una condizione è vera, le altre vengono ignorate. È come scendere una scala: ti fermi al primo gradino che trovi.

**Best Practice**: Ordina le condizioni dalla più specifica alla più generale. Se metti la condizione più generale prima, le altre non verranno mai raggiunte:

```javascript
// SBAGLIATO
if (temperatura < 30) {
    console.log("Non fa caldo");
} else if (temperatura < 0) {
    console.log("Fa freddo"); // Mai raggiunto!
}

// GIUSTO
if (temperatura < 0) {
    console.log("Fa freddo");
} else if (temperatura < 30) {
    console.log("Non fa caldo");
}
```

#### switch - Il Centralino Telefonico

`switch` brilla quando devi confrontare una singola variabile con molti valori possibili. È più leggibile di una lunga catena di if-else per questi casi.

```javascript
switch (giorno) {
    case 'lunedi':
        console.log("Inizio settimana");
        break;
    
    case 'venerdi':
        console.log("TGIF!");
        break;
    
    case 'sabato':
    case 'domenica':
        console.log("Weekend!"); // Stesso codice per entrambi
        break;
        
    default:
        console.log("Metà settimana");
}
```

**Il Trabocchetto del Fall-through**

Senza `break`, l'esecuzione "cade" nel caso successivo. A volte è utile (come sopra per sabato/domenica), ma spesso è un bug:

```javascript
switch (voto) {
    case 10:
        console.log("Eccellente!");
        // Manca break!
    case 9:
        console.log("Ottimo!"); // Eseguito anche per 10!
        break;
}
```

È come una cascata d'acqua: senza dighe (`break`), l'acqua continua a scendere.

**Il default - La Rete di Sicurezza**

`default` è il tuo piano B, il "in tutti gli altri casi". È come il servizio clienti di un call center - se nessun reparto specifico può aiutarti, vieni trasferito lì.

```javascript
switch (comando) {
    case 'salva':
        salvaFile();
        break;
    case 'apri':
        apriFile();
        break;
    default:
        console.error(`Comando sconosciuto: ${comando}`);
        mostraAiuto();
}
```

Includere sempre `default` è una best practice, anche solo per loggare che hai ricevuto un valore inaspettato. È debugging preventivo.

#### Operatore Ternario - Il Bivio Compatto

Il ternario non è solo un if-else compresso - è un'ESPRESSIONE che produce un valore. Questa distinzione è fondamentale.

```javascript
// Statement (if-else) - Esegue codice
if (successo) {
    messaggio = "Completato!";
} else {
    messaggio = "Errore!";
}

// Expression (ternario) - Produce un valore
const messaggio = successo ? "Completato!" : "Errore!";
```

Il ternario può andare dove if-else non può:
```javascript
// In una template literal
console.log(`Stato: ${isOnline ? "🟢 Online" : "🔴 Offline"}`);

// Come argomento di funzione
inviaEmail(utente, isPriority ? "urgente" : "normale");

// In un return
return userRole === 'admin' ? <AdminPanel /> : <UserPanel />;
```

Ma attenzione ai ternari annidati - diventano illeggibili velocemente:
```javascript
// NO! Difficile da leggere
const prezzo = isMembro ? (isPremium ? 0 : 5) : 10;

// SÌ! Usa if-else per logiche complesse
let prezzo;
if (isMembro) {
    prezzo = isPremium ? 0 : 5;
} else {
    prezzo = 10;
}
```

#### Pattern "Return Early" - La Guardia all'Ingresso

Questo pattern trasforma il tuo codice da una piramide di if-else annidati a una serie lineare di controlli. È eleganza pura.

```javascript
// Il vecchio modo - Pyramid of Doom
function processaOrdine(ordine) {
    if (ordine) {
        if (ordine.items) {
            if (ordine.items.length > 0) {
                if (ordine.payment) {
                    // Finalmente la logica vera!
                    return elaboraOrdine(ordine);
                } else {
                    return "Pagamento mancante";
                }
            } else {
                return "Carrello vuoto";
            }
        } else {
            return "Items mancanti";
        }
    } else {
        return "Ordine non valido";
    }
}

// Il nuovo modo - Guard Clauses
function processaOrdine(ordine) {
    if (!ordine) return "Ordine non valido";
    if (!ordine.items) return "Items mancanti";
    if (ordine.items.length === 0) return "Carrello vuoto";
    if (!ordine.payment) return "Pagamento mancante";
    
    // Logica principale non annidata!
    return elaboraOrdine(ordine);
}
```

Il return early è come un buttafuori che controlla i documenti: chi non è in regola viene allontanato subito, solo chi passa tutti i controlli entra nella festa (la logica principale).

### 6. Cicli - Le Ripetizioni Automatizzate 🔄

I cicli sono il modo in cui insegni al computer a fare lavori ripetitivi. È l'automazione nel suo senso più puro.

#### for - Il Contatore Preciso

Il ciclo `for` è il coltellino svizzero dei cicli. Ti dà controllo totale su inizializzazione, condizione e incremento.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Iterazione numero ${i}`);
}
```

Analizziamo le tre parti:
1. `let i = 0` - Inizializzazione: Succede UNA volta all'inizio
2. `i < 5` - Condizione: Controllata prima di OGNI iterazione
3. `i++` - Incremento: Eseguito alla FINE di ogni iterazione

È come impostare una sveglia: decidi quando iniziare, quando fermarti, e quanto aspettare tra un beep e l'altro.

**Variazioni Creative**

```javascript
// Contare all'indietro
for (let i = 10; i >= 0; i--) {
    console.log(`Conto alla rovescia: ${i}`);
}

// Saltare numeri
for (let i = 0; i <= 100; i += 10) {
    console.log(`${i}%`); // 0%, 10%, 20%...
}

// Loop infinito (attenzione!)
for (;;) {
    // Deve avere un break interno o crasherà!
}
```

#### forEach - L'Iteratore Elegante

`forEach` è il modo moderno e dichiarativo di iterare su array. Non ti preoccupi di indici o lunghezze - solo di cosa fare con ogni elemento.

```javascript
const colori = ['rosso', 'verde', 'blu'];

// Il vecchio modo
for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

// Il nuovo modo
colori.forEach(colore => {
    console.log(colore);
});

// Con indice se serve
colori.forEach((colore, indice) => {
    console.log(`${indice}: ${colore}`);
});
```

Ma attenzione: `forEach` ha limitazioni:
- Non puoi usare `break` o `continue`
- Non puoi `return` un valore dall'intero loop
- È sincrono (problemi con async/await)

Se hai bisogno di queste features, usa `for...of` o un ciclo tradizionale.

#### break e continue - I Controllori del Traffico

`break` e `continue` ti danno controllo fine sul flusso del ciclo.

**break - L'Uscita di Emergenza**

```javascript
// Cerca e fermati appena trovi
for (const user of users) {
    if (user.name === "Admin") {
        console.log("Admin trovato!");
        break; // Stop, non cercare oltre
    }
}
```

`break` è efficienza pura - perché continuare a cercare quando hai già trovato?

**continue - Il Saltatore**

```javascript
// Processa solo elementi validi
for (const item of items) {
    if (!item.isValid) {
        continue; // Salta al prossimo
    }
    
    // Codice complesso qui
    processaItem(item);
}
```

`continue` mantiene il codice pulito evitando annidamento. Invece di wrappare tutto in un if, salti semplicemente gli elementi non interessanti.

#### for vs Metodi Array - La Grande Decisione

Questa è una delle domande più importanti nel JavaScript moderno.

**Quando Usare for:**
- **Performance critica**: Su milioni di elementi, for è più veloce
- **Controllo del flusso**: Serve break, continue, o return
- **Async sequenziale**: await dentro il loop
- **Iterazioni complesse**: Incrementi non standard, loop inversi

**Quando Usare Metodi Array:**
- **Trasformazioni**: .map() per creare nuovi array
- **Filtraggi**: .filter() per selezionare elementi
- **Ricerche**: .find() per trovare un elemento
- **Aggregazioni**: .reduce() per calcoli cumulativi

```javascript
// for - Controllo totale
for (let i = 0; i < items.length; i++) {
    if (await checkItem(items[i])) {
        break; // Posso fermarmi
    }
}

// Metodi array - Eleganza dichiarativa
const doubled = numbers.map(n => n * 2);
const adults = people.filter(p => p.age >= 18);
const total = prices.reduce((sum, price) => sum + price, 0);
```

Non è questione di "vecchio vs nuovo" - è questione di usare lo strumento giusto per il lavoro giusto.

<br>
<br>
<br>
<br>

## Parte III - Funzioni e Scope

### 7. Funzioni - Le Ricette Riutilizzabili del Codice 🧩

Le funzioni sono il cuore della programmazione. Ma sono più di semplici "contenitori di codice riutilizzabile" - sono il modo in cui organizzi il pensiero, modularizzi la complessità, e crei astrazioni.

#### Arrow Functions (=>) - La Sintassi Moderna e Concisa

Le arrow functions non sono solo una sintassi più corta - rappresentano un cambio di paradigma nel modo di pensare alle funzioni.

```javascript
// Evoluzione della sintassi
function tradizionale(x) { return x * 2; }
const arrow = (x) => { return x * 2; };
const concisa = x => x * 2;  // La forma finale
```

Ma perché questa evoluzione? Perché JavaScript si sta muovendo verso un paradigma più funzionale, dove le funzioni sono valori di prima classe che passi in giro come qualsiasi altro dato.

**Il Binding di `this`**

La differenza più profonda tra arrow functions e funzioni tradizionali è come gestiscono `this`. Le arrow functions non hanno un proprio `this` - lo "ereditano" dal contesto circostante.

```javascript
const oggetto = {
    nome: "Mario",
    
    // Funzione tradizionale - this è dinamico
    salutaTrad: function() {
        setTimeout(function() {
            console.log(this.nome); // undefined! this è window
        }, 1000);
    },
    
    // Arrow function - this è lessicale
    salutaArrow: function() {
        setTimeout(() => {
            console.log(this.nome); // "Mario"! this è oggetto
        }, 1000);
    }
};
```

Questo comportamento rende le arrow functions perfette per callbacks e handlers, dove vuoi mantenere il contesto.

**Return Implicito - La Bellezza della Concisione**

Il return implicito non è solo per risparmiare caratteri - cambia il modo in cui pensi al codice:

```javascript
// Pensa alla funzione come una trasformazione diretta
const doppio = x => x * 2;
const èAdulto = persona => persona.eta >= 18;
const getNome = utente => utente.nome;

// Per oggetti, le parentesi tonde sono cruciali!
const creaUtente = (nome, eta) => ({ nome, eta });
// Senza parentesi, {} vengono interpretate come corpo della funzione
```

Il return implicito ti forza a pensare in termini di trasformazioni pure - input → output, senza effetti collaterali nel mezzo.

#### Parametri di Default - I Valori di Riserva

I parametri di default sono più di una comodità - sono documentazione viva del comportamento atteso della funzione.

```javascript
function creaConnessione(
    host = 'localhost',
    porta = 3000,
    ssl = false,
    timeout = 5000
) {
    // I default comunicano le aspettative
}

// Chiamate più espressive
creaConnessione(); // Usa tutti i default
creaConnessione('example.com'); // Override solo host
creaConnessione('example.com', 443, true); // Server production
```

I default raccontano una storia: "Questi sono i valori sensati per la maggior parte dei casi." È API design incorporato nella firma della funzione.

**Default Complessi**

I default possono essere espressioni, anche chiamate a funzioni:

```javascript
function log(messaggio, timestamp = Date.now()) {
    console.log(`[${timestamp}] ${messaggio}`);
}

function processa(dati, config = creaConfigDefault()) {
    // Config viene creato fresh ogni volta se non fornito
}
```

#### Destrutturazione nei Parametri - L'Unpacking Intelligente

La destrutturazione nei parametri è rivoluzionaria per la leggibilità:

```javascript
// Senza destrutturazione - opaco
function creaMessaggio(utente) {
    return `Benvenuto ${utente.nome} (${utente.email})`;
}

// Con destrutturazione - autodocumentante
function creaMessaggio({ nome, email }) {
    return `Benvenuto ${nome} (${email})`;
}
```

La firma della funzione ora dichiara esattamente quali proprietà si aspetta. È impossibile passare l'oggetto sbagliato senza accorgersene.

**Destrutturazione con Default**

Puoi combinare destrutturazione e valori di default per API super-robuste:

```javascript
function configuraPlayer({
    volume = 0.5,
    autoplay = false,
    quality = 'auto'
} = {}) {  // = {} rende l'intero parametro opzionale!
    // Funzione robusta con defaults granulari
}

// Tutti questi funzionano
configuraPlayer();
configuraPlayer({});
configuraPlayer({ volume: 0.8 });
configuraPlayer({ autoplay: true, quality: 'hd' });
```

#### Destrutturazione Annidata - Navigare le Gerarchie

Per oggetti complessi, la destrutturazione può seguire la struttura:

```javascript
const datiComplessi = {
    utente: {
        profilo: {
            nome: "Alice",
            contatti: {
                email: "alice@example.com",
                telefono: "123-456"
            }
        },
        settings: {
            tema: "dark",
            notifiche: true
        }
    }
};

// Estrazione chirurgica
const { 
    utente: { 
        profilo: { 
            nome,
            contatti: { email }
        },
        settings: { tema }
    }
} = datiComplessi;

console.log(nome, email, tema); // "Alice", "alice@example.com", "dark"
```

Ma attenzione: la destrutturazione profonda può diventare illeggibile. A volte è meglio fare più passaggi:

```javascript
const { profilo, settings } = datiComplessi.utente;
const { nome, contatti } = profilo;
const { email } = contatti;
```

#### Funzioni Come Mattoncini LEGO - Composizione

La vera potenza delle funzioni emerge quando iniziano a collaborare:

```javascript
// Funzioni piccole e focalizzate
const validaEmail = email => email.includes('@');
const normalizzaEmail = email => email.toLowerCase().trim();
const hashEmail = email => btoa(email); // Semplice encoding

// Composizione
const processaEmail = email => {
    const normalizzata = normalizzaEmail(email);
    if (!validaEmail(normalizzata)) {
        throw new Error('Email non valida');
    }
    return hashEmail(normalizzata);
};
```

Ogni funzione fa UNA cosa bene. La composizione crea comportamenti complessi da parti semplici.

**Pipeline di Trasformazioni**

```javascript
const pipeline = [
    trimmare,
    lowercase,
    rimuoviSpeciali,
    capitalizzaPrima
];

const processaTesto = testo => 
    pipeline.reduce((risultato, fn) => fn(risultato), testo);
```

### 8. Scope e il Modello Mentale dell'Interazione

Lo scope è uno dei concetti più importanti e fraintesi di JavaScript. Non è solo "dove vive una variabile" - è come JavaScript organizza e isola il codice.

#### Il Modello Mentale: "Edificio → Appartamento → Stanza"

Questo modello mentale è fondamentale per evitare il 90% degli errori di riferimento.

```javascript
// CORRETTO: Dal generale al particolare
document.querySelector('#player');  // Edificio → Stanza
audio.currentTime = 0;              // Edificio → Proprietà
button.classList.add('active');     // Edificio → Appartamento → Azione

// SBAGLIATO: Partire dal particolare
currentTime.audio = 0;              // ??? Non ha senso
classList.add(button, 'active');    // Stai cercando classList nel vuoto
```

Il punto `.` si legge sempre come "che appartiene a" o "che si trova dentro". È una gerarchia rigida - non puoi saltare livelli o invertire l'ordine.

#### La Keyword `this` - Il Camaleonte del Contesto

`this` è probabilmente la feature più confusa di JavaScript perché il suo valore cambia in base a COME una funzione viene chiamata, non dove è definita.

**In un Metodo di Oggetto**
```javascript
const player = {
    nome: "MusicPlayer",
    play: function() {
        console.log(this.nome); // "MusicPlayer" - this è l'oggetto
    }
};
player.play();
```

**In un Event Handler HTML**
```html
<button onclick="handleClick(this)">Click</button>
```
Qui `this` è l'elemento HTML che ha scatenato l'evento. È come se il button dicesse "Sono io che ti sto chiamando!"

**In un Event Listener**
```javascript
button.addEventListener('click', function() {
    console.log(this); // Il button - this è l'elemento
});

// Ma con arrow function...
button.addEventListener('click', () => {
    console.log(this); // window o undefined - this è ereditato!
});
```

Le arrow functions non hanno un proprio `this` - lo prendono dal contesto circostante. È sia un vantaggio che un pericolo.

**Il Pattern `deleteTask(this)`**

Quando passi `this` come argomento, stai passando un riferimento all'elemento:

```javascript
function deleteTask(buttonElement) {
    // buttonElement è il pulsante specifico cliccato
    const taskElement = buttonElement.closest('.task');
    const taskId = taskElement.dataset.id;
    // ... elimina il task
}
```

È elegante perché ogni pulsante "sa" chi è e può passare questa informazione alla funzione.

#### onclick HTML vs addEventListener - Due Filosofie

**onclick in HTML - L'Approccio Diretto**

```html
<button onclick="saluta()">Click</button>
```

Vantaggi:
- Immediato e visibile nell'HTML
- Facile per prototipazione
- `this` riferisce automaticamente all'elemento

Svantaggi:
- Mischia presentazione e logica
- Solo un handler per evento
- Inquina il global scope
- Difficile da testare

**addEventListener - L'Approccio Professionale**

```javascript
button.addEventListener('click', (e) => {
    // Logica separata, testabile, multipla
});
```

Vantaggi:
- Separazione completa delle responsabilità
- Handlers multipli possibili
- Accesso completo all'event object
- Facile da rimuovere con removeEventListener

È come la differenza tra scrivere note sui muri (onclick) e usare un sistema di post-it organizzato (addEventListener).

#### Scope: Le Bolle di Visibilità

JavaScript ha diversi livelli di scope, ognuno con le sue regole.

**Global Scope - La Piazza Pubblica**

```javascript
const APP_NAME = "MyApp";  // Visibile ovunque

function ovunque() {
    console.log(APP_NAME); // Accessibile
}
```

Il global scope è pericoloso perché tutto può modificarlo. È come lasciare le chiavi di casa sotto lo zerbino - comodo ma rischioso.

**Function Scope - La Stanza Privata**

```javascript
function castello() {
    const segreto = "tesoro nascosto";
    
    function stanzaInterna() {
        console.log(segreto); // Accessibile dalla stanza interna
    }
    
    return stanzaInterna;
}

const esplora = castello();
esplora(); // "tesoro nascosto" - Closure!
console.log(segreto); // ERRORE - Non accessibile dall'esterno
```

Le funzioni creano "closure" - mantengono accesso alle variabili del loro scope di nascita anche dopo che la funzione esterna è terminata. È magia? No, è come portarsi dietro una valigia con le cose della stanza dove sei nato.

**Block Scope - La Bolla Temporanea**

```javascript
{
    let temporaneo = "esisto solo qui";
    const ancheIo = "stesso destino";
}
console.log(temporaneo); // ERRORE - Non esiste più
```

Con `let` e `const`, ogni coppia di `{}` crea una nuova bolla di scope. È come una stanza che appare e scompare - quello che succede nella stanza, resta nella stanza.

<br>
<br>
<br>
<br>

## Parte IV - DOM e Interattività

### 9. DOM Manipulation - Il Ponte con il Browser 🌉

Il DOM è dove JavaScript incontra HTML. Ma non è solo "modificare la pagina" - è creare esperienze dinamiche, reagire agli utenti, costruire interfacce vive.

#### Selezione di Elementi - Trovare i Tuoi Bersagli

La selezione è il primo passo di ogni manipolazione DOM. È come avere un GPS per navigare nella struttura della pagina.

**querySelector - Il Cercatore Universale**

```javascript
// Qualsiasi selettore CSS funziona!
document.querySelector('#id');           // Per ID
document.querySelector('.classe');        // Prima con questa classe
document.querySelector('div > p');       // Primo p figlio diretto di div
document.querySelector('[data-role="admin"]'); // Attributi custom
```

`querySelector` usa la potenza dei selettori CSS. Se sai CSS, sai già come selezionare elementi. È unificazione brillante.

**querySelectorAll - Il Raccoglitore**

```javascript
const tuttiIBottoni = document.querySelectorAll('button');
// Restituisce una NodeList (non un Array!)

// Per usare metodi array
const array = Array.from(tuttiIBottoni);
// O con spread
const array2 = [...tuttiIBottoni];
```

NodeList vs Array è una distinzione sottile ma importante. NodeList ha `forEach`, ma non `map`, `filter`, etc. È come avere una cassetta degli attrezzi con solo alcuni strumenti.

#### Modifica del Contenuto - Trasformare il DOM

**textContent vs innerHTML - Sicurezza vs Potenza**

```javascript
// textContent - Sempre sicuro
elemento.textContent = userInput; // Anche se contiene "<script>", è solo testo

// innerHTML - Potente ma pericoloso
elemento.innerHTML = userInput; // Se contiene "<script>", VIENE ESEGUITO!
```

La regola d'oro: usa `textContent` per dati utente, `innerHTML` solo per HTML che controlli tu al 100%. È la differenza tra aprire una lettera con i guanti e aprirla a mani nude.

**Il Pattern di Creazione in 3 Fasi**

Questo pattern è fondamentale per creare elementi dinamicamente in modo sicuro e manutenibile:

```javascript
// 1. CREA (in memoria, non visibile)
const card = document.createElement('div');

// 2. CONFIGURA (ancora in memoria)
card.className = 'user-card';
card.dataset.userId = user.id;

const title = document.createElement('h3');
title.textContent = user.name;

const bio = document.createElement('p');
bio.textContent = user.bio;

card.appendChild(title);
card.appendChild(bio);

// 3. AGGIUNGI (ora diventa visibile)
container.appendChild(card);
```

Perché in 3 fasi? Perché modificare elementi già nel DOM causa "reflow" e "repaint" - operazioni costose. Costruendo in memoria, il browser fa un solo aggiornamento finale. È come costruire una casa prefabbricata e poi posizionarla, invece di costruirla mattone per mattone sul posto.

#### classList - Il Gestore Elegante degli Stili

`classList` è una delle API più belle del DOM moderno:

```javascript
elemento.classList.add('active', 'highlighted');    // Aggiungi multiple
elemento.classList.remove('hidden');                // Rimuovi
elemento.classList.toggle('expanded');              // Inverti
elemento.classList.contains('selected');            // Controlla
elemento.classList.replace('old', 'new');          // Sostituisci
```

**Il Potere di toggle()**

`toggle()` è magia pura per interfacce interattive:

```javascript
// Senza toggle - verboso
if (menu.classList.contains('open')) {
    menu.classList.remove('open');
} else {
    menu.classList.add('open');
}

// Con toggle - elegante
menu.classList.toggle('open');

// Toggle con condizione
menu.classList.toggle('open', shouldBeOpen);
```

È come avere un interruttore automatico - non devi sapere lo stato attuale, solo invertirlo.

### 10. Eventi - Ascoltare e Reagire ⚡

Gli eventi sono il sistema nervoso della tua applicazione. Ogni click, movimento, pressione di tasto è un segnale che puoi intercettare e a cui puoi reagire.

#### L'Oggetto Event - Il Dossier Completo

Quando un evento accade, il browser crea un oggetto ricchissimo di informazioni:

```javascript
button.addEventListener('click', (e) => {
    // Informazioni sull'elemento
    e.target;              // Elemento che ha originato l'evento
    e.currentTarget;       // Elemento con il listener (può essere diverso!)
    
    // Controllo del comportamento
    e.preventDefault();    // Blocca azione default
    e.stopPropagation();  // Ferma il bubbling
    
    // Informazioni sul mouse
    e.clientX / e.clientY; // Posizione nella viewport
    e.pageX / e.pageY;     // Posizione nella pagina
    
    // Tasti modificatori
    e.ctrlKey;            // Ctrl premuto?
    e.shiftKey;           // Shift premuto?
    e.altKey;             // Alt premuto?
});
```

**target vs currentTarget - La Distinzione Cruciale**

```javascript
<div id="container">
    <button>Click me</button>
</div>

container.addEventListener('click', (e) => {
    console.log(e.target);        // <button> - chi ha originato
    console.log(e.currentTarget); // <div> - chi sta ascoltando
});
```

Questa distinzione è fondamentale per l'event delegation. `target` è il vero colpevole, `currentTarget` è chi sta indagando.

#### Eventi Speciali e le Loro Particolarità

**L'Evento "change" - Il Confermatore**

`change` è diverso da `input`. Si attiva solo quando il cambiamento è "confermato":

```javascript
// input - Ad ogni singolo carattere digitato
textField.addEventListener('input', (e) => {
    console.log('Digitando:', e.target.value);
});

// change - Solo quando esci dal campo (blur) dopo aver modificato
textField.addEventListener('change', (e) => {
    console.log('Modifica confermata:', e.target.value);
});
```

Per `<select>`, `change` si attiva appena selezioni un'opzione. Per checkbox e radio, appena clicchi. È l'evento del "ho finito di modificare".

#### Event Delegation - L'Ascoltatore Intelligente

Event delegation sfrutta il "bubbling" - gli eventi risalgono dal target verso l'alto dell'albero DOM:

```javascript
// Invece di 100 listener su 100 bottoni...
document.querySelector('#container').addEventListener('click', (e) => {
    // Un solo listener che gestisce tutti
    if (e.target.matches('.delete-btn')) {
        const item = e.target.closest('.item');
        item.remove();
    }
    
    if (e.target.matches('.edit-btn')) {
        const item = e.target.closest('.item');
        editItem(item);
    }
});
```

Vantaggi enormi:
1. **Performance**: Un listener invece di cento
2. **Dinamicità**: Funziona anche per elementi aggiunti dopo
3. **Memoria**: Meno listener = meno memoria usata

È come avere un solo receptionist invece di una guardia per ogni porta.

#### Debug con console.log(e.target.value)

Questo pattern è il tuo migliore amico nel debugging di form:

```javascript
input.addEventListener('input', (e) => {
    console.log(e.target.value); // Vedi in real-time cosa digita l'utente
    
    // Debug più ricco
    console.log({
        value: e.target.value,
        length: e.target.value.length,
        type: e.target.type,
        valid: e.target.validity.valid
    });
});
```

È come avere una telecamera puntata sull'input - vedi tutto quello che succede in tempo reale.

### 11. Dialog e Modali - Le Finestre Moderne 🪟

L'elemento `<dialog>` è una delle aggiunte più utili all'HTML moderno. Non è solo un div che appare - è un cittadino di prima classe del browser con superpoteri incorporati.

#### showModal() vs show() - Due Mondi Diversi

```javascript
const dialog = document.querySelector('dialog');

// show() - Dialogo non-modale
dialog.show();
// - La pagina dietro è ancora interagibile
// - Nessun backdrop
// - Il focus non è intrappolato
// - Esc non funziona di default

// showModal() - Dialogo modale vero
dialog.showModal();
// - La pagina diventa inerte (non interagibile)
// - ::backdrop automatico e stilizzabile
// - Focus trap automatico
// - Esc chiude automaticamente
```

La differenza è filosofica: `show()` è una notifica gentile, `showModal()` è una richiesta di attenzione totale.

**Stilizzare il ::backdrop**

```css
dialog::backdrop {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
}
```

Il backdrop non è un elemento DOM normale - è uno pseudo-elemento. Non puoi selezionarlo con JavaScript, ma puoi stilizzarlo con CSS. È come l'ombra di Peter Pan - sempre attaccata ma con vita propria.

#### close() e il Pattern returnValue

`close()` può comunicare il "perché" della chiusura:

```javascript
// Nei pulsanti
saveBtn.addEventListener('click', () => {
    dialog.close('save');
});

cancelBtn.addEventListener('click', () => {
    dialog.close('cancel');
});

// Ascoltare la chiusura
dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'save') {
        saveData();
    } else if (dialog.returnValue === 'cancel') {
        restoreOriginalState();
    } else {
        // Chiuso con Esc o altro metodo
        console.log('Chiusura senza azione');
    }
});
```

È comunicazione elegante: il dialogo non solo si chiude, ma lascia un messaggio.

#### Form con method="dialog" - Magia HTML

Questa feature è poco conosciuta ma potentissima:

```html
<dialog>
    <form method="dialog">
        <input type="text" name="username">
        <button value="cancel">Annulla</button>
        <button value="confirm">Conferma</button>
    </form>
</dialog>
```

Con `method="dialog"`:
- Il form NON viene inviato al server
- Il dialog si chiude automaticamente
- Il `value` del button diventa `returnValue`
- Nessun JavaScript necessario!

È HTML che fa il lavoro pesante - progressive enhancement al suo meglio.

<br>
<br>
<br>
<br>

## Parte V - Pattern e API Specifiche

### 12. Array Methods Avanzati 🔄

I metodi avanzati degli array sono dove JavaScript brilla davvero. Trasformano operazioni complesse in dichiarazioni eleganti.

#### .filter() - Il Bouncer Selettivo

`.filter()` crea un nuovo array con solo gli elementi che superano un test. Ma è più di un semplice "setaccio" - è un modo di pensare ai dati.

```javascript
const prodotti = [
    { nome: "Laptop", prezzo: 1000, disponibile: true },
    { nome: "Mouse", prezzo: 20, disponibile: false },
    { nome: "Tastiera", prezzo: 80, disponibile: true }
];

// Filter semplice
const disponibili = prodotti.filter(p => p.disponibile);

// Filter complesso
const offerte = prodotti.filter(p => 
    p.disponibile && 
    p.prezzo < 100 && 
    p.nome.length > 5
);

// Filter con funzione esterna per leggibilità
const èOffertaValida = (prodotto) => {
    const scontato = prodotto.prezzo * 0.8;
    return scontato < 50 && prodotto.disponibile;
};

const superOfferte = prodotti.filter(èOffertaValida);
```

Il bello di `filter` è che è "puro" - non modifica l'array originale. Puoi concatenare filters senza paura:

```javascript
const risultato = utenti
    .filter(u => u.attivo)
    .filter(u => u.eta >= 18)
    .filter(u => u.verificato);
// Ogni filter restringe progressivamente
```

#### .map() - Il Trasformatore Universale

`.map()` è probabilmente il metodo più potente degli array. Non filtra, trasforma:

```javascript
// Trasformazione semplice
const prezziIVA = prezzi.map(p => p * 1.22);

// Trasformazione di oggetti
const cards = utenti.map(utente => ({
    id: utente.id,
    displayName: `${utente.nome} ${utente.cognome}`,
    avatar: utente.foto || '/default-avatar.png',
    isVIP: utente.purchases > 100
}));

// Map per generare HTML
const html = prodotti.map(p => `
    <div class="product" data-id="${p.id}">
        <h3>${p.nome}</h3>
        <p>€${p.prezzo}</p>
    </div>
`).join(''); // Ricorda join per evitare virgole!
```

**Map con Destrutturazione - Eleganza Pura**

```javascript
// Senza destrutturazione - ripetitivo
const nomi = utenti.map(utente => {
    return `${utente.firstName} ${utente.lastName}`;
});

// Con destrutturazione - pulito
const nomi = utenti.map(({ firstName, lastName }) => 
    `${firstName} ${lastName}`
);

// Destrutturazione con rename
const display = utenti.map(({ 
    firstName: nome, 
    lastName: cognome,
    age: eta 
}) => `${nome} ${cognome}, ${eta} anni`);
```

#### .find() e .findIndex() - I Detective

`.find()` restituisce il primo elemento che matcha, `.findIndex()` la sua posizione:

```javascript
const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" }
];

// find - Ottieni l'oggetto
const admin = users.find(u => u.role === "admin");
// { id: 1, name: "Alice", role: "admin" }

// findIndex - Ottieni la posizione
const adminIndex = users.findIndex(u => u.role === "admin");
// 0

// Pattern comune: trova e aggiorna
const index = users.findIndex(u => u.id === 2);
if (index !== -1) {
    users[index].name = "Roberto";
}
```

**Il -1 di findIndex**

`findIndex` restituisce -1 quando non trova nulla. È una convenzione storica di JavaScript (ereditata da indexOf). Sempre controlla per -1:

```javascript
const index = array.findIndex(condition);
if (index !== -1) {
    // Trovato!
} else {
    // Non trovato
}

// O usa find se non ti serve l'indice
const item = array.find(condition);
if (item) {
    // Trovato!
}
```

#### .sort() - L'Ordinatore Mutante

`.sort()` è potente ma pericoloso - modifica l'array originale!

```javascript
// ATTENZIONE: Modifica l'originale!
const numeri = [3, 1, 2];
numeri.sort(); // numeri è ora [1, 2, 3]

// Per preservare l'originale
const ordinati = [...numeri].sort();
// O in ES2023
const ordinati = numeri.toSorted();
```

**La Funzione di Confronto**

La funzione di confronto deve restituire:
- Negativo se a viene prima di b
- Positivo se b viene prima di a  
- Zero se sono equivalenti

```javascript
// Numeri crescenti
arr.sort((a, b) => a - b);

// Numeri decrescenti
arr.sort((a, b) => b - a);

// Oggetti per proprietà numerica
utenti.sort((a, b) => a.age - b.age);

// Stringhe (localizzate!)
nomi.sort((a, b) => a.localeCompare(b, 'it-IT'));

// Ordinamento complesso
prodotti.sort((a, b) => {
    // Prima per disponibilità
    if (a.disponibile !== b.disponibile) {
        return a.disponibile ? -1 : 1;
    }
    // Poi per prezzo
    return a.prezzo - b.prezzo;
});
```

#### .reduce() - L'Aggregatore Supremo

`.reduce()` è il metodo più potente ma meno compreso. Può fare tutto quello che fanno gli altri metodi e molto di più:

```javascript
// Somma classica
const totale = numeri.reduce((acc, n) => acc + n, 0);

// Costruire un oggetto
const byId = utenti.reduce((acc, utente) => {
    acc[utente.id] = utente;
    return acc;
}, {});

// Implementare map con reduce
const doubled = numeri.reduce((acc, n) => {
    acc.push(n * 2);
    return acc;
}, []);

// Implementare filter con reduce
const pari = numeri.reduce((acc, n) => {
    if (n % 2 === 0) acc.push(n);
    return acc;
}, []);

// Statistiche complesse
const stats = numeri.reduce((acc, n) => {
    acc.sum += n;
    acc.count++;
    acc.min = Math.min(acc.min, n);
    acc.max = Math.max(acc.max, n);
    return acc;
}, { sum: 0, count: 0, min: Infinity, max: -Infinity });

stats.avg = stats.sum / stats.count;
```

### 13. Pattern Pratici di Sviluppo

I pattern sono soluzioni ripetibili a problemi comuni. Sono la saggezza accumulata della community.

#### null come Stato Iniziale Intenzionale

`null` comunica intenzione:

```javascript
// Stati di un player musicale
let currentSong = null;  // "Nessuna canzone selezionata"
let nextSong = null;     // "Nessuna canzone in coda"
let audioContext = null; // "Audio non ancora inizializzato"

function playSong(song) {
    if (currentSong === null) {
        // Prima canzone
        initializePlayer();
    }
    currentSong = song;
}

function stopPlayer() {
    currentSong = null; // Esplicitamente fermo
    // Non undefined - quella sarebbe ambiguità
}
```

#### Pattern "Cerca e Usa"

Questo pattern è ovunque nel codice reale:

```javascript
function updateUserRole(userId, newRole) {
    // 1. CERCA
    const user = users.find(u => u.id === userId);
    
    // 2. VALIDA (Guard clause)
    if (!user) {
        console.error(`User ${userId} not found`);
        return false;
    }
    
    // 3. USA
    const oldRole = user.role;
    user.role = newRole;
    
    // 4. SIDE EFFECTS
    logRoleChange(userId, oldRole, newRole);
    updateUI();
    
    return true;
}
```

Il pattern è: Cerca → Valida → Usa → Effetti. Sempre in quest'ordine.

#### Object.freeze() e i Livelli di Protezione

JavaScript offre protezione granulare per oggetti:

```javascript
// Caso d'uso: Configuration API
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3
};

// Livello 1: No nuove proprietà
Object.preventExtensions(config);
config.newProp = 'test'; // Silenziosamente ignorato
config.timeout = 10000;  // ✓ Funziona

// Livello 2: Struttura fissa
Object.seal(config);
delete config.timeout;   // ✗ Non funziona
config.timeout = 10000;  // ✓ Ancora modificabile

// Livello 3: Immutabile
Object.freeze(config);
config.timeout = 10000;  // ✗ Completamente congelato
```

**Deep Freeze - Congelare in Profondità**

`Object.freeze()` è superficiale. Per oggetti annidati:

```javascript
function deepFreeze(obj) {
    Object.freeze(obj);
    
    Object.values(obj).forEach(value => {
        if (typeof value === 'object' && value !== null) {
            deepFreeze(value);
        }
    });
    
    return obj;
}

const config = deepFreeze({
    api: {
        url: 'https://api.example.com',
        endpoints: {
            users: '/users',
            posts: '/posts'
        }
    }
});
// Ora TUTTO è immutabile
```

### 14. Audio API - Controllo Totale del Suono 🎵

L'Audio API è più di un semplice player - è controllo totale sulla riproduzione audio.

```javascript
class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.playlist = [];
        this.currentIndex = 0;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Canzone finita
        this.audio.addEventListener('ended', () => {
            this.playNext();
        });
        
        // Aggiornamento progresso
        this.audio.addEventListener('timeupdate', () => {
            this.updateProgressBar();
        });
        
        // Gestione errori
        this.audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            this.handlePlaybackError();
        });
        
        // Metadata caricati
        this.audio.addEventListener('loadedmetadata', () => {
            console.log('Duration:', this.audio.duration);
            this.updateDurationDisplay();
        });
    }
    
    play(source) {
        this.audio.src = source;
        
        // play() restituisce una Promise!
        this.audio.play()
            .then(() => console.log('Playback started'))
            .catch(err => console.error('Playback failed:', err));
    }
    
    seekTo(percentage) {
        const time = this.audio.duration * (percentage / 100);
        this.audio.currentTime = time;
    }
    
    setVolume(value) {
        // value tra 0.0 e 1.0
        this.audio.volume = Math.max(0, Math.min(1, value));
    }
    
    fadeOut(duration = 1000) {
        const startVolume = this.audio.volume;
        const step = startVolume / (duration / 50);
        
        const fade = setInterval(() => {
            if (this.audio.volume > step) {
                this.audio.volume -= step;
            } else {
                this.audio.volume = 0;
                this.audio.pause();
                clearInterval(fade);
            }
        }, 50);
    }
}
```

### 15. Date.now() e il Tempo come Numero

`Date.now()` è geniale nella sua semplicità - trasforma il concetto astratto del tempo in un semplice numero.

```javascript
// Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.marks = {};
    }
    
    start(label) {
        this.marks[label] = Date.now();
    }
    
    end(label) {
        if (!this.marks[label]) {
            console.warn(`No start mark for ${label}`);
            return;
        }
        
        const duration = Date.now() - this.marks[label];
        console.log(`${label}: ${duration}ms`);
        
        delete this.marks[label];
        return duration;
    }
}

// Uso
const perf = new PerformanceMonitor();

perf.start('data-fetch');
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        perf.end('data-fetch'); // "data-fetch: 234ms"
    });
```

**Unique ID Generation**

```javascript
class UniqueIdGenerator {
    constructor(prefix = 'id') {
        this.prefix = prefix;
        this.counter = 0;
    }
    
    generate() {
        // Combina timestamp con counter per garantire unicità
        // anche in caso di generazioni multiple nello stesso ms
        return `${this.prefix}_${Date.now()}_${this.counter++}`;
    }
    
    generateShort() {
        // Versione più corta usando base36
        return `${this.prefix}_${Date.now().toString(36)}_${this.counter++}`;
    }
}
```

## Tabella di Riferimento Rapido Completa 📊

| Categoria | Strumento/Concetto | Analogia/Scopo | Esempio/Sintassi |
|-----------|-------------------|----------------|------------------|
| **VARIABILI** |
| | `const` | Cassaforte: prima scelta | `const user = {}` |
| | `let` | Lavagna: quando cambia | `let counter = 0` |
| | `null` vs `undefined` | Intenzionale vs Accidentale | `let x = null` |
| **TIPI PRIMITIVI** |
| | String | Testo | `` `Ciao ${nome}` `` |
| | Number | Matematica | `Math.floor(3.7)` |
| | Boolean | Interruttore | `true`/`false` |
| | Date | Calendario | `new Date()` |
| **OGGETTI E ARRAY** |
| | Object | Schedario | `{ id: 1 }` |
| | Array | Lista ordinata | `[1, 2, 3]` |
| | Spread `...` | Spacchettatore | `[...arr1, ...arr2]` |
| | Destrutturazione | Estrazione diretta | `const { name } = obj` |
| **OPERATORI** |
| | `=` | Assegna | `x = 10` |
| | `===` | Confronta | `if (x === 10)` |
| | `&&` e `\|\|` | AND e OR | `a && b`, `a \|\| b` |
| | `?.` | Navigazione sicura | `user?.address?.street` |
| | `??` | Default intelligente | `value ?? 10` |
| | Ternario `? :` | If/else rapido | `age >= 18 ? "Ok" : "No"` |
| **FUNZIONI** |
| | Arrow `=>` | Ricetta moderna | `const f = () => {}` |
| | Return implicito | Una riga | `x => x * 2` |
| | Parametri default | Valori di riserva | `(name = "Guest") => {}` |
| | Destrutturazione params | Spacchetta argomenti | `({id, name}) => {}` |
| **CONTROLLO FLUSSO** |
| | `if`/`else` | Bivio classico | `if (x) {} else {}` |
| | `switch` | Centralino | `switch(x) { case: }` |
| | `for`/`forEach` | Ripetizioni | `for(let i=0...)` |
| | Return early | Guardia ingresso | `if (!x) return` |
| | `break` | Freno emergenza | `break;` |
| **DOM** |
| | `querySelector` | Cercatore | `document.querySelector()` |
| | `createElement` | Fabbrica elementi | `document.createElement()` |
| | `.classList` | Gestore stili | `.add()/.remove()/.toggle()` |
| | `addEventListener` | Ascoltatore | `el.addEventListener()` |
| | Event object `e` | Rapporto incidente | `(e) => e.target` |
| **ARRAY METHODS** |
| | `.filter()` | Setaccio | `arr.filter(x => x > 5)` |
| | `.map()` | Trasformatore | `arr.map(x => x * 2)` |
| | `.find()` | Detective | `arr.find(x => x.id === 1)` |
| | `.findIndex()` | Cercatore posizione | `arr.findIndex(...)` |
| | `.sort()` | Ordinatore | `arr.sort((a,b) => a-b)` |
| | `.join()` | Incollatore | `arr.join("-")` |
| | `.split()` | Affettatrice | `str.split(",")` |
| | `.reverse()` | Capovolgitore | `arr.reverse()` |
| | `.splice()` | Coltellino svizzero | `arr.splice(1, 2)` |
| **PATTERN** |
| | `this` | Biglietto visita | `onclick="f(this)"` |
| | Object.freeze() | Immutabilità | `Object.freeze(obj)` |
| | Date.now() | Timestamp | `Date.now()` |
| | Pattern Cerca-Usa | Find poi usa | `find() + azione` |
| **MODALI** |
| | `showModal()` | Apri modale | `dialog.showModal()` |
| | `close()` | Chiudi dialogo | `dialog.close("value")` |
