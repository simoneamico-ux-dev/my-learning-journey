# Platformer Game - freeCodeCamp Project

<img width="955" height="549" alt="Main menu showing Code Warrior title with Start Game button" src="https://github.com/user-attachments/assets/e70fcae2-8c73-4f3f-96eb-9dca9beea1bf" />

<img width="955" height="572" alt="Platformer game started with player character on platforms" src="https://github.com/user-attachments/assets/e81626f0-009c-47ac-96e0-f70c91ac0870" />

<img width="955" height="572" alt="Player character near yellow intermediate checkpoint" src="https://github.com/user-attachments/assets/36b7107b-727a-4a0e-928c-a30ada65c4cd" />
<br>
<br>

<img width="1103" height="641" alt="Victory screen showing congratulations for reaching final checkpoint" src="https://github.com/user-attachments/assets/3c2c7a83-18e5-4546-b936-2e381c7d1ec9" />
<br>
<br>

## English Version

### The Project

Platformer game developed with intermediate object-oriented programming in JavaScript. An application that demonstrates fluid animations, physics engine, collision detection, and advanced state management to create a complete platform game.

### The Three Revelations

There are 3 concepts that struck me in this project: **APIs**, **requestAnimationFrame**, and **Infinity**.

#### APIs: Standing on the Shoulders of Giants

I find it incredible how a simple API call gives us as end users the feeling of ease, but behind the scenes there are countless lines of code that compose it.<br>
I now recognize the great work of backend developers: whether they're software engineers from various browsers or developers contributing to open source. I recognize that I'm literally **standing on the shoulders of giants**.<br>
Every time I write `requestAnimationFrame()` or `canvas.getContext('2d')`, I'm using the result of years of optimizations, technical discussions, and iterations.

#### requestAnimationFrame: Intelligent Efficiency

Take the `requestAnimationFrame()` API as an example. Thanks to this simple call, the browser knows exactly when it's about to redraw the screen (refresh cycle).<br>
**It goes from 60 to 0 fps depending on whether there's activity or not**, resulting in energy and memory savings. When the tab button isn't active, the browser simply stops calling the function. Zero wasted cycles.<br>
It's clever because instead of an infinite loop that always runs (even when not needed), the browser synchronizes the code with its native rendering cycle.

#### Infinity: The "Disable, Don't Destroy" Pattern

Checkpoints in this game are set to `Infinity` when obtained. But why not destroy the object? Why not remove it from the array entirely?

**With `claim()` we have 4 levels of defense:**

```javascript
claim() {
  this.width = 0;           // 1. Impossible geometry
  this.height = 0;          // 2. Zero dimensions
  this.position.y = Infinity; // 3. Out of the world
  this.claimed = true;      // 4. Already used
}
```

It's clear there's no intention to remove them from the array. I wondered why: removing them would also free up precious memory, I thought. Well, that's true but the price to pay would be very high.

Each layer protects against a different type of access. In fact, setting **width and height to zero** protects with mathematics: when the code performs collision detection, it calculates if two rectangles overlap, but with null dimensions the overlap becomes impossible. Even if the code executes, the geometric calculations automatically fail.

Setting **position.y to Infinity** protects with space. Any player position (100, 500, even 9999) will always be less than `Infinity`. The checkpoint has literally fallen out of the game world, and any vertical position comparison fails.

The **claimed = true** protects with logic and is the most efficient check. It's a guard clause, meaning a check that exits the function immediately, that tells the code "this checkpoint has already been used, don't waste time checking collisions". It prevents useless calculations allowing a quick exit from the check. In short, if one of the checks fails due to a future bug, the others save you.<br>

**The saved memory isn't worth the problems created:**

Removing with `checkpoints.splice(index, 1)` would create more problems than it solves. At 60fps, the array indices change while you're iterating, potentially causing visible bugs. Each removal also requires memory reallocation and activates the garbage collector (the system that automatically cleans memory), not to mention that modifying the array while others are reading it causes race conditions (situations where multiple parts of the code access the same resource simultaneously creating unpredictable bugs).<br>
With `claim()` there's no allocation, no garbage collection, zero pauses. Therefore, "turning off/on" existing objects is decidedly better.

