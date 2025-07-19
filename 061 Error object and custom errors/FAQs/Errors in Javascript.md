Here's a **list of built-in error types in JavaScript** along with **short descriptions** for each:

---

### ✅ Common Built-in JavaScript Error Types:

| **Error Type**       | **Description**                                                                                      |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Error**            | Base error class. All other errors inherit from it. Used for general-purpose errors.                 |
| **SyntaxError**      | Thrown when code cannot be parsed correctly (e.g., missing brackets, incorrect syntax).              |
| **ReferenceError**   | Occurs when a variable that doesn't exist is referenced.                                             |
| **TypeError**        | Thrown when a value is not of the expected type (e.g., calling a non-function).                      |
| **RangeError**       | Occurs when a number is outside an allowed range (e.g., invalid array length).                       |
| **EvalError**        | Related to the `eval()` function. Rarely used in modern JS.                                          |
| **URIError**         | Thrown when `encodeURI()` or `decodeURI()` are used incorrectly.                                     |
| **AggregateError**   | Represents multiple errors wrapped into a single error (used with `Promise.any()`, etc.).            |
| **InternalError** 🔒 | Specific to some JavaScript engines (e.g., too much recursion). Not part of the ECMAScript standard. |

---

### 🧪 Examples of Each:

1. **SyntaxError**

   ```js
   eval('foo bar'); // Unexpected identifier
   ```

2. **ReferenceError**

   ```js
   console.log(x); // x is not defined
   ```

3. **TypeError**

   ```js
   null.f(); // Cannot read properties of null
   ```

4. **RangeError**

   ```js
   new Array(-5); // Invalid array length
   ```

5. **EvalError**

   ```js
   // Obsolete - usually won't occur unless misusing eval in legacy code
   ```

6. **URIError**

   ```js
   decodeURIComponent('%'); // URI malformed
   ```

7. **AggregateError**

   ```js
   Promise.any([
       Promise.reject(new Error("Error A")),
       Promise.reject(new Error("Error B"))
   ]).catch(e => console.log(e instanceof AggregateError)); // true
   ```

---

### 🛠 Custom Errors

You can also create your own errors by extending the base `Error` class:

```js
class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}
```

---

Let me know if you want a downloadable cheat sheet or code examples using these errors.
