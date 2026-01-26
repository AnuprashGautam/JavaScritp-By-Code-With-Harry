## 1️⃣ `getElementsByTagName()`

### 📌 What it is

* **Old-school DOM method**
* Accepts **only a tag name**

```js
document.getElementsByTagName("p");
```

### 📌 What it returns

* **HTMLCollection** (not an array)

### 📌 Key behavior

* ✅ **LIVE collection**

  * If the DOM changes, this list updates automatically

```js
const ps = document.getElementsByTagName("p");
document.body.appendChild(document.createElement("p"));
console.log(ps.length); // increased automatically
```

### 📌 Limitations

* ❌ Cannot use CSS selectors
* ❌ No classes, ids, attributes
* ❌ Cannot chain selectors

---

## 2️⃣ `querySelectorAll()`

### 📌 What it is

* **Modern DOM API**
* Accepts **ANY valid CSS selector**

```js
document.querySelectorAll("p");
document.querySelectorAll(".card p");
document.querySelectorAll("#main > p");
```

### 📌 What it returns

* **NodeList**

### 📌 Key behavior

* ❌ **STATIC collection**

  * DOM changes do **not** affect the list

```js
const ps = document.querySelectorAll("p");
document.body.appendChild(document.createElement("p"));
console.log(ps.length); // unchanged
```

### 📌 Advantages

* ✅ Powerful CSS selector support
* ✅ Cleaner & more readable
* ✅ Industry standard

---

## 3️⃣ Side-by-side comparison (🔥 important)

| Feature       | getElementsByTagName | querySelectorAll |
| ------------- | -------------------- | ---------------- |
| Selector type | Only tag name        | Any CSS selector |
| Return type   | HTMLCollection       | NodeList         |
| Live / Static | **LIVE**             | **STATIC**       |
| Modern usage  | ❌ Rare               | ✅ Preferred      |
| CSS power     | ❌ No                 | ✅ Yes            |
| Performance   | Slightly faster      | Slightly slower  |

---

## 4️⃣ But they *can* look the same 👀

```js
document.getElementsByTagName("div");
document.querySelectorAll("div");
```

✔️ Same argument
❌ **Different behavior under the hood**

* One updates automatically
* One doesn’t
* One is limited
* One is flexible

---

## 5️⃣ Real-world industry practice 🏭

> 💡 **Rule of thumb**

* Use **`querySelectorAll()`** in **95% cases**
* Use `getElementsByTagName()` **only** when:

  * You *need* a live collection
  * You want raw speed (rare)

---

## 6️⃣ Interview one-liner (⭐ remember this)

> **`getElementsByTagName()` returns a LIVE HTMLCollection and works only with tag names, whereas `querySelectorAll()` returns a STATIC NodeList and supports all CSS selectors.**
