# Spam Filter - freeCodeCamp Project

<img width="866" height="563" alt="Spam message screenshot" src="https://github.com/user-attachments/assets/291e0149-881f-467f-bc5d-7da81a15c43b" />

<img width="866" height="563" alt="Not spam message screenshot" src="https://github.com/user-attachments/assets/01638c0a-3e0f-490c-b966-fd5a41aec9df" />
<br>
<br>

## English Version

### The Project
Spam filter developed with Regular Expressions (Regex), real-time message validation and advanced pattern matching. An application that identifies spam messages through a deny list of specific regex patterns.

### Two Weeks of Strategic Break

Almost two weeks have passed since the last project because I wanted to complete course 5 of Google UX, create the high fidelity prototype, reorganize all my notes adding everything to the UI & UX Vademecum and finally prepare adequately for a Pitching Session related to a university exam. <br>
The latter went great! Although she is a demanding professor who rarely commits and frequently requires project modifications, in our case she said to think about turning it into a startup. It was a project aimed at reducing food waste through technology. In the next session we will have to present the definitive concept, while in this first phase we presented blue sky research (a type of research that aims to break usual design patterns and think outside the box), mandala, personas, user journey, case studies, mind map and product system, thus building the foundation to arrive at the How Might We (HMW) question.

### The Usability Test Failure

Regarding the Google course, I tried to administer the usability test of the low fidelity prototype to 5 of my colleagues, but without success.

I sent a detailed WhatsApp message that included:
- Explanation of the industrial project
- 7 points of detailed instructions
- An industrial simulation story
- 3 different situations to test with screen recording
- Final questions

**The result?** A complete disaster. I received:
- No response from someone
- "I'm not in that department" from someone else
- "I'll read it later" without follow-up
- "Message too long, I don't feel like it"

### Error Analysis

Blaming these people for being unfriendly or unwilling wasn't the right approach. It could have been if I had received 4 yeses and 1 no, but such an overwhelming result meant that **I was the problem**. <br>
I reflected on it and here's what I understood:

**Error 1 - Message Too Long:**
I wrote a really long message and the smartphone format with which it was read doesn't help at all. Reading on mobile devices is not comparable to reading on a computer: the reduced screen forces continuous scrolling and attention drops drastically. Moreover, WhatsApp messages occupy only a central portion even narrower than the screen width, further amplifying the problem. It was a perfect recipe for failure.

**Error 2 - Unnecessary Complication:**
I made the task more complicated than it is. After all, it's just about: recording the screen, opening a link, trying to do what was asked and answering some questions, all this only 3 times.

**Error 3 - Lack of Clear Incentive:**
I didn't say what the gift was. I had in mind to give a €20 Amazon voucher, I should have said it right away because they would never have expected such a reward.

**Error 4 - Wrong Format:**
Instead of just one text message, I should have sent a voice message first. It would have been perceived in a much more personal way, so it would hardly not have received a response and I wouldn't have had to explain the task in detail right away, but rather explain broadly what it would be about, a hint at the Amazon voucher and ask with a yes or no if they would have wanted to participate.

### "If I Understand It, Everyone Understands It"

I didn't want to insist, because doing so would have made it almost impossible to make them understand that the problem was mine in how I had written the message and not their inadequacy in understanding it. <br>
As I had read in "Don't Make Me Think" users tend to attribute the causes of their errors in a UI to themselves rather than to the designer, when in fact the problem always lies with the designer. This is a fundamental principle that I don't just cite: I've seen it in action with my own eyes.

### The First Official Usability Test

After giving up insisting with my colleagues, I did my very first **moderated usability test** (face-to-face) with a friend of mine who will actually start working in a factory soon. So it wasn't a simple simulation, but a test with a person who will really set foot in that environment for the first time. <br>
I had already done usability tests for other application projects at work, projects I'll talk about in some future README, but I had never reached such depth. I tried to avoid any bias and for the second time I fell into the trap of **"if I understand it, everyone understands it"**.

**Test result:** Only 1 of 3 tasks failed.

### From Material to Metro Design

After this test I immediately tried to solve the problems. Fortunately only one of the 3 tasks failed. I literally overhauled the UI, I switched from Material to **Metro Design**. <br>
I chose the latter because I noticed that in factories, including mine, Windows is the most used operating system, this would have guaranteed the comfort zone for many more people. <br>
I armed myself with my first phone, a **Nokia Lumia 520** and took inspiration from it for the design.

