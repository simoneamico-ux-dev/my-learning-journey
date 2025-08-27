// ===== PYRAMID BUILDER: Costruiamo Piramidi con JavaScript! =====

const character = "!";
// MATTONCINO BASE: Il carattere che useremo per costruire
// const = costante, non può essere cambiata dopo
// "!" = il nostro "mattone" per la piramide

const count = 10;
// NUMERO DI PIANI: Quanto alta sarà la piramide
// 10 = una piramide di 10 livelli

const rows = [];
// CONTENITORE RIGHE: Array vuoto che conterrà ogni piano
// [] = array vuoto, come una scatola pronta per essere riempita
// Ogni elemento sarà una riga della piramide

let inverted = false;
// INTERRUTTORE INVERSIONE: Piramide normale o capovolta?
// let = variabile che può cambiare (diverso da const)
// false = piramide normale (punta in alto)
// true = piramide capovolta (punta in basso)

// ===== FUNZIONE COSTRUTTRICE DI RIGHE =====
function padRow(rowNumber, rowCount) {
  // FORMULA MAGICA: Crea una riga perfettamente centrata
  
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  // SCOMPOSIZIONE DELLA FORMULA:
  
  // 1. SPAZI INIZIALI: " ".repeat(rowCount - rowNumber)
  // Se siamo alla riga 1 di 10: 10 - 1 = 9 spazi
  // Se siamo alla riga 5 di 10: 10 - 5 = 5 spazi
  // Più in alto = più spazi (per centrare)
  
  // 2. CARATTERI CENTRALI: character.repeat(2 * rowNumber - 1)
  // Riga 1: 2 * 1 - 1 = 1 carattere
  // Riga 2: 2 * 2 - 1 = 3 caratteri
  // Riga 3: 2 * 3 - 1 = 5 caratteri
  // Formula per numeri dispari! (1, 3, 5, 7...)
  
  // 3. SPAZI FINALI: " ".repeat(rowCount - rowNumber)
  // Stessi spazi dell'inizio per simmetria
  
  // ESEMPIO riga 3 di 10:
  // 7 spazi + "!!!!!" (5 caratteri) + 7 spazi = riga centrata!
}

// ===== CICLO DI COSTRUZIONE =====
for (let i = 1; i <= count; i++) {
  // COSTRUIAMO PIANO PER PIANO
  // i = 1: primo piano
  // i <= count: continua fino all'ultimo piano (10)
  // i++: sali di un piano ogni volta
  
  if (inverted) {
    rows.unshift(padRow(i, count));
    // PIRAMIDE CAPOVOLTA: Aggiungi all'INIZIO dell'array
    // unshift() = inserisce all'inizio, spingendo gli altri elementi
    // È come mettere i piani dal basso verso l'alto
    
  } else {
    rows.push(padRow(i, count));
    // PIRAMIDE NORMALE: Aggiungi alla FINE dell'array
    // push() = inserisce alla fine dell'array
    // È come costruire dal piano terra verso l'alto
  }
}

// ===== ASSEMBLAGGIO FINALE =====
let result = ""
// STRINGA RISULTATO: Inizia vuota
// Qui assembleremo la piramide completa

for (const row of rows) {
  result = result + row + "\n";
  // INCOLLA LE RIGHE: Una sotto l'altra
  // row = ogni riga della piramide
  // "\n" = "new line", vai a capo
  // È come incollare ogni piano della piramide con una riga vuota sotto
  
  // ALTERNATIVA MODERNA:
  // result += row + "\n";
  // += è shorthand per result = result + ...
}

console.log(result);
// MOSTRA LA PIRAMIDE: Stampa nel terminale
// console.log() = il comando per visualizzare output
// Il momento della verità: vediamo la nostra creazione!

// ===== OUTPUT CON inverted = false =====
//          !           (9 spazi + 1 carattere + 9 spazi)
//         !!!          (8 spazi + 3 caratteri + 8 spazi)
//        !!!!!         (7 spazi + 5 caratteri + 7 spazi)
//       !!!!!!!        (6 spazi + 7 caratteri + 6 spazi)
//      !!!!!!!!!       (5 spazi + 9 caratteri + 5 spazi)
//     !!!!!!!!!!!      (4 spazi + 11 caratteri + 4 spazi)
//    !!!!!!!!!!!!!     (3 spazi + 13 caratteri + 3 spazi)
//   !!!!!!!!!!!!!!!    (2 spazi + 15 caratteri + 2 spazi)
//  !!!!!!!!!!!!!!!!!   (1 spazio + 17 caratteri + 1 spazio)
// !!!!!!!!!!!!!!!!!!! (0 spazi + 19 caratteri + 0 spazi)

// ===== OUTPUT CON inverted = true =====
// !!!!!!!!!!!!!!!!!!!  (base larga in alto)
//  !!!!!!!!!!!!!!!!!   
//   !!!!!!!!!!!!!!!    
//    !!!!!!!!!!!!!     
//     !!!!!!!!!!!      
//      !!!!!!!!!       
//       !!!!!!!        
//        !!!!!         
//         !!!          
//          !           (punta in basso)

// ===== CONCETTI CHIAVE JAVASCRIPT =====
// 1. VARIABILI: const (immutabile) vs let (mutabile)
// 2. ARRAY: Contenitori ordinati di elementi
// 3. FUNZIONI: Blocchi di codice riutilizzabili
// 4. CICLI FOR: Ripetizione controllata
// 5. METODI ARRAY: push() aggiunge alla fine, unshift() all'inizio
// 6. TEMPLATE LITERALS: Anche se qui usiamo concatenazione classica
// 7. OPERATORI: +, -, *, repeat() per stringhe

// ===== ALGORITMO IN BREVE =====
// 1. Definisci i parametri (carattere, altezza, inversione)
// 2. Crea una funzione che costruisce ogni riga con padding
// 3. Usa un ciclo per generare tutte le righe
// 4. Decidi se aggiungerle normalmente o al contrario
// 5. Unisci tutto in una stringa con a capo
// 6. Mostra il risultato!

// È come essere un architetto digitale che costruisce piramidi ASCII!
