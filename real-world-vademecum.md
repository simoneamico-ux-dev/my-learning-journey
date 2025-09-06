# HTML Vademecum

## 1. Struttura base HTML

### Il documento HTML
**Cosa fa**: Dice al browser "Ehi, questo è un documento HTML moderno!"

**Snippet base**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il mio sito</title>
</head>
<body>
    <!-- Il contenuto va qui -->
</body>
</html>
```

**Analogia**: È come la struttura di una casa 🏠
- `<!DOCTYPE html>` = Il permesso di costruzione
- `<html>` = Le fondamenta
- `<head>` = Il sottotetto (non si vede ma contiene impianti importanti)
- `<body>` = Le stanze dove vivi

### `<head>` - Il cervello nascosto
**Cosa contiene**: Informazioni per il browser, non visibili all'utente

**Elementi essenziali**:
```html
<head>
    <meta charset="UTF-8"> <!-- Alfabeto universale -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Per mobile -->
    <title>Titolo nella tab</title> <!-- Quello che vedi nella linguetta -->
    <link rel="stylesheet" href="style.css"> <!-- Collegamento al CSS -->
</head>
```

**Analogia**: Come l'etichetta su una scatola - dice cosa c'è dentro senza aprirla!

### I contenitori principali

#### `<body>` - Il corpo visibile
**Cosa fa**: Contiene TUTTO quello che l'utente vede

```html
<body>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
</body>
```

#### `<header>` - La testata  
**Cosa fa**: Contiene l'intestazione della pagina o di una sezione

```html
<header>
    <img src="logo.png" alt="Logo aziendale">
    <nav>
        <a href="#home">Home</a>
        <a href="#about">Chi siamo</a>
    </nav>
</header>
```

**Analogia**: Come l'insegna di un negozio - la prima cosa che vedi entrando!

**Quando usarlo**: Logo, navigazione principale, titolo del sito

#### `<main>` - Il protagonista
**Cosa fa**: Contiene il contenuto principale, quello per cui l'utente è venuto!

```html
<main>
    <h1>Benvenuto nel mio blog!</h1>
    <article>Il mio primo post...</article>
</main>
```

**Regola d'oro**: Solo UN `<main>` per pagina!

**Analogia**: Il piatto principale del ristorante - non puoi averne due!

#### `<footer>` - Il piè di pagina  
**Cosa fa**: Contiene informazioni di chiusura, contatti, copyright

```html
<footer>
    <address>
        Via Roma 123, Milano
    </address>
    <p>&copy; 2024 La mia azienda</p>
</footer>
```

**Analogia**: Come i titoli di coda di un film - info utili alla fine!

#### `<nav>` - Il navigatore
**Cosa fa**: Raggruppa i link di navigazione

```html
<nav>
    <a href="#home">Home</a>
    <a href="#products">Prodotti</a>
    <a href="#contact">Contatti</a>
</nav>
```

**Analogia**: Il menu del ristorante - ti dice dove puoi andare!

#### `<section>` - Le sezioni
**Cosa fa**: Divide il contenuto in sezioni tematiche

```html
<section id="about">
    <h2>Chi siamo</h2>
    <p>La nostra storia...</p>
</section>

<section id="services">
    <h2>I nostri servizi</h2>
    <p>Cosa offriamo...</p>
</section>
```

**Analogia**: I capitoli di un libro - ogni sezione un argomento!

#### `<article>` - L'articolo
**Cosa fa**: Contenuto che ha senso anche da solo

```html
<article>
    <h2>Come cucinare la pasta</h2>
    <p>Prima di tutto, metti l'acqua a bollire...</p>
    <p>Aggiungi il sale quando bolle...</p>
</article>
```

**Test**: Se lo puoi condividere su Facebook e ha senso → è un `<article>`!

#### `<aside>` - Il contenuto laterale  
**Cosa fa**: Informazioni correlate ma non essenziali

```html
<article>
    <h2>Storia del caffè</h2>
    <p>Il caffè venne scoperto...</p>
    
    <aside>
        <h3>Lo sapevi che...</h3>
        <p>Gli italiani bevono 6 miliardi di caffè all'anno!</p>
    </aside>
</article>
```

**Analogia**: Come i box colorati nei libri di scuola - info extra interessanti!

#### `<address>` - I contatti  
**Cosa fa**: Contiene informazioni di contatto

```html
<address>
    <a href="mailto:info@azienda.it">info@azienda.it</a><br>
    Tel: <a href="tel:+390212345678">02 1234 5678</a><br>
    Via Dante 15, 20121 Milano
</address>
```

**NON è solo per indirizzi fisici!** Può contenere email, telefono, social...

**Analogia**: Il biglietto da visita digitale!

#### `<div>` - Il tuttofare
**Cosa fa**: Contenitore generico senza significato speciale

```html
<div class="card">
    <h3>Prodotto speciale</h3>
    <p>Descrizione...</p>
    <button>Acquista</button>
</div>
```

**Quando usarlo**: Quando non c'è un tag semantico appropriato

**Analogia**: Una scatola di cartone - ci metti quello che vuoi!

#### `<span>` - Il piccolo aiutante
**Cosa fa**: Come `<div>` ma per contenuti inline (nella riga)

```html
<p>Il prezzo è <span class="price">€99</span> invece di €150!</p>
```

**Analogia**: L'evidenziatore del testo - marca una parola senza interrompere!

## 2. Elementi di testo

### I titoli - La gerarchia
```html
<h1>Titolo principale (uno solo!)</h1>
<h2>Capitoli principali</h2>
<h3>Sottocapitoli</h3>
<h4>Sezioni dei sottocapitoli</h4>
<h5>Dettagli delle sezioni</h5>
<h6>Il più piccolo</h6>
```

**Regola**: Come una matrioska russa - ogni livello dentro l'altro! 🪆

### `<p>` - Il paragrafo
**Cosa fa**: Raggruppa il testo in paragrafi

```html
<p>Questo è un paragrafo. Va sempre a capo prima e dopo.</p>
<p>Questo è un altro paragrafo, separato dal primo.</p>
```

### Enfasi e importanza
```html
<em>Testo enfatizzato</em> <!-- Corsivo con significato -->
<i>Testo in corsivo</i> <!-- Solo stile -->

<strong>Testo importante</strong> <!-- Grassetto con significato -->
<b>Testo in grassetto</b> <!-- Solo stile -->
```

**Quando usare quale?**
- `<em>` e `<strong>`: Quando il testo È davvero importante
- `<i>` e `<b>`: Solo per stile visivo

### `<blockquote>` - La citazione  
**Cosa fa**: Indica una citazione lunga da un'altra fonte

```html
<blockquote>
    <p>Il codice è poesia.</p>
    <cite>- Un programmatore saggio</cite>
</blockquote>
```

**Analogia**: Come quando citi un libro - dai credito all'autore!

### `<hr>` - La linea divisoria
**Cosa fa**: Crea una separazione tematica

```html
<p>Fine del capitolo 1</p>
<hr>
<p>Inizio del capitolo 2</p>
```

**Visual**: _______________

### Le liste

#### Lista non ordinata
```html
<ul>
    <li>Mele</li>
    <li>Pere</li>
    <li>Banane</li>
</ul>
```
**Risultato**: 
• Mele
• Pere  
• Banane

#### Lista ordinata
```html
<ol>
    <li>Accendi il computer</li>
    <li>Apri il browser</li>
    <li>Inizia a programmare!</li>
</ol>
```
**Risultato**:
1. Accendi il computer
2. Apri il browser
3. Inizia a programmare!

## 3. I Link - Le porte del web

### `<a>` - L'ancora
**Cosa fa**: Crea collegamenti cliccabili

**Link base**:
```html
<a href="https://www.google.it">Vai a Google</a>
```

**Link nella stessa pagina**:
```html
<a href="#contatti">Vai ai contatti</a>
<!-- Più in basso nella pagina: -->
<section id="contatti">...</section>
```

**Link email**:
```html
<a href="mailto:info@esempio.it">Scrivimi!</a>
```

**Link telefono**:
```html
<a href="tel:+391234567890">Chiamami!</a>
```

### Attributi speciali per i link

#### `target="_blank"`
**Cosa fa**: Apre il link in una nuova scheda

```html
<a href="https://esempio.it" target="_blank">Apri in nuova scheda</a>
```

**Analogia**: Come aprire una nuova finestra invece di sostituire quella attuale!

#### `rel="noreferrer"`  
**Cosa fa**: Nasconde da dove viene il click (privacy)

```html
<a href="https://esempio.it" target="_blank" rel="noreferrer">Link privato</a>
```

**Analogia**: Come entrare in un negozio senza dire chi ti ha consigliato!

## 4. Media

### `<img>` - Le immagini
**Cosa fa**: Mostra un'immagine

**Snippet completo**:
```html
<img 
    src="gatto.jpg" 
    alt="Un gatto arancione che dorme"
    width="600"
    height="400"
    loading="lazy"
>
```

#### `loading="lazy"`  
**Cosa fa**: Carica l'immagine solo quando sta per essere vista!

**Analogia**: Come un cameriere intelligente che porta i piatti solo quando ti siedi al tavolo!

```html
<!-- Immagine in alto (si carica subito) -->
<img src="hero.jpg" alt="Banner principale">

