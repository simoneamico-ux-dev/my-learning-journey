# **JavaScript Vademecum**

## Parte I - Fondamenti

### 1. Variabili - I Contenitori di Dati 📦

Le variabili sono contenitori che conservano informazioni nel tuo programma. Immagina di organizzare un trasloco: hai bisogno di scatole diverse per oggetti diversi. Alcune scatole le riutilizzerai per altri traslochi, altre sono sigillate per conservare oggetti preziosi che non devono essere toccati.

#### let - La Scatola Riutilizzabile

`let` crea una variabile che puoi modificare nel tempo. È come una lavagna in cucina dove scrivi la lista della spesa - aggiungi, cancelli, riscrivi continuamente.

```javascript
// Dichiarazione e modifica
let messaggio = "Ciao";
messaggio = "Arrivederci";  // Posso cambiarla

// Incremento di un contatore
let contatore = 0;
contatore = contatore + 1;  // Forma estesa
contatore++;                // Forma abbreviata (più comune)

// Esempio pratico: contare click
let numeroClick = 0;
function contaClick() {
    numeroClick++;
    console.log(`Click numero ${numeroClick}`);
}
```

La caratteristica fondamentale di `let` è il **block scope**: vive solo nel suo blocco delimitato da graffe `{}`. Pensa a un palazzo con appartamenti - una variabile `let` dichiarata in un appartamento (blocco) non esiste negli altri appartamenti.

```javascript
// Esempio di block scope
if (true) {
    let dentroIf = "Esisto solo qui dentro";
    console.log(dentroIf);  // Funziona
}
// console.log(dentroIf); // Errore! Non esiste fuori dal blocco

// Esempio pratico con funzione
function calcolaSconto() {
    let sconto = 0.2;  // Esiste solo nella funzione
    return sconto;
}
// console.log(sconto);  // Errore! sconto non esiste qui
```

Quando usarla: Per valori che cambieranno durante l'esecuzione, come il punteggio in un gioco, il contenuto di un carrello della spesa, o messaggi che si aggiornano.

#### const - La Scatola Sigillata

`const` crea una variabile che non può essere riassegnata. È come incidere nel marmo o scrivere con l'inchiostro indelebile - una volta scritto, resta così.

```javascript
// Valore semplice - completamente immutabile
const PI_GRECO = 3.14159;
// PI_GRECO = 3.14; // Errore! Non si può modificare

// Oggetto - contenitore fisso, contenuto modificabile
const utente = { nome: "Mario", eta: 25 };
utente.eta = 26;  // Questo funziona! Modifichi il contenuto
// utente = { nome: "Luigi" }; // Errore! Non puoi cambiare il contenitore

// Array - stesso principio
const numeri = [1, 2, 3];
numeri.push(4);  // Funziona! [1, 2, 3, 4]
// numeri = [5, 6, 7];  // Errore! Non puoi riassegnare
```

Un concetto cruciale: `const` impedisce di cambiare il contenitore, non il contenuto. È come avere una cassaforte bullonata al pavimento - non puoi spostarla o sostituirla, ma puoi riorganizzare ciò che c'è dentro.

```javascript
// Esempio pratico: configurazione app
const CONFIG = {
    apiUrl: "https://api.example.com",
    maxTentativi: 3
};

// Posso modificare le proprietà
CONFIG.maxTentativi = 5;  // OK

// Ma non posso riassegnare CONFIG
// CONFIG = { nuovaConfig: true };  // Errore!
```

Quando usarla: Per riferimenti che non cambiano mai, come elementi del DOM, configurazioni, costanti matematiche. **Usa sempre `const` di default**, passa a `let` solo quando sai che dovrai riassegnare.

#### var - Il Vecchio Modo (Da Evitare)

`var` è il vecchio sistema di dichiarare variabili, con comportamenti imprevedibili. È come avere una variabile fantasma che può apparire in posti inaspettati del tuo codice.

```javascript
// Problemi di var
function esempio() {
    if (true) {
        var problema = "Sono visibile ovunque nella funzione";
    }
    console.log(problema);  // Funziona! (non dovrebbe)
}

// Usa sempre let o const invece
function esempioCorretto() {
    if (true) {
        let soluzione = "Sono limitata al blocco";
    }
    // console.log(soluzione);  // Errore (comportamento corretto)
}
```

### 2. Tipi di Dati - Le Forme dell'Informazione 🎭

JavaScript gestisce diversi tipi di informazioni, ognuno con le sue caratteristiche. Come in una cucina hai contenitori diversi per liquidi, solidi e spezie, in programmazione hai strutture diverse per testi, numeri e liste.

#### Stringhe - Il Testo

Le stringhe sono sequenze di caratteri, sempre tra virgolette. Come parole scritte su carta, possono essere combinate, tagliate, trasformate.

```javascript
// Tre modi per creare stringhe
const singole = 'Virgolette singole';
const doppie = "Virgolette doppie";
const template = `Template literal`;

// Template literal - Il modo moderno
const nome = "Marco";
const anni = 25;
const presentazione = `Mi chiamo ${nome} e ho ${anni} anni`;
console.log(presentazione);  // "Mi chiamo Marco e ho 25 anni"

// Versione senza template literal (più verbosa)
const presentazioneVecchia = "Mi chiamo " + nome + " e ho " + anni + " anni";
```

##### Caratteri di Escape

A volte devi inserire caratteri speciali nel testo. Il backslash `\` è il tuo passepartout - dice al computer "il prossimo carattere è speciale".

```javascript
// Virgolette dentro virgolette
const negozio = "Sono nel \"Store\"";  
console.log(negozio);  // Sono nel "Store"

// Caratteri speciali comuni
const righe = "Prima riga\nSeconda riga";     // \n = a capo
const colonne = "Nome\tCognome\tEtà";         // \t = tab
const percorso = "C:\\Users\\Documents";      // \\ = backslash letterale

// Esempio pratico: messaggio formattato
function mostraRicevuta(prodotto, prezzo) {
    return `Ricevuta:\n\t${prodotto}\t€${prezzo}\n\t"Grazie per l'acquisto!"`;
}
console.log(mostraRicevuta("Libro", 15.99));
```

Operazioni comuni con le stringhe:

```javascript
// Funzione che mostra varie operazioni
function analizzaParola(parola) {
    console.log(`Parola: ${parola}`);
    console.log(`Lunghezza: ${parola.length}`);
    console.log(`Maiuscolo: ${parola.toUpperCase()}`);
    console.log(`Minuscolo: ${parola.toLowerCase()}`);
    console.log(`Prima lettera: ${parola[0]}`);
    console.log(`Ultima lettera: ${parola[parola.length - 1]}`);
    
    // Cercare dentro la stringa
    if (parola.includes("a")) {
        console.log(`Contiene "a" in posizione: ${parola.indexOf("a")}`);
    }
}

analizzaParola("JavaScript");
```

#### Numeri - I Valori Matematici

I numeri non hanno virgolette e possono essere interi o decimali. Sono i mattoni delle operazioni matematiche.

```javascript
// Tipi di numeri
const intero = 25;
const decimale = 19.99;
const negativo = -5;
const grande = 1e6;  // 1000000 (notazione scientifica)

// Funzione calcolatrice base
function calcolaOperazioni(a, b) {
    console.log(`Numeri: ${a} e ${b}`);
    console.log(`Somma: ${a + b}`);
    console.log(`Differenza: ${a - b}`);
    console.log(`Prodotto: ${a * b}`);
    console.log(`Divisione: ${a / b}`);
    console.log(`Resto: ${a % b}`);      // Modulo - molto utile!
    console.log(`Potenza: ${a ** b}`);
}

calcolaOperazioni(10, 3);
```

Il modulo `%` è sorprendentemente utile:

```javascript
// Verificare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}

// Ciclare attraverso opzioni
function getGiornoSettimana(numeroGiorno) {
    const giorni = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
    return giorni[numeroGiorno % 7];  // Sempre tra 0 e 6
}

// Raggruppare elementi
function mettiInRighe(elementi, elementiPerRiga) {
    for (let i = 0; i < elementi.length; i++) {
        if (i % elementiPerRiga === 0 && i !== 0) {
            console.log("\n");  // Nuova riga
        }
        console.log(elementi[i]);
    }
}
```

##### Math.random() e Math.floor() - I Dadi del Codice

`Math.random()` genera un numero casuale tra 0 e 1, come lanciare un dado con infinite facce. `Math.floor()` arrotonda verso il basso, trasformando decimali in interi.

```javascript
// Numero casuale base
function numeroCasuale() {
    return Math.random();  // Tra 0 e 0.999...
}

// Lancio di un dado - versione esplicita
function lanciaDado() {
    const casuale = Math.random();         // Es: 0.7264
    const per6 = casuale * 6;              // Es: 4.3584
    const arrotondato = Math.floor(per6);  // Es: 4
    const dado = arrotondato + 1;          // Es: 5 (dado da 1 a 6)
    return dado;
}

// Versione concisa (più comune)
function lanciaDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Scegliere elemento casuale - versione esplicita
function scegliColore() {
    const colori = ["rosso", "verde", "blu"];
    const indiceCasuale = Math.floor(Math.random() * colori.length);
    const coloreScelto = colori[indiceCasuale];
    return coloreScelto;
}

// Versione concisa
function scegliColore() {
    const colori = ["rosso", "verde", "blu"];
    return colori[Math.floor(Math.random() * colori.length)];
}
```

#### Booleani - Vero o Falso

I booleani hanno solo due valori: `true` o `false`. Come un interruttore della luce - acceso o spento, non ci sono vie di mezzo.

```javascript
// Booleani diretti
const vero = true;
const falso = false;

// Booleani da confronti
function verificaAccesso(eta, haTicket) {
    const maggiorenne = eta >= 18;
    const puoEntrare = maggiorenne && haTicket;
    
    console.log(`Maggiorenne: ${maggiorenne}`);
    console.log(`Ha ticket: ${haTicket}`);
    console.log(`Può entrare: ${puoEntrare}`);
    
    return puoEntrare;
}

verificaAccesso(20, true);   // true
verificaAccesso(16, true);   // false
verificaAccesso(20, false);  // false
```

Valori "falsy" e "truthy":

```javascript
// Funzione che mostra cosa è considerato vero o falso
function testaTruthiness(valore) {
    if (valore) {
        console.log(`${valore} è truthy`);
    } else {
        console.log(`${valore} è falsy`);
    }
}

// Valori falsy (considerati false)
testaTruthiness(false);      // falsy
testaTruthiness(0);          // falsy
testaTruthiness("");         // falsy (stringa vuota)
testaTruthiness(null);       // falsy
testaTruthiness(undefined);  // falsy
testaTruthiness(NaN);        // falsy

// Valori truthy (considerati true)
testaTruthiness(true);       // truthy
testaTruthiness(1);          // truthy
testaTruthiness("ciao");     // truthy
testaTruthiness([]);         // truthy (array vuoto è truthy!)
testaTruthiness({});         // truthy (oggetto vuoto è truthy!)
```

#### Array - Le Liste Ordinate

Gli array sono liste ordinate di elementi, come una fila di cassetti numerati partendo da 0.

```javascript
// Creazione e accesso base
const frutta = ["mela", "pera", "banana"];
console.log(frutta[0]);     // "mela" - primo elemento
console.log(frutta[2]);     // "banana" - terzo elemento
console.log(frutta.length);  // 3 - numero di elementi

// Perché partono da 0?
// Indice = "quanti passi dal primo elemento"
// frutta[0] = 0 passi = primo elemento
// frutta[1] = 1 passo = secondo elemento
```

Metodi per modificare array:

```javascript
// Funzione che dimostra tutti i metodi di modifica
function dimostraMetodiArray() {
    const lista = ["primo"];
    console.log("Inizio:", lista);
    
    // Aggiungere alla fine
    lista.push("secondo");
    console.log("Dopo push:", lista);  // ["primo", "secondo"]
    
    // Aggiungere all'inizio
    lista.unshift("zero");
    console.log("Dopo unshift:", lista);  // ["zero", "primo", "secondo"]
    
    // Rimuovere dall'ultimo
    const rimosso = lista.pop();
    console.log("Dopo pop:", lista, "- Rimosso:", rimosso);
    
    // Rimuovere dal primo
    const primoRimosso = lista.shift();
    console.log("Dopo shift:", lista, "- Rimosso:", primoRimosso);
    
    return lista;
}

dimostraMetodiArray();
```

Metodi di ricerca e utility:

```javascript
// Funzione che cerca in un array
function cercaInArray(array, elemento) {
    console.log(`Array: [${array}]`);
    console.log(`Cerco: "${elemento}"`);
    
    if (array.includes(elemento)) {
        const posizione = array.indexOf(elemento);
        console.log(`Trovato in posizione ${posizione}`);
        return posizione;
    } else {
        console.log("Non trovato");
        return -1;
    }
}

const numeri = [10, 20, 30, 40, 50];
cercaInArray(numeri, 30);  // Trovato in posizione 2
cercaInArray(numeri, 35);  // Non trovato
```

#### Oggetti - I Contenitori Strutturati

Gli oggetti sono contenitori con compartimenti etichettati. Come un schedario dove ogni cartella ha un'etichetta specifica.

```javascript
// Oggetto semplice
const persona = {
    nome: "Mario",
    eta: 25,
    citta: "Roma"
};

// Due modi per accedere ai valori
console.log(persona.nome);      // "Mario" - notazione punto
console.log(persona["eta"]);    // 25 - notazione bracket

// Quando usare bracket notation
const chiave = "citta";
console.log(persona[chiave]);   // "Roma" - chiave dinamica
```

Oggetti complessi e annidati:

```javascript
// Struttura complessa tipo database
const gioco = {
    giocatore: {
        nome: "Luigi",
        livello: 5,
        stats: {
            forza: 10,
            velocita: 15
        }
    },
    inventario: ["spada", "scudo"],
    salvataggioAutomatico: true
};

