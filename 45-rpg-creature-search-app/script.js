/* DESIGN
   ------
   * This script constitutes the functional heart of the "RPG Creature Search App" application.
   * The architecture is modular, avoids over-engineering and is divided into three
   * macro-areas of well-defined responsibilities:

   * 1. Data Management:
   * - Handles asynchronous communication with the external API (fetch, network error
   *   handling and "Creature not found").
   * - Manipulates raw data received (via destructuring) and prepares it for rendering.
   * - Maintains constant references (`const`) to static DOM elements for efficient
   *   updates, avoiding querying the DOM repeatedly
   * - The main functions (`handleSearch`, `fetchAndDisplayCreature`, `clearResults`,
   *   `displayCreatureData`) are declared in the global scope to be accessible
   *   and easily testable.

   * 2. UI Management and Accessibility (inside DOMContentLoaded)
   * - This block activates exclusively when DOM loading is complete.
   * - Manages specific UI behaviors like the custom "Aqua" style tooltip (implementing
   *   delays for a more natural UX) and its intelligent disappearance on focus or typing.
   * - Implements the logic to make the desktop icon completely accessible via keyboard,
   *   handling the Enter key via `keydown`. This is necessary because the icon is technically
   *   a `<div>` (lacking native button semantics), so its behavior must be emulated.

   * 3. "Aqua" Window Manager Emulation (also inside DOMContentLoaded)
   * - Centralizes the logic of the "traffic light" buttons (close, minimize, maximize) to
   *   emulate the behavior of Mac OS X windows.
   * - Manages the visibility states of the main window and desktop icon.
   * - Implements a function (`updateTrafficLightStates`) that dynamically recalculates the
   *   enabled/disabled state of buttons based on context (mobile device vs desktop, maximized
   *   window vs normal), reacting in real time even to window resizing.
*/


/* freeCodeCamp instructions:
 * - When the #search-input element contains the value Red and the #search-button element is clicked,
 *   an alert should appear with the text "Creature not found". ✔️
 * - When the #search-input element contains the value Pyrolynx and the #search-button element is clicked,
 *   the values in the #creature-name, #creature-id, #weight, #height, #hp, #attack, #defense, #special-attack,
 *   #special-defense, and #speed elements should be PYROLYNX, #1 or 1, Weight: 42 or 42, Height: 32 or 32, 65,
 *   80, 50, 90, 55, and 100, respectively. ✔️
 * - When the #search-input element contains the value Pyrolynx and the #search-button element is clicked, a
 *   single element should be added within the #types element that contains the text FIRE. The #types element
 *   content should be cleared between searches. ✔️
 * - When the #search-input element contains the value 2 and the #search-button element is clicked, the values
 *   in the #creature-name, #creature-id, #weight, #height, #hp, #attack, #defense, #special-attack,
 *   #special-defense, and #speed elements should be AQUOROC, #2 or 2, Weight: 220 or 220, Height: 53 or 53, 85,
 *    90, 120, 60, 70, and 40, respectively. ✔️
 * - When the #search-input element contains the value 2 and the #search-button element is clicked, two elements
 *   should be added within the #types element that contain text values WATER and ROCK, respectively. The #types
 *   element content should be cleared between searches. ✔️
 * - When the #search-input element contains an invalid creature name, and the #search-button element is clicked,
 *   an alert should appear with the text "Creature not found". ✔️
 * - When the #search-input element contains a valid creature ID and the #search-button element is clicked, the UI
 *   should be filled with the correct data. ✔️
*/


/* I wrote the next two constants all in uppercase because it's a convention that serves to immediately 
 * communicate two things to other developers (or to future me):
 * - Immutability: that value is fixed and must not be modified
 * - Global scope: makes them "jump out" in the code, signaling their importance, a concept
 *   that's extremely useful during debugging when there are errors
*/
const CREATURE_API_URL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/"; 
const ALL_CREATURES_URL = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const specialName = document.getElementById("special-name");
const specialDescription = document.getElementById("special-description");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const outputContainer = document.getElementById("creature-output-box");

const outputElement = [ creatureName, creatureId, specialName, specialDescription, weight, height, hp, attack, defense, specialAttack, specialDefense, speed ]; // I omitted 'types' for special handling (see below)

const STAT_MAPPING = {
    hp: hp,
    attack: attack,
    defense: defense,
    'special-attack': specialAttack, 
    'special-defense': specialDefense,
    speed: speed
};

