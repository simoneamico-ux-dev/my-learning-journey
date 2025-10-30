# Dice Game - freeCodeCamp Project

<img width="1351" height="829" alt="Dice game main interface showing game rules and 5 dice" src="https://github.com/user-attachments/assets/bcd9d61b-26eb-430e-aa25-0343060dcba2" />
<img width="1351" height="501" alt="Game interface showing a small straight pattern with score of 30 points" src="https://github.com/user-attachments/assets/1b41c462-c3d7-4a61-85bb-994a4d2a0217" />
<img width="1351" height="501" alt="Score history panel showing total score of 30 from one small straight worth 30 points" src="https://github.com/user-attachments/assets/82cf4a0c-8b3d-4588-8a12-6acc9319de0c" />
<img width="1351" height="613" alt="Game over screen displaying final score" src="https://github.com/user-attachments/assets/496e8e87-4a19-4d0c-b21f-57070f7174c2" />
<br>
<br>

## English Version

### The Project

Dice Game developed with vanilla JavaScript, focused on algorithmic logic, state management, and DOM manipulation. A project that requires putting together multiple concepts previously learned in a context with minimal structured guidance.

### The Most Difficult Project

It was by far the most difficult project I've completed. There were few steps but they were extremely complex. Now I understand why this is the freeCodeCamp course with the highest abandonment rate.<br>
I didn't like it due to the subject matter: it wasn't a game I knew and it didn't excite me to play it before starting the project to understand the logic, nor after implementing it. The fact is, I learned a lot. In projects like this one, that leave you with "blank canvas", just like in certification projects, the main difficulty lies in putting the pieces together and thus summarizing everything you've learned before.<br>
I missed not having a single complete guide but I was still able to find the information since it's like having two guides. I was waiting to finish the course to merge them but it's possible I'll do it sooner, because it's a step that has always helped me reorganize concepts in my mind.

### The Reflection: Learning Strategy

I'm undecided between doing the Google UX Course 6 or starting the certification project right away, but reading what I've written, the most logical thing that emerges is: merge the guide, do the Google UX course to break away from the full immersion with freeCodeCamp, then start the 4th certification project at full speed.<br>
Thinking about it, it would also be smart to see if the guide needs modifications. After all, I made most of these changes while using it for certification projects, where it became essential. When I have doubts, consulting the guide is my first step, the second is MDN Web Docs, even though lately less so, the third, as a last resort, is the code tutor.<br>
AI for deepening concepts is exceptional, although it's like playing heads or tails hoping what it says is correct. It's also excellent for suggesting alternatives, but it's a tool that makes you lazy quite a bit. A bike with training wheels that if you don't learn to remove them you keep for life.<br>
To mitigate the hallucination risk, for almost 2 months I've replaced Claude with Perplexity, always setting Claude or Gemini as the model, both with chain of thought active, switching between models based on the desired temperament. This way I ensure the performance of the best models accompanied by verifiable sources. Sometimes I check actively, even though I should do it more often, and I discover really interesting sites.

### The Three Critical Concepts

I've noted down some concepts based on comparisons between freeCodeCamp's approach and better alternatives. Nothing was wrong, after all who am I to say otherwise? But exploring the alternatives led me to think critically.

#### 1. style.display vs classList.toggle() - The SRP

FreeCodeCamp proposed:

```javascript
if (isModalShowing) {
  rulesBtn.textContent = "Hide rules";
  rulesContainer.style.display = "block";
} else {
  rulesBtn.textContent = "Show rules";
  rulesContainer.style.display = "none";
}
```

This solution directly modifies the inline styles of the HTML element. Following the Single Responsibility Principle it makes much more sense to separate CSS from JavaScript:

```css
.rules-container {
  display: none;
}

.rules-container.show {
  display: block;
}
```

And in JavaScript:

```javascript
rulesContainer.classList.toggle("show");
rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules";
```

This way we don't have CSS pieces in JavaScript, but rather two distinct documents: JavaScript only deals with calling the style from CSS, not creating it.