<!-- Immagini in fondo (si caricano dopo) -->
<img src="foto1.jpg" alt="Galleria 1" loading="lazy">
<img src="foto2.jpg" alt="Galleria 2" loading="lazy">
```

**Benefici**: 
- ⚡ Pagina più veloce
- 📱 Risparmio dati mobile
- 🚀 Migliore esperienza utente

### `<iframe>` - La finestra magica  
**Cosa fa**: Incorpora un'altra pagina web nella tua

```html
<iframe 
    src="https://www.youtube.com/embed/VIDEO_ID"
    width="560" 
    height="315"
    title="Video tutorial CSS"
>
</iframe>
```

**Usi comuni**:
- Video YouTube
- Mappe Google
- Post social media

**Analogia**: Come avere una TV nella TV - mostra un altro canale dentro il tuo!

## 5. Form - L'interazione

### La struttura base
```html
<form action="/invia-dati" method="POST">
    <!-- Campi del form -->
    <button type="submit">Invia</button>
</form>
```

### `<label>` e `<input>` - La coppia perfetta
```html
<label for="nome">Il tuo nome:</label>
<input type="text" id="nome" name="nome" required>
```

**Perché il `for`?** Clicchi la label → si attiva l'input! Magia accessibilità! ✨

### Tipi di input più usati
```html
<!-- Testo normale -->
<input type="text" placeholder="Scrivi qui...">

<!-- Email con validazione -->
<input type="email" placeholder="tua@email.com" required>

<!-- Password nascosta -->
<input type="password">

<!-- Numero -->
<input type="number" min="0" max="100">

<!-- Data -->
<input type="date">

<!-- Checkbox -->
<input type="checkbox" id="privacy">
<label for="privacy">Accetto la privacy</label>

<!-- Radio (scelta singola) -->
<input type="radio" name="size" value="S" id="small">
<label for="small">Small</label>
<input type="radio" name="size" value="M" id="medium">
<label for="medium">Medium</label>
```

### `<select>` - Il menu a tendina
```html
<label for="paese">Scegli il paese:</label>
<select id="paese" name="paese">
    <option value="">-- Seleziona --</option>
    <option value="IT">Italia</option>
    <option value="FR">Francia</option>
    <option value="ES">Spagna</option>
</select>
```

### `<textarea>` - Il testo lungo
```html
<label for="messaggio">Il tuo messaggio:</label>
<textarea id="messaggio" name="messaggio" rows="4" cols="50">
</textarea>
```

### `<fieldset>` e `<legend>` - Raggruppa con stile
```html
<fieldset>
    <legend>Dati personali</legend>
    <label for="nome">Nome:</label>
    <input type="text" id="nome">
    
    <label for="cognome">Cognome:</label>
    <input type="text" id="cognome">
</fieldset>
```

**Visual**: Crea un box con bordo e titolo!

### Attributi utili per i form

#### `placeholder`
**Cosa fa**: Testo di esempio che sparisce quando scrivi
```html
<input type="text" placeholder="es. Mario Rossi">
```

#### `required`
**Cosa fa**: Campo obbligatorio
```html
<input type="email" required>
```

#### `name`
**Cosa fa**: Nome del dato quando viene inviato
```html
<input type="text" name="username">
```

## 6. Accessibilità - Per tutti! ♿

### Attributi ARIA base

#### `role`
**Cosa fa**: Dice che ruolo ha un elemento
```html
<section role="region" aria-labelledby="news">
    <h2 id="news">Ultime notizie</h2>
</section>
```

#### `aria-label`
**Cosa fa**: Etichetta invisibile ma letta dagli screen reader
```html
<button aria-label="Chiudi finestra">X</button>
```

#### `aria-labelledby`
**Cosa fa**: Collega un elemento a un'altra etichetta esistente
```html
<section aria-labelledby="titolo-sezione">
    <h2 id="titolo-sezione">I nostri servizi</h2>
</section>
```

**Analogia**: Come i sottotitoli per non udenti - non li vedi ma ci sono per chi ne ha bisogno!

## 7. Attributi globali - Utilizzabili ovunque

### `id` - L'identificativo unico
```html
<div id="header-principale">...</div>
```
**Regola**: Come il codice fiscale - uno solo per elemento!

### `class` - Le categorie
```html
<div class="card speciale evidenziata">...</div>
```
**Può avere più classi!** Separate da spazi

### `style` - CSS inline (da evitare!)
```html
<p style="color: red;">Testo rosso</p>
```
**Meglio usare CSS esterno!**

### `title` - Il tooltip
```html
<abbr title="Hypertext Markup Language">HTML</abbr>
```
**Passa il mouse sopra → appare la spiegazione!**

## 8. Librerie esterne - Superpoteri! 🦸‍♂️

### Font Awesome - Icone bellissime
**Nel `<head>`**:
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
```

**Uso**:
```html
<!-- Icone social -->
<i class="fab fa-facebook"></i>
<i class="fab fa-twitter"></i>
<i class="fab fa-instagram"></i>

<!-- Icone generiche -->
<i class="fas fa-heart"></i>
<i class="fas fa-star"></i>
```

**Analogia**: Come avere migliaia di emoji professionali gratis! 

## Best Practices - I comandamenti dell'HTML 📜

1. **Sempre l'alt nelle immagini**
   ```html
   ❌ <img src="foto.jpg">
   ✅ <img src="foto.jpg" alt="Descrizione foto">
   ```

2. **Chiudi sempre i tag**
   ```html
   ❌ <p>Testo senza chiusura
   ✅ <p>Testo con chiusura</p>
   ```

3. **Usa tag semantici**
   ```html
   ❌ <div class="header">
   ✅ <header>
   ```

4. **Un solo h1 per pagina**
   ```html
   ✅ <h1>Titolo principale</h1>
       <h2>Sottotitolo</h2>
       <h2>Altro sottotitolo</h2>
   ```

5. **Form sempre con label**
   ```html
   ❌ <input type="text">
   ✅ <label for="nome">Nome:</label>
      <input type="text" id="nome">
   ```

---

Ricorda: HTML è il contenuto, CSS è lo stile! 
Prima scrivi COSA vuoi dire, poi penserai a COME farlo bello! 🎨






















# CSS Vademecum

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

---



























# **JavaScript Vademecum**

## Parte I - Fondamenti

### 1. Variabili - I Contenitori di Dati 📦

Le variabili sono contenitori che conservano informazioni nel tuo programma. Immagina di organizzare un trasloco: hai bisogno di scatole diverse per oggetti diversi. Alcune scatole le riutilizzerai per altri traslochi, altre sono sigillate per conservare oggetti preziosi che non devono essere toccati.

#### let - La Scatola Riutilizzabile

`let` crea una variabile che puoi modificare nel tempo. È come una lavagna in cucina dove scrivi la lista della spesa - aggiungi, cancelli, riscrivi continuamente.

```javascript
let messaggio = "Ciao";
messaggio = "Arrivederci";  // Posso cambiarla

let contatore = 0;
contatore = contatore + 1;  // Incremento
contatore++;                // Stessa cosa, più breve
```

La caratteristica fondamentale di `let` è il **block scope**: vive solo nel suo blocco delimitato da graffe `{}`. Pensa a un palazzo con appartamenti - una variabile `let` dichiarata in un appartamento (blocco) non esiste negli altri appartamenti.

```javascript
if (true) {
    let dentroIf = "Esisto solo qui dentro";
}
// console.log(dentroIf); // Errore! Non esiste fuori dal blocco
```

Quando usarla: Per valori che cambieranno durante l'esecuzione, come il punteggio in un gioco, il contenuto di un carrello della spesa, o messaggi che si aggiornano.

#### const - La Scatola Sigillata

`const` crea una variabile che non può essere riassegnata. È come incidere nel marmo o scrivere con l'inchiostro indelebile - una volta scritto, resta così.

```javascript
const PI_GRECO = 3.14159;
// PI_GRECO = 3.14; // Errore! Non si può modificare

const utente = { nome: "Mario", eta: 25 };
utente.eta = 26;  // Questo funziona! Modifichi il contenuto
// utente = { nome: "Luigi" }; // Errore! Non puoi cambiare scatola
```

Un concetto cruciale: `const` impedisce di cambiare il contenitore, non il contenuto. È come avere una cassaforte bullonata al pavimento - non puoi spostarla o sostituirla, ma puoi riorganizzare ciò che c'è dentro.

Quando usarla: Per riferimenti che non cambiano mai, come elementi del DOM, configurazioni, costanti matematiche. Usa sempre `const` di default, passa a `let` solo quando sai che dovrai riassegnare.

#### var - Il Vecchio Modo (Da Evitare)

`var` è il vecchio sistema di dichiarare variabili, con comportamenti imprevedibili. È come avere una variabile fantasma che può apparire in posti inaspettati del tuo codice.

```javascript
var vecchioStile = "Evitami";  // Function scope, hoisting strano
```

Perché evitarlo: `var` ignora i blocchi e può creare bug difficili da trovare. Usa sempre `let` o `const`.

### 2. Tipi di Dati - Le Forme dell'Informazione 🎭

JavaScript gestisce diversi tipi di informazioni, ognuno con le sue caratteristiche. Come in una cucina hai contenitori diversi per liquidi, solidi e spezie, in programmazione hai strutture diverse per testi, numeri e liste.

#### Stringhe - Il Testo

Le stringhe sono sequenze di caratteri, sempre tra virgolette. Come parole scritte su carta, possono essere combinate, tagliate, trasformate.

```javascript
const nome = "Marco";
const frase = 'Oggi piove';
const citazione = `Einstein disse: "E=mc²"`;  // Template literal

// Template literal - Super potenti!
const anni = 25;
const presentazione = `Mi chiamo ${nome} e ho ${anni} anni`;
```