// IMPORTANT: I declare functions BEFORE using them in event listeners
const handleSearch = async () => {
    const searchTerm = searchInput.value.trim().toLowerCase(); // I clean the input for security (remove all spaces at the beginning and end)
    
    if (!searchTerm) {
        setTimeout(() => alert("Please provide a creature name or id valid"), 10); // The setTimeout is unusual but it solved a critical UX problem: Mobile browsers tend to block alerts, because they know they offer terrible UX due to some sites using them to deliver spam. I don't support the use of alerts because I consider them impersonal and invasive but for this freeCodeCamp project it's an essential requirement
        return;
    }
    
    clearResults(); // clear the previous search results
    
    try {
        await fetchAndDisplayCreature(searchTerm); // call the function that will handle the fetch and display
    } catch (error) {
        console.error("Generic error:", error); // handling unexpected errors, like network error
        setTimeout(() => alert("A connection error has occurred."), 10);
    }
};

const fetchAndDisplayCreature = async (searchTerm) => {
    const url = `${CREATURE_API_URL}${searchTerm}`; // build the final URL for the creature, as we saw in the README of the 44-fcc-forum-leaderboard project I support this more readable syntax over using `.concat()`
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) { // here we intercept before doing .json(). The classic 404/not found error, if the creature doesn't exist, the API returns 404
            throw new Error("Creature not found");
        }
        
        const data = await response.json();
        displayCreatureData(data); // if everything goes well, pass the data to the renderer
        
    } catch (error) {
        if (error.message === "Creature not found") { // "Creature not found" because that's the name we gave to this error in the if (!response.ok)
            setTimeout(() => alert("Creature not found"), 10);
        } else {
            setTimeout(() => alert("Technical error during data retrieval."), 10); // we also handle all other possible errors (e.g. failed parsing, the process that analyzes an input and determines its correctness)
            console.error(error);
        }
    }
};

const clearResults = () => {
    outputElement.forEach(element => { // cleaning all text fields with a loop, thanks to having created an array at the beginning with all output elements
        element.textContent = ""; // we apply cleaning only to dynamic values (like #weight, #hp, etc...)
    });
    
    types.textContent = ""; // cleaning the dynamic container #types (handled separately because it contains dynamic <span> tags for labels like FIRE/ROCK)
    searchInput.value = ''; // also cleaning the input

    outputContainer.classList.add('invisible'); // we hide the entire results container. This way the fixed labels and empty table also disappear. This because I noticed that after searching for another creature Weight, Height and the table remained fixed waiting for the API, this happened because they are fixed (static) HTML elements
};

const displayCreatureData = (data) => {
    // "pop-up" animation
    outputContainer.classList.remove('invisible');       // 1. I make the container visible in the layout
    outputContainer.classList.remove('animate-results'); // 2. I remove the animation class. For efficiency, the browser doesn't apply this change immediately but puts it on hold
    void outputContainer.offsetWidth;                    // 3. EXTREMELY IMPORTANT line: by reading a layout property, I force the browser to an immediate "Reflow", making the class removal from point 2 effective
    outputContainer.classList.add('animate-results');    // 4. I put the class back. Now the browser sees a real state change (from "without" to "with" animated class) and restarts the animation from the beginning.

    const { id, name, weight: weightValue, height: heightValue, types: creatureTypes, stats, special } = data; // we extract the necessary fields from the API data using destructuring
    
    creatureName.textContent = name.toUpperCase(); // we update the fields (span) using global DOM references
    creatureId.textContent = `#${id}`;
    weight.textContent = weightValue;
    height.textContent = heightValue;
    specialName.textContent = special.name;
    specialDescription.textContent = special.description;
    
    stats.forEach(stat => {
        const statName = stat.name.toLowerCase(); 
        const statValue = stat.base_stat;
        
        if (STAT_MAPPING[statName]) { // we use the map to find the corresponding DOM element (`hp`, `attack`, etc.)
            STAT_MAPPING[statName].textContent = statValue;
        }
    });
    
    types.textContent = ''; 
    creatureTypes.forEach(typeInfo => {
        const typeElement = document.createElement('span'); // create a new <span> element
        const typeName = typeInfo.name.toLowerCase();
        typeElement.textContent = typeName.toUpperCase(); // assign the text (e.g. "FIRE")
        typeElement.setAttribute('class', `type-badge type-${typeName}`);
        types.appendChild(typeElement); // "append" the node (real DOM element) to the main container
    });
};

searchButton.addEventListener("click", handleSearch); // I add the event listener only after declaring the function, otherwise it wouldn't work

