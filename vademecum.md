# HTML Vademecum

## 1. Struttura base HTML

### `<!DOCTYPE html>`
**Cosa fa**: Dice al browser "Ehi, questo è HTML moderno (versione 5)!"

**Snippet**:
```html
<!DOCTYPE html>
```

**Analogia**: È come il cartello all'ingresso di un negozio che dice "Parliamo italiano qui". Senza questo, il browser potrebbe confondersi e pensare che stai usando HTML vecchio stile.

**Quando usarlo**: SEMPRE come primissima riga. Non ci sono eccezioni!

### `<html lang="en">`
**Cosa fa**: È il contenitore di tutto. Il `lang` dice in che lingua è scritto il contenuto.

**Snippet**:
```html
<html lang="it"> <!-- Per italiano -->
<html lang="en"> <!-- Per inglese -->
```

**Analogia**: È come la copertina di un libro con scritto "Edizione italiana" o "English edition". Aiuta i lettori di schermo a pronunciare correttamente.

**Quando usarlo**: Subito dopo `<!DOCTYPE>`. È la scatola che contiene tutto il resto.

### `<head>`
**Cosa fa**: Contiene tutte le informazioni "invisibili" ma importanti della pagina.

**Snippet**:
```html
<head>
  <meta charset="UTF-8">
  <title>La mia pagina</title>
</head>
```

**Analogia**: È come il retro di una foto: ci scrivi la data, il luogo, chi c'è nella foto... Informazioni utili ma che non vedi guardando la foto stessa.

**Quando usarlo**: Sempre, prima del `<body>`. Qui metti titolo, link CSS, meta tag.

### `<meta charset="utf-8">`
**Cosa fa**: Dice al browser come interpretare lettere e simboli (supporta emoji! 😊).

**Snippet**:
```html
<meta charset="utf-8">
```

**Analogia**: È come scegliere la tastiera giusta prima di scrivere. Con UTF-8 hai accesso a TUTTE le lettere del mondo, non solo quelle inglesi.

**Quando usarlo**: Prima riga dentro `<head>`. Senza questo, le lettere accentate potrebbero diventare simboli strani!

### `<meta name="viewport">`
**Cosa fa**: Dice al telefono "Non rimpicciolire tutto! Mostra la pagina alla dimensione giusta!"

**Snippet**:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Cosa succede senza**:
```
Senza viewport:
📱 [Pagina minuscola che devi zoomare]

Con viewport:
📱 [Pagina leggibile subito]
```

**Analogia**: È come dire a qualcuno "Non allontanarti per vedere tutto il quadro, guardalo da vicino alla distanza giusta".

**Quando usarlo**: Sempre se vuoi che il sito funzioni su mobile (quindi sempre!).

### `<title>`
**Cosa fa**: Il titolo che appare sulla linguetta del browser e nei risultati Google.

**Snippet**:
```html
<title>Pizzeria da Mario - Le migliori pizze di Roma</title>
```

**Analogia**: È il titolo sulla copertina del libro. È la prima cosa che la gente legge!

**Quando usarlo**: Uno per pagina, dentro `<head>`. Fallo descrittivo!

### `<body>`
**Cosa fa**: Contiene TUTTO quello che l'utente vede e tocca.

**Snippet**:
```html
<body>
  <h1>Benvenuto!</h1>
  <p>Tutto quello che vedi è qui dentro...</p>
</body>
```

**Analogia**: Se l'HTML fosse un libro, il `<body>` sono tutte le pagine che leggi davvero, non la copertina o l'indice.

**Quando usarlo**: Subito dopo `</head>`. Tutto il contenuto visibile va qui!

### `<main>`
**Cosa fa**: Identifica il contenuto principale, quello per cui l'utente è venuto.

**Snippet**:
```html
<main>
  <h1>Ricetta della carbonara</h1>
  <p>Ecco come fare la vera carbonara...</p>
</main>
```

**Analogia**: In un giornale, è l'articolo principale, non le pubblicità o il meteo ai lati.

**Quando usarlo**: Una volta sola per pagina, per il contenuto centrale.

### `<section>`
**Cosa fa**: Raggruppa contenuti correlati in un blocco logico.

**Snippet**:
```html
<section>
  <h2>I nostri servizi</h2>
  <p>Taglio capelli...</p>
  <p>Barba...</p>
</section>
```

**Analogia**: I capitoli di un libro. Ogni capitolo parla di un argomento specifico.

**Quando usarlo**: Per dividere la pagina in parti tematiche con un titolo.

### `<article>`
**Cosa fa**: Un pezzo di contenuto che ha senso anche da solo.

**Snippet**:
```html
<article>
  <h2>Breaking: Piove a Roma!</h2>
  <p>Dopo mesi di siccità...</p>
</article>
```

**Analogia**: Un articolo di giornale che puoi ritagliare e dare a qualcuno - ha senso anche fuori dal giornale!

**Quando usarlo**: Post del blog, card prodotto, commenti - cose che "stanno in piedi da sole".

### `<div>`
**Cosa fa**: Contenitore generico senza significato speciale. Il tuttofare dell'HTML!

**Snippet**:
```html
<div class="card">
  <img src="pizza.jpg">
  <p>Pizza Margherita</p>
</div>
```

**Analogia**: Un contenitore Tupperware trasparente - ci metti quello che vuoi e lo organizzi come serve.

**Quando usarlo**: Quando non c'è un tag più specifico (section, article, nav) ma ti serve raggruppare per stile.

### `<span>` ← NUOVO
**Cosa fa**: Come `<div>` ma in versione inline - non va a capo!

**Snippet**:
```html
<p>Il prezzo è <span class="price">€19.99</span> solo oggi!</p>
```

**Diagramma**:
```
Con <div>:
Il prezzo è
[€19.99]
solo oggi!

Con <span>:
Il prezzo è [€19.99] solo oggi!
```

**Analogia**: Un evidenziatore su una parola - colora senza interrompere la frase.

**Quando usarlo**: Per stilizzare parti di testo senza spezzare il flusso.

### `<a>` ← NUOVO
**Cosa fa**: Crea un link cliccabile verso altre pagine o sezioni.

**Snippet**:
```html
<!-- Link esterno -->
<a href="https://google.com">Vai a Google</a>

<!-- Link interno -->
<a href="/contatti.html">Contattaci</a>

<!-- Link nella stessa pagina -->
<a href="#prezzi">Vai ai prezzi</a>

<!-- Link che apre in nuova scheda -->
<a href="https://esempio.com" target="_blank">Apri in nuova scheda</a>
```

**Analogia**: Un portale teletrasporto - clicchi e ti porta istantaneamente da un'altra parte!

**Quando usarlo**: Ogni volta che vuoi collegare pagine, sezioni, o risorse esterne.

### `<nav>` ← NUOVO
**Cosa fa**: Contiene i link di navigazione principali del sito.

**Snippet**:
```html
<nav>
  <a href="/">Home</a>
  <a href="/prodotti">Prodotti</a>
  <a href="/contatti">Contatti</a>
</nav>
```

**Analogia**: La mappa all'ingresso del centro commerciale con "Tu sei qui" e le frecce per i negozi.

**Quando usarlo**: Per il menu principale, breadcrumb, o gruppi di link di navigazione.

## 2. Elementi di testo

### `<h1>` - `<h6>`
**Cosa fanno**: Creano titoli gerarchici. `<h1>` è il più importante, `<h6>` il meno.

**Snippet**:
```html
<h1>Titolo principale della pagina</h1>
  <h2>Capitolo</h2>
    <h3>Sottocapitolo</h3>
```

**Diagramma gerarchia**:
```
h1: 📰 TITOLO GIORNALE
  h2: 📑 Sezione principale
    h3: 📄 Articolo
      h4: 📝 Paragrafo importante
```

**Analogia**: Come i titoli in un libro - dal titolo del libro (h1) ai piccoli sottotitoli nei capitoli (h6).

**Quando usarli**: Usa UN SOLO h1 per pagina. Poi h2 per sezioni, h3 per sottosezioni...

### `<p>`
**Cosa fa**: Definisce un paragrafo di testo.

**Snippet**:
```html
<p>Questo è un paragrafo. Va a capo automaticamente.</p>
<p>Questo è un altro paragrafo, separato dal primo.</p>
```

**Analogia**: Come quando scrivi una lettera e vai a capo per iniziare un nuovo pensiero.

**Quando usarlo**: Ogni volta che hai un blocco di testo. Non usare `<br>` per separare!

### `<em>`
**Cosa fa**: Enfasi leggera - di solito mostra il testo in corsivo.

**Snippet**:
```html
<p>Devi <em>davvero</em> provare questa pizza!</p>
```

**Analogia**: Come quando alzi leggermente la voce su una parola per darle importanza.

**Quando usarlo**: Per parole che vuoi sottolineare senza "urlare".

### `<strong>`
**Cosa fa**: Enfasi forte - di solito mostra il testo in grassetto.

**Snippet**:
```html
<p><strong>Attenzione:</strong> Il negozio chiude alle 18!</p>
```