// Funzione per accedere a dati annidati
function mostraStatistiche(datiGioco) {
    console.log(`Giocatore: ${datiGioco.giocatore.nome}`);
    console.log(`Livello: ${datiGioco.giocatore.livello}`);
    console.log(`Forza: ${datiGioco.giocatore.stats.forza}`);
    console.log(`Primo oggetto: ${datiGioco.inventario[0]}`);
}

mostraStatistiche(gioco);
```

Array di oggetti - il pattern più comune:

```javascript
// Database di prodotti
const prodotti = [
    { id: 1, nome: "Laptop", prezzo: 999, disponibile: true },
    { id: 2, nome: "Mouse", prezzo: 25, disponibile: false },
    { id: 3, nome: "Tastiera", prezzo: 75, disponibile: true }
];

// Funzione per trovare prodotti disponibili
function trovaDisponibili(listaProdotti) {
    const disponibili = [];
    
    for (const prodotto of listaProdotti) {
        if (prodotto.disponibile) {
            disponibili.push(prodotto);
        }
    }
    
    return disponibili;
}

// Funzione per calcolare totale carrello
function calcolaTotale(carrello) {
    let totale = 0;
    
    for (const item of carrello) {
        totale += item.prezzo;
    }
    
    return totale;
}

const disponibili = trovaDisponibili(prodotti);
console.log("Prodotti disponibili:", disponibili);
console.log("Totale:", calcolaTotale(disponibili));
```

### 3. Operatori - Gli Strumenti di Calcolo 🔧

Gli operatori sono gli attrezzi nella tua cassetta degli strumenti di programmazione. Ogni operatore ha uno scopo specifico, come cacciaviti di dimensioni diverse.

#### Operatori di Assegnazione

L'operatore base `=` assegna un valore. Ma esistono versioni abbreviate che combinano operazioni e assegnazione.

```javascript
// Esempio completo: gestione punteggio
function gestisciPunteggio() {
    let punteggio = 100;
    console.log("Punteggio iniziale:", punteggio);
    
    // Forma estesa vs abbreviata
    punteggio = punteggio + 50;  // Forma estesa
    console.log("Dopo bonus (+50):", punteggio);  // 150
    
    punteggio -= 20;  // Forma abbreviata per sottrazione
    console.log("Dopo penalità (-20):", punteggio);  // 130
    
    punteggio *= 2;  // Raddoppia
    console.log("Dopo x2:", punteggio);  // 260
    
    punteggio /= 4;  // Dividi per 4
    console.log("Dopo /4:", punteggio);  // 65
    
    punteggio %= 10;  // Resto della divisione per 10
    console.log("Modulo 10:", punteggio);  // 5
    
    return punteggio;
}

gestisciPunteggio();
```

Incremento e decremento:

```javascript
// Differenza tra pre e post incremento
function mostraIncrementi() {
    let a = 5;
    console.log("a iniziale:", a);
    
    // Post-incremento: usa poi incrementa
    let b = a++;
    console.log("b = a++:", b);  // 5 (vecchio valore di a)
    console.log("a dopo:", a);   // 6 (incrementato)
    
    // Pre-incremento: incrementa poi usa
    let c = ++a;
    console.log("c = ++a:", c);  // 7 (nuovo valore di a)
    console.log("a dopo:", a);   // 7
}

// Esempio pratico: contatore visite
let visite = 0;
function registraVisita() {
    return `Visita numero ${++visite}`;  // Incrementa e mostra
}

console.log(registraVisita());  // "Visita numero 1"
console.log(registraVisita());  // "Visita numero 2"
```

#### Operatori di Confronto

Restituiscono sempre un booleano (`true` o `false`). Sono le domande che fai ai tuoi dati.

```javascript
// Funzione che mostra tutti i confronti
function confrontaNumeri(a, b) {
    console.log(`Confronto tra ${a} e ${b}:`);
    console.log(`${a} === ${b}: ${a === b}`);  // Uguaglianza stretta
    console.log(`${a} !== ${b}: ${a !== b}`);  // Diversità stretta
    console.log(`${a} > ${b}: ${a > b}`);      // Maggiore
    console.log(`${a} < ${b}: ${a < b}`);      // Minore
    console.log(`${a} >= ${b}: ${a >= b}`);    // Maggiore o uguale
    console.log(`${a} <= ${b}: ${a <= b}`);    // Minore o uguale
}

confrontaNumeri(5, 3);
confrontaNumeri(5, 5);
confrontaNumeri(3, 5);

// Differenza tra == e ===
function mostraUguaglianze() {
    console.log('5 == "5":', 5 == "5");    // true (converte tipi)
    console.log('5 === "5":', 5 === "5");  // false (tipi diversi)
    
    console.log('0 == false:', 0 == false);    // true
    console.log('0 === false:', 0 === false);  // false
    
    // Regola: usa sempre === per evitare sorprese!
}

mostraUguaglianze();
```

#### Operatori Logici

Combinano condizioni booleane, come costruire frasi complesse con "e", "o", "non".

```javascript
// Sistema di accesso completo
function verificaAccesso(utente) {
    const haUsername = utente.username && utente.username.length > 0;
    const haPassword = utente.password && utente.password.length >= 8;
    const isAdmin = utente.ruolo === "admin";
    const isAttivo = utente.attivo === true;
    
    // AND: tutte devono essere vere
    const credenzialiValide = haUsername && haPassword;
    
    // OR: almeno una deve essere vera
    const puoAccedere = (credenzialiValide && isAttivo) || isAdmin;
    
    // NOT: inverte il valore
    const bloccato = !isAttivo;
    
    console.log("Credenziali valide:", credenzialiValide);
    console.log("È admin:", isAdmin);
    console.log("Può accedere:", puoAccedere);
    console.log("Account bloccato:", bloccato);
    
    return puoAccedere;
}

// Test
verificaAccesso({
    username: "mario",
    password: "password123",
    ruolo: "user",
    attivo: true
});
```

Short-circuit evaluation in pratica:

```javascript
// Valore di default con OR
function saluta(nome) {
    // Se nome è falsy (undefined, null, ""), usa "Ospite"
    nome = nome || "Ospite";
    return `Ciao, ${nome}!`;
}

console.log(saluta("Mario"));  // "Ciao, Mario!"
console.log(saluta());         // "Ciao, Ospite!"

// Esecuzione condizionale con AND
function eseguiSeValido(dato, funzione) {
    // Esegue funzione solo se dato è truthy
    dato && funzione(dato);
}

eseguiSeValido("test", console.log);  // Stampa "test"
eseguiSeValido(null, console.log);    // Non fa nulla
```

## Parte II - Input/Output e Controllo

### 4. Output - Comunicare con l'Esterno 📢

L'output è come il tuo programma parla con te. Hai diversi canali di comunicazione, ognuno con il suo scopo.

#### console.log() - La Finestra di Debug

`console.log()` è il tuo migliore amico durante lo sviluppo. È come avere un assistente che ti riferisce cosa sta succedendo nel programma mentre gira.

```javascript
// Utilizzo base e variazioni
function mostraOutputConsole() {
    // Output semplice
    console.log("Messaggio semplice");
    
    // Output con variabili
    const nome = "Mario";
    const punti = 150;
    console.log("Giocatore:", nome, "Punti:", punti);
    
    // Output con template literal
    console.log(`${nome} ha totalizzato ${punti} punti`);
    
    // Diversi livelli di importanza
    console.info("ℹ️ Informazione");
    console.warn("⚠️ Attenzione!");
    console.error("❌ Errore!");
    
    // Oggetti e array
    const dati = { nome: "Luigi", livello: 5 };
    console.log("Dati giocatore:", dati);
    
    // Tabelle per array di oggetti
    const classifica = [
        { nome: "Mario", punti: 150 },
        { nome: "Luigi", punti: 120 },
        { nome: "Peach", punti: 180 }
    ];
    console.table(classifica);  // Tabella formattata!
}

mostraOutputConsole();
```

Debug strategico con console.log:

```javascript
// Funzione con log di debug
function calcolaPrezzoFinale(prezzo, sconto, tasse) {
    console.log("=== INIZIO CALCOLO ===");
    console.log("Input:", { prezzo, sconto, tasse });
    
    // Step 1: Applica sconto
    const scontoValore = prezzo * (sconto / 100);
    console.log(`Sconto: ${sconto}% di €${prezzo} = €${scontoValore}`);
    
    const prezzoScontato = prezzo - scontoValore;
    console.log(`Prezzo dopo sconto: €${prezzoScontato}`);
    
    // Step 2: Applica tasse
    const tasseValore = prezzoScontato * (tasse / 100);
    console.log(`Tasse: ${tasse}% di €${prezzoScontato} = €${tasseValore}`);
    
    const prezzoFinale = prezzoScontato + tasseValore;
    console.log(`PREZZO FINALE: €${prezzoFinale}`);
    console.log("=== FINE CALCOLO ===");
    
    return prezzoFinale;
}

calcolaPrezzoFinale(100, 20, 22);  // Prezzo €100, sconto 20%, IVA 22%
```

#### alert() - Il Messaggio Urgente

`alert()` mostra un popup che blocca tutto finché l'utente non clicca OK. È come suonare un campanello d'allarme - impossibile da ignorare.

```javascript
// Funzione di validazione con alert
function validaForm() {
    const email = document.querySelector("#email")?.value;
    
    if (!email) {
        alert("⚠️ Per favore inserisci un'email");
        return false;
    }
    
    if (!email.includes("@")) {
        alert("❌ Email non valida!");
        return false;
    }
    
    // Solo se tutto è ok
    alert("✅ Form inviato con successo!");
    return true;
}

// Uso più elegante: conferma azione pericolosa
function cancellaAccount() {
    const conferma = confirm("Sei sicuro di voler cancellare l'account?");
    
    if (conferma) {
        alert("Account cancellato");
        // Procedi con cancellazione
    } else {
        console.log("Cancellazione annullata");
    }
}
```

### 5. Controllo del Flusso - Le Decisioni 🚦

Il controllo del flusso determina quali parti del codice vengono eseguite. È il navigatore GPS del tuo programma che decide quale strada prendere.

#### if/else - Il Bivio

La struttura `if` è come un semaforo che ti lascia passare solo col verde.

```javascript
// Esempio base con tutti i casi
function categorizzaEta(eta) {
    let categoria;
    
    if (eta < 0) {
        categoria = "Età non valida";
    } else if (eta < 13) {
        categoria = "Bambino";
    } else if (eta < 18) {
        categoria = "Adolescente";
    } else if (eta < 65) {
        categoria = "Adulto";
    } else {
        categoria = "Senior";
    }
    
    return categoria;
}

// Test della funzione
console.log(categorizzaEta(5));   // "Bambino"
console.log(categorizzaEta(15));  // "Adolescente"
console.log(categorizzaEta(30));  // "Adulto"
console.log(categorizzaEta(70));  // "Senior"
```

If annidati vs condizioni combinate:

```javascript
// Versione con if annidati (meno leggibile)
function accessoAnnidata(eta, membro) {
    if (eta >= 18) {
        if (membro) {
            return "Accesso VIP";
        } else {
            return "Accesso standard";
        }
    } else {
        return "Accesso negato - minorenne";
    }
}

// Versione con condizioni combinate (più chiara)
function accessoCombinata(eta, membro) {
    if (eta < 18) {
        return "Accesso negato - minorenne";
    }
    
    if (eta >= 18 && membro) {
        return "Accesso VIP";
    }
    
    return "Accesso standard";
}
```

Operatore ternario per decisioni semplici:

```javascript
// Sintassi: condizione ? seVero : seFalso

// Esempio base
function getMessaggio(successo) {
    return successo ? "Operazione riuscita!" : "Operazione fallita";
}

// Ternari annidati (usa con parsimonia!)
function getVoto(punteggio) {
    return punteggio >= 90 ? "A" :
           punteggio >= 80 ? "B" :
           punteggio >= 70 ? "C" :
           punteggio >= 60 ? "D" : "F";
}

// Quando NON usare il ternario
// CATTIVO: troppo complesso
const risultato = condizione1 ? (condizione2 ? valore1 : valore2) : (condizione3 ? valore3 : valore4);

// BUONO: usa if/else per logica complessa
let risultato;
if (condizione1) {
    risultato = condizione2 ? valore1 : valore2;
} else {
    risultato = condizione3 ? valore3 : valore4;
}
```

#### switch - Il Selettore Multiplo

`switch` è come un centralinista che smista le chiamate in base al numero composto.

```javascript
// Switch completo con tutti i casi
function gestisciComando(comando) {
    let risultato;
    
    switch (comando.toLowerCase()) {
        case "start":
        case "inizia":  // Più case per stessa azione
            console.log("Avvio il programma...");
            risultato = "Programma avviato";
            break;
            
        case "stop":
        case "ferma":
            console.log("Arresto il programma...");
            risultato = "Programma fermato";
            break;
            
        case "pause":
        case "pausa":
            console.log("Metto in pausa...");
            risultato = "Programma in pausa";
            break;
            
        case "help":
        case "aiuto":
            risultato = "Comandi: start, stop, pause, help";
            break;
            
        default:
            risultato = `Comando "${comando}" non riconosciuto`;
    }
    
    return risultato;
}

// Test
console.log(gestisciComando("start"));   // "Programma avviato"
console.log(gestisciComando("INIZIA"));  // "Programma avviato" (case insensitive)
console.log(gestisciComando("aiuto"));   // Lista comandi
console.log(gestisciComando("test"));    // "Comando non riconosciuto"
```

Switch vs If/Else - quando usare cosa:

```javascript
// USA SWITCH quando confronti UNA variabile con MOLTI valori
function getGiornoSettimana(numero) {
    switch(numero) {
        case 0: return "Domenica";
        case 1: return "Lunedì";
        case 2: return "Martedì";
        case 3: return "Mercoledì";
        case 4: return "Giovedì";
        case 5: return "Venerdì";
        case 6: return "Sabato";
        default: return "Giorno non valido";
    }
}

