# Telephone Number Validator - freeCodeCamp Project (CERTIFICATION)

![Phone Checker running inside an HTC One M8 for Windows](https://github.com/user-attachments/assets/6242fcfc-5149-463c-97cd-b134a415edbd)
<img width="4348" height="2284" alt="Telephone Number Validator - Mobile UI" src="https://github.com/user-attachments/assets/0d4e5339-ba23-4e71-b2bc-91941dfc0419" />
<img width="7263" height="2312" alt="Telephone Number Validator - Desktop UI" src="https://github.com/user-attachments/assets/d9891d12-ab01-4306-83bf-705c5b5fe557" />


## English Version

### The Project
US phone number validator developed with Regular Expressions, responsive mobile-first design and performance-oriented architecture. An application that demonstrates the power of regex in validating complex patterns.

### The Best Project So Far

This has been the best project I've done so far. The regex was by far the most difficult part.<br>
I didn't try other approaches: I could have handled phone number validation in alternative ways, such as a cascade of `if` statements. The code would have been easier to write and even easier to read, but it would have been tremendously long. Opting for regex was also a way to strengthen my understanding of it. I wrote a detailed explanation of the regex inside `script.js`, both to help anyone understand what each piece does and to consolidate what I learned.

### The Design: HTC One M8 and Windows Phone Aesthetic

As for the design, I decided to place an **HTC One M8 for Windows** (the Verizon version) on a simple Windows Phone-style blue background. It turned out better than I had imagined. I tried the gold and black versions, but this **silver** one pairs best with the background.

### Mobile-First (Really): A Conscious Choice

The mobile version is the default version. As I wrote in the `styles.css` comments, I chose to create a media query for desktop and no longer putting the mobile version in a media query, as I did in the past.

**The reasons are twofold:**
1. **Adoption:** Mobile has surpassed desktop traffic for years now.
2. **Performance:** By setting it as default, the device frame (the HTC) loads only when viewed from desktop. Additionally, desktop users generally have faster internet connections, so it made even more sense.

### The Reflection: Mobile-First is not a Dogma

This is rarely discussed, but I believe that beyond the "mobile-first" gold standard, we should evaluate based on the device that will predominantly be used to navigate our application.<br>
If you're creating an application primarily intended for desktop, perhaps it makes more sense to adopt the old method of dedicating a media query to mobile.<br>
In this project, I still chose the mobile-first approach also to get used to this way of thinking, a skill I want to consolidate.<br>
I could be wrong, but I always get **red flags** when I hear "that's just how it is". There are always a thousand nuances and "it depends" that often go unmentioned.

### The Philosophy of Comments

As I did in the previous certification project, I paid particular attention to comments in the code. I wrote everything there: the logic, architectural choices, patterns used. Repeating it here would be redundant and, above all, difficult to understand without having the code at hand.<br>
In this project, I decided to reduce useless comments, what antirez calls "Trivial Comments," in order to make the code cleaner. I concentrated most of the comments at the beginning of each document, creating a sort of map that guides the reading of the code without weighing it down.<br>
I just want to say that with each passing project, my self-confidence increases and, at the same pace, my enjoyment.

### What I Learned

**Regular Expressions:**
- Complex patterns for US phone number validation: `/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/`
- Handling optional prefixes (country code 1)
- Alternation between formats with parentheses `(\d{3})` and without `\d{3}`
- Character classes `[\s\-]` for multiple separators
- Anchors `^` and `$` for strict validation without extra characters

**Conscious Mobile-First Strategy:**
- Default CSS without media query for mobile
- Media query `@media (min-width: 560px) and (min-height: 730px)` only for desktop and tablet
- Conditional loading of device-frame (bezel) only on desktop and tablet
- Optimization for slower mobile connections

**Advanced CSS Variables:**
- Overriding CSS variables in media queries for responsive design
- Scalable design system with semantic variables
- Management of two complete themes (mobile/desktop) with the same set of variables

**Safe DOM Manipulation:**
- `.textContent` for XSS sanitization before any modification
- `.innerHTML` only after content validation
- Safe pattern: sanitize → modify → insert

**Dynamic Viewport:**
- `min-height: 100dvh` to handle dynamic mobile URL bar
- Fallback `100vh` for unsupported browsers

**Performance and UX:**
- Limit `maxResult = 50` to prevent DOM performance issues
- `.insertBefore()` for LIFO stack of results
- Animation `@keyframes slideInFade` with cubic-bezier for smooth feedback
- Click effect with `transform: perspective()` for tactile feedback

**Form Handling:**
- `e.preventDefault()` for complete control of form behavior
- Input length validation with `maxInputLength`
- Alert for immediate feedback on input errors

**Code Architecture:**
- Logical separation between validation, display, and interaction
- Structured comments with DESIGN section for architectural overview
- Semantic naming for reusable functions

### Reflection
It was essential, in creating the HTML, to test iteratively on my favorite edge case: the iPhone 12 mini and, surprisingly, also on an HTC One M8 (Android version).<br>
I recently discovered the "ipconfig getifaddr en0" command (on macOS) in the terminal, which opened up a world to me. I added a text file to my desktop with the procedure I summarized:
- Run ipconfig getifaddr en0 in the terminal
- It will give you a number (n), your local IP
- In VS Code, after clicking on Live Server, there will be the port number (p)
- On the desired device, type in the address bar: n:p

I always close the Live Server when I'm done. Although the risk is actually low, considering that to access the port you must be on my same wifi network anyway.

***

**Next Project**: Learn Basic OOP by Building a Shopping Cart

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
Validatore di numeri telefonici statunitensi sviluppato con Regular Expressions, design responsive mobile-first e architettura orientata alla performance. Un'applicazione che dimostra la potenza delle regex nella validazione di pattern complessi.

### Il Progetto Più Bello Fin'ora

È stato il progetto più bello fatto fin'ora. La regex è stata la parte più difficile in assoluto.<br>
Non ho provato altri approcci: avrei potuto gestire la convalida del numero di telefono in modi alternativi, come una cascata di `if` statement. Il codice sarebbe stato più facile da scrivere e persino da leggere, ma sarebbe stato tremendamente lungo. Optare per la regex è stato anche un modo per rafforzarne la mia comprensione. Ho infatti scritto la spiegazione dettagliata della regex all'interno dello `script.js`, sia per far comprendere a chiunque a cosa serve ogni pezzetto, sia per consolidare quanto ho appreso.

### Il Design: HTC One M8 e Windows Phone Aesthetic

Per quanto riguarda il design, ho deciso di inserire un **HTC One M8 for Windows** (la versione per Verizon) in un semplice sfondo blu stile Windows Phone. È venuto meglio di come me lo ero immaginato. Ho provato con la versione gold e black, ma questa **silver** è quella che si sposa meglio con lo sfondo.

### Mobile-First (Davvero): Una Scelta Consapevole

La versione mobile è la versione di default. Come ho scritto nei commenti dello `styles.css`, ho scelto di creare una media query per desktop e non più, contrariamente al passato, la versione mobile in media query.

**Le ragioni sono due:**
1. **Diffusione:** Il mobile ha ormai da anni superato il traffico del desktop.
2. **Performance:** Impostandola come default, il caricamento del device frame (l'HTC) avviene solo se visualizzato da desktop. Inoltre chi naviga da desktop ha generalmente internet più veloce, quindi è stato ancora più sensato.

### La Riflessione: Mobile-First non è un Dogma

Non se ne parla mai, ma credo che al di là del gold standard "mobile-first", bisognerebbe valutare in base al dispositivo che verrà utilizzato prevalentemente per navigare la nostra applicazione.<br>
Se si crea un'applicazione destinata principalmente al desktop, forse ha più senso adottare il vecchio metodo di dedicare una media query al mobile.<br>
In questo progetto ho comunque scelto l'approccio mobile-first anche per abituarmi a questo modo di pensare, una skill che voglio consolidare.<br>
Potrei sbagliarmi, ma mi sorgono sempre **red flag** quando sento "è così e basta". Ci sono sempre mille sfumature e "dipende" che spesso non vengono menzionati.

### La Filosofia dei Commenti

Come già fatto nello scorso certification project, ho dedicato particolare attenzione ai commenti nel codice. Ho scritto tutto lì: la logica, le scelte architetturali, i pattern utilizzati. Ripeterlo qui sarebbe ridondante e, soprattutto, difficile da comprendere senza avere il codice sottomano.<br>
In questo progetto ho deciso di ridurre i commenti inutili, quelli che antirez chiama "Trivial Comments", al fine di rendere il codice più pulito. Ho concentrato la maggior parte dei commenti all'inizio di ogni documento, creando una sorta di mappa che guida la lettura del codice senza appesantirlo.<br>
Ci tengo solo a dire che a ogni progetto che passa la mia self confidence aumenta e, allo stesso passo, il mio divertimento.

### Cosa Ho Imparato

**Regular Expressions:**
- Pattern complessi per validazione numeri telefonici US: `/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/`
- Gestione di prefissi opzionali (country code 1)
- Alternanza tra formati con parentesi `(\d{3})` e senza `\d{3}`
- Character classes `[\s\-]` per separatori multipli
- Anchor `^` e `$` per validazione stretta senza caratteri extra

**Strategia Mobile-First Consapevole:**
- Default CSS senza media query per mobile
- Media query `@media (min-width: 560px) and (min-height: 730px)` solo per desktop e tablet
- Caricamento condizionale del device-frame (bezel) solo su desktop e tablet
- Ottimizzazione per connessioni mobili più lente

**CSS Variables Avanzate:**
- Override di variabili CSS nelle media query per design responsivo
- Sistema di design scalabile con variabili semantiche
- Gestione di due temi completi (mobile/desktop) con stesso set di variabili

**DOM Manipulation Sicura:**
- `.textContent` per sanitizzazione XSS prima di ogni modifica
- `.innerHTML` solo dopo validazione del contenuto
- Pattern sicuro: sanitize → modify → insert

**Viewport Dinamico:**
- `min-height: 100dvh` per gestire la barra URL mobile dinamica
- Fallback `100vh` per browser non supportati

**Performance e UX:**
- Limite `maxResult = 50` per prevenire problemi di performance DOM
- `.insertBefore()` per stack LIFO dei risultati
- Animazione `@keyframes slideInFade` con cubic-bezier per feedback fluido
- Effetto click con `transform: perspective()` per feedback tattile

**Form Handling:**
- `e.preventDefault()` per controllo completo del comportamento del form
- Validazione lunghezza input con `maxInputLength`
- Alert per feedback immediato su errori di input

**Architettura Codice:**
- Separazione logica tra validazione, visualizzazione e interazione
- Commenti strutturati con sezione DESIGN per overview architetturale
- Naming semantico per funzioni riutilizzabili

### Riflessione
È stato fondamentale, nella creazione dell'HTML, testare iterativamente sul mio edge case preferito: l'iPhone 12 mini e, sorprendentemente, anche su un HTC One M8 (versione Android).<br>
Ho infatti scoperto di recente il comando "ipconfig getifaddr en0" (in macOS) nel terminale, che mi ha aperto un mondo. Mi sono aggiunto sul desktop in un file txt la procedura che ho riassunto:
- Esegui ipconfig getifaddr en0 nel terminale
- Ti darà un numero (n) ovvero il tuo IP locale
- In VS Code, dopo aver cliccato su Live Server, ci sarà il numero della porta (p)
- Nel dispositivo desiderato, scrivi nella barra degli indirizzi: n:p

Chiudo sempre il Live Server quando ho finito. Per quanto il rischio in realtà sia basso, considerando che per accedere alla porta bisogna comunque essere sotto la mia stessa rete wifi.

***

**Next Project**: Learn Basic OOP by Building a Shopping Cart
