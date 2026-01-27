//******************************************************************************
// ***************************  Event Propgation  ******************************
// ***************************************************************************** */

// It has 3 phases: 1. Event Capturing    2. Target      3. Event Bubbling

// window.addEventListener('click',function(){
//     console.log("Window");
// }, true);

// document.addEventListener('click', function(){
//     console.log("Document");
// }, true);

// document.querySelector(".box-2").addEventListener('click',function(){
//     console.log("Box-2");
// }, true);

// document.querySelector(".box-1").addEventListener('click',function(){
//     console.log("Box-1");
// }, {once: true});

// document.querySelector('button').addEventListener('click',function(e){
//     console.log(e.target.innerText='Clicked!!!');
// }, true);

// true means we want to execute the code at the time of event capturing. false means we want it to execute at the time of event bubbling.

window.addEventListener('click',function(){
    console.log("Window");
}, true);

document.addEventListener('click', function(){
    console.log("Document");
}, true);

document.querySelector(".box-2").addEventListener('click',function(e){
    // e.stopPropagation();
    console.log("Box-2");
}, true);

document.querySelector(".box-1").addEventListener('click',function(){
    console.log("Box-1");
}, true);

document.querySelector('a').addEventListener('click',function(e){
    e.preventDefault();
    console.log(e.target.innerText='Clicked!!!');
}, true);


// e.stopPropagation() to stop the propagation
// e.preventDefault() it is a anchor tag, used to link other webpage. So, to resist it to go to other page, we used this method.