**Analogia**: Come quando alzi la voce per farti sentire in una stanza rumorosa.

**Quando usarlo**: Avvisi importanti, parole chiave cruciali.

### `<i>` ← NUOVO
**Cosa fa**: Testo in corsivo senza enfasi semantica (diverso da `<em>`).

**Snippet**:
```html
<p>Il ristorante si chiama <i>La Dolce Vita</i></p>
<p>La parola <i>pizza</i> viene dal napoletano</p>
```

**Differenza con `<em>`**:
```
<em>importante</em> → "Questo è IMPORTANTE" (enfasi)
<i>Titanic</i> → "Il film Titanic" (solo stile)
```

**Analogia**: Come quando scrivi a mano il titolo di un libro in corsivo - non per enfasi, ma per convenzione.

**Quando usarlo**: Titoli di opere, parole straniere, termini tecnici.

### `<hr>`
**Cosa fa**: Inserisce una linea orizzontale per separare sezioni.

**Snippet**:
```html
<h2>Primi piatti</h2>
<p>Carbonara, Amatriciana...</p>
<hr>
<h2>Secondi piatti</h2>
<p>Saltimbocca, Coda alla vaccinara...</p>
```

**Visual**:
```
Primi piatti
Carbonara, Amatriciana...
─────────────────────────
Secondi piatti
Saltimbocca...
```

**Analogia**: Come tracciare una riga con il righello sul quaderno per separare gli esercizi.

**Quando usarlo**: Cambio di argomento, separare sezioni visivamente.

### `<ul>` / `<ol>` / `<li>` ← NUOVO
**Cosa fanno**: Creano liste. `<ul>` = puntate, `<ol>` = numerate, `<li>` = ogni voce.

**Snippet**:
```html
<!-- Lista non ordinata -->
<ul>
  <li>Pomodoro</li>
  <li>Mozzarella</li>
  <li>Basilico</li>
</ul>

<!-- Lista ordinata -->
<ol>
  <li>Impasta la pizza</li>
  <li>Stendi l'impasto</li>
  <li>Aggiungi i condimenti</li>
</ol>
```

**Risultato**:
```
• Pomodoro
• Mozzarella  
• Basilico

1. Impasta la pizza
2. Stendi l'impasto
3. Aggiungi i condimenti
```

**Analogia**: `<ul>` è la lista della spesa (ordine non importante), `<ol>` è una ricetta (ordine fondamentale)!

**Quando usarli**: Ingredienti, caratteristiche, menu → `<ul>`. Istruzioni, classifiche, step → `<ol>`.

## 3. Media

### `<img>` ← NUOVO
**Cosa fa**: Inserisce un'immagine nella pagina.

**Snippet**:
```html
<img src="pizza.jpg" alt="Pizza margherita con basilico fresco">

<!-- Con dimensioni -->
<img src="logo.png" alt="Logo pizzeria" width="200" height="100">

<!-- Immagine da web -->
<img src="https://esempio.com/foto.jpg" alt="Descrizione">
```

**Attributi importanti**:
- `src` → Dove si trova l'immagine (percorso)
- `alt` → Descrizione testuale (FONDAMENTALE!)
- `width/height` → Dimensioni (meglio usare CSS)

**Analogia**: È come appendere un quadro al muro, ma con l'etichetta (alt) che spiega cosa c'è nel quadro per chi non può vederlo.

**Quando usarlo**: Foto prodotti, loghi, illustrazioni. Sempre con `alt` descrittivo!

## 4. Form e controlli di input

### `<form>`
**Cosa fa**: Contenitore per raccogliere dati dall'utente da inviare al server.

**Snippet base**:
```html
<form action="/invia-ordine" method="post">
  <!-- campi input qui -->
</form>
```

**Metodi spiegati**:
```
method="get" → Come una cartolina (tutti vedono cosa c'è scritto)
  Esempio URL: pizzeria.it/cerca?tipo=margherita&prezzo=10

method="post" → Come una lettera chiusa (dati privati)
  I dati viaggiano nascosti, perfetto per password!
```

**Analogia**: Un modulo cartaceo da compilare, con l'indirizzo dove spedirlo (action) e il metodo di spedizione (method).

**Quando usarlo**: Login, registrazioni, ordini, contatti - ogni volta che raccogli dati.

### `<label>` ← AGGIORNATO
**Cosa fa**: Etichetta cliccabile per i campi input.

**Metodo 1 - Input dentro label**:
```html
<label>
  Email:
  <input type="email">
</label>
```

**Metodo 2 - Label e input separati (PREFERITO!)**:
```html
<label for="email">Email:</label>
<input id="email" type="email">
```

**Perché il secondo è meglio**:
```css
/* Facile da stilizzare */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
}
```

**Analogia**: 
- Metodo 1: Come un'etichetta attaccata direttamente alla scatola
- Metodo 2: Come un cartellino con un filo che punta alla scatola - più flessibile!

**Quando usarlo**: SEMPRE con ogni input! Migliora accessibilità e area cliccabile.

### `<input>` ← AGGIORNATO
**Cosa fa**: Campo per inserire dati. Cambia comportamento in base al `type`.

**Tipi principali**:

```html
<!-- Testo semplice -->
<input type="text" placeholder="Nome">

<!-- Email (con validazione) -->
<input type="email" placeholder="email@esempio.it">

<!-- Password (nasconde caratteri) -->
<input type="password">

<!-- Numero con limiti -->
<input type="number" min="1" max="99">

<!-- Data ← NUOVO -->
<input type="date">

<!-- Ora -->
<input type="time">

<!-- Checkbox (scelte multiple) -->
<input type="checkbox" name="topping" value="olive"> Olive

<!-- Radio (scelta singola) -->
<input type="radio" name="size" value="media" checked> Media

<!-- File upload -->
<input type="file" accept="image/*">

<!-- Pulsanti -->
<input type="submit" value="Invia">
<input type="reset" value="Cancella">
```

**Date picker visuale**:
```
type="date" mostra:
┌─────────────┐
│ 15/03/2024 📅│
└─────────────┘
   ↓ Click
┌──────────────┐
│ Marzo 2024   │
│ L M M G V S D│
│ . . . . 1 2 3│
│ 4 5 6 7 8 9 .│
└──────────────┘
```

**Attributi utili**:
- `required` → Campo obbligatorio
- `placeholder` → Testo suggerimento
- `pattern` → Validazione con regex
- `min/max` → Limiti per numeri e date

**Quando usarli**: Scegli il type giusto per aiutare l'utente (tastiera numerica per number, calendario per date...).

### `<select>` & `<option>`
**Cosa fanno**: Menu a tendina per scegliere tra opzioni.

**Snippet**:
```html
<label for="pizza">Scegli pizza:</label>
<select id="pizza" name="pizza">
  <option value="">-- Seleziona --</option>
  <option value="margherita">Margherita</option>
  <option value="diavola">Diavola</option>
  <option value="capricciosa" selected>Capricciosa</option>
</select>

<!-- Selezione multipla -->
<select multiple size="3">
  <option>Mozzarella</option>
  <option>Pomodoro</option>
  <option>Basilico</option>
</select>
```

**Analogia**: Come il menu del ristorante - apri, scorri le opzioni, scegli.

**Quando usarlo**: Quando hai 5+ opzioni predefinite. Per 2-4 opzioni, meglio radio button.

### `<textarea>`
**Cosa fa**: Campo di testo multi-riga per testi lunghi.

**Snippet**:
```html
<label for="note">Note per il cuoco:</label>
<textarea id="note" rows="4" cols="50" placeholder="Es: senza cipolla..."></textarea>
```

**Visual**:
```
┌────────────────────────┐
│ Scrivi qui le tue      │
│ note speciali...       │
│                        │
│                        │
└────────────────────────┘
```

**Analogia**: Un foglio di carta più grande accanto ai post-it piccoli (input text).

**Quando usarlo**: Commenti, descrizioni, messaggi - dove serve spazio per scrivere.

### `<fieldset>` & `<legend>`
**Cosa fanno**: Raggruppano campi correlati con un titolo.

**Snippet**:
```html
<fieldset>
  <legend>Metodo di pagamento</legend>
  <input type="radio" name="pay" id="card"> 
  <label for="card">Carta</label>
  
  <input type="radio" name="pay" id="cash">
  <label for="cash">Contanti</label>
</fieldset>
```

**Risultato visuale**:
```
┌─ Metodo di pagamento ──┐
│ ○ Carta               │
│ ○ Contanti            │
└───────────────────────┘
```

**Analogia**: Una cornice con titolo che raggruppa quadri correlati.

**Quando usarlo**: Dati personali, preferenze, metodi pagamento - gruppi logici di campi.

### `<button>`
**Cosa fa**: Pulsante cliccabile più versatile di `<input type="submit">`.

**Snippet**:
```html
<!-- Invia form -->
<button type="submit">
  <span>📤</span> Invia ordine
</button>

<!-- Azione JavaScript -->
<button type="button" onclick="alert('Ciao!')">
  Cliccami!
</button>

<!-- Reset form -->
<button type="reset">Ricomincia</button>
```

