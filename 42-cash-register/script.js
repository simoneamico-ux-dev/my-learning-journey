/* DESIGN
   ------
  * This file contains the validation logic for Cash Register
  * The main architectural decisions include:
  *
  * - Class-based Architecture (OOP): The choice to use a `class CashRegister`
  *   encapsulates all the operational logic. This approach promotes separation of
  *   responsibilities, so while the `constructor` handles the initial preparation of the
  *   drawer, the subsequent methods (`processPurchase`, `#calculateChange`) manage
  *   the change calculation phases. This promotes a more organized and modular code.
  *   I admit I used them in the first place because I wanted to practice, as it's a concept
  *   that excited me from the first moment I encountered it, much like what happened with variables
  *   in the CSS context. However, I first tried to understand if it was a good approach for this
  *   specific case, and luckily, it turned out to be.
  *
  * - Calculations with integers: JavaScript doesn't count the way we do, for example, 0.1 + 0.2
  *   for it is 0.30000000000000004 instead of 0.3). This is because while we humans count with ten
  *   fingers (base-10), computers count using billions of ON/OFF switches (base-2); it's like trying
  *   to weigh exactly 0.1 grams on a scale having only 1g, 2g, 4g, etc., weights available. 
  *   You can't be perfectly precise, and this imprecision accumulates in calculations.
  *   To get around this very problem, all monetary operations were performed using cents (integers).
  *   The conversion from dollars to cents happens at the input, and the final re-conversion for the
  *   output is in dollars. This approach guarantees maximum calculation precision.
  *
  * - Data structure (Map): I'm referring to the management of "cashInDrawer".
  *   I used this approach because Map would give me more consistent code.
  *   I'll add an example below to quickly show what I mean:
  *   If I had used objects:
  *   let pennies = drawer.PENNY;
  *   let hundreds = drawer["ONE HUNDRED"];
  *   Using Map:
  *   let pennies = this.cashInDrawer.get("PENNY");
  *   let hundreds = this.cashInDrawer.get("ONE HUNDRED");
  *
  * - Greedy algorithm for change: 
  *   For the change calculation process, I used a greedy algorithm.
  *   This means that, starting from the highest value denomination (thanks to the
  *   pre-sorted "DENOMINATIONS"), the system tries to dispense the largest possible
  *   number of that bill/coin, and then progressively moves to the lower value
  *   ones, until the change due is depleted.
  *   It's a strategy that makes the "best choice at the moment," and for standard monetary
  *   systems, it always guarantees the optimal result. This isn't always true, in fact,
  *   imagining an atypical monetary system with denominations of 1, 7, and 10 cents, to give
  *   15 in change, the greedy approach would end up giving 6 coins (1x10 + 5x1), while the
  *   optimal solution would have been 3 coins (1x7 + 1x7 + 1x1).
  *   I had used the same approach in the Roman Numeral Converter.
*/


/* freeCodeCamp instructions:
 * - You should have a global variable called price.
 * - You should have a global variable called cid.
 * - When #cash < price, alert "Customer does not have enough money to purchase the item".
 * - When #cash == price, #change-due shows "No change due - customer paid with exact cash".
 * - Test (price 19.5, cash 20, standard cid): #change-due shows "Status: OPEN QUARTER: $0.5".
 * - Test (price 3.26, cash 100, standard cid): #change-due shows "Status: OPEN TWENTY: $60 TEN: 
 *   $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".
 * - Test (price 19.5, cash 20, cid[PENNY, 0.01]): #change-due shows "Status: INSUFFICIENT_FUNDS".
 * - Test (price 19.5, cash 20, cid[PENNY, 0.01, ONE, 1]): #change-due shows "Status: INSUFFICIENT_FUNDS".
 * - Test (price 19.5, cash 20, cid[PENNY, 0.5]): #change-due shows "Status: CLOSED PENNY: $0.5".
 */


const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const result = document.getElementById("change-due");

let price = 19.5;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
const DENOMINATIONS = [["ONE HUNDRED", 10000], ["TWENTY", 2000], ["TEN", 1000], ["FIVE", 500], ["ONE", 100], ["QUARTER", 25], ["DIME", 10], ["NICKEL", 5], ["PENNY", 1]];

class CashRegister {

