let a=document.getElementsByTagName('div')[0]

// 1. Using the innerHTML  ----------------------------

// a.innerHTML=a.innerHTML+"<h1>This is the extra line of code added with the help of innerHTML.</h1>"

// 2. append() method      -----------------------------

let b=document.createElement('p')
b.innerHTML="<b>This is element is created with the help of JS.</b>"

// a.append(b)             

// 3. prepend() method  ---------------------------------

// a.prepend(b)

// 4. before() method  -------------------------------

// a.before(b)

// 5. after() method  ---------------------------------

// a.after(b)

// 6. replace() method ------------------------------

a.replaceWith(b)