**Analogia**: Un pulsante fisico che puoi decorare come vuoi (con icone, testo) non come i pulsanti standard dell'ascensore.

**Quando usarlo**: Sempre al posto di `<input type="submit">` - più flessibile!

## 5. Accessibilità HTML ← NUOVA SEZIONE

### `role="region"`
**Cosa fa**: Dice agli screen reader "questa è una sezione importante con contenuto correlato".

**Snippet base**:
```html
<section role="region" aria-label="Orari di apertura">
  <h2>Quando siamo aperti</h2>
  <p>Lun-Ven: 12:00-23:00</p>
</section>
```

**Cosa sente uno screen reader**:
```
"Regione: Orari di apertura"
"Titolo livello 2: Quando siamo aperti"
"Lunedì-Venerdì: 12-23"
```

**Analogia**: Come mettere un'etichetta braille su una porta - chi non vede sa cosa c'è dentro.

**Quando usarlo**: Per sezioni importanti della pagina che vuoi che siano annunciate.

### `aria-label`
**Cosa fa**: Fornisce un'etichetta personalizzata che sovrascrive il contenuto visibile.

**Snippet**:
```html
<!-- Icona senza testo -->
<button aria-label="Chiudi finestra">✖</button>

<!-- Sezione con titolo poco chiaro -->
<section role="region" aria-label="Promozioni del mese">
  <h2>Hot!</h2>
  <p>Pizza + bibita a 10€</p>
</section>
```

**Analogia**: Come scrivere su un post-it "Cassetto delle posate" invece di affidarsi a quello che si vede dentro.

**Quando usarlo**: 
- Pulsanti con sole icone
- Quando il contenuto visibile non è abbastanza descrittivo

### `aria-labelledby`
**Cosa fa**: Punta a un elemento esistente da usare come etichetta.

**Snippet**:
```html
<!-- Invece di duplicare il testo -->
<section role="region" aria-labelledby="titolo-menu">
  <h2 id="titolo-menu">Il nostro menu</h2>
  <ul>
    <li>Pizza Margherita</li>
    <li>Pizza Marinara</li>
  </ul>
</section>

<!-- Combinare più elementi -->
<section aria-labelledby="main-title subtitle">
  <h2 id="main-title">Offerte</h2>
  <h3 id="subtitle">Solo questo weekend</h3>
</section>
```

**Differenza chiave**:
```
aria-label: "Scrivi tu un nuovo testo"
aria-labelledby: "Usa il testo che c'è già là 👉"
```

**Analogia**: 
- `aria-label` = Scrivere un cartello nuovo
- `aria-labelledby` = Dire "guarda quel cartello che c'è già"

**Quando usarlo**: Quando hai già un titolo/testo perfetto - non duplicare!

## 6. Attributi di supporto & Accessibilità

### Attributi globali frequenti
- **`id`** → Identificatore unico: `<div id="header">`
- **`class`** → Per raggruppare e stilizzare: `<p class="importante">`
- **`title`** → Tooltip al passaggio mouse: `<abbr title="Hypertext Markup Language">HTML</abbr>`
- **`style`** → CSS inline (evita!): `<p style="color: red;">`

### Attributi per link e media
- **`href`** → Destinazione link: `<a href="/home">Home</a>`
- **`src`** → Sorgente file: `<img src="foto.jpg">`
- **`alt`** → Testo alternativo: `<img alt="Gatto che dorme">`
- **`target="_blank"`** → Apre in nuova scheda
- **`rel="noopener"`** → Sicurezza per link esterni

**Pro tip accessibilità**: Un buon `alt` descrive l'immagine a chi non può vederla:
```html
❌ <img src="pizza.jpg" alt="immagine">
❌ <img src="pizza.jpg" alt="pizza pizza pizza">
✅ <img src="pizza.jpg" alt="Pizza margherita con basilico fresco su piatto bianco">
```

























# CSS Vademecum

## 1. Importazione font esterni

### Link Google Fonts
**Cosa fa**: Importa font professionali gratis da Google nel tuo sito.

**Snippet**:
```html
<!-- Nel <head> del tuo HTML -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
```

**Poi nel CSS**:
```css
body {
  font-family: 'Open Sans', Arial, sans-serif;
}
```

**I numeri (400,700,800) significano**:
```
400 = normale
700 = grassetto (bold)
800 = extra grassetto
```

**Analogia**: È come ordinare penne speciali su Amazon invece di usare solo quelle del supermercato. Arrivano via internet e le usi quando vuoi!

**Quando usarlo**: Quando i font di sistema (Arial, Times...) sono troppo noiosi. Attenzione: ogni font rallenta un po' il caricamento!

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

**Analogia**: È come l'altoparlante della scuola: "Attenzione TUTTI gli studenti!" - nessuno escluso.

**Quando usarlo**: Per reset globali all'inizio del CSS. Usalo con parsimonia!

### Selettore di tipo (tag)
**Cosa fa**: Seleziona tutti gli elementi di quel tipo HTML.

**Snippet base**:
```css
/* Tutti i paragrafi */
p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Tutti i link */
a {
  color: blue;
  text-decoration: none;
}
```

**Specializzazioni**:
```css
/* Base per tutti i p */
p { color: black; }

/* Solo p con classe warning */
p.warning { color: red; }

/* Solo p con attributo lang */
p[lang="en"] { font-style: italic; }
```

**Analogia**: Come dire "tutti quelli con la maglia rossa" in palestra. Poi puoi essere più specifico: "tutti con maglia rossa E scarpe bianche".

**Quando usarlo**: Per dare uno stile base coerente a tutti gli elementi dello stesso tipo.

### Selettore di classe `.class`
**Cosa fa**: Seleziona elementi con quella classe, indipendentemente dal tag.

**Snippet**:
```css
.importante {
  background: yellow;
  font-weight: bold;
}
```

**HTML**:
```html
<p class="importante">Paragrafo importante</p>
<div class="importante">Div importante</div>
```

**Analogia**: Come un badge visitor che puoi dare a chiunque entri in azienda - non importa se è cliente, fornitore o dipendente.

**Quando usarlo**: Quando vuoi riutilizzare lo stesso stile su elementi diversi.

### Selettori multipli (senza spazio)
**Cosa fa**: Seleziona elementi che hanno TUTTE le classi specificate.

**Snippet**:
```css
/* Elemento con ENTRAMBE le classi */
.key.black--key {
  background: black;
}
```

**HTML che corrisponde**:
```html
<div class="key"></div>                ❌ NO (solo .key)
<div class="black--key"></div>         ❌ NO (solo .black--key)  
<div class="key black--key"></div>     ✅ SÌ (entrambe!)
```

**Analogia**: Come dire "cerco persone con giacca E cravatta" - non basta uno solo dei due!

**Quando usarlo**: Per stili molto specifici che si applicano solo quando sono presenti più condizioni.

### Pseudo-classi di stato
**Cosa fanno**: Cambiano lo stile in base all'interazione dell'utente.

```css
/* Mouse sopra */
button:hover {
  background: #f0f0f0;
  cursor: pointer;
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

**Visual dei momenti**:
```
Normal: [Bottone]
Hover:  [Bottone] ← 🖱️
Active: [Botto] (premuto)
Focus:  [|Bottone|] (selezionato)
```

**Analogia**: Come un pulsante dell'ascensore che si illumina quando lo tocchi, si preme quando lo schiacci, e resta acceso quando è selezionato.

**Quando usarle**: SEMPRE! Migliorano l'esperienza utente mostrando feedback visivo.

### `:not()` pseudo-classe
**Cosa fa**: Seleziona tutto TRANNE quello che specifichi.

**Snippet**:
```css
/* Tutti i p tranne quelli con classe .no-margin */
p:not(.no-margin) {
  margin-bottom: 1rem;
}

/* Tutti gli input tranne i checkbox */
input:not([type="checkbox"]) {
  width: 100%;
}

/* Tutti i li tranne l'ultimo */
li:not(:last-child) {
  border-bottom: 1px solid #ccc;
}
```

**Analogia**: Come dire "tutti alla festa tranne Mario" - selezioni per esclusione!

**Quando usarlo**: Quando è più facile dire cosa NON vuoi che dire cosa vuoi. Perfetto per eccezioni!

### Pseudo-selettori di tipo
**Cosa fanno**: Selezionano elementi in base alla loro posizione tra fratelli dello stesso tipo.

**Snippet**:
```css
/* Primo span tra i suoi fratelli */
span:first-of-type {
  color: red;
}

/* Ultimo span */
span:last-of-type {
  color: blue;
}

/* Secondo span */
span:nth-of-type(2) {
  font-weight: bold;
}

/* Span in posizioni dispari */
span:nth-of-type(odd) {
  background: #f0f0f0;
}

