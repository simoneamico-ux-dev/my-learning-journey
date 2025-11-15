# Cash Register - freeCodeCamp Project

![Cash Register Demo](https://github.com/user-attachments/assets/3465b196-c7af-469f-ab9a-302d9a5f3bca)
<br>
<br>

<img width="3432" height="1803" alt="Mobile UI" src="https://github.com/user-attachments/assets/e932331a-a8ca-4e15-afb1-e16a40e5a6de" />

<img width="3418" height="1089" alt="Desktop UI" src="https://github.com/user-attachments/assets/a081700a-afbe-431f-8e15-bda28d27e329" />

### The Project

Cash Register developed with vanilla JavaScript and OOP architecture, implementing greedy algorithms, precise integer calculations, and complete drawer state management. An application that demonstrates validation patterns, optimal change calculation, and skeuomorphic design.

### The Achievement: Google UX Certificate

I earned the Google UX Certificate by completing the last 2 courses I was missing and creating the other 2 required projects to obtain it.<br>
These were two very intense weeks and I'm really happy with what I accomplished.

### The Cash Register Project

In certification projects like this one, I document most of the technical choices directly in the code, including discoveries made during development. There's not much to add here then.<br>
Nevertheless, I want to highlight some aspects. First of all, I'm thrilled to have created incredibly lightweight images without sacrificing graphics.<br>

**The SVG Receipt - 2 KB:**<br>
The result was achieved thanks to Figma, where I created the receipt with a rectangle and the pen tool. Being native SVGs, I simply grouped the various elements and exported as SVG. Result: **2 KB**!

**The Optimized Background - 70 KB:**<br>
Initially I had chosen a different image: a table with a slice of bread and lettuce leaf. Unfortunately it didn't offer good contrast and weighed 2 MB. So I conducted a new search in stock photo libraries, taking the opportunity to update my Tools folder on the desktop with the best image tools.<br>
I took inspiration from an illustration and used Imagen (tool in Gemini workspace). Since the initial quality was poor, I applied upscaling with one of the tools in the folder. Then, thanks to ImageOptim, the image further decreased in weight while maintaining intact aesthetics.<br>
Result: **highest quality with a weight of only 70 KB**!

**The Logic with OOP Classes:**<br>
I documented everything inside the code. I wanted to use classes to practice and fortunately it proved to be an excellent choice, although it's a more complex solution than necessary compared to what's required to pass the freeCodeCamp tests.

### The Other Two Projects for Google UX

**Maintenance App Website:**<br>
The first was a simple website. I decided not to follow other tracks, but rather to revisit the Maintenance App imagining I was selling that service. Here's the result:

<details>
  <summary><strong>Maintenance App Website, mobile and desktop version</strong></summary>
  <br>
  <br>
  <strong>Desktop Version</strong>
  <br>
  <br>
  <img src="https://github.com/user-attachments/assets/29dde0dd-9a3a-4608-9ac3-aab15c09e46c" alt="Maintenance App Desktop Website">
  <br>
  <br>
  <br>
  <strong>Mobile Version</strong>
  <br>
  <br>
  <img src="https://github.com/user-attachments/assets/9edebfac-d712-433a-8058-f73367094345" alt="Maintenance App Mobile Website" width="400">
</details>


### Mosaic: The Heart Project

But now let's get to the project where I left my heart: **Mosaic**.<br>
It was easy to understand the needs having two psychologists in the family.
You can find the Figma prototype below, so you can explore the entire experience:
<table>
<tr>
<td width="50%">
  <img src="https://github.com/user-attachments/assets/47cbddf2-8b41-4d52-a4f4-e4c6c2c9ee8f" alt="Mosaic Home Screen" width="300">
</td>
<td width="50%">
  <h3>Interactive Prototype</h3>
  <p>Explore all screens and flows of the app in the complete Figma prototype.</p>
  <br>
  <a href="https://www.figma.com/proto/HDYGy1YlsayxweWqN7sBJE/Mosaic?node-id=1-27&p=f&t=wfrcP529dntLd1bU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A27">
    <b>→ Open Figma Prototype</b>
  </a>
</td>
</tr>
</table>
<br>

**Lightweight Liquid Glass and Accessibility:**<br>
I used a very light Liquid Glass effect. As much as I'm among the people who like it aesthetically, I believe it makes important compromises with visual accessibility.<br>

Here's how Apple used the tab bar in the Music app. I want to clarify that in most iOS applications the effect is not tone-on-tone like in this example:<br>
<br>
<img width="431" height="121" alt="Screenshot 2025-11-15 alle 15 38 08" src="https://github.com/user-attachments/assets/fe1a9693-f040-47d9-b7c7-ac4a39cf9586" />
<br>
<br>
And how I decided to use it very lightly in Mosaic:<br>
<br>
<img width="393" height="135" alt="Screenshot 2025-11-15 alle 15 43 39" src="https://github.com/user-attachments/assets/ac8818cf-720e-4dc1-be93-e06369170800" />

Starting with iOS 26.1, Apple still allows users to disable it in the settings and return to the standard blur effect. Unfortunately, as we learned in the Google course, this isn’t the best approach: complying with accessibility standards doesn’t just help a few it benefits everyone. I find it reasonable to make it optional, but even this detail already suggests that something isn’t quite right.
<br>

**The Philosophy: Reversing Expectations:**<br>
Regarding the open source side, I wanted to play with expectations and expected graphics. If you ask someone to imagine an open source app of this kind, they'll imagine un-"Apple" graphics, complexity, and consequent difficulty of use.<br>
If instead we asked to imagine an app that has a subscription business model of over 30 euros per month, integrated AI, and all these premium features, one would expect exactly Mosaic's graphics.<br>
So I opted for an iOS style, albeit reinterpreted in some aspects, with absolute simplicity as the main priority. All of this, however, completely Open Source.
It’s incredible how a project like this is already truly feasible today by using locally running models such as Microsoft Phi-4 Mini. <br>
Let me explain: <br>
I should note that, since I’m not a backend developer, I might be mistaken, but after several rounds of research I found that Phi-4 Mini would be the ideal candidate for this kind of task. It delivers excellent output quickly and the only drawback is its size over 7GB but for a therapist who cares about privacy, this isn’t a problem.
For phones with hardware weaker than an iPhone 15 Pro, lighter models such as Phi-3 Mini or Llama 3.2 3B could be used, and they weigh only around 2GB.
As for transcription, fortunately there’s OpenAI Whisper Base: it’s about 140MB, open-source, and provides excellent transcriptions!

### What I Learned

**Advanced OOP Architecture:**
- ES6 classes to encapsulate complex operational logic
- `constructor()` for initialization and data preparation
- Private methods (`#calculateChange`) to protect internal logic
- Separation of responsibilities between preparation and calculation

**Modern Data Structures:**
- `Map` instead of objects for more consistent key-value management
- Uniform data access: `.get()` and `.set()` vs mixed notations
- Iteration with `.forEach()` on Map for cleaner logic

**Greedy Algorithms:**
- "Best choice at the moment" strategy for optimal change calculation
- Pre-sorting denominations from largest to smallest
- `while` loop to dispense maximum number of each denomination
- Understanding limitations: works only with standard monetary systems

**Precise Calculations with Integers:**
- Floating-point problem: `0.1 + 0.2 !== 0.3` in JavaScript
- Dollars → cents conversion at input for precision
- `Math.round()` for safe rounding
- Cents → dollars reconversion only at output

**Robust Input Validation:**
- Guard clauses for precondition checks
- `isNaN()` to validate numbers
- Edge case handling: exact cash, insufficient, greater
- Informative alerts for immediate feedback

**Transaction State Management:**
- `INSUFFICIENT_FUNDS` status when impossible to give change
- `CLOSED` status when change completely empties the drawer
- `OPEN` status for standard transactions with partial change
- Return of structured objects: `{status, change}`

**Image Optimization:**
- Native SVGs from Figma: 2 KB for vector graphics
- Imagen (Gemini) for illustration generation
- AI upscaling to improve quality without weight
- ImageOptim for final compression

**Skeuomorphic Design:**
- Radial gradient to simulate input dots on receipt
- `background-size` and `background-repeat` for patterns
- Roboto Mono font to simulate thermal printer
- Transform rotate for realistic imperfections

**Mobile-First with CSS Variables:**
- All values centralized in `:root` variables
- Media query that overrides only necessary variables
- `100vh` + `100dvh` fallback to handle iOS dynamic URL bar
- Conditional loading: different SVG receipts for mobile/desktop

**Advanced Event Handling:**
- `blur` event for iOS scroll fix after input focus
- `keydown` with `Enter` for alternative submit
- `preventDefault()` to control form behavior
- Class instance recreated at each click for freeCodeCamp tests

**Functional Array Methods:**
- `.find()` to search denomination value in DENOMINATIONS
- `.forEach()` to iterate on Map cashInDrawer
- `.map()` to format change array into string
- `.join()` to concatenate output strings

---


🇮🇹 **[Versione Italiana](./README.it.md)**
