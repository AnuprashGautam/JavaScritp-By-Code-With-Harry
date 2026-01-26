//******************************************************************************
// ***************************  Selecting the element  ******************************
// ***************************************************************************** */

// // document.getElementById

// const favouriteFood= document.getElementById("fav");
// console.log(typeof favouriteFood);
// favouriteFood.style.background="red";


// // document.getElementsByClassName

// const items=document.getElementsByClassName("items");
// console.log(items);


// // document.getElementsByTagName

// const items1=document.getElementsByTagName("li");
// console.log(items1);


// // document.queer

// const item=document.querySelector("li:has(img)");
// console.log(typeof item);
// item.style.background='green';


// // document.querySelectorAll()

// const nodeList=document.querySelectorAll("li");
// console.log(nodeList);




//******************************************************************************
// ********************  Changing the element's style  ************************
// ***************************************************************************** */


// // If there is css class as like 'font-size', then there would be a method in js as like 'fontSize()'
// const listItems=document.querySelectorAll('.items');
// console.log(listItems);

// for(let i=0; i<listItems.length; i++)
// {
//     listItems[i].style.fontSize='2rem';
// }




//******************************************************************************
// ********************  Changing the element's style  ************************
// ***************************************************************************** */

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // Adding element 

// ul.append(li);

// // Manging its inner text using either of the following methods:-
// // 1. innerText         2. innerContent     3. innerHTML


// li.innerText='Pomegranate';

// // Managing its attributes

// const itemAttr=document.querySelector('li').getAttribute('class');

// // li.setAttribute('class',itemAttr);

// // We can even add the class using these methods.

// li.classList.add('items');

// console.log(li.classList.contains('items'));

// li.classList.remove('items');

// // Removing the element

// li.remove();
