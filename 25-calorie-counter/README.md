# Calorie Counter - freeCodeCamp Project

<img width="952" height="462" alt="1" src="https://github.com/user-attachments/assets/8f359e6b-5431-478d-ab5a-fea96ae8ae0e" />

<img width="570" height="1756" alt="2" src="https://github.com/user-attachments/assets/932a5c3e-d577-44a2-ae8b-52b22823258b" />

### The Project
Calorie counter with advanced form validation, built entirely in vanilla JavaScript. An application that allows adding dynamic entries for different meal categories.

### A Project Close to My Heart

This is a very dear topic to me, as I've been doing gym for 6 years now and I've had many periods where I used calorie counter applications, particularly I found MyFitnessPal to be good. I even taught the tool to friends who were training to make them autonomous.

I never promoted the compulsive daily addition of foods, but rather using the tool to plan the diet and from time to time trying to add what you're eating in a specific period to identify eating habits that support your goals and those that instead hinder them.

And extraordinarily this tool created with freeCodeCamp is sufficient for this purpose! Even though MyFitnessPal has advanced features like adding foods starting from barcode scanning, this application, although "raw", reaches the same final goal.

### The Discovery of Dynamic HTML

This project gave me several insights! Through research I discovered the power of dynamic HTML compared to static HTML.

If you had to write everything manually you'd have to predict hundreds of entries for each category, making the HTML file huge and impossible to maintain.

With dynamic JavaScript instead:
```javascript
const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
`;
```

A single template automatically adapts to any situation: user wants 1 entry? Creates 1 entry. Wants 50? Same code!

I was surprised by HTML integrated into JS, albeit simply with HTMLString.

**The accessibility insight:** I realized that since adding elements useful for accessibility is automatable, like the `for` in HTML that automatically connects label and input, every generated entry is instantly accessible. Modify the template once and thousands of elements automatically become compatible with screen readers and keyboard navigation!

### The Final Challenge

The last 10 steps or so were the most difficult, I made extensive use of the code tutor, not so much to get the solution to challenges, but to have each step's reason explained to me, because I saw too many abstract concepts in the clearForm function. In fact, most messages ended with: "I successfully passed this step by writing (...) but would you explain it to me?"

### What I Learned

**Advanced DOM Manipulation:**
- `document.querySelector()` with specific selectors
- `querySelectorAll()` for element lists
- `insertAdjacentHTML()` for dynamic insertion
- Template literals for HTML generation

**Dynamic Content Creation:**
- HTMLString with interpolated variables
- Dynamic ID generation with entryNumber
- Automatic adaptation to user choices

**Form Validation & Input Handling:**
- Regular expressions for data cleaning (`/[+-\s]/g`)
- Input validation with pattern matching (`/\d+e\d+/i`)
- Error handling with boolean flags

**Event Handling:**
- `addEventListener()` for user interactions
- Event management for dynamic elements

### Reflection

This project was the turning point! I'm starting to appreciate JS but I don't feel like a master yet, I need lots of practice.

Tomorrow I'll update the vademecum because in these very last projects so many new concepts have been introduced.

***

**Next Project**: Review DOM Manipulation by Building a Rock, Paper, Scissors Game 🎮