/* Span in posizioni pari */
span:nth-of-type(even) {
  background: #e0e0e0;
}
```

**Confronto con classi manuali**:
```
SENZA pseudo-selettori (manuale):
HTML: <span class="primo"> <span> <span>
CSS:  .primo { }

CON pseudo-selettori (automatico):
HTML: <span> <span> <span>
CSS:  span:first-of-type { }
```

**Analogia**: Come dire al browser "colora il primo libro rosso sullo scaffale" senza dover mettere un'etichetta su ogni libro!

**Quando usarli**: Liste, righe di tabella alternate, styling del primo/ultimo elemento senza modificare HTML.

### Pseudo-elementi `::before` e `::after`
**Cosa fanno**: Creano elementi "fantasma" che il CSS aggiunge automaticamente.

**Snippet base**:
```css
/* Aggiunge contenuto prima */
.persona::before {
  content: "👑";
}

/* Aggiunge contenuto dopo */
.persona::after {
  content: "👟";
}
```

**HTML**:
```html
<div class="persona">Mario</div>
```

**Risultato visivo**: 👑 Mario 👟

**Utilizzo avanzato con `content: ""`** ← AGGIORNATO:
```css
/* Content vuoto ma NECESSARIO per rendere visibile lo pseudo-elemento */
.elemento::after {
  content: "";  /* Stringa vuota - OBBLIGATORIA! */
  display: block;
  width: 100px;
  height: 20px;
  background: red;
}
```

**Perché `content: ""` è necessario**:
```css
/* ❌ INVISIBILE - manca content */
.box::after {
  background: black;
  width: 100px;
  height: 100px;
}

/* ✅ VISIBILE - ha content anche se vuoto */
.box::after {
  content: "";
  background: black;
  width: 100px;
  height: 100px;
}
```

**Analogia**: È come dire "crea una scatola invisibile" - senza `content` il browser non la crea proprio, con `content: ""` la crea vuota ma presente!

**Quando usarli**: 
- Decorazioni (icone, badge)
- Elementi grafici senza inquinare HTML
- Forme geometriche CSS pure
- Overlay e effetti visivi

## 3. Box Model & Spaziatura

### `margin`
**Cosa fa**: Crea spazio FUORI dall'elemento, come una bolla invisibile.

**Shorthand spiegato**:
```css
/* Un valore = tutti i lati */
margin: 20px;
/* ↑ ↓ ← → tutti 20px */

/* Due valori = verticale | orizzontale */  
margin: 10px 20px;
/* ↑↓ 10px  ←→ 20px */

/* Tre valori = top | lati | bottom */
margin: 10px 20px 30px;
/* ↑ 10px  ←→ 20px  ↓ 30px */

/* Quattro = senso orario */
margin: 5px 10px 15px 20px;
/* ↑ 5  → 10  ↓ 15  ← 20 */
```

**Centrare con auto**:
```css
.card {
  width: 300px;
  margin: 0 auto; /* Magia! Si centra da solo */
}
```

**Come funziona auto**:
```
Container: |                    |
           |  [   Card   ]      | ← margin-right: auto
           |      [   Card   ]  | ← margin-left: auto  
           |    [   Card   ]    | ← Entrambi auto = centro!
```

**Margini negativi**:
```css
h1 {
  margin-top: -10px; /* Si sposta SU di 10px */
}

.overlap {
  margin-left: -20px; /* Si sovrappone a sinistra */
}
```

**Visual margini negativi**:
```
Normale:     [Box1] [Box2]
Negativo:    [Box1[Box2]
                  ↑ si sovrappongono!
```

**Analogia**: 
- Margini positivi = Distanza sociale tra persone
- Margini negativi = Abbracciare qualcuno (invadi lo spazio)
- Auto = Sedersi al centro del divano automaticamente

**Quando usarlo**: Spaziare elementi, centrare con larghezza fissa, creare sovrapposizioni artistiche.

### `padding`
**Cosa fa**: Aggiunge spazio DENTRO l'elemento, tra contenuto e bordo.

**Snippet**:
```css
.button {
  padding: 10px 20px; /* verticale | orizzontale */
  /* Risultato: il testo ha "aria" intorno */
}

.card {
  padding: 2rem; /* Uguale su tutti i lati */
}
```

**Differenza margin vs padding visualizzata**:
```
margin:              padding:
  ___________          ___________
 |           |        |░░░░░░░░░░░|
 | contenuto |        |░contenuto░|
 |___________|        |░░░░░░░░░░░|
     spazio               spazio
    esterno              interno
```

**Analogia**: Il padding è l'imbottitura del cuscino, il margin è lo spazio tra i cuscini sul divano.

**Quando usarlo**: Dare respiro al testo dentro bottoni, card, sezioni.

### `border`
**Cosa fa**: Disegna una cornice attorno all'elemento.

**Sintassi**: `spessore stile colore`

**Snippet varietà**:
```css
/* Solido classico */
.box {
  border: 2px solid black;
}

/* Solo un lato */
.sidebar {
  border-left: 5px solid #007bff;
}

/* Stili diversi */
border: 3px dotted red;    /* • • • • */
border: 2px dashed blue;   /* - - - - */
border: 4px double green;  /* ══════ */

/* Angoli arrotondati */
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* Cerchio perfetto */
.avatar {
  border-radius: 50%;
}
```

### `border-radius` avanzato ← NUOVO
**Cosa fa**: Arrotonda gli angoli, ma puoi controllare ogni angolo separatamente!

**Sintassi completa**:
```css
/* Un valore = tutti gli angoli */
border-radius: 10px;

/* Due valori = top-left/bottom-right | top-right/bottom-left */
border-radius: 10px 5px;

/* Quattro valori = ogni angolo in senso orario */
border-radius: 10px 5px 15px 20px;
/* top-left | top-right | bottom-right | bottom-left */

/* Solo angoli specifici */
border-top-left-radius: 10px;
border-top-right-radius: 5px;
border-bottom-right-radius: 15px;
border-bottom-left-radius: 20px;
```

**Esempio pratico - tasti del piano**:
```css
.key {
  border-radius: 0 0 3px 3px;
  /* Squadrato sopra, arrotondato sotto */
}
```

**Visual**:
```
border-radius: 10px:        border-radius: 0 0 10px 10px:
╭─────────╮                 ┌─────────┐
│         │                 │         │
│         │                 │         │
╰─────────╯                 ╰─────────╯
Tutti arrotondati          Solo sotto arrotondati
```

**Analogia**: Come tagliare gli angoli di una foto - puoi scegliere quali angoli smussare e quanto!

**Quando usarlo**: Bottoni con forme particolari, tab, elementi che sembrano "attaccati" ad altri.

### `box-sizing`
**Cosa fa**: Cambia come vengono calcolate le dimensioni della scatola.

**I due modi**:
```css
/* Default (content-box) */
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Larghezza REALE = 200 + 40 + 10 = 250px! */
}

/* Border-box (migliore!) */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
  /* Larghezza REALE = 200px (tutto incluso) */
}
```

**Visual della differenza**:
```
content-box:           border-box:
┌─────────────┐        ┌─────────────┐
│ 200px cont. │        │   200px     │
│ + 40px pad  │   VS   │   TOTALE    │
│ + 10px bord │        │ (tutto incl)│
│ = 250px TOT │        │             │
└─────────────┘        └─────────────┘
```

**Pattern di reset con inherit** ← AGGIORNATO:
```css
/* Pattern consigliato */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```

**Perché usare inherit invece di border-box diretto**:
```css
/* Se in futuro vuoi cambiare strategia */
.special-component {
  box-sizing: content-box;
}

/* Tutti i figli di .special-component 
   erediteranno automaticamente content-box! */
```

**Analogia**: È come impostare una regola di famiglia - "in questa casa si fa così" - ma se un figlio si trasferisce e cambia regola, i suoi figli seguiranno la nuova regola automaticamente!

**Quando usarlo**: SEMPRE usa il pattern con inherit! È più flessibile del semplice `* { box-sizing: border-box; }`.

### Dimensioni & unità
**Proprietà principali**:
```css
.element {
  width: 300px;           /* Larghezza fissa */
  max-width: 100%;        /* Mai più largo del contenitore */
  min-width: 200px;       /* Mai più stretto di... */
  
  height: 200px;          /* Altezza fissa */
  max-height: 50vh;       /* Max metà viewport */
  min-height: 100px;      /* Min altezza */
}
```

**Unità spiegate**:
```css
/* ASSOLUTE */
width: 200px;      /* Pixel - sempre uguali */

/* RELATIVE */
width: 80%;        /* % del genitore */
font-size: 2rem;   /* 2x dimensione root (32px se base=16px) */
padding: 1em;      /* 1x dimensione font corrente */
height: 50vh;      /* 50% altezza viewport */
width: 100vw;      /* 100% larghezza viewport */
```

**Esempio pratico viewport**:
```
Schermo 1920x1080:
100vw = 1920px
50vh = 540px

