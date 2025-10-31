# CSS Real World Vademecum

## 1. Importazione font esterni

### Link Google Fonts
**Cosa fa**: Importa font professionali gratis da Google nel tuo sito.

**Snippet nel `<head>` HTML**:
```html
<!-- Font singolo -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">

<!-- Font multipli -->
<link href="https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap" rel="stylesheet">
```

**I numeri (400,700,800) significano**:
```
400 = normale
700 = grassetto (bold)
800 = extra grassetto
```

**Poi nel CSS**:
```css
body {
  font-family: 'Open Sans', Arial, sans-serif;
}
```

**Analogia**: È come ordinare penne speciali su Amazon invece di usare solo quelle del supermercato. Arrivano via internet e le usi quando vuoi!

### Link Font Awesome
**Cosa fa**: Importa migliaia di icone professionali

**Nel `<head>`**:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
```

**Uso nel HTML**:
```html
<i class="fab fa-facebook-f"></i>  <!-- Facebook -->
<i class="fab fa-twitter"></i>      <!-- Twitter -->
<i class="fas fa-heart"></i>        <!-- Cuore -->
```

**Classi Font Awesome**:
- `fab` = Font Awesome Brands (loghi aziende)
- `fas` = Font Awesome Solid (icone piene)
- `far` = Font Awesome Regular (icone vuote)

## 2. Selettori fondamentali

### Selettore universale `*`
**Cosa fa**: Seleziona TUTTI gli elementi della pagina. Proprio tutti!

**Snippet**:
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### Reset universale completo
**Cosa fa**: Resetta TUTTO inclusi pseudo-elementi

```css
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

**Analogia**: Come dire "TUTTI in classe, compresi quelli in corridoio e in bagno, sedetevi!"

### Selettore di tipo (tag)
**Cosa fa**: Seleziona tutti gli elementi di quel tipo HTML.

```css
/* Tutti i paragrafi */
p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Specializzazioni */
p.warning { color: red; }        /* Solo p con classe warning */
p[lang="en"] { font-style: italic; } /* Solo p in inglese */
```

### Selettore di classe `.class`
**Cosa fa**: Seleziona elementi con quella classe, indipendentemente dal tag.

```css
.importante {
  background: yellow;
  font-weight: bold;
}
```

### Selettori multipli (senza spazio)
**Cosa fa**: Seleziona elementi che hanno TUTTE le classi specificate.

```css
/* Elemento con ENTRAMBE le classi */
.social-icons.active {
  color: blue;
}
```

### Selettori combinati (virgola)
**Cosa fa**: Applica lo stesso stile a più selettori

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Raleway', sans-serif;
}
```

### Pseudo-classi di stato
```css
/* Mouse sopra */
button:hover {
  background: #f0f0f0;
  cursor: pointer;
  transform: translateY(-2px);
}

/* Mentre clicchi */
button:active {
  transform: scale(0.95);
}

/* Link già visitato */
a:visited {
  color: purple;
}

/* Elemento con focus (keyboard) */
input:focus {
  outline: 2px solid blue;
  background: #f0f8ff;
}
```

### `:not()` pseudo-classe
```css
/* Tutti i p tranne quelli con classe .no-margin */
p:not(.no-margin) {
  margin-bottom: 1rem;
}
```

### Pseudo-selettori di tipo
```css
/* Primo elemento del suo tipo */
.line:first-of-type {
  margin-top: 0;
}

/* Il secondo, terzo, ecc */
.line:nth-of-type(2) { transform: rotate(60deg); }
.line:nth-of-type(3) { transform: rotate(120deg); }

