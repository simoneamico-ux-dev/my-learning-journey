# RPG Creature Search App – freeCodeCamp Certification Project

<div align="center">
  <a href="https://github.com/user-attachments/assets/f3634ea7-0fcf-4423-a4d5-48411de88114">
    <img src="https://github.com/user-attachments/assets/af645b22-3a09-49d6-afa1-6c77f38f5327" alt="Interfaccia della RPG Creature Search App durante la ricerca di una creatura" width="100%">
  </a>
  <p><em>Clicca per vedere la demo (1080p, 28 s, 1.1 MB)</em></p>
</div>

### Il Progetto

RPG Creature Search App sviluppata come Certification Project finale del corso **JavaScript Algorithms and Data Structures** di freeCodeCamp. Un’app che unisce JavaScript, gestione dello stato e UI curata in stile Aqua/macOS early 2000, con particolare attenzione a SVG vettoriali, effetti “jelly” e ottimizzazione estrema delle immagini.

### Il Progetto Preferito (davvero)

Difficile concludere questo percorso in un modo migliore di questo.  
Lo dico spesso, ma questa volta lo sento in modo ancora più forte: è stato il mio progetto preferito.  
Mi sono reso conto del perché fatico a trovare cose da dire nei README: i commenti all’interno dei file **sono già il README**. È lì che ho documentato le decisioni, i compromessi e le scelte progettuali.  

Per non lasciare questo README vuoto, ci tengo a riportare due elementi che rappresentano due aspetti importanti del lavoro fatto: il design vettoriale in stile Aqua e la pipeline di compressione immagini che mi ha portato a risultati sorprendenti.

### Design: Aqua, Jelly e Icona Figma

Dal foglio di stile:

> “Per ottenere la massima fedeltà ai complessi effetti ‘gelatina’ (jelly) e alle texture tipiche di Aqua, ho optato per asset SVG vettoriali per la cornice e i pulsanti principali, delegando al CSS solo le ombre per la profondità.”

Tutti gli elementi chiave dell’interfaccia, ovvero cornice, pulsanti principali, dettagli jelly, li ho creati da zero in Figma.  
Per il bottone **Search** invece ho tratto grande aiuto da una creazione di *Arthur Objartel* che ha generosamente condiviso il bottone su Figma con la community, che ho adattato allo stile dell’app.  

L’icona dell’app (app chiusa) l’ho disegnata anch’essa in Figma:
- Ho creato il fuoco in stile freeCodeCamp con effetto pixel, usando lo strumento penna: un lavoro minuzioso, ma è stato eccezionale per esercitarmi con questo strumento.  
- La lente che avvolge il fuoco nasce dall’idea di citare il Safari dell’epoca, con quel bordo skeuomorfico e le parti lucide.  
- Ho aggiunto due zone lucide e, per completare il tributo a freeCodeCamp, ho fatto ricadere le parti più scure del contorno sui lati destro e sinistro, proprio come nel logo di freeCodeCamp.

### Performance: Pipeline di Compressione Immagini

Sempre da `styles.css`:

> “Ho raggiunto i soli 163KB del background del desktop affinando il mio processo di compressione delle immagini…”

Invece di fare upscaling AI direttamente sul PNG originale, ho seguito una pipeline in tre step:
1. **Conversione PNG → JPEG** con già una leggera compressione.  
2. **Upscaling AI sul JPEG**, non sul PNG, per lavorare su un file già più leggero.  
3. **Passaggio finale in ImageOptim** per ridurre ancora il peso, mantenendo la qualità visiva.

Il confronto è stato netto, con la procedura standard (upscaling su PNG → JPEG → ImageOptim) ho ottenuto **382 KB**, mentre con la procedura ottimizzata (PNG → JPEG compresso → upscaling AI → ImageOptim) soltanto ~**163 KB**. <br>
Più del **50% di riduzione**, con qualità visiva pressoché identica!

### Dallo "Static Archive" al Version Control

Questo progetto non rappresenta solo il culmine di questo percorso, ma anche il punto di svolta del mio metodo di lavoro. <br>
Ho trattato intenzionalmente questa repository come un archivio di snapshot perfette: ogni progetto caricato rappresentava un capitolo chiuso e immutabile del mio percorso di apprendimento. Il mio obiettivo era infatti di tracciare la progressione lineare, non il processo di sviluppo ramificato.

