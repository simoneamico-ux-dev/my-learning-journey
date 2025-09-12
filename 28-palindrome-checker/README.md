# Palindrome Checker - freeCodeCamp Project (CERTIFICATION)

![mirror-word](https://github.com/user-attachments/assets/d4b2b740-f628-461c-a196-6cfc33a1fbc8)
<img width="3132" height="2203" alt="mobile-version-compared" src="https://github.com/user-attachments/assets/57a371b4-1e52-4a17-a0e5-d88df2174c78" />
<img width="7199" height="2860" alt="desktop-version-compared" src="https://github.com/user-attachments/assets/cea53b6b-e9ae-4eb1-9401-9dbf7a343638" />
<br>
<br>

## English Version

### The Project
Palindrome Checker with complete design system and dynamic interface. An application that checks if a word or phrase is a palindrome, with smooth transitions between three different visual states and complete performance optimization.

### The Most Fun Project of My Life!
This was the most fun code and design project of my life!<br>
I connected so many dots. A few days ago I was in the car waiting for a person and while waiting I wondered: how do you replicate Apple's Liquid Glass with just CSS? Would React be necessary? I saw a tutorial that promised to achieve Liquid Glass with the simple lines of code it suggested, I didn't delve into it right then but as soon as I was about to look carefully at the tutorial the day before yesterday, when I started the project, I realized afterwards that React would be needed. This is because liquid glass isn't the simple background blur effect or the Aero design born with Windows Vista. It's much more complex, it's actually rich with advanced parameters that the blur effect can only dream of.

### Internal Inspiration
I didn't need external inspiration this time, because I drew inspiration from my first app created with Figma. It was an assignment from the Breccia course I took, where I used some photos of my puppy Lucy when she was little.<br>
I'm including two screenshots below:
<br>
<br>
<img width="1028" height="958" alt="My first App" src="https://github.com/user-attachments/assets/4fb89bbc-5782-4948-aa5c-29cbfe614890" />
<br>
<br>
From it I took the color choices which I then adapted to the backgrounds of everything, from card to buttons, each extracted from every "situation" created in Figma, having first prototyped there, as always. To be honest I still need to research this but I suppose that giving different background-images to every element that always change compared to the next and previous screen isn't a best practice.

### The Optimization Challenge
As long as I was testing the code with Live Server in Visual Studio Code there were no glitches/lag, because it had image availability at the speed of light, having them in the project folder; but when I exported them to GitHub, in the repository assets, I started seeing the limits. I subsequently tried to solve them with TinyPng but the results were very poor, I didn't even have control over the output quality. Then I came across other formats, particularly WebP but to no avail, it lost too much quality while keeping quality parameters at high levels.

The breakthrough was a program, totally open source, called ImageOptim, which made my computer work like never before: the CPU reached 92°C, this is because it runs completely locally. It reduced quality by just 30%, but it was enough. Now the application has no more glitches and images get pre-loaded thanks to the "preload" property that I had the pleasure of discovering today, while looking for ways to optimize the UX.

### The Growth Sensation
I'm extremely happy with the result, because inspiration was practically nil and for this very reason I feel it's more "my" project compared to others, despite never ever having copied others' content, but especially it's this sensation of needing less and less inspiration that makes you perceive progress. It's like at the gym, after some years I could have created (and I did) a workout from scratch, even creatively, but not less technical for that.

### The Three Non-Stop Days
It was 3 non-stop days, I only stopped to make a medical visit. I felt fatigue in the hardest moments, because I'd be lying if I said it was all simple, especially regarding JavaScript. CSS made me lose patience with element positioning but then I solved it and also understanding how to do it next time, it may seem strange but I used Refactoring UI principles and also the calculator to make it exactly like the Figma version, but JavaScript instead gave me problems not so much with calculations, but rather with buttons. A minimal modification, a minimal syntax oversight and I was back to square one. I certainly complicated my life by planning multiple interfaces but I'm happy this way.

### The Three Edge Cases
Last curiosity, I changed phones almost a year ago to a foldable to take advantage of using it as a reader in the cafeteria at work and in moments where I would have risked wasting time, given that the small phone I had certainly wasn't created to increase productivity, I used it at most to read brief documents but it was always impossible to read books on it. Well I'm talking about the iPhone 12 mini, and it's right here that I understood Liquid Glass, beta after beta, improvement after improvement. But I don't just refer to this. I had the idea to use it as "prototype in progress" while using Figma on desktop, every modification made there I saw it materialize instantly also on the iPhone. I based the dimensions for the mobile version precisely by visualizing it step by step from there. It represents a true edge case, in fact, it remains inevitable that if the experience with it will be perfect, it will be even better with all others. And it's not over here, as written before my main phone is a foldable: without doing it on purpose I have 3 edge cases! Because the iPhone is the small phone, the foldable closed is the narrow phone, the foldable open is the huge phone. From time to time I adopted the previous prototype in progress process also with the foldable.

As always, as taught by Refactoring UI I started designing for mobile.

### What I Learned

**Advanced CSS Variables System:**
- Complete design system with variables for every element
- Responsive variables that completely change between desktop and mobile
- CSS Variables for background-image dynamic switching
- Structured color system and spacing system

**Performance Optimization:**
- `rel="preload"` for image pre-loading
- Image optimization with ImageOptim

**Complex State Management:**
- JavaScript state tracking with `lastValue` variable
- Dynamic button text change ("Mirror" ↔ "Clear")
- UI state synchronization between multiple elements
- Error handling for empty input validation

**Advanced JavaScript Patterns:**
- String manipulation for palindrome logic
- `toLowerCase()`, `replace()` with regex, `split()`, `reverse()`, `join()`

**Mobile-First Responsive Design:**
- Edge case testing on 3 different devices
- Real-time prototype testing workflow
- Mobile-first approach as taught by Refactoring UI

**User Experience Engineering:**
- Accessibility with placeholder descriptions
- Immediate visual feedback for user actions
- Error prevention with input validation

### Reflection
I'm becoming faster and faster and my interest isn't waning, quite the opposite.

***

**Next Project**: Learn the Date Object by Building a Date Formatter

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
Palindrome Checker con design system completo e interfaccia dinamica. Un'applicazione che controlla se una parola o frase è palindroma, con transizioni fluide tra tre stati visivi diversi e ottimizzazione completa delle performance.

### Il Progetto Più Divertente della Mia Vita!

È stato il progetto code e design più divertente della mia vita!<br>
Ho unito tanti puntini.
Qualche giorno fa ero in macchina che attendevo una persona e nell'attesa mi sono chiesto: come si fa a replicare il Liquid Glass di Apple con solo CSS? Sarà necessario React? Ho visto un tutorial che prometteva di ottenere il Liquid Glass con semplici linee di codice che suggeriva, non ho approfondito lì per lì ma appena mi sono apprestato a guardare attentamente il tutorial l'altro ieri, quando ho cominciato il progetto, mi sono reso conto dopo che sarebbe servito React. Questo perché il liquid glass non è il semplice effetto background blur oppure il design Aero nato con Windows Vista. È molto più complesso, è infatti ricco di parametri avanzati che l'effetto blur può solo sognarsi.

### L'Ispirazione Interna

Non ho avuto bisogno di ispirazioni esterne questa volta, perché mi sono ispirato alla mia prima app creata con Figma. Era un compito del corso di Breccia che feci, nella quale usai alcune foto di Lucy, la mia cagnolina, metto due schermate qui sotto.
<br>
<br>
<img width="1028" height="958" alt="My first App" src="https://github.com/user-attachments/assets/4fb89bbc-5782-4948-aa5c-29cbfe614890" />
<br>
<br>
Da esso ho preso la scelta dei colori che ho poi adattato agli sfondi di ogni cosa, dalla card ai bottoni, ognuno estratto da ogni "situazione" creata in Figma, avendo prima prototipato lì, come sempre.
A dire il vero devo ancora informarmi in merito ma suppongo che il dare background-image diversi ad ogni elemento che cambiano sempre rispetto alla schermata successiva e precedente non sia una best practice.

### La Sfida dell'Ottimizzazione

Finché testavo il codice con Live Server in Visual Studio Code non c'era nessun glitch/lag, perché aveva la disponibilità di immagini alla velocità della luce, avendole nella cartella del progetto; ma quando le ho esportate in GitHub, nella repository asset, ho cominciato a vedere i limiti. Ho provato successivamente a risolverli con TinyPng ma i risultati erano molto scarsi, non avevo nemmeno il controllo sulla qualità di uscita. Allora mi sono imbattuto in altri formati, in particolare il WebP ma nulla di fatto, perdeva troppa qualità pur mantenendo i parametri della qualità a livelli alti. 

**La svolta fu un programma, totalmente open source, si chiama ImageOptim,** che ha fatto lavorare il mio computer come non mai: è arrivata a 92° la CPU, questo perché gira completamente in locale. Ha ridotto la qualità di appena il 30%, ma è bastato. Ora l'applicazione non ha più glitch e le immagini vengono pre-caricate grazie alla proprietà "preload" che ho avuto il piacere di conoscere proprio oggi, mentre cercavo modi per ottimizzare l'UX.

### La Sensazione di Crescita

Sono estremamente felice del risultato, perché l'ispirazione è stata pressoché nulla e proprio per questo lo sento come un progetto più "mio" rispetto agli altri, pur non avendo mai e poi mai copiato contenuti altrui, ma soprattutto è questa sensazione di avere sempre meno bisogno d'ispirazione che ti fa percepire il progresso. È come in palestra, dopo qualche anno avrei potuto creare (e l'ho fatto) un allenamento dal nulla, anche in modo creativo, ma non per questo meno tecnico.

### I Tre Giorni No-Stop

Sono stati 3 giorni no-stop, mi sono fermato solo per fare una visita medica. Ho sentito la fatica nei momenti più duri, perché mentirei se dicessi che è stato tutto semplice, soprattutto per il JavaScript. Il CSS mi ha fatto perdere la pazienza con le posizioni degli elementi ma che poi ho risolto e capendo anche come farlo le prossime volte, può sembrare strano ma ho usato i principi di Refactoring UI e anche la calcolatrice per farlo esattamente ad immagine e somiglianza della versione Figma, ma il JavaScript invece mi ha dato problemi non tanto con i calcoli, bensì con i pulsanti. Una minima modifica, una minima svista di sintassi ed ero punto a capo. Sicuramente mi sono complicato la vita prevedendo più interfacce ma sono contento così. 

### I Tre Edge Case

Ultimissima curiosità, ho cambiato il telefono ormai quasi un anno fa con un foldable per trarre i vantaggi di usarlo come reader in mensa al lavoro e nei momenti dove avrei rischiato di perdere tempo, dato che il telefono piccolo come quello che avevo non era stato di certo creato per aumentare la produttività, lo usavo al massimo per leggere brevi documenti ma è sempre stato impossibile leggerci libri. Ebbene sto parlando dell'iPhone 12 mini, e proprio qui che ho compreso il Liquid Glass, beta dopo beta, miglioramento dopo miglioramento. Ma non mi riferisco solo a questo.
Ho avuto l'idea di usarlo come "prototype in progress" mentre usavo Figma sul desktop, ogni modifica fatta da lì la vedevo materializzarsi istantaneamente anche sull'iPhone. Ho basato le dimensioni per la versione mobile proprio visualizzandola step by step da lì. Rappresenta un vero e proprio edge case, infatti, resta inevitabile che se la fruizione con esso sarà perfetta, sarà ancora migliore con tutti gli altri. E non è finita qui, come scritto prima il mio telefono principale è un foldable: senza farlo apposta ho ben 3 edge case! Perché l'iPhone è il telefono piccolo, il foldable chiuso è il telefono stretto, il foldable aperto è il telefono enorme. Di tanto in tanto ho adottato il processo precedente di prototype in progress anche col foldable.

Come sempre, come insegnato da Refactoring UI, ho iniziato progettando per mobile.

### What I Learned

**Advanced CSS Variables System:**
- Design system completo con variabili per ogni elemento
- Responsive variables che cambiano completamente tra desktop e mobile
- CSS Variables per background-image dynamic switching
- Color system e spacing system strutturati

**Performance Optimization:**
- `rel="preload"` per pre-caricamento immagini
- Image optimization con ImageOptim

**Complex State Management:**
- JavaScript state tracking con `lastValue` variable
- Dynamic button text change ("Mirror" ↔ "Clear")
- UI state synchronization tra multiple elementi
- Error handling per empty input validation

**Advanced JavaScript Patterns:**
- String manipulation per palindrome logic
- `toLowerCase()`, `replace()` con regex, `split()`, `reverse()`, `join()`

**Mobile-First Responsive Design:**
- Edge case testing su 3 dispositivi diversi
- Real-time prototype testing workflow
- Mobile-first approach come insegnato da Refactoring UI

**User Experience Engineering:**
- Accessibility con placeholder descriptions
- Visual feedback immediato per user actions
- Error prevention con input validation

### Riflessione

Sto diventando sempre più veloce e non mi sta passando l'interesse, è vero il contrario.

***

**Next Project**: Learn the Date Object by Building a Date Formatter