<img width="4187" height="2208" alt="Low-Fidelity" src="https://github.com/user-attachments/assets/3783e3c2-703b-4718-b755-7c63138176f2" />

<img width="10359" height="6178" alt="High-Fidelity" src="https://github.com/user-attachments/assets/fb0adf01-4116-49c7-b612-46c61d7fbf67" />

### The Second Test: Same Surprise

I repeated the test and it was again the same task that failed. Surprising right? <br>
Well, **it was the organization of the scenario order that I was getting wrong, but also the time indicator was ambiguous**. As emerged from the interviewee's actual words: it wasn't clear whether the intervention was scheduled in a certain amount of time, had been ongoing for a certain amount of time, or would take place in a certain amount of time. I should have put the creation of a new report first, because it was an emergency. The user should never have wasted time looking for whether someone else had already reported, but rather: I have an emergency, I report immediately, then I check how it was resolved or if someone else had already reported. <br>
In addition to this, the first task (checking if someone else had already reported) was too simple to complete: the information was present on the first screen as soon as you opened the app. The user would have expected to have to search for the right screen, not to find it immediately in front of their eyes. After showing them where it was, they also felt stupid for not seeing it right away.

### The Final Lesson

I have the high fidelity ready that I will administer as soon as I return to work, after the operation, to my colleagues. I expect everything to go smoothly but I understood that **in this field you can't take anything for granted**. <br>
Either you completely lose personality and therefore shamelessly copy what already works, or you have to clash with all the variables and human beings are full of them.

### The Spam Filter Project

That said, this Spam Filter was a short project but to which I devoted more time than I thought for a specific reason: I summarized all the new concepts, I went beyond the cases that freeCodeCamp explained to me and now I have valuable material ready to be integrated into the vademecum.

### What I Learned

**Regular Expressions (Regex) Fundamentals:**
- Pattern matching with `/pattern/flags`
- Flag `i` for case-insensitive matching
- Character classes and alternation `[e3]` for variants
- Non-capturing groups `(?:pattern)` for organization
- Boundary matching `(?:^|\s)` for word boundaries

**Advanced Regex Patterns:**
- Quantifiers `+`, `*`, `?` for variable occurrences
- Lookahead and lookbehind assertions
- Escape sequences for special characters
- Alternative character matching `[o0]`, `[e3]`, `[a@4]`

**Array Methods with Regex:**
- `.test()` to verify pattern match
- `.some()` to test array of regex
- Functional programming for validation logic

**Spam Detection Patterns:**
- Deny list approach for known patterns
- Multiple regex combinations
- Leet speak detection (`fr[e3][e3]`, `m[o0]n[e3]y`)
- Context-aware pattern matching

**UX Research Methodologies:**
- Blue sky research for design innovation
- Moderated vs unmoderated usability testing
- Test script design and task formulation
- Bias awareness and mitigation

**Lessons from Usability Testing:**
- Message format: voice > long text
- Clear incentives from the start
- Instruction simplification
- Task ordering importance
- "Don't Make Me Think" principle in action

**Design System Evolution:**
- From Material Design to Metro Design
- Platform-specific design choices
- Comfort zone consideration for users

**Professional Growth:**
- Ownership of errors
- Iterative testing approach
- User-centered thinking
- Complete documentation for vademecum

---

**Next Project**: Learn Basic Algorithmic Thinking by Building a Number Sorter

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
Spam filter sviluppato con Regular Expressions (Regex), validazione di messaggi in tempo reale e pattern matching avanzato. Un'applicazione che identifica messaggi spam attraverso una deny list di pattern regex specifici.

### Due Settimane di Pausa Strategica

Sono passate quasi 2 settimane dall'ultimo progetto, questo perché ho voluto completare il corso 5 di Google UX, fare il prototipo high fidelity, risistemare tutti gli appunti aggiungendo il tutto al Vademecum UI & UX e infine prepararmi adeguatamente per una Pitching Session relativa a un esame universitario. <br>
Quest'ultima è andata alla grande! Nonostante sia una professoressa esigente che raramente si sbilancia e richiede frequentemente modifiche ai progetti, nel nostro caso ha detto di pensare di farci una startup. Si è trattato di un progetto atto a ridurre lo spreco alimentare grazie alla tecnologia. Nella prossima sessione dovremo presentare il concept definitivo, mentre in questa prima fase abbiamo presentato la ricerca blue sky (un tipo di ricerca che mira a rompere i pattern di design abituali e pensare fuori dagli schemi), mandala, personas, user journey, casi studio, mind map e sistema prodotto, costruendo così la base per arrivare alla How Might We (HMW) question.

