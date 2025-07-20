localStorage.setItem("name","Anuprash");
localStorage.setItem("age","45");
localStorage.setItem("city","Lucknow");

console.log(localStorage.getItem("name"));
console.log(localStorage.key(0));
console.log(localStorage.length);

localStorage.height=171;
console.log(localStorage.height)

delete localStorage.height;
localStorage.removeItem("city");

localStorage.clear();

