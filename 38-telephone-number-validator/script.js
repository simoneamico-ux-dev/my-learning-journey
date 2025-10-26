/* DESIGN 
   ------
   * This file contains the validation logic for US phone numbers

   * Flow:
   * - Definition of constants that include input limits, the regex
   *   for validation, and DOM references.
   * - Prevention of the form's default behavior which would otherwise 
   *   cause the page to refresh.
   * - Management of the Check button click with preliminary validations (empty
   *   field and excessive length).
   * - Main function checkNumber(), which executes validation via
   *   regex and handles the display of results.
   * - Visual feedback on buttons with a temporary click effect.
   * - Function limitResults() that maintains a maximum number of displayed
   *   results.
   * - Clear button that clears the interface

   * I've named functions only when reused, such as checkNumber and
   * limitResults

   * I don't add Enter key support for quick validation, because it is 
   * redundant. Since the HTML is structured as a form, the default browser
   * behavior already triggers the button click when Enter is pressed
*/

/* freeCodeCamp instructions:
    * - When you click on the #check-btn element without entering a value
    *   into the #user-input element, an alert should appear with the text
    *   "Please provide a phone number". ✔️
    * - When you click on the #clear-btn element, the content within the 
    *   #results-div element should be removed. ✔️
    * I've summarized the other 30 requirements in these points:
    * - Valid numbers: must have 10 digits total, country prefix 
    *   1 (optional), spaces, hyphens, parentheses allowed in the input area ✔️
    * - Invalid numbers: anything that doesn't have 10 digits, prefix different
    *   from 1, malformed parentheses, or "strange" characters ✔️
*/

const maxInputLength = 20;
const maxResult = 50; // Limit to prevent DOM performance issues with too many results
const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
/* Above regex validates US phone numbers in their standard formats:
   * ^(1\s?)? : Optional country code 1 with optional space.
   *    The entire group is optional, allowing numbers to start with or without it.
   * (\(\d{3}\)|\d{3}) : Area code (3 digits) with or without parentheses.
   *    The OR operator (|) allows both formats, thus (555) or 555.
   * [\s\-]? : Optional separator (space or hyphen) after the area code.
   *    Square brackets create a character class, ? makes it optional.
   * \d{3} : Exchange code: exactly 3 digits of the local number.
   * [\s\-]? : Another optional separator between number groups.
   * \d{4}$ : Subscriber number: exactly 4 digits.
   *   The $ anchor ensures the string ends here, preventing extra characters
*/

const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const buttons = document.querySelectorAll("button");

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    } else if (input.value.length > maxInputLength) {
        alert("Phone number too long");
        return;
    } else {
        checkNumber()
    }
});

const checkNumber = () => {
    const phoneNumber = input.value;
    const phoneResult = document.createElement("div");
    phoneResult.classList.add("phone-result");


   /* For inserting the <br> I used a particular approach, first textContent
    * to sanitize against XSS, then innerHTML to modify only the colon
    * character (: ) already validated. This way the content is already safe
    * before the HTML conversion */

    if (phoneRegex.test(phoneNumber)) {
        phoneResult.textContent = `Valid US number: ${phoneNumber}`;
        phoneResult.innerHTML = phoneResult.innerHTML.replace(': ', ':<br>');
        phoneResult.classList.add("result-valid");
        
    } else {
        phoneResult.textContent = `Invalid US number: ${phoneNumber}`;
        phoneResult.innerHTML = phoneResult.innerHTML.replace(': ', ':<br>');
        phoneResult.classList.add("result-invalid");
        
    }

    resultsDiv.insertBefore(phoneResult, resultsDiv.firstChild);
    limitResults();
    input.value = "";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");
        setTimeout(() => button.classList.remove("clicked"), 200);
    });
});

const limitResults = () => {
    const results = resultsDiv.children;
    while (results.length > maxResult) {
        resultsDiv.removeChild(results[results.length - 1]);
    }
}

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    input.value = "";
    resultsDiv.innerHTML = "";
});
