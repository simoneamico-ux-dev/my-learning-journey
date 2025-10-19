# Statistics Calculator - freeCodeCamp Project

<img width="1050" height="591" alt="Screenshot of the Statistics Calculator app, simulating the analysis of user satisfaction ratings." src="https://github.com/user-attachments/assets/e11f5daf-aa96-4abc-a847-c559f9b38ef4" />
<p align="center"><i>Practical example of the Statistics Calculator analyzing user satisfaction survey (UX) data.</i></p>
The entered numbers (4, 5, 3,...) simulate ratings given by a group of users for a new feature, on a scale from 1 to 5 stars.<br>
The Mode and Median of 4 reveal that the most common reaction and the "typical" user's experience were very positive.<br>
The Mean (3.89), while slightly lower due to a single negative rating, confirms an overall more than favorable reception.<br>
Finally, the low Standard Deviation is an excellent sign, as it indicates that the experience was consistent and predictable for most users. In a real-world context, these results would suggest validating the design's success and, as a next step, investigating the reasons behind that single negative feedback for further optimization.
<br>
<br>

## English Version

### The Project
Statistical calculator developed with JavaScript and advanced array methods, capable of calculating mean, median, mode, range, variance and standard deviation from a series of numbers entered by the user.

### The Two-Phase Journey

This was a project I experienced in two different ways.

**Phase 1: Mathematical Understanding**
Before tackling it, I went back to review each of the required mathematical concepts. I therefore expected to understand them more deeply thanks to this exercise, and that's exactly what happened. I spent the first half of the project with this awareness.

**Phase 2: The Revelation of Usefulness**
In the second half, around step 30, I realized how useful this knowledge could be. Having just done another usability study a few days ago for the project I'm working on in the Google UX course, I had the feeling that a similar program could help me a lot in condensing all the data resulting from the research.
Here's a table that summarizes everything:

| Statistical Concept | What It Measures in UX | Key Scenario (Revelation) |
|---|---|---|
| **Mean** | The "overall performance". | Provides a quick benchmark (e.g. average checkout time), but can be misleading when outliers (very slow users) skew the results. |
| **Median** | The "typical experience" of the average user. | If the median is much lower than the mean, it means most users are fast and only a small group has problems. It reveals where to focus efforts. |
| **Mode** | The "most common reaction" or most frequent feedback. | Perfect for ratings. If out of 100 votes, 80 are "5 stars", the mode tells you the feature is a success, even if a few low votes ruin the average. |
| **Standard Deviation**| The consistency and predictability of the experience. | Our ultimate goal. Low = clear and reliable design. High = confusing and frustrating design. In an A/B test, with equal means, the design with lower standard deviation always wins. |

I believe that thanks to these 4 concepts, you can move from "I conducted Usability Tests and the prototype works well for people" to "I conducted Usability Tests and the prototype works well for people and the data proves it".

### What I Learned

**Advanced Array Methods:**
- `.reduce()` to calculate sums (mean, variance) in a compact and efficient way.
- `.toSorted()` to create a sorted copy of the array without mutating the original, fundamental for calculating the median.
- `.map()` to transform the array of strings into an array of numbers.
- `.filter()` to clean the input from non-numeric values.
- `.forEach()` to iterate and populate the UI.

**Statistical Logic in JS:**
- Implementation of **mean**, **median** (handling both even and odd array lengths), **mode** (with handling of multimodal cases or absence of mode), **range**, **variance** and **standard deviation**.

**Object and String Manipulation:**
- Creation and manipulation of objects to count occurrences in the `getMode` function.
- Use of `Object.keys()` and `Object.values()` to analyze frequencies.
- `new Set()` to verify if all elements appear with the same frequency.
- `.split(/,\s*/g)` to parse user input robustly, handling variable spaces.

**Functional Programming:**
- Writing pure functions that take an array as input and return a calculated value.
- Function composition (e.g. `getVariance` calling `getMean`).

### Reflection

The sprint I experienced in the second half came from the thought that everything I was learning could give life to a "UX calculator": a program that not only calculates numbers, but interprets them from a user experience perspective

---

**Next Project**: Learn Functional Programming by Building a Spreadsheet

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

<img width="1050" height="591" alt="Screenshot of the Statistics Calculator app, simulating the analysis of user satisfaction ratings." src="https://github.com/user-attachments/assets/e11f5daf-aa96-4abc-a847-c559f9b38ef4" />