### Il Fallimento dell'Usability Test

In merito invece al corso Google ho cercato di somministrare l'usability test del prototipo low fidelity a 5 miei colleghi, ma senza successo. 

Ho inviato un messaggio dettagliato via WhatsApp che includeva:
- Spiegazione del progetto industriale
- 7 punti di istruzioni dettagliate
- Una storia di simulazione industriale
- 3 situazioni diverse da testare con registrazione schermo
- Domande finali

**Il risultato?** Un disastro completo. Ho ricevuto:
- Non-risposta da qualcuno
- "Non sono in quel reparto" da qualcun altro
- "Lo leggo più tardi" senza seguito
- "Messaggio troppo lungo, non ho voglia"

### L'Analisi degli Errori

Accusare queste persone di antipatia o mancanza di voglia non era la strada corretta. Poteva esserlo se avessi ricevuto 4 sì ed 1 no, ma un risultato così schiacciante significava che **il problema ero io**. <br>
Ci ho riflettuto ed ecco cos'ho capito:

**Errore 1 - Messaggio Troppo Lungo:**
Ho scritto un messaggio veramente lungo ed il formato degli smartphone con cui è stato letto non aiuta affatto. La lettura su dispositivo mobile non è paragonabile a quella su computer: lo schermo ridotto costringe a continui scroll e l'attenzione cala drasticamente. Inoltre i messaggi WhatsApp occupano solo una porzione centrale ancora più stretta della larghezza dello schermo, amplificando ulteriormente il problema. Era una ricetta perfetta per il fallimento.

**Errore 2 - Complicazione Inutile:**
Ho reso il compito più complicato di quel che è. D'altronde si tratta solo di: registrare lo schermo, aprire un link, cercare di fare quello che è stato chiesto e rispondere a qualche domanda, tutto questo per sole 3 volte.

**Errore 3 - Mancanza di Incentivo Chiaro:**
Non ho detto qual'era il regalo. Avevo in mente di dare 20 euro di buono Amazon, avrei dovuto dirlo fin da subito perché non si sarebbero mai aspettati una ricompensa simile.

**Errore 4 - Formato Sbagliato:**
Al posto di un solo messaggio testuale, avrei dovuto mandare precedentemente un vocale. Sarebbe stato percepito in modo molto più personale, quindi difficilmente non avrebbe ricevuto risposta e non avrei dovuto spiegare il compito nel dettaglio fin da subito, bensì spiegare a grandi linee di cosa si sarebbe trattato, un accenno al buono Amazon ed il chiedere con un sì o con un no se si avrebbe voluto partecipare.

### "Se Lo Capisco Io, Lo Capiscono Tutti"

Non ho voluto insistere, perché facendolo sarebbe stato quasi impossibile fargli capire che il problema era mio di come avevo scritto il messaggio e non la loro inadeguatezza nel comprenderlo. <br>
Come avevo letto in "Don't Make Me Think" gli utenti tendono ad attribuire le cause dei propri errori in una UI a se stessi piuttosto che al progettista, quando invece il problema è sempre del progettista. Questo è un principio fondamentale che non mi limito a citare: l'ho visto con i miei occhi in azione.

### Il Primo Test di Usabilità Ufficiale

Dopo aver rinunciato ad insistere con i colleghi ho fatto il mio primissimo **test di usabilità moderato** (vis-à-vis) con un mio amico che inizierà realmente a lavorare in fabbrica a breve. Non si è trattato quindi di una semplice simulazione, ma di un test con una persona che metterà davvero piede in quell'ambiente per la prima volta. <br>
Avevo già fatto test di usabilità per altri progetti di applicazioni al lavoro, progetti di cui parlerò in qualche README futuro, ma mai ero arrivato ad una profondità simile. Ho cercato di evitare qualsiasi bias e per la seconda volta ero caduto nella trappola del **"se lo capisco io lo capiscono tutti"**.

**Risultato del test:** Solo 1 dei 3 task è fallito.

### Da Material a Metro Design

Dopo questo test ho subito cercato di risolvere i problemi. Per fortuna era solo uno dei 3 task a fallire. Ho letteralmente stravolto la UI, sono passato da un Material a un **Metro Design**. <br>
Ho scelto quest'ultimo perché ho notato che nelle fabbriche, compresa la mia, Windows è il sistema operativo più usato, ciò avrebbe garantito la comfort zone per molte più persone. <br>
Mi sono armato del mio primo telefono, un **Nokia Lumia 520** e ne ho preso ispirazione per la progettazione.

