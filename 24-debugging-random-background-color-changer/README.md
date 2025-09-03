# Random Background Color Changer - freeCodeCamp Project

<img width="635" height="253" alt="Screenshot 2025-09-03 alle 13 20 26" src="https://github.com/user-attachments/assets/2359f1a9-e56d-4437-af92-ff0067156cc6" />

<img width="635" height="253" alt="Screenshot 2025-09-03 alle 13 19 40" src="https://github.com/user-attachments/assets/c38cfb5e-8d6f-4c2e-b93e-395e8bb3c6a4" />

### The Project
Web application to randomly change background color, developed as a debugging exercise. A project that made me feel more confident in my acquired JavaScript skills.

### The Debugging Experience

**There isn't much to say, it was a very short project that I absolutely loved doing.**

I don't know if it was designed to be so simple on purpose or if I found it simple myself, because **most of the time I read the instructions after I had already solved the bugs**.

That aside, it reinforced once again the concepts I've learned so far in JavaScript and that's what matters! 💪

### The Bugs Resolved

I identified and corrected **6 main errors** in CamperBot's code:

**1. Array Syntax Error:**
```javascript
// ❌ Bug: missing commas
const darkColorsArr = [
  "#2C3E50"
  "#34495E"  // SyntaxError
];

// ✅ Fixed: commas added
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
];
```

**2. Case Sensitivity - Math Object:**
```javascript
// ❌ Bug: math instead of Math
const randomIndex = math.random();  // ReferenceError

// ✅ Fixed: Math capitalized
const randomIndex = Math.random();
```

**3. Inverted Random Formula:**
```javascript
// ❌ Bug: wrong operation order
Math.floor(darkColorsArr.length * math.random());

// ✅ Fixed: correct order
Math.floor(Math.random() * darkColorsArr.length);
```

**4. Case Sensitivity - querySelector:**
```javascript
// ❌ Bug: queryselector lowercase
document.queryselector("body");  // TypeError

// ✅ Fixed: querySelector correct
document.querySelector("body");
```

**5. ID Selector Without #:**
```javascript
// ❌ Bug: missing # for ID
document.querySelector("bg-hex-code");  // null

// ✅ Fixed: # added
document.querySelector("#bg-hex-code");
```

**6. Function Not Called:**
```javascript
// ❌ Bug: missing parentheses
const color = darkColorsArr[getRandomIndex];  // undefined

// ✅ Fixed: parentheses added
const color = darkColorsArr[getRandomIndex()];
```

### What I Learned

**Debugging Skills:**
- **Case sensitivity** - JavaScript distinguishes upper/lowercase
- **Precise syntax** - commas in arrays, parentheses in calls
- **CSS selectors** - # for IDs, . for classes
- **Console.log debugging** to verify values step by step

**JavaScript Concepts Reinforcement:**
- **Array manipulation** and index access
- **Math object** and random/floor methods
- **DOM manipulation** with querySelector
- **Event handling** with onclick
- **Function calls** vs function references

### Reflection

This project confirmed that I'm assimilating JavaScript fundamentals well. The fact that I solved many bugs intuitively before reading the instructions gives me confidence in my progress.

The most common bugs (case sensitivity, missing syntax, wrong selectors) are exactly the type of errors every developer learns to recognize quickly with experience.

---

**Next Project**: Learn Form Validation by Building a Calorie Counter