/* Posizioni pari e dispari */
tr:nth-of-type(odd) { background: #f0f0f0; }
tr:nth-of-type(even) { background: white; }
```

### Pseudo-elementi `::before` e `::after`
```css
/* Content vuoto per forme/decorazioni */
.penguin-body::before {
  content: "";  /* OBBLIGATORIO anche se vuoto! */
  width: 50%;
  height: 45%;
  background-color: gray;
}
```

### `::first-letter` pseudo-elemento
```css
.first-paragraph::first-letter {
  font-size: 6rem;
  color: orangered;
  float: left;
  margin-right: 1rem;
}
```

### `::selection` pseudo-elemento  
**Cosa fa**: Stilizza il testo quando lo selezioni!

```css
::selection {
  background: gold;
  color: black;
}

/* Per Firefox */
::-moz-selection {
  background: gold;
  color: black;
}
```

**Risultato**: Quando selezioni del testo diventa dorato invece che blu!

**Analogia**: Come un evidenziatore personalizzato - scegli tu il colore!

### Pseudo-classi moderne  

#### `:is()` - Evita ripetizioni
```css
/* PRIMA (ripetitivo) */
article h1:hover,
article h2:hover,
article h3:hover {
  color: blue;
}

/* DOPO (con :is) */
article :is(h1, h2, h3):hover {
  color: blue;
}
```

**Analogia**: Come dire "chiunque di voi tre" invece di chiamare uno per uno!

#### `:where()` - Come `:is()` ma con specificità 0
```css
/* Non aumenta la specificità */
:where(article, section) p {
  margin: 1rem;
}
```

**Quando usarlo**: Quando vuoi stili facilmente sovrascrivibili

#### `:has()` - Il parent selector!   2023
```css
/* Stile al div SE contiene un'immagine */
div:has(> img) {
  border: 2px solid blue;
  padding: 1rem;
}

/* Card che contiene un video */
.card:has(video) {
  background: black;
}

/* Form con input invalido */
form:has(input:invalid) {
  border: 2px solid red;
}
```

**RIVOLUZIONARIO!** Prima non potevi stilizzare un parent basandoti sui figli!

**Analogia**: Come dire "colora di rosso le scatole che contengono mele"!

## 3. Box Model & Spaziatura

### `margin`
**Cosa fa**: Crea spazio FUORI dall'elemento.

**Shorthand spiegato**:
```css
/* Un valore = tutti i lati */
margin: 20px;

/* Due valori = verticale | orizzontale */  
margin: 10px 20px;

/* Tre valori = top | lati | bottom */
margin: 10px 20px 30px;

/* Quattro = senso orario */
margin: 5px 10px 15px 20px;
```

**Centrare con auto**:
```css
.container {
  width: 800px;
  margin: 0 auto; /* Magia! Si centra da solo */
}
```

**Margini negativi**:
```css
.hero-title {
  margin-top: -20px; /* Si sposta SU di 20px */
}
```

### `padding`
```css
.button {
  padding: 10px 20px; /* verticale | orizzontale */
}

.card {
  padding: 2rem; /* Uguale su tutti i lati */
}
```

### `border`
```css
/* Solido classico */
.box {
  border: 2px solid black;
}

/* Stili diversi */
border: 3px dotted red;    /* • • • • */
border: 2px dashed blue;   /* - - - - */
border: 4px double green;  /* ══════ */
```

### `border-radius` avanzato
```css
/* Solo angoli specifici */
.key {
  border-radius: 0 0 3px 3px;
  /* Squadrato sopra, arrotondato sotto */
}
```

### `box-sizing`
```css
/* Pattern di reset con inherit */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```

### Dimensioni & unità

```css
/* ASSOLUTE */
width: 200px;      /* Pixel */

/* RELATIVE */
width: 80%;        /* % del genitore */
font-size: 2rem;   /* 2x root */
height: 50vh;      /* 50% altezza viewport */
width: 55vw;       /* 55% larghezza viewport */
```

### Funzioni per dimensioni

#### `calc()` per calcoli
```css
/* Larghezza totale meno margini fissi */
.container {
  width: calc(100% - 40px);
}

/* Calcoli complessi */
.column {
  width: calc((100% - 20px * 2) / 3);
}
```

#### `min()` e `max()`  
**Cosa fanno**: Scelgono il valore minimo o massimo tra opzioni

```css
/* min() - prende il PIÙ PICCOLO */
.sidebar {
  width: min(300px, 100%);
  /* Se lo schermo è < 300px, usa 100% */
}

/* max() - prende il PIÙ GRANDE */
.hero {
  height: max(400px, 50vh);
  /* Mai meno di 400px di altezza */
}
```

**Analogia**: 
- `min()` = "Dammi il bicchiere più piccolo tra questi"
- `max()` = "Dammi il bicchiere più grande tra questi"

#### `clamp()` - Il limitatore intelligente  
**Cosa fa**: Imposta un valore con limiti minimo e massimo

```css
/* clamp(MIN, PREFERITO, MAX) */
.title {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* Mai < 1.5rem, idealmente 4vw, mai > 3rem */
}

.container {
  width: clamp(300px, 80%, 1200px);
}

.padding-responsive {
  padding: clamp(1rem, 5vw, 3rem);
}
```

**Come funziona**:
```
Mobile (400px screen):
4vw = 16px, ma minimo è 1.5rem (24px)
Risultato: 24px ✓

Desktop (1200px screen):
4vw = 48px, ma massimo è 3rem (48px)
Risultato: 48px ✓

Tablet (800px screen):
4vw = 32px (tra min e max)
Risultato: 32px ✓
```

**Analogia**: Come un termostato! Mantiene la temperatura (dimensione) sempre tra un minimo e un massimo, cercando di stare al valore ideale!

## 4. Tipografia

### `font-family`
```css
/* Con font Google */
h1 {
  font-family: 'Anton', sans-serif;
}

/* Font multipli con fallback */
body {
  font-family: 'Baskervville', Georgia, serif;
}
```

### `font-size` con il trucco del 62.5%
```css
html {
  font-size: 62.5%; /* Ora 1rem = 10px invece di 16px! */
}

/* Ora i calcoli sono facilissimi! */
h1 { font-size: 3.2rem; } /* = 32px */
h2 { font-size: 2.4rem; } /* = 24px */  
p  { font-size: 1.6rem; } /* = 16px */
```

### Font shorthand
```css
/* Sintassi: style weight size/line-height family */
.title {
  font: italic 700 2.4rem/1.2 'Raleway', sans-serif;
}
```

### `letter-spacing`
```css
h1 {
  letter-spacing: 0.6px;  /* Poco spazio */
}

.logo {
  letter-spacing: 8px;    /* M O L T O   S P A Z I O */
}
```

### `line-height`
```css
p {
  line-height: 1.6;      /* 1.6 volte la font-size */
}
```

### `text-overflow` - Testo troppo lungo  
**Cosa fa**: Gestisce il testo che esce dal contenitore

```css
.title {
  white-space: nowrap;      /* Non andare a capo */
  overflow: hidden;         /* Nascondi l'eccesso */
  text-overflow: ellipsis;  /* Aggiungi ... */
  width: 200px;
}
```

**Risultato**: 
```
"Questo è un titolo molto lungo" → "Questo è un titolo..."
```

**Analogia**: Come quando WhatsApp taglia i messaggi lunghi nelle notifiche!

### Altri stili tipografici
```css
/* text-decoration */
a {
  text-decoration: none;      /* Toglie sottolineatura */
}

/* white-space */
.nowrap {
  white-space: nowrap;  /* Non va mai a capo */
}

/* column-width - testo multi-colonna */
.article {
  column-width: 25rem;  /* Colonne larghe 25rem */
  column-gap: 3rem;     /* Spazio tra colonne */
}

/* Liste personalizzate */
.lists {
  list-style-type: none;      /* Rimuove i pallini */
  list-style-position: inside; /* Pallini dentro il box */
}
```

## 5. Colori & Sfondi

### `color`
```css
/* Nome */
color: red;
color: orangered;

/* HEX */
color: #00beef;

/* RGB/RGBA */
color: rgb(255, 0, 0);              /* Rosso */
color: rgba(255, 255, 255, 0.5);    /* Bianco 50% trasparente */
```

### `background-color`
```css
.warning {
  background-color: #fff3cd;
}

/* Con trasparenza */
.overlay {
  background-color: rgba(0, 0, 0, 0.7);
}
```

### Background avanzati

#### Proprietà di controllo sfondo
```css
.hero {
  background-image: url("hero.jpg");
  background-size: cover;           /* Copre tutto */
  background-position: center;      /* Centra */
  background-repeat: no-repeat;     /* Non ripetere */
  background-attachment: fixed;     /* Parallax! */
}
```

### `linear-gradient()` con angoli
```css
/* 45 gradi - diagonale */
background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));

