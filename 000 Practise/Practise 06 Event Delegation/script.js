//******************************************************************************
// ***************************  Event Delegation  ******************************
// ***************************************************************************** */


// It let us to add the single listener to the parent and this single listener is delegated to the child and future elements.

// document.querySelector("#football").addEventListener('click', function(e){
//     const target =e.target;

//     target.style.background='dimgrey';
// })

// document.querySelector("#music").addEventListener('click', function(e){
//     const target =e.target;

//     target.style.background='dimgrey';
// })

// document.querySelector("#videography").addEventListener('click', function(e){
//     const target =e.target;

//     target.style.background='dimgrey';
// })

// document.querySelector("#reading").addEventListener('click', function(e){
//     const target =e.target;

//     target.style.background='dimgrey';
// })

// document.querySelector("#movies").addEventListener('click', function(e){
//     const target =e.target;

//     target.style.background='dimgrey';
// })


// Without event delegation, the code length increases and we have to update the js explicitly.

document.querySelector("ul").addEventListener('click', function(e){
    const target =e.target;

    if(target.matches('li'))
    {
        target.style.background='dimgrey';
    }
})

// Even support the future childs too.

const ul= document.querySelector('ul');
const li= document.createElement('li');

li.innerText='Gaming';

ul.append(li);



