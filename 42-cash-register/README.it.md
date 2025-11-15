# Cash Register - Progetto freeCodeCamp

![Cash Register Demo](https://github.com/user-attachments/assets/3465b196-c7af-469f-ab9a-302d9a5f3bca)
<br>
<br>

<img width="3432" height="1803" alt="Mobile UI" src="https://github.com/user-attachments/assets/e932331a-a8ca-4e15-afb1-e16a40e5a6de" />

<img width="3418" height="1089" alt="Desktop UI" src="https://github.com/user-attachments/assets/a081700a-afbe-431f-8e15-bda28d27e329" />


### Il Progetto

Cash Register sviluppato con JavaScript vanilla e architettura OOP, implementando algoritmi greedy, calcoli precisi con interi e gestione completa dello stato della cassa. Un'applicazione che dimostra pattern di validazione, calcolo del resto ottimale e design skeuomorfico.

### Il Traguardo: Google UX Certificate

Ho conseguito il Google UX Certificate completando gli ultimi 2 corsi che mi mancavano e realizzando altri 2 progetti richiesti per ottenerlo.<br>
Sono state due settimane molto intense e sono veramente contento di quanto fatto.

### Il Cash Register Project

Nei certification project, come questo, documento la maggior parte delle scelte tecniche direttamente nel codice, incluse le scoperte fatte durante lo sviluppo. Non c'è quindi molto da aggiungere qui.<br>
Nonostante ciò, ci tengo però a evidenziare alcuni aspetti. In primo luogo sono entusiasta di aver creato immagini incredibilmente leggere senza sacrificare la grafica.<br>

**Lo scontrino SVG - 2 KB:**<br>
Il risultato è stato ottenuto grazie a Figma, dove ho creato lo scontrino con un rettangolo e lo strumento penna. Essendo SVG nativi, ho semplicemente raggruppato i vari elementi ed esportato come SVG. Risultato: **2 KB**!

**Il background ottimizzato - 70 KB:**<br>
Inizialmente avevo scelto un'immagine diversa: un tavolo con una fetta di pane e foglia d'insalata. Purtroppo non offriva un buon contrasto e pesava ben 2 MB. Ho quindi effettuato una nuova ricerca nelle librerie di stock fotografico, cogliendo l'occasione per aggiornare la mia cartella Tools sul desktop con i migliori strumenti per immagini.<br>
Ho preso ispirazione da un'illustrazione e ho utilizzato Imagen (tool nel workspace Gemini). Dato che la qualità iniziale era scarsa, ho applicato upscaling con uno dei tool nella cartella. Dopodiché, grazie a ImageOptim, l'immagine è scesa ulteriormente di peso mantenendo l'estetica intatta.<br>
Risultato: **qualità altissima e peso di soli 70 KB**!

**La logica con classi OOP:**<br>
Ho documentato tutto all'interno del codice. Ho voluto utilizzare le classi per esercitarmi e fortunatamente si è rivelata un'ottima scelta, sebbene sia una soluzione più complessa del necessario rispetto a quanto richiesto per superare i test freeCodeCamp.

### Gli Altri Due Progetti per Google UX

**Maintenance App Website:**<br>
Il primo è stato un semplice sito web. Ho deciso di non seguire altre tracce, bensì di riprendere la Maintenance App immaginando di vendere quel servizio. Ecco il risultato:

<details>
  <summary><strong>Maintenance App Website, mobile and desktop version</strong></summary>
  <br>
  <br>
  <strong>Desktop Version</strong>
  <br>
  <br>
  <img src="https://github.com/user-attachments/assets/29dde0dd-9a3a-4608-9ac3-aab15c09e46c" alt="Maintenance App Desktop Website">
  <br>
  <br>
  <br>
  <strong>Mobile Version</strong>
  <br>
  <br>
  <img src="https://github.com/user-attachments/assets/9edebfac-d712-433a-8058-f73367094345" alt="Maintenance App Mobile Website" width="400">
</details>


### Mosaic: Il Progetto del Cuore

Ma ora veniamo al progetto dove ho lasciato il cuore: **Mosaic**.<br>
È stato facile capire le esigenze avendo due psicologhe in famiglia.
Trovi il prototipo Figma qui sotto, così puoi esplorare l'intera esperienza:
<table>
<tr>
<td width="50%">
  <img src="https://github.com/user-attachments/assets/47cbddf2-8b41-4d52-a4f4-e4c6c2c9ee8f" alt="Mosaic Home Screen" width="300">
</td>
<td width="50%">
  <h3>Prototipo Interattivo</h3>
  <p>Esplora tutte le schermate e i flussi dell'app nel prototipo Figma completo.</p>
  <br>
  <a href="https://www.figma.com/proto/HDYGy1YlsayxweWqN7sBJE/Mosaic?node-id=1-27&p=f&t=wfrcP529dntLd1bU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A27">
    <b>→ Apri il prototipo Figma</b>
  </a>
</td>
</tr>
</table>
<br>

**Il Liquid Glass Leggero e l'Accessibilità:**<br>
Ho utilizzato un effetto Liquid Glass molto leggero. Per quanto io sia tra le persone a cui piace esteticamente, ritengo che faccia importanti compromessi con l'accessibilità visiva.<br>

Ecco come Apple ha utilizzato la tab bar nell'app Musica, ci tengo a precisare che nella maggior parte delle applicazioni iOS l'effetto non è tono su tono come in questo esempio:<br>
<br>
<img width="431" height="121" alt="Screenshot 2025-11-15 alle 15 38 08" src="https://github.com/user-attachments/assets/fe1a9693-f040-47d9-b7c7-ac4a39cf9586" />
<br>
<br>
E come ho deciso di utilizzarlo in modo molto leggero in Mosaic:<br>
<br>
<img width="393" height="135" alt="Screenshot 2025-11-15 alle 15 43 39" src="https://github.com/user-attachments/assets/ac8818cf-720e-4dc1-be93-e06369170800" />

Apple permette comunque da iOS 26.1 di disattivarlo nelle impostazioni e quindi ritornare al solo effetto blur. Purtroppo, come appreso nel corso Google, questa non è la strada migliore: adeguarsi agli standard di accessibilità non aiuta solo alcuni, ma porta benefici a tutti. Trovo corretto renderlo opzionale, ma già questo dettaglio lascia intuire che qualcosa non funziona.
<br>

**La Filosofia: Rovesciare le Aspettative:**<br>
Per quanto riguarda il lato open source, ho voluto giocare con aspettative e grafica attesa. Se si chiede a qualcuno di immaginarsi un'app open source del genere, si immaginerà una grafica poco "Apple", complessità e conseguente difficoltà d'uso.<br>
Se invece chiedessimo di immaginare un'app che ha come modello di business l'abbonamento da oltre 30 euro al mese, AI integrata e tutte queste feature premium, ci si aspetterebbe esattamente la grafica di Mosaic.<br>
Quindi ho optato per uno stile iOS, seppur reinterpretato in alcuni aspetti, con semplicità assoluta come priorità principale. Il tutto, però, completamente Open Source.
È incredibile come un progetto come questo è realmente fattibile già al giorno d'oggi, usando modelli che girano in locale come Microsoft Phi-4 mini. <br>
Mi spiego meglio:
Premetto che non essendo un backend developer potrei sbagliarmi ma a seguito di svariate ricerche ho scoperto che Phi-4 mini sarebbe il candidato ideale per questo tipo di compito.
Offre output eccellenti e velocemente, l'unico neo rimane il peso: oltre 7GB, ma per un terapeuta attento alla privacy questo non è un problema.
Per telefoni con hardware inferiore ad iPhone 15 Pro si potrebbe optare per modelli più leggeri come Phi-3 mini o Llama 3.2 3B che tra l'altro pesano circa 2 GB.
Per il modello di trascrizione per fortuna c'è OpenAI Whisper Base, pesa circa 140 MB, open source e garantisce trascrizioni eccellenti!

### Cosa Ho Imparato

**Architettura OOP Avanzata:**
- Classi ES6 per incapsulare logica operativa complessa
- `constructor()` per inizializzazione e preparazione dati
- Metodi privati (`#calculateChange`) per proteggere logica interna
- Separazione responsabilità tra preparazione e calcolo

**Strutture Dati Moderne:**
- `Map` invece di oggetti per gestione chiave-valore più consistente
- Accesso uniforme ai dati: `.get()` e `.set()` vs notazioni miste
- Iterazione con `.forEach()` su Map per logica più pulita

**Algoritmi Greedy:**
- Strategia "best choice at the moment" per calcolo resto ottimale
- Pre-sorting delle denominazioni da maggiore a minore
- Loop `while` per dispensare massimo numero di ogni denominazione
- Comprensione limiti: funziona solo con sistemi monetari standard

**Calcoli Precisi con Interi:**
- Problema floating-point: `0.1 + 0.2 !== 0.3` in JavaScript
- Conversione dollari → centesimi all'input per precisione
- `Math.round()` per arrotondamento sicuro
- Riconversione centesimi → dollari solo all'output

**Validazione Input Robusta:**
- Guard clauses per controlli precondizione
- `isNaN()` per validare numeri
- Gestione casi edge: cash esatto, insufficiente, maggiore
- Alert informativi per feedback immediato

**Gestione Stati Transazione:**
- Status `INSUFFICIENT_FUNDS` quando impossibile dare resto
- Status `CLOSED` quando resto svuota completamente il cassetto
- Status `OPEN` per transazioni standard con resto parziale
- Return di oggetti strutturati: `{status, change}`

**Ottimizzazione Immagini:**
- SVG nativi da Figma: 2 KB per grafica vettoriale
- Imagen (Gemini) per generazione illustrazioni
- Upscaling AI per migliorare qualità senza peso
- ImageOptim per compressione finale: 2 MB → 70 KB

**Design Skeuomorfico:**
- Radial gradient per simulare input dots su receipt
- `background-size` e `background-repeat` per pattern
- Font Roboto Mono per simulare stampante termica
- Transform rotate per imperfezioni realistiche

**Mobile-First con Variabili CSS:**
- Tutti i valori centralizzati in `:root` variables
- Media query che sovrascrive solo le variabili necessarie
- Fallback `100vh` + `100dvh` per gestire barra URL dinamica iOS
- Conditional loading: SVG receipt diversi per mobile/desktop

**Event Handling Avanzato:**
- `blur` event per fix scroll iOS dopo input focus
- `keydown` con `Enter` per submit alternativo
- `preventDefault()` per controllare comportamento form
- Istanza classe ricreata ad ogni click per test freeCodeCamp

**Array Methods Funzionali:**
- `.find()` per cercare valore denominazione in DENOMINATIONS
- `.forEach()` per iterare su Map cashInDrawer
- `.map()` per formattare array change in stringa
- `.join()` per concatenare stringhe di output

***

**Next Project**: Learn Fetch and Promises by Building an fCC Authors Page
