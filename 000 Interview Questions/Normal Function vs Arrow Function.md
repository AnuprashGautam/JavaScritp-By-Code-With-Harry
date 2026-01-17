# What is a Function in JavaScript?

A function is simply a **machine** that:

> Takes input → processes → gives output.

JavaScript gives us **two main ways** to write this machine:

1. **Normal Function**
2. **Arrow Function**

They look similar, but they behave very differently inside.

---

# 1. Normal Function

### Syntax

```js
function add(a, b) {
  return a + b;
}
```

Or

```js
const add = function(a, b) {
  return a + b;
};
```

### Important Nature

A normal function:

✔ Has its **own `this`**
✔ Has its **own `arguments`**
✔ Can be used with `new`
✔ Is hoisted
✔ Acts like a **full independent object**

Think:

> Normal function = Adult person with own identity.

---

# 2. Arrow Function

### Syntax

```js
const add = (a, b) => {
  return a + b;
};
```

Short:

```js
const add = (a,b) => a+b;
```

### Important Nature

Arrow function:

❌ Has NO own `this`
❌ Has NO own `arguments`
❌ Cannot be used with `new`
❌ Not hoisted
✔ Just borrows behavior from parent

Think:

> Arrow function = Child who copies parent behavior.

---

# MOST IMPORTANT CONCEPT → `this`

This is where most confusion happens.

## What is `this`?

`this` means:

> "Who is calling me?"

---

## Normal Function `this`

```js
const obj = {
  name: "Anuprash",
  show: function() {
    console.log(this.name);
  }
};
obj.show();
```

`this = obj`
Output: `Anuprash`

Because obj called the function.

---

## Arrow Function `this`

```js
const obj = {
  name: "Anuprash",
  show: () => {
    console.log(this.name);
  }
};
obj.show();
```

Arrow function says:

> "I will NOT check who called me. I will use my parent's this."

Parent here = global scope → no name → `undefined`

---

# Why Arrow Exists Then?

Because arrow is PERFECT for **callbacks**.

---

## Example

```js
const obj = {
  name: "Anuprash",
  show() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};

obj.show(); // undefined
```

Normal function inside `setTimeout` lost obj.

---

### Arrow fixes it:

```js
const obj = {
  name: "Anuprash",
  show() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

obj.show(); // Anuprash
```

Arrow borrows `this` from `show()`.

---

# arguments object

### Normal:

```js
function test() {
  console.log(arguments);
}
test(1,2,3);
```

Works.

### Arrow:

```js
const test = () => {
  console.log(arguments);
};
```

Error — arrow has no arguments.

---

# Constructor behavior

```js
function Person(name){
  this.name=name;
}
const p = new Person("A");
```

Works.

```js
const Person = (name)=>{
  this.name=name;
}
new Person("A");
```

Error.

---

# Hoisting

```js
sayHi();
function sayHi(){}
```

Works.

```js
sayHi();
const sayHi=()=>{};
```

Error.

---

# Simple Memory Table

| Feature   | Normal                | Arrow     |
| --------- | --------------------- | --------- |
| this      | Own                   | Parent    |
| arguments | Yes                   | No        |
| new       | Yes                   | No        |
| hoisting  | Yes                   | No        |
| use case  | Objects, constructors | callbacks |

---

# How to Decide Quickly

Ask one question:

> Does this function need its own `this`?

If YES → normal function
If NO → arrow function

---

# One final golden example

```js
const team = {
  name:"Dev",
  members:["A","B"],
  print(){
    this.members.forEach(function(m){
      console.log(this.name, m);
    });
  }
};
team.print(); // undefined A , undefined B
```

Fix with arrow:

```js
const team = {
  name:"Dev",
  members:["A","B"],
  print(){
    this.members.forEach(m=>{
      console.log(this.name, m);
    });
  }
};
```

---

# Interview Line

> Arrow functions inherit `this` from lexical scope while normal functions determine `this` at call time.

