## 🔹 Arrays

```js
let arr = [10, 20, 30];

console.log(arr[-1]); // undefined ❌
```

JS treats `-1` as a **property name**, not an index.

---

## 🔹 But `slice()` supports negative values ✅

```js
arr.slice(-1); // [30]
arr.slice(-2); // [20, 30]
```

👉 Here, negative means "count from the end".

---

## 🔹 Strings

```js
let s = "Hello";
console.log(s[-1]); // undefined ❌
console.log(s.slice(-1)); // "o" ✅
```

---

## 🔹 Modern JS: `at()` method (REAL negative index support)

```js
arr.at(-1); // 30
arr.at(-2); // 20
```

```js
"Hello".at(-1); // "o"
```

👉 This is the **only true negative index feature** in JS.

---

## 🔹 Summary

| Feature   | Supports negative index |
| --------- | ----------------------- |
| arr[-1]   | ❌ No                    |
| slice(-1) | ✅ Yes                   |
| at(-1)    | ✅ Yes                   |

---

## 🔹 Interview Answer

> JavaScript does not support negative indexing using bracket notation, but methods like `slice()` and `at()` allow accessing elements from the end using negative values.