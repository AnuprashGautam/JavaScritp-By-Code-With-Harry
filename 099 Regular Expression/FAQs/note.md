
## ✅ What is a Regular Expression?

A **regular expression (RegEx)** is a pattern used to match **character combinations in strings**.

Think of it as a smart search that can:

* Find if a word exists
* Replace parts of a string
* Validate data (like email, phone number)
* Extract specific parts from a string

---

## ✅ Syntax in JavaScript

### Two ways to create a RegEx:

```js
// 1. Using slash syntax (common)
let regex = /pattern/;

// 2. Using RegExp constructor
let regex = new RegExp("pattern");
```

You can also add **flags** like `g`, `i`, `m`, etc.

---

## ✅ Common Flags

| Flag | Meaning                    |
| ---- | -------------------------- |
| `g`  | Global match (all matches) |
| `i`  | Case-insensitive           |
| `m`  | Multiline match            |

---

## ✅ Some Useful Methods

| Method      | Description                     |
| ----------- | ------------------------------- |
| `test(str)` | Returns `true` if match found   |
| `exec(str)` | Returns first match as object   |
| `match()`   | Returns an array of all matches |
| `replace()` | Replaces matched substrings     |
| `search()`  | Returns index of first match    |
| `split()`   | Splits string based on pattern  |

---

## ✅ Basic Patterns (Character Matches)

| Pattern | Meaning                                | Example match                      |
| ------- | -------------------------------------- | ---------------------------------- |
| `.`     | Any single character except newline    | `c.t` matches `cat`, `cut`         |
| `\d`    | Any digit (0-9)                        | `\d\d` matches `42`                |
| `\w`    | Any word character (a-z, A-Z, 0-9, \_) | `\w+` matches `hello`              |
| `\s`    | Any whitespace (space, tab, newline)   |                                    |
| `\b`    | Word boundary                          | `\bcat\b` matches only `cat` alone |
| `\D`    | Not a digit                            |                                    |
| `\W`    | Not a word character                   |                                    |

---

## ✅ Quantifiers (Repetition)

| Symbol  | Meaning               | Example                               |
| ------- | --------------------- | ------------------------------------- |
| `*`     | 0 or more             | `lo*l` matches `ll`, `lol`, `loool`   |
| `+`     | 1 or more             | `lo+l` matches `lol`, `loool`         |
| `?`     | 0 or 1 (optional)     | `colou?r` matches `color` or `colour` |
| `{n}`   | Exactly n times       | `\d{3}` matches `123`                 |
| `{n,}`  | n or more times       | `\d{2,}` matches `42`, `123`, `4567`  |
| `{n,m}` | Between n and m times | `\d{2,4}` matches 2 to 4 digits       |

---

## ✅ Character Sets

| Pattern    | Meaning                                 |
| ---------- | --------------------------------------- |
| `[abc]`    | Match **any one** of `a`, `b`, `c`      |
| `[^abc]`   | Match anything **except** `a`, `b`, `c` |
| `[a-z]`    | Match any lowercase letter              |
| `[A-Z0-9]` | Match any capital letter or digit       |

---

## ✅ Anchors (Position Based)

| Pattern | Meaning                    |
| ------- | -------------------------- |
| `^`     | Start of the string        |
| `$`     | End of the string          |
| `^a`    | String must start with `a` |
| `t$`    | String must end with `t`   |

---

## ✅ Grouping and Alternation

| Pattern | Meaning                      |                               |
| ------- | ---------------------------- | ----------------------------- |
| `(abc)` | Grouping (treat as one unit) |                               |
| \`a     | b\`                          | Either `a` or `b`             |
| \`(cat  | dog)\`                       | Matches either `cat` or `dog` |

---

## ✅ Examples

### 1. Validate if a string is a 10-digit phone number

```js
let phoneRegex = /^\d{10}$/;
console.log(phoneRegex.test("9876543210")); // true
```

### 2. Find all words starting with "a"

```js
let str = "apple ant ball anchor";
let regex = /\ba\w*/g;
console.log(str.match(regex)); // ['apple', 'ant', 'anchor']
```

### 3. Replace all digits with `*`

```js
let str = "My number is 9876543210";
let result = str.replace(/\d/g, "*");
console.log(result); // My number is **********
```

---

## ✅ Real-Life Use Cases

* Form validation (email, phone, password)
* Search and replace operations
* Data extraction from logs, URLs, etc.
* Auto-suggestions based on input

---

## ✅ Practice Tips

* Use [https://regex101.com/](https://regex101.com/) to test patterns with live explanation.
* Break down patterns into smaller parts while learning.