I template literal (con i backtick ``) sono come moduli prestampati dove inserisci i valori nei campi vuoti. Molto più comodi della concatenazione classica.

##### Caratteri di Escape

A volte devi inserire caratteri speciali nel testo. Il backslash `\` è il tuo passepartout - dice al computer "il prossimo carattere è speciale".

```javascript
const negozio = "Sono nel \"Store\"";  // Virgolette dentro virgolette
const righe = "Prima riga\nSeconda riga";  // A capo
const colonne = "Nome\tCognome\tEtà";  // Tab per allineare
const percorso = "C:\\Users\\Documents";  // Backslash letterale
```

È come quando fai le "virgolette con le dita" mentre parli - il backslash è il gesto che dice "attenzione, questo è letterale!"

Operazioni comuni con le stringhe:

```javascript
const parola = "JavaScript";
console.log(parola.length);        // 10 caratteri
console.log(parola.toUpperCase()); // "JAVASCRIPT"
console.log(parola[0]);            // "J" - primo carattere
console.log(parola.indexOf("Script")); // 4 - dove inizia
```

#### Numeri - I Valori Matematici

I numeri non hanno virgolette e possono essere interi o decimali. Sono i mattoni delle operazioni matematiche.

```javascript
const eta = 25;          // Intero
const prezzo = 19.99;    // Decimale
const temperatura = -5;  // Negativo
```

Operazioni matematiche fondamentali:

```javascript
const a = 10;
const b = 3;

console.log(a + b);   // 13 - Addizione
console.log(a - b);   // 7  - Sottrazione
console.log(a * b);   // 30 - Moltiplicazione
console.log(a / b);   // 3.333... - Divisione
console.log(a % b);   // 1  - Resto (modulo)
console.log(a ** b);  // 1000 - Potenza
```

Il modulo `%` è sorprendentemente utile: per verificare numeri pari (`n % 2 === 0`), per ciclare in array (`indice % lunghezza`), per creare pattern ripetitivi.

##### Math.random() e Math.floor() - I Dadi del Codice

`Math.random()` genera un numero casuale tra 0 e 1, come lanciare un dado con infinite facce. `Math.floor()` arrotonda verso il basso, trasformando decimali in interi.

```javascript
// Numero casuale tra 0 e 0.999...
const casuale = Math.random();

// Lancio di un dado a 6 facce
const dado = Math.floor(Math.random() * 6) + 1;  // 1-6

// Scegliere un elemento casuale da un array
const colori = ["rosso", "verde", "blu"];
const indiceCasuale = Math.floor(Math.random() * colori.length);
const coloreScelto = colori[indiceCasuale];
```

È come estrarre un biglietto dalla lotteria - `Math.random()` mescola i biglietti, `Math.floor()` ne estrae uno intero.

#### Booleani - Vero o Falso

I booleani hanno solo due valori: `true` o `false`. Come un interruttore della luce - acceso o spento, non ci sono vie di mezzo.

```javascript
const maggiorenne = true;
const iscritto = false;

// Nascono spesso da confronti
const puoGuidare = eta >= 18;
const carelloVuoto = prodotti.length === 0;
```

JavaScript considera alcuni valori come "falsy" (falsi): `0`, `""` (stringa vuota), `null`, `undefined`, `NaN`. Tutto il resto è "truthy" (vero).

#### Array - Le Liste Ordinate

Gli array sono liste ordinate di elementi, come una fila di cassetti numerati partendo da 0.

```javascript
const colori = ["rosso", "verde", "blu"];
console.log(colori[0]);     // "rosso" - primo elemento
console.log(colori.length);  // 3 - numero elementi
```

Metodi per modificare array:

```javascript
const frutta = ["mela", "pera"];

// Aggiungere e rimuovere dalla fine
frutta.push("banana");      // ["mela", "pera", "banana"]
frutta.pop();               // Rimuove "banana"

// Aggiungere e rimuovere dall'inizio
frutta.unshift("kiwi");     // ["kiwi", "mela", "pera"]
frutta.shift();             // Rimuove "kiwi"
```

Metodi di ricerca e verifica:

```javascript
const numeri = [1, 2, 3, 4, 5];

console.log(numeri.includes(3));    // true - c'è il 3?
console.log(numeri.indexOf(4));     // 3 - in che posizione?
console.log(numeri.join(", "));     // "1, 2, 3, 4, 5" - unisci in stringa
```

##### Array.from() - Il Trasformatore di Liste

`Array.from()` converte strutture simili ad array in veri array. È come trasformare una collana di perle in perle singole che puoi riorganizzare.

```javascript
// Convertire una stringa in array di caratteri
const lettere = Array.from("Ciao");  // ["C", "i", "a", "o"]

// Convertire NodeList del DOM in array
const bottoni = Array.from(document.querySelectorAll("button"));
```

#### Oggetti - I Contenitori Strutturati

Gli oggetti sono contenitori con compartimenti etichettati. Come un schedario dove ogni cartella ha un'etichetta specifica.

```javascript
const persona = {
    nome: "Mario",
    eta: 25,
    citta: "Roma"
};

console.log(persona.nome);      // "Mario" - notazione punto
console.log(persona["eta"]);    // 25 - notazione bracket
```

Gli oggetti possono contenere qualsiasi tipo di dato, anche altri oggetti o array:

```javascript
const giocatore = {
    nome: "Luigi",
    stats: {
        livello: 5,
        puntiVita: 100
    },
    inventario: ["spada", "pozione", "mappa"]
};
```

Array di oggetti - come un database:

```javascript
const prodotti = [
    { nome: "Laptop", prezzo: 999, disponibile: true },
    { nome: "Mouse", prezzo: 25, disponibile: false },
    { nome: "Tastiera", prezzo: 75, disponibile: true }
];

// Trovare prodotti disponibili
for (const prodotto of prodotti) {
    if (prodotto.disponibile) {
        console.log(`${prodotto.nome}: €${prodotto.prezzo}`);
    }
}
```

### 3. Operatori - Gli Strumenti di Calcolo 🔧

Gli operatori sono gli attrezzi nella tua cassetta degli strumenti di programmazione. Ogni operatore ha uno scopo specifico, come cacciaviti di dimensioni diverse.

#### Operatori di Assegnazione

L'operatore base `=` assegna un valore. Ma esistono versioni abbreviate che combinano operazioni e assegnazione.

```javascript
let punteggio = 100;

// Forma estesa vs abbreviata
punteggio = punteggio + 50;  // Forma estesa
punteggio += 50;             // Forma abbreviata (stesso risultato)

// Altri operatori abbreviati
punteggio -= 20;   // Sottrai 20
punteggio *= 2;    // Moltiplica per 2
punteggio /= 5;    // Dividi per 5
punteggio %= 3;    // Resto della divisione per 3
```

È come dire "aggiungi questo al totale" invece di "prendi il totale, aggiungi questo, e rimetti il risultato nel totale".

Incremento e decremento:

```javascript
let contatore = 0;
contatore++;  // Aumenta di 1
contatore--;  // Diminuisce di 1

// Differenza tra pre e post incremento
let a = 5;
let b = a++;  // b = 5, poi a diventa 6
let c = ++a;  // a diventa 7, poi c = 7
```

#### Operatori di Confronto

Restituiscono sempre un booleano (`true` o `false`). Sono le domande che fai ai tuoi dati.

```javascript
// Uguaglianza STRETTA (sempre preferibile)
5 === 5        // true - stesso valore, stesso tipo
5 === "5"      // false - tipi diversi

// Confronti di grandezza
10 > 5         // true
10 <= 10       // true
```

Usa sempre `===` (triplo uguale) per evitare conversioni implicite inaspettate. È come controllare che due chiavi siano identiche, non solo simili.

#### Operatori Logici

Combinano condizioni booleane, come costruire frasi complesse con "e", "o", "non".

```javascript
// AND (&&) - ENTRAMBE devono essere vere
const puoGuidare = haPatente && maggiorenne;

// OR (||) - ALMENO UNA deve essere vera
const puoEntrare = haTicket || èInLista;

// NOT (!) - Inverte il valore
const minorenne = !maggiorenne;
```

##### Short-circuit Evaluation

JavaScript è intelligente: smette di valutare appena conosce il risultato.

```javascript
// Se la prima è false, non valuta la seconda
false && funzioneComplessa()  // funzioneComplessa non viene eseguita

// Se la prima è true, non valuta la seconda
true || funzioneComplessa()   // funzioneComplessa non viene eseguita

// Uso pratico: valore di default
const nome = inputUtente || "Ospite";  // Se inputUtente è vuoto, usa "Ospite"
```

È come controllare se hai le chiavi di casa prima di controllare se hai chiuso il gas - se non hai le chiavi, il resto non importa!

## Parte II - Input/Output e Controllo

### 4. Output - Comunicare con l'Esterno 📢

L'output è come il tuo programma parla con te. Hai diversi canali di comunicazione, ognuno con il suo scopo.

#### console.log() - La Finestra di Debug

`console.log()` è il tuo migliore amico durante lo sviluppo. È come avere un assistente che ti riferisce cosa sta succedendo nel programma mentre gira.

```javascript
console.log("Messaggio semplice");
console.log("Valore:", variabile);

// Messaggi stilizzati per importanza
console.error("Errore critico!");     // Rosso
console.warn("Attenzione!");          // Giallo
console.info("Info utile");           // Icona info

