# Music Player - freeCodeCamp Project

<img width="824" height="1079" alt="Screenshot of music player with current track: 'Can't Stop Me. Can't Even Slow Me Down.' by Quincy Larson" src="https://github.com/user-attachments/assets/679842e3-4816-40c6-8163-d2739784577f" />

### The Project

Interactive music player with dynamic playlist, complete playback controls and advanced features like shuffle, delete and reset. Developed with vanilla JavaScript, String and Array methods.
### Flow State

I finally had fun!
I believe my enjoyment only presents itself when I find myself in a flow state and in this project it happened to me several times. I'm understanding the semantics more and more and I need the Code Tutor less and less to understand the logic behind the code.
### The DRY (Don't Repeat Yourself) Insight

I had an insight in this project related to the DRY concept. I was constantly repeating the same block of code in multiple functions:
```javascript

// In deleteSong(), shuffle(), and other functions:

renderSongs(userData?.songs);

highlightCurrentSong();

setPlayButtonAccessibleText();

```
**The discovery:** instead of always repeating the same functions, it's much smarter to create an **orchestrator function** that groups all common actions:
```javascript

const updatePlayerUI = () => {

  renderSongs(userData?.songs);

  highlightCurrentSong();

  setPlayButtonAccessibleText();

  // Future: if you add new functions, put them only here!

};

```
**Result:** functions become cleaner and focused on their main logic, delegating UI updates to the orchestrator.
I believe it was CSS that gave me this mindset: defining all common properties in a single rule and then specifying only the unique differences in separate rules, avoiding unnecessary repetitions.
### What I Learned

**Advanced Array Methods:**
- `.map()` to transform arrays into HTML strings

- `.filter()` to remove elements (deleteSong)

- `.find()` to search for specific elements

- `.sort()` for sorting and shuffle

- `.indexOf()` to find positions in array

- `.join("")` to concatenate array elements into a single string

**String Methods & Template Literals:**
- Complex template literals for HTML generation

- String interpolation for dynamic content

- Conditional string rendering
**Complex State Management:**
- `userData` object for global application state

- Current song tracking and time persistence

- Dynamic playlist management
**Audio API Integration:**
- `new Audio()` constructor and properties

- `audio.play()`, `audio.pause()`, `audio.currentTime`

- Event listener for `ended` event

- Audio source dynamic switching
**Advanced DOM Manipulation:**
- `document.createElement()` and `appendChild()` for dynamic elements

- `setAttribute()` and `removeAttribute()` for accessibility

- Dynamic event listener creation and removal

- Complex CSS class management
**Accessibility Implementation:**
- `aria-label` for button descriptions

- `aria-current` for current song highlighting

- Screen reader friendly content
**JavaScript Patterns:**
- Function orchestration for DRY principle

- Conditional rendering with ternary operators

- Event delegation and dynamic content handling

- State synchronization patterns
### Reflection

This project marked a turning point in my understanding of JavaScript!
The flow state achieved multiple times shows that I'm starting to think like a developer.
The insight on DRY and orchestrator functions was illuminating, I finally see the difference between writing code that works and writing well-architected code. <br>
I can't wait to start the next project!
***
**Next Project**: Build a Palindrome Checker Project (CERTIFICATION PROJECT!)

P.S. Finally going back to writing HTML and CSS!
