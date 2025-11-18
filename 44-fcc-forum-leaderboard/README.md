# fCC Forum Leaderboard - freeCodeCamp Project

![fCC Forum Leaderboard table with topics, categories, and user avatars](https://github.com/user-attachments/assets/d742419f-9aea-4493-a0c7-ca645b2b7e4d)

### The Project

fCC Forum Leaderboard built with vanilla JavaScript, the Fetch API, and asynchronous programming, combining DOM manipulation, advanced destructuring, and data formatting inside a responsive table. A project that represents the natural step up from handling Promises with `.then()` to a more expressive and readable syntax with `async/await`.

### The Project and the “Right Feeling”

This was a really interesting project, and it became clear why.<br>
I realized that the exercises I enjoy the most are the ones where I can mix JavaScript with HTML: the exercise feels beautiful, I don’t do it on purpose but every time I use `innerHTML` I smile. There’s no better way to wrap up this part of JavaScript, since React is exactly this, JavaScript embracing HTML (or rather, JSX). With each new step, I feel more and more that I’m exactly where I’m supposed to be, and that feeling fills me with joy.

### The Level Up: From `.then()` to `async/await`

In this project, there was a real step up in how I think about asynchronicity.<br>
The previous project (fCC News Authors Page) used the `.then().catch()` chain, which is like a **manual gearbox** in a car: powerful, but more verbose, with many steps that need to be explicitly wired together. In this project, instead, I started using `async/await`, meaning the **same engine** (Promises) but with an **automatic gearbox**: the code flows from top to bottom as if it were synchronous, while remaining fully asynchronous under the hood.
<br>

In synchronous code, each instruction waits for the previous one to finish before starting. I fully grasped the concept with this analogy: synchronous code is like a cook who puts bread in the toaster and stands there staring at it until it pops up, blocking everything else. <br>
In asynchronous code, instead, you start a slow operation (like a `fetch` to the server, the “toaster”), and while that operation runs in the background the program keeps executing other instructions, just like an efficient cook who starts the toast and, in the meantime, grabs the milk, prepares the cup, and only goes back to the toaster when it beeps. <br>
This led to a very practical insight: thanks to asynchronicity, you can start the fetch, show a loading indicator, keep the interface responsive, and only update the UI when the Promise is resolved, delivering a smooth experience even when the server takes some time to respond.

Coming back to `async/await`, the key point is that they don’t introduce a new mental model: it is yet another case of **syntactic sugar**, this time for Promises. What previously was written as a `.then()` / `.catch()` chain, now is expressed through:
- `async function` to “mark” the function as asynchronous  
- `await` to wait for Promises to resolve (for example `fetch`, `res.json()`)  
- `try...catch` to handle errors in a way that feels very similar to synchronous code (as with `.catch((err) => {}`)

The result? Same logic, but much more readable.

One thing I would do differently is the use of the `.concat()` method to join strings. With **template literals** (`${...}`) the code would be more readable, avoiding that subject–verb–object method call style that unnecessarily complicates such a simple operation.

To be specific, here's what I mean:

transform:

```javascript
// Solution required by the tutorial (.concat Method)
const userAvatarUrl = avatar.startsWith("/user_avatar/")
  ? avatarUrl.concat(avatar)
  : avatar;
```

into:

```javascript
// Solution with Template Literal (More readable)
const userAvatarUrl = avatar.startsWith("/user_avatar/")
  ? `${avatarUrl}${avatar}`
  : avatar;
```

### What I Learned

**Async/Await and try/catch:**
- Declaring a function with `async` allows the use of `await` inside it to “pause” execution until a Promise resolves, while still not blocking the main thread.  
- `await fetch(url)` and then `await res.json()` replace the `.then()` chain, making the flow much closer to synchronous code and therefore easier to read.  
- The `try { ... } catch (err) { ... }` block becomes the idiomatic way to handle asynchronous errors, unifying network, parsing, and logic errors in a single place.

**Destructuring on nested objects:**
- The multi-level destructuring `const { topic_list, users } = data; const { topics } = topic_list;` helps navigate complex JSON responses without constantly using deep dot notation.  
- Destructuring each `topic` directly inside `showLatestPosts`  
  ```js
  const { id, title, views, posts_count, slug, posters, category_id, bumped_at } = item;
  ```
  makes it clear which fields are actually used and reduces visual noise.

**Array methods to transform data into UI:**
- `.map()` was central to transforming the `topics` array into table rows, returning a single HTML string via `join("")` assigned once to `innerHTML`.  
- `.find()` was used to cross-reference `posters` with `users` to get avatar data, showing how multiple collections can be combined in a single pass.  
- `.join("")` after `.map()` avoids repeated `+=` concatenations and is both more efficient and more readable.

**Pure helper functions for data formatting:**
- `timeAgo(bumped_at)` encapsulates the time-difference logic in minutes, hours, and days, turning raw timestamps into readable strings like `10m ago`, `3h ago`, or `2d ago`.  
- `viewCount(views)` introduces compact formatting logic (`1500` → `1k`), clearly separating presentation concerns from the rest of the code.  
- These pure functions are easy to test and reuse in different contexts.

**Practical use of maps and configuration objects:**
- The `allCategories` object works as a small configuration map to translate `category_id` into `category` and `className`, showing how to centralize mapping rules between API data and UI.  
- The `forumCategory(category_id)` function generates the category link markup by combining these metadata dynamically instead of scattering mapping logic inside the template.

**Template literals for dynamic HTML:**
- Using multi-line template literals to generate `<tr>...</tr>` and `<a>...</a>` made it natural to interpolate JavaScript variables directly into HTML.  
- This approach is very close to the way libraries like React think, where structured data is mapped directly to UI components.

**“One-shot” rendering pattern:**
- Assigning `postsContainer.innerHTML = topics.map(...).join("");` in a single step avoids repeated DOM updates and layout recalculations compared to updating the DOM inside a loop.  
- This pattern marks an important step towards a more declarative way of thinking about rendering, rather than an imperative one.

***

**Next Project**: Build an RPG Creature Search App (Certification Project)

---

🇮🇹 **[Versione Italiana](./README.it.md)**
