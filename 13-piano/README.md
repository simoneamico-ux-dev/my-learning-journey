# Building a Piano - freeCodeCamp Project

### The Project
Interactive piano developed with responsive CSS, where the number of keys automatically adapts to screen size using media queries.

### The Development Experience

It was very quick and at the same time extremely useful regarding the responsive side (not coincidentally the course is called "Responsive Web Design"). Indeed, the number of piano keys varies based on screen size.

### The Connection with Refactoring UI

I connected this project with a fundamental concept from Refactoring UI that I'm studying: **perfect proportions change with context**.

**The revelation:** It's not enough to "shrink everything" for mobile. Each screen has ITS optimal proportions!

### The Discovered Principle

❌ **Wrong thinking:** "If desktop has a 2.5x proportion, mobile must have 2.5x"

✅ **Right thinking:** "Each screen has ITS optimal proportions"

### Analogy That Struck Me

It's like the difference between speaking in a **large room** vs a **small room**:

- **Desktop (large room):** Shout loud for the title (48px), speak normally for text (16px)
- **Mobile (small room):** Speak loud but don't shout for the title (24px), whisper for text (14px)

### Concrete Example from the Project

```css
/* Desktop - lots of available space */
#piano { width: 992px; }
.keys { width: 949px; }

/* Mobile - limited space */
@media (max-width: 768px) {
  #piano { width: 358px; }
  .keys { width: 318px; }
}
```

It's not just "smaller", it's **proportionally different** for each context.

### What I Learned

- **Media queries** for responsive design
- **Float and positioning** for key layout
- **Pseudo-elements** (::after) to create black keys
- **The principle of contextual proportions** from Refactoring UI
- **Overflow hidden** to manage layout

### Reflection

This project solidified a fundamental understanding: responsive design isn't just a technical matter, but about **intelligent proportions** that adapt to the context of use.

---

**Next Project**: Technical Documentation Page (Certification Project)