    constructor(cid) {
        this.cashInDrawer = new Map();
        this.totalInDrawer = 0; // Total cash in drawer, in cents

        cid.forEach(([currencyName, amountInDollars]) => { // first we destructure
            const amountInCents = Math.round(amountInDollars * 100); // round because it rounds to the nearest integer, e.g., 4.4 -> 4, 4.5 -> 5
            this.cashInDrawer.set(currencyName, amountInCents); // sets the cash in drawer exactly like in cid but this time the values are in cents
            this.totalInDrawer += amountInCents; // since we started from zero (this.totalInDrawer = 0) we now sum and assign with the values
        });

        this.sortedCashInDrawer = new Map(); // we create a new map because we want the values to be sorted like in DENOMINATIONS, so from largest to smallest (greedy algorithm)
        DENOMINATIONS.forEach(([name, value]) => {
          if(this.cashInDrawer.has(name)) { // we check if it actually exists in the this.cashInDrawer map
            this.sortedCashInDrawer.set(name, this.cashInDrawer.get(name)); // we can't use += because it's only used when working with numbers, .set() is its equivalent when working with maps. So with .get() we read the value from the original map (cashInDrawer), while with set we write that value to the new map (sortedCashInDrawer)
          }
        })
    }

    processPurchase(priceInCents, cashGivenInCents) {
      let changeDueInCents = cashGivenInCents - priceInCents;

      const originalChangeDue = changeDueInCents;

      if (this.totalInDrawer < changeDueInCents) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }

      else {
        let changeToGive = []; // here we save the change to give
        this.sortedCashInDrawer.forEach((amountInDrawer, name) => { // we iterate over the denominations in the drawer, from largest to smallest (thanks to sortedCashInDrawer)
          let amountToReturn = 0;
          const currencyValue = DENOMINATIONS.find(denom => denom[0] === name) [1]; // finds the value in cents of the current denomination (e.g., 2000 for "TWENTY")
          let availableAmount = amountInDrawer; // copy of the available amount of money in the drawer

          while (changeDueInCents >= currencyValue && availableAmount > 0) { // With this loop, it keeps taking this denomination as long as the change is sufficient and as long as there is some in the drawer
            changeDueInCents -= currencyValue; // subtract from the total change due
            availableAmount -= currencyValue; // subtract from the stock of this denomination
            amountToReturn += currencyValue; // add to the partial total to return
          }

          if (amountToReturn > 0) {
            changeToGive.push([name, amountToReturn / 100]) // we convert cents to dollars for the output
          }
        });
        
        if (changeDueInCents > 0) { // here we check if (after the loop) there is remaining change, which means we didn't have the right coins/bills
          return {status: "INSUFFICIENT_FUNDS", change: []};
        }

        if (this.totalInDrawer === originalChangeDue) { // finally we check if the change due emptied the drawer, how? by comparing with the original total
          return {status: "CLOSED", change: changeToGive};
        }

        else {
          return {status: "OPEN", change: changeToGive};
        }

      }
    }

}


cashInput.addEventListener("blur", () => { // I noticed that on my iPhone 12 mini, so on iOS, after clicking the input and then exiting, the receipt stays scrolled up, this way we bring it back to the original state
  window.scrollTo(0, 0);
});

cashInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    purchaseBtn.click();
  }
});


purchaseBtn.addEventListener("click", () => { 
  const register = new CashRegister(cid); // We create a new class instance every time the user clicks the button, this is essential because the freeCodeCamp tests will modify the global "cid" variable to run the test
  const cashGiven = parseFloat(cashInput.value); // we read the value from the input (which is a string, e.g., "20") and convert it to a number (e.g., 20.0) using parseFloat() to be able to do calculations

  // we convert everything to cents for "safe" calculations
  const priceInCents = Math.round(price * 100);
  const cashGivenInCents = Math.round(cashGiven * 100); 

  if (isNaN(cashGiven) || cashGiven <= 0 ) {
    alert("Please enter a valid positive number");
    cashInput.value = "";
    return;
  } 
  
  else if (cashGivenInCents < priceInCents) {
    alert("Customer does not have enough money to purchase the item");
    cashInput.value = "";
    return;
  }
  
  else if (cashGivenInCents === priceInCents) {
    result.textContent = "No change due - customer paid with exact cash";
    cashInput.value = "";
    return;
  }
  
  else { // this happens when the customer paid more, so we calculate the change
    const transactionResult = register.processPurchase(priceInCents, cashGivenInCents); // This is the line that "activates" the main logic of our cash register. We call the 'processPurchase' method (the "brain" that does all the calculations) passing it the price and the cash received. The method will return a "report" (an object) that contains the 'status' of the transaction and, if necessary, the 'change' (the calculated change)
    
    if (transactionResult.status === "INSUFFICIENT_FUNDS") { // we format the output based on the status
      result.textContent = "Status: INSUFFICIENT_FUNDS";
    
    } else if (transactionResult.status === "OPEN" || transactionResult.status === "CLOSED") {
      let changeText = transactionResult.change.map(item => `${item[0]}: $${item[1]}`).join(" ");
      result.textContent = `Status: ${transactionResult.status} ${changeText}`;
    }
    cashInput.value = "";
  }
});