<img width="4187" height="2208" alt="Low-Fidelity" src="https://github.com/user-attachments/assets/3783e3c2-703b-4718-b755-7c63138176f2" />

<img width="10359" height="6178" alt="High-Fidelity" src="https://github.com/user-attachments/assets/fb0adf01-4116-49c7-b612-46c61d7fbf67" />

### Il Secondo Test: Stessa Sorpresa

Ho rieffettuato il test ed era di nuovo lo stesso task a fallire. Sorprendente vero? <br>
Ebbene **era l'organizzazione dell'ordine degli scenari che sbagliavo, ma anche l'indicatore temporale risultava ambiguo**. Come emerso dalle testuali parole dell'intervistato: non si capiva se l'intervento era previsto tra tot tempo, era in corso da tot tempo oppure si sarebbe svolto tra tot tempo. Avrei dovuto mettere per primo la creazione di una nuova segnalazione, perché si trattava di un'emergenza. L'utente non avrebbe mai dovuto perdere tempo nel cercare se qualcun altro aveva già segnalato, bensì: ho un'emergenza, segnalo subito, poi controllo come è stato risolto o se qualcun altro aveva già segnalato. <br>
Oltre a ciò, il primo task (controllare se qualcun altro aveva già segnalato) era troppo semplice da completare: l'informazione era presente nella prima schermata appena si apriva l'app. L'utente si sarebbe aspettato di dover cercare la schermata giusta, non che si sarebbe trovata immediatamente davanti ai propri occhi. Dopo avergli mostrato dov'era, si è anche sentito stupido per non averla vista subito.

### La Lezione Finale

Ho l'high fidelity pronto che somministrerò appena tornerò a lavoro, dopo l'operazione, ai colleghi. Mi aspetto che vada tutto liscio ma ho capito che **in questo campo non si può dare nulla di scontato**. <br>
O si perde completamente personalità e quindi si copia spudoratamente ciò che già funziona, oppure bisogna scontrarsi con tutte le variabili e l'essere umano ne è colmo.

### Il Progetto Spam Filter

Detto ciò questo Spam Filter è stato un progetto breve ma al quale ho impiegato più tempo di quanto pensavo per una ragione specifica: ho riassunto tutti i nuovi concetti, sono andato oltre ai casi che freeCodeCamp mi ha spiegato e ora ho materiale prezioso pronto per essere integrato nel vademecum.

### Cosa Ho Imparato

**Fondamenti delle Espressioni Regolari (Regex):**
- Corrispondenza di pattern con `/pattern/flags`
- Flag `i` per corrispondenza senza distinzione maiuscole/minuscole
- Classi di caratteri e alternanza `[e3]` per varianti
- Gruppi non di cattura `(?:pattern)` per organizzazione
- Corrispondenza di confini `(?:^|\s)` per limiti di parola

**Pattern Regex Avanzati:**
- Quantificatori `+`, `*`, `?` per occorrenze variabili
- Asserzioni lookahead e lookbehind
- Sequenze di escape per caratteri speciali
- Corrispondenza di caratteri alternativi `[o0]`, `[e3]`, `[a@4]`

**Metodi Array con Regex:**
- `.test()` per verificare corrispondenza di pattern
- `.some()` per testare array di regex
- Programmazione funzionale per logica di validazione

**Pattern di Rilevamento Spam:**
- Approccio con lista di negazione per pattern noti
- Combinazioni multiple di regex
- Rilevamento leet speak (`fr[e3][e3]`, `m[o0]n[e3]y`)
- Corrispondenza di pattern contestuale

**Metodologie di UX Research:**
- Ricerca blue sky per innovazione di design
- Test di usabilità moderato vs non moderato
- Progettazione script di test e formulazione task
- Consapevolezza e mitigazione dei bias

**Lezioni dall'Usability Testing:**
- Formato del messaggio: vocale > testo lungo
- Incentivi chiari fin dall'inizio
- Semplificazione delle istruzioni
- Importanza dell'ordine dei task
- Principio "Don't Make Me Think" in azione

**Evoluzione del Design System:**
- Da Material Design a Metro Design
- Scelte di design specifiche per piattaforma
- Considerazione della comfort zone per gli utenti

**Crescita Professionale:**
- Responsabilità degli errori
- Approccio di test iterativo
- Pensiero centrato sull'utente
- Documentazione completa per vademecum

***

**Next Project**: Learn Basic Algorithmic Thinking by Building a Number Sorter
