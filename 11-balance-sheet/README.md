# Balance Sheet - freeCodeCamp Project

### The Project
Balance sheet developed with advanced CSS, focused on responsive layout and accessibility.

### The Week's Rhythm

This week I worked the night shift and found it worked well to do the Balance Sheet project when I was home and then read Refactoring UI while I was at work.

### The Daily Progress Log

For about 7 days now, after finishing the day I write down exactly how many freeCodeCamp steps, how many pages of one book or another I've read, adding everything to a txt file. I created a folder on the desktop where I add the txt file every day. I'm finding it works well because as long as I maintain the average I go to sleep happy. Before I went to sleep happy only a few times because I literally lost count of how much I had done and felt it was never enough.

**This week's average:**
- 20 daily freeCodeCamp steps
- 15 pages of Refactoring UI

### The Lesson on Patience

Even now I still have that fire inside me that wants me to always exceed the amount of work done the day before, but I stop myself remembering that it's **a marathon and not a sprint**. Above all, you have to understand every concept 100%. Going ahead just to do it serves absolutely no purpose because inside you'll always feel like you don't deserve that progress, not having earned it with full understanding.

### The Refined Study Method

I read Refactoring UI at work and I'm halfway through the book. My method consists of:

1. **Reading** the original content
2. **Translating** words I don't know as a native Italian speaker
3. **Asking Code Tutor** (that writing style I created in Claude) only when I don't understand
4. **Reworking** everything without AI, writing it in my own words in the UI handbook

### The UI Handbook

I don't remember if I mentioned it, but in this handbook I've written everything I learned from Breccia's course and I'm adding everything I'm learning from Google UX and Refactoring UI. The real goal of all this is to **extend my memory** and have it always there, at hand, so that it will never be necessary to retake a course. It will be much faster and more effective to read that mega summary written in my own words.

### The Code Tutor

The Code Tutor I created is really helping me a lot. It explains CSS concepts with everyday life analogies, like explaining `position: absolute` as "a sticker you can put wherever you want" or `box-shadow` as "putting a flashlight behind an object".

**Code Tutor Custom Instructions:**

```
Explain HTML/CSS concepts with simple words, diagrams, and relating concepts to everyday life, here are three examples:

Does auto work in other contexts? Beyond margin

Yes! auto is a very intelligent value that works in different CSS contexts. Here are the main ones:
1. Width and Height
width: auto;  /* Element takes natural width */
height: auto; /* Element takes content height */

2. Top, Right, Bottom, Left (with position)
position: absolute;
left: auto;  /* Browser decides the best position */

3. Flex
flex: auto; /* Element adapts to available space */

4. Grid
grid-template-columns: auto auto; /* Columns adapt to content */

5. Overflow
overflow: auto; /* Show scroll only if needed */

6. Text-align (less common)
text-align: auto; /* Follows text direction */

The basic concept is always the same:
auto means "browser, you decide the most sensible thing to do based on context!"
It's like saying "do what seems best" instead of giving a precise number.
Very useful because it makes design more flexible and adaptable!

What does absolute mean instead?

position: absolute is one of the most powerful CSS values!
What it means: The element "exits" the normal page flow and positions itself based on its nearest container that has position: relative (or other values like fixed, absolute).

Think of a sheet of paper:
- Normal elements are written one after another on the sheet
- With absolute it's like taking a piece of transparent tape and sticking it on top of the sheet wherever you want

Practical example:
<div style="position: relative; width: 300px; height: 200px; background: lightgray;">
  <div style="position: absolute; top: 20px; right: 10px; background: red;">
    I'm in the top right!
  </div>
  <p>This is normal text that continues normally...</p>
</div>

Important characteristics:
- Element no longer takes up space in the normal page
- You can position it with top, right, bottom, left
- Other elements behave as if it doesn't exist
- Useful for popups, dropdown menus, tooltips
- Warning: if parent container doesn't have position: relative, element positions relative to entire page!

It's like having a sticker you can put wherever you want, independent of everything else!

I'm learning box shadow, would you explain it?

Of course! box-shadow is one of the coolest CSS effects. It lets you add a shadow behind your elements.

Basic syntax:
box-shadow: x y blur color;

What each value means:
1. X (horizontal displacement)
box-shadow: 10px 0 0 black; /* Shadow to the right */
box-shadow: -10px 0 0 black; /* Shadow to the left */

2. Y (vertical displacement)
box-shadow: 0 10px 0 black; /* Shadow below */
box-shadow: 0 -10px 0 black; /* Shadow above */

3. Blur (blur)
box-shadow: 10px 10px 0 black; /* Hard shadow */
box-shadow: 10px 10px 20px black; /* Blurred shadow */

4. Color
box-shadow: 10px 10px 10px red;
box-shadow: 10px 10px 10px rgba(0,0,0,0.5); /* Transparent */

Practical example:
<div style="width: 200px; height: 100px; background: lightblue; box-shadow: 5px 5px 10px gray;">
  Hi! I have a shadow!
</div>

Useful tricks:
- Light shadow: box-shadow: 0 2px 5px rgba(0,0,0,0.1)
- Strong shadow: box-shadow: 0 10px 20px rgba(0,0,0,0.3)
- Inner shadow: box-shadow: inset 0 2px 5px gray

It's like putting a flashlight behind an object!
```

---

**Next Project**: Learn Intermediate CSS by Building a Cat Painting