// USA IF/ELSE per condizioni complesse o confronti diversi
function valutaMeteo(temperatura, umidita, vento) {
    if (temperatura < 0) {
        return "Gelido";
    } else if (temperatura > 30 && umidita > 70) {
        return "Afoso";
    } else if (vento > 50) {
        return "Ventoso";
    } else if (temperatura >= 20 && temperatura <= 25 && umidita < 60) {
        return "Perfetto";
    } else {
        return "Normale";
    }
}
```

#### Return Early Pattern - L'Uscita Anticipata

Invece di annidare molti `if`, esci subito quando puoi. È come controllare i documenti all'ingresso - se manca qualcosa, non fai entrare.

```javascript
// PRIMA: Piramide dell'inferno
function processaPagamentoPiramide(carta, importo, cvv) {
    if (carta) {
        if (carta.numero) {
            if (carta.scadenza) {
                if (!carta.scaduta) {
                    if (importo > 0) {
                        if (cvv && cvv.length === 3) {
                            // Finalmente processa!
                            return "Pagamento processato";
                        } else {
                            return "CVV non valido";
                        }
                    } else {
                        return "Importo non valido";
                    }
                } else {
                    return "Carta scaduta";
                }
            } else {
                return "Scadenza mancante";
            }
        } else {
            return "Numero carta mancante";
        }
    } else {
        return "Carta mancante";
    }
}

// DOPO: Return early - molto più leggibile!
function processaPagamentoEarly(carta, importo, cvv) {
    // Validazioni - esci subito se qualcosa non va
    if (!carta) {
        return { successo: false, errore: "Carta mancante" };
    }
    
    if (!carta.numero) {
        return { successo: false, errore: "Numero carta mancante" };
    }
    
    if (!carta.scadenza) {
        return { successo: false, errore: "Scadenza mancante" };
    }
    
    if (carta.scaduta) {
        return { successo: false, errore: "Carta scaduta" };
    }
    
    if (importo <= 0) {
        return { successo: false, errore: "Importo non valido" };
    }
    
    if (!cvv || cvv.length !== 3) {
        return { successo: false, errore: "CVV non valido" };
    }
    
    // Se arriviamo qui, tutto è valido!
    console.log("Processo pagamento di €" + importo);
    return { 
        successo: true, 
        messaggio: "Pagamento completato",
        transazione: Date.now()
    };
}
```

### 6. Cicli - Le Ripetizioni 🔄

I cicli sono come una lavatrice che ripete lo stesso ciclo finché il bucato non è pulito. Automatizzano le operazioni ripetitive.

#### for - Il Ciclo Contatore

Perfetto quando sai quante volte ripetere. Ha tre parti: inizializzazione, condizione, incremento.

```javascript
// Anatomia del for loop
function spiegaFor() {
    // for (inizializzazione; condizione; incremento)
    for (let i = 0; i < 3; i++) {
        console.log(`Iterazione ${i}:`);
        console.log("  i parte da", i);
        console.log("  i < 3?", i < 3);
        console.log("  Eseguo il corpo");
        console.log("  Incremento i a", i + 1);
    }
}

// Esempio pratico: calcolo media voti
function calcolaMedia(voti) {
    let somma = 0;
    
    for (let i = 0; i < voti.length; i++) {
        console.log(`Voto ${i + 1}: ${voti[i]}`);
        somma += voti[i];
    }
    
    const media = somma / voti.length;
    console.log(`Media: ${media.toFixed(2)}`);
    return media;
}

calcolaMedia([7, 8, 6, 9, 8]);
```

Variazioni del for:

```javascript
// Contare all'indietro
function contoAllaRovescia(da) {
    console.log("Conto alla rovescia:");
    for (let i = da; i >= 0; i--) {
        if (i === 0) {
            console.log("🚀 Via!");
        } else {
            console.log(i);
        }
    }
}

// Saltare elementi
function stampaNumeriPari(max) {
    console.log("Numeri pari fino a", max);
    for (let i = 0; i <= max; i += 2) {
        console.log(i);
    }
}

// Loop annidati (tabellina)
function tabellaPitagorica(dimensione) {
    for (let riga = 1; riga <= dimensione; riga++) {
        let rigaOutput = "";
        for (let colonna = 1; colonna <= dimensione; colonna++) {
            rigaOutput += (riga * colonna) + "\t";
        }
        console.log(rigaOutput);
    }
}

tabellaPitagorica(5);
```

#### while - Il Ciclo Condizionale

Continua finché la condizione è vera. Come aspettare che l'acqua bolla - non sai quanto ci vorrà, ma sai quando fermarti.

```javascript
// While base con condizione semplice
function aspettaInput() {
    let input = "";
    let tentativi = 0;
    
    while (input !== "esci" && tentativi < 5) {
        tentativi++;
        input = prompt(`Tentativo ${tentativi}/5 - Scrivi 'esci' per uscire:`);
        
        if (input === "esci") {
            console.log("Uscita richiesta dall'utente");
        } else if (tentativi >= 5) {
            console.log("Troppi tentativi!");
        } else {
            console.log(`Hai scritto: ${input}`);
        }
    }
}

// While per ricerca
function cercaNumero(array, target) {
    let indice = 0;
    let trovato = false;
    
    while (indice < array.length && !trovato) {
        if (array[indice] === target) {
            trovato = true;
            console.log(`Trovato ${target} in posizione ${indice}`);
        }
        indice++;
    }
    
    if (!trovato) {
        console.log(`${target} non trovato`);
    }
    
    return trovato;
}

cercaNumero([10, 20, 30, 40], 30);
```

#### do...while - Il Ciclo Garantito

Esegue almeno una volta, poi controlla. Come assaggiare il cibo prima di decidere se aggiungere sale.

```javascript
// Menu interattivo - deve mostrare almeno una volta
function menuInterattivo() {
    let scelta;
    
    do {
        console.log("\n=== MENU ===");
        console.log("1. Opzione A");
        console.log("2. Opzione B");
        console.log("3. Opzione C");
        console.log("0. Esci");
        
        scelta = prompt("Scegli (0-3):");
        
        switch(scelta) {
            case "1":
                console.log("Hai scelto A");
                break;
            case "2":
                console.log("Hai scelto B");
                break;
            case "3":
                console.log("Hai scelto C");
                break;
            case "0":
                console.log("Arrivederci!");
                break;
            default:
                console.log("Scelta non valida");
        }
    } while (scelta !== "0");
}

// Validazione input - ripeti finché non è valido
function richiediNumeroPositivo() {
    let numero;
    
    do {
        const input = prompt("Inserisci un numero positivo:");
        numero = parseFloat(input);
        
        if (isNaN(numero)) {
            console.log("Non è un numero!");
        } else if (numero <= 0) {
            console.log("Deve essere positivo!");
        } else {
            console.log(`Hai inserito: ${numero}`);
        }
    } while (isNaN(numero) || numero <= 0);
    
    return numero;
}
```

#### for...of - Il Ciclo per Array

Itera direttamente sugli elementi, senza indici. Come esaminare ogni oggetto in una scatola uno alla volta.

```javascript
// Confronto for classico vs for...of
function confrontaCicli() {
    const frutti = ["mela", "pera", "banana"];
    
    console.log("=== FOR CLASSICO ===");
    for (let i = 0; i < frutti.length; i++) {
        console.log(`Indice ${i}: ${frutti[i]}`);
    }
    
    console.log("\n=== FOR...OF ===");
    for (const frutto of frutti) {
        console.log(`Frutto: ${frutto}`);
        // Nota: non hai l'indice direttamente
    }
}

// for...of con diversi tipi di dati
function iteraDiversiTipi() {
    // Array
    const numeri = [10, 20, 30];
    for (const num of numeri) {
        console.log(`Numero: ${num}`);
    }
    
    // Stringa (itera caratteri)
    const parola = "Ciao";
    for (const lettera of parola) {
        console.log(`Lettera: ${lettera}`);
    }
    
    // Set (collezione unica)
    const set = new Set([1, 2, 3, 2, 1]);
    for (const valore of set) {
        console.log(`Valore unico: ${valore}`);  // 1, 2, 3
    }
}

// Quando servono gli indici con for...of
function forOfConIndici() {
    const colori = ["rosso", "verde", "blu"];
    
    // Metodo 1: entries()
    for (const [indice, colore] of colori.entries()) {
        console.log(`${indice}: ${colore}`);
    }
    
    // Metodo 2: tenere traccia manualmente
    let i = 0;
    for (const colore of colori) {
        console.log(`${i++}: ${colore}`);
    }
}
```

Controllo del flusso nei cicli:

```javascript
// Esempio completo con break e continue
function processaNumeri(numeri) {
    console.log("Processo numeri:", numeri);
    let somma = 0;
    
    for (const num of numeri) {
        // Continue: salta i negativi
        if (num < 0) {
            console.log(`  Salto ${num} (negativo)`);
            continue;
        }
        
        // Break: ferma se trovi 999
        if (num === 999) {
            console.log("  Trovato 999 - interrompo!");
            break;
        }
        
        console.log(`  Aggiungo ${num}`);
        somma += num;
    }
    
    console.log("Somma finale:", somma);
    return somma;
}

processaNumeri([5, -3, 10, -1, 20, 999, 30]);
// Output: 5 + 10 + 20 = 35 (salta negativi, si ferma a 999)
```

## Parte III - Funzioni e Scope

### 7. Funzioni - I Blocchi Riutilizzabili 🧩

Le funzioni sono come ricette di cucina - una volta scritta la ricetta, puoi preparare quel piatto ogni volta che vuoi, con ingredienti diversi.

#### Dichiarazione di Funzione

Una funzione ha un nome, può ricevere ingredienti (parametri) e restituire un risultato.

```javascript
// Anatomia completa di una funzione
function nomeFunzione(parametro1, parametro2) {
    // Corpo della funzione
    const risultato = parametro1 + parametro2;
    return risultato;  // Restituisce il risultato
}

// Esempio pratico: calcolatrice IVA
function calcolaConIVA(prezzo, percentualeIVA = 22) {
    const iva = prezzo * (percentualeIVA / 100);
    const totale = prezzo + iva;
    
    // Posso restituire un oggetto con più valori
    return {
        prezzoBase: prezzo,
        iva: iva,
        totale: totale
    };
}

// Uso della funzione
const risultato = calcolaConIVA(100);
console.log(risultato);  // { prezzoBase: 100, iva: 22, totale: 122 }
```

#### Parametri di Default

Puoi specificare valori predefiniti per i parametri, come avere ingredienti di riserva in dispensa.

```javascript
// Funzione con valori di default progressivi
function creaUtente(nome, ruolo = "utente", attivo = true) {
    return {
        nome: nome,
        ruolo: ruolo,
        attivo: attivo,
        creatoIl: new Date()
    };
}

// Diversi modi di chiamarla
console.log(creaUtente("Mario"));  // Usa tutti i default
console.log(creaUtente("Luigi", "admin"));  // Override del ruolo
console.log(creaUtente("Peach", "moderatore", false));  // Override di tutto

// Default con espressioni
function salutaConOrario(nome = "Ospite", ora = new Date().getHours()) {
    let saluto;
    
    if (ora < 12) {
        saluto = "Buongiorno";
    } else if (ora < 18) {
        saluto = "Buon pomeriggio";
    } else {
        saluto = "Buonasera";
    }
    
    return `${saluto}, ${nome}!`;
}

console.log(salutaConOrario());  // Usa ora attuale
console.log(salutaConOrario("Mario", 9));  // "Buongiorno, Mario!"
```

#### Return - Il Risultato

`return` è il piatto finito che esce dalla cucina. Termina la funzione e restituisce un valore.

```javascript
// Return multipli per logica condizionale
function classificaPunteggio(punti) {
    // Return early per casi speciali
    if (punti < 0) {
        return { valido: false, errore: "Punteggio negativo" };
    }
    
    if (punti > 100) {
        return { valido: false, errore: "Punteggio troppo alto" };
    }
    
    // Classificazione normale
    if (punti >= 90) return { voto: "A", descrizione: "Eccellente" };
    if (punti >= 80) return { voto: "B", descrizione: "Buono" };
    if (punti >= 70) return { voto: "C", descrizione: "Sufficiente" };
    if (punti >= 60) return { voto: "D", descrizione: "Scarso" };
    
    return { voto: "F", descrizione: "Insufficiente" };
}

// Funzione senza return esplicito
function logga(messaggio) {
    console.log(`[LOG] ${messaggio}`);
    // return undefined;  // Implicito
}

const risultatoLog = logga("Test");
console.log(risultatoLog);  // undefined
```

#### Arrow Functions - La Sintassi Moderna

Le arrow functions sono una scrittura più concisa, perfette per funzioni semplici.

```javascript
// Evoluzione da funzione tradizionale ad arrow
// 1. Funzione tradizionale
function somma(a, b) {
    return a + b;
}

// 2. Function expression
const somma2 = function(a, b) {
    return a + b;
};

// 3. Arrow function
const somma3 = (a, b) => {
    return a + b;
};

// 4. Arrow function concisa (return implicito)
const somma4 = (a, b) => a + b;

// Un solo parametro: parentesi opzionali
const raddoppia = n => n * 2;
const saluta = nome => `Ciao ${nome}!`;

// Nessun parametro: parentesi obbligatorie
const ottieniOra = () => new Date().toLocaleTimeString();

// Arrow functions con array methods
const numeri = [1, 2, 3, 4, 5];

// Map: trasforma ogni elemento
const doppi = numeri.map(n => n * 2);
console.log(doppi);  // [2, 4, 6, 8, 10]

// Filter: filtra elementi
const pari = numeri.filter(n => n % 2 === 0);
console.log(pari);  // [2, 4]

// Reduce: accumula un risultato
const sommaArray = numeri.reduce((acc, n) => acc + n, 0);
console.log(sommaArray);  // 15
```

#### Funzioni che Chiamano Funzioni

Le funzioni possono collaborare tra loro, come chef che si passano ingredienti preparati.

```javascript
// Sistema completo di validazione e elaborazione
function validaEmail(email) {
    return email.includes("@") && email.includes(".");
}

function normalizzaEmail(email) {
    return email.toLowerCase().trim();
}

function hashPassword(password) {
    // Simulazione hash semplice
    return password.split("").reverse().join("") + "_hash";
}

