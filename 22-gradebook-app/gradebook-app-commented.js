// ===== GRADEBOOK APP: Il Registro Digitale dei Voti! =====
// È come essere un professore con una calcolatrice magica!

function getAverage(scores) {
  // CALCOLA LA MEDIA: La funzione matematica più classica
  
  let sum = 0;
  // ACCUMULATORE: Parte da zero, come un salvadanaio vuoto
  // let perché cambierà ad ogni iterazione
  
  for (const score of scores) {
    sum += score;
    // SOMMA PROGRESSIVA: Aggiungi ogni voto al totale
    // += è shorthand per sum = sum + score
    // È come mettere monete nel salvadanaio, una alla volta
    
    // ESEMPIO con [92, 88, 12]:
    // Iterazione 1: sum = 0 + 92 = 92
    // Iterazione 2: sum = 92 + 88 = 180
    // Iterazione 3: sum = 180 + 12 = 192
  }
  
  return sum / scores.length;
  // FORMULA MEDIA: Totale diviso numero di voti
  // scores.length = quanti voti ci sono nell'array
  // 192 / 3 = 64 (nell'esempio sopra)
  // È la formula che tutti abbiamo imparato a scuola!
}

function getGrade(score) {
  // CONVERTITORE VOTO-LETTERA: Dal numero alla valutazione
  // Come la tabella di conversione americana
  
  if (score === 100) {
    return "A++";
    // PERFEZIONE ASSOLUTA: 100/100 merita un premio speciale!
    // === confronta valore E tipo (più sicuro di ==)
    
  } else if (score >= 90) {
    return "A";
    // ECCELLENTE: 90-99 = voto massimo standard
    
  } else if (score >= 80) {
    return "B";
    // BUONO: 80-89 = sopra la media
    
  } else if (score >= 70) {
    return "C";
    // SUFFICIENTE: 70-79 = nella media
    
  } else if (score >= 60) {
    return "D";
    // INSUFFICIENTE: 60-69 = sotto la media ma non bocciato
    
  } else {
    return "F";
    // BOCCIATO: Sotto 60 = fail
    // else finale cattura tutto il resto
  }
  
  // NOTA: L'ordine è importante! Dal più alto al più basso
  // Se controllassimo prima >= 60, un 95 prenderebbe "D"!
}

function hasPassingGrade(score) {
  // CONTROLLO PROMOZIONE: Sei promosso o bocciato?
  
  return getGrade(score) !== "F";
  // LOGICA BOOLEANA: true se NON è F, false se è F
  // !== significa "diverso da" (NOT equal)
  // È come chiedere "Il voto è qualsiasi cosa TRANNE F?"
  
  // ESEMPI:
  // hasPassingGrade(75) -> getGrade(75) = "C" -> "C" !== "F" -> true
  // hasPassingGrade(45) -> getGrade(45) = "F" -> "F" !== "F" -> false
  
  // Funzione elegante che riusa getGrade() invece di ripetere la logica!
}

function studentMsg(totalScores, studentScore) {
  // GENERATORE DI MESSAGGI: Crea il report finale per lo studente
  // totalScores = array con tutti i voti della classe
  // studentScore = il voto dello studente specifico

  let classAverage = getAverage(totalScores);
  // MEDIA CLASSE: Calcola quanto ha preso la classe in media
  // Riusa la funzione getAverage() che abbiamo definito prima
  
  let studentVote = getGrade(studentScore);
  // VOTO STUDENTE: Converte il punteggio in lettera
  // Riusa getGrade() per la conversione
  
  let passed = hasPassingGrade(studentScore);
  // ESITO: true se promosso, false se bocciato
  // Riusa hasPassingGrade() per il controllo
  
  // PRINCIPIO DRY: Don't Repeat Yourself!
  // Invece di riscrivere la logica, riusiamo le funzioni esistenti
  
  if (passed) {
    return "Class average: " + classAverage + ". Your grade: " + studentVote + ". You passed the course.";
    // MESSAGGIO PROMOSSO: Concatenazione di stringhe old-school
    // Potremmo usare template literals:
    // return `Class average: ${classAverage}. Your grade: ${studentVote}. You passed the course.`;
    
  }
  else {
    return "Class average: " + classAverage + ". Your grade: " + studentVote + ". You failed the course.";
    // MESSAGGIO BOCCIATO: Stessa struttura ma finale diverso
    
    // NOTA: C'è duplicazione qui! Potremmo ottimizzare:
    // let status = passed ? "passed" : "failed";
    // return `Class average: ${classAverage}. Your grade: ${studentVote}. You ${status} the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// ESECUZIONE FINALE: Testiamo il nostro sistema!

// ANALISI DEI DATI:
// Voti classe: [92, 88, 12, 77, 57, 100, 67, 38, 97, 89]
// Media classe: (92+88+12+77+57+100+67+38+97+89) / 10 = 717 / 10 = 71.7
// Voto studente: 37
// Lettera studente: F (sotto 60)
// Esito: Bocciato

// OUTPUT: "Class average: 71.7. Your grade: F. You failed the course."

// ===== ARCHITETTURA DEL PROGRAMMA =====
// 1. getAverage(): Funzione matematica pura
// 2. getGrade(): Convertitore con logica condizionale
// 3. hasPassingGrade(): Wrapper che aggiunge semantica
// 4. studentMsg(): Orchestratore che usa tutte le altre

// ===== CONCETTI CHIAVE =====
// 1. FUNZIONI PURE: getAverage e getGrade non hanno side effects
// 2. COMPOSIZIONE: Funzioni che usano altre funzioni
// 3. SEPARAZIONE DELLE RESPONSABILITÀ: Ogni funzione fa una cosa
// 4. RIUSABILITÀ: hasPassingGrade() riusa getGrade()
// 5. CONCATENAZIONE vs TEMPLATE LITERALS: Due modi per unire stringhe

// ===== POSSIBILI MIGLIORAMENTI =====
// 1. Validazione input (cosa succede con array vuoto?)
// 2. Arrotondamento della media (71.7 -> 72?)
// 3. Template literals per messaggi più leggibili
// 4. Eliminare duplicazione in studentMsg()
// 5. Aggiungere più gradi (A+, A-, B+, B-, etc.)

// È come avere un assistente digitale che calcola tutto automaticamente!
// Niente più calcoli a mano o tabelle di conversione da consultare!
