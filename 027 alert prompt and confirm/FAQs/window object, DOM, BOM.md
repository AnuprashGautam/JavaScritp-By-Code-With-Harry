Here’s a simple explanation of **DOM**, **BOM**, and the **`window` object** in JavaScript — with examples to make it easy to understand:

---

## 🪟 1. `window` Object (Global Object)

The **`window` object** is the global object in the browser. It represents the browser window and provides methods and properties to control it.

Everything (like alert, console, setTimeout, etc.) in the browser runs inside the `window`.

### ✅ Example:

```javascript
alert("Hello!");       // This is same as:
window.alert("Hello!");

console.log(window.innerHeight);  // Gets the height of the browser window
```

So, `alert()`, `console.log()`, `setTimeout()` are actually:

```javascript
window.alert()
window.console.log()
window.setTimeout()
```

---

## 🌳 2. DOM (Document Object Model)

**DOM** represents the **web page (HTML)**. It allows you to **access, modify, add, or delete** elements (like `<div>`, `<p>`, `<h1>`, etc.).

### ✅ Example:

```html
<p id="demo">Hello World!</p>

<script>
  document.getElementById("demo").innerHTML = "Hi Anuprash!";
</script>
```

* `document` is part of `window`
* `document.getElementById()` is a DOM method

You can:

* Change text/images
* Add new elements
* Remove elements

So, DOM = everything **inside the page**.

---

## 🌐 3. BOM (Browser Object Model)

**BOM** represents **everything outside the webpage** but still part of the browser — like:

* `navigator`
* `screen`
* `location`
* `history`

### ✅ Example:

```javascript
console.log(window.location.href); // Shows current URL

window.location.href = "https://google.com"; // Redirects to Google

console.log(window.navigator.userAgent); // Shows browser info
```

With BOM, you can:

* Get/Change URL
* Go forward/back in history
* Get browser/system info

---

## 🧠 Summary:

| Concept  | Full Form             | Represents                            | Example                                         |
| -------- | --------------------- | ------------------------------------- | ----------------------------------------------- |
| `window` | –                     | The whole browser window              | `window.alert()`, `window.setTimeout()`         |
| DOM      | Document Object Model | The content/structure of the web page | `document.getElementById()`                     |
| BOM      | Browser Object Model  | Browser features (outside the page)   | `window.location.href`, `window.history.back()` |

---

Let me know if you want a diagram or visual representation as well!
