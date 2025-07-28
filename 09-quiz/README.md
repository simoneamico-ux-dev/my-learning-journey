# Accessibility Quiz - freeCodeCamp Project

## The Project
Interactive HTML/CSS quiz focused on web accessibility, developed as part of the freeCodeCamp curriculum.

## Development Reflections

### The Commenting Approach
I used Claude to create a didactic commenting system following the approach from my personal handbook. I use it as a tutor, especially after implementing changes requested by freeCodeCamp without initially understanding the motivations behind each choice.

I think freeCodeCamp is wonderful, but I'm realizing that "unfortunately" it's too practical. Don't get me wrong, that's its strength, but my personality constantly suggests I dig deeper into what interests me, including in coding.

### The Parallel Study Journey

**HTML & CSS by Duckett**: Even though it's basic level, I'm realizing how much technology has advanced since 2014. The book talks about Flash, Cufon... everything replaced "fortunately" by Google Fonts, which democratized access to fonts.

**["Become a Designer" Course by Riccardo Breccia](https://academy.talentgarden.com/come-diventare-designer-con-breccia/)**: I took more time between this project and the previous one precisely because of this course. I'm aware that every freeCodeCamp lesson won't be the same anymore. I have more refined eyes, attentive to details. Despite studying Industrial Design at university, I found this course more useful than many exams I've taken: extremely practical and allowed me to challenge myself.

**Google UX Course (2/8)**: The exact opposite of Breccia's. Extremely theoretical and not very practical so far, though I expect the practical part will come.

**Refactoring UI**: After 35 pages I'm already happy with the investment. It's incredibly direct and useful. I regret not getting it earlier because it's teaching me an approach to projects that seems senior-level.

I expected a manual about UI micro-details, but instead it's giving me essential foundations in coding scalability. I've noticed that this specificity (more detailed CSS, HTML, Figma with components and variables) is what distinguishes:
- Junior Developer → Senior Developer
- Junior UX Designer → Senior UX Designer  
- Junior UX Engineer → Senior UX Engineer

**Don't Make Me Think**: A pillar of the UX world. After loving "The Design of Everyday Things" by Norman, I wanted to continue on that axis.

### The Realization
All this to say that maybe I was getting lost in code, abandoning the design part and forgetting my true goal: **combining design with code**.

I admit that when I add new knowledge to my repertoire and apply it in freeCodeCamp lessons, my eyes light up and I smile like a child. It happens when I read interesting concepts in design books too, but very rarely when using Figma. Despite being fast with it, it doesn't give me the same satisfaction as coding. Maybe because I consider it "easier"?

## Technical Highlights

I had already explored the final version of this project a few exercises ago, and it was one of the things that made me want to accelerate. The effects that excited me most:

- **Smooth scroll behavior**
- **Navigation links with gentle scrolling**
- **Interactive hover effects**

It's everything that connects what I learned with Figma to code, giving me the feeling of being in the right place at the right moment.

### The Most Difficult Concept
```css
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}
```

Initially it derailed from the usual patterns, but now it's crystal clear: if the user hasn't limited animations in their browser/device settings, the site interprets it as "okay, green light for animations". In this case `scroll-behavior: smooth`.

## Final Notes
I stopped tracking total time to complete exercises because I realized that **quality is significantly better than quantity**.

---

**Next Project**: Tribute Page