#### 2. parseInt() vs Number() - Semantic Rigor

FreeCodeCamp's approach was `score += parseInt(selectedValue);`

I had inserted `score += Number(selectedValue);`

Both are correct, but **Number() seems to be more rigorous**. Here's why:

| Aspect | parseInt() | Number() |
|--------|-----------|----------|
| "15" | 15 ✅ | 15 ✅ |
| "15.7" | 15 (truncates decimals) | 15.7 (keeps decimals) |
| "15px" | 15 (ignores rest) | NaN (error) |
| "" | NaN | 0 |

Number() is more rigorous because it fails when it encounters invalid input, while parseInt() does "optimistic" conversions. Depending on the context, the rigor of Number() can be preferable for catching input errors.

#### 3. innerHTML += vs createElement() - Performance and DOM Integrity

This point emerged from the code tutor who rightly pointed out that:

```javascript
scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
```

It's short and readable, but the better solution, albeit more verbose, is:

```javascript
const historyItem = document.createElement("li");
historyItem.textContent = `${achieved} : ${selectedValue}`;
scoreHistory.appendChild(historyItem);
```

The reason why is really interesting: with `innerHTML +=`, having elements already present:

```html
<li>Three of a kind : 15</li>
<li>Four of a kind : 20</li>
<li>Full house : 25</li>
```

Adding the 4th element with `innerHTML +=`, the browser destroys the first 3 and recreates all 4 from scratch! With `appendChild()` a new element is simply added, leaving the others intact.<br>
This happens because in scoreHistory, with the other 3 elements present, the browser will read all existing HTML (referring only to scoreHistory in this case), convert it to a string, add the new one and destroy the other elements from the DOM, risking changes to their states from what they were before.<br>
`innerHTML` remains excellent when you want to create the content of an element from scratch (with assignment, not concatenation), but for iterative appends `createElement()` + `appendChild()` is decidedly superior.<br>

### What I Learned

**Pattern Matching Algorithms:**
- Detecting Three/Four of a Kind by counting occurrences of numbers
- Detecting Full House by verifying the presence of groups of 3 and 2
- Detecting Straight by converting arrays to strings for pattern matching
- Using `Set` to remove duplicates: `[...new Set(arr)]`

**Array Methods and Iteration:**
- `.forEach()` to iterate and modify DOM elements
- `.reduce()` to accumulate values (sum of dice)
- `.sort()` with numeric callback to sort arrays
- `.includes()` to search patterns in strings
- `.some()` to verify if at least one element satisfies a condition

**Object Manipulation:**
- Counting element occurrences by creating objects `{ number: count }`
- `Object.values()` to extract only values from an object
- Inline ternary operator: `counts[num] = counts[num] ? counts[num] + 1 : 1`

**Event Handling and Validation:**
- Guard clauses to check preconditions before executing code
- Input validation before processing user selections
- `addEventListener()` to handle interactions
- `setTimeout()` to delay execution (allows UI update before alert)