// Tabelle per dati strutturati
const utenti = [
    { nome: "Mario", punti: 150 },
    { nome: "Luigi", punti: 120 }
];
console.table(utenti);  // Tabella formattata!
```

Usa `console.log()` strategicamente per tracciare il flusso del programma:

```javascript
function calcolaSconto(prezzo, percentuale) {
    console.log("Input ricevuti:", prezzo, percentuale);
    
    const sconto = prezzo * (percentuale / 100);
    console.log("Sconto calcolato:", sconto);
    
    const finale = prezzo - sconto;
    console.log("Prezzo finale:", finale);
    
    return finale;
}
```

#### alert() - Il Messaggio Urgente

`alert()` mostra un popup che blocca tutto finché l'utente non clicca OK. È come suonare un campanello d'allarme - impossibile da ignorare.

```javascript
alert("Attenzione! Stai per cancellare tutto!");

// Uso in validazione
if (campoVuoto) {
    alert("Per favore compila tutti i campi");
    return;
}
```

Usa `alert()` con parsimonia - è invasivo e interrompe l'esperienza utente. È come urlare invece di parlare.

### 5. Controllo del Flusso - Le Decisioni 🚦

Il controllo del flusso determina quali parti del codice vengono eseguite. È il navigatore GPS del tuo programma che decide quale strada prendere.

#### if/else - Il Bivio

La struttura `if` è come un semaforo che ti lascia passare solo col verde.

```javascript
const eta = 20;

if (eta < 18) {
    console.log("Minorenne");
} else if (eta >= 18 && eta < 65) {
    console.log("Adulto");
} else {
    console.log("Senior");
}
```

L'operatore ternario è la versione compatta per decisioni semplici:

```javascript
const messaggio = eta >= 18 ? "Puoi votare" : "Troppo giovane per votare";
```

È come scegliere tra due strade al bivio - veloce e diretto quando hai solo due opzioni.

#### switch - Il Selettore Multiplo

`switch` è come un centralinista che smista le chiamate in base al numero composto.

```javascript
const azione = "salva";

switch (azione) {
    case "salva":
        salvaDati();
        console.log("Salvato!");
        break;  // IMPORTANTE: ferma l'esecuzione
        
    case "carica":
        caricaDati();
        break;
        
    case "elimina":
    case "cancella":  // Due case insieme
        eliminaDati();
        break;
        
    default:  // Come "else"
        console.log("Azione sconosciuta");
}
```

Non dimenticare `break`! Senza, l'esecuzione "cade" nel caso successivo come una cascata.

#### Return Early Pattern - L'Uscita Anticipata

Invece di annidare molti `if`, esci subito quando puoi. È come controllare i documenti all'ingresso - se manca qualcosa, non fai entrare.

```javascript
function processaPagamento(carta, importo) {
    // Controlli di validazione - esci subito se qualcosa non va
    if (!carta) {
        return { successo: false, errore: "Carta mancante" };
    }
    
    if (carta.scaduta) {
        return { successo: false, errore: "Carta scaduta" };
    }
    
    if (importo <= 0) {
        return { successo: false, errore: "Importo non valido" };
    }
    
    // Se arriviamo qui, tutto è valido
    elaboraPagamento();
    return { successo: true, messaggio: "Pagamento completato" };
}
```

Questo pattern rende il codice più leggibile evitando la "piramide dell'inferno" di if annidati.

### 6. Cicli - Le Ripetizioni 🔄

I cicli sono come una lavatrice che ripete lo stesso ciclo finché il bucato non è pulito. Automatizzano le operazioni ripetitive.

#### for - Il Ciclo Contatore

Perfetto quando sai quante volte ripetere. Ha tre parti: inizializzazione, condizione, incremento.

```javascript
// Struttura: for (inizio; condizione; incremento)
for (let i = 0; i < 5; i++) {
    console.log(`Giro numero ${i + 1}`);
}

// Iterare un array con indici
const voti = [8, 7, 9, 6, 10];
let somma = 0;
for (let i = 0; i < voti.length; i++) {
    somma += voti[i];
}
const media = somma / voti.length;
```

Il ciclo `for` è come salire le scale contando i gradini - sai quanti sono e li conti mentre sali.

#### while - Il Ciclo Condizionale

Continua finché la condizione è vera. Come aspettare che l'acqua bolla - non sai quanto ci vorrà, ma sai quando fermarti.

```javascript
let tentativi = 0;
const maxTentativi = 3;

while (tentativi < maxTentativi) {
    const password = prompt("Inserisci password:");
    
    if (password === "segreta123") {
        console.log("Accesso consentito!");
        break;  // Esci dal ciclo
    }
    
    tentativi++;
    console.log(`Tentativi rimasti: ${maxTentativi - tentativi}`);
}
```

#### do...while - Il Ciclo Garantito

Esegue almeno una volta, poi controlla. Come assaggiare il cibo prima di decidere se aggiungere sale.

```javascript
let scelta;
do {
    scelta = prompt("Vuoi continuare? (s/n)");
} while (scelta !== "n" && scelta !== "N");
```

È utile quando devi fare qualcosa almeno una volta, come mostrare un menu.

#### for...of - Il Ciclo per Array

Itera direttamente sugli elementi, senza indici. Come esaminare ogni oggetto in una scatola uno alla volta.

```javascript
const carrello = ["mele", "pane", "latte"];

for (const prodotto of carrello) {
    console.log(`Comprare: ${prodotto}`);
}

// Funziona anche con stringhe!
for (const lettera of "Ciao") {
    console.log(lettera);  // C, i, a, o
}
```

Controllo del flusso nei cicli:

```javascript
// break - Ferma tutto e esci
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);  // 0, 1, 2, 3, 4
}

// continue - Salta al prossimo giro
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;  // Salta i pari
    console.log(i);  // 1, 3, 5, 7, 9
}
```

## Parte III - Funzioni e Scope

### 7. Funzioni - I Blocchi Riutilizzabili 🧩

Le funzioni sono come ricette di cucina - una volta scritta la ricetta, puoi preparare quel piatto ogni volta che vuoi, con ingredienti diversi.

#### Dichiarazione di Funzione

Una funzione ha un nome, può ricevere ingredienti (parametri) e restituire un risultato.

```javascript
function calcolaArea(base, altezza) {
    const area = base * altezza;
    return area;
}

// Uso della funzione
const areaStanza = calcolaArea(4, 3);  // 12 metri quadrati
```

#### Parametri di Default

Puoi specificare valori predefiniti per i parametri, come avere ingredienti di riserva in dispensa.

```javascript
function saluta(nome = "Ospite", orario = "giorno") {
    return `Buon${orario}, ${nome}!`;
}

console.log(saluta());  // "Buongiorno, Ospite!"
console.log(saluta("Mario", "asera"));  // "Buonasera, Mario!"
```

#### Return - Il Risultato

`return` è il piatto finito che esce dalla cucina. Termina la funzione e restituisce un valore.

```javascript
function calcolaSconto(prezzo, percentuale) {
    if (prezzo <= 0) {
        return 0;  // Esce subito se il prezzo non è valido
    }
    
    const sconto = prezzo * (percentuale / 100);
    return prezzo - sconto;
    
    console.log("Questa riga non verrà mai eseguita");  // Dopo return
}
```

#### Arrow Functions - La Sintassi Moderna

Le arrow functions sono una scrittura più concisa, perfette per funzioni semplici.

```javascript
// Funzione tradizionale
function raddoppia(n) {
    return n * 2;
}

// Arrow function equivalente
const raddoppia = (n) => n * 2;

// Utile con metodi array
const numeri = [1, 2, 3];
const doppi = numeri.map(n => n * 2);  // [2, 4, 6]
```

#### Funzioni che Chiamano Funzioni

Le funzioni possono collaborare tra loro, come chef che si passano ingredienti preparati.

```javascript
function calcolaMedia(voti) {
    let somma = 0;
    for (const voto of voti) {
        somma += voto;
    }
    return somma / voti.length;
}

function determinaGiudizio(media) {
    if (media >= 9) return "Eccellente";
    if (media >= 7) return "Buono";
    if (media >= 6) return "Sufficiente";
    return "Insufficiente";
}

function valutaStudente(voti) {
    const media = calcolaMedia(voti);
    const giudizio = determinaGiudizio(media);
    return `Media: ${media.toFixed(1)} - ${giudizio}`;
}

console.log(valutaStudente([8, 7, 9, 6, 8]));  // "Media: 7.6 - Buono"
```

### 8. Scope - La Visibilità delle Variabili 👁️

Lo scope determina dove una variabile è accessibile. È come le stanze di una casa - ciò che è in una stanza non è sempre visibile dalle altre.

#### Scope Globale vs Locale

Le variabili globali sono come gli annunci all'altoparlante - tutti li sentono. Le variabili locali sono come conversazioni private in una stanza.

```javascript
// SCOPE GLOBALE - Visibile ovunque
let punteggioGlobale = 0;

function gioca() {
    // SCOPE LOCALE - Solo qui dentro
    let punteggioRound = 100;
    punteggioGlobale += punteggioRound;  // Posso accedere al globale
    
    function bonus() {
        // Posso vedere le variabili dei "genitori"
        let extra = 50;
        punteggioRound += extra;  // Vedo punteggioRound
        punteggioGlobale += extra;  // Vedo punteggioGlobale
    }
}

console.log(punteggioGlobale);  // OK
// console.log(punteggioRound);  // Errore! Non visibile
```

#### Block Scope

Le variabili `let` e `const` vivono solo nel loro blocco `{}`.

```javascript
if (true) {
    let segreta = "Solo qui dentro";
    const ancheQuesta = "Invisibile fuori";
}
// console.log(segreta);  // Errore!