/* Multi colore con stop percentuali */
background: linear-gradient(
  45deg,
  red 0%,
  yellow 50%,
  green 100%
);
```

### `radial-gradient()`  
**Cosa fa**: Crea sfumature circolari dal centro verso l'esterno

```css
/* Sfumatura circolare base */
.circle {
  background: radial-gradient(circle, yellow, orange, red);
}

/* Con posizione specifica */
.sun {
  background: radial-gradient(
    circle at top right,
    yellow 0%,
    orange 30%,
    transparent 50%
  );
}

/* Ellittica */
.ellipse {
  background: radial-gradient(
    ellipse at center,
    white 0%,
    black 100%
  );
}
```

**Visual**:
```
radial-gradient:
    ⚪ (centro chiaro)
   🟡
  🟠
 🔴 (bordi scuri)
```

### `conic-gradient()`  
**Cosa fa**: Sfumatura conica (tipo torta a colori!)

```css
/* Arcobaleno circolare */
.rainbow-wheel {
  background: conic-gradient(
    red, yellow, green, cyan, blue, magenta, red
  );
  border-radius: 50%;
}

/* Grafico a torta */
.pie-chart {
  background: conic-gradient(
    red 0deg 90deg,      /* 25% */
    blue 90deg 180deg,   /* 25% */
    green 180deg 360deg  /* 50% */
  );
}
```

### `opacity`
```css
.faded {
  opacity: 0.5;    /* 50% trasparente TUTTO l'elemento */
}
```

## 6. Layout & Display - Parte 1

### `display`
```css
/* Block - nuovo "paragrafo" */
display: block;

