# City Skyline - freeCodeCamp Project

### The Project
City skyline created entirely with CSS Variables, advanced gradients, and responsive design techniques. An urban landscape that changes from dawn to night based on screen size.

### The Genius of freeCodeCamp

I find the ability of freeCodeCamp (and therefore those who designed the lessons) to make you constantly review what was learned in past lessons incredible. It's a really effective learning reinforcement system.

### The New Method: Strategic Screenshot

Lately, before starting the project I take a **screenshot of the final result**. I go to the last lesson, covering my eyes in front of the code, and capture the image. Then I put it on the desktop, so I have **total focus** on the current project.

### Why It Works

It helps me a lot to understand in advance **what we're doing and why**. Maybe lines are placed here, lines there, but without understanding exactly what is being created.

There's merit in proceeding blindly to have the final "wow" effect, but you only gain in terms of enthusiasm. I prefer to **know exactly what I'm creating** so I can put myself in the mental condition that the steps I'm taking are aimed at that specific goal. Moreover, this conscious approach still keeps all the enthusiasm of the process intact.

### What I Learned

- **CSS Variables (Custom Properties)** with `:root` for managing color palettes
- **Advanced gradients:**
  - `radial-gradient` for sky and sun
  - `linear-gradient` for depth effects
  - `repeating-linear-gradient` for window patterns
- **Responsive media queries** that completely change the atmosphere (day → night)
- **Complex layering** with background-buildings and foreground-buildings
- **Advanced positioning** to create architectural shapes
- **Flexbox** for precise alignments
- **Border tricks** to create triangular and geometric shapes

### The Genius Responsive Effect

```css
@media (max-width: 1000px) {
  :root {
    --building-color1: #000;
    /* All buildings become black */
  }
  .sky {
    /* Sky becomes nocturnal */
  }
}
```

It's not just "resizing", it's a **complete transformation** of atmosphere: from colorful daytime city to nocturnal skyline!

### Reflection

**CSS Variables** have been a huge discovery! I want to use them always because I find them incredibly convenient, plus they have that modern technical elegance that makes you feel like a professional developer. But it's not just about aesthetics: they also improve the way I write all the rest of the code, making it more organized and logical.

This project solidified the importance of **CSS Variables** for maintainability and dynamic effects. It was very satisfying to see how small changes in variables can completely transform the visual appearance.

---

**Next Project**: Learn CSS Grid by Building a Magazine  
*(I've already seen the final result and as much as I enjoyed making these skylines, that one will please me much more!)*