Telefono 375x667:
100vw = 375px  
50vh = 333px
```

**Analogia**:
- `px` = Metro fisso da muratore
- `%` = "Riempi l'80% del bicchiere"
- `rem` = "Due volte la misura standard"
- `vh/vw` = "Metà della finestra"

**Quando usarli**:
- `px`: Bordi, icone, spazi minimi
- `%`: Layout fluidi, immagini responsive
- `rem`: Testi, spaziature (rispetta preferenze utente)
- `vh/vw`: Hero sections, modal fullscreen

## 4. Tipografia

### `font-family`
**Cosa fa**: Sceglie il carattere del testo.

**Snippet con fallback**:
```css
body {
  /* Prima scelta, seconda scelta, famiglia generica */
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.code {
  font-family: "Monaco", "Courier New", monospace;
}

.elegant {
  font-family: "Georgia", "Times New Roman", serif;
}
```

**Le famiglie generiche**:
- `serif` → Con grazie (come Times) 📰
- `sans-serif` → Senza grazie (come Arial) 🔤
- `monospace` → Larghezza fissa (come Courier) 💻
- `cursive` → Scrittura a mano ✍️

**Analogia**: Come avere tre penne nella borsa - se la prima non scrive, usi la seconda, se anche quella non va, almeno hai la bic!

**Quando usarlo**: Sempre nel body per coerenza. Famiglie diverse per titoli o codice.

### `font-size`
**Cosa fa**: Imposta la grandezza del testo.

**Le unità nel dettaglio**:
```css
/* PIXEL - Misura fissa */
h1 { font-size: 32px; }
/* Pro: Precisione assoluta
   Contro: Non rispetta preferenze accessibilità */

/* REM - Relativo al root */
h1 { font-size: 2rem; }     /* 32px se root=16px */
/* Pro: Scala con preferenze utente
   Contro: Devi ricordare la base */

/* EM - Relativo al genitore */
.small { font-size: 0.8em; } /* 80% del genitore */
/* Pro: Proporzionale al contesto
   Contro: Può accumularsi se annidato */
```

**Esempio accumulo em**:
```css
.parent { font-size: 20px; }
.child { font-size: 0.8em; }   /* 16px */
.grandchild { font-size: 0.8em; } /* 12.8px! */
```

**Analogia**:
- `px` = Righello fisso
- `rem` = "Due volte la misura standard della fabbrica"
- `em` = "80% della misura di mio padre"

**Quando usarli**:
- `rem`: Titoli, paragrafi, layout (consigliato!)
- `em`: Componenti interni che devono scalare col contesto
- `px`: Dettagli piccolissimi, bordi

### `font-weight`
**Cosa fa**: Controlla lo spessore del carattere.

**Valori comuni**:
```css
.thin     { font-weight: 100; }
.light    { font-weight: 300; }
.normal   { font-weight: 400; } /* o 'normal' */
.medium   { font-weight: 500; }
.semibold { font-weight: 600; }
.bold     { font-weight: 700; } /* o 'bold' */
.extrabold{ font-weight: 800; }
.black    { font-weight: 900; }
```

**Nota**: Non tutti i font hanno tutti i pesi! Se manca, il browser usa il più vicino.

**Analogia**: Come scegliere penne con punte diverse - dalla 0.3mm superfine alla 1.0mm per titoli evidenti.

**Quando usarlo**: Titoli (700-900), testo normale (400), note piccole (300).

### `font-style`
**Cosa fa**: Rende il testo corsivo o normale.

**Valori**:
```css
em { font-style: italic; }    /* Corsivo vero del font */
.fake { font-style: oblique; } /* Inclina se non c'è italic */
.reset { font-style: normal; } /* Torna dritto */
```

**Differenza italic vs oblique**:
```
Normal:  ABC
Italic:  ABC (disegnato corsivo)
Oblique: ABC (solo inclinato)
```

**Analogia**: 
- `italic` = Scrittura in corsivo elegante
- `oblique` = Piegare il foglio mentre scrivi

**Quando usarlo**: Citazioni, parole straniere, enfasi leggera.

### `text-align`
**Cosa fa**: Allinea il testo orizzontalmente.

**Tutti i valori**:
```css
.left    { text-align: left; }    /* Default in italiano */
.right   { text-align: right; }   /* Prezzi, date */
.center  { text-align: center; }  /* Titoli */
.justify { text-align: justify; } /* Come giornali */
```

**Visual degli allineamenti**:
```
left (default):        right:
|Testo qui            |            Testo qui|
|Altra riga           |           Altra riga|

center:               justify:
|    Testo qui       ||Testo  ben distribuito|
|   Altra riga       ||su    tutta   la  riga|
```

**Analogia**: Come allineare il testo su Word - icone familiari!

**Quando usarlo**:
- `center`: Titoli, CTA, hero text
- `right`: Numeri in tabelle, prezzi
- `justify`: Testi lunghi tipo articoli

### `letter-spacing`
**Cosa fa**: Aggiunge o toglie spazio tra le lettere.

**Snippet**:
```css
h1 {
  letter-spacing: 0.15px;  /* Leggermente più largo */
}

.logo {
  letter-spacing: 0.2em;   /* S P A Z I A T O */
}

.compressed {
  letter-spacing: -0.05em; /* Piùcompresso */
}
```

**Visual dell'effetto**:
```
Normal:     TITOLO
Positivo:   T I T O L O  
Negativo:   TITOLO
```

**Analogia**: Come quando scrivi su carta millimetrata - puoi usare una casella per lettera o stringerle insieme.

**Quando usarlo**: 
- Loghi e titoli eleganti (positivo)
- Testi molto grandi per migliorare leggibilità
- Mai esagerare su testi lunghi!

## 5. Colori & Sfondi

### `color`
**Cosa fa**: Colora il testo (e i bordi degli elementi inline).

**Tutti i formati**:
```css
/* Nome */
color: red;

/* HEX (esadecimale) */
color: #ff0000;     /* Rosso pieno */
color: #f00;        /* Shorthand */

/* RGB */
color: rgb(255, 0, 0);      /* Rosso */
color: rgba(255, 0, 0, 0.5); /* Rosso 50% trasparente */

/* HSL (tinta, saturazione, luminosità) */
color: hsl(0, 100%, 50%);     /* Rosso */
color: hsla(0, 100%, 50%, 0.5); /* Rosso 50% trasparente */
```

**Come leggere HSL**:
```
hsl(0, 100%, 50%)
    ↑   ↑     ↑
    |   |     └── Luminosità (0%=nero, 100%=bianco)
    |   └──────── Saturazione (0%=grigio, 100%=vivace) 
    └──────────── Tinta (0-360° sulla ruota colori)
```

**Analogia**: 
- HEX = Codice del colore in fabbrica
- RGB = Mischiare tre vernici (rosso/verde/blu)
- HSL = "Voglio un rosso (0°), molto vivace (100%), né troppo chiaro né scuro (50%)"

**Quando usarli**:
- HEX: Colori precisi da brand
- RGBA: Quando serve trasparenza
- HSL: Per creare variazioni di uno stesso colore

### Calcolare colori complementari
**Cosa fa**: Trova il colore opposto sulla ruota dei colori.

**Con HEX**:
```
Colore: #3A5F7D
Complementare:
FF - 3A = C5
FF - 5F = A0  
FF - 7D = 82
Risultato: #C5A082
```

**Con RGB**:
```
Colore: rgb(58, 95, 125)
Complementare:
255 - 58 = 197
255 - 95 = 160
255 - 125 = 130
Risultato: rgb(197, 160, 130)
```

**Visual della ruota**:
```
     🔴 Rosso
   🟠   🟣
 🟡       🔵
   🟢 💚
Verde  Blu-verde

Complementari sono opposti!
```

**Analogia**: Come il negativo di una foto - ogni colore diventa il suo opposto!

**Quando usarlo**: Creare contrasto forte, design accattivanti, call-to-action che risaltano.

### `background-color`
**Cosa fa**: Colora lo sfondo dell'elemento.

**Snippet con contrasto**:
```css
.warning {
  background-color: #fff3cd;  /* Giallo chiaro */
  color: #856404;            /* Marrone scuro */
  padding: 1rem;
}

.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
```

**Tip accessibilità - Contrasto minimo**:
```
Testo normale: 4.5:1
Testo grande:  3:1

Tool: WebAIM Contrast Checker
```

**Analogia**: Come dipingere il muro prima di appendere il quadro - assicurati che il quadro si veda bene!

**Quando usarlo**: Badge, card, sezioni alternate, stati (success/warning/error).

### `background-image: url()`
**Cosa fa**: Mette un'immagine come sfondo.

**Snippet completo**:
```css
.hero {
  background-image: url("hero.jpg");
  background-size: cover;      /* Copre tutto, può tagliare */
  background-position: center; /* Centra l'immagine */
  background-repeat: no-repeat;/* Non ripetere */
  background-attachment: fixed;/* Effetto parallasse */
}
```

**I valori di background-size**:
```css
/* cover = Copre tutto, può tagliare */
background-size: cover;

/* contain = Mostra tutta l'immagine */
background-size: contain;

/* Misure precise */
background-size: 100% auto;
```

**Visual cover vs contain**:
```
Container quadrato, immagine rettangolare:

cover:          contain:
┌─────────┐     ┌─────────┐
│ ╔═════╗ │     │  ┌───┐  │
│ ║ IMG ║ │     │  │IMG│  │
│ ╚═════╝ │     │  └───┘  │
└─────────┘     └─────────┘
  (taglia)       (spazi vuoti)
```

**Analogia**: 
- `cover` = Poster che copre tutto il muro (può dover tagliare i bordi)
- `contain` = Foto che entra tutta nella cornice (può lasciare bordi)

**Quando usarlo**: Hero sections, card decorative, sfondi texture.

### `linear-gradient()`
**Cosa fa**: Crea una sfumatura tra due o più colori.

**Sintassi e esempi**:
```css
/* Base: dall'alto al basso */
background: linear-gradient(red, blue);

/* Con direzione */
background: linear-gradient(to right, red, blue);
background: linear-gradient(45deg, red, blue);

/* Multi colore con stop */
background: linear-gradient(
  to bottom,
  red 0%,
  yellow 50%,
  green 100%
);

/* Esempio realistico */
.sunset {
  background: linear-gradient(
    to bottom,
    #ff6b6b 0%,    /* Rosso */
    #ffd93d 50%,   /* Giallo */
    #6c5ce7 100%   /* Viola */
  );
}
```

**Direzioni visualizzate**:
```
to bottom (default)    to right          45deg
     ↓                    →               ↗
█ rosso █            █   █   █         █   █
█       █            r   g   b         r   b
█  blu  █            o   i   l         o   l
                     s   a   u         s   u
```

**Analogia**: Come sfumare due colori con l'aerografo - parti da un colore e arrivi all'altro gradualmente.

**Quando usarlo**: Bottoni moderni, sfondi hero, effetti overlay su immagini.

### `repeating-linear-gradient()`
**Cosa fa**: Crea pattern ripetuti con gradienti.

**Sintassi base**:
```css
/* Strisce orizzontali */
background: repeating-linear-gradient(
  0deg,                    /* Direzione (verticale) */
  #333 0%,                 /* Colore 1 */
  #333 10%,                /* Fine colore 1 */
  #666 10%,                /* Inizio colore 2 */
  #666 20%                 /* Fine colore 2 - poi ripete */
);
```

**Pattern complessi (sovrapposizione)**:
```css
/* Due gradienti sovrapposti per creare griglie */
background: 
  repeating-linear-gradient(
    0deg,                      /* Verticale */
    transparent 0%,
    transparent 5%,
    rgba(0,0,0,0.1) 5%,
    rgba(0,0,0,0.1) 10%
  ),
  repeating-linear-gradient(
    90deg,                     /* Orizzontale */
    white 0%,
    white 5%,
    #f0f0f0 5%,
    #f0f0f0 10%
  );
```

**Come funzionano le percentuali nei gradienti**:
```
IMPORTANTE: Le % si riferiscono alla DIREZIONE del gradiente!

0deg (verticale ↓): % dell'ALTEZZA
90deg (orizzontale →): % della LARGHEZZA

Elemento 100px × 200px:
- 10% a 0deg = 20px (10% di 200px altezza)
- 10% a 90deg = 10px (10% di 100px larghezza)
```

**Visual del pattern**:
```
Gradiente singolo:        Due gradienti sovrapposti:
█░█░█░█░█░               ╬═╬═╬═╬═╬
█░█░█░█░█░               ╬═╬═╬═╬═╬
█░█░█░█░█░               ╬═╬═╬═╬═╬
Strisce                  Griglia!
```

**Analogia**: Come sovrapporre due fogli trasparenti con righe - uno orizzontale e uno verticale - per creare carta millimetrata!

**Quando usarlo**: Pattern geometrici, sfondi texture, simulare materiali (tessuti, griglie metalliche).

### Proprietà shorthand `background`
**Cosa fa**: Combina tutte le proprietà background in una riga.

**Sintassi**:
```css
/* Tutto insieme */
.element {
  background: url("img.jpg") center/cover no-repeat fixed #f0f0f0;
  /*          immagine      pos/size   repeat    attach  colore */
}

/* Equivale a: */
.element {
  background-image: url("img.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #f0f0f0;
}
```

**Analogia**: Come ordinare un caffè: invece di dire "voglio un caffè, con latte, senza zucchero, in tazza grande", dici "cappuccino grande amaro".

**Quando usarlo**: Quando imposti più proprietà background insieme. Più conciso!

## 6. Layout & Display

### `display`
**Cosa fa**: Decide come un elemento si comporta nel layout.

**Valori principali**:
```css
/* Block - nuovo "paragrafo" */
.block {
  display: block;
  /* Occupa tutta la larghezza, va a capo */
}

/* Inline - nella riga */
.inline {
  display: inline;
  /* Sta nel testo, ignora width/height */
}

/* Inline-block - ibrido */
.inline-block {
  display: inline-block;
  /* Nella riga MA accetta dimensioni */
}

/* Flex - contenitore flessibile */
.flex-container {
  display: flex;
  /* I figli si allineano in fila */
}

/* None - sparisce! */
.hidden {
  display: none;
  /* Via dal layout E dalla lettura */
}
```

**Visual delle differenze**:
```
block:
[████ Elemento 1 ████]
[████ Elemento 2 ████]

inline:
Testo [el1] e [el2] continuano...

inline-block:
Testo [▪▪] [▪▪▪▪] continua...
       ↑     ↑ hanno dimensioni!

flex:
[┌─┐┌──┐┌───┐] ← figli in fila
```

**Display flex su elementi inline**:
```css
/* Anche <p> può diventare flex! */
p {
  display: flex;
  justify-content: space-between;
}
/* <p>Sinistra <span>Destra</span></p> */
```

**Analogia**:
- `block` = Scatoloni uno sopra l'altro
- `inline` = Parole in una frase
- `inline-block` = Mattoncini Lego in fila
- `flex` = Mensola con divisori mobili

**Quando usarli**:
- `block`: Sezioni, paragrafi separati
- `inline`: Parti di testo, icone nel testo
- `inline-block`: Bottoni, badge
- `flex`: TUTTO il layout moderno!

### `position`
**Cosa fa**: Controlla come un elemento si posiziona nella pagina.

**Tutti i valori**:

#### `position: static` (default)
```css
.element {
  position: static;
  /* Comportamento normale, segue il flusso */
  top: 100px;  /* ❌ IGNORATO! */
  left: 50px;  /* ❌ IGNORATO! */
}
```

**Analogia**: Come persone in fila al supermercato - ognuno sta al suo posto naturale, non puoi dire "spostati 3 metri a destra".

**Quando usarlo**: È il default, spesso non lo scrivi. Utile per "resettare" un elemento.

#### `position: relative`
```css
.shifted {
  position: relative;
  top: 10px;    /* Giù di 10px */
  left: 20px;   /* Destra di 20px */
  /* Lo spazio originale resta occupato! */
}
```

**Visual**:
```
Prima:              Dopo:
┌───┐ ┌───┐        ┌───┐ ┌───┐
│ A │ │ B │   →    │ A │ │   │  ← spazio vuoto!
└───┘ └───┘        └───┘ └───┘
                           ┌───┐
                           │ B │  ← spostato ma occupa ancora il posto
                           └───┘
```

**Analogia**: Spostare una sedia lasciando il segno di dove stava - il "fantasma" rimane!

#### `position: absolute`
```css
.popup {
  position: absolute;
  top: 20px;
  right: 20px;
  /* Esce dal flusso, si posiziona nel contenitore relative più vicino */
}
```

**Il trucco relative + absolute**:
```css
.container {
  position: relative;  /* "Io sono il punto zero!" */
}

.child {
  position: absolute;  /* "Mi posiziono rispetto al container!" */
  top: 10px;
  left: 10px;
}
```

**Valori negativi con absolute** ← NUOVO:
```css
.element {
  position: absolute;
  left: -18px;  /* Esce a sinistra del contenitore! */
  top: -10px;   /* Esce sopra il contenitore! */
}
```

**Visual posizionamento negativo**:
```
Container normale:          Con left: -18px:
┌──────────────┐           ┌──────────────┐
│              │         ┌─┤              │
│   ┌────┐     │         │█│              │
│   │elem│     │         └─┤              │
│   └────┘     │           └──────────────┘
└──────────────┘           Elemento esce!
```

**Analogia**: Il sistema solare - il sole (relative) è il punto di riferimento, i pianeti (absolute) orbitano rispetto a lui!

#### `position: fixed`
```css
.cookie-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  /* Resta fisso anche scrollando */
}
```

**Analogia**: Un adesivo sul vetro della finestra - anche se scorri la pagina, lui resta sempre lì!

#### `position: sticky`
```css
.nav {
  position: sticky;
  top: 0;
  /* Normale finché non scrolli, poi resta incollato */
}
```

**Analogia**: Un post-it che diventa magnetico quando sta per cadere - segue il contenuto finché non rischia di uscire dallo schermo!

### `z-index`
**Cosa fa**: Controlla l'ordine di sovrapposizione degli elementi (asse Z).

**Sintassi**:
```css
.back {
  z-index: 1;      /* Più indietro */
}

.middle {
  z-index: 10;     /* Nel mezzo */
}

.front {
  z-index: 100;    /* Davanti a tutti */
}

.behind {
  z-index: -1;     /* Dietro anche al contenuto normale */
}
```

**IMPORTANTE**: Funziona solo con position diverso da static!
```css
/* ❌ NON funziona */
.element {
  z-index: 999;
  /* position: static (default) */
}

/* ✅ Funziona */
.element {
  z-index: 999;
  position: relative; /* o absolute, fixed, sticky */
}
```

**Visual 3D**:
```
     ↗️ Z-axis (profondità)
    /
   /  z-index: 100 ┌───┐
  /                │ C │ (sopra)
 /   z-index: 10  ┌─│─┐─┘
/                │ B │ (mezzo)
/   z-index: 1  ┌─│─┐─┘  
                │ A │ (sotto)
───────────────└───┘────→ X-axis
```

**Analogia**: Come un mazzo di carte - il valore più alto sta sopra, quello più basso sotto. I valori negativi vanno sotto il tavolo!

**Quando usarlo**:
- Modal/popup (z-index: 9999)
- Menu dropdown (z-index: 1000) 
- Tooltip (z-index: 10)
- Elementi decorativi dietro (z-index: -1)

### `float`
**Cosa fa**: Fa "galleggiare" gli elementi a sinistra o destra, permettendo al testo di scorrergli intorno.

**Sintassi base**:
```css
.image {
  float: left;
  margin-right: 20px;
}

.sidebar {
  float: right;
  width: 300px;
}
```

**Trasformazione magica**:
```
Prima (elementi block normali):
┌────────────────┐
│ Elemento 1     │
└────────────────┘
┌────────────────┐
│ Elemento 2     │
└────────────────┘

Dopo float: left:
┌──┐┌──┐┌──┐┌──┐
│E1││E2││E3││E4│  ← Tutti in fila!
└──┘└──┘└──┘└──┘
```

### `overflow: hidden` per contenere float ← NUOVO
**Cosa fa**: Quando usi `float`, il contenitore "collassa". `overflow: hidden` lo forza a contenere gli elementi flottanti.

**Il problema del float**:
```css
/* ❌ PROBLEMA - contenitore collassa */
.container {
  background: red;
  /* altezza diventa 0! */
}

.child {
  float: left;
  width: 100px;
  height: 100px;
}
```

**La soluzione con overflow**:
```css
/* ✅ SOLUZIONE - contenitore contiene i float */
.container {
  background: red;
  overflow: hidden;  /* Magia! */
  /* ora ha l'altezza giusta */
}
```

**Visual del problema e soluzione**:
```
Senza overflow: hidden:          Con overflow: hidden:
┌─────────────────────┐          ┌─────────────────────┐
│ Container (h: 0!)   │          │ Container           │
└─────────────────────┘          │ ┌───┐┌───┐┌───┐    │
┌───┐┌───┐┌───┐                  │ │ F ││ F ││ F │    │
│ F ││ F ││ F │ ← Float          │ └───┘└───┘└───┘    │
└───┘└───┘└───┘   escono!        └─────────────────────┘
                                 Container li contiene!
```

**Altri metodi clearfix**:
```css
/* Metodo moderno con pseudo-elemento */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Metodo semplice */
.container {
  overflow: auto; /* o hidden */
}
```

**Analogia**: È come un recinto magico - i float sono pecore che tendono a scappare, `overflow: hidden` è il recinto che le tiene dentro!

**Quando usarlo**: 
- Contenitori con elementi float
- Alternative moderne: usa Flexbox o Grid invece di float!

### `vertical-align`
**Cosa fa**: Allinea elementi inline verticalmente sulla stessa riga.

**Valori utili**:
```css
img { vertical-align: middle; }    /* Centro riga */
sup { vertical-align: super; }     /* Apice */
sub { vertical-align: sub; }       /* Pedice */
.icon { vertical-align: -2px; }    /* Aggiustamento fine */
```

**Visual dell'allineamento**:
```
baseline:  Testo │_│ ← si allinea alla base
middle:    Testo ├─┤ ← si allinea al centro  
top:       Testo ┌─┐ ← si allinea in alto
```

**Analogia**: Come allineare quadri di diverse dimensioni su una mensola - puoi allinearli in basso, al centro o in alto.

**Quando usarlo**: Icone accanto al testo, formule matematiche, badge inline.

### Flexbox
**Cosa fa**: Crea layout flessibili in una direzione (riga o colonna).

**Setup base**:
```css
.container {
  display: flex;              /* Attiva flex */
  flex-direction: row;        /* → orizzontale (default) */
  flex-wrap: wrap;           /* A capo se non c'è spazio */
  gap: 1rem;                 /* Spazio tra elementi */
}
```

**Proprietà principali del container**:

```css
/* DIREZIONE */
flex-direction: row;          /* → */
flex-direction: column;       /* ↓ */
flex-direction: row-reverse;  /* ← */

/* A CAPO */
flex-wrap: nowrap;   /* Stringe tutto */
flex-wrap: wrap;     /* Va a capo */

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
```

**Visual space-between vs space-around**:
```
space-between:     space-around:
|■     ■     ■|    | ■   ■   ■ |
 ↑           ↑       ↑ ↑ ↑ ↑ ↑
 no spazio          spazi uguali
```

**Centratura perfetta 2D**:
```css
.center-perfect {
  display: flex;
  justify-content: center; /* → centro */
  align-items: center;     /* ↓ centro */
  min-height: 100vh;
}
```

**Analogia**: 
- Container = Mensola IKEA modulare
- Direction = Orientamento mensola (orizzontale/verticale)  
- Justify = Come distribuire i libri lungo la mensola
- Align = Se allineare i libri in alto/centro/basso

**Quando usarlo**: Navigation bar, card galleries, sidebar + content, centrare qualsiasi cosa!

### Centratura con `margin: 0 auto`
**Cosa fa**: Centra orizzontalmente elementi block con larghezza definita.

**Snippet**:
```css
.container {
  width: 800px;    /* DEVE avere larghezza */
  max-width: 90%;  /* Responsive */
  margin: 0 auto;  /* Magia centra */
}
```

**Come funziona auto**:
```
Viewport 1200px, elemento 800px:
Spazio disponibile = 1200 - 800 = 400px

margin-left: auto = 200px ←┐
margin-right: auto = 200px ←┴ Diviso equamente!
```

**Analogia**: Come centrare un tavolo in una stanza - il margine "auto" calcola automaticamente la stessa distanza da entrambe le pareti.

**Quando usarlo**: Container principali, card singole, modali - tutto ciò che ha larghezza fissa.

### Nascondere elementi
**Due metodi con effetti diversi**:

```css
/* METODO 1: display none */
.completely-hidden {
  display: none;
  /* • Sparisce dal layout
     • No spazio occupato  
     • Screen reader lo ignora
     • Non riceve click/focus */
}

/* METODO 2: visibility hidden */
.invisible {
  visibility: hidden;
  /* • Diventa invisibile
     • MANTIENE lo spazio
     • Screen reader potrebbe leggerlo
     • No click ma può avere focus */
}
```

**Visual della differenza**:
```
Normale:           display:none      visibility:hidden
[A] [B] [C]        [A] [C]           [A] [  ] [C]
                   B sparito         B invisibile
```

**Casi d'uso**:
- `display: none`: Menu mobile chiuso, modal nascosti, tab non attivi
- `visibility: hidden`: Placeholder per animazioni, mantenere layout stabile

**Analogia**:
- `display: none` = Rimuovere la sedia dalla stanza
- `visibility: hidden` = Coprire la sedia con un telo invisibile

## 7. Valori speciali CSS

### `inherit`
**Cosa fa**: Dice all'elemento "copia il valore dal tuo genitore".

**Snippet**:
```css
.parent {
  color: blue;
  font-size: 20px;
}

.child {
  color: inherit;      /* Sarà blu come il padre */
  font-size: inherit;  /* Sarà 20px come il padre */
}
```

**Esempio pratico con box-sizing**:
```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;  /* Tutti copiano da html */
}
```

**Analogia**: Come dire ai figli "fate come fa papà" - se il papà parla italiano, anche i figli parlano italiano. Se cambia lingua, cambiano tutti!

**Quando usarlo**:
- Reset globali che devono propagarsi
- Componenti che devono adattarsi al contesto
- Evitare di ripetere valori

### Altri valori speciali utili
```css
/* initial - torna al valore di default del browser */
.reset {
  color: initial;  /* Nero, il default */
}

