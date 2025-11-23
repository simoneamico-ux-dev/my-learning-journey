# RPG Creature Search App – freeCodeCamp Certification Project

<div align="center">
  <a href="https://github.com/user-attachments/assets/f3634ea7-0fcf-4423-a4d5-48411de88114">
    <img src="https://github.com/user-attachments/assets/af645b22-3a09-49d6-afa1-6c77f38f5327" alt="RPG Creature Search App interface while searching for a creature" width="100%">
  </a>
  <p><em>Click to play the demo (1080p, 28 s, 1.1 MB)</em></p>
</div>

### The Project

RPG Creature Search App built as the final Certification Project of the **JavaScript Algorithms and Data Structures** course on freeCodeCamp.  
An app that combines JavaScript, state management and a carefully crafted UI in early-2000s Aqua/macOS style, with special attention to vector SVGs, “jelly” effects, and aggressive image optimization.

### The Favorite Project (for real)

It’s hard to think of a better way to end this journey.  
I say this often, but this time the feeling is even stronger: this was my favorite project.  
I realized why I struggle to “find things to say” in READMEs: the comments inside the files **are already the README**. That’s where I documented decisions, tradeoffs, and design choices.  

To avoid leaving this README empty, there are two elements I really want to surface, because they represent two important aspects of the work: the Aqua-style vector design and the image compression pipeline that led to some surprising results.

### Design: Aqua, Jelly, and Figma Icon

From the stylesheet:

> “To achieve maximum fidelity to the complex ‘jelly’ effects and the textures typical of Aqua, I opted for vector SVG assets for the frame and main buttons, delegating only depth shadows to CSS.”

All the key interface elements – frame, main buttons, jelly details – were created from scratch in Figma.  
For the Search button, however, I received great help from a creation by *Arthur Objartel*, who generously shared the button on Figma with the community, and I adapted it to fit the app’s style.  

The app icon (closed app) was also drawn in Figma:
- The fire in freeCodeCamp style with a pixel effect was created using the pen tool: a meticulous piece of work, but an excellent way to practice with that tool.  
- The magnifying glass wrapping around the flame comes from the idea of referencing Safari from that era, with its skeuomorphic ring and glossy parts.  
- I added two glossy highlights and, to complete the tribute to freeCodeCamp, I placed the darker parts of the ring on the left and right sides, just like the freeCodeCamp logo.

### Performance: Image Compression Pipeline

Again from `styles.css`:

> “I achieved just 163 KB for the desktop background by refining my image compression process…”

Instead of running AI upscaling directly on the original PNG, I followed a three-step pipeline:
1. **PNG → JPEG conversion** with light compression upfront.  
2. **AI upscaling on the JPEG**, not on the PNG, to work on an already lighter file.  
3. **Final pass through ImageOptim** to squeeze the size further while preserving visual quality.

The comparison was clear: with the “standard” pipeline (upscaling on PNG → JPEG → ImageOptim) the result was **382 KB**, while with the optimized pipeline (PNG → compressed JPEG → AI upscaling → ImageOptim) the final size dropped to just ~**163 KB**.  
More than **50% reduction**, with virtually identical visual quality.

### From “Static Archive” to Version Control

This project is not only the culmination of this journey, but also a turning point in how I work.  
I have intentionally treated this repository as an archive of perfect snapshots: every uploaded project represented a closed, immutable chapter of my learning path. The goal was to track linear progression, not a branching development process.

**Hitting the Limit**

With this project, I hit the limits of this approach, which could be described as “manual upload”.  
I understood that in a real *Software Engineering* context, Git is not a backup archive (the Google Drive of code), but a time machine and a complexity management tool.  
I’m also fully aware that every workflow has its own context.  
For a learning journey like this, I’m happy – looking back – that I made understanding freeCodeCamp’s concepts the absolute priority, but now it feels like the right time for the next level.

### What I Learned

**JavaScript architecture and asynchronous handling:**
- Structuring the code into three clear macro-areas: data management (fetch, parsing, mapping), UI/accessibility handling, and a macOS-style window manager, with global, easily testable functions.  
- Using `async/await` with `try...catch` to handle creature API calls, distinguishing between expected errors (404 “Creature not found”) and generic technical errors, all coordinated by a main `handleSearch` function.  
- Destructuring API data (for example `const { id, name, weight: weightValue, height: heightValue, types: creatureTypes, stats, special } = data;`) and using maps (`STAT_MAPPING`) to connect API stat names to DOM elements (`hp`, `attack`, etc.), reducing duplicated code and increasing clarity.  
- Keeping “clear” and “render” concerns separate: `clearResults()` resets all outputs and hides the container, while `displayCreatureData()` fills fields, dynamically builds type badges via `createElement`/`appendChild`, and restarts the CSS animation with the remove → reflow → add trick.