function registraUtente(email, password) {
    console.log("=== REGISTRAZIONE UTENTE ===");
    
    // Step 1: Normalizza email
    const emailNormalizzata = normalizzaEmail(email);
    console.log("Email normalizzata:", emailNormalizzata);
    
    // Step 2: Valida email
    if (!validaEmail(emailNormalizzata)) {
        return {
            successo: false,
            errore: "Email non valida"
        };
    }
    console.log("Email valida ✓");
    
    // Step 3: Hash password
    const passwordHash = hashPassword(password);
    console.log("Password hashata ✓");
    
    // Step 4: Crea utente
    const utente = {
        id: Date.now(),
        email: emailNormalizzata,
        password: passwordHash,
        creatoIl: new Date()
    };
    
    console.log("Utente creato:", utente);
    return {
        successo: true,
        utente: utente
    };
}

// Test
registraUtente("  MARIO@EXAMPLE.COM  ", "password123");
```

Composizione di funzioni:

```javascript
// Funzioni piccole e riutilizzabili
const aggiungiIVA = prezzo => prezzo * 1.22;
const applicaSconto = (prezzo, percentuale) => prezzo * (1 - percentuale / 100);
const arrotonda = numero => Math.round(numero * 100) / 100;

// Funzione che le compone
function calcolaPrezzoFinale(prezzoBase, sconto = 0) {
    let prezzo = prezzoBase;
    
    // Applica sconto se presente
    if (sconto > 0) {
        prezzo = applicaSconto(prezzo, sconto);
        console.log(`Dopo sconto ${sconto}%: €${prezzo}`);
    }
    
    // Aggiungi IVA
    prezzo = aggiungiIVA(prezzo);
    console.log(`Con IVA: €${prezzo}`);
    
    // Arrotonda
    prezzo = arrotonda(prezzo);
    console.log(`Finale: €${prezzo}`);
    
    return prezzo;
}

calcolaPrezzoFinale(100, 20);  // €97.6
```

### 8. Scope - La Visibilità delle Variabili 👁️

Lo scope determina dove una variabile è accessibile. È come le stanze di una casa - ciò che è in una stanza non è sempre visibile dalle altre.

#### Scope Globale vs Locale

Le variabili globali sono come gli annunci all'altoparlante - tutti li sentono. Le variabili locali sono come conversazioni private in una stanza.

```javascript
// Esempio completo di scope
// GLOBALE - Visibile ovunque
let punteggioGlobale = 0;
const CONFIG_GIOCO = { difficolta: "media" };

function giocaRound() {
    // LOCALE alla funzione
    let punteggioRound = 100;
    const bonus = 50;
    
    // Posso leggere e modificare il globale
    console.log("Config:", CONFIG_GIOCO.difficolta);
    punteggioGlobale += punteggioRound;
    
    function applicaBonus() {
        // LOCALE alla funzione interna
        let moltiplicatore = 2;
        
        // Posso accedere a variabili dei "genitori"
        punteggioRound *= moltiplicatore;  // Vede punteggioRound
        punteggioGlobale += bonus;  // Vede bonus e punteggioGlobale
        
        console.log("Dentro applicaBonus:");
        console.log("  moltiplicatore:", moltiplicatore);  // 2
        console.log("  punteggioRound:", punteggioRound);  // 200
        console.log("  bonus:", bonus);  // 50
    }
    
    applicaBonus();
    
    // console.log(moltiplicatore);  // Errore! Non esiste qui
}

giocaRound();
console.log("Punteggio globale finale:", punteggioGlobale);
// console.log(punteggioRound);  // Errore! Non esiste qui
// console.log(bonus);  // Errore! Non esiste qui
```

#### Block Scope

Le variabili `let` e `const` vivono solo nel loro blocco `{}`.

```javascript
// Dimostrazione del block scope
function esempioBlockScope() {
    let x = 1;
    
    if (true) {
        let x = 2;  // Nuova variabile, diversa dalla x esterna
        const y = 3;
        console.log("Dentro if - x:", x);  // 2
        console.log("Dentro if - y:", y);  // 3
    }
    
    console.log("Fuori if - x:", x);  // 1 (la x originale)
    // console.log("Fuori if - y:", y);  // Errore! y non esiste qui
    
    // Nei cicli
    for (let i = 0; i < 3; i++) {
        let iterazione = `Round ${i}`;
        console.log(iterazione);
    }
    // console.log(i);  // Errore! i esiste solo nel for
    // console.log(iterazione);  // Errore! iterazione esiste solo nel for
}

// Problema classico risolto dal block scope
function creaBottoni() {
    for (let i = 1; i <= 3; i++) {
        const bottone = document.createElement("button");
        bottone.textContent = `Bottone ${i}`;
        
        // Con let, ogni iterazione ha la sua i
        bottone.onclick = function() {
            alert(`Hai cliccato il bottone ${i}`);
        };
        
        document.body.appendChild(bottone);
    }
}

// Se usassimo var, tutti i bottoni direbbero "Bottone 4"!
```

#### Scope Chain - La Catena di Visibilità

JavaScript cerca le variabili partendo dallo scope corrente e salendo verso l'esterno, come cercare le chiavi prima in tasca, poi nella borsa, poi in casa.

```javascript
// Catena di scope completa
const globale = "Sono globale";

function livello1() {
    const inLivello1 = "Sono in livello 1";
    
    function livello2() {
        const inLivello2 = "Sono in livello 2";
        
        function livello3() {
            const inLivello3 = "Sono in livello 3";
            
            // Posso vedere tutto dalla catena
            console.log("Dal livello 3 vedo:");
            console.log("  ", globale);      // ✓
            console.log("  ", inLivello1);   // ✓
            console.log("  ", inLivello2);   // ✓
            console.log("  ", inLivello3);   // ✓
        }
        
        livello3();
        
        // Dal livello 2
        console.log("Dal livello 2 vedo:");
        console.log("  ", globale);      // ✓
        console.log("  ", inLivello1);   // ✓
        console.log("  ", inLivello2);   // ✓
        // console.log(inLivello3);      // ✗ Errore!
    }
    
    livello2();
}

livello1();

// Shadowing: stesso nome, scope diversi
function esempioShadowing() {
    let valore = "globale";
    
    function prima() {
        let valore = "prima";  // Shadow del globale
        console.log(valore);  // "prima"
        
        function seconda() {
            let valore = "seconda";  // Shadow di prima
            console.log(valore);  // "seconda"
        }
        
        seconda();
        console.log(valore);  // "prima" (il suo valore)
    }
    
    prima();
    console.log(valore);  // "globale" (non modificato)
}
```

## Parte IV - DOM e Interattività

### 9. DOM Manipulation - Il Ponte col Browser 🌉

Il DOM (Document Object Model) è la rappresentazione del tuo HTML come un albero di oggetti. Manipolare il DOM è come ridecorare una stanza - puoi spostare mobili, cambiare colori, aggiungere decorazioni.

#### Selezionare Elementi

Prima di modificare qualcosa, devi trovarlo. È come cercare un libro in biblioteca - hai diversi sistemi di ricerca.

```javascript
// Esempio HTML di riferimento
/*
<div id="app">
    <h1 id="titolo" class="intestazione">Benvenuto</h1>
    <p class="testo">Primo paragrafo</p>
    <p class="testo speciale">Secondo paragrafo</p>
    <button class="btn btn-primary">Clicca</button>
    <ul id="lista">
        <li>Elemento 1</li>
        <li>Elemento 2</li>
    </ul>
</div>
*/

// querySelector - Il più versatile
function esempiQuerySelector() {
    // Per ID
    const titolo = document.querySelector("#titolo");
    
    // Per classe (prende il PRIMO)
    const primoTesto = document.querySelector(".testo");
    
    // Selettore complesso
    const testoSpeciale = document.querySelector("p.testo.speciale");
    
    // Selettore gerarchico
    const primoLi = document.querySelector("#lista > li");
    
    // Pseudo-selettori
    const ultimoLi = document.querySelector("#lista > li:last-child");
    
    console.log("Elementi trovati:", {
        titolo: titolo?.textContent,
        primoTesto: primoTesto?.textContent,
        testoSpeciale: testoSpeciale?.textContent,
        primoLi: primoLi?.textContent,
        ultimoLi: ultimoLi?.textContent
    });
}

// querySelectorAll - Per elementi multipli
function esempiQuerySelectorAll() {
    // Trova TUTTI gli elementi
    const tuttiParagrafi = document.querySelectorAll("p");
    const tuttiTesti = document.querySelectorAll(".testo");
    const tuttiLi = document.querySelectorAll("#lista li");
    
    // NodeList -> Array per usare metodi array
    const paragrafiArray = Array.from(tuttiParagrafi);
    
    // O usa forEach direttamente
    tuttiLi.forEach((li, indice) => {
        console.log(`Li ${indice + 1}: ${li.textContent}`);
    });
    
    // Filtrare risultati
    const testiSpeciali = Array.from(tuttiTesti).filter(el => 
        el.classList.contains("speciale")
    );
    
    return testiSpeciali;
}
```

#### Modifica del Contenuto

Una volta trovato l'elemento, puoi modificarne il contenuto in vari modi.

```javascript
// Confronto tra innerText, innerHTML e textContent
function confrontaMetodiTesto() {
    const elemento = document.querySelector("#esempio");
    
    // innerText - Solo testo visibile
    elemento.innerText = "Testo semplice e sicuro";
    // Non interpreta HTML, sicuro per input utente
    elemento.innerText = "<script>alert('XSS')</script>";  // Mostra letteralmente
    
    // innerHTML - Interpreta HTML (attenzione!)
    elemento.innerHTML = "<strong>Grassetto</strong> e <em>corsivo</em>";
    // PERICOLO con input utente non validato!
    // MAI fare: elemento.innerHTML = userInput;
    
    // textContent - Tutto il testo, ignora stili
    elemento.textContent = "Testo puro, <tag> mostrati letteralmente";
    
    // Esempio pratico sicuro
    function aggiornaMessaggio(testo, importante = false) {
        const messaggio = document.querySelector("#messaggio");
        
        if (importante) {
            // Usa innerHTML solo con contenuto controllato
            messaggio.innerHTML = `<strong>⚠️ ${escapeHtml(testo)}</strong>`;
        } else {
            // Usa innerText per contenuto utente
            messaggio.innerText = testo;
        }
    }
    
    // Funzione di escape per sicurezza
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// insertAdjacentHTML - Inserimento preciso
function esempiInsertAdjacentHTML() {
    const container = document.querySelector("#container");
    
    // Le 4 posizioni possibili
    
    // beforebegin - Prima dell'elemento
    container.insertAdjacentHTML('beforebegin', 
        '<h2>Titolo prima del container</h2>');
    
    // afterbegin - Inizio del contenuto (primo figlio)
    container.insertAdjacentHTML('afterbegin', 
        '<p>Primo paragrafo nel container</p>');
    
    // beforeend - Fine del contenuto (ultimo figlio)
    container.insertAdjacentHTML('beforeend', 
        '<p>Ultimo paragrafo nel container</p>');
    
    // afterend - Dopo l'elemento
    container.insertAdjacentHTML('afterend', 
        '<footer>Footer dopo il container</footer>');
    
    // Esempio pratico: aggiungere elementi a una lista
    function aggiungiElementoLista(testo, inizio = false) {
        const lista = document.querySelector("#lista");
        const html = `<li>${escapeHtml(testo)}</li>`;
        
        if (inizio) {
            lista.insertAdjacentHTML('afterbegin', html);
        } else {
            lista.insertAdjacentHTML('beforeend', html);
        }
    }
}
```

#### Modifica degli Stili

Puoi cambiare l'aspetto degli elementi come un designer d'interni.

```javascript
// style property - Modifica diretta
function modificaStiliDiretti() {
    const box = document.querySelector(".box");
    
    // Singole proprietà (notare camelCase!)
    box.style.backgroundColor = "#3498db";
    box.style.color = "white";
    box.style.padding = "20px";
    box.style.borderRadius = "10px";
    box.style.transition = "all 0.3s ease";
    
    // Proprietà con vendor prefix
    box.style.webkitTransform = "rotate(5deg)";
    box.style.transform = "rotate(5deg)";
    
    // Multiple proprietà con Object.assign
    Object.assign(box.style, {
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    });
    
    // Leggere stili computati
    const stileCalcolato = window.getComputedStyle(box);
    console.log("Larghezza effettiva:", stileCalcolato.width);
    console.log("Colore di sfondo:", stileCalcolato.backgroundColor);
}

// classList - Gestione classi CSS
function gestioneClassi() {
    const elemento = document.querySelector(".card");
    
    // Metodi principali
    elemento.classList.add("selezionata");
    elemento.classList.add("animata", "grande");  // Più classi insieme
    
    elemento.classList.remove("nascosta");
    elemento.classList.remove("vecchia", "obsoleta");
    
    // Toggle - super utile!
    elemento.classList.toggle("attiva");  // Aggiunge se non c'è, rimuove se c'è
    
    // Toggle con condizione
    const shouldHighlight = true;
    elemento.classList.toggle("evidenziata", shouldHighlight);
    
    // Verificare presenza
    if (elemento.classList.contains("selezionata")) {
        console.log("Elemento selezionato!");
    }
    
    // Replace (sostituisce una classe con un'altra)
    elemento.classList.replace("vecchia-classe", "nuova-classe");
    
    // Esempio pratico: tema dark/light
    function toggleTema() {
        document.body.classList.toggle("dark-mode");
        
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("tema", isDark ? "dark" : "light");
        
        // Aggiorna testo bottone
        const btnTema = document.querySelector("#btn-tema");
        btnTema.innerText = isDark ? "🌞 Light Mode" : "🌙 Dark Mode";
    }
}
```

### 10. Eventi - Le Reazioni del Browser ⚡

Gli eventi sono come campanelli - quando qualcuno suona (click, tastiera, mouse), il tuo codice risponde.

#### Gestione Eventi Base

```javascript
// onclick - Metodo diretto (vecchio stile)
function metodoOnclick() {
    const bottone = document.querySelector("#mio-bottone");
    
    // Assegnazione diretta
    bottone.onclick = function() {
        console.log("Cliccato!");
    };
    
    // PROBLEMA: sovrascrive handler precedenti
    bottone.onclick = function() {
        console.log("Questo sostituisce il precedente!");
    };
    
    // Solo l'ultimo viene eseguito
}

// addEventListener - Metodo moderno (preferito)
function metodoAddEventListener() {
    const bottone = document.querySelector("#mio-bottone");
    
    // Puoi aggiungere multipli listener
    bottone.addEventListener("click", function() {
        console.log("Primo handler");
    });
    
    bottone.addEventListener("click", function() {
        console.log("Secondo handler");
    });
    
    // Entrambi vengono eseguiti!
    
    // Con arrow function
    bottone.addEventListener("click", () => {
        console.log("Arrow function handler");
    });
    
    // Rimuovere listener specifico
    function mioHandler() {
        console.log("Handler rimovibile");
    }
    
    bottone.addEventListener("click", mioHandler);
    // Più tardi...
    bottone.removeEventListener("click", mioHandler);
}
```

#### Event Object

Ogni evento porta informazioni utili sull'evento stesso.

```javascript
// Esplorare l'event object
function esploraEventObject() {
    const bottone = document.querySelector("#test-btn");
    
    bottone.addEventListener("click", function(evento) {
        console.log("=== EVENT OBJECT ===");
        console.log("Tipo:", evento.type);  // "click"
        console.log("Target:", evento.target);  // L'elemento cliccato
        console.log("Current Target:", evento.currentTarget);  // Dove è attaccato il listener
        console.log("Timestamp:", evento.timeStamp);
        console.log("Coordinate:", evento.clientX, evento.clientY);
        console.log("Tasti modificatori:");
        console.log("  Shift:", evento.shiftKey);
        console.log("  Ctrl:", evento.ctrlKey);
        console.log("  Alt:", evento.altKey);
    });
    
    // preventDefault - Impedire comportamento default
    const link = document.querySelector("a");
    link.addEventListener("click", function(e) {
        e.preventDefault();  // Non naviga
        console.log("Link cliccato ma navigazione bloccata");
        
        // Fai qualcosa di custom
        const href = e.target.href;
        if (confirm(`Vuoi davvero andare a ${href}?`)) {
            window.location.href = href;
        }
    });
    
    // Form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();  // Non invia il form
        
        // Validazione custom
        const formData = new FormData(e.target);
        const dati = Object.fromEntries(formData);
        
        if (validaDati(dati)) {
            console.log("Invio dati:", dati);
            // Invio AJAX o altro
        } else {
            alert("Dati non validi!");
        }
    });
}

