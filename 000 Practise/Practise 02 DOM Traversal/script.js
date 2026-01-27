//******************************************************************************
// ***************************  DOM Traversal  ******************************
// ***************************************************************************** */

// Parent Node traversal

const ul= document.querySelector('ul');

// console.log(ul.parentElement);
// console.log(ul.parentNode);

// Grand Parent Traversal

// console.log(ul.parentElement.parentElement);
// console.log(ul.parentNode.parentNode);

// Difference between parentNode() and parentElement() method

// const html=document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode);


// Child traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.firstChild.style.background='red';
// ul.childNodes[1].style.background='red';


// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// ul.firstElementChild.style.background='red';

// Sibling traversal

console.log(ul.nextSibling);
console.log(ul.previousSibling);

console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);