document.addEventListener('DOMContentLoaded', () => {
const searchInputElement = document.getElementById('search-input');
    const aquaTooltip = document.getElementById('aqua-tooltip');
    let tooltipTimeout; // fundamental variable to store and clear the tooltip timer if the user moves the mouse quickly

    searchInputElement.addEventListener('mouseenter', () => { // when the mouse enters the input area
        tooltipTimeout = setTimeout(() => { // instead of showing it immediately, I set a 300ms delay, it's a good compromise, faster than native but not instantaneous.
            if (aquaTooltip) aquaTooltip.classList.remove('hidden-tooltip'); // show the tooltip if the timer hasn't been cancelled
        }, 300);
    });

    searchInputElement.addEventListener('mouseleave', () => { // so when the mouse exits the input area
        clearTimeout(tooltipTimeout); // EXTREMELY IMPORTANT step: I cancel the current timer if exiting before the 300ms
        if (aquaTooltip) aquaTooltip.classList.add('hidden-tooltip'); // immediately hide the tooltip
    });

    const hideTooltipImmediately = () => { // if the user clicks (focus) or types (keydown), the tooltip is a distraction and must be hidden
         clearTimeout(tooltipTimeout);
         if (aquaTooltip) aquaTooltip.classList.add('hidden-tooltip');
    };

    searchInputElement.addEventListener('focus', hideTooltipImmediately);
    searchInputElement.addEventListener('keydown', hideTooltipImmediately);
    const windowContainer = document.getElementById('window-container');
    const desktopIcon = document.getElementById('desktop-app-icon'); // The icon that appears when the app is closed
    const btnClose = document.getElementById('btn-close'); // Red
    const btnMinimize = document.getElementById('btn-minimize'); // Yellow
    const btnMaximize = document.getElementById('btn-maximize'); // Green
    
    const handleCloseClick = () => { // click on red --> close
        if (windowContainer) windowContainer.classList.add('hidden'); // hide the main window
        if (desktopIcon) desktopIcon.classList.remove('hidden'); // show the icon on desktop
        updateTrafficLightStates(); // update the traffic lights state (both disabled)
    };
    
    const handleIconClick = () => { // click on desktop icon --> reopen window
        if (desktopIcon) desktopIcon.classList.add('hidden'); // hide the desktop icon
        if (windowContainer) windowContainer.classList.remove('hidden'); // show the main window again
        updateTrafficLightStates(); // restore the correct traffic lights state
    };
    
    const handleMaximizeClick = () => { // click on green --> maximize
        if (btnMaximize && btnMaximize.classList.contains('disabled')) return;
        if (windowContainer) windowContainer.classList.add('maximized');
        updateTrafficLightStates(); // update the traffic lights state after maximization
    };
    
    const handleMinimizeClick = () => { // click on yellow --> minimize
        if (btnMinimize && btnMinimize.classList.contains('disabled')) return;
        if (windowContainer && windowContainer.classList.contains('maximized')) {
            windowContainer.classList.remove('maximized');
            updateTrafficLightStates(); // update the traffic lights state after normalization
        }
    };
    
    const updateTrafficLightStates = () => {
        if (!btnMaximize || !btnMinimize || !windowContainer || !desktopIcon) return;
        
        if (windowContainer.classList.contains('hidden')) { // if the window is closed, disable both traffic lights
            btnMaximize.classList.add('disabled');
            btnMinimize.classList.add('disabled');
            return;
        }
        
        const isDesktop = window.innerWidth >= 768; // uses the CSS breakpoint (768px)
        
        if (isDesktop) {
            if (windowContainer.classList.contains('maximized')) { // on desktop, enable/disable based on maximized state.
                btnMaximize.classList.add('disabled');
                btnMinimize.classList.remove('disabled');
            } else {
                btnMaximize.classList.remove('disabled');
                btnMinimize.classList.add('disabled');
            }
        } else {
            btnMaximize.classList.add('disabled'); // on mobile, disable both traffic lights and remove the 'maximized' class
            btnMinimize.classList.add('disabled');
            if (windowContainer) windowContainer.classList.remove('maximized');
        }
    };
    
    if (btnClose) btnClose.addEventListener('click', handleCloseClick);
    if (btnMaximize) btnMaximize.addEventListener('click', handleMaximizeClick);
    if (btnMinimize) btnMinimize.addEventListener('click', handleMinimizeClick);
    if (desktopIcon) { // a function is necessary here because the desktop icon is <div>, not a real <button>
        desktopIcon.addEventListener('click', handleIconClick);
        desktopIcon.addEventListener('keydown', (event) => { // handles the "Enter" key when the icon has focus
            if (event.key === 'Enter') {
                event.preventDefault(); // prevents unwanted default behaviors
                handleIconClick(); // executes the same open function
            }
        });
    }
    
    updateTrafficLightStates(); // set initial state
    window.addEventListener('resize', updateTrafficLightStates); // update on resize
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchButton.click();
  }
});
