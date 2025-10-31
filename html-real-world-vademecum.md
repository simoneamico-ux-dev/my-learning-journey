# HTML Real World Vademecum

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
