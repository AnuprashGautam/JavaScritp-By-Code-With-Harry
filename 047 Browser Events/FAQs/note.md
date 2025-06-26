## 🌐 What is an Event in JavaScript?

In the browser, an **event** is an action or occurrence that happens in the system you're interacting with—like:

* Clicking a button (`click`)
* Pressing a key (`keydown`)
* Moving the mouse (`mousemove`)
* Submitting a form (`submit`)
* Page loading (`load`)

JavaScript lets you **listen** to these events and **respond** to them. This is called **handling events**.

---

## ✅ Why Handle Events?

Event handling makes your website **interactive**. Without event handling, websites would be static and boring.

Example:

> You click a button → Something happens (e.g., a popup opens or content appears)

---

## 🧠 How to Handle Events?

There are **three main ways** to handle browser events in JavaScript:

---

### 1. **Using HTML Event Attributes (Not Recommended)**

Add the event handler directly in the HTML.

```html
<button onclick="sayHello()">Click Me</button>

<script>
  function sayHello() {
    alert("Hello from HTML attribute!");
  }
</script>
```

✅ Simple for beginners
❌ Not clean or scalable

---

### 2. **Using DOM Element’s Event Properties**

Assign a function to the event property like `.onclick`.

```html
<button id="btn">Click Me</button>

<script>
  let btn = document.getElementById("btn");
  btn.onclick = function() {
    alert("Button clicked using .onclick!");
  };
</script>
```

✅ Cleaner than inline
❌ Only one function can be assigned per event (overwrites previous handlers)

---

### 3. **Using `addEventListener()` (Recommended)**

This is the most flexible and powerful method.

```html
<button id="btn">Click Me</button>

<script>
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    alert("Clicked with addEventListener!");
  });
</script>
```

✅ Can add **multiple** listeners
✅ Can **remove** listeners later
✅ Modern and best practice

---

## 📚 Common Browser Events

| Event       | Triggered When...                  |
| ----------- | ---------------------------------- |
| `click`     | An element is clicked              |
| `mouseover` | Mouse hovers over an element       |
| `mouseout`  | Mouse leaves an element            |
| `keydown`   | A key is pressed                   |
| `submit`    | A form is submitted                |
| `load`      | Page finishes loading              |
| `change`    | Input/select element value changes |

---

## 🎯 Example: Change Background Color on Button Click

```html
<button id="changeBtn">Change Background</button>

<script>
  const btn = document.getElementById("changeBtn");

  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
  });
</script>
```

---

## 🧩 Event Object (`event` or `e`)

When a function handles an event, it gets an **event object** containing details.

```html
<input type="text" id="inputBox" placeholder="Type something" />

<script>
  let input = document.getElementById("inputBox");

  input.addEventListener("keydown", function(e) {
    console.log("Key pressed:", e.key); // e.g., "a", "Enter"
  });
</script>
```

The `event` object gives:

* `e.target`: the element that triggered the event
* `e.type`: type of event (e.g., `click`)
* `e.key`: the key pressed (for keyboard events)

---

## 🧼 Removing an Event Listener

```javascript
function greet() {
  alert("Hello!");
}

btn.addEventListener("click", greet);

// Remove later
btn.removeEventListener("click", greet);
```

⚠️ Only works if the function is **named** (not anonymous).

---

## 📌 Summary

| Concept       | Key Point                                   |
| ------------- | ------------------------------------------- |
| Event         | Something happening on the page             |
| Event Handler | A function that runs when the event happens |
| Best Practice | Use `addEventListener()`                    |
| Event Object  | Gives you details about the event           |

---