// Nei cicli ogni iterazione ha il suo scope
for (let i = 0; i < 3; i++) {
    let temporanea = i * 2;
    // i e temporanea esistono solo qui
}
```

#### Scope Chain - La Catena di Visibilità

JavaScript cerca le variabili partendo dallo scope corrente e salendo verso l'esterno, come cercare le chiavi prima in tasca, poi nella borsa, poi in casa.

```javascript
const messaggio = "Globale";

function esterna() {
    const messaggio = "Esterna";  // Shadowing del globale
    
    function interna() {
        const messaggio = "Interna";  // Shadowing di nuovo
        console.log(messaggio);  // "Interna" - trova la più vicina
    }
    
    interna();
    console.log(messaggio);  // "Esterna"
}

esterna();
console.log(messaggio);  // "Globale"
```

## Parte IV - DOM e Interattività

### 9. DOM Manipulation - Il Ponte col Browser 🌉

Il DOM (Document Object Model) è la rappresentazione del tuo HTML come un albero di oggetti. Manipolare il DOM è come ridecorare una stanza - puoi spostare mobili, cambiare colori, aggiungere decorazioni.

#### Selezionare Elementi

Prima di modificare qualcosa, devi trovarlo. È come cercare un libro in biblioteca - hai diversi sistemi di ricerca.

##### document.querySelector() - Il Cercatore Preciso

Usa i selettori CSS per trovare il primo elemento che corrisponde.

```javascript
// Per ID (con #)
const titolo = document.querySelector("#titolo-principale");

// Per classe (con .)
const bottone = document.querySelector(".btn-primary");

// Per tipo di elemento
const primoP = document.querySelector("p");

// Selettori complessi
const elementoSpecifico = document.querySelector("div.container > p:first-child");
```

##### getElementById() - La Ricerca per ID

Il metodo più veloce quando conosci l'ID esatto.

```javascript
const header = document.getElementById("header");
const carrello = document.getElementById("shopping-cart");
```

##### querySelectorAll() - Il Cercatore Multiplo

Trova tutti gli elementi che corrispondono, restituendo una NodeList (simile a un array).

```javascript
// Tutti i paragrafi
const paragrafi = document.querySelectorAll("p");

// Tutti gli elementi con una classe
const cards = document.querySelectorAll(".card");

// Convertire in array per usare metodi array
const bottoniArray = Array.from(document.querySelectorAll("button"));
```

#### Modifica del Contenuto

Una volta trovato l'elemento, puoi modificarne il contenuto in vari modi.

##### innerText vs innerHTML vs textContent

Ogni proprietà ha il suo scopo specifico, come diversi tipi di pennelli per dipingere.

```javascript
const elemento = document.querySelector("#messaggio");

// innerText - Solo testo visibile, rispetta CSS
elemento.innerText = "Testo pulito e sicuro";

// innerHTML - Può contenere HTML (attenzione alla sicurezza!)
elemento.innerHTML = "<strong>Testo</strong> con <em>formattazione</em>";

// textContent - Tutto il testo, anche nascosto
elemento.textContent = "Testo semplice, ignora HTML";
```

`innerText` è come la trascrizione di una conversazione - solo le parole dette, senza rumori di fondo. `innerHTML` è la registrazione completa con tutti gli effetti. `textContent` è tutto il testo, anche i sussurri.

##### insertAdjacentHTML() - L'Inseritore Chirurgico

Inserisce HTML in posizioni precise rispetto all'elemento, come un chirurgo che opera con precisione.

```javascript
const lista = document.querySelector("#lista-spesa");

// Quattro posizioni possibili
lista.insertAdjacentHTML('beforebegin', '<h3>Prima della lista</h3>');
lista.insertAdjacentHTML('afterbegin', '<li>Primo elemento</li>');
lista.insertAdjacentHTML('beforeend', '<li>Ultimo elemento</li>');
lista.insertAdjacentHTML('afterend', '<p>Dopo la lista</p>');
```

#### Modifica degli Stili

Puoi cambiare l'aspetto degli elementi come un designer d'interni.

##### style.property - Lo Stilista Diretto

Modifica direttamente gli stili inline dell'elemento.

```javascript
const box = document.querySelector(".box");

box.style.backgroundColor = "blue";  // Nota: camelCase!
box.style.width = "200px";
box.style.display = "none";  // Nasconde l'elemento

// Stili multipli
Object.assign(box.style, {
    color: "white",
    padding: "20px",
    borderRadius: "10px"
});
```

##### classList - Il Gestore di Classi

Gestisce le classi CSS dell'elemento, più pulito che modificare stili inline.

```javascript
const carta = document.querySelector(".carta");

// Aggiungere classi
carta.classList.add("selezionata", "animata");

// Rimuovere classi
carta.classList.remove("nascosta");

// Toggle - aggiunge se non c'è, rimuove se c'è
carta.classList.toggle("attiva");

// Verificare presenza
if (carta.classList.contains("selezionata")) {
    console.log("Carta selezionata!");
}
```

### 10. Eventi - Le Reazioni del Browser ⚡

Gli eventi sono come campanelli - quando qualcuno suona (click, tastiera, mouse), il tuo codice risponde.

#### onclick - Il Click Diretto

Il modo più semplice per gestire i click, assegnando direttamente una funzione.

```javascript
const bottone = document.querySelector("#mio-bottone");

bottone.onclick = function() {
    console.log("Bottone cliccato!");
};

// O con arrow function
bottone.onclick = () => alert("Click!");
```

Limite: puoi avere solo un gestore per evento.

#### addEventListener() - L'Ascoltatore Professionale

Il metodo più flessibile e potente per gestire eventi.

```javascript
const bottone = document.querySelector("#mio-bottone");

// Puoi aggiungere più listener
bottone.addEventListener("click", () => {
    console.log("Primo gestore");
});

bottone.addEventListener("click", () => {
    console.log("Secondo gestore");
});

// Rimuovere un listener specifico
function gestoreClick() {
    console.log("Click gestito");
}

bottone.addEventListener("click", gestoreClick);
bottone.removeEventListener("click", gestoreClick);
```

#### Event Object e preventDefault()

Ogni evento porta con sé informazioni utili nell'oggetto evento.

```javascript
document.querySelector("form").addEventListener("submit", function(evento) {
    evento.preventDefault();  // Impedisce l'invio normale del form
    
    console.log(evento.type);  // "submit"
    console.log(evento.target);  // L'elemento che ha generato l'evento
    
    // Validazione personalizzata
    const dati = new FormData(evento.target);
    if (validaDati(dati)) {
        inviaConAjax(dati);
    }
});
```

#### Event Delegation - La Delega Intelligente

Invece di mettere listener su ogni elemento, mettilo sul genitore. È come avere un receptionist che smista le chiamate.

```javascript
// Invece di fare questo per ogni bottone...
// document.querySelectorAll(".btn").forEach(btn => {
//     btn.addEventListener("click", gestisciClick);
// });

// Fai questo una volta sola!
document.querySelector("#contenitore").addEventListener("click", function(e) {
    if (e.target.classList.contains("btn")) {
        console.log("Bottone cliccato:", e.target.textContent);
    }
});
```

Vantaggi: funziona anche per elementi aggiunti dinamicamente, usa meno memoria.

## Parte V - Espressioni Regolari

### 11. Regex - Il Linguaggio dei Pattern 🔍

Le espressioni regolari (regex) sono come metal detector per il testo - cercano pattern specifici nelle stringhe. Immagina di dover trovare tutti i numeri di telefono in un documento di 100 pagine - le regex lo fanno in millisecondi.

#### Sintassi Base

Una regex è racchiusa tra due slash `/pattern/`, come una formula matematica tra parentesi.

```javascript
const regex = /ciao/;
const testo = "ciao mondo";
console.log(regex.test(testo));  // true - trova "ciao"

// Con il metodo match
console.log(testo.match(regex));  // ["ciao"]
```

#### Caratteri Speciali e Escape

Alcuni caratteri hanno poteri speciali nelle regex. Per usarli letteralmente, devi "disattivarli" con il backslash `\`.

```javascript
// Caratteri speciali: . * + ? ^ $ { } ( ) [ ] \ |
const prezzoRegex = /\$\d+\.\d{2}/;  // Cerca prezzi come $19.99
console.log("Il prezzo è $19.99".match(prezzoRegex));  // ["$19.99"]
```

Il backslash è come dire "il prossimo carattere è letterale, non speciale". Come mettere le virgolette con le dita mentre parli.

#### Character Classes [] - Le Alternative

Le parentesi quadre creano un set di caratteri alternativi - "uno qualsiasi di questi".

```javascript
// Cerca a OPPURE e OPPURE i
const vocali = /[aei]/;
console.log("ciao".match(vocali));  // ["i"]

// Tutti i match con flag g
const tutteVocali = /[aeiou]/g;
console.log("ciao mondo".match(tutteVocali));  // ["i", "a", "o", "o", "o"]
```

##### Regole dentro le parentesi quadre

Dentro `[]`, la maggior parte dei caratteri speciali diventano normali automaticamente!

```javascript
// Fuori dalle [] servirebbero escape
const caratteriSpeciali = /[+*?.]/;  // Cerca +, *, ? o . letteralmente

// Range con il trattino
const lettereMinuscole = /[a-z]/;  // Dalla a alla z
const cifre = /[0-9]/;  // Da 0 a 9
const alfanumerico = /[a-zA-Z0-9]/;  // Lettere e numeri