/* Inline - nella riga */
display: inline;

/* Inline-block - ibrido */
display: inline-block;

/* Flex - contenitore flessibile */
display: flex;

/* Grid - griglia */
display: grid;

/* None - sparisce! */
display: none;
```

### `position`
```css
/* Static (default) */
position: static;

/* Relative - spostato dalla posizione normale */
position: relative;
top: 10px;
left: 20px;

/* Absolute - fuori dal flusso */
position: absolute;
top: 50%;
left: 50%;

/* Fixed - fisso nella viewport */
position: fixed;
bottom: 0;

/* Sticky - ibrido relative/fixed */
position: sticky;
top: 0;
```

### `z-index`
```css
.front { z-index: 100; }
.middle { z-index: 10; }
.behind { z-index: -1; }
```

### `float` e clearfix
```css
/* Float */
float: left;
float: right;
float: none;

/* Clearfix con overflow */
.container {
  overflow: hidden;  /* Contiene i float! */
}
```

### `aspect-ratio`  
**Cosa fa**: Mantiene le proporzioni di un elemento

```css
/* Video 16:9 */
.video-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: black;
}

/* Quadrato perfetto */
.square {
  width: 200px;
  aspect-ratio: 1;  /* o 1/1 */
}

/* Card con ratio custom */
.card {
  width: 300px;
  aspect-ratio: 3 / 4;
}
```

**Prima di aspect-ratio** (il vecchio trucco):
```css
/* Il vecchio modo con padding */
.video-old {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
}
```

**Analogia**: Come dire "questa foto deve sempre essere rettangolare come una TV, non importa quanto la ridimensioni"!

---

## 6. Layout & Display - Parte 2 (continuazione)

### Flexbox completo
**Cosa fa**: Crea layout flessibili in una direzione (riga o colonna).

#### Setup del container
```css
.container {
  display: flex;              /* Attiva flex */
  flex-direction: row;        /* → orizzontale (default) */
  flex-wrap: wrap;           /* A capo se non c'è spazio */
  gap: 1rem;                 /* Spazio tra elementi */
}
```

#### Proprietà del container complete
```css
/* DIREZIONE */
flex-direction: row;          /* → */
flex-direction: column;       /* ↓ */
flex-direction: row-reverse;  /* ← */
flex-direction: column-reverse; /* ↑ */

/* A CAPO */
flex-wrap: nowrap;   /* Stringe tutto (default) */
flex-wrap: wrap;     /* Va a capo */
flex-wrap: wrap-reverse; /* A capo al contrario */

/* ALLINEAMENTO ASSE PRINCIPALE */
justify-content: flex-start;   /* |■■■      | */
justify-content: center;       /* |  ■■■    | */
justify-content: flex-end;     /* |      ■■■| */
justify-content: space-between;/* |■   ■   ■| */
justify-content: space-around; /* | ■  ■  ■ | */
justify-content: space-evenly; /* | ■  ■  ■ | */

/* ALLINEAMENTO ASSE TRASVERSALE */
align-items: stretch;     /* Default - riempie */
align-items: center;      /* Centra verticalmente */
align-items: flex-start;  /* In alto */
align-items: flex-end;    /* In basso */
align-items: baseline;    /* Allinea le baseline del testo */

