let e=document.getElementById('input');
let l=document.getElementById('log-box');


function logMessage(message) {
    let log=document.createElement('div')
    log.textContent=message
    log.setAttribute("class","log")
    l.appendChild(log)
}

e.addEventListener("focus",function () {
    logMessage("The input box got focused.")
})

e.addEventListener("blurr",function () {
    logMessage("The input box got blurred.")
})

e.addEventListener("keydown",function (e){
    logMessage(`The key was pressed: ${e.key}`)
})