<p align="center"><i>Esempio pratico della calcolatrice statistica mentre analizza i dati di un sondaggio di soddisfazione utente (UX).</i></p>
I numeri inseriti (4, 5, 3,...) simulano le valutazioni date da un gruppo di utenti a una nuova funzionalità, su una scala da 1 a 5 stelle.<br>
La Moda e la Mediana di 4 rivelano che la reazione più comune e l'esperienza dell'utente "tipico" sono state molto positive.<br>
La Media (3.89), pur essendo leggermente inferiore a causa di un singolo voto negativo, conferma un'accoglienza generale più che favorevole.<br>
Infine, la bassa Deviazione Standard è un ottimo segnale, perché indica che l'esperienza è stata consistente e prevedibile per la maggior parte degli utenti. In un contesto reale, questi risultati suggerirebbero di validare il successo del design e, come passo successivo, indagare le ragioni di quel singolo feedback negativo per un'ulteriore ottimizzazione.

### Il Progetto
Calcolatrice statistica sviluppata con JavaScript e metodi array avanzati, capace di calcolare media, mediana, moda, range, varianza e deviazione standard da una serie di numeri inseriti dall'utente.

### Il Percorso in Due Fasi

È stato un progetto che ho percepito in due modi diversi.

**Fase 1: La Comprensione Matematica**
Prima di affrontarlo, sono andato a ripassare ognuno dei concetti matematici richiesti. Mi aspettavo quindi di capirli in modo più profondo grazie a questo esercizio, e così è stato. Ho passato la prima metà del progetto con questa cognizione.

**Fase 2: La Rivelazione dell'Utilità**
Nella metà successiva, verso lo step 30, mi sono reso conto di quanto fosse utile ciò che stavo imparando. Avendo fatto proprio qualche giorno fa un altro usability study per il progetto che sto facendo nel corso Google UX, ho avuto la sensazione che un programma simile potesse aiutarmi parecchio nel condensare tutti i dati scaturiti dalla ricerca.
Ecco una tabella che riassume il tutto:

| Concetto Statistico | Cosa Misura nell'UX | Scenario Chiave (Rivelazione) |
|---|---|---|
| **Media (Mean)** | La performance generale. | Fornisce un benchmark rapido (es. tempo medio di checkout), ma è ingannevole se ci sono molti outlier (utenti molto lenti) che alzano il valore. |
| **Mediana (Median)** | L'esperienza tipica dell'utente medio. | Se la mediana è molto più bassa della media, significa che la maggior parte degli utenti è veloce e solo un piccolo gruppo ha problemi. Rivela dove concentrare gli sforzi. |
| **Moda (Mode)** | La reazione più comune o il feedback più frequente. | Perfetta per i rating. Se su 100 voti, 80 sono "5 stelle", la moda ti dice che la feature è un successo, anche se pochi voti bassi rovinano la media. |
| **Deviazione Standard**| La consistenza e prevedibilità dell'esperienza. | Il nostro obiettivo finale. Bassa = design chiaro e affidabile. Alta = design confusionario e frustrante. In un A/B test, a parità di media, vince sempre il design con deviazione standard più bassa. |

Credo che grazie a questi 4 concetti si possa passare da "Ho effettuato gli Usability Test ed il prototipo funziona bene per le persone" a "Ho effettuato gli Usability Test ed il prototipo funziona bene per le persone e i dati lo dimostrano".

### Cosa Ho Imparato

**Metodi Array Avanzati:**
- `.reduce()` per calcolare somme (media, varianza) in modo compatto ed efficiente.
- `.toSorted()` per creare una copia ordinata dell'array senza mutare l'originale, fondamentale per calcolare la mediana.
- `.map()` per trasformare l'array di stringhe in un array di numeri.
- `.filter()` per pulire l'input da valori non numerici.
- `.forEach()` per iterare e popolare la UI.

**Logica Statistica in JS:**
- Implementazione della **media**, **mediana** (gestendo sia array di lunghezza pari che dispari), **moda** (con gestione di casi multimodali o assenza di moda), **range**, **varianza** e **deviazione standard**.

**Manipolazione di Oggetti e Stringhe:**
- Creazione e manipolazione di oggetti per contare le occorrenze nella funzione `getMode`.
- Utilizzo di `Object.keys()` e `Object.values()` per analizzare le frequenze.
- `new Set()` per verificare se tutti gli elementi appaiono con la stessa frequenza.
- `.split(/,\s*/g)` per parsare l'input dell'utente in modo robusto, gestendo spazi variabili.

**Programmazione Funzionale:**
- Scrittura di funzioni pure che prendono un array come input e restituiscono un valore calcolato.
- Composizione di funzioni (es. `getVariance` che chiama `getMean`).

### Riflessione

Lo sprint che ho avuto nella seconda metà è stato dovuto al pensiero che tutto ciò che stavo imparando potesse dar vita a una **"calcolatrice UX"**: un programma che non solo calcola numeri, ma li interpreta in un'ottica di esperienza utente.

***

**Next Project**: Learn Functional Programming by Building a Spreadsheet