/* ALLINEAMENTO RIGHE (con wrap) */
align-content: flex-start;
align-content: center;
align-content: space-between;
```

#### Proprietà dei figli (flex items)
```css
.item {
  /* Crescita */
  flex-grow: 1;      /* Può crescere */
  
  /* Riduzione */
  flex-shrink: 0;    /* Non può ridursi */
  
  /* Dimensione base */
  flex-basis: 200px; /* Dimensione iniziale */
  
  /* Shorthand */
  flex: 1 0 200px;   /* grow shrink basis */
  
  /* Auto-allineamento */
  align-self: center; /* Override align-items */
  
  /* Ordine */
  order: -1;         /* Viene prima (default: 0) */
}
```

**Centratura perfetta 2D**:
```css
.center-perfect {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

### Grid - Layout a griglia completo

#### Grid base con tutte le proprietà
```css
.grid-container {
  display: grid;
  
  /* Definizione colonne */
  grid-template-columns: 200px 1fr 200px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  /* Definizione righe */
  grid-template-rows: 100px auto 100px;
  
  /* Spazi */
  gap: 20px;              /* Entrambi */
  row-gap: 30px;          /* Solo righe */
  column-gap: 20px;       /* Solo colonne */
  
  /* Allineamento */
  justify-items: center;   /* Orizzontale items */
  align-items: center;     /* Verticale items */
  justify-content: center; /* Orizzontale griglia */
  align-content: center;   /* Verticale griglia */
  
  /* Shorthand allineamento */
  place-items: center;     /* align + justify items */
  place-content: center;   /* align + justify content */
}
```

#### `repeat()` con auto-fit/auto-fill
```css
/* auto-fit - stretcha le colonne */
.gallery {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

/* auto-fill - mantiene la dimensione */
.gallery {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

**Differenza visual**:
```
Container 800px, items 200px:

auto-fill: [200px][200px][200px][vuoto]
auto-fit:  [266px][266px][266px] (stretchati)
```

#### `grid-auto-flow`
```css
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: column;     /* Nuove colonne invece di righe */
  grid-auto-flow: dense;      /* Riempie i buchi */
  grid-auto-columns: 1fr;     /* Dimensione colonne auto */
}
```

#### Posizionamento avanzato
```css
.item {
  /* Colonne */
  grid-column: 1 / 3;        /* Da linea 1 a 3 */
  grid-column: 1 / -1;       /* Tutta la larghezza */
  grid-column: span 2;       /* Occupa 2 colonne */
  
  /* Righe */
  grid-row: 1 / 3;
  
  /* Area nominata */
  grid-area: header;         /* Se usi grid-template-areas */
}

/* Grid template areas */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

## 7. CSS Custom Properties (Variabili)

### Definizione e uso completo
```css
:root {
  /* Colori */
  --primary: #007bff;
  --primary-dark: #0056b3;
  --primary-light: #e7f3ff;
  
  /* Spacing sistema 8px */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 2rem;     /* 32px */
  --space-lg: 3rem;     /* 48px */
  --space-xl: 4rem;     /* 64px */
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "Fira Code", "Courier New", monospace;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  /* Animations */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Breakpoints come custom properties */
  --screen-sm: 640px;
  --screen-md: 768px;
  --screen-lg: 1024px;
}
```

### Uso avanzato con fallback
```css
.card {
  /* var() con fallback */
  background: var(--card-bg, white);
  padding: var(--card-padding, 1rem);
  
  /* Calcoli con variabili */
  margin: calc(var(--space-md) * 2);
  
  /* Variabili in media queries */
  max-width: var(--container-width, 1200px);
}

/* Override locale */
.dark-theme {
  --primary: #6c757d;
  --card-bg: #2d2d2d;
}
```

### Variabili dinamiche con JavaScript
```css
.dynamic {
  transform: translateX(var(--mouse-x));
  transform: translateY(var(--mouse-y));
}
```

```javascript
// JavaScript
element.style.setProperty('--mouse-x', `${x}px`);
element.style.setProperty('--mouse-y', `${y}px`);
```

## 8. Trasformazioni complete

### Transform 2D
```css
/* Rotazione */
transform: rotate(45deg);
transform: rotate(-180deg);
transform: rotate(0.5turn);    /* Mezza rotazione */

/* Scala */
transform: scale(1.5);         /* 150% */
transform: scale(0.5, 2);      /* X: 50%, Y: 200% */
transform: scaleX(-1);         /* Specchia orizzontalmente */
transform: scaleY(0.5);        /* Schiaccia verticalmente */

/* Traslazione */
transform: translate(50px, 100px);
transform: translateX(-50%);
transform: translateY(2rem);

/* Skew (inclinazione) */
transform: skew(20deg, 10deg);
transform: skewX(20deg);
transform: skewY(-15deg);

/* Multiple transforms */
transform: rotate(45deg) scale(1.2) translateX(50px);
```