/* unset - cancella il valore (inherit se ereditabile, initial altrimenti) */
.mixed {
  all: unset;  /* Reset totale */
}

/* currentColor - usa il colore del testo corrente */
.border-text-color {
  border: 2px solid currentColor;  /* Bordo dello stesso colore del testo */
}
```

## 8. Effetti & Trasformazioni

### `box-shadow`
**Cosa fa**: Aggiunge ombre agli elementi per dare profondità.

**Sintassi completa**:
```css
box-shadow: x y blur spread colore;
/*          ↗ ↓  ☁️    📏    🎨  */

/* Esempi pratici */
.card {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  /*          → ↓ soft   trasparente */
}

.hover-lift:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transform: translateY(-2px);
}

/* Ombre multiple */
.neo {
  box-shadow: 
    5px 5px 10px #bebebe,    /* Ombra scura */
    -5px -5px 10px #ffffff;  /* Luce */
}

/* Ombra interna */
.inset {
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}
```

**Visual dei parametri**:
```
Standard:          Inset:
    ┌───┐          ┌───┐
    │   │╱         │░░░│
    └───┘          └───┘
      ╱ ombra       interno
```

**Valori popolari**:
```css
/* Elevazioni Material Design */
.elevation-1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
.elevation-2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16); }
.elevation-3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19); }
```

**Analogia**: Come mettere una lampada sopra un oggetto - più è vicina più l'ombra è netta, più è lontana più è sfocata.

**Quando usarlo**: Card, bottoni hover, modal, qualsiasi cosa voglia "alzarsi" dalla pagina.

### `filter: blur()`
**Cosa fa**: Sfoca l'elemento come una foto fuori fuoco.

**Snippet**:
```css
/* Sfocatura leggera */
.background {
  filter: blur(5px);
}