**Event handling, UX, and accessibility via JS:**
- Consistent input handling: normalization with `.trim().toLowerCase()`, guard clause on empty input, submitting via Enter by intercepting `keydown` and mapping it to a button click.  
- Custom “Aqua” tooltip with a timer: 300 ms delay on `mouseenter`, `clearTimeout` on `mouseleave`, and immediate hide on `focus`/`keydown` to avoid distracting users once they start typing.  
- Emulating “traffic light” window buttons (close, minimize, maximize) with centralized logic in `updateTrafficLightStates()`, accounting for window open/closed, maximized state, and viewport size (desktop vs mobile), and updating classes reactively on `resize`.  
- Adding accessibility to non-semantic elements: the desktop icon is implemented as a `<div>` but made keyboard-accessible with a `keydown` listener for `Enter`, closely mirroring the behavior of a real `button`.

**Web Performance Optimization (HTML/CSS):**
- A thought-out pipeline to drastically reduce desktop background weight: original PNG → lightly compressed JPEG → AI upscaling on the JPEG → final ImageOptim pass, going from ~382 KB down to ~163 KB without visible quality loss.  
- Targeted use of Base64 embedding for very small assets (under ~5 KB), inlining them in CSS to eliminate extra HTTP requests and prevent icon/texture loading flashes.

**Advanced layout with CSS Grid and Flexbox:**
- Experimentation with the “Stack Technique” via CSS Grid: a single area (for example `grid-area: stack`) shared by multiple elements (background, icon, input) to stack them precisely, avoiding messy absolute positioning; and understanding that layer order follows HTML order when z-indexes are implicit.  
- Combined use of Flexbox and Grid: single-column, flexible layout on small devices and a Grid-based layout on larger viewports to better manage alignment, spacing, and proportions of the Aqua window and its content.

**UI problem solving: visibility, layout, and animations:**
- Gaining a deep understanding of the difference between `display: none` and `visibility: hidden` and their impact on layout and animations:  
  - `display: none` removes the element from the flow, causing “jumps” (height collapse) on mobile.  
  - `visibility: hidden` keeps the space but can interfere with animations that depend on re-entering the flow.  
- Solving this with two separate utility classes: one controlling layout (for example `.hidden`) and one controlling visibility only (for example `.invisible`), cleanly separating “what takes up space” from “what is visible”.

**Accessibility (A11y) in CSS and structure:**
- Checking color contrast for creature type badges (FIRE, WATER, ROCK, etc.) with tools like WebAIM Contrast Checker, and adjusting colors to reach at least WCAG AA (4.5:1 for normal text).  
- Introducing `@media (prefers-reduced-motion: reduce)` to respect users sensitive to motion, turning off or simplifying heavy animations such as the window pop-up or flashy transitions.  
- Being conscious of “accessibility debt” when choosing non-semantic elements (div instead of button) for design/CSS reasons, and compensating it with roles, aria-labels, and tabindex (with most of the behavior wired up in JS).

**Typography, design, and “Aqua thinking”:**
- Studying native fonts across systems (Lucida Grande, Verdana, DejaVu Sans, etc.) to recreate the Aqua feel without downloading external fonts, building a robust and historically accurate font stack.  
- Discovering and using modern `text-wrap: balance` to reduce typographic widows and orphans, creating more balanced line breaks in headings and paragraphs.  
- Rebuilding a believable skeuomorphic style using a combination of vector SVGs (for complex shapes) and modern CSS (box-shadow, gradients, filters) instead of heavy PNGs, preserving both performance and crispness on high-density displays.

**HTML/CSS architecture oriented toward future JS:**
- Organizing CSS with a “utility-first for variables” approach: colors, spacing, and sizes centralized in `:root`, and a hierarchy that combines IDs for macro sections with reusable classes for components.  
- Structuring HTML with JavaScript in mind: separating static labels (“Weight:”) from dynamic values inside dedicated `<span>` elements, making targeted updates easy without rebuilding whole strings.

**Project architecture and comments as README:**
- Documenting architectural and design choices directly in the code so that anyone reading the files already has the full context.  
- Using comments not only to explain “what the code does” but especially “why it was designed that way”.

### Final Reflection

This was the peak, after which **I’m forced to stop**: 5 university exams are waiting for me, along with several papers and labs.  
I’d love to freeze everything and immediately start the **“Front End Development Libraries Certification”** course on freeCodeCamp, because the “flame” is at its highest, but doing that now would risk delaying my graduation. And, ironically, freeCodeCamp itself suggests patience: the course isn’t fully released yet, and the final modules (Data Visualization and D3, TypeScript Fundamentals, and the final exam) still show *Coming 2026*.  

Even though these months were spent mostly alone with this journey, it’s no exaggeration to say this has been one of the best periods of my life, if not the very best.  

It’s time to put all my energy back into university, but it won’t be difficult with the resilience and logical thinking that JavaScript has given me.

***

**Next**:  
University and… evolving this repository into a navigable knowledge base, so it doesn’t remain just a personal archive but becomes a support tool for anyone walking the same path.

---

🇮🇹 **[Versione Italiana](./README.it.md)**