### Transform 3D  
```css
/* Rotazione 3D */
.card {
  transform: rotateX(180deg);    /* Flip orizzontale */
  transform: rotateY(180deg);    /* Flip verticale */
  transform: rotateZ(45deg);     /* Come rotate normale */
  transform: rotate3d(1, 1, 0, 45deg); /* Su asse custom */
}

/* Prospettiva */
.container {
  perspective: 1000px;           /* Punto di vista */
}

.card {
  transform-style: preserve-3d;  /* Mantieni 3D per i figli */
  transform: translateZ(100px);  /* Verso di te */
}

/* Card flip completo */
.flip-card {
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
```

### `transform-origin` completo
```css
/* Keywords */
transform-origin: center;      /* Default */
transform-origin: top left;
transform-origin: bottom right;

/* Percentuali */
transform-origin: 0% 0%;       /* Top left */
transform-origin: 100% 100%;   /* Bottom right */

/* Valori misti */
transform-origin: left 50%;
transform-origin: 10px 20px;

/* 3D */
transform-origin: center center -50px;
```

## 9. Animazioni complete

### `@keyframes` avanzati
```css
/* Multi-step animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

/* Animazione complessa */
@keyframes morphing {
  0% {
    border-radius: 50%;
    transform: rotate(0deg);
    background: red;
  }
  33% {
    border-radius: 0%;
    transform: rotate(120deg) scale(0.5);
    background: blue;
  }
  66% {
    border-radius: 50% 0;
    transform: rotate(240deg) scale(1.5);
    background: green;
  }
  100% {
    border-radius: 50%;
    transform: rotate(360deg);
    background: red;
  }
}
```

### Proprietà animazione complete
```css
.animated {
  /* Proprietà singole */
  animation-name: bounce;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  animation-iteration-count: 3;      /* o infinite */
  animation-direction: alternate;    /* o reverse, alternate-reverse */
  animation-fill-mode: both;         /* o forwards, backwards */
  animation-play-state: running;     /* o paused */
  
  /* Shorthand completa */
  animation: bounce 2s ease-in-out 0.5s 3 alternate both;
  
  /* Multiple animations */
  animation: 
    bounce 2s infinite,
    fade 1s ease-out,
    rotate 3s linear infinite;
}
```

### Animation timing functions complete
```css
/* Predefinite */
animation-timing-function: linear;
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;

/* Steps (per sprite animations) */
animation-timing-function: steps(12);
animation-timing-function: steps(12, start);
animation-timing-function: steps(12, end);

/* Cubic bezier personalizzati */
animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bounce */
animation-timing-function: cubic-bezier(0.87, 0, 0.24, 0.99);      /* Dramatic */
```

## 10. Transizioni

### Sintassi completa
```css
.element {
  /* Proprietà singole */
  transition-property: all;           /* o specifiche: transform, opacity */
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  
  /* Shorthand */
  transition: all 0.3s ease;
  
  /* Multiple transitions */
  transition: 
    transform 0.3s ease,
    opacity 0.2s ease 0.1s,    /* con delay */
    background 0.5s linear;
}
```

## 11. Filtri ed Effetti

### `filter` completo
```css
/* Singoli filtri */
.image {
  filter: blur(5px);
  filter: brightness(1.5);        /* 150% */
  filter: contrast(2);            /* 200% */
  filter: grayscale(100%);        /* B&W */
  filter: hue-rotate(90deg);      /* Ruota colori */
  filter: invert(100%);           /* Negativo */
  filter: opacity(50%);           /* Come opacity */
  filter: saturate(2);            /* 200% saturazione */
  filter: sepia(100%);            /* Effetto seppia */
  filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
  
  /* Filtri multipli */
  filter: contrast(1.2) brightness(1.1) saturate(1.3);
  
  /* Blur + grayscale per disabled state */
  filter: blur(2px) grayscale(100%) opacity(0.7);
}
```

### `backdrop-filter` - Effetto vetro!  
```css
/* Glassmorphism effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Dark glass */
.dark-glass {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px) saturate(1.5);
}

/* Tutti i backdrop filters */
.effects {
  backdrop-filter: blur(10px);
  backdrop-filter: brightness(0.8);
  backdrop-filter: contrast(1.2);
  backdrop-filter: grayscale(50%);
  backdrop-filter: blur(10px) brightness(0.8);
}
```