// Negazione con ^
const nonVocali = /[^aeiou]/;  // Tutto TRANNE le vocali
```

È come dire "accetto qualsiasi carta tranne i cuori" in un gioco di carte.

#### Classi Predefinite

JavaScript offre scorciatoie per pattern comuni.

##### \s - Whitespace

Qualsiasi carattere "invisibile": spazio, tab, a capo.

```javascript
const puliziaTesto = (str) => str.replace(/\s+/g, ' ');
console.log(puliziaTesto("Troppi    spazi    qui"));  // "Troppi spazi qui"
```

##### \d - Cifre

Qualsiasi numero da 0 a 9.

```javascript
// Estrarre numeri da testo
const testo = "Ho 25 anni e peso 70 kg";
const numeri = testo.match(/\d+/g);  // ["25", "70"]
```

##### \w - Word Characters

Lettere, numeri e underscore.

```javascript
// Validare username
const usernameValido = /^\w+$/.test("user_123");  // true
const usernameInvalido = /^\w+$/.test("user-123");  // false (trattino non è \w)
```

##### Altri caratteri speciali

```javascript
// \n - A capo
const righe = "Prima\nSeconda".split(/\n/);  // ["Prima", "Seconda"]

// \t - Tab
const datiTabulati = "Nome\tEtà\tCittà".split(/\t/);  // ["Nome", "Età", "Città"]

// \b - Confine di parola
const soloParola = /\bcat\b/;  // Solo "cat", non "cathedral"
```

#### Quantificatori

Specificano quante volte un pattern deve ripetersi.

```javascript
// + = uno o più
const numeri = /\d+/;  // Una o più cifre

// * = zero o più
const spazi = /\s*/;  // Zero o più spazi

// ? = zero o uno (opzionale)
const colore = /colou?r/;  // Matcha "color" o "colour"

// {n} = esattamente n volte
const cap = /\d{5}/;  // Esattamente 5 cifre (CAP italiano)

// {n,m} = da n a m volte
const password = /\w{8,20}/;  // Da 8 a 20 caratteri
```

#### Flags

Le flag modificano il comportamento della regex.

```javascript
// g = global (trova tutti i match, non solo il primo)
const tuttiNumeri = /\d+/g;

// i = case insensitive
const ignoraMaiuscole = /ciao/i;  // Matcha "ciao", "CIAO", "Ciao"

// m = multiline
const inizioRiga = /^inizio/m;  // ^ matcha inizio di ogni riga
```

#### Pattern Matching Pratico

Esempi dal mondo reale:

```javascript
// Email semplificata
const email = /^[\w.]+@[\w]+\.[a-z]{2,}$/i;

// Numero di telefono italiano
const telefono = /^(\+39\s?)?3\d{2}\s?\d{6,7}$/;

// Pulizia input calorie counter
function pulisciInput(str) {
    // Rimuove +, -, spazi
    return str.replace(/[+\-\s]/g, '');
}

// Validazione notazione scientifica
function haNotazioneScientifica(str) {
    const regex = /\d+e\d+/i;
    return regex.test(str);
}
```

## Parte VI - Strutture Dati e Pattern

### 12. Oggetti e Strutture Complesse 🏗️

Gli oggetti sono il cuore della programmazione JavaScript moderna. Mentre gli array sono liste ordinate, gli oggetti sono dizionari - ogni valore ha una chiave specifica.

#### Oggetti come Dizionari

Un oggetto è come una rubrica telefonica - cerchi per nome (chiave) e trovi il numero (valore).

```javascript
const giocatore = {
    nome: "Mario",
    livello: 5,
    punteggio: 1500,
    vite: 3
};

// Accesso con notazione punto
console.log(giocatore.nome);  // "Mario"

// Accesso con bracket notation (utile per chiavi dinamiche)
const proprieta = "punteggio";
console.log(giocatore[proprieta]);  // 1500
```

#### Nesting di Strutture

Gli oggetti possono contenere altri oggetti e array, creando strutture complesse come un palazzo con piani e stanze.

```javascript
const gioco = {
    giocatore: {
        nome: "Luigi",
        stats: {
            forza: 10,
            velocita: 15,
            resistenza: 8
        },
        inventario: ["spada", "scudo", "pozione"]
    },
    livelloCorrente: 3,
    nemici: [
        { tipo: "goblin", salute: 20 },
        { tipo: "orco", salute: 50 }
    ]
};

// Navigare la struttura
console.log(gioco.giocatore.stats.forza);  // 10
console.log(gioco.nemici[0].tipo);  // "goblin"
```

#### Accesso con Bracket Notation

La bracket notation è potente quando le chiavi sono dinamiche o contengono caratteri speciali.

```javascript
const configurazione = {
    "colore-sfondo": "blu",
    "dimensione-font": 16,
    "usa-tema-scuro": true
};

// Con trattini, devi usare bracket notation
console.log(configurazione["colore-sfondo"]);  // "blu"

// Chiavi dinamiche
function leggiProprietà(oggetto, chiave) {
    return oggetto[chiave];
}
```

#### Iterazione su Oggetti

Esplorare un oggetto è come fare l'inventario di un magazzino.

```javascript
const punteggi = {
    Mario: 150,
    Luigi: 120,
    Peach: 180
};

// Object.keys() - lista delle chiavi
for (const nome of Object.keys(punteggi)) {
    console.log(`${nome} ha fatto ${punteggi[nome]} punti`);
}

// Object.values() - lista dei valori
const totale = Object.values(punteggi).reduce((sum, p) => sum + p, 0);

// Object.entries() - coppie chiave-valore
for (const [nome, punti] of Object.entries(punteggi)) {
    console.log(`${nome}: ${punti}`);
}
```

### 13. Pattern e Costrutti Pratici 🎯

I pattern sono soluzioni riutilizzabili a problemi comuni. Come ricette collaudate che funzionano sempre.

#### Pattern di Accumulo

L'accumulo è come riempire un secchio goccia a goccia - ogni iterazione aggiunge qualcosa al risultato.

```javascript
// Somma numerica
function calcolaTotale(prezzi) {
    let totale = 0;  // Il secchio vuoto
    for (const prezzo of prezzi) {
        totale += prezzo;  // Aggiungi ogni prezzo
    }
    return totale;
}

// Costruzione di stringa
function creaLista(elementi) {
    let html = "<ul>";  // Inizio
    for (const elemento of elementi) {
        html += `<li>${elemento}</li>`;  // Accumula
    }
    html += "</ul>";  // Chiudi
    return html;
}

// Filtraggio in nuovo array
function filtraPositivi(numeri) {
    const positivi = [];  // Array vuoto
    for (const num of numeri) {
        if (num > 0) {
            positivi.push(num);  // Accumula solo positivi
        }
    }
    return positivi;
}
```

#### Flag Booleane - Gli Interruttori

Le flag sono interruttori che controllano il comportamento del programma.

```javascript
let debugMode = false;
let isLoading = false;
let hasError = false;

function eseguiOperazione() {
    isLoading = true;
    
    try {
        // Operazione...
        if (debugMode) {
            console.log("Operazione completata");
        }
    } catch (error) {
        hasError = true;
        console.error("Errore:", error);
    } finally {
        isLoading = false;
    }
}
```

#### Variabili di Stato

Le variabili di stato tengono traccia di "dove siamo" nel programma, come un segnalibro in un libro.

```javascript
// Stati di un form
let formState = "editing";  // "editing", "submitting", "submitted", "error"

function gestisciForm() {
    switch(formState) {
        case "editing":
            abilitaCampi();
            break;
        case "submitting":
            mostraSpinner();
            disabilitaCampi();
            break;
        case "submitted":
            mostraSuccesso();
            break;
        case "error":
            mostraErrore();
            abilitaRetry();
            break;
    }
}
```

#### Pattern di Validazione

Verificare i dati prima di usarli è come il controllo qualità in fabbrica.

```javascript
function validaRegistrazione(dati) {
    const errori = [];
    
    // Controlli sequenziali
    if (!dati.email) {
        errori.push("Email richiesta");
    } else if (!dati.email.includes("@")) {
        errori.push("Email non valida");
    }
    
    if (!dati.password) {
        errori.push("Password richiesta");
    } else if (dati.password.length < 8) {
        errori.push("Password troppo corta");
    }
    
    if (dati.password !== dati.confermaPassword) {
        errori.push("Le password non coincidono");
    }
    
    return {
        valido: errori.length === 0,
        errori: errori
    };
}
```

#### Game State Pattern

Gestire lo stato di un gioco è come dirigere un'orchestra - ogni elemento deve essere sincronizzato.

```javascript
const gameState = {
    player: {
        x: 0,
        y: 0,
        health: 100,
        score: 0
    },
    enemies: [],
    level: 1,
    isPaused: false,
    isGameOver: false
};

function updateGame() {
    if (gameState.isPaused || gameState.isGameOver) {
        return;
    }
    
    // Aggiorna posizione giocatore
    movePlayer();
    
    // Aggiorna nemici
    gameState.enemies.forEach(enemy => moveEnemy(enemy));
    
    // Controlla collisioni
    checkCollisions();
    
    // Aggiorna UI
    renderGame();
}