// stopPropagation - Fermare il bubbling
function esempioPropagation() {
    const esterno = document.querySelector("#esterno");
    const interno = document.querySelector("#interno");
    
    esterno.addEventListener("click", () => {
        console.log("Click su esterno");
    });
    
    interno.addEventListener("click", (e) => {
        console.log("Click su interno");
        e.stopPropagation();  // Non propaga all'esterno
    });
}
```

#### Event Delegation

Invece di mettere listener su ogni elemento, mettilo sul genitore.

```javascript
// Senza delegation (inefficiente)
function senzaDelegation() {
    const bottoni = document.querySelectorAll(".btn");
    
    bottoni.forEach(btn => {
        btn.addEventListener("click", function() {
            console.log("Bottone cliccato:", this.textContent);
        });
    });
    
    // PROBLEMA: nuovi bottoni aggiunti dopo non hanno listener!
}

// Con delegation (efficiente)
function conDelegation() {
    // Un solo listener sul contenitore
    const container = document.querySelector("#container");
    
    container.addEventListener("click", function(e) {
        // Verifica se il target è un bottone
        if (e.target.classList.contains("btn")) {
            console.log("Bottone cliccato:", e.target.textContent);
            
            // Puoi differenziare per tipo
            if (e.target.classList.contains("btn-delete")) {
                const id = e.target.dataset.id;
                eliminaElemento(id);
            } else if (e.target.classList.contains("btn-edit")) {
                const id = e.target.dataset.id;
                modificaElemento(id);
            }
        }
    });
    
    // Funziona anche per elementi aggiunti dopo!
    function aggiungiBottone() {
        const nuovoBtn = document.createElement("button");
        nuovoBtn.className = "btn btn-delete";
        nuovoBtn.dataset.id = Date.now();
        nuovoBtn.textContent = "Elimina";
        container.appendChild(nuovoBtn);
        // Non serve aggiungere listener!
    }
}

// Esempio pratico: lista TODO con delegation
function todoListConDelegation() {
    const lista = document.querySelector("#todo-list");
    
    // Un solo listener per tutti gli eventi
    lista.addEventListener("click", function(e) {
        const target = e.target;
        const todoItem = target.closest(".todo-item");
        
        if (!todoItem) return;
        
        if (target.classList.contains("check-btn")) {
            // Toggle completato
            todoItem.classList.toggle("completato");
            
        } else if (target.classList.contains("delete-btn")) {
            // Elimina con animazione
            todoItem.style.transition = "opacity 0.3s";
            todoItem.style.opacity = "0";
            setTimeout(() => todoItem.remove(), 300);
            
        } else if (target.classList.contains("edit-btn")) {
            // Modalità edit
            const testo = todoItem.querySelector(".todo-text");
            const nuovoTesto = prompt("Modifica:", testo.textContent);
            if (nuovoTesto) {
                testo.textContent = nuovoTesto;
            }
        }
    });
}
```

## Parte V - Espressioni Regolari

### 11. Regex - Il Linguaggio dei Pattern 🔍

Le espressioni regolari (regex) sono come metal detector per il testo - cercano pattern specifici nelle stringhe. Immagina di dover trovare tutti i numeri di telefono in un documento di 100 pagine - le regex lo fanno in millisecondi.

#### Sintassi Base

```javascript
// Anatomia di una regex
const regex = /pattern/flags;

// Esempio base
function baseRegex() {
    const pattern = /ciao/;
    const testo = "ciao mondo, CIAO a tutti";
    
    // test() - ritorna true/false
    console.log(pattern.test(testo));  // true
    
    // match() - ritorna dettagli del match
    console.log(testo.match(pattern));  // ["ciao", index: 0]
    
    // Con flag i (case insensitive)
    const patternI = /ciao/i;
    console.log(testo.match(patternI));  // ["ciao"] (o "CIAO")
    
    // Con flag g (global - tutti i match)
    const patternG = /ciao/gi;
    console.log(testo.match(patternG));  // ["ciao", "CIAO"]
}

// Metodi principali
function metodiRegex() {
    const email = /^[\w.]+@[\w]+\.[a-z]{2,}$/i;
    const testo = "mario@example.com";
    
    // test() - Verifica se matcha
    if (email.test(testo)) {
        console.log("Email valida");
    }
    
    // match() - Trova match
    const risultato = testo.match(email);
    console.log(risultato);
    
    // replace() - Sostituisce match
    const censurato = testo.replace(/@[\w.]+/, "@***");
    console.log(censurato);  // "mario@***"
    
    // split() - Divide per pattern
    const parole = "uno,due;tre:quattro".split(/[,:;]/);
    console.log(parole);  // ["uno", "due", "tre", "quattro"]
}
```

#### Caratteri Speciali e Escape

```javascript
// Caratteri speciali nelle regex
function caratteriSpeciali() {
    // Questi hanno significati speciali: . * + ? ^ $ { } ( ) [ ] \ |
    
    // . = qualsiasi carattere (tranne newline)
    const qualsiasi = /a.c/;
    console.log(qualsiasi.test("abc"));  // true
    console.log(qualsiasi.test("a5c"));  // true
    console.log(qualsiasi.test("ac"));   // false (manca carattere)
    
    // Per cercare un punto letterale, usa escape
    const puntoLetterale = /3\.14/;
    console.log(puntoLetterale.test("3.14"));  // true
    console.log(puntoLetterale.test("3x14"));  // false
    
    // Esempio: cercare prezzi
    function cercaPrezzi(testo) {
        // Pattern: $ seguito da numeri, punto opzionale e decimali
        const prezzoRegex = /\$\d+(\.\d{2})?/g;
        const prezzi = testo.match(prezzoRegex);
        return prezzi || [];
    }
    
    console.log(cercaPrezzi("Costa $19.99 o $20"));  // ["$19.99", "$20"]
    
    // Escape di caratteri speciali
    const caratteriDaEscape = /[\.\*\+\?\^\$\{\}\(\)\[\]\\\|]/g;
    const testoConSpeciali = "Costo: $5.99 (sconto del 10%)";
    const escaped = testoConSpeciali.replace(caratteriDaEscape, "\\$&");
    console.log(escaped);
}
```

#### Character Classes []

Le parentesi quadre creano set di caratteri alternativi.

```javascript
// Character classes base
function characterClasses() {
    // Set semplice - uno qualsiasi di questi
    const vocali = /[aeiou]/;
    console.log("test".match(vocali));  // ["e"]
    
    const vocaliGlobal = /[aeiou]/g;
    console.log("ciao mondo".match(vocaliGlobal));  // ["i", "a", "o", "o", "o"]
    
    // Range di caratteri
    const minuscole = /[a-z]/;
    const maiuscole = /[A-Z]/;
    const cifre = /[0-9]/;
    const alfanumerico = /[a-zA-Z0-9]/;
    
    // Negazione con ^
    const nonVocali = /[^aeiou]/g;
    console.log("ciao".match(nonVocali));  // ["c"]
    
    // Dentro [], molti caratteri speciali diventano normali!
    const specialiNormali = /[+*.?]/;  // Cerca +, *, . o ? letteralmente
    console.log("3+5*2".match(/[+*]/g));  // ["+", "*"]
}

// Regole speciali dentro []
function regoleDentroQuadre() {
    // Caratteri che rimangono speciali dentro []
    
    // 1. ^ all'inizio = negazione
    const nonNumeri = /[^0-9]/g;
    
    // 2. - nel mezzo = range
    const lettere = /[a-z]/;
    
    // Ma - all'inizio o alla fine è letterale
    const conTrattino = /[-a-z]/;  // Cerca - o lettere
    const conTrattinoFine = /[a-z-]/;  // Cerca lettere o -
    
    // 3. ] deve essere escaped
    const conQuadra = /[\]]/;  // Cerca ]
    
    // Esempio pratico: validare username
    function validaUsername(username) {
        // Permetti lettere, numeri, underscore, trattino
        // Deve iniziare con lettera
        // Lunghezza 3-20
        const pattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        return pattern.test(username);
    }
    
    console.log(validaUsername("user_123"));  // true
    console.log(validaUsername("123user"));   // false (inizia con numero)
    console.log(validaUsername("u"));         // false (troppo corto)
}
```

#### Classi Predefinite

JavaScript offre scorciatoie per pattern comuni.

```javascript
// \d - Digits (cifre)
function classeDigit() {
    const contieneNumeri = /\d/;
    const soloNumeri = /^\d+$/;
    const numeroTelefono = /\d{3}-\d{3}-\d{4}/;  // 123-456-7890
    
    // Estrarre tutti i numeri
    function estraiNumeri(testo) {
        const numeri = testo.match(/\d+/g);
        return numeri ? numeri.map(Number) : [];
    }
    
    console.log(estraiNumeri("Ho 25 anni e 2 gatti"));  // [25, 2]
}

// \s - Whitespace (spazi)
function classeWhitespace() {
    // \s matcha: spazio, tab, newline, carriage return
    
    // Rimuovere spazi extra
    function normalizzaSpazi(testo) {
        return testo
            .trim()  // Rimuove spazi iniziali/finali
            .replace(/\s+/g, " ");  // Sostituisce spazi multipli con uno
    }
    
    console.log(normalizzaSpazi("  Troppi    spazi    qui  "));
    // "Troppi spazi qui"
    
    // Dividere per whitespace
    const parole = "uno\tdue\ntre    quattro".split(/\s+/);
    console.log(parole);  // ["uno", "due", "tre", "quattro"]
}

// \w - Word characters
function classeWord() {
    // \w = [a-zA-Z0-9_]
    
    // Validare identificatori
    function validaIdentificatore(nome) {
        return /^\w+$/.test(nome);
    }
    
    console.log(validaIdentificatore("var_123"));  // true
    console.log(validaIdentificatore("var-123"));  // false (trattino non è \w)
    
    // Estrarre parole
    const testo = "Hello, world! Come va?";
    const parole = testo.match(/\w+/g);
    console.log(parole);  // ["Hello", "world", "Come", "va"]
}

// \b - Word boundary
function wordBoundary() {
    // \b marca il confine tra \w e \W
    
    // Cercare parole intere
    const soloGatto = /\bgatto\b/;
    console.log(soloGatto.test("il gatto dorme"));     // true
    console.log(soloGatto.test("il gattone dorme"));   // false
    console.log(soloGatto.test("regatto veloce"));     // false
    
    // Capitalizzare parole
    function capitalizza(testo) {
        return testo.replace(/\b\w/g, char => char.toUpperCase());
    }
    
    console.log(capitalizza("ciao mondo bello"));  // "Ciao Mondo Bello"
}

