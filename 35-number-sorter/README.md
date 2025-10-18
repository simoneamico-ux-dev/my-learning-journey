# Number Sorter - freeCodeCamp Project

<img width="750" height="475" alt="Screenshot 2025-10-18 alle 12 40 02" src="https://github.com/user-attachments/assets/1896e9d3-a3d8-444a-9545-6dd09663e5e4" />

## English Version

### The Project
Interactive Number Sorter developed with JavaScript, focusing on the implementation and understanding of basic sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort. A project that unveils the logic behind sorting algorithms.

### The Learning Behind the Triviality

In projects like this, I realize how much we take everything for granted.
What seems like a very simple program that sorts 5 numbers, from smallest to largest, is seen by any outsider through the glasses of the **Dunning-Kruger Effect**.
It wasn't easy, but it clearly strengthened my understanding of `for` loops, especially nested ones.

### What I Learned

**Basic Algorithmic Thinking:**
- **Bubble Sort:** Implementation of a nested `for` loop to compare and swap adjacent elements, causing the largest value to "bubble up" to the end of the array with each iteration.
- **Selection Sort:** Use of a nested `for` loop to find the index of the minimum value in the unsorted portion of the array and swap it with the first element, progressively building the sorted portion from left to right.
- **Insertion Sort:** Creation of a virtual sorted array at the beginning, iterating through the array and inserting each element into its correct position within the already sorted portion.

**Nested `for` Loops:**
- Deep understanding of how inner and outer loops interact to iterate and manipulate data in an array.
- Use of temporary variables (`temp`) for swapping values during sorting.

**DOM Manipulation:**
- Selection of a collection of elements with `getElementsByClassName`.
- Use of the spread operator (`...`) to convert an `HTMLCollection` into an array, making it iterable with methods like `.map()`.
- Extraction of values from `<select>` elements with `.map((dropdown) => Number(dropdown.value))`.
- Dynamic UI update with `forEach` to display the sorted array.

**Functions and Events:**
- Callback function for the `.sort()` method to define an ascending numerical sort (`(a, b) => a - b`).
- Handling of the `click` event to start the sorting process.
- Use of `event.preventDefault()` to prevent the default form behavior.

***

**Next Project**: Learn Advanced Array Methods by Building a Statistics Calculator

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
Number Sorter interattivo sviluppato con JavaScript, focalizzato sull'implementazione e la comprensione degli algoritmi di ordinamento di base: Bubble Sort, Selection Sort, e Insertion Sort. Un progetto che svela la logica dietro l'ordinamento di una serie di numeri.

### L'Apprendimento dietro la Banalità

In progetti come questo mi rendo conto di quanto diamo tutto per scontato.
Quel che sembra un banalissimo programma che ordina 5 numeri, dal più piccolo al più grande viene visto da qualsiasi outsider con gli occhiali dell'**Effetto Dunning-Kruger**.
Non è stato semplice ma ha rafforzato nettamente la mia comprensione dei cicli `for`, specialmente quelli annidati.

### Cosa Ho Imparato

**Algorithmic Thinking di Base:**
- **Bubble Sort:** Implementazione di un ciclo `for` annidato per confrontare e scambiare elementi adiacenti, facendo "galleggiare" il valore più grande verso la fine dell'array a ogni iterazione.
- **Selection Sort:** Utilizzo di un ciclo `for` annidato per trovare l'indice del valore minimo nell'array non ordinato e scambiarlo con il primo elemento, restringendo progressivamente la porzione da ordinare.
- **Insertion Sort:** Creazione di un array ordinato virtuale all'inizio, iterando attraverso l'array e inserendo ogni elemento nella sua posizione corretta all'interno della porzione già ordinata.

**Cicli `for` Annidati:**
- Comprensione profonda di come i cicli interni ed esterni interagiscono per iterare e manipolare i dati in un array.
- Utilizzo di variabili temporanee (`temp`) per lo scambio di valori durante l'ordinamento.

**Manipolazione del DOM:**
- Selezione di una collezione di elementi con `getElementsByClassName`.
- Utilizzo dello spread operator (`...`) per convertire una `HTMLCollection` in un array, rendendola iterabile con metodi come `.map()`.
- Estrazione di valori da elementi `<select>` con `.map((dropdown) => Number(dropdown.value))`.
- Aggiornamento dinamico della UI con `forEach` per visualizzare l'array ordinato.

**Funzioni e Eventi:**
- Funzione di callback per il metodo `.sort()` per definire un ordinamento numerico ascendente (`(a, b) => a - b`).
- Gestione dell'evento `click` per avviare il processo di ordinamento.
- Utilizzo di `event.preventDefault()` per prevenire il comportamento predefinito del form.

***

**Next Project**: Learn Advanced Array Methods by Building a Statistics Calculator