### What I Learned

**Intermediate OOP:**
- **Inheritance:** Extending base classes to create object variants
- **Composition:** Combining simpler objects to create complex behaviors
- **Encapsulation:** Hiding implementation details behind clean interfaces
- **Object Pooling:** Reusing objects instead of creating/destroying them continuously

**Game Development Patterns:**
- **Game Loop:** Main update → render cycle synchronized with `requestAnimationFrame()`
- **Delta Time:** Frame-rate independent handling for smooth movement
- **State Management:** Managing game states (menu, playing, paused, game over)
- **Collision Detection:** AABB (Axis-Aligned Bounding Box) to detect collisions

**Canvas API:**
- `getContext('2d')` to get the drawing context
- `clearRect()` to clear the canvas every frame
- `fillRect()` and `strokeRect()` to draw shapes
- `drawImage()` for sprites and textures

**Physics Simulation:**
- Gravity as constant downward acceleration
- Velocity and acceleration as 2D vectors
- Friction for natural slowdown
- Jump mechanics with vertical impulse

**Performance Optimization:**
- `requestAnimationFrame()` for synchronization with refresh rate
- Reduced DOM calls
- Spatial partitioning for efficient collision detection
- Boolean flags for early exit (guard clauses)

**Event Handling:**
- `keydown` and `keyup` for keyboard input
- Simultaneous multiple input handling (jump + movement)
- Preventing default browser behaviors

**Defensive Programming:**
- Intentional redundancy for robustness
- Guard clauses to prevent useless calculations
- Boundary checking to avoid out-of-bounds
- Fallback values for edge case situations

<br>
Ready to start the next project!

---

**Next Project**: Review Algorithmic Thinking by Building a Dice Game
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

Platformer game sviluppato con programmazione orientata agli oggetti intermedia in JavaScript. Un'applicazione che dimostra animazioni fluide, physics engine, collision detection e gestione avanzata dello stato per creare un gioco platform completo.

### Le Tre Rivelazioni

Sono 3 i concetti che mi hanno colpito di questo progetto: **API**, **requestAnimationFrame** e **Infinity**.

#### API: Sulle Spalle di Giganti

Trovo incredibile come un semplice richiamo ad una API dia a noi utilizzatori finali la sensazione di facilità del comando, ma dietro le quinte ci sono svariate linee di codice che la compongono.<br>
Riconosco ora il grande lavoro dei backend: che siano gli ingegneri software dei vari browser, che siano i developer che contribuiscono con l'opensource. Riconosco di stare letteralmente **sulle spalle di giganti**.<br>
Ogni volta che scrivo `requestAnimationFrame()` o `canvas.getContext('2d')`, sto usando il risultato di anni di ottimizzazioni, discussioni tecniche e iterazioni.

#### requestAnimationFrame: Efficienza Intelligente

Prendiamo ad esempio l'API `requestAnimationFrame()`. Grazie a questa semplice chiamata, il browser conosce esattamente quando sta per ridisegnare lo schermo (refresh cycle).<br>
**Passa dai 60 agli 0 fps in base a se c'è attività o meno**, con conseguente risparmio di energia e memoria allocata. Quando il pulsante tab non è attivo, il browser semplicemente smette di chiamare la funzione. Zero cicli sprecati.<br>
È intelligente perché invece di un loop infinito che gira sempre (anche quando non serve), il browser sincronizza il codice con il suo ciclo di rendering nativo.

#### Infinity: Il Pattern "Disattiva, Non Distruggere"

I checkpoint in questo gioco sono settati su `Infinity` quando vengono ottenuti. Ma perché non distruggere l'oggetto? Perché non eliminarlo del tutto dall'array?

**Con `claim()` abbiamo 4 livelli di difesa:**

```javascript
claim() {
  this.width = 0;           // 1. Geometria impossibile
  this.height = 0;          // 2. Zero dimensioni
  this.position.y = Infinity; // 3. Fuori dal mondo
  this.claimed = true;      // 4. Già usato
}
```

