//******************************************************************************
// ***************************  Event Listener  ******************************
// ***************************************************************************** */


const button2=document.querySelector('.btn-2');

function alertFunction(){
    alert("Hello this is the second box.");
};


button2.addEventListener("click", alertFunction);


const button3=document.querySelector('.btn-3');
button3.addEventListener('mouseover', changeBgColor);
button3.addEventListener('mouseout', removeBgColor);

function changeBgColor(){
    document.querySelector(".box-3").style.background='orange';
}

function removeBgColor(){
    document.querySelector('.box-3').style.background='inherit';
}











