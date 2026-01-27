//******************************************************************************
// ***************************  Hiding and showing the content  ******************************
// ***************************************************************************** */


const hiddenContent=document.querySelector('.hidden-content');

const revealButton=document.querySelector('.reveal-btn');

function hideShowContent(){
    if(hiddenContent.classList.contains('reveal-content'))
    {
        hiddenContent.classList.remove('reveal-content');
    }else{
        hiddenContent.classList.add('reveal-content');
    }
}

revealButton.addEventListener('click', hideShowContent);











