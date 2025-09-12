const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const card = document.querySelector(".card");
const htmlElement = document.documentElement;
let lastValue = "";


const checkPalindrome = () => {
    const userValue = textInput.value;
    lastValue = userValue;

    if (userValue === "") {
        alert("Please input a value");
        return;
    }

    const cleanInput = userValue.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reverseText = cleanInput.split("").reverse().join("");

    textInput.classList.add("hidden-input");
    result.classList.remove("hidden");
    

    if (cleanInput===reverseText) {
        result.textContent = `${userValue} is a palindrome`;
        htmlElement.classList.add("palindrome-background");
        card.classList.add("palindrome-card");
        checkBtn.classList.add("palindrome-button");
        checkBtn.textContent = "Clear";
    } else {
        result.textContent = `${userValue} is not a palindrome`;
        checkBtn.textContent = "Clear";
        htmlElement.classList.add("not-palindrome-background");
        card.classList.add("not-palindrome-card");
        checkBtn.classList.add("not-palindrome-button");
    }

};

const resetInterface = () => {
    textInput.value = "";
    textInput.classList.remove("hidden-input");
    result.textContent = "";
    result.classList.add("hidden");
    htmlElement.classList.remove("palindrome-background", "not-palindrome-background");
    card.classList.remove("palindrome-card", "not-palindrome-card");
    checkBtn.classList.remove("palindrome-button", "not-palindrome-button")
    checkBtn.textContent = "Mirror";
    lastValue = "";
}

checkBtn.addEventListener("click", () => {
    if (checkBtn.textContent === "Clear" && (textInput.value === lastValue || textInput.value === "")) {
        resetInterface();
    } 
    else {
        checkPalindrome();
    }
})