**Toccare il Limite**

Ho toccato con mano con questo progetto i limiti di questo approccio, che potremmo definire "upload manuale". <br>
Ho capito che in un contesto di *Software Engineering* reale, Git non è un archivio di backup (il Google Drive del codice), ma una macchina del tempo e uno strumento di gestione della complessità.
Sono altresì consapevole che ogni metodo di lavoro ha il suo contesto. <br>
Per un percorso di apprendimento come questo sono felice col senno di poi di aver messo come priorità assoluta l'apprendimento dei concetti che mi ha trasmesso freeCodeCamp, ma ora sono pronto per il next level.

### Cosa Ho Imparato

**Architettura JavaScript e gestione asincrona:**
- Organizzazione del codice in tre macro-aree chiare: gestione dati (fetch, parsing, mapping), gestione UI/accessibilità e emulazione del window manager in stile macOS, con funzioni globali e facilmente testabili.  
- Uso di `async/await` con `try...catch` per gestire le chiamate all’API delle creature, distinguendo tra errori attesi (404 "Creature not found") ed errori tecnici generici, e coordinando il tutto tramite una funzione principale `handleSearch`.  
- Destructuring dei dati API (es. `const { id, name, weight: weightValue, height: heightValue, types: creatureTypes, stats, special } = data;`) e uso di mappe (`STAT_MAPPING`) per collegare nomi statistica API a elementi DOM (`hp`, `attack`, ecc.), riducendo codice duplicato e aumentando la chiarezza.  
- Pattern di “pulizia” e “rendering” separati: `clearResults()` per azzerare in blocco output e UI (incluso nascondere il container), `displayCreatureData()` per riempire i campi, creare dinamicamente i badge dei tipi con `createElement`/`appendChild` e riavviare l’animazione CSS con il trucco remove → reflow → add.

**Gestione eventi, UX e accessibilità via JS:**
- Gestione coerente dell’input: normalizzazione con `.trim().toLowerCase()`, guard clause su input vuoto, invio via Enter intercettando `keydown` e trasformandolo in click sul bottone.  
- Tooltip “Aqua” personalizzato con timer: delay di 300ms su `mouseenter`, `clearTimeout` su `mouseleave` e chiusura immediata su `focus`/`keydown` per evitare distrazioni quando l’utente inizia a digitare.  
- Emulazione dei pulsanti “semaforo” (chiudi/minimizza/massimizza) con logica centralizzata in `updateTrafficLightStates()`, che tiene conto di: finestra chiusa/aperta, stato maximized, e dimensione viewport (desktop vs mobile), aggiornando pulsanti e classi in maniera reattiva anche su `resize`.  
- Aggiunta di accessibilità a elementi non semantici: icona desktop implementata come `<div>` ma resa accessibile via tastiera con listener su `keydown` per `Enter`, replicando il comportamento di un vero `button`.

**Web Performance Optimization (HTML/CSS):**
- Pipeline ragionata per ridurre drasticamente il peso del background desktop: PNG originale → JPEG leggermente compresso → upscaling AI sul JPEG → passaggio finale in ImageOptim, passando da ~382 KB a ~163 KB senza perdita visibile di qualità.  
- Uso mirato dell’embedding Base64 per asset molto piccoli (sotto i 5KB), iniettandoli direttamente nel CSS per eliminare richieste HTTP extra e prevenire flash di caricamento di icone/texture di interfaccia.

**Layout avanzato con CSS Grid e Flexbox:**
- Sperimentazione con la “Stack Technique” tramite CSS Grid: definizione di una singola area (es. `grid-area: stack`) assegnata a più elementi (sfondo, icona, input) per sovrapporli con precisione, evitando assoluti caotici; comprensione che l’ordine di sovrapposizione segue anche l’ordine dell’HTML quando gli z-index sono impliciti.  
- Uso combinato di Flexbox e Grid: layout a colonna singola/flessibile sui device piccoli e passaggio a Grid su viewport più ampie per gestire meglio allineamenti, spaziature e proporzioni della finestra Aqua e dei suoi contenuti.