function resetGame() {
    gameState.player.health = 100;
    gameState.player.score = 0;
    gameState.enemies = [];
    gameState.level = 1;
    gameState.isGameOver = false;
}
```

#### Configuration Objects

Centralizzare le configurazioni rende il codice più manutenibile, come avere tutte le impostazioni in un pannello di controllo.

```javascript
const CONFIG = {
    API_URL: "https://api.example.com",
    MAX_RETRIES: 3,
    TIMEOUT: 5000,
    ITEMS_PER_PAGE: 20,
    COLORS: {
        primary: "#007bff",
        success: "#28a745",
        danger: "#dc3545"
    }
};

// Uso nel codice
async function fetchData(endpoint) {
    const url = `${CONFIG.API_URL}/${endpoint}`;
    const response = await fetch(url, {
        timeout: CONFIG.TIMEOUT
    });
    return response.json();
}
```

## Parte VII - Codice Professionale

### 14. Commenti - La Documentazione del Codice 💭

I commenti sono post-it nel tuo codice. Servono a te futuro e ai tuoi colleghi per capire cosa fa il codice e perché.

#### Commento Singola Linea //

Perfetto per note brevi e spiegazioni veloci.

```javascript
// Calcola lo sconto del 20% per i membri premium
let sconto = isPremium ? 0.2 : 0;

// TODO: Aggiungere validazione email
// FIXME: Non gestisce numeri negativi
// NOTE: L'API richiede formato ISO per le date
```

#### Commento Multi-linea /* */

Per spiegazioni più lunghe o documentazione di funzioni.

```javascript
/*
 * Calcola il prezzo finale con tasse e spedizione
 * @param {number} prezzo - Prezzo base del prodotto
 * @param {string} stato - Stato per calcolo tasse
 * @return {number} Prezzo finale comprensivo
 */
function calcolaPrezzoFinale(prezzo, stato) {
    const tassa = getTassa(stato);
    const spedizione = prezzo > 50 ? 0 : 9.99;
    return prezzo + (prezzo * tassa) + spedizione;
}
```

#### Best Practices per Commenti

I commenti dovrebbero spiegare il "perché", non il "cosa".

```javascript
// CATTIVO: Commento ovvio
let count = 0;  // Imposta count a 0

// BUONO: Spiega il perché
let count = 0;  // Contatore tentativi falliti (max 3 prima del blocco)

// CATTIVO: Commento obsoleto
// Calcola il totale
function calcolaSconto() {  // Nome non corrisponde!
    // ...
}

// BUONO: Commento utile
// Applica sconto progressivo: 10% fino a 100€, 20% oltre
function calcolaSconto(prezzo) {
    // ...
}
```

#### Commenti TODO e Tag Speciali

I programmatori usano tag standard per categorizzare i commenti.

```javascript
// TODO: Implementare cache per performance
// FIXME: Memory leak con file grandi
// HACK: Timeout per aspettare animazione CSS (400ms)
// NOTE: Richiede libreria v3.0+
// DEPRECATED: Usare nuovoMetodo() dal v2.0
```

### 15. Esempi Integrati - Evoluzione del Codice 🔄

Vediamo come il codice evolve da semplice a sofisticato, applicando i principi appresi.

#### Da Hardcoded a Dinamico

Il codice hardcoded è rigido come una statua. Il codice dinamico si adatta come un attore.

```javascript
// EVOLUZIONE 1: Completamente hardcoded
console.log("Benvenuto Mario!");
console.log("Hai 25 anni");

// EVOLUZIONE 2: Con variabili
const nome = "Mario";
const eta = 25;
console.log(`Benvenuto ${nome}!`);
console.log(`Hai ${eta} anni`);

// EVOLUZIONE 3: Con input utente
const nome = prompt("Come ti chiami?");
const eta = prompt("Quanti anni hai?");
console.log(`Benvenuto ${nome}!`);
console.log(`Hai ${eta} anni`);

// EVOLUZIONE 4: Con oggetto e funzione
function presentaUtente(utente) {
    return `Benvenuto ${utente.nome}! Hai ${utente.eta} anni`;
}

const utente = {
    nome: document.querySelector("#nome").value,
    eta: parseInt(document.querySelector("#eta").value)
};

document.querySelector("#output").innerText = presentaUtente(utente);
```

#### Da Ripetitivo a DRY

DRY (Don't Repeat Yourself) significa non ripetersi. Se scrivi la stessa cosa più volte, c'è un modo migliore.

```javascript
// CODICE RIPETITIVO
let prezzo1 = 100;
let sconto1 = 20;
let finale1 = prezzo1 - (prezzo1 * sconto1 / 100);

let prezzo2 = 200;
let sconto2 = 15;
let finale2 = prezzo2 - (prezzo2 * sconto2 / 100);

// CODICE DRY
function applicaSconto(prezzo, percentuale) {
    return prezzo - (prezzo * percentuale / 100);
}

const prodotti = [
    { nome: "Scarpe", prezzo: 100, sconto: 20 },
    { nome: "Borsa", prezzo: 200, sconto: 15 }
];

prodotti.forEach(prodotto => {
    const finale = applicaSconto(prodotto.prezzo, prodotto.sconto);
    console.log(`${prodotto.nome}: €${finale}`);
});
```

#### Refactoring Progressivo

Il refactoring migliora il codice senza cambiare cosa fa, come riorganizzare una stanza.

```javascript
// VERSIONE 1: Funziona ma basilare
function checkPassword(pwd) {
    if (pwd.length >= 8) {
        return true;
    } else {
        return false;
    }
}

// VERSIONE 2: Più concisa
function checkPassword(pwd) {
    return pwd.length >= 8;
}

// VERSIONE 3: Più controlli
function checkPassword(pwd) {
    return pwd.length >= 8 && 
           /[A-Z]/.test(pwd) &&  // Ha maiuscole
           /[a-z]/.test(pwd) &&  // Ha minuscole
           /\d/.test(pwd);       // Ha numeri
}

// VERSIONE 4: Con feedback dettagliato
function checkPassword(pwd) {
    const requisiti = {
        lunghezza: pwd.length >= 8,
        maiuscola: /[A-Z]/.test(pwd),
        minuscola: /[a-z]/.test(pwd),
        numero: /\d/.test(pwd),
        speciale: /[!@#$%^&*]/.test(pwd)
    };
    
    return {
        valida: Object.values(requisiti).every(req => req),
        requisiti: requisiti,
        forza: Object.values(requisiti).filter(req => req).length
    };
}
```

#### Da Procedurale a Event-Driven

Passare da codice che esegue in sequenza a codice che reagisce agli eventi.

```javascript
// PROCEDURALE: Esegue subito
const nome = prompt("Nome?");
const eta = prompt("Età?");
alert(`Ciao ${nome}, hai ${eta} anni`);

// EVENT-DRIVEN: Aspetta l'utente
document.querySelector("#form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.querySelector("#nome").value;
    const eta = document.querySelector("#eta").value;
    
    document.querySelector("#risultato").innerText = 
        `Ciao ${nome}, hai ${eta} anni`;
});
```

#### Da Globale a Modulare

Organizzare il codice in moduli invece di avere tutto nello scope globale.

```javascript
// TUTTO GLOBALE (problematico)
let punteggio = 0;
let vite = 3;
function aumentaPunteggio() { punteggio += 10; }
function perdiVita() { vite--; }

// MODULARE (migliore)
const Game = {
    stato: {
        punteggio: 0,
        vite: 3
    },
    
    aumentaPunteggio(punti = 10) {
        this.stato.punteggio += punti;
        this.aggiornaUI();
    },
    
    perdiVita() {
        this.stato.vite--;
        if (this.stato.vite <= 0) {
            this.gameOver();
        }
        this.aggiornaUI();
    },
    
    aggiornaUI() {
        document.querySelector("#punteggio").innerText = this.stato.punteggio;
        document.querySelector("#vite").innerText = this.stato.vite;
    },
    
    gameOver() {
        alert("Game Over!");
        this.reset();
    },
    
    reset() {
        this.stato.punteggio = 0;
        this.stato.vite = 3;
        this.aggiornaUI();
    }
};
```

### 16. Best Practices Osservate ✅

Le best practices sono le regole d'oro accumulate da anni di esperienza collettiva.

#### Naming Convention - L'Arte di Nominare

I nomi delle variabili dovrebbero raccontare una storia.

```javascript
// NOMI CATTIVI
let d = new Date();
let u = getUserData();
let temp = 25;  // Temperatura o temporaneo?

// NOMI BUONI
let currentDate = new Date();
let userData = getUserData();
let temperatureCelsius = 25;

// Convenzioni standard
const MAX_ATTEMPTS = 3;        // Costanti in UPPER_SNAKE_CASE
let userName = "Mario";         // Variabili in camelCase
function calculateTotal() {}    // Funzioni in camelCase
class UserAccount {}           // Classi in PascalCase

// Booleani come domande
let isActive = true;
let hasPermission = false;
let canEdit = true;
```

#### Testing Incrementale

Testa mentre costruisci, come assaggiare mentre cucini.

```javascript
function processOrder(order) {
    console.log("1. Ordine ricevuto:", order);
    
    if (!order.items || order.items.length === 0) {
        console.log("2. Ordine vuoto");
        return null;
    }
    
    let total = 0;
    for (const item of order.items) {
        console.log(`3. Processo: ${item.name} - €${item.price}`);
        total += item.price * item.quantity;
    }
    
    console.log("4. Totale finale:", total);
    return total;
}
```

#### Gestione degli Errori

Prevedi cosa può andare storto e gestiscilo con grazia.

```javascript
function dividi(a, b) {
    // Validazione input
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error("I parametri devono essere numeri");
        return null;
    }
    
    // Controllo divisione per zero
    if (b === 0) {
        console.error("Impossibile dividere per zero");
        return null;
    }
    
    return a / b;
}

