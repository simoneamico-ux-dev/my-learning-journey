# fCC Forum Leaderboard - Progetto freeCodeCamp

![Tabella della classifica del forum fCC con argomenti, categorie e avatar degli utenti](https://github.com/user-attachments/assets/d742419f-9aea-4493-a0c7-ca645b2b7e4d)

### Il Progetto

fCC Forum Leaderboard sviluppato con JavaScript vanilla, Fetch API e programmazione asincrona, combinando manipolazione del DOM, destrutturazione avanzata e formattazione dei dati in una tabella responsive. Un progetto che rappresenta il passaggio naturale dalla gestione delle Promises con `.then()` a una sintassi più espressiva e leggibile con `async/await`.

### Il Progetto e la "Sensazione Giusta"

È stato un progetto davvero interessante, e ho capito il perché.<br>
Mi sono reso conto che gli esercizi che mi piacciono di più sono quelli in cui posso mischiare JavaScript con HTML: percepisco l’esercizio come bellissimo, non lo faccio apposta ma ad ogni `innerHTML` sorrido. Credo che non ci sia modo migliore per concludere questa parte di JavaScript, dato che React è esattamente questo, ovvero, JavaScript che abbraccia l’HTML (o meglio, JSX). Ad ogni passo successivo sento sempre di più di essere nel posto giusto, e questa sensazione mi riempie di gioia.

### Il "Level Up": Da `.then()` a `async/await`

In questo progetto ho fatto un vero salto di qualità nel modo di pensare l’asincrono.<br>
Il progetto precedente (fCC News Authors Page) utilizzava la catena `.then().catch()`, che è come il **cambio manuale** di un’auto, quindi potente, ma più verboso, con tanti passaggi da esplicitare al fine di gestirli. Con questo progetto, invece, ho iniziato a usare `async/await`, ovvero lo **stesso motore** (le Promises) ma con **cambio automatico**: il codice scorre dall’alto verso il basso come se fosse sincrono, ma resta pienamente asincrono sotto il cofano.
<br>

Nel codice sincrono ogni istruzione aspetta che la precedente abbia finito prima di partire, ho capito appieno il concetto con questa analogia: il codice sincrono è come un cuoco che mette il pane nel tostapane e resta fermo a fissarlo finché non scatta, bloccando tutto il resto. <br>
Nel codice asincrono, invece, avvii un’operazione lenta (come un fetch verso il server, il “tostapane”), e mentre quella operazione procede in background il programma continua ad eseguire altre istruzioni, esattamente come un cuoco efficiente che mette il pane a tostare e nel frattempo prende il latte, prepara la tazza e torna al tostapane solo quando suona. <br>
Ho imparato un concetto estremamente utile, perché grazie all’asincronia, puoi far partire il fetch, mostrare un indicatore di caricamento, mantenere l’interfaccia reattiva e aggiornare la UI solo quando la Promise è risolta, offrendo un’esperienza fluida anche quando il server impiega diverso tempo a rispondere.

Tornando al concetto di `async/await` l’aspetto fondamentale è che non introducono un nuovo modello mentale: è l'ennesimo caso di **zucchero sintattico** ma questa volta per le Promises. Quello che prima scrivevo come catena di `.then()` e `.catch()`, ora lo esprimo con:
- `async function` per "marcare" la funzione come asincrona
- `await` per aspettare il risultato delle Promises (es. `fetch`, `res.json()`)
- `try...catch` per gestire gli errori in modo molto simile al codice sincrono (come facevo con `.catch((err) => {}`)

Risultato? Stessa logica, ma molto più leggibile.

Una delle cose che avrei voluto fare diversamente è l'uso del metodo `.concat()` per unire le stringhe. Penso che con l'utilizzo dei **Template Literals** (`${...}`) il codice sarebbe stato più leggibile, evitando quella sintassi soggetto-verbo-oggetto che complica inutilmente operazioni semplici come questa.

Ecco nello specifico cosa intendo:

trasformare:

```javascript
// Soluzione richiesta dal tutorial (Metodo .concat)
const userAvatarUrl = avatar.startsWith("/user_avatar/")
  ? avatarUrl.concat(avatar)
  : avatar;
```

in:

```javascript
// Soluzione con Template Literal (Più leggibile)
const userAvatarUrl = avatar.startsWith("/user_avatar/")
  ? `${avatarUrl}${avatar}`
  : avatar;
```

### Cosa Ho Imparato

**Async/Await e try/catch:**
- Dichiarare una funzione con `async` permette di usare `await` al suo interno per "mettere in pausa" l’esecuzione finché una Promise non si risolve, pur restando non bloccante a livello di thread principale.  
- `await fetch(url)` e poi `await res.json()` sostituiscono la catena di `.then()`, rendendo il flusso molto più simile al codice sincrono e quindi più leggibile.  
- Il blocco `try { ... } catch (err) { ... }` diventa il nuovo modo idiomatico di gestire errori asincroni, unificando in un solo punto errori di rete, di parsing e logici.

**Destructuring su oggetti annidati:**
- La destrutturazione multipla `const { topic_list, users } = data; const { topics } = topic_list;` aiuta a navigare risposte JSON complesse senza accedere continuamente con notazione a punti annidata.  
- Destrutturare direttamente gli oggetti `topic` in `showLatestPosts`  
  ```js
  const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = item;
  ```
  rende più chiaro quali campi vengono effettivamente usati e riduce rumore visivo.

**Metodi Array per trasformare dati in UI:**
- `.map()` è stato centrale per trasformare l’array `topics` in righe HTML della tabella, restituendo una stringa con `join("")` da assegnare una sola volta a `innerHTML`.  
- `.find()` è stato usato per incrociare `posters` con `users` e ricavare i dati necessari per gli avatar, mostrando come sia possibile combinare più collezioni in un unico passaggio.  
- `.join("")` dopo `.map()` evita concatenazioni ripetute con `+=` e risulta più efficiente e leggibile.

**Funzioni helper pure per formattare i dati:**
- `timeAgo(bumped_at)` incapsula la logica di differenza temporale in minuti, ore e giorni, trasformando timestamp grezzi in stringhe leggibili come `10m ago`, `3h ago` o `2d ago`.  
- `viewCount(views)` introduce la logica di formattazione compatta (`1500` → `1k`), mostrando come separare responsabilità di presentazione dal resto del codice.  
- Queste funzioni pure sono facili da testare e riutilizzare in contesti diversi.

**Uso pratico di Map e oggetti di configurazione:**
- L’oggetto `allCategories` funziona come una piccola mappa di configurazione per tradurre `category_id` in `category` e `className`, dimostrando come centralizzare le regole di mapping fra dati API e UI.  
- La funzione `forumCategory(category_id)` genera il markup del link di categoria combinando questi metadati in modo dinamico, invece di avere logica sparsa nel template.

**Template literal per HTML dinamico:**
- L’uso di template literal multi-linea per generare `<tr>...</tr>` e `<a>...</a>` ha reso naturale interpolare variabili JavaScript dentro l’HTML.  
- Questo approccio avvicina molto al modo di pensare di librerie come React, dove si mappa direttamente da dati strutturati a componenti UI.

**Pattern di rendering “One-shot”:**
- Assegnare `postsContainer.innerHTML = topics.map(...).join("");` in un unico passaggio evita continui accessi e ricalcoli del layout rispetto ad aggiornare il DOM dentro un loop.  
- Questo pattern è stato un passo importante verso un modo più dichiarativo di ragionare sul rendering, piuttosto che imperativo.

***

**Next Project**: Build an RPG Creature Search App (Certification Project)
