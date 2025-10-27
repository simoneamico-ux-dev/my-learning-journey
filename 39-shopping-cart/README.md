# Shopping Cart - freeCodeCamp Project
<img width="1198" height="814" alt="Screenshot 2025-10-27 alle 15 47 36" src="https://github.com/user-attachments/assets/bf7587a6-50f6-42a9-9d0b-62eb2fd3ab3f" />
<br>
<br>
<img width="1198" height="814" alt="Screenshot 2025-10-27 alle 15 48 42" src="https://github.com/user-attachments/assets/bab6ea6b-fa9f-4750-9093-2de675027e0b" />
<br>
<br>

## English Version

### The Project
Interactive shopping cart developed with object-oriented programming in JavaScript. An application that demonstrates the use of ES6 classes, state management, and DOM manipulation to create a functional e-commerce system.

### The Discovery: Classes Are "Syntactic Sugar"

This was a very interesting project, especially understanding what's "under the hood" of classes in JavaScript.

JavaScript doesn't actually have classes in the traditional sense of languages like Java or C++. When we write:

```javascript
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }
  addItem(product) {
    this.items.push(product);
  }
}
```

JavaScript automatically transforms it (without showing you) into this code:

```javascript
function ShoppingCart() {
  this.items = [];
  this.total = 0;
}
ShoppingCart.prototype.addItem = function(product) {
  this.items.push(product);
};
```

It's "syntactic sugar" (a term coined by British computer scientist Peter J. Landin): it makes the code sweeter to read, but underneath it's still the same function-based mechanism.

However, once you understand the mechanism, comparing the two code blocks makes it evident how much simpler the class syntax is to both read and write.

I felt the same "click" as with CSS variables, that feeling of wanting to use them in all my future projects.

### What I Learned

**Object-Oriented Programming (OOP):**
- **ES6 Classes:** Modern syntax for creating objects with properties and methods
- **Constructor:** Special method automatically called with `new` to initialize the instance
- **Keyword `this`:** Reference to the current instance of the class
- **Keyword `new`:** Operator that creates a new instance, executes the constructor, and returns the object
- **Prototypes:** Underlying system for classes, each method is added to `ClassName.prototype`

**Advanced Array Methods:**
- `.forEach()` to iterate over elements with side effects
- `.find()` to search for the first element that satisfies a condition
- `.reduce()` to accumulate values into a single result (e.g., sum prices)

**Destructuring:**
- Extracting properties from objects: `const { name, price } = product`
- Concise syntax that avoids repetition like `product.name`, `product.price`

**JavaScript Operators:**
- **Spread Operator (`...`):** Converts HTMLCollection to array to use array methods
- **OR Operator (`||`):** Provides default values: `value || 0`
- **NOT Operator (`!`):** Inverts booleans for toggle patterns
- **Ternary Operator (`? :`):** Inline conditions for more concise code

**Template Literals:**
- Backticks `` ` `` for multi-line strings
- Interpolation with `${}` to insert variables
- Escaping the `$` symbol when needed: `$${price}` (first $ is literal)

**Floating Point Handling:**
- Problem: `0.1 + 0.2 !== 0.3` in JavaScript
- Solution: `.toFixed(2)` to round + `parseFloat()` to convert back to number

**DOM Manipulation:**
- `getElementsByClassName()` returns HTMLCollection (not array!)
- `innerHTML +=` to add elements dynamically
- `style.display` for show/hide: `"block"` vs `"none"`

**Event Handling:**
- `event.target.id` to identify the clicked element
- `.bind(cart)` to fix the `this` context in callbacks
- `addEventListener` to handle user interactions

**State Pattern:**
- Boolean toggle with `isCartShowing = !isCartShowing`
- Centralized state management in the `ShoppingCart` class

***

**Next Project**: Learn Intermediate OOP by Building a Platformer Game

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
Shopping cart interattivo sviluppato con programmazione orientata agli oggetti in JavaScript. Un'applicazione che dimostra l'uso delle classi ES6, la gestione dello stato e la manipolazione del DOM per creare un sistema di e-commerce funzionale.

### La Scoperta: Le Classi Sono "Zucchero Sintattico"

È stato un progetto molto interessante, soprattutto comprendere cosa c'è "sotto il cofano" delle classi in JavaScript.

JavaScript, di fatto, non ha classi nel senso tradizionale dei linguaggi come Java o C++. Quando scriviamo:

```javascript
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }
  addItem(product) {
    this.items.push(product);
  }
}
```

JavaScript lo trasforma automaticamente (senza dartelo a vedere) in questo codice:

```javascript
function ShoppingCart() {
  this.items = [];
  this.total = 0;
}
ShoppingCart.prototype.addItem = function(product) {
  this.items.push(product);
};
```

È "zucchero sintattico" (termine coniato dall'informatico inglese Peter J. Landin): rende quindi il codice più dolce da leggere, ma sotto è sempre lo stesso meccanismo basato su funzioni.
Nonostante ciò, dopo aver compreso il meccanismo, confrontando i due blocchi di codice è evidente quanto la sintassi delle classi sia decisamente più semplice da leggere e da scrivere.
Ho sentito lo stesso "click" delle variabili CSS, ovvero quella sensazione di volerle usare in ogni progetto futuro.

### Cosa Ho Imparato

**Programmazione Orientata agli Oggetti (OOP):**
- **Classi ES6:** Sintassi moderna per creare oggetti con proprietà e metodi
- **Constructor:** Metodo speciale chiamato automaticamente con `new` per inizializzare l'istanza
- **Keyword `this`:** Riferimento all'istanza corrente della classe
- **Keyword `new`:** Operatore che crea una nuova istanza, esegue il constructor e restituisce l'oggetto
- **Prototipi:** Sistema sottostante alle classi, ogni metodo viene aggiunto a `ClassName.prototype`

**Metodi Array Avanzati:**
- `.forEach()` per iterare su elementi con side effects
- `.find()` per cercare il primo elemento che soddisfa una condizione
- `.reduce()` per accumulare valori in un singolo risultato (es. somma prezzi)

**Destructuring:**
- Estrazione di proprietà da oggetti: `const { name, price } = product`
- Sintassi concisa che evita ripetizioni come `product.name`, `product.price`

**Operatori JavaScript:**
- **Spread Operator (`...`):** Converte HTMLCollection in array per usare metodi array
- **Operatore OR (`||`):** Fornisce valori di default: `value || 0`
- **Operatore NOT (`!`):** Inverte booleani per pattern toggle
- **Operatore Ternario (`? :`):** Condizioni inline per codice più conciso

**Template Literals:**
- Backticks `` ` `` per stringhe multi-linea
- Interpolazione con `${}` per inserire variabili
- Escapare il simbolo `$` quando necessario: `$${price}` (primo $ è letterale)

**Gestione Floating Point:**
- Problema: `0.1 + 0.2 !== 0.3` in JavaScript
- Soluzione: `.toFixed(2)` per arrotondare + `parseFloat()` per riconvertire in numero

**DOM Manipulation:**
- `getElementsByClassName()` restituisce HTMLCollection (non array!)
- `innerHTML +=` per aggiungere elementi dinamicamente
- `style.display` per show/hide: `"block"` vs `"none"`

**Event Handling:**
- `event.target.id` per identificare l'elemento cliccato
- `.bind(cart)` per fissare il contesto `this` nei callback
- `addEventListener` per gestire interazioni utente

**Pattern di Stato:**
- Toggle booleano con `isCartShowing = !isCartShowing`
- Gestione stato centralizzato nella classe `ShoppingCart`

***

**Next Project**: Learn Intermediate OOP by Building a Platformer Game