// Classi negate (maiuscole)
function classiNegate() {
    // \D = non-digit [^0-9]
    // \S = non-whitespace [^\s]
    // \W = non-word [^a-zA-Z0-9_]
    
    // Rimuovere tutto tranne numeri
    function soloNumeri(testo) {
        return testo.replace(/\D/g, "");
    }
    
    console.log(soloNumeri("Tel: 123-456-7890"));  // "1234567890"
    
    // Rimuovere tutto tranne lettere e spazi
    function soloTesto(testo) {
        return testo.replace(/[^a-zA-Z\s]/g, "");
    }
    
    console.log(soloTesto("Ciao123! Come va?"));  // "Ciao Come va"
}
```

#### Quantificatori

Specificano quante volte un pattern deve ripetersi.

```javascript
// Quantificatori base
function quantificatori() {
    // * = zero o più
    const zeroOPiu = /ab*c/;  // a, seguito da 0+ b, seguito da c
    console.log(zeroOPiu.test("ac"));    // true (0 b)
    console.log(zeroOPiu.test("abc"));   // true (1 b)
    console.log(zeroOPiu.test("abbbc")); // true (3 b)
    
    // + = uno o più
    const unoOPiu = /ab+c/;  // a, seguito da 1+ b, seguito da c
    console.log(unoOPiu.test("ac"));     // false (serve almeno 1 b)
    console.log(unoOPiu.test("abc"));    // true
    console.log(unoOPiu.test("abbbc"));  // true
    
    // ? = zero o uno (opzionale)
    const opzionale = /colou?r/;  // color o colour
    console.log(opzionale.test("color"));   // true
    console.log(opzionale.test("colour"));  // true
    
    // {n} = esattamente n volte
    const cap = /^\d{5}$/;  // Esattamente 5 cifre
    console.log(cap.test("12345"));  // true
    console.log(cap.test("1234"));   // false
    
    // {n,m} = da n a m volte
    const password = /^.{8,20}$/;  // Da 8 a 20 caratteri
    
    // {n,} = almeno n volte
    const almenoTre = /\d{3,}/;  // Almeno 3 cifre
}

// Greedy vs Lazy
function greedyVsLazy() {
    const html = '<div>Primo</div><div>Secondo</div>';
    
    // Greedy (default) - prende il più possibile
    const greedy = /<div>.*<\/div>/;
    console.log(html.match(greedy));
    // ["<div>Primo</div><div>Secondo</div>"]
    
    // Lazy (con ?) - prende il minimo possibile
    const lazy = /<div>.*?<\/div>/;
    console.log(html.match(lazy));
    // ["<div>Primo</div>"]
    
    // Tutti i match lazy
    const lazyGlobal = /<div>.*?<\/div>/g;
    console.log(html.match(lazyGlobal));
    // ["<div>Primo</div>", "<div>Secondo</div>"]
}
```

#### Pattern Pratici

Esempi dal mondo reale:

```javascript
// Validazione email (semplificata)
function validaEmail(email) {
    // Versione semplice
    const semplice = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Versione più robusta
    const robusta = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return robusta.test(email);
}

// Validazione password forte
function validaPassword(password) {
    // Almeno 8 caratteri
    // Almeno una maiuscola
    // Almeno una minuscola
    // Almeno un numero
    // Almeno un carattere speciale
    
    const lunghezza = /.{8,}/;
    const maiuscola = /[A-Z]/;
    const minuscola = /[a-z]/;
    const numero = /\d/;
    const speciale = /[!@#$%^&*]/;
    
    ```javascript
    const requisiti = {
        lunghezza: lunghezza.test(password),
        maiuscola: maiuscola.test(password),
        minuscola: minuscola.test(password),
        numero: numero.test(password),
        speciale: speciale.test(password)
    };
    
    const valida = Object.values(requisiti).every(r => r);
    
    return {
        valida,
        requisiti,
        forza: Object.values(requisiti).filter(r => r).length
    };
}

// Numero di telefono italiano
function validaTelefono(numero) {
    // Formato: +39 3XX XXX XXXX o varianti
    const pattern = /^(\+39\s?)?3\d{2}\s?\d{3}\s?\d{4}$/;
    
    // Pulisci prima di validare
    const pulito = numero.replace(/[\s\-\.]/g, "");
    return pattern.test(pulito);
}

// Pulizia input (dal Calorie Counter)
function pulisciInput(str) {
    // Rimuove +, -, spazi
    const regex = /[+\-\s]/g;
    return str.replace(regex, '');
}

// Validazione notazione scientifica
function controllaNotazioneScientifica(str) {
    // Pattern: numero + e + numero (case insensitive)
    const regex = /\d+e\d+/i;
    
    if (regex.test(str)) {
        return {
            valido: false,
            errore: "Notazione scientifica non supportata"
        };
    }
    
    return { valido: true };
}

// Estrazione e formattazione date
function estraiDate(testo) {
    // Pattern: dd/mm/yyyy o dd-mm-yyyy
    const pattern = /\b(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})\b/g;
    const date = [];
    let match;
    
    while ((match = pattern.exec(testo)) !== null) {
        date.push({
            completa: match[0],
            giorno: match[1],
            mese: match[2],
            anno: match[3]
        });
    }
    
    return date;
}

console.log(estraiDate("Nato il 15/03/1990, laureato il 22-07-2012"));
```

## Parte VI - Strutture Dati e Pattern

### 12. Oggetti e Strutture Complesse 🏗️

Gli oggetti sono il cuore della programmazione JavaScript moderna. Mentre gli array sono liste ordinate, gli oggetti sono dizionari - ogni valore ha una chiave specifica.

#### Oggetti come Dizionari

```javascript
// Creazione e accesso oggetti
function gestioneOggetti() {
    // Creazione oggetto
    const persona = {
        nome: "Mario",
        eta: 30,
        "nome-completo": "Mario Rossi",  // Chiave con trattino
        100: "cento"  // Chiave numerica (convertita in stringa)
    };
    
    // Accesso con dot notation
    console.log(persona.nome);  // "Mario"
    
    // Accesso con bracket notation (necessario per chiavi speciali)
    console.log(persona["nome-completo"]);  // "Mario Rossi"
    console.log(persona[100]);  // "cento"
    
    // Bracket notation con variabili
    const proprieta = "eta";
    console.log(persona[proprieta]);  // 30
    
    // Aggiungere proprietà
    persona.citta = "Roma";
    persona["codice-fiscale"] = "RSSMRA90A01H501Z";
    
    // Eliminare proprietà
    delete persona[100];
    
    // Verificare esistenza
    if ("nome" in persona) {
        console.log("Ha un nome");
    }
    
    if (persona.cognome === undefined) {
        console.log("Cognome non definito");
    }
}

// Oggetti dinamici
function oggettiDinamici() {
    // Chiavi calcolate
    const prefisso = "user_";
    const id = 123;
    
    const utente = {
        [prefisso + id]: "Mario",
        [`${prefisso}email`]: "mario@example.com",
        [Symbol.for("id")]: 123  // Chiave Symbol
    };
    
    console.log(utente.user_123);  // "Mario"
    
    // Costruire oggetto da array
    function arrayToObject(chiavi, valori) {
        const oggetto = {};
        
        for (let i = 0; i < chiavi.length; i++) {
            oggetto[chiavi[i]] = valori[i];
        }
        
        return oggetto;
    }
    
    const headers = ["nome", "eta", "citta"];
    const dati = ["Luigi", 25, "Milano"];
    console.log(arrayToObject(headers, dati));
    // { nome: "Luigi", eta: 25, citta: "Milano" }
}
```

#### Nesting di Strutture

```javascript
// Struttura complessa tipo applicazione
const app = {
    utente: {
        profilo: {
            nome: "Giovanni",
            cognome: "Verdi",
            dataNascita: "1990-05-15",
            contatti: {
                email: "giovanni@example.com",
                telefono: "+39 333 1234567",
                social: {
                    twitter: "@giovanni",
                    linkedin: "giovanni-verdi"
                }
            }
        },
        impostazioni: {
            tema: "dark",
            lingua: "it",
            notifiche: {
                email: true,
                push: false,
                sms: false
            }
        },
        ruoli: ["utente", "moderatore"]
    },
    sessione: {
        token: "abc123",
        scadenza: "2024-12-31",
        ultimoAccesso: new Date()
    }
};

// Navigazione sicura con optional chaining
function navigazioneStruttura(dati) {
    // Optional chaining (?.) - evita errori se proprietà non esiste
    console.log(dati.utente?.profilo?.nome);  // "Giovanni"
    console.log(dati.utente?.indirizzo?.via);  // undefined (non errore!)
    
    // Nullish coalescing (??) - valore di default
    const tema = dati.utente?.impostazioni?.tema ?? "light";
    console.log(tema);  // "dark"
    
    // Accesso profondo con controlli
    function ottieniValore(oggetto, percorso, defaultValue) {
        const chiavi = percorso.split(".");
        let valore = oggetto;
        
        for (const chiave of chiavi) {
            valore = valore?.[chiave];
            if (valore === undefined) {
                return defaultValue;
            }
        }
        
        return valore;
    }
    
    console.log(ottieniValore(app, "utente.profilo.contatti.email", "N/A"));
    // "giovanni@example.com"
}
```

#### Iterazione su Oggetti

```javascript
// Metodi di iterazione
function iteraOggetti() {
    const inventario = {
        mele: 10,
        pere: 5,
        banane: 8,
        arance: 12
    };
    
    // Object.keys() - array delle chiavi
    console.log("=== KEYS ===");
    const chiavi = Object.keys(inventario);
    for (const frutto of chiavi) {
        console.log(`${frutto}: ${inventario[frutto]} kg`);
    }
    
    // Object.values() - array dei valori
    console.log("=== VALUES ===");
    const quantita = Object.values(inventario);
    const totale = quantita.reduce((sum, q) => sum + q, 0);
    console.log(`Totale: ${totale} kg`);
    
    // Object.entries() - array di [chiave, valore]
    console.log("=== ENTRIES ===");
    for (const [frutto, quantita] of Object.entries(inventario)) {
        if (quantita < 10) {
            console.log(`⚠️ Riordinare ${frutto} (solo ${quantita} kg)`);
        }
    }
    
    // for...in (include proprietà ereditate)
    console.log("=== FOR...IN ===");
    for (const chiave in inventario) {
        if (inventario.hasOwnProperty(chiave)) {
            console.log(`${chiave}: ${inventario[chiave]}`);
        }
    }
}

// Trasformazioni oggetti
function trasformaOggetti() {
    const prezzi = {
        mela: 2.5,
        pera: 3.0,
        banana: 1.8
    };
    
    // Oggetto -> Array per elaborazione
    const prezziScontati = Object.entries(prezzi)
        .map(([frutto, prezzo]) => [frutto, prezzo * 0.8])
        .filter(([frutto, prezzo]) => prezzo > 2)
        .reduce((acc, [frutto, prezzo]) => {
            acc[frutto] = prezzo;
            return acc;
        }, {});
    
    console.log(prezziScontati);
    
    // Clone profondo (deep copy)
    function cloneProfondo(obj) {
        if (obj === null || typeof obj !== "object") {
            return obj;
        }
        
        if (obj instanceof Date) {
            return new Date(obj);
        }
        
        if (obj instanceof Array) {
            return obj.map(item => cloneProfondo(item));
        }
        
        const cloned = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = cloneProfondo(obj[key]);
            }
        }
        
        return cloned;
    }
    
    // O usa JSON per oggetti semplici
    const clone = JSON.parse(JSON.stringify(prezzi));
}
```

### 13. Pattern e Costrutti Pratici 🎯

I pattern sono soluzioni riutilizzabili a problemi comuni. Come ricette collaudate che funzionano sempre.

#### Pattern di Accumulo

```javascript
// Accumulo con diversi tipi di dati
function patternAccumulo() {
    // Accumulo numerico - somma
    function sommaTotale(numeri) {
        let totale = 0;  // Accumulatore iniziale
        
        for (const numero of numeri) {
            totale += numero;  // Accumula
            console.log(`Aggiungo ${numero}, totale: ${totale}`);
        }
        
        return totale;
    }
    
    // Accumulo stringa - costruzione HTML
    function costruisciTabella(righe) {
        let html = "<table>\n";  // Inizio
        
        for (const riga of righe) {
            html += "  <tr>\n";
            for (const cella of riga) {
                html += `    <td>${cella}</td>\n`;
            }
            html += "  </tr>\n";
        }
        
        html += "</table>";  // Fine
        return html;
    }
    
    // Accumulo array - filtraggio
    function filtraEAccumula(dati, condizione) {
        const risultati = [];  // Array vuoto
        
        for (const elemento of dati) {
            if (condizione(elemento)) {
                risultati.push(elemento);  // Accumula se valido
            }
        }
        
        return risultati;
    }
    
    // Accumulo oggetto - raggruppamento
    function raggruppaPerCategoria(prodotti) {
        const gruppi = {};  // Oggetto vuoto
        
        for (const prodotto of prodotti) {
            const categoria = prodotto.categoria;
            
            // Inizializza array se non esiste
            if (!gruppi[categoria]) {
                gruppi[categoria] = [];
            }
            
            gruppi[categoria].push(prodotto);
        }
        
        return gruppi;
    }
    
    // Test raggruppamento
    const prodotti = [
        { nome: "Mela", categoria: "frutta", prezzo: 2 },
        { nome: "Pane", categoria: "panetteria", prezzo: 3 },
        { nome: "Pera", categoria: "frutta", prezzo: 2.5 },
        { nome: "Focaccia", categoria: "panetteria", prezzo: 4 }
    ];
    
    console.log(raggruppaPerCategoria(prodotti));
}
```

#### Flag Booleane e Variabili di Stato

```javascript
// Sistema di flag completo
class SistemaGioco {
    constructor() {
        // Flag booleane
        this.isPaused = false;
        this.isGameOver = false;
        this.debugMode = false;
        this.soundEnabled = true;
        
        // Variabili di stato
        this.gameState = "menu";  // menu, playing, paused, gameOver
        this.difficulty = "normal";  // easy, normal, hard
        
        // Contatori
        this.livelloCorrente = 1;
        this.vite = 3;
        this.punteggio = 0;
    }
    
    update() {
        // Early return con flag
        if (this.isGameOver) {
            this.mostraSchermataFinale();
            return;
        }
        
        if (this.isPaused) {
            this.mostraMenuPausa();
            return;
        }
        
        // Logica basata su stato
        switch(this.gameState) {
            case "menu":
                this.aggiornaMenu();
                break;
                
            case "playing":
                this.aggiornaGioco();
                
                // Debug condizionale
                if (this.debugMode) {
                    this.mostraDebugInfo();
                }
                
                // Audio condizionale
                if (this.soundEnabled) {
                    this.riproduciSuoni();
                }
                break;
                
            case "cutscene":
                this.aggiornaCutscene();
                break;
        }
    }
    
    togglePausa() {
        this.isPaused = !this.isPaused;
        this.gameState = this.isPaused ? "paused" : "playing";
        
        if (this.debugMode) {
            console.log(`Gioco ${this.isPaused ? "in pausa" : "ripreso"}`);
        }
    }
    
    perdiVita() {
        this.vite--;
        
        if (this.vite <= 0) {
            this.isGameOver = true;
            this.gameState = "gameOver";
            this.salvaHighScore();
        }
    }
}

// Uso pratico delle flag
function esempioPraticoFlag() {
    let isLoading = false;
    let hasError = false;
    let isFirstLoad = true;
    
    async function caricaDati() {
        // Imposta flag di caricamento
        isLoading = true;
        hasError = false;
        
        try {
            mostraSpinner();
            
            const dati = await fetch("/api/dati");
            
            if (isFirstLoad) {
                mostraMessaggioBenvenuto();
                isFirstLoad = false;
            }
            
            return dati;
            
        } catch (error) {
            hasError = true;
            mostraErrore(error);
            
        } finally {
            isLoading = false;
            nascondiSpinner();
        }
    }
}
```

#### Pattern di Validazione

```javascript
// Sistema di validazione completo
class ValidatoreForm {
    constructor() {
        this.regole = {
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email non valida"
            },
            password: {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: "Password: min 8 caratteri, maiuscola, minuscola, numero"
            },
            telefono: {
                required: false,
                pattern: /^[0-9\s\-\+\(\)]+$/,
                message: "Numero di telefono non valido"
            }
        };
    }
    
    valida(campo, valore) {
        const regola = this.regole[campo];
        const errori = [];
        
        // Controllo required
        if (regola.required && !valore) {
            errori.push(`${campo} è obbligatorio`);
            return { valido: false, errori };
        }
        
        // Controllo lunghezza minima
        if (regola.minLength && valore.length < regola.minLength) {
            errori.push(`${campo} deve avere almeno ${regola.minLength} caratteri`);
        }
        
        // Controllo pattern
        if (regola.pattern && !regola.pattern.test(valore)) {
            errori.push(regola.message);
        }
        
        return {
            valido: errori.length === 0,
            errori
        };
    }
    
    validaTutto(dati) {
        const risultati = {};
        let tuttoValido = true;
        
        for (const [campo, valore] of Object.entries(dati)) {
            if (this.regole[campo]) {
                risultati[campo] = this.valida(campo, valore);
                
                if (!risultati[campo].valido) {
                    tuttoValido = false;
                }
            }
        }
        
        return {
            valido: tuttoValido,
            campi: risultati
        };
    }
}

// Validazione con early return
function validaOrdine(ordine) {
    // Guard clauses - esci subito se non valido
    if (!ordine) {
        return { valido: false, errore: "Ordine mancante" };
    }
    
    if (!ordine.cliente) {
        return { valido: false, errore: "Cliente mancante" };
    }
    
    if (!ordine.articoli || ordine.articoli.length === 0) {
        return { valido: false, errore: "Nessun articolo nell'ordine" };
    }
    
    if (ordine.totale <= 0) {
        return { valido: false, errore: "Totale non valido" };
    }
    
    // Validazione articoli
    for (const articolo of ordine.articoli) {
        if (!articolo.codice) {
            return { valido: false, errore: `Articolo senza codice` };
        }
        
        if (articolo.quantita <= 0) {
            return { 
                valido: false, 
                errore: `Quantità non valida per ${articolo.codice}` 
            };
        }
    }
    
    // Se arriviamo qui, tutto è valido
    return { 
        valido: true, 
        messaggio: "Ordine valido",
        ordineProcessato: processaOrdine(ordine)
    };
}
```

#### Configuration Objects

```javascript
// Configurazione centralizzata applicazione
const AppConfig = {
    // API Configuration
    api: {
        baseUrl: process.env.API_URL || "https://api.example.com",
        timeout: 5000,
        retryAttempts: 3,
        headers: {
            "Content-Type": "application/json",
            "X-App-Version": "1.0.0"
        }
    },
    
    // UI Configuration
    ui: {
        theme: {
            primary: "#3498db",
            secondary: "#2ecc71",
            danger: "#e74c3c",
            warning: "#f39c12"
        },
        animation: {
            duration: 300,
            easing: "ease-in-out"
        },
        pagination: {
            itemsPerPage: 20,
            maxButtons: 5
        }
    },
    
    // Game Configuration
    game: {
        difficulty: {
            easy: { speed: 1, enemies: 3, bonusMultiplier: 0.5 },
            normal: { speed: 1.5, enemies: 5, bonusMultiplier: 1 },
            hard: { speed: 2, enemies: 8, bonusMultiplier: 2 }
        },
        physics: {
            gravity: 9.8,
            friction: 0.3,
            maxVelocity: 100
        }
    },
    
    // Feature Flags
    features: {
        darkMode: true,
        betaFeatures: false,
        analytics: true,
        debug: process.env.NODE_ENV === "development"
    }
};

// Uso della configurazione
class ApiManager {
    constructor(config = AppConfig.api) {
        this.config = config;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.config.baseUrl}${endpoint}`;
        
        const finalOptions = {
            ...options,
            headers: {
                ...this.config.headers,
                ...options.headers
            },
            timeout: this.config.timeout
        };
        
        let tentativi = 0;
        
        while (tentativi < this.config.retryAttempts) {
            try {
                const response = await fetch(url, finalOptions);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                
                return await response.json();
                
            } catch (error) {
                tentativi++;
                
                if (tentativi >= this.config.retryAttempts) {
                    throw error;
                }
                
                // Attendi prima di riprovare
                await new Promise(resolve => 
                    setTimeout(resolve, 1000 * tentativi)
                );
            }
        }
    }
}
```

## Parte VII - Codice Professionale

### 14. Commenti - La Documentazione del Codice 💭

I commenti sono post-it nel tuo codice. Servono a te futuro e ai tuoi colleghi per capire cosa fa il codice e perché.

```javascript
// Commenti efficaci vs inefficaci
function esempioCommenti() {
    // ❌ CATTIVO: Commento ovvio
    let count = 0;  // Imposta count a 0
    
    // ✅ BUONO: Spiega il perché
    let retryCount = 0;  // Massimo 3 tentativi prima del blocco account
    
    // ❌ CATTIVO: Commento che ripete il codice
    // Incrementa i
    i++;
    
    // ✅ BUONO: Spiega la logica non ovvia
    // Salta indici pari per ottimizzazione memoria su array grandi
    i += 2;
    
    /*
     * ✅ BUONO: Documentazione funzione
     * Calcola il prezzo finale includendo tasse e spedizione
     * 
     * @param {number} prezzo - Prezzo base in euro
     * @param {string} provincia - Codice provincia per calcolo tasse
     * @param {boolean} express - True per spedizione express
     * @returns {Object} Oggetto con breakdown dei costi
     * 
     * @example
     * calcolaTotale(100, "RM", true)
     * // Returns: { base: 100, tasse: 22, spedizione: 15, totale: 137 }
     */
    function calcolaTotale(prezzo, provincia, express = false) {
        // Tasse variano per provincia (semplificato)
        const tasse = provincia === "RM" ? 0.22 : 0.20;
        
        // Spedizione gratuita sopra 50€, altrimenti variabile
        const spedizione = prezzo > 50 ? 0 : (express ? 15 : 5);
        
        return {
            base: prezzo,
            tasse: prezzo * tasse,
            spedizione: spedizione,
            totale: prezzo + (prezzo * tasse) + spedizione
        };
    }
}