**Professional Code Patterns:**
- DRY (Don't Repeat Yourself): refactoring the `updateRadioOption(5, 0)` call to a single location
- Separation of concerns: specific functions for each type of detection
- Early exit: using `break` to exit loops when finding what you seek
- Semantic naming that explains the "what" not the "how"

**Critical Differences Between Methods:**
- `textContent` vs `innerHTML`: textContent is safer, innerHTML recreates DOM
- Assignment vs concatenation: `=` vs `+=` have different performance implications
- `style.display` vs `classList.toggle()`: CSS/JS separation vs inline styles

***

**Next Project**: Build a Cash Register (CERTIFICATION PROJECT!)

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

### Il Progetto

Dice Game sviluppato con JavaScript puro, focalizzato su logica algoritmica, gestione dello stato e manipolazione del DOM. Un progetto che richiede di mettere insieme molteplici concetti precedentemente appresi in un contesto con poca guida strutturata.

### Il Progetto Più Difficile

È stato il progetto più difficile in assoluto. Erano pochi step ma molto complessi. Ora capisco perché sia il corso di freeCodeCamp con il più alto tasso di abbandono.<br>
Non mi è piaciuto in sé per una questione di argomento: non era un gioco che conoscevo e non mi ha emozionato giocarci prima di iniziare il progetto per capire la logica, e nemmeno dopo averla implementata. Fatto sta che ho imparato tanto. In progetti come questo, che lasciano "carta bianca", proprio come nei certification project, la difficoltà principale sta nel mettere insieme i pezzi e quindi nel riassumere tutto ciò che si è imparato prima.<br>
Mi è mancato il non avere un unico vademecum completo ma sono ugualmente riuscito a reperire le informazioni dato che è come se ne avessi due, aspettavo di finire il corso per unirli ma è possibile che lo faccia prima, perché è un passaggio che mi ha sempre aiutato a riordinare i concetti nella mente.

### La Riflessione: Strategia di Apprendimento

Sono indeciso tra fare il corso 6 di Google UX o iniziare subito il certification project, ma leggendo quanto ho scritto, la cosa più logica che emerge è: unire il vademecum, fare il corso Google UX per staccare dalla full immersion con freeCodeCamp, poi iniziare il 4° certification project con massima carica.<br>
Riflettendoci, sarebbe intelligente anche per capire se il vademecum necessita di modifiche, dopotutto, la maggior parte di queste le ho fatte proprio mentre lo usavo per i certification project, dove diventava essenziale. Quando ho dubbi, consultare il vademecum è il mio primo step, il secondo MDN Web Docs, anche se ultimamente meno, il terzo, come ultima spiaggia, è il code tutor.<br>
L'AI per approfondire i concetti è eccezionale, sebbene tu stia un po' giocando a testa o croce nella speranza che sia giusto ciò che dice. È ottima anche per suggerire alternative, ma è uno strumento che impigrisce parecchio. Una bici con le rotelle che se non impari a togliere te le tieni a vita.<br>
Per mitigare il rischio allucinazione, da quasi 2 mesi ho sostituito Claude con Perplexity, impostando sempre Claude o Gemini come modello, entrambi con chain of thought attiva, spazio tra un modello all'altro in base al temperamento desiderato. Così mi assicuro le prestazioni dei migliori modelli accompagnate da fonti verificabili. A volte lo faccio attivamente, anche se dovrei farlo più spesso, e scopro siti veramente interessanti.

### I Tre Concetti Critici

Mi sono appuntato alcuni concetti basati su confronti tra l'approccio di freeCodeCamp e alternative migliori. Niente era sbagliato, d'altronde chi sono io per dirlo? Ma approfondire le alternative mi ha portato a ragionare con pensiero critico.

#### 1. style.display vs classList.toggle() - Il SRP

FreeCodeCamp ha proposto:

```javascript
if (isModalShowing) {
  rulesBtn.textContent = "Hide rules";
  rulesContainer.style.display = "block";
} else {
  rulesBtn.textContent = "Show rules";
  rulesContainer.style.display = "none";
}
```

Questa soluzione modifica direttamente gli stili inline dell'elemento HTML. Seguendo il Single Responsibility Principle ha molto più senso separare il CSS dal JavaScript:

```css
.rules-container {
  display: none;
}

.rules-container.show {
  display: block;
}
```

E nel JavaScript:

```javascript
rulesContainer.classList.toggle("show");
rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules";
```

Così facendo non abbiamo pezzi di CSS nel JavaScript, bensì due documenti ben distinti: il JavaScript si occupa solo di richiamare lo stile nel CSS, non di crearlo.

#### 2. parseInt() vs Number() - Rigore Semantico

L'approccio di freeCodeCamp è stato `score += parseInt(selectedValue);`

Io avevo inserito `score += Number(selectedValue);`

Sono corrette entrambe, ma **Number() sembra essere più rigoroso**. Ecco perché:

| Aspetto | parseInt() | Number() |
|---------|-----------|----------|
| "15" | 15 ✅ | 15 ✅ |
| "15.7" | 15 (tronca i decimali) | 15.7 (mantiene decimali) |
| "15px" | 15 (ignora resto) | NaN (errore) |
| "" | NaN | 0 |

Number() è più rigoroso perché fallisce quando incontra input invalidi, mentre parseInt() fa conversioni "ottimiste". A seconda del contesto, la rigorosità di Number() può essere preferibile per catturare errori di input.

#### 3. innerHTML += vs createElement() - Performance e DOM Integrity

Questo punto è emerso dal code tutor che ha giustamente fatto notare che:

```javascript
scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
```

È breve e leggibile, ma la soluzione migliore, seppur più prolissa, è:

```javascript
const historyItem = document.createElement("li");
historyItem.textContent = `${achieved} : ${selectedValue}`;
scoreHistory.appendChild(historyItem);
```

Il perché è veramente interessante: con `innerHTML +=`, avendo già presenti gli elementi:

```html
<li>Three of a kind : 15</li>
<li>Four of a kind : 20</li>
<li>Full house : 25</li>
```

Aggiungendo il 4° elemento con `innerHTML +=`, il browser distrugge i primi 3 e ricrea tutti e 4 da zero! Con `appendChild()` viene semplicemente aggiunto un nuovo elemento, lasciando intatti gli altri.<br>
Questo accade perché in scoreHistory, trovandosi gli altri 3 elementi, il browser andrà a leggere tutto l'HTML esistente (riferito solo a scoreHistory in questo caso), convertire in stringa, aggiungere quella nuova e distruggere quindi gli altri elementi del DOM, rischiando che cambi gli stati da com'erano prima.<br>
`innerHTML` rimane ottimo quando si vuole creare da zero il contenuto di un elemento (con assegnazione, non con aggiunta), ma per append iterativi `createElement()` + `appendChild()` è decisamente superiore.<br>

### Cosa Ho Imparato

**Algoritmi di Pattern Matching:**
- Rilevamento Three/Four of a Kind contando occorrenze di numeri
- Rilevamento Full House verificando la presenza di gruppi di 3 e 2
- Rilevamento Straight convertendo array in stringhe per pattern matching
- Uso di `Set` per rimuovere duplicati: `[...new Set(arr)]`

**Array Methods e Iterazione:**
- `.forEach()` per iterare e modificare elementi DOM
- `.reduce()` per accumulare valori (somma dei dadi)
- `.sort()` con callback numerica per ordinare array
- `.includes()` per cercare patterns in stringhe
- `.some()` per verificare se almeno uno elemento soddisfa una condizione

**Manipolazione Oggetti:**
- Conteggio occorrenze di elementi creando oggetti `{ numero: count }`
- `Object.values()` per estrarre solo i valori da un oggetto
- Operatore ternario inline: `counts[num] = counts[num] ? counts[num] + 1 : 1`

**Event Handling e Validazione:**
- Guard clauses per controllare precondizioni prima di eseguire codice
- Validazione input prima di processare selezioni utente
- `addEventListener()` per gestire interazioni
- `setTimeout()` per ritardare esecuzione (permette UI update prima di alert)

**Pattern di Codice Professionali:**
- DRY (Don't Repeat Yourself): refactoring della chiamata `updateRadioOption(5, 0)` in un'unica posizione
- Separazione delle responsabilità: funzioni specifiche per ogni tipo di rilevamento
- Early exit: uso di `break` per uscire da loop quando trovato ciò che cerchi
- Nomi semantici che spiegano il "cosa" non il "come"

**Differenze Critiche tra Metodi:**
- `textContent` vs `innerHTML`: textContent è più sicuro, innerHTML ricrea DOM
- Assegnazione vs concatenazione: `=` vs `+=` hanno implicazioni di performance diverse
- `style.display` vs `classList.toggle()`: separazione CSS/JS vs inline styles

***

**Next Project**: Build a Cash Register (CERTIFICATION PROJECT!)
