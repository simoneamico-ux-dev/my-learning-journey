# Roman Numeral Converter - freeCodeCamp Project (CERTIFICATION)

![Screen Recording - Roman Converter](https://github.com/user-attachments/assets/75268854-fe60-4b41-90dc-7c543d745772)
![Mobile UI](https://github.com/user-attachments/assets/610ec440-6bd4-4cad-9dee-3d2a25d8ada2)
![Desktop UI](https://github.com/user-attachments/assets/901eec57-8ef1-49ea-8195-c52eb873860b)
<br>
<br>

# Roman Numeral Converter - freeCodeCamp Project (CERTIFICATION)

## English Version

### The Project
Arabic to Roman numeral converter developed with vanilla JavaScript, advanced input validation and component-based architecture. A complete application with Material Design 3 UI and professional commenting system.

### The Art of Comments

Incredibly, I have very few things to say about this project, because I said everything in the comments. Nevertheless, those comments are for programmers who read them, these READMEs are for everyone. <br>
After thoroughly internalizing Salvatore Sanfilippo's article ([https://antirez.com/news/124](https://antirez.com/news/124)) it's as if in this project I wrote comments for the first time. Previously I only used them in CSS to divide different components. This time I integrated design comments as well as the long introductory comment that explains the file architecture, so that anyone who reads it will have a general overview right from the start. This is useful in long projects, in my case I added this type of comment also in the HTML but I recognize that for such small files it's quite useless, nevertheless, since I want to practice right away, I decided to add it.

### The "Why Comments"

I found the "why comments" amazing, as well as all those comments that explain the reasons why one choice was made rather than another and if this is very trivial then explain why it was the best choice at that moment. I say amazing because they forced me to reflect and research a lot in order to affirm certain choices. This gave me an understanding that I could never have received by writing only code.

### The "Trivial Comments" with Culture

Then come the trivial comments, which should be all those comments dedicated to concepts that any programmer takes for granted, but which Salvatore Sanfilippo says he loves anyway. I wanted to add a pinch of culture inside. <br>
For example in the HTML at a certain point I state: "I did some research and found out that input type="number" uses browser native validation operating with an underlying C/C++ engine, while regex is executed by the JavaScript interpreter." <br>
Or again: "Adding min/max attributes provides defense in depth. Although this approach is typically used in more complex, cybersecurity scenarios, it provides a fallback in case JavaScript rule validation fails or is disabled." <br>
Two concepts completely useless to include for any programmer, but still concepts worth rereading. For example, I, an absolute beginner, would be very happy to find similar comments in someone else's project.

### The "Checklist Comments"

Subsequently I added warning comments, Salvatore calls them "checklist comments" that is, comments that helped me remember exactly what the freeCodeCamp instructions said and I'm not exaggerating if I say that it's precisely thanks to these that I managed to pass a certification project on the first attempt for the first time.

### The Design: Material Design 3

Let's now talk about the design of this project. This time I chose to delve into the world of Material Design 3. <br>
I was inspired by the Google Translate application on my smartphone, I've always liked the style, although "acidic" I find its style unique. I started studying this design current and after getting a general overview from a YouTube video, I dedicated myself to exploring the official website. Here I got all the answers, from the style and stylistic choices to a Figma file with all the main components.
I took from this the various "shapes", that is all the shapes of Material Design 3 and scattered them on the background, adding an emoji depicting Android, also taken from the Material site.

### A New Approach: Side Notes

Here's an image of the notes I wrote alongside the project to help me. I had never adopted this approach. Did Salvatore even manage to change my way of using Figma?
<br>
<br>
<img width="417" height="867" alt="Figma notes" src="https://github.com/user-attachments/assets/c775a49f-42b0-423e-adbf-4bcd68a5a1b9" />
<br>
<br>

### Personal Reinterpretation of the Style

I took the liberty of reinterpreting this style. In fact, for the input box I decided to position the placeholder centered horizontally instead of left-aligned, with a slightly higher opacity than Google would have done and at the same time with a color analogous to the overall theme.
I also inserted dashes, precisely 6, which are displayed when opening the application, before getting the output. Google would never have done this, it would have left it empty instead to emphasize that that field would be filled with the call to action by the user (pressing the "Convert" button).

I made all these choices for a mere aesthetic reason, they brought me to the feeling that everything was in the right place.

### Typography: Roboto Slab and Roboto

Beyond the style, I also kept the typical consistency pattern that Google dedicates to interactive elements (input, buttons) which must be immediately recognizable.
For this reason I opted for the Roboto Slab font for the title and for the output, which had the objective of invoking classic characters, akin to ancient Rome, a sort of "thematic accent".
While for input and button the Roboto font that follows modernity, has excellent readability and follows consolidated patterns that the user knows, characteristics central to Google's philosophy.

### What I Learned

**Advanced CSS Architecture:**
- Component-Based Architecture for organization into components (card, title, output, input, button)
- Utility-First Variables with centralization in `:root`
- Flat Component Hierarchy with ID-based selectors
- Responsive media queries for mobile

**Conversion Algorithm:**
- Array map with Arabic-Roman pairs `[[1000, "M"], [900, "CM"]...]`
- `.reduce()` for result accumulation
- While loop for iteration on Roman values
- Array destructuring for concise code

**Professional Input Validation:**
- `type="number"` for native browser validation (C/C++ engine)
- `min/max` attributes for defense in depth
- `e.preventDefault()` to block non-numeric characters
- Edge case handling: empty values, NaN, invalid ranges

**Event Handling:**
- `addEventListener("keydown")` for character control
- Enter key for alternative submit
- `.includes()` for blocking specific characters (`["e", "E", "+", "-"]`)

**Comment Best Practices:**
- Design comments for general architecture
- Why comments to explain technical choices
- Trivial comments with cultural insights
- Checklist comments for freeCodeCamp requirements

**Material Design 3:**
- Shapes and Material components
- Color system with thematic palettes
- Typography hierarchy (Roboto Slab + Roboto)
- Interactive states and transitions

**Programming Principles:**
- SRP (Single Responsibility Principle)
- DRY (Don't Repeat Yourself)
- Defense in depth approach
- Semantic HTML

### Reflection

Salvatore Sanfilippo taught me that comments are not a burden, but an art.
Documenting this process is not wasting time, after all it led me to pass a certification project on the first attempt for the first time.

***

**Next Project**: Learn Regular Expressions by Building a Spam Filter

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
<br>

## Versione Italiana

### Il Progetto
Convertitore da numeri arabi a numeri romani sviluppato con JavaScript vanilla, validazione avanzata degli input e architettura basata su componenti. Un'applicazione completa con design Material Design 3 e sistema di commenti professionale.

### L'Arte dei Commenti

Incredibilmente ho pochissime cose da dire in merito a questo progetto, perché ho detto tutto nei commenti. Ciononostante, quei commenti sono per i programmatori che leggono, questi README sono per tutti. <br>
Dopo aver interiorizzato l'articolo di Salvatore Sanfilippo ([https://antirez.com/news/124](https://antirez.com/news/124)) è come se in questo progetto avessi scritto i commenti per la prima volta. Precedentemente li utilizzavo soltanto nel CSS per suddividere i diversi componenti. Questa volta ho integrato i commenti di design (design comments) nonché il lungo commento introduttivo che spiega l'architettura del file, in modo tale da permettere a chi lo leggerà di avere fin da subito un'infarinatura generale. Questo è utile in progetti lunghi, nel mio caso ho aggiunto questo tipo di commento anche nell'HTML ma riconosco che per file così piccoli sia alquanto inutile, nonostante ciò, dato che voglio esercitarmi fin da subito, ho deciso di aggiungerlo.

### I "Why Comments"

Ho trovato strabilianti i "why comments" nonché tutti quei commenti che spiegano le ragioni per le quali si è optato per una scelta piuttosto che l'altra e se questa è molto banale allora spiegare il perché è stata la scelta migliore in quel momento. Dico strabilianti perché mi hanno costretto a riflettere e documentarmi molto per poter affermare certe scelte. Questo mi ha dato una comprensione che non avrei mai potuto ricevere scrivendo solo codice.

### I "Trivial Comments" con Cultura

Poi arrivano i trivial comments, che dovrebbero essere tutti quei commenti dedicati a concetti che qualsiasi programmatore dà per scontato, ma che Salvatore Sanfilippo dice comunque di amare. Ho voluto aggiungere un pizzico di cultura all'interno. <br>
Ad esempio nell'HTML a un certo punto affermo: "I did some research and found out that input type="number" uses browser native validation operating with an underlying C/C++ engine, while regex is executed by the JavaScript interpreter." <br>
O ancora: "Adding min/max attributes provides defense in depth. Although this approach is typically used in more complex, cybersecurity scenarios, it provides a fallback in case JavaScript rule validation fails or is disabled." <br>
Due concetti del tutto inutili da includere per un qualsiasi programmatore, ma pur sempre concetti che vale la pena rileggere. Per esempio io, assoluto principiante, sarei felicissimo di trovare commenti simili nel progetto di qualcun altro.

### I "Checklist Comments"

Successivamente ho aggiunto dei commenti di monito, Salvatore li chiama "checklist comments" ovvero commenti che mi sono serviti per ricordare esattamente cosa diceva nelle istruzioni freeCodeCamp e non esagero se affermo che è proprio grazie a questi se sono riuscito per la prima volta a passare al primo tentativo un certification project.

### Il Design: Material Design 3

Parliamo ora del design di questo progetto. Questa volta ho scelto di addentrarmi nel mondo del Material Design 3. <br>
Mi sono ispirato dall'applicazione Google Translate del mio smartphone, mi è sempre piaciuto lo stile, seppur "acido" trovo il suo stile unico. Ho iniziato a studiare questa corrente di design e dopo aver ottenuto un'infarinatura generale da un video YouTube, mi sono dedicato all'esplorazione del sito ufficiale. Qui ho ottenuto tutte le risposte, dallo stile e scelte stilistiche a un file Figma con tutti i componenti principali.
Ho preso da questo le varie "shapes", ovvero tutte le forme del Material Design 3 e le ho sparse sullo sfondo, aggiungendoci un emoji che raffigura Android, anche quest'ultima presa dal sito Material.

### Un Nuovo Approccio: Note a Fianco

In seguito, un'immagine delle note che ho scritto a fianco al progetto per aiutarmi. Non avevo mai adottato questo approccio. Salvatore è persino riuscito a cambiare il mio modo di usare Figma?
<br>
<br>
<img width="417" height="867" alt="Figma notes" src="https://github.com/user-attachments/assets/d7ce9eb6-4478-4525-9a09-78542ff92241" />
<br>
<br>

### Reinterpretazione Personale dello Stile

Mi sono preso la libertà di reinterpretare questo stile. Infatti al box dell'input ho deciso di posizionare il placeholder centrato orizzontalmente anziché allineato a sinistra, con un'opacità leggermente più alta di come avrebbe fatto Google ed allo stesso tempo di un colore analogo al tema complessivo.
Inoltre ho inserito dei trattini, per la precisione 6, che vengono mostrati all'apertura dell'applicazione, prima di ottenere l'output. Google non l'avrebbe mai fatto, l'avrebbe piuttosto lasciato vuoto per sottolineare che quel campo si sarebbe riempito con la call to action da parte dell'utente (la pressione del pulsante "Convert").

Tutte queste scelte le ho fatte per una mera questione estetica, mi hanno portato alla sensazione che così fosse tutto al posto giusto.

### Tipografia: Roboto Slab e Roboto

Al di là dello stile, ho anche conservato il tipico pattern di coerenza che Google dedica agli elementi interattivi (input, pulsanti) i quali devono essere immediatamente riconoscibili.
Per questo motivo ho optato per il font Roboto Slab per il titolo e per l'output, che ha avuto come obiettivo quello di invocare caratteri classici, affini all'antica Roma, una sorta di "accento tematico".
Mentre per input e button il font Roboto che segue modernità, ha ottima leggibilità e segue pattern consolidati che l'utente conosce, caratteristiche centrali nella filosofia di Google.

### Cosa Ho Imparato

**Architettura CSS Avanzata:**
- Component-Based Architecture per organizzazione in componenti (card, title, output, input, button)
- Utility-First Variables con centralizzazione in `:root`
- Flat Component Hierarchy con selettori basati su ID
- Media queries responsive per mobile

**Algoritmo di Conversione:**
- Array map con coppie arabo-romano `[[1000, "M"], [900, "CM"]...]`
- `.reduce()` per accumulazione risultati
- While loop per iterazione sui valori romani
- Destructuring array per codice conciso

**Input Validation Professionale:**
- `type="number"` per validazione nativa del browser (C/C++ engine)
- `min/max` attributes per defense in depth
- `e.preventDefault()` per bloccare caratteri non numerici
- Gestione casi edge: valori vuoti, NaN, range non validi

**Event Handling:**
- `addEventListener("keydown")` per controllo caratteri
- Enter key per submit alternativo
- `.includes()` per blocco caratteri specifici (`["e", "E", "+", "-"]`)

**Best Practice Commenti:**
- Design comments per architettura generale
- Why comments per spiegare scelte tecniche
- Trivial comments con approfondimenti culturali
- Checklist comments per requisiti freeCodeCamp

**Material Design 3:**
- Shapes e componenti Material
- Color system con palette tematiche
- Typography hierarchy (Roboto Slab + Roboto)
- Interactive states e transitions

**Principi di Programmazione:**
- SRP (Single Responsibility Principle)
- DRY (Don't Repeat Yourself)
- Defense in depth approach
- Semantic HTML

### Riflessione

Salvatore Sanfilippo mi ha insegnato che i commenti non sono un peso, ma un'arte. Ogni scelta tecnica ha una ragione, ogni alternativa scartata ha un perché. Documentare questo processo non è perdere tempo, d'altronde mi ha portato a superare per la prima volta un certification project al primo tentativo.

***

**Next Project**: Learn Regular Expressions by Building a Spam Filter