// Tag speciali per organizzazione
function tagSpeciali() {
    // TODO: Implementare cache per migliorare performance
    // TODO: [2024-12-01] Aggiungere supporto multi-lingua
    
    // FIXME: Non gestisce correttamente array vuoti
    function processa(array) {
        // HACK: Controllo temporaneo, sostituire con validazione proper
        if (!array || array.length === 0) return [];
        
        // NOTE: L'ordine è importante per la compatibilità API
        array.sort();
        
        // OPTIMIZE: Possibile usare Map invece di oggetto per performance
        const risultati = {};
        
        // DEPRECATED: Usare nuovoMetodo() dalla v2.0
        // @deprecated
        return vecchioMetodo(array);
    }
    
    // BUG: Memory leak con file > 100MB
    // WARNING: Non thread-safe
    // IMPORTANT: Richiede autenticazione
}
```

### 15. Esempi Integrati - Evoluzione del Codice 🔄

Vediamo come il codice evolve da semplice a sofisticato.

```javascript
// EVOLUZIONE: Sistema di notifiche

// Versione 1: Hardcoded e basilare
function notificaV1() {
    alert("Hai un nuovo messaggio!");
}

// Versione 2: Con parametri
function notificaV2(messaggio) {
    alert(messaggio);
}

// Versione 3: Con tipo e opzioni
function notificaV3(messaggio, tipo = "info") {
    const icone = {
        info: "ℹ️",
        success: "✅",
        warning: "⚠️",
        error: "❌"
    };
    
    alert(`${icone[tipo]} ${messaggio}`);
}

// Versione 4: Sistema completo
class SistemaNotifiche {
    constructor() {
        this.notifiche = [];
        this.container = null;
        this.init();
    }
    
