# Functional Programming Spreadsheet - freeCodeCamp Project

## English Version

<table>
  <tr width="675">
    <td>
      <img width="675" height="306" alt="Time Analysis Simulation - English Version" src="https://github.com/user-attachments/assets/a7526289-c279-4cc4-9db3-3dee6b094250" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <i>Practical example of the Spreadsheet analyzing usability test data.</i>
    </td>
  </tr>
</table>
The data entered simulate completion times (in seconds) and errors made by 5 users testing a new feature (for example, a checkout process).
The Mean (93s) and Median (90s) of completion times are very close. This is an excellent signal, because it indicates a consistent and predictable user experience, without extreme outliers that would distort the average. <br>
Total Errors (5) are analyzed together with times, revealing a key insight: the user with the longest time (110s) was also the one who made the most errors (3).
In a real context, this result provides a clear next step: the UX team should immediately review the session recording of that specific user (User 3) to identify the design flaw that caused both the delay and the errors, leading to targeted optimization.
<br>
<br>
<br>
<table>
  <tr width="675">
    <td>
      <img width="675" height="361" alt="Test A:B Simulation - English version" src="https://github.com/user-attachments/assets/293ffa72-ebd9-49f3-86ef-49750e1b9ed7" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <i>Practical example of the Spreadsheet used to quickly analyze A/B Test results.</i> 
    </td>
  </tr>
</table>

This simulation compares two designs: "Design A" (the original Control) and "Design B" (the New version), to see which of the two has a better Conversion Rate for the "Request Demo" button.
The spreadsheet calculates the Conversion Rate for both, showing Design A at 12.4% and Design B at 15.4%. This metric is crucial because it measures the persuasive strength of each design.<br>
The key metric "Lift (Improvement)" shows that Design B performs ~3 percentage points higher than the original.
This provides clear, data-driven validation. The insight from this spreadsheet is a clear recommendation to replace Design A with Design B, since the new design is clearly more effective at converting users.

---

### The Project
Functional spreadsheet developed with pure JavaScript, implementing advanced functions such as sums, averages, medians, ranges and formula evaluation. A project that demonstrates functional programming principles applied to a real-world use case.

### The Breakthrough: When Currying "Clicked"

It was really interesting to encounter **currying with arrow functions** for the first time.
At first it just seemed like strange syntax: `character1 => character2 => num => ...`. Even 3 arrows?<br>
Now I consider it a very simple concept, but initially it wasn't at all. Because it involved cognitively restructuring a concept I had by then taken for granted: arrow functions.<br>
I will summarize below all the analogies and explanations that the Code Tutor provided to help me understand the concept.

#### The Factory Analogy

A normal function is like a machine that needs all keys inserted simultaneously:
```javascript
const add = (a, b) => a + b; // You have to give it a and b immediately
```

A curried function is instead a **factory of specialized machines**:
```javascript
const curriedAdd = a => b => a + b;
```

- `curriedAdd(10)`: Doesn't give you a result. It gives you a new machine with 10 "welded" inside.
- `const add10 = curriedAdd(10)`: You save this specialized machine.
- `add10(5)`: Now you use the machine. Result: 15.

This means that each level "locks" a piece of information and passes a new function to the next level. It's **closure** at work, so each function "remembers" (keeps in memory) the parameters received at higher levels.

#### The .zip File vs The Folder 📦

I continued through the exercises, but after making a completely avoidable error I decided to delve deeper: both because I didn't want to make similar mistakes, and because I didn't want any gaps in my understanding.<br>
Here's the analogy that was most effective for me:

**Long Version (The Folder 📁):**
```javascript
const elemValue = num => {
  const inner = character => idToText(character + num);
  return inner;
}
```
It's a folder. You can open it, add `console.log` in it for debugging, inspect it.

**Short Version (The .zip File 📦):**
```javascript
const elemValue = num => character => idToText(character + num);
```
It's a compressed file. It contains exactly the same thing, but without "noise" (`const`, `return`, `{}`). It therefore shows only the pure logic.<br>
At that point I wondered: "The compact solution is certainly more elegant and, paradoxically, once you understand how it works it's even more readable than the extended version. Is the price you pay poor scalability?"

After some research, here's what emerged in terms of "ideal workflow":
1. I write the short version for elegance
2. If there's a bug, I "decompress" into the long version
3. I add `console.log` for debugging
4. I solve the problem
5. I "recompress" into the short version

### What I Learned

**Advanced Functional Programming:**
- **Currying:** Functions that return functions, creating progressive specializations.
- **Closure:** Inner functions keep outer function variables in memory.
- **Partial Application:** Locking some arguments to create new functions on the fly.
- **Pure Functions:** Functions without side effects that facilitate debugging and testing.

