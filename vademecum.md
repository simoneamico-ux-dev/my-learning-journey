# HTML Vademecum

## 1. Struttura base HTML

### `<!DOCTYPE html>`

* **Cosa fa**: comunica al browser che il documento usa lo standard **HTML 5**.
* **Snippet**

  ```html
  <!DOCTYPE html>
  ```
* **Analogia**: cartello all’ingresso che specifica la lingua parlata.
* **Quando usarlo**: sempre come primissima riga di ogni pagina.

---

### `<html lang="en">`

* **Cosa fa**: avvolge tutto il markup; l’attributo `lang` indica la lingua principale.
* **Snippet**

  ```html
  <html lang="en">
  ```
* **Analogia**: etichetta “scaffale dei libri in inglese”.
* **Quando usarlo**: subito dopo `<!DOCTYPE>`.

---

### `<head>`

* **Cosa fa**: contiene metadati, link a CSS/JS, titolo, ecc.
* **Snippet**

  ```html
  <head> … </head>
  ```
* **Analogia**: la quarta di copertina con le info editoriali.
* **Quando usarlo**: sempre, prima del `<body>`.

---

### `<meta charset="utf-8">`

* **Cosa fa**: imposta la codifica caratteri in **UTF‑8**.
* **Snippet**

  ```html
  <meta charset="utf-8">
  ```
* **Analogia**: scegliere la tastiera corretta prima di scrivere.
* **Quando usarlo**: dentro `<head>`, immediatamente dopo l’apertura.

---

### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

* **Cosa fa**: dice ai browser mobile di **adattare** la pagina alla larghezza reale del dispositivo e di mostrarla allo zoom 100 %.

* **Perché serve**

  * **Senza** questo tag lo smartphone carica la versione “desktop” larga \~980 px, la rimpicciolisce per farla entrare: testo minuscolo, scroll laterale, media‑query ignorate.
  * **Con** il tag la pagina parte già a scala naturale e il CSS responsive funziona.

* \*\*Decodifica \*\***`content`**

  * `width=device-width` → usa la **larghezza effettiva** del device.
  * `initial-scale=1.0` → parti al **100 %** senza zoom.

* **Analogia**: è come dire al telefono: «Questo foglio è già in formato A4, non ridimensionarlo—mostralo così com’è!».