    init() {
        // Crea container se non esiste
        if (!document.querySelector("#notifiche")) {
            this.container = document.createElement("div");
            this.container.id = "notifiche";
            this.container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
            `;
            document.body.appendChild(this.container);
        }
    }
    
    mostra(messaggio, tipo = "info", durata = 3000) {
        const id = Date.now();
        
        const notifica = {
            id,
            messaggio,
            tipo,
            timestamp: new Date()
        };
        
        this.notifiche.push(notifica);
        
        // Crea elemento DOM
        const elemento = this.creaElemento(notifica);
        this.container.appendChild(elemento);
        
        // Animazione entrata
        requestAnimationFrame(() => {
            elemento.style.transform = "translateX(0)";
            elemento.style.opacity = "1";
        });
        
        // Auto-rimozione
        if (durata > 0) {
            setTimeout(() => this.rimuovi(id), durata);
        }
        
        return id;
    }
    
    creaElemento(notifica) {
        const div = document.createElement("div");
        div.className = `notifica notifica-${notifica.tipo}`;
        div.dataset.id = notifica.id;
        
        div.style.cssText = `
            padding: 15px 20px;
            margin-bottom: 10px;
            border-radius: 5px;
            background: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transform: translateX(400px);
            opacity: 0;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        `;
        
        const colori = {
            info: "#3498db",
            success: "#2ecc71",
            warning: "#f39c12",
            error: "#e74c3c"
        };
        
        div.style.borderLeft = `4px solid ${colori[notifica.tipo]}`;
        
        div.innerHTML = `
            <span>${this.getIcona(notifica.tipo)}</span>
            <span>${notifica.messaggio}</span>
            <button onclick="notifiche.rimuovi(${notifica.id})" 
                    style="margin-left: auto; border: none; 
                           background: none; cursor: pointer;">✖</button>
        `;
        
        return div;
    }
    
    getIcona(tipo) {
        const icone = {
            info: "ℹ️",
            success: "✅",
            warning: "⚠️",
            error: "❌"
        };
        return icone[tipo] || "📢";
    }
    
    rimuovi(id) {
        const elemento = document.querySelector(`[data-id="${id}"]`);
        
        if (elemento) {
            // Animazione uscita
            elemento.style.transform = "translateX(400px)";
            elemento.style.opacity = "0";
            
            setTimeout(() => {
                elemento.remove();
                this.notifiche = this.notifiche.filter(n => n.id !== id);
            }, 300);
        }
    }
    
    clear() {
        this.notifiche.forEach(n => this.rimuovi(n.id));
    }
}

// Uso
const notifiche = new SistemaNotifiche();
notifiche.mostra("Operazione completata!", "success");
notifiche.mostra("Attenzione: memoria in esaurimento", "warning", 5000);
```

### 16. Best Practices Osservate ✅

```javascript
// Naming Convention
class GestoreUtenti {  // PascalCase per classi
    constructor() {
        this.MAX_UTENTI = 1000;  // UPPER_SNAKE_CASE per costanti
        this.utenteCorrente = null;  // camelCase per variabili
    }
    
    trovaUtentePerId(id) {  // camelCase per metodi
        // Nomi descrittivi per variabili
        const utenteEsistente = this.utenti.find(u => u.id === id);
        const isAmministratore = utenteEsistente?.ruolo === "admin";
        const haPermessi = this.verificaPermessi(utenteEsistente);
        
        return {
            utente: utenteEsistente,
            puoModificare: isAmministratore || haPermessi
        };
    }
}

// Gestione errori robusta
async function operazioneRischiosa(dati) {
    // Validazione input
    if (!dati || typeof dati !== "object") {
        throw new TypeError("Dati deve essere un oggetto");
    }
    
    let connessione = null;
    
    try {
        // Acquisici risorse
        connessione = await apriConnessione();
        
        // Operazione principale
        const risultato = await connessione.esegui(dati);
        
        // Validazione output
        if (!risultato.success) {
            throw new Error(`Operazione fallita: ${risultato.error}`);
        }
        
        return risultato.data;
        
    } catch (error) {
        // Log dettagliato per debug
        console.error("Errore in operazioneRischiosa:", {
            error: error.message,
            stack: error.stack,
            dati: dati,
            timestamp: new Date()
        });
        
        // Rilancia con contesto aggiuntivo
        throw new Error(`Impossibile completare operazione: ${error.message}`);
        
    } finally {
        // Pulizia risorse SEMPRE
        if (connessione) {
            await connessione.chiudi();
        }
    }
}

// Separazione delle responsabilità
// Ogni funzione fa UNA cosa
function validaDatiUtente(dati) {
    return dati.email && dati.email.includes("@");
}

function normalizzaDatiUtente(dati) {
    return {
        ...dati,
        email: dati.email.toLowerCase().trim(),
        nome: dati.nome.trim()
    };
}

function salvaUtente(dati) {
    return database.save("utenti", dati);
}

async function registraUtente(datiGrezzi) {
    // Orchestrazione di funzioni specializzate
    if (!validaDatiUtente(datiGrezzi)) {
        throw new Error("Dati non validi");
    }
    
    const datiPuliti = normalizzaDatiUtente(datiGrezzi);
    const utenteSalvato = await salvaUtente(datiPuliti);
    
    return utenteSalvato;
}
```

## Parte VIII - Progetto Finale Completo

### 17. Todo App Completa - Mettendo Tutto Insieme 🚀

Costruiamo un'applicazione completa che usa tutti i concetti appresi.

```javascript
// ============================================
// TODO APP COMPLETA - REAL WORLD EXAMPLE
// ============================================

class TodoApp {
    constructor() {
        // Stato iniziale
        this.todos = this.caricaDaStorage();
        this.filtroCorrente = "tutti";  // tutti, attivi, completati
        this.modalitaEdit = null;
        
        // Configurazione
        this.config = {
            maxTodos: 100,
            autoSave: true,
            animazioni: true
        };
        
        // Stats
        this.stats = {
            totaliCreati: 0,
            totaliCompletati: 0,
            tempoMedio: 0
        };
        
        this.init();
    }
    
    init() {
        this.creaHTML();
        this.collegaEventi();
        this.render();
        
        console.log("Todo App inizializzata");
    }
    
    creaHTML() {
        const app = document.querySelector("#app");
        
        app.innerHTML = `
            <div class="todo-container">
                <h1>📝 Todo App</h1>
                
                <!-- Input nuovo todo -->
                <div class="input-section">
                    <input type="text" 
                           id="nuovo-todo" 
                           placeholder="Cosa devi fare?"
                           maxlength="100">
                    <button id="aggiungi-btn">Aggiungi</button>
                </div>
                
                <!-- Filtri -->
                <div class="filtri">
                    <button class="filtro active" data-filtro="tutti">
                        Tutti (<span id="count-tutti">0</span>)
                    </button>
                    <button class="filtro" data-filtro="attivi">
                        Attivi (<span id="count-attivi">0</span>)
                    </button>
                    <button class="filtro" data-filtro="completati">
                        Completati (<span id="count-completati">0</span>)
                    </button>
                </div>
                
                <!-- Lista todos -->
                <ul id="lista-todos"></ul>
                
                <!-- Azioni bulk -->
                <div class="azioni-bulk">
                    <button id="completa-tutti">✓ Completa tutti</button>
                    <button id="elimina-completati">🗑 Elimina completati</button>
                </div>
                
                <!-- Stats -->
                <div class="stats">
                    <small>
                        Totale: <span id="stat-totale">0</span> |
                        Completati: <span id="stat-completati">0</span>
                    </small>
                </div>
            </div>
        `;
        
        this.elementi = {
            input: document.querySelector("#nuovo-todo"),
            lista: document.querySelector("#lista-todos"),
            bottoneAggiungi: document.querySelector("#aggiungi-btn"),
            filtri: document.querySelectorAll(".filtro"),
            countTutti: document.querySelector("#count-tutti"),
            countAttivi: document.querySelector("#count-attivi"),
            countCompletati: document.querySelector("#count-completati")
        };
    }
    
    collegaEventi() {
        // Aggiungi todo
        this.elementi.bottoneAggiungi.addEventListener("click", () => {
            this.aggiungiTodo();
        });
        
        this.elementi.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.aggiungiTodo();
            }
        });
        
        // Event delegation per lista
        this.elementi.lista.addEventListener("click", (e) => {
            const todoEl = e.target.closest(".todo-item");
            if (!todoEl) return;
            
            const id = parseInt(todoEl.dataset.id);
            
            if (e.target.classList.contains("check-btn")) {
                this.toggleCompleta(id);
                
            } else if (e.target.classList.contains("delete-btn")) {
                this.eliminaTodo(id);
                
            } else if (e.target.classList.contains("edit-btn")) {
                this.iniziaEdit(id);
            }
        });
        
        // Filtri
        this.elementi.filtri.forEach(filtro => {
            filtro.addEventListener("click", () => {
                this.cambiaFiltro(filtro.dataset.filtro);
            });
        });
        
        // Azioni bulk
        document.querySelector("#completa-tutti").addEventListener("click", () => {
            this.completaTutti();
        });
        
        document.querySelector("#elimina-completati").addEventListener("click", () => {
            if (confirm("Eliminare tutti i todo completati?")) {
                this.eliminaCompletati();
            }
        });
    }
    
    aggiungiTodo() {
        const testo = this.elementi.input.value.trim();
        
        // Validazione
        if (!testo) {
            this.mostraMessaggio("Inserisci un testo", "warning");
            return;
        }
        
        if (this.todos.length >= this.config.maxTodos) {
            this.mostraMessaggio(`Massimo ${this.config.maxTodos} todos`, "error");
            return;
        }
        
        // Crea nuovo todo
        const nuovoTodo = {
            id: Date.now(),
            testo: this.sanitizzaTesto(testo),
            completato: false,
            creatoIl: new Date(),
            completatoIl: null,
            priorita: this.calcolaPriorita(testo)
        };
        
        // Aggiungi e aggiorna
        this.todos.unshift(nuovoTodo);  // Aggiungi all'inizio
        this.elementi.input.value = "";
        this.stats.totaliCreati++;
        
        // Effetti
        if (this.config.animazioni) {
            this.animaAggiunta(nuovoTodo.id);
        }
        
        this.mostraMessaggio("Todo aggiunto!", "success");
        this.render();
        this.salvaInStorage();
    }
    
    toggleCompleta(id) {
        const todo = this.todos.find(t => t.id === id);
        
        if (todo) {
            todo.completato = !todo.completato;
            todo.completatoIl = todo.completato ? new Date() : null;
            
            if (todo.completato) {
                this.stats.totaliCompletati++;
            }
            
            this.render();
            this.salvaInStorage();
        }
    }
    
    eliminaTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        
        if (index !== -1) {
            // Animazione prima di rimuovere
            const elemento = document.querySelector(`[data-id="${id}"]`);
            
            if (elemento && this.config.animazioni) {
                elemento.style.animation = "slideOut 0.3s";
                setTimeout(() => {
                    this.todos.splice(index, 1);
                    this.render();
                    this.salvaInStorage();
                }, 300);
            } else {
                this.todos.splice(index, 1);
                this.render();
                this.salvaInStorage();
            }
        }
    }
    
    iniziaEdit(id) {
        const todo = this.todos.find(t => t.id === id);
        const elemento = document.querySelector(`[data-id="${id}"] .todo-text`);
        
        if (todo && elemento) {
            const input = document.createElement("input");
            input.type = "text";
            input.value = todo.testo;
            input.className = "edit-input";
            
            elemento.replaceWith(input);
            input.focus();
            input.select();
            
            // Salva su Enter, annulla su Escape
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    todo.testo = this.sanitizzaTesto(input.value);
                    this.render();
                    this.salvaInStorage();
                } else if (e.key === "Escape") {
                    this.render();
                }
            });
            
            // Salva quando perde focus
            input.addEventListener("blur", () => {
                todo.testo = this.sanitizzaTesto(input.value);
                this.render();
                this.salvaInStorage();
            });
        }
    }
    
    cambiaFiltro(filtro) {
        this.filtroCorrente = filtro;
        
        // Aggiorna classi active
        this.elementi.filtri.forEach(f => {
            f.classList.toggle("active", f.dataset.filtro === filtro);
        });
        
        this.render();
    }
    
    completaTutti() {
        const tuttiCompletati = this.todos.every(t => t.completato);
        
        this.todos.forEach(todo => {
            todo.completato = !tuttiCompletati;
            todo.completatoIl = todo.completato ? new Date() : null;
        });
        
        this.render();
        this.salvaInStorage();
    }
    
    eliminaCompletati() {
        this.todos = this.todos.filter(t => !t.completato);
        this.render();
        this.salvaInStorage();
        this.mostraMessaggio("Completati eliminati", "info");
    }
    
    render() {
        // Filtra todos
        let todosFiltrati = this.todos;
        
        switch(this.filtroCorrente) {
            case "attivi":
                todosFiltrati = this.todos.filter(t => !t.completato);
                break;
            case "completati":
                todosFiltrati = this.todos.filter(t => t.completato);
                break;
        }
        
        // Genera HTML
        const html = todosFiltrati.map(todo => `
            <li class="todo-item ${todo.completato ? 'completato' : ''}" 
                data-id="${todo.id}"
                data-priorita="${todo.priorita}">
                
                <button class="check-btn">
                    ${todo.completato ? '✓' : '○'}
                </button>
                
                <span class="todo-text">${todo.testo}</span>
                
                <span class="todo-meta">
                    ${this.getTempoTrascorso(todo.creatoIl)}
                </span>
                
                <div class="todo-actions">
                    <button class="edit-btn">✏️</button>
                    <button class="delete-btn">🗑</button>
                </div>
            </li>
        `).join("");
        
        this.elementi.lista.innerHTML = html || 
            '<li class="empty">Nessun todo da mostrare</li>';
        
        // Aggiorna contatori
        this.aggiornaContatori();
    }
    
    aggiornaContatori() {
        const attivi = this.todos.filter(t => !t.completato).length;
        const completati = this.todos.filter(t => t.completato).length;
        
        this.elementi.countTutti.textContent = this.todos.length;
        this.elementi.countAttivi.textContent = attivi;
        this.elementi.countCompletati.textContent = completati;
        
        document.querySelector("#stat-totale").textContent = this.stats.totaliCreati;
        document.querySelector("#stat-completati").textContent = this.stats.totaliCompletati;
    }
    
    // Utility functions
    sanitizzaTesto(testo) {
        // Previeni XSS
        const div = document.createElement("div");
        div.textContent = testo.trim();
        return div.innerHTML;
    }
    
    calcolaPriorita(testo) {
        if (testo.includes("URGENTE") || testo.includes("!")) return "alta";
        if (testo.includes("importante")) return "media";
        return "normale";
    }
    
    getTempoTrascorso(data) {
        const ora = new Date();
        const diff = ora - new Date(data);
        const minuti = Math.floor(diff / 60000);
        
        if (minuti < 1) return "ora";
        if (minuti < 60) return `${minuti}m fa`;
        
        const ore = Math.floor(minuti / 60);
        if (ore < 24) return `${ore}h fa`;
        
        const giorni = Math.floor(ore / 24);
        return `${giorni}g fa`;
    }
    
    animaAggiunta(id) {
        setTimeout(() => {
            const elemento = document.querySelector(`[data-id="${id}"]`);
            if (elemento) {
                elemento.style.animation = "slideIn 0.3s";
            }
        }, 10);
    }
    
    mostraMessaggio(testo, tipo = "info") {
        // Sistema di notifiche semplice
        const messaggio = document.createElement("div");
        messaggio.className = `messaggio messaggio-${tipo}`;
        messaggio.textContent = testo;
        
        document.body.appendChild(messaggio);
        
        setTimeout(() => {
            messaggio.style.opacity = "0";
            setTimeout(() => messaggio.remove(), 300);
        }, 2000);
    }
    
    // Storage
    salvaInStorage() {
        if (this.config.autoSave) {
            localStorage.setItem("todos", JSON.stringify(this.todos));
            localStorage.setItem("stats", JSON.stringify(this.stats));
        }
    }
    
    caricaDaStorage() {
        try {
            const todos = localStorage.getItem("todos");
            const stats = localStorage.getItem("stats");
            
            if (stats) {
                this.stats = JSON.parse(stats);
            }
            
            return todos ? JSON.parse(todos) : [];
        } catch (error) {
            console.error("Errore caricamento storage:", error);
            return [];
        }
    }
}

// CSS per l'applicazione
const style = document.createElement("style");
style.textContent = `
    .todo-container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    
    .input-section {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    #nuovo-todo {
        flex: 1;
        padding: 12px;
        border: 2px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
    }
    
    #aggiungi-btn {
        padding: 12px 24px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
    
    #aggiungi-btn:hover {
        background: #2980b9;
    }
    
    .filtri {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .filtro {
        padding: 8px 16px;
        background: #ecf0f1;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .filtro.active {
        background: #3498db;
        color: white;
    }
    
    #lista-todos {
        list-style: none;
        padding: 0;
    }
    
    .todo-item {
        display: flex;
        align-items: center;
        padding: 15px;
        background: white;
        border: 1px solid #ecf0f1;
        border-radius: 5px;
        margin-bottom: 10px;
        transition: all 0.3s;
    }
    
    .todo-item.completato {
        opacity: 0.6;
    }
    
    .todo-item.completato .todo-text {
        text-decoration: line-through;
    }
    
    .check-btn {
        width: 30px;
        height: 30px;
        border: 2px solid #3498db;
        border-radius: 50%;
        background: white;
        cursor: pointer;
        margin-right: 15px;
        font-size: 16px;
    }
    
    .todo-text {
        flex: 1;
    }
    
    .todo-meta {
        color: #95a5a6;
        font-size: 12px;
        margin: 0 10px;
    }
    
    .todo-actions {
        display: flex;
        gap: 5px;
    }
    
    .edit-btn, .delete-btn {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        opacity: 0.6;
    }
    
    .edit-btn:hover, .delete-btn:hover {
        opacity: 1;
    }
    
    .empty {
        text-align: center;
        padding: 40px;
        color: #95a5a6;
    }
    
    .azioni-bulk {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    
    .azioni-bulk button {
        padding: 8px 16px;
        background: #ecf0f1;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .stats {
        text-align: center;
        margin-top: 20px;
        color: #7f8c8d;
    }
    
    .messaggio {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        z-index: 1000;
        transition: opacity 0.3s;
    }
    
    .messaggio-success { background: #2ecc71; }
    .messaggio-error { background: #e74c3c; }
    .messaggio-warning { background: #f39c12; }
    .messaggio-info { background: #3498db; }
    
    .edit-input {
        flex: 1;
        padding: 5px;
        font-size: inherit;
        border: 1px solid #3498db;
        border-radius: 3px;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inizializza l'app quando il DOM è pronto
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        window.todoApp = new TodoApp();
    });
} else {
    window.todoApp = new TodoApp();
}
```

---