**Problem solving UI: visibilità, layout e animazioni:**
- Comprensione profonda della differenza tra `display: none` e `visibility: hidden` e dei loro effetti su layout e animazioni:  
  - `display: none` rimuove l’elemento dal flusso causando “salti” (collapse di altezza) su mobile.  
  - `visibility: hidden` conserva lo spazio ma può interferire con animazioni che richiedono reinserimento nel flusso.  
- Soluzione tramite due utility distinte: una classe per controllare il layout (es. `.hidden`) e una per il solo aspetto/visibilità (es. `.invisible`), così da separare responsabilità tra “cosa occupa spazio” e “cosa si vede”.

**Accessibilità (A11y) a livello di CSS e struttura:**
- Verifica dei contrasti colore per i badge dei tipi di creatura (FIRE, WATER, ROCK, ecc...) usando strumenti come WebAIM Contrast Checker, e adattamento dei colori per raggiungere almeno WCAG AA (4.5:1 su normal text).  
- Introduzione di `@media (prefers-reduced-motion: reduce)` per rispettare utenti sensibili al movimento, spegnendo o semplificando animazioni come il pop-up della finestra o transizioni troppo vistose.  
- Consapevolezza del “debito di accessibilità” quando si scelgono elementi non semantici (div al posto di button) per esigenze di design/CSS, e bilanciamento con role, aria-label e tabindex (anche se parte di questo è gestito soprattutto via JS).

**Tipografia, design e “Aqua thinking”:**
- Studio dei font nativi sui vari sistemi (Lucida Grande, Verdana, DejaVu Sans, ecc.) per replicare il feeling Aqua senza dover caricare font esterni, costruendo una font stack robusta e storicamente accurata.  
- Scoperta e uso del moderno `text-wrap: balance` per ridurre “widows” e “orphans” tipografiche, distribuendo meglio il testo nei titoli e nei blocchi descrittivi.  
- Ricostruzione di uno stile skeuomorfico credibile usando combo di SVG vettoriali (per forme complesse) e CSS moderno (box-shadow, gradienti, filtri) invece di PNG pesanti, mantenendo al tempo stesso performance e nitidezza su schermi ad alta densità.

**Architettura HTML/CSS orientata al JS futuro:**
- Organizzazione del CSS con un approccio “utility-first per le variabili”: colori, spaziature, dimensioni centralizzate in `:root`, e una gerarchia che combina ID per macro-sezioni e classi riusabili per componenti.  
- Strutturazione dell’HTML pensando alla manipolazione JavaScript: separazione tra etichette statiche (“Weight:”) e valori dinamici in `<span>` dedicati, facilitando aggiornamenti mirati senza dover ricostruire stringhe testuali intere.  

**Architettura di progetto e commenti come README:**
- Documentare direttamente nel codice le scelte architetturali e di design, in modo che chi legge i file abbia già tutto il contesto.  
- Usare i commenti non solo per spiegare “cosa fa” il codice, ma “perché è stato progettato così”.

### Riflessione Finale

Questo è stato il culmine, dopo il quale **sono obbligato a fermarmi**: ho 5 esami universitari che mi aspettano, oltre a svariati elaborati e laboratori.  
Vorrei fermare la mia vita ed iniziare subito il corso **“Front End Development Libraries Certification”** di freeCodeCamp, perché la “fiamma” è al massimo, ma se lo facessi ora rischierei di ritardare la laurea. E, paradossalmente, è lo stesso freeCodeCamp a suggerire pazienza: il corso non è ancora completo, e i moduli finali (Data Visualization and D3, TypeScript Fundamentals e l’esame finale) riportano ancora *Coming 2026*.  

Per quanto siano stati mesi passati per lo più da solo, in compagnia di questo percorso, non esagero se dico che è stato uno dei periodi più belli della mia vita, se non il più bello.  

È arrivato il momento di dedicare nuovamente tutte le energie all'università, ma non sarà difficile grazie alla resilienza e pensiero logico che mi ha donato JavaScript.

***

**Next**:  
Università ed… evolvere questa repository in una knowledge base navigabile, così che non resti solo un archivio personale ma possa diventare uno strumento di supporto per chi sta affrontando lo stesso percorso.