**Nota**: Non supportato in tutti i browser! Usa `@supports`:
```css
@supports (backdrop-filter: blur(10px)) {
  .glass {
    backdrop-filter: blur(10px);
  }
}
```

### `clip-path` - Forme personalizzate  
**Cosa fa**: Ritaglia l'elemento in forme custom!

```css
/* Forme base */
.circle {
  clip-path: circle(50%);
}

.ellipse {
  clip-path: ellipse(130px 140px at 10% 20%);
}

/* Poligoni */
.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

/* Animare clip-path */
.morph {
  clip-path: circle(50%);
  transition: clip-path 0.5s ease;
}

.morph:hover {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

**Visual**:
```
Normale:    clip-path: circle(50%):    clip-path: triangle:
┌────────┐       ⭕                         🔺
│        │       
│  IMG   │  →    IMG                        IMG
│        │       
└────────┘       ⭕                         🔻
```

### `mix-blend-mode`  
**Cosa fa**: Mischia i colori come in Photoshop!

```css
.overlay-text {
  mix-blend-mode: multiply;
  mix-blend-mode: screen;
  mix-blend-mode: overlay;
  mix-blend-mode: difference;
  mix-blend-mode: color-dodge;
  mix-blend-mode: color-burn;
}

/* Testo che si adatta allo sfondo */
.adaptive-text {
  color: white;
  mix-blend-mode: difference;
}
```

## 12. Controlli utente

### `cursor` - Tutti i valori
```css
cursor: pointer;        /* 👆 Manina */
cursor: grab;           /* ✋ Mano aperta */
cursor: grabbing;       /* ✊ Mano chiusa */
cursor: not-allowed;    /* 🚫 Divieto */
cursor: wait;           /* ⏳ Attesa */
cursor: help;           /* ❓ Aiuto */
cursor: text;           /* 📝 Testo */
cursor: crosshair;      /* ✚ Mirino */
cursor: move;           /* ✥ Movimento */
cursor: zoom-in;        /* 🔍+ Zoom in */
cursor: zoom-out;       /* 🔍- Zoom out */
cursor: progress;       /* ⏳ In elaborazione */

/* Cursor personalizzato */
cursor: url('cursor.png'), auto;
cursor: url('cursor.svg') 4 12, auto; /* Con hotspot */
```

### `user-select` - Controllo selezione  
```css
/* Non selezionabile */
.no-select {
  user-select: none;
  -webkit-user-select: none; /* Safari */
}

/* Seleziona tutto al click */
.select-all {
  user-select: all;
}

/* Solo testo selezionabile */
.text-only {
  user-select: text;
}

/* Auto (default) */
.normal {
  user-select: auto;
}
```

**Uso pratico**:
```css
/* Bottoni non selezionabili */
button {
  user-select: none;
}

/* Codice che si seleziona tutto */
.code-snippet {
  user-select: all;
}
```

### `pointer-events`  
**Cosa fa**: Controlla se un elemento può ricevere click

```css
/* Non cliccabile */
.disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Click attraverso l'elemento */
.overlay {
  pointer-events: none;
}

/* Solo alcuni eventi */
.special {
  pointer-events: auto;     /* Tutti (default) */
  pointer-events: visiblePainted; /* Solo parti visibili */
}
```

**Uso pratico**: Overlay che non blocca i click!
```css
.watermark {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none; /* Click passano attraverso! */
  opacity: 0.1;
}
```

## 13. Scroll avanzato

### `scroll-behavior`
```css
html {
  scroll-behavior: smooth;  /* Scroll animato */
  scroll-behavior: auto;    /* Scroll normale */
}
```

### Scroll Snap - Scroll magnetico  
**Cosa fa**: Fa "agganciare" lo scroll a punti specifici

```css
/* Container */
.carousel {
  scroll-snap-type: x mandatory;  /* Asse X, obbligatorio */
  overflow-x: scroll;
  display: flex;
}

/* Items */
.slide {
  scroll-snap-align: center;      /* Si centra */
  flex: 0 0 100%;
}

/* Vertical esempio */
.vertical-sections {
  scroll-snap-type: y proximity;  /* Asse Y, suggerito */
  overflow-y: scroll;
  height: 100vh;
}