* **Snippet**

  ```html
  <!-- Inserisci nel <head> subito dopo <meta charset> -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

* **Quando usarlo**: in **ogni pagina** destinata anche a dispositivi mobili.

---

### `<title>`

* **Cosa fa**: definisce il titolo mostrato nella scheda del browser e nei risultati di ricerca.
* **Snippet**

  ```html
  <title>My page</title>
  ```
* **Analogia**: titolo stampato sulla copertina di un libro.
* **Quando usarlo**: dentro `<head>`, uno per pagina.

---

### `<body>`

* **Cosa fa**: racchiude tutto ciò che l’utente vede e con cui interagisce.
* **Snippet**

  ```html
  <body> … </body>
  ```
* **Analogia**: le pagine che effettivamente leggi in un libro.
* **Quando usarlo**: subito dopo il `<head>`.

---

### `<main>`

* **Cosa fa**: identifica la parte centrale e unica del contenuto.
* **Snippet**

  ```html
  <main> … </main>
  ```
* **Analogia**: la trama principale del romanzo, distinta da note a margine.
* **Quando usarlo**: dentro `<body>`, una sola volta per pagina.

---

### `<section>`

* **Cosa fa**: raggruppa contenuti correlati in blocchi logici.
* **Snippet**

  ```html
  <section> … </section>
  ```
* **Analogia**: i capitoli che suddividono un libro.
* **Quando usarlo**: per separare parti tematiche di `<main>`.

---

### `<article>`

* **Cosa fa**: contenuto autonomo e riutilizzabile (post, news, card).
* **Snippet**

  ```html
  <article> … </article>
  ```
* **Analogia**: un articolo di rivista che ha senso anche da solo.
* **Quando usarlo**: dove serve un blocco indipendente.

---

### `<div>` – Divisione generica

* **Cosa fa**: crea un contenitore privo di significato semantico, utile per raggruppare elementi ai fini di stile o script.
* **Snippet**

  ```html
  <div class="menu">
    …contenuto…
  </div>
  ```
* **Analogia**: una **scatola di cartone neutra** in cui metti oggetti diversi per ordinarli o spostarli insieme.
* **Quando usarlo**: quando non esiste un tag semantico più specifico (`section`, `article`, `header`, ecc.) ma hai bisogno di applicare **stili CSS** o manipolazioni JS a un gruppo di elementi.

---

## 2. Elementi di testo

### `<h1>`–`<h6>`

* **Cosa fanno**: definiscono intestazioni gerarchiche da più a meno importanti.
* **Snippet**

  ```html
  <h1>Titolo principale</h1>
  <h2>Sottotitolo</h2>
  ```
* **Analogia**: titoli, capitoli e sottocapitoli di un libro.
* **Quando usarli**: per dare struttura semantica; un solo `<h1>` per pagina.

---

### `<p>`

* **Cosa fa**: racchiude un paragrafo di testo.
* **Snippet**

  ```html
  <p>Questo è un paragrafo.</p>
  ```
* **Analogia**: blocco di testo in un articolo di giornale.
* **Quando usarlo**: ogni volta che serve separare concetti in paragrafi.

---

### `<em>`

* **Cosa fa**: enfatizza leggermente il testo; mostrato di solito in corsivo.
* **Snippet**

  ```html
  Mi piace <em>davvero</em> il caffè.
  ```
* **Analogia**: pronunciare una parola con voce più decisa.
* **Quando usarlo**: per sottolineare parole chiave senza gridare.

---

### `<strong>`

* **Cosa fa**: indica enfasi forte/importanza; di default in grassetto.
* **Snippet**

  ```html
  <strong>Attenzione:</strong> testo importante.
  ```
* **Analogia**: parlare a voce alta per farsi sentire.
* **Quando usarlo**: avvisi, parole cruciali, CTA.

---

### `<hr>` – Horizontal Rule

* **Cosa fa**: inserisce una linea orizzontale tematica che separa sezioni di contenuto.
* **Snippet**

  ```html
  <h2>Dolci</h2>
  <hr>
  <p>Cheesecake, crostate, …</p>
  ```
* **Analogia**: una **riga tracciata con il righello** su un foglio per dividere due paragrafi o argomenti.
* **Quando usarlo**: per indicare un cambio di argomento o per dividere visivamente parti di una pagina (es. tra intestazione e contenuto, o tra liste nel progetto *Cafe Menu*).

---

## 5. Form e controlli di input

### `<form action="…" method="…">`

* **Cosa fa**: contenitore che raccoglie dati da inviare a un server.

* **Snippet base**

  ```html
  <form action="/invia" method="post"> … </form>
  ```

* **Analogia**: una **busta pre‑indirizzata**; dentro ci infili i moduli, poi la spedisci all’indirizzo (`action`) col metodo di invio (`method`).

* **Metodi principali**

  * **`get`** — i dati vengono aggiunti all’URL come *query string* (`?nome=Paolo&eta=30`). Utile per ricerche, filtri o casi in cui **non modifichi** dati sul server. *Analogia: cartolina aperta — tutti possono leggere ciò che è scritto fuori.*
  * **`post`** — i dati viaggiano nel **corpo** della richiesta HTTP, invisibili nell’URL. Perfetto per login, registrazioni, upload o operazioni che **creano/cambiano** dati. *Analogia: lettera sigillata — il contenuto resta privato dentro la busta.*
  * **`dialog`** *(HTML 5.2)* — non invia dati al server; serve a chiudere un elemento `<dialog>` con i valori inseriti. *Analogia: bigliettino interno che chiude la finestra anziché spedirsi.*

* **Quando usarlo**: per qualsiasi raccolta di dati. Scegli **`get`** se vuoi un URL condivisibile e i dati non sono sensibili; preferisci **`post`** se trasmetti credenziali, grosse quantità di testo o modifichi lo stato sul server.\*\*: per qualsiasi raccolta di dati. Scegli **`get`** se vuoi un URL condivisibile e i dati non sono sensibili; preferisci **`post`** se trasmetti credenziali, grosse quantità di testo o modifichi lo stato sul server.

---

### `<label>`

* **Cosa fa**: associa un testo descrittivo a un campo di input.
* **Snippet**

  ```html
  <label for="email">Email:
    <input id="email" type="email">
  </label>
  ```
* **Analogia**: un **post‑it** attaccato sopra una casella di compilazione che dice cosa inserire.
* **Quando usarlo**: sempre; migliora accessibilità e area cliccabile.

---

### `<input>` – campo singolo

* **Cosa fa**: crea un controllo interattivo; il comportamento cambia con l’attributo `type`.

* **Tipi principali & snippet**

  * **Text (default)**

    ```html
    <input type="text" placeholder="Nome" required>
    ```

    *Analogia*: riga bianca su cui scrivere a penna.

  * **Email** *(convalidato dal browser)*

    ```html
    <input type="email" placeholder="nome@email.com">
    ```

    *Analogia*: casella che accetta solo indirizzi con @ come timbro postale valido.\*

  * **Password** *(caratteri nascosti)*

    ```html
    <input type="password" pattern="[a-z0-5]{8,}">
    ```

    *Analogia*: diario con lucchetto – vedi solo puntini.

  * **Number (min / max)**

    ```html
    <input type="number" min="13" max="120">
    ```

    *Analogia*: rotella numerica che blocca valori fuori scala.\*

  * **Radio** *(scelta unica dentro stesso ******************************************************`name`******************************************************)*

    ```html
    <input type="radio" name="genere" value="rock" checked>
    ```

    *Analogia*: pulsanti della vecchia autoradio – uno alla volta si abbassa.\*

  * **Checkbox** *(scelte multiple)*

    ```html
    <input type="checkbox" name="gusto" value="cioccolato" checked>
    ```

    *Analogia*: caselle da spuntare su un questionario cartaceo.\*

  * **File** *(selettore di file locali)*

    ```html
    <input type="file" accept="image/*">
    ```

    *Analogia*: bottone “Sfoglia” per infilare una foto nella busta.\*

  * **Submit / Reset / Button**

    ```html
    <input type="submit" value="Invia">
    <input type="reset"  value="Annulla">
    ```

    *Analogia*: pulsanti “Spedisci” o “Strappa e ricomincia”.\*

* **Attributi utili**

  * **`placeholder`** — testo guida grigio che sparisce quando inizi a digitare.

    ```html
    <input type="text" placeholder="Inserisci il nome">
    ```

  * **`required`** — rende il campo obbligatorio; il form non si invia se resta vuoto.

    ```html
    <input type="email" required>
    ```

  * **`pattern`** — convalida l’input con una **espressione regolare (regex)**.

  1. **Esempio “username” solo lettere (3‑10 caratteri)**

     ```html
     <!-- Valido: "Luca", "marco", "Elena"  –  Non valido: "Lu", "Mario123" -->
     <input type="text" pattern="[A-Za-z]{3,10}" placeholder="Username (3‑10 lettere)">
     ```

     * `[A-Za-z]` → qualsiasi lettera maiuscola o minuscola
     * `{3,10}`  → minimo 3, massimo 10 caratteri

  2. **Esempio “password sicura”** – almeno **8** caratteri, **1 maiuscola, 1 minuscola, 1 cifra e 1 simbolo speciale**

     ```html
     <!-- Valido: "Estate2025!"  –  Non valido: "password", "Pa55" -->
     <input type="password"
            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}"
            placeholder="Password (8+ char, Aa1!)">
     ```

     * `(?=.*[a-z])` → almeno una lettera minuscola
     * `(?=.*[A-Z])` → almeno una lettera maiuscola
     * `(?=.*\d)` → almeno una cifra
     * `(?=.*[!@#$%^&*])` → almeno un simbolo tra quelli indicati
     * `.{8,}` → lunghezza minima 8 caratteri

* **Quando usarlo**: ogni volta che vuoi una regola di formato pre‑invio (e risparmi validazioni JS).

* **`min`**\*\* / \*\***`max`** — limite inferiore e superiore per `type="number"`, `date`, ecc. / `max`\*\* — limite inferiore e superiore per `type="number"`, `date`, ecc.

  ```html
  <input type="number" min="0" max="100">
  ```

  * **`checked`** — pre‑seleziona una `checkbox` o `radio`.

    ```html
    <input type="checkbox" checked>
    ```
  * **`value`** — imposta un valore di default da inviare al server.

    ```html
    <input type="text" value="Paolo">
    ```

---

### `<select>` & `<option>`

* **Cosa fanno**: menu a tendina per una scelta tra opzioni predefinite.

* **Snippet base**

  ```html
  <label>Ruolo:
    <select name="ruolo" id="ruolo">
      <option value="studente">Studente</option>
      <option value="lavoratore">Lavoratore</option>
    </select>
  </label>
  ```

* **Analogia**: **menu del ristorante**: apri, sfogli e scegli un piatto.

* **Attributi utili**

  * **`multiple`** — trasforma il `<select>` in **lista multipla**: l’utente può scegliere più voci tenendo premuto **Ctrl/Cmd** o **Shift**.

    ```html
    <select name="lingue" multiple>
      <option>Italiano</option>
      <option>Inglese</option>
      <option>Spagnolo</option>
    </select>
    ```

    *Quando usarlo*: quando serve permettere **più di una selezione** (es. competenze, tag, preferenze).

  * **`size`** — imposta **quante righe** del menu restano sempre visibili. Con `size="1"` (default) è un drop‑down; con valori `>1` diventa una **lista a scorrimento**.

    ```html
    <select size="5">
      …
    </select>
    ```

    *Quando usarlo*: liste lunghe o insieme a `multiple`, per mostrare **molte opzioni subito**.

---

### `<textarea>`

* **Cosa fa**: campo multi‑riga per testo lungo.

* **Snippet**

  ```html
  <textarea rows="4" cols="30" placeholder="Scrivi qui..."></textarea>
  ```

* **Analogia**: un **foglio di carta** più grande accanto ai campi singola riga.

* **Attributi chiave**

  * **`rows`** — quante **righe visibili** di testo; controlla l’altezza iniziale. Esempio: `rows="10"` rende l’area alta dieci righe.
  * **`cols`** — larghezza in **caratteri** mostrati senza scroll orizzontale. Esempio: `cols="50"` ≈ cinquanta caratteri di larghezza.

* **Quando usarlo**: commenti, descrizioni, messaggi lunghi. Aumenta `rows` e `cols` per più spazio di scrittura, diminuiscili per note brevi o layout compatti.

---

### `<fieldset>` & `<legend>`

* **Cosa fanno**: raggruppano logicamente più controlli sotto un titolo comune, creando un blocco semantico all’interno del form.

* **Snippet**

  ```html
  <fieldset>
    <legend>Preferenze di contatto</legend>
    <label><input type="checkbox" value="email" checked> Email</label>
    <label><input type="checkbox" value="sms"> SMS</label>
  </fieldset>
  ```

* **Analogia**: una **cornice** con intestazione che delimita una sezione specifica su un modulo cartaceo.

* **Quando usarlo**

  * Per suddividere un form in **sottosezioni** coerenti (es. *Dati personali*, *Preferenze*, *Pagamento*).
  * Per gruppi di **radio** o **checkbox** correlate: il testo in `<legend>` funge da domanda comune, migliorando l’**accessibilità** (gli screen‑reader annunciano il gruppo).
  * Quando vuoi applicare lo **stesso bordo o spaziatura** a un insieme di controlli con una sola regola CSS.

* **Attributi utili**

  * **`disabled`** — disabilita *tutti* i controlli all’interno del gruppo.

    ```html
    <fieldset disabled>
      …
    </fieldset>
    ```
  * **`name`** *(HTML 5)* — etichetta opzionale per identificare il gruppo in script o stile.

---

### `<button>` (versatile)

* **Cosa fa**: crea un pulsante, può eseguire submit o script.
* **Snippet**

  ```html
  <button type="submit">Invia modulo</button>
  <button type="button" onclick="alert('Ciao')">Clicca me</button>
  ```
* **Analogia**: pulsante fisico che, una volta premuto, fa accadere qualcosa (spedire, cancellare, lanciare azione JS).

---

## 6. Attributi di supporto & Accessibilità

### Attributi globali frequenti

* **`id`** — identificatore univoco di un elemento.
* **`class`** — etichetta multipla per raggruppare elementi.
* **`title`** — tooltip testuale al passaggio del mouse.
* **`style`** — stili inline (usa con moderazione).

### Attributi per link e media

* **`target=\"_blank\"`** — apre il link in nuova scheda.
* **`rel=\"noopener noreferrer\"`** — sicurezza/performance per link esterni.
* **`alt`** — testo alternativo per immagini.
* **`src`** — percorso della risorsa.
* **`href`** — destinazione del collegamento.

---

# CSS Vademecum

## 1. Selettori fondamentali

### Selettore universale `*`

* **Cosa fa**: applica la regola a **tutti** gli elementi della pagina.
* **Snippet**

  ```css
  * {
    box-sizing: border-box;
  }
  ```
* **Analogia**: l’annuncio del preside: «**A tutti gli studenti!**» — raggiunge ogni persona nell’istituto.
* **Quando usarlo**: per reset globali (margini, padding) o per impostare proprietà comuni come `box-sizing`.

---

### Selettore di tipo (tag)

* **Cosa fa**: colpisce tutti gli elementi di **un determinato tag HTML** (es. `p`, `h1`, `img`).

* **Snippet base**

  ```css
  /* stile di base per TUTTI i paragrafi */
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  ```

* **Esempio di specializzazione**

  1. **Mediante classe (********`.`****\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*)**

     ```css
     /* regola base per tutti i paragrafi */
     p { line-height: 1.6; }

     /* paragrafo con classe extra */
     p.alert {
       color: red;
       font-weight: bold;
     }
     ```

     ```html
     <p>Testo normale…</p>
     <p class="alert">Attenzione! Messaggio importante.</p>
     ```
  2. **Mediante attributo (********`[]`****\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*)**

     ```css
     /* evidenzia solo i link esterni */
     a[target="_blank"] {
       color: orange;
     }
     ```

     ```html
     <a href="/internal">link interno</a>
     <a href="https://example.com" target="_blank">link esterno</a>
     ```
  3. **Mediante ID (********`#`****\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*)** *(raro, uno per pagina)*

     ```css
     #hero {
       font-size: 2rem;
       text-align: center;
     }
     ```

     ```html
     <h1 id="hero">Titolo principale</h1>
     ```

* **Analogia**: inviare una circolare a **tutti gli studenti di matematica**: tutti ricevono le stesse istruzioni, ma puoi consegnare un foglio diverso a un gruppo con badge arancione (classe), a chi porta un cartellino “esterno” (attributo) o al rappresentante con cartellino unico (ID).
  \*\*: inviare una circolare a **tutti gli studenti di matematica**: tutti ricevono le stesse istruzioni, ma il prof può dare un foglio integrativo a un singolo gruppo.

* **Quando usarlo**:

  1. Per stabilire **stili di base coerenti** (spaziature, font, colore) su un tag usato frequentemente.
  2. Come “fondamenta” da cui partire per poi **raffinare** tramite classi o ID in casi particolari, riducendo codice duplicato.

---

### Selettore di classe `.class`

* **Cosa fa**: seleziona gli elementi che possiedono l’attributo `class="nome"` nell’HTML.
* **Snippet di esempio**

  ```css
  .menu {
    max-width: 500px;
    margin: 0 auto;
  }
  ```

  ```html
  <div class="menu"> … </div>
  ```
* **Analogia**: appiccicare la stessa etichetta su scatole diverse per spostarle come gruppo.
* **Quando usarlo**: quando devi riutilizzare lo stesso stile su **più elementi sparsi**.

  * Il **punto (********`.`****\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*)** davanti al nome indica che stai riferendoti a una **classe** definita nell’HTML.

---

### Pseudo‑classi di stato

* **Cosa fanno**: modificano lo stile di un elemento in base a **momenti interattivi**.

  * **`:hover`** — quando il puntatore è sopra l’elemento.

    ```css
    a:hover { color: brown; }
    ```
  * **`:active`** — mentre l’elemento è premuto/cliccato.

    ```css
    button:active { transform: scale(.97); }
    ```
  * **`:visited`** — link che l’utente ha già aperto.

    ```css
    a:visited { color: grey; }
    ```
  * **`:focus`** — elemento che ha il focus da tastiera o touch.

    ```css
    input:focus { outline: 2px solid #8ab2ce; }
    ```

* **Analogia**: luci LED che cambiano colore quando **ci passi vicino**, **premi** il pulsante, **segnali** qualcosa già visto o **selezioni** con il telecomando.

* **Quando usarle**: feedback visivi per link, bottoni e campi input; migliorano l’accessibilità per chi naviga da tastiera.

## 2. Box Model & Spaziatura

### `margin`

* **Cosa fa**: crea spazio **esterno** attorno alla scatola (fuori da padding e border).

* **Shorthand – esempi pratici**

  ```css
  margin: 20px;                 /* tutti i lati 20px */
  margin: 10px 5px;             /* 10px sopra/sotto | 5px sinistra/destra */
  margin: 10px 15px 20px;       /* top | left‑right | bottom */
  margin: 5px 10px 15px 20px;   /* top | right | bottom | left (orario) */
  ```

* \*\*Centratura con \*\***`auto`**

  ```css
  .card {
    width: 200px;
    margin: 0 auto;   /* 0 = nessuno spazio verticale  |  auto = browser divide lo spazio orizzontale a metà ⇒ centro */
  }
  ```

  *Spiegazione*: `0` azzera i margini **top** e **bottom**; `auto` chiede al browser di calcolare margini **left** e **right** uguali, così l’elemento si posiziona esattamente al centro orizzontale.

* **Margini negativi** (sovrapposizione controllata)

  ```css
  h1 {
    margin-top: -10px; /* spinge il titolo 10px verso l’alto sovrapponendolo al contenuto precedente */
  }
  ```

* **Analogia**: come regolare la **distanza fra quadri** su una parete: puoi separarli, avvicinarli, spostarli solo su un lato o sovrapporli leggermente.

* **Quando usarlo**

  1. Distanziare sezioni, card, immagini senza cambiare la dimensione interna.
  2. Centrare blocchi a larghezza fissa con `margin: auto`.
  3. Creare sovrapposizioni o layout particolari con margini negativi.

---

### `padding`

* **Cosa fa**: aggiunge spazio **interno** fra contenuto e bordo della scatola.
* **Snippet**

  ```css
  .item {
    padding: 10px 20px; /* top‑bottom | left‑right */
  }
  ```
* **Analogia**: l’imbottitura di un cuscino che protegge il ripieno.
* **Quando usarlo**: dare “respiro” a testo/icone all’interno di bottoni, card o sezioni.

---

### `border` (e varianti)

* **Cosa fa**: disegna una linea attorno alla scatola.
* **Snippet**

  ```css
  img {
    border: 2px solid #333;
  }

  .marker {
    border-left: 5px double red; /* solo lato sinistro, stile double */
  }
  ```
* **`border-radius`** per angoli arrotondati

  ```css
  .badge { border-radius: 8px; }
  ```
* **Analogia**: cornice di un quadro; puoi scegliere spessore, materiale e forma degli angoli.
* **Quando usarlo**: evidenziare, separare, creare bottoni o card con angoli tondi.

---

### `box-sizing`

* **Valori**

  * `content-box` *(default)* — `width`/`height` includono **solo** il contenuto; padding e border **si sommano** → la scatola reale diventa più grande.
  * `border-box` — `width`/`height` **comprendono** padding + border; il contenuto si restringe per restare dentro la misura indicata.

* **Perché è importante**

  ```css
  /* Senza box-sizing (content-box) */
  .card {
    width: 200px;   /* contenuto 200px */
    padding: 20px;  /* ➜ larghezza reale 200 + 40 (padding) + 4 (border) = 244px */
    border: 2px solid;
  }

  /* Con border-box */
  .card {
    box-sizing: border-box;
    width: 200px;   /* reale 200px totali */
    padding: 20px;  /* 20+20 padding + 2+2 border = 44px ➜ 200−44 = 156px di sola area contenuto */
  }
  ```

  Senza `border-box` il layout “gonfia” e può rompere griglie o overflow.

* **Reset globale consigliato**

  ```css
  *,
  *::before,
  *::after {
    box-sizing: border-box;  /* tutti, inclusi gli pseudo‑elementi, calcolano le misure con border‑box */
  }
  ```

  **Perché anche ********************************************************************************************`*::before`******************************************************************************************** e ********************************************************************************************`*::after`********************************************************************************************?**
  `::before` e `::after` sono piccole "scatole" generate dal CSS (ornamenti, icone, badge). Se non le includi, tornano al valore di default `content-box` e **possono sfalsare larghezze e altezze** rispetto agli elementi reali. Applicando `border-box` a **tutto**, mantieni un calcolo coerente per ogni dimensione.

* **Analogia**: ordinare una pizza “30 cm compresi cartone e tovaglioli” (`border-box`) invece che “30 cm SOLO pizza, poi aggiungi scatola e tovaglioli dopo” (`content-box`).\*\*: ordinare una pizza “30 cm compresi cartone e tovaglioli” (`border-box`) invece che “30 cm SOLO pizza, poi aggiungi scatola e tovaglioli dopo” (`content-box`).

* **Quando usarlo**: quasi sempre `border-box` per layout prevedibili; lascia `content-box` solo in casi specifici (es. calcoli di grafici a barre).

---

### Dimensioni & unità

* **Proprietà principali**

  * `width` / `height` — impongono una dimensione specifica.
  * `max-width` / `min-width` — fissano limiti elastici.

* **Unità comuni e quando sceglierle**

  1. **`px`** (pixel) — misura assoluta.
     *Usa quando vuoi elementi con dimensione fissa e precisa* (es. bordo 2 px, icone 24 px).
  2. **`%`** (percentuale) — relativo al **contenitore padre**.
     *Perfetto per layout fluidi*: `width: 80%` riempie l’80 % dello spazio disponibile.
  3. **`vw`**\*\* / ****`vh`****\*\* — “viewport width/height”: 1 vw = 1 % della larghezza finestra, 1 vh = 1 % dell’altezza.
     ****\*Utile per hero banner alti metà schermo (**********\*\*\*\*************\*\*\*\*************\*\*\*\*************\*\*\*\*************\*\*\*\*************\*\*\*\*************\*\*\*\*************\*\*\*\*************\*\*\*\*************\*\*\*\*****\*\*\*\*`50vh`**) o per spazi full‑width a tutta finestra (\*\*`100vw`\*\*).\*

* **Snippet**

  ```css
  .menu {
    width: 80%;        /* fluido, 80% del wrapper */
    max-width: 500px;  /* ma mai oltre 500px */
  }

  .hero {
    height: 50vh;      /* metà altezza viewport */
  }
  ```

* **Analogia**: fissare la larghezza di una valigia (`width`) ma dire al portabagagli: “Non superare 500 mm” (`max-width`) e “Riempila all’80 % dello spazio disponibile” (`%`). Se poi vuoi che la valigia sia alta metà del bagagliaio, useresti `vh`.

* **Quando usarli**

  * `px` per elementi che non devono ridimensionarsi (icon, bordo, spazi minimi).
  * `%` per colonne, immagini responsive dentro un contenitore.
  * `vw/vh` per sezioni che si rapportano all’intera finestra (hero, overlay a pieno schermo).

---

## 3. Tipografia

### `font-family`

* **Cosa fa**: stabilisce il set di caratteri da usare per il testo.
* **Snippet di base**

  ```css
  body {
    font-family: "Helvetica Neue", Arial, sans-serif;
  }
  ```

  * Prima metti un font preferito (se installato).
  * Poi un secondo simile come fallback.
  * Infine la famiglia generica (`serif`, `sans-serif`, `monospace`).
* **Analogia**: scegliere tre penne in tasca: la preferita, una simile di riserva e, se finiscono l’inchiostro, il gessetto della lavagna.
* **Quando usarlo**: subito nel `body` per coerenza globale; usa famiglie di sistema se vuoi prestazioni migliori.

---

### `font-size`

* **Cosa fa**: imposta la dimensione del testo.

* **Unità più usate e loro scopi**

  * **`px`** – pixel: misura **assoluta**.
    *Usa quando serve massima precisione* (es. icone 24 px, border‑radius 3 px, e-mail template dove la coerenza è cruciale).

  * **`rem`** – root‑em: relativo al `font-size` del tag **`html`**. 1 rem = dimensione base (16 px di default).
    *Ideale per layout scalabili*: se l’utente ingrandisce le dimensioni di sistema, l’intera pagina cresce in proporzione.  Rispetta automaticamente le impostazioni di accessibilità dell'utente, scalando proporzionalmente

  * **`em`** – relativo al font-size del **contenitore padre**.
    *Perfetto per componenti annidati* (badge, pulsanti) che devono seguire il contesto senza rompere la gerarchia globale.

  * Per quanto riguarda l'accessibilità quando un utente imposta una dimensione del carattere più grande nelle impostazioni di accessibilità del suo smartphone, il browser:

    * Con **px**: ignora completamente le preferenze dell'utente, il testo rimane sempre della dimensione fissa impostata
    * Con **em**: può creare problemi di scalabilità composta (gli elementi figli ereditano e moltiplicano la dimensione)
    * Con **rem**: rispetta automaticamente le impostazioni di accessibilità dell'utente, scalando proporzionalmente

* **Snippet riepilogativo**

  ```css
  html { font-size: 16px; }        /* 1rem = 16px */

  h1   { font-size: 2rem; }        /* 32px, scala con preferenze utente */
  p    { font-size: 1rem; }        /* 16px */

  .badge {
    font-size: 0.875em;            /* 87.5% del paragrafo che la contiene */
  }

  .icon {
    width: 24px; height: 24px;     /* px per precisione assoluta */
  }
  ```

* **Analogia**:
  • **`rem`** = righello appoggiato a terra: misuri sempre dallo stesso zero.
  • **`em`** = elastico ancorato al genitore: se il genitore si allunga, l’elastico segue.
  • **`px`** = mattoncino Lego: dimensione fissa che non cambia.

* **Quando usarli**

  1. **`rem`** per titoli, paragrafi, layout globale (accessibilità).
  2. **`em`** per componenti interni che devono adattarsi al contenitore (badge, menu, tooltip).
  3. **`px`** per dettagli che non devono crescere/ridursi (icone, hairline borders, layout di stampa).

---

### `font-weight`

* **Cosa fa**: imposta lo spessore del carattere.
* **Valori comuni**: `400` (normale), `700` (bold). Alcuni font hanno pesi intermedi (`500`, `600`).
* **Snippet**

  ```css
  strong   { font-weight: 700; }
  .thin    { font-weight: 300; }
  ```
* **Analogia**: usare un pennarello più spesso per enfatizzare parole.
* **Quando usarlo**: evidenziare titoli, bottoni, parti importanti; evita di abusarne o perdi gerarchia.

---

### `font-style`

* **Cosa fa**: controlla l’inclinazione del carattere.
* **Valori principali**

  * `normal` – testo diritto (default).
  * `italic` – usa la versione corsiva disegnata dal font.
  * `oblique` – inclina artificialmente il font se la variante italic non esiste.
* **Snippet**

  ```css
  em       { font-style: italic; }  /* enfasi semantica */
  .slanted { font-style: oblique 10deg; } /* inclinazione custom */
  ```
* **Analogia**: scrivere a penna normale (`normal`), usare calligrafia corsiva (`italic`), o inclinare il foglio sotto la penna (`oblique`).
* **Quando usarlo**:
  • `italic` per citazioni, termini stranieri, nomi di opere.
  • `oblique` solo quando il font non offre italic o per effetti grafici particolari.

---

### `text-align`

* **Cosa fa**: allinea il testo orizzontalmente nel contenitore.

* **Valori chiave** *(“LTR” = scrittura **Left‑to‑Right**: italiano, inglese; “RTL” = **Right‑to‑Left**: arabo, ebraico)*

  * `left`   – inizio riga (default in LTR)
  * `right`  – fine riga (utile per prezzi, date; default in RTL)
  * `center` – centrato (titoli, call‑to‑action)
  * `justify` – distribuisce il testo fino ai margini (stile rivista)
  * `start` / `end` – allinea dinamicamente all’inizio/fine in base alla direzione del testo (LTR o RTL)

* **Snippet**\*\*

  ```css
  h1   { text-align: center; }
  .price { text-align: right; }
  p.long { text-align: justify; }
  footer { text-align: end; } /* destro in LTR, sinistro in RTL */
  ```

* **Analogia**: decidere dove stampare una frase su un foglio: all’inizio riga, al centro, alla fine, o distribuire il testo fino ai margini.

* **Quando usarlo**:
  • `center` per titoli/banner.
  • `right`/`end` per importi numerici o note marginali.
  • `justify` per blocchi di testo lunghi in stile editoriale.
  • `start`/`left` per la maggior parte del body text.

---

## 4. Colori & Sfondi

### `color`

* **Cosa fa**: imposta la tinta del **testo** e dei bordi inline dell’elemento.
* **Formati supportati** (con quando preferirli)

  ```css
  h2 { color: #ff5733; }   /* HEX – conciso, palette web */
  p  { color: rgb(0,128,255); }          /* RGB – facile da copiare da tool */
  .muted { color: rgba(0,0,0,0.6); }     /* RGBA – include opacità */
  .accent { color: hsl(200,80%,50%); }   /* HSL – intuitivo per generare varianti */
  ```

  * **HEX** (`#RRGGBB`) – rapido, tutti i browser.
  * **RGB** (`rgb(0,128,255)`) – valori 0‑255; chiaro quando lavori con canali.
  * **RGBA** (`rgba(…, alpha)`) – aggiunge trasparenza 0‑1.
  * **HSL** (`hsl(hue, sat, light)`) – più leggibile per creare toni e ombre.
* **Analogia**: scegliere l’inchiostro della penna prima di scrivere.
* **Quando usarlo**: ogni volta che vuoi cambiare il testo; usa RGBA o HSL se hai bisogno di variazioni/opacità.

---

### `background-color`

* **Cosa fa**: colora lo **sfondo** di un elemento.
* **Snippet con buon contrasto**

  ```css
  .badge {
    background-color: #ffd700; /* giallo intenso */
    color: #000;              /* testo nero per contrasto leggibile */
  }
  ```

  *Perché c’è anche `color: #000`?*
  Quando cambi lo sfondo potresti rendere il testo poco leggibile; specificando `color` assicuri un contrasto adeguato (accessibilità WCAG).
* **Analogia**: dipingere il muro dietro a un quadro e scegliere anche il colore della cornice perché risalti.
* **Quando usarlo**: evidenziare badge, card, righe alternate di tabelle; ricordati di verificare il contrasto testo‑sfondo.

---

### `background-image: url()`

* **Cosa fa**: applica un’immagine come sfondo.
* **Snippet esteso**

  ```css
  body {
    background-image: url("beans.jpg");

    /* Evita ripetizione dell’immagine */
    background-repeat: no-repeat;

    /* Copre l’intera area adattandosi, ritagliando se serve */
    background-size: cover;

    /* Fissa l’immagine al centro (default: top‑left) */
    background-position: center;
  }
  ```

  * **`background-repeat: no-repeat`** → mostra una sola copia dell’immagine, niente piastrellatura.
  * **`background-size: cover`** → ridimensiona l’immagine finché l’area è piena: può tagliare i bordi ma non lascia spazi vuoti.
  * **`background-position`** (es. `center`, `top right`, `50% 20%`) controlla dove ancorare l’immagine.
* **Analogia**: tappezzare una parete con un singolo poster gigante che copre tutto senza lasciar bordi, centrato perfettamente.
* **Quando usarlo**: texture singole, foto hero full‑width; usa `background-size: contain` se vuoi far entrare tutta l’immagine senza tagli.

---

### `linear-gradient()`

* **Cosa fa**: genera un gradiente di colore (sfumatura) come immagine di sfondo.

* **Sintassi base**

  ```css
  /* direzione + tappe colore */
  background: linear-gradient(to bottom, red, yellow);
  ```

  * **Direzione**: `to bottom` (default), `to right`, `45deg`, `135deg`, ecc.
  * **Color stops**: puoi avere **da 2 a N** colori; facoltativamente aggiungi percentuali (`red 0%`, `blue 70%`).

* **Esempi pratici**

  ```css
  /* 3 colori, dall’alto verso il basso */
  .marker {
    background: linear-gradient(rgb(122,74,14), rgb(245,62,113), rgb(162,27,27));
  }

  /* Angolo diagonale 45° con stop precisi */
  .btn {
    background: linear-gradient(45deg, #00f 0%, #0ff 50%, #0f0 100%);
  }
  ```

* **Analogia**: passare il pennello sfumando vernici senza stacchi netti, decidendo la direzione della pennellata e quante tinte usare.

* **Quando usarlo**: bottoni, marker, bande decorative, overlay; scegli direzione per creare profondità o indicare movimento.

---

### Proprietà shorthand `background`

* **Cosa fa**: combina più impostazioni di sfondo in una sola riga (colore, immagine, posizione, repeat, size).
* **Snippet**

  ```css
  .hero {
    background: url("banner.jpg") center/cover no-repeat, #123; /* immagine + fallback colore */
  }
  ```
* **Analogia**: compilare un unico modulo piuttosto che più moduli separati.
* **Quando usarla**: quando vuoi dichiarare colore, immagine e comportamento in un colpo solo (leggibilità ok, evita duplicazioni).

---