/* Effetto "vetro smerigliato" */
.glass {
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
}

/* Altri filtri utili */
.image {
  filter: brightness(1.2) contrast(1.1);
  filter: grayscale(100%);
  filter: sepia(60%);
}
```

**Analogia**: Come guardare attraverso:
- `blur(2px)` = Occhiali leggermente sporchi
- `blur(10px)` = Vetro della doccia
- `blur(20px)` = Nebbia fitta

**Quando usarlo**: Sfondi dietro modal, effetti artistici, glassmorphism trendy.

### `transform: rotate()`
**Cosa fa**: Ruota elementi in 2D o 3D.

**Tutti i transform utili**:
```css
/* Rotazione */
.tilt { transform: rotate(5deg); }
.upside { transform: rotate(180deg); }

/* Scala */
.big { transform: scale(1.5); }
.small { transform: scale(0.8); }

/* Traslazione */
.right { transform: translateX(50px); }
.up { transform: translateY(-20px); }

/* Combinati */
.card:hover {
  transform: rotate(-2deg) scale(1.05);
}

/* 3D */
.flip {
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}
```

**Visual rotazioni**:
```
0deg:    45deg:   90deg:   180deg:
┌───┐      ◆      ┌─┐       ───
│   │             │ │       │ │
└───┘             │ │       ┌─┐
                  └─┘