Emerge chiaramente che non c'è alcuna intenzione di eliminarli dall'array. Mi sono chiesto il perché: eliminandoli si libererebbe anche memoria preziosa, ho pensato. Ebbene, è vero ma il prezzo da pagare sarebbe molto alto.

Ogni livello protegge da un diverso tipo di accesso. Infatti impostare **width e height a zero** protegge con la matematica: quando il codice esegue la collision detection, calcola se due rettangoli si sovrappongono, ma con dimensioni nulle la sovrapposizione diventa impossibile. Anche se il codice viene eseguito, i calcoli geometrici falliscono automaticamente.

Impostare **position.y a Infinity** protegge con lo spazio. Qualsiasi posizione del player (100, 500, persino 9999) sarà sempre minore di `Infinity`. Il checkpoint è letteralmente caduto fuori dal mondo del gioco, e qualsiasi confronto di posizione verticale fallisce.

Il **claimed = true** protegge con la logica ed è il controllo più efficiente. È una guard clause, ovvero un controllo che esce subito dalla funzione, che dice al codice "questo checkpoint è già stato usato, non perdere tempo a controllare collisioni". Previene calcoli inutili permettendo un'uscita rapida dal controllo. In poche parole se per un bug futuro uno dei controlli fallisce, gli altri ti salvano.<br>

**La memoria risparmiata non vale i problemi creati:**

Eliminare con checkpoints.splice(index, 1) creerebbe più problemi di quanti ne risolva. A 60fps, gli indici dell'array cambiano mentre stai iterando, causando possibili bug visivi. Ogni eliminazione inoltre richiede riallocazione di memoria e attiva il garbage collector (il sistema che pulisce automaticamente la memoria), senza contare che modificare l'array mentre altri lo leggono causa race condition (situazioni dove più parti del codice accedono alla stessa risorsa contemporaneamente creando bug imprevedibili).<br>
Con `claim()` non c'è allocazione, nessuna garbage collection, zero pause. Risulta pertanto decisamente migliore "spegnere/riaccendere" oggetti esistenti.

### Cosa Ho Imparato

**OOP Intermedia:**
- **Inheritance:** Estensione di classi base per creare varianti di oggetti
- **Composition:** Combinazione di oggetti più semplici per creare comportamenti complessi
- **Encapsulation:** Nascondere dettagli implementativi dietro interfacce pulite
- **Object Pooling:** Riutilizzo di oggetti invece di crearli/distruggerli continuamente

**Game Development Patterns:**
- **Game Loop:** Ciclo principale update → render sincronizzato con `requestAnimationFrame()`
- **Delta Time:** Gestione frame-rate indipendente per movimento fluido
- **State Management:** Gestione stati del gioco (menu, playing, paused, game over)
- **Collision Detection:** AABB (Axis-Aligned Bounding Box) per rilevare collisioni

**Canvas API:**
- `getContext('2d')` per ottenere il contesto di disegno
- `clearRect()` per pulire il canvas ad ogni frame
- `fillRect()` e `strokeRect()` per disegnare forme
- `drawImage()` per sprite e texture

**Physics Simulation:**
- Gravità come accelerazione costante verso il basso
- Velocità e accelerazione come vettori 2D
- Friction per rallentamento naturale
- Jump mechanics con impulso verticale

**Performance Optimization:**
- `requestAnimationFrame()` per sincronizzazione con refresh rate
- Riduzione chiamate al DOM
- Spatial partitioning per collision detection efficiente
- Flag booleani per early exit (guard clauses)

**Event Handling:**
- `keydown` e `keyup` per input tastiera
- Gestione input multipli simultanei (salto + movimento)
- Prevenzione comportamenti di default del browser

**Defensive Programming:**
- Ridondanza intenzionale per robustezza
- Guard clauses per prevenire calcoli inutili
- Boundary checking per evitare out-of-bounds
- Fallback values per situazioni edge case


<br>
Pronto ad iniziare il prossimo progetto!

***

**Next Project**: Review Algorithmic Thinking by Building a Dice Game