.section {
  scroll-snap-align: start;       /* Si allinea all'inizio */
  height: 100vh;
}
```

**Opzioni scroll-snap-type**:
- `x` / `y` = asse
- `mandatory` = sempre aggancia
- `proximity` = aggancia se vicino

**Opzioni scroll-snap-align**:
- `start` = inizio elemento
- `center` = centro elemento  
- `end` = fine elemento

### `overscroll-behavior`  
**Cosa fa**: Controlla cosa succede quando scrolli oltre i limiti

```css
/* Previene scroll del parent */
.modal {
  overscroll-behavior: contain;
}

/* Disabilita pull-to-refresh */
body {
  overscroll-behavior-y: none;
}

/* Default */
.normal {
  overscroll-behavior: auto;
}
```

## 14. Responsive Design avanzato

### Container Queries   2023
**Cosa sono**: Media queries basate sul container, non sul viewport!

```css
/* Definisci container */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Query basate sul container */
@container card (min-width: 400px) {
  .card {
    display: flex;
    gap: 2rem;
  }
}

@container (min-width: 700px) {
  .card {
    grid-template-columns: 2fr 1fr;
  }
}
```

**Rivoluzionario!** Componenti veramente responsive!

### Funzioni responsive
```css
/* clamp() per tipografia responsive */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* min() per container */
.container {
  width: min(90%, 1200px);
}

/* max() per minimi garantiti */
.card {
  width: max(300px, 30%);
}
```

## 15. Performance

### `will-change`  
**Cosa fa**: Avvisa il browser di future animazioni per ottimizzare

```css
.animated {
  will-change: transform;
}

.multi {
  will-change: transform, opacity;
}

/* Importante: rimuovi dopo l'animazione */
.finished {
  will-change: auto;
}
```

**Quando usarlo**: 
- Prima di animazioni pesanti
- Non su troppi elementi
- Rimuovi quando finito

### `contain`  
**Cosa fa**: Isola parti della pagina per performance

```css
.widget {
  contain: layout;    /* Layout isolato */
  contain: paint;     /* Paint isolato */
  contain: size;      /* Size isolato */
  contain: style;     /* Style isolato */
  
  /* Combinati */
  contain: layout paint;
  contain: strict;    /* Tutti */
}
```

## 16. Feature Detection

### `@supports`  
**Cosa fa**: Applica CSS solo se supportato

```css
/* Se supporta grid */
@supports (display: grid) {
  .container {
    display: grid;
  }
}

/* Se NON supporta */
@supports not (backdrop-filter: blur(10px)) {
  .glass {
    background: rgba(255,255,255,0.95);
  }
}

/* Condizioni multiple */
@supports (display: grid) and (gap: 1rem) {
  .modern-grid {
    display: grid;
    gap: 1rem;
  }
}
```

## 17. CSS Counters - Numerazione automatica  

```css
/* Reset counter */
.chapters {
  counter-reset: chapter;
}

/* Incrementa e mostra */
.chapter::before {
  counter-increment: chapter;
  content: "Capitolo " counter(chapter) ": ";
}

/* Counter annidati */
.book {
  counter-reset: chapter;
}

.chapter {
  counter-reset: section;
  counter-increment: chapter;
}

.section::before {
  counter-increment: section;
  content: counter(chapter) "." counter(section) " ";
}
```

**Risultato**:
```
Capitolo 1: Introduzione
  1.1 Cos'è CSS
  1.2 Come funziona
Capitolo 2: Avanzato
  2.1 Flexbox
  2.2 Grid
```

## Best Practices finali 🏆

### 1. **Organizzazione CSS**
```css
/* 1. Reset/Normalize */
/* 2. Variabili */
/* 3. Base styles */
/* 4. Layout */
/* 5. Components */
/* 6. Utilities */
/* 7. Media queries */
```

### 2. **Naming conventions**
```css
/* BEM */
.block {}
.block__element {}
.block--modifier {}

/* Utility-first */
.text-center {}
.mt-4 {}
.bg-primary {}
```

### 3. **Performance tips**
- Usa `transform` invece di `top/left` per animazioni
- Evita selettori troppo specifici
- Minimizza reflow/repaint
- Usa `will-change` con parsimonia
- Preferisci `class` a selettori complessi

### 4. **Accessibilità**
- Mai `outline: none` senza alternativa
- Contrasto colori minimo 4.5:1
- Focus states chiari
- Rispetta `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