```

**Perché i gradi negativi?**:
- Positivo = senso orario ↻
- Negativo = senso antiorario ↺

**Analogia**: 
- `rotate` = Girare una foto sul tavolo
- `scale` = Zoom con la lente
- `translate` = Spostare senza toccare

**Quando usarlo**: Hover effects, animazioni, card che si girano, loghi inclinati.

### `overflow: hidden`
**Cosa fa**: Nasconde tutto ciò che esce dai bordi dell'elemento.

**Valori**:
```css
/* Nasconde l'eccesso */
.clip {
  overflow: hidden;
}

/* Mostra scrollbar */
.scroll {
  overflow: scroll; /* Sempre */
  overflow: auto;   /* Solo se serve */
}

/* Solo un asse */
.horizontal {
  overflow-x: auto;
  overflow-y: hidden;
}
```

**Visual overflow**:
```
hidden:            visible:         scroll:
┌─────┐            ┌─────┐          ┌─────┐▲
│Lorem│            │Lorem│ipsum     │Lorem│▼
│ipsum│            │ipsum│dolor     │ipsum│
└─────┘            └─────┘          └─────┘
  ✂️ tagliato        esce             scrollbar
```

**Trucco border-radius + overflow**:
```css
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden; /* Taglia l'immagine in cerchio! */
}
```

**Analogia**: Come una cornice per foto - mostra solo quello che sta dentro, il resto viene tagliato.

**Quando usarlo**: Immagini circolari, card con immagini, container con dimensioni fisse, slider, contenere float!

## 8. Responsive Design

### Media Queries
**Cosa fanno**: Applicano stili diversi in base alle caratteristiche del dispositivo.

**Sintassi base**:
```css
/* Mobile First (consigliato) */
.card {
  width: 100%; /* Mobile default */
}

@media (min-width: 768px) {
  .card {
    width: 50%; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .card {
    width: 33.333%; /* Desktop */
  }
}
```

### Operatore `and` per range specifici ← ESPANSO
```css
/* Solo tablet (769px - 1199px) */
@media (min-width: 769px) and (max-width: 1199px) {
  .element {
    font-size: 18px;
  }
}

/* Esempio dal piano */
@media (max-width: 1199px) and (min-width: 769px) {
  #piano { width: 675px; }
  .keys { width: 633px; }
}
```

**Come funziona `and`**:
```
Condizione 1: min-width: 769px (schermo almeno 769px)
     AND
Condizione 2: max-width: 1199px (schermo massimo 1199px)
     =
Range: 769px ← → 1199px
```

**Visual dei range**:
```
📱 Mobile     📱 Tablet    💻 Desktop   🖥️ Large
0 ──── 768 ──── 1199 ──── ∞
   📱      🎯 RANGE 🎯      🖥️
```

**Analogia**: Come dire "accetta persone tra 18 E 65 anni" - servono ENTRAMBE le condizioni!

**Breakpoint comuni**:
```css
/* Smartphone */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Wide screen */
@media (min-width: 1440px) { }
```

**Altri tipi di media query**:
```css
/* Orientamento */
@media (orientation: landscape) { }

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: white;
  }
}

/* Stampa */
@media print {
  .no-print { display: none; }
}
```

**IMPORTANTE - Proporzioni responsive**:
```css
/* ❌ SBAGLIATO - stesse proporzioni ovunque */
h1 { font-size: 2.5em; }

/* ✅ CORRETTO - proporzioni diverse per device */
h1 { font-size: 2.5em; }  /* Desktop */

@media (max-width: 768px) {
  h1 { font-size: 1.5em; }  /* Mobile - proporzione diversa! */
}
```

**Analogia**: Come avere vestiti diversi per occasioni diverse - non è solo "rimpicciolire" ma adattare le proporzioni! Un bambino non è un adulto in miniatura!

**Quando usarle**: 
- Layout che cambiano tra mobile/desktop
- Font size responsive con proporzioni appropriate
- Nascondere/mostrare elementi per device

## 9. Interazione & Accessibilità CSS

### `accent-color`
**Cosa fa**: Colora checkbox, radio button e altri controlli nativi.

**Snippet**:
```css
:root {
  accent-color: #007bff;
}

/* O per elementi specifici */
input[type="checkbox"] {
  accent-color: #28a745;
}
```

**Prima e dopo**:
```
Default:          Con accent-color:
☐ ☑ (grigio)      ☐ ☑ (blu brand!)
○ ● (grigio)      ○ ● (blu brand!)
```

**Analogia**: Come dare a tutti i dipendenti penne con l'inchiostro del colore aziendale invece delle bic blu standard.

**Quando usarlo**: Sempre! È un tocco di classe che unifica i form col tuo brand.

### `appearance: none`
**Cosa fa**: Rimuove lo stile nativo del browser dai controlli form.

**Snippet custom select**:
```css
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  /* Ora puoi stilizzarlo! */
  background: white;
  border: 2px solid #ddd;
  padding: 0.5rem 2rem 0.5rem 1rem;
  background-image: url("arrow-down.svg");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
}
```

**Analogia**: Come togliere la carrozzeria di serie da un'auto per montare un kit personalizzato.

**Quando usarlo**: Quando i controlli nativi stonano col design. Ricorda di mantenere l'accessibilità!

### Gestione outline (focus)
**Cosa fa**: Mostra quale elemento è selezionato (importante per keyboard users!).

**Best practices**:
```css
/* MAI fare questo! */
* { outline: none; } /* ❌ PESSIMO per accessibilità */

/* Personalizza invece */
button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.5);
}

/* O migliora l'outline */
a:focus {
  outline: 2px dashed currentColor;
  outline-offset: 4px;
}
```

**Focus vs Focus-visible**:
```css
:focus { }         /* Sempre (mouse + keyboard) */
:focus-visible { } /* Solo keyboard (più pulito) */
```

**Analogia**: L'outline è come le luci di emergenza in teatro - brutte ma salvano vite! Puoi cambiarle con luci più belle, ma mai rimuoverle del tutto.

**Quando usarlo**: 
- Personalizza per matchare il brand
- Usa `:focus-visible` per esperienza più pulita
- MAI rimuovere senza alternativa visibile!
