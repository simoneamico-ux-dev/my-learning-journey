/* DESIGN 
   ------
   * After different paradigm changes, this is the most concise
   * JavaScript solution I managed to create.
   * It is characterized by:
   * - declaration based on name required from freeCodeCamp
   * - arabic to roman map for more efficiency with a single-source
   *   declaration
   * - a short while loop that "translates" arabic numbers to roman
   *   numerals
   * - the logic is simple, with .reduce JavaScript takes each
   *   array value and accumulates all the results that come out
   *   of the loop, we start from "" (empty string) which is the
   *   the second argument.
   *   Writing [arabicNumber, romanNumber] we are destructuring the
   *   array.
   *   Inside the while loop we say to JavaScript: as long as the 
   *   user's input number is big enough to contain this Roman number, 
   *   continue the iteration.
   * - Next, we handle everything related to input, so the logic of
   *   allowed input, allow clicking the enter button to submit.
   *   I modify the default behavior of keyboard with an e.preventDefault(), 
   *   which doesn't even let you write values that aren't numeric, in order 
   *   to improve the UX,
   *   and finally assign convert button to the user input checking function
*/


/*  * JavaScript must avoid "e" and "," in the input label

    * I need to assign number, convert-btn and output
    * to the equivalent id 
    * and have the following text as alert if nothing is entered
    * in the input field: "Please enter a valid number" 
*/


const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
output.textContent = "------"; // Without this default value we have a perceptual void 
output.classList.add("empty"); // With this class we have a duller color, because default value it must symbolize a dull value 

/*  * It is more efficient to create a unique map than two split
    * arabicNumber and romanNumber
    * This approach makes possible the next DRY function 
*/

const arabicToRomanMap = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];


/*  * After a long time to create for loops and switch statements, 
    * I realized (with my code tutor) that there is a simple
    * way to get the same result which perfectly matches with
    * DRY principle (Don't Repeat Yourself) 
*/

const arabicToRoman = (number) => {
    return arabicToRomanMap.reduce((result, [arabicNumber, romanNumber]) =>{
        while (number >= arabicNumber) {
            result += romanNumber;
            number -= arabicNumber;
        }
        return result;

    }, "");
}


/*  * Following SRP rule (Single Responsibility Principle)
    * I'll create a checker of input that has as only function
    * "bounce" not appropriate input 
    * I'll start by not allowing any character different from decimal
    * number, then I'll write a clear checker of user input
    * arrow function 
*/

    numberInput.addEventListener("keydown", (e) => {
        if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
        }
    });
    
    numberInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            checkUserInput();
        }
    });

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value, 10); // I wrote 10 to specify that it is a decimal number
    output.classList.remove("alert-1", "alert-2", "empty") // Let's reset special cases and removing empty class now we have a lit value as a result

    if (!numberInput.value || isNaN(inputInt)) { // Then if there is no user input value or it is not a numeral value
        output.textContent = "Please enter a valid number";
        output.classList.add("alert-1");
        return;
    } 
    
    if (inputInt < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        output.classList.add("alert-2");
        return;
    }
    
    if (inputInt > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        output.classList.add("alert-2");
        return;
    } 
    
    const romanConverted = arabicToRoman(inputInt);
    output.textContent = romanConverted;
};

convertBtn.addEventListener("click", checkUserInput);