// Try-catch per errori runtime
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("JSON non valido:", error.message);
        return null;
    }
}
```

#### Separazione delle Responsabilità

Ogni funzione dovrebbe fare una cosa sola e farla bene.

```javascript
// CATTIVO: Fa troppe cose
function processUserData(userData) {
    // Valida
    if (!userData.email) return false;
    // Salva nel database
    database.save(userData);
    // Invia email
    sendEmail(userData.email);
    // Aggiorna UI
    updateUI(userData);
}

// BUONO: Responsabilità separate
function validateUser(userData) {
    return userData.email && userData.email.includes("@");
}

function saveUser(userData) {
    return database.save(userData);
}

function notifyUser(email) {
    return sendEmail(email);
}

function processUser(userData) {
    if (!validateUser(userData)) {
        return { success: false, error: "Validazione fallita" };
    }
    
    saveUser(userData);
    notifyUser(userData.email);
    updateUI(userData);
    
    return { success: true };
}
```

#### Gestione dello Stato Centralizzato

Mantieni lo stato in un posto solo, come un centro di controllo.

```javascript
const AppState = {
    data: {
        user: null,
        products: [],
        cart: []
    },
    
    setUser(user) {
        this.data.user = user;
        this.notify('userChanged');
    },
    
    addToCart(product) {
        this.data.cart.push(product);
        this.notify('cartUpdated');
    },
    
    listeners: {},
    
    subscribe(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    },
    
    notify(event) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(this.data));
        }
    }
};

// Uso
AppState.subscribe('cartUpdated', (data) => {
    document.querySelector("#cart-count").innerText = data.cart.length;
});
```

## Parte VIII - Progetti Pratici

### 17. Mini-Progetti Completi 🚀

Mettiamo insieme tutti i concetti in progetti completi e funzionanti.

#### Calcolatore con Validazione

Un calcolatore che valida l'input e gestisce gli errori.

```javascript
const Calculator = {
    display: document.querySelector("#display"),
    
    validateInput(value) {
        // Rimuovi caratteri non validi
        const cleaned = value.replace(/[^\d+\-*/.\s]/g, '');
        
        // Controlla notazione scientifica
        if (/\d+e\d+/i.test(cleaned)) {
            throw new Error("Notazione scientifica non supportata");
        }
        
        return cleaned;
    },
    
    calculate(expression) {
        try {
            const validated = this.validateInput(expression);
            // In produzione, usa un parser sicuro!
            const result = Function('"use strict"; return ' + validated)();
            return result;
        } catch (error) {
            return "Errore: " + error.message;
        }
    },
    
    init() {
        document.querySelectorAll(".calc-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const value = e.target.dataset.value;
                
                if (value === "=") {
                    this.display.value = this.calculate(this.display.value);
                } else if (value === "C") {
                    this.display.value = "";
                } else {
                    this.display.value += value;
                }
            });
        });
    }
};

Calculator.init();
```

#### Gioco Interattivo con Stati

Un mini-gioco che gestisce stati complessi.

```javascript
const AdventureGame = {
    state: {
        location: "town",
        health: 100,
        gold: 50,
        inventory: []
    },
    
    locations: {
        town: {
            description: "Sei nella piazza del villaggio",
            actions: [
                { text: "Vai al negozio", goto: "shop" },
                { text: "Vai nella foresta", goto: "forest" }
            ]
        },
        shop: {
            description: "Il negoziante ti saluta",
            actions: [
                { text: "Compra pozione (10 oro)", action: "buyPotion" },
                { text: "Torna in città", goto: "town" }
            ]
        },
        forest: {
            description: "La foresta è oscura e misteriosa",
            actions: [
                { text: "Cerca tesori", action: "searchTreasure" },
                { text: "Torna in città", goto: "town" }
            ]
        }
    },
    
    render() {
        const loc = this.locations[this.state.location];
        
        document.querySelector("#description").innerText = loc.description;
        document.querySelector("#stats").innerHTML = `
            Salute: ${this.state.health} | 
            Oro: ${this.state.gold} | 
            Inventario: ${this.state.inventory.join(", ") || "vuoto"}
        `;
        
        const actionsDiv = document.querySelector("#actions");
        actionsDiv.innerHTML = "";
        
        loc.actions.forEach(action => {
            const btn = document.createElement("button");
            btn.innerText = action.text;
            btn.onclick = () => this.handleAction(action);
            actionsDiv.appendChild(btn);
        });
    },
    
    handleAction(action) {
        if (action.goto) {
            this.state.location = action.goto;
        } else if (action.action === "buyPotion") {
            if (this.state.gold >= 10) {
                this.state.gold -= 10;
                this.state.inventory.push("pozione");
                alert("Hai comprato una pozione!");
            } else {
                alert("Non hai abbastanza oro!");
            }
        } else if (action.action === "searchTreasure") {
            const found = Math.random() > 0.5;
            if (found) {
                const goldFound = Math.floor(Math.random() * 20) + 5;
                this.state.gold += goldFound;
                alert(`Hai trovato ${goldFound} oro!`);
            } else {
                alert("Non hai trovato nulla...");
            }
        }
        
        this.render();
    },
    
    init() {
        this.render();
    }
};

AdventureGame.init();
```

#### Form Dinamico con Regex

Un form che valida l'input in tempo reale usando regex.

```javascript
const FormValidator = {
    rules: {
        email: {
            pattern: /^[\w.]+@[\w]+\.[a-z]{2,}$/i,
            message: "Email non valida"
        },
        telefono: {
            pattern: /^(\+39\s?)?3\d{2}\s?\d{6,7}$/,
            message: "Numero di telefono non valido"
        },
        cap: {
            pattern: /^\d{5}$/,
            message: "CAP deve essere di 5 cifre"
        },
        password: {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            message: "Password: minimo 8 caratteri, una maiuscola, una minuscola, un numero"
        }
    },
    
    validateField(field) {
        const fieldName = field.name;
        const value = field.value;
        const rule = this.rules[fieldName];
        
        if (!rule) return true;
        
        const isValid = rule.pattern.test(value);
        const errorElement = field.nextElementSibling;
        
        if (!isValid && value) {
            field.classList.add("error");
            errorElement.innerText = rule.message;
            errorElement.style.display = "block";
        } else {
            field.classList.remove("error");
            errorElement.style.display = "none";
        }
        
        return isValid;
    },
    
    init() {
        document.querySelectorAll("input").forEach(input => {
            // Aggiungi elemento per errore
            const errorSpan = document.createElement("span");
            errorSpan.className = "error-message";
            errorSpan.style.display = "none";
            input.parentNode.insertBefore(errorSpan, input.nextSibling);
            
            // Valida mentre scrivi
            input.addEventListener("blur", () => {
                this.validateField(input);
            });
        });
        
        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            
            let allValid = true;
            document.querySelectorAll("input").forEach(input => {
                if (!this.validateField(input)) {
                    allValid = false;
                }
            });
            
            if (allValid) {
                alert("Form valido! Invio in corso...");
            }
        });
    }
};

FormValidator.init();
```

#### Manipolatore di Liste

Un'applicazione per gestire liste dinamiche con filtri e ordinamento.

```javascript
const ListManager = {
    items: [],
    filteredItems: [],
    
    init() {
        this.setupEventListeners();
        this.render();
    },
    
    setupEventListeners() {
        // Aggiungi elemento
        document.querySelector("#add-btn").addEventListener("click", () => {
            const input = document.querySelector("#item-input");
            if (input.value.trim()) {
                this.addItem(input.value.trim());
                input.value = "";
            }
        });
        
        // Cerca/filtra
        document.querySelector("#search").addEventListener("input", (e) => {
            this.filterItems(e.target.value);
        });
        
        // Ordina
        document.querySelector("#sort-btn").addEventListener("click", () => {
            this.sortItems();
        });
    },
    
    addItem(text) {
        const item = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date()
        };
        
        this.items.push(item);
        this.filteredItems = [...this.items];
        this.render();
    },
    
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.filteredItems = this.filteredItems.filter(item => item.id !== id);
        this.render();
    },
    
    toggleComplete(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.completed = !item.completed;
            this.render();
        }
    },
    
    filterItems(searchTerm) {
        if (!searchTerm) {
            this.filteredItems = [...this.items];
        } else {
            const regex = new RegExp(searchTerm, 'i');
            this.filteredItems = this.items.filter(item => 
                regex.test(item.text)
            );
        }
        this.render();
    },
    
    sortItems() {
        this.filteredItems.sort((a, b) => 
            a.text.localeCompare(b.text)
        );
        this.render();
    },
    
    render() {
        const list = document.querySelector("#item-list");
        list.innerHTML = "";
        
        if (this.filteredItems.length === 0) {
            list.innerHTML = "<li>Nessun elemento</li>";
            return;
        }
        
        this.filteredItems.forEach(item => {
            const li = document.createElement("li");
            li.className = item.completed ? "completed" : "";
            
            li.innerHTML = `
                <span onclick="ListManager.toggleComplete(${item.id})">
                    ${item.completed ? "✓" : "○"} ${item.text}
                </span>
                <button onclick="ListManager.removeItem(${item.id})">×</button>
            `;
            
            list.appendChild(li);
        });
        
        // Aggiorna statistiche
        document.querySelector("#stats").innerText = 
            `Totale: ${this.items.length} | Completati: ${
                this.items.filter(i => i.completed).length
            }`;
    }
};

ListManager.init();
```

---