**Advanced JavaScript Syntax:**
- Implicit return with arrow functions: `x => y` equals `x => { return y }`.
- Multi-level currying: `a => b => c => result`.
- Destructuring and pattern matching with advanced regex.

**String and Regex Manipulation:**
- Formula evaluation with complex regex for mathematical operations.
- Pattern `/([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi` to handle cell ranges.
- Recursive replacement with `.replace()` to expand nested formulas.

**Array Methods and Composition:**
- `.reduce()`, `.map()`, `.filter()`, `.some()`, `.every()`, `.slice()` in functional contexts.
- Function composition to create data transformation pipelines.
- `new Set()` to remove duplicates.

**Statistical Algorithms:**
- Implementation of `sum`, `average`, `median` with functional approach.
- Handling even/odd arrays for median calculation.

**Spreadsheet Architecture:**
- Cell identification system (A1, B2, etc.).
- Recursive formula evaluation with cell dependencies.
- Circular reference prevention.

### Reflection

Now when I encounter a syntax like `num => character => idToText(character + num)`, my brain no longer reads code, it reads a flow: "I take `num`, which leads me to a function that takes `character`, which leads me to the final result."<br>
The `=>` syntax has become a **visual flow diagram** for me. Every time I encountered it subsequently, I said to myself "leads to...", as if I were following a map. No more parentheses, returns and temporary variables to keep in mind, just the pure transformation of data, step by step.

---

**Next Project**: Build a Telephone Number Validator Project (CERTIFICATION PROJECT!)

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

## Versione Italiana

<table>
  <tr width="675">
    <td>
      <img width="675" height="306" alt="Analisi Tempo Simulazione - Versione Italiana" src="https://github.com/user-attachments/assets/d108ebf2-5faf-48dd-b749-141c052b29dd" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <i>Esempio pratico dello Spreadsheet mentre analizza i dati di un test di usabilità.</i>
    </td>
  </tr>
</table>

I dati inseriti simulano i tempi di completamento (in secondi) e gli errori commessi da 5 utenti che testano una nuova funzionalità (ad esempio, un processo di checkout).
La Media (93s) e la Mediana (90s) dei tempi di completamento sono molto vicine. Questo è un segnale eccellente, perché indica un'esperienza utente consistente e prevedibile, senza valori anomali estremi che distorcerebbero la media. <br>
Gli Errori Totali (5) vengono analizzati insieme ai tempi, rivelando un insight chiave: l'utente con il tempo più lungo (110s) è stato anche quello che ha commesso più errori (3).
In un contesto reale, questo risultato fornisce un chiaro passo successivo: il team UX dovrebbe immediatamente rivedere la registrazione della sessione di quello specifico utente (Utente 3) per identificare il difetto di design che ha causato sia il ritardo sia gli errori, portando a un'ottimizzazione mirata.
<br>
<br>

<table>
  <tr width="675">
    <td align="center">
      <img width="675" height="361" alt="Test A:B Simulazione - Versione Italiana" src="https://github.com/user-attachments/assets/0f46ee6d-9da5-44c2-b62d-7280328f12ee" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <i>Esempio pratico dello Spreadsheet utilizzato per analizzare rapidamente i risultati di un A/B Test.</i>
    </td>
  </tr>
</table>
Questa simulazione confronta due design: "Design A" (il Controllo originale) e "Design B" (la Nuova versione), per vedere quale dei due ha un Tasso di Conversione migliore per il pulsante "Richiedi Demo".
Il foglio di calcolo calcola il Tasso di Conversione per entrambi, mostrando il Design A al 12.4% e il Design B al 15.4%. Questa metrica è cruciale perché misura la forza persuasiva di ciascun design.<br>
La metrica chiave "Lift (Miglioramento)" mostra che il Design B ha una performance di ~3 punti percentuali superiore all'originale.
Questa è una chiara convalida basata sui dati. L'insight che si ottiene da questo spreadsheet è di raccomandare la sostituzione del Design A con il Design B, poiché il nuovo design è palesemente più efficace nel convertire gli utenti.

---

### Il Progetto
Spreadsheet funzionale sviluppato con JavaScript puro, implementando funzioni avanzate come somme, medie, mediane, range e valutazione di formule. Un progetto che dimostra i principi della programmazione funzionale applicati a un caso d'uso reale.

### La Svolta: Quando il Currying ha fatto "Click"

È stato veramente interessante incontrare per la prima volta il **currying con funzioni freccia**.
All'inizio sembrava solo sintassi strana: `character1 => character2 => num => ...`. Addirittura 3 frecce?<br>
Ora lo reputo un concetto semplicissimo, ma inizialmente non lo era. Perché si è trattato di ristrutturare cognitivamente un concetto che avevo ormai dato per assodato: le arrow function.<br>
Riassumerò qui di seguito tutte le analogie e spiegazioni che mi ha fornito il Code Tutor per farmi comprendere il concetto.

#### L'Analogia della Fabbrica

Una funzione normale è come un macchinario che ha bisogno di tutte le chiavi inserite contemporaneamente:
```javascript
const add = (a, b) => a + b; // Devi darle a e b subito
```

Una funzione curryficata è invece una **fabbrica di macchine specializzate**:
```javascript
const curriedAdd = a => b => a + b;
```

- `curriedAdd(10)`: Non ti dà un risultato. Ti dà una macchina nuova con il 10 "saldato" dentro.
- `const add10 = curriedAdd(10)`: Salvi questa macchina specializzata.
- `add10(5)`: Ora usi la macchina. Risultato: 15.

Ciò significa che ogni livello "blocca" un pezzo di informazione e passa una nuova funzione al livello successivo. È la **closure** al lavoro, perciò ogni funzione "si ricorda" (tiene in memoria) i parametri ricevuti ai livelli superiori.

#### Il File .zip vs La Cartella 📦

Sono andato avanti negli step, ma dopo un errore assolutamente evitabile ho deciso di approfondire ulteriormente: sia perché non volevo rifarne altri, sia perché non volevo lacune.<br>
Ecco l'analogia che per me è stata più efficace:

**Versione Lunga (La Cartella 📁):**
```javascript
const elemValue = num => {
  const inner = character => idToText(character + num);
  return inner;
}
```
È una cartella. Puoi aprirla, buttarci dentro `console.log` per il debug, ispezionarla.

**Versione Corta (Il File .zip 📦):**
```javascript
const elemValue = num => character => idToText(character + num);
```
È un file compresso. Contiene esattamente la stessa cosa, ma senza "rumore" (`const`, `return`, `{}`). Mostra quindi solo la logica pura.<br>
A quel punto mi sono chiesto: "La soluzione compatta è certamente più elegante e, paradossalmente, una volta capito il funzionamento è ancora più leggibile della versione estesa. Il prezzo che si paga è la scarsa scalabilità?"

Dopo qualche ricerca, ecco cos'è emerso in termini di "workflow ideale":
1. Scrivo la versione corta per eleganza
2. Se c'è un bug, "decomprimo" nella versione lunga
3. Aggiungo `console.log` per il debug
4. Risolvo il problema
5. "Ricompatto" nella versione corta

### Cosa Ho Imparato

**Programmazione Funzionale Avanzata:**
- **Currying:** Funzioni che restituiscono funzioni, creando specializzazioni progressive.
- **Closure:** Le funzioni interne tengono in memoria le variabili delle funzioni esterne.
- **Partial Application:** Bloccare alcuni argomenti per creare nuove funzioni al volo.
- **Pure Functions:** Funzioni senza effetti collaterali che facilitano debug e testing.

**Sintassi Avanzata JavaScript:**
- Return implicito con arrow functions: `x => y` equivale a `x => { return y }`.
- Currying a più livelli: `a => b => c => result`.
- Destructuring e pattern matching con regex avanzate.

**Manipolazione di Stringhe e Regex:**
- Valutazione di formule con regex complesse per operazioni matematiche.
- Pattern `/([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi` per gestire range di celle.
- Sostituzione ricorsiva con `.replace()` per espandere formule annidate.

**Array Methods e Composizione:**
- `.reduce()`, `.map()`, `.filter()`, `.some()`, `.every()`, `.slice()` in contesti funzionali.
- Composizione di funzioni per creare pipeline di trasformazione dati.
- `new Set()` per rimuovere duplicati.

**Algoritmi Statistici:**
- Implementazione di `sum`, `average`, `median` con approccio funzionale.
- Gestione di array pari/dispari per calcolo mediana.

**Architettura Spreadsheet:**
- Sistema di identificazione celle (A1, B2, etc.).
- Valutazione ricorsiva di formule con dipendenze tra celle.
- Prevenzione di riferimenti circolari.

### Riflessione

Ora quando incontro una sintassi come `num => character => idToText(character + num)`, il mio cervello non legge più codice, legge un flusso: "Prendo `num`, che mi porta a una funzione che prende `character`, che mi porta al risultato finale."<br>
La sintassi `=>` è diventata per me un **diagramma di flusso visuale**. Ogni volta che l'ho incontrata successivamente, dicevo dentro di me "porta a...", come se stessi seguendo una mappa. Non più parentesi, return e variabili temporanee da tenere a mente, solo la pura trasformazione dei dati, passo dopo passo.

***

**Next Project**: Build a Telephone Number Validator Project (CERTIFICATION PROJECT!)
