let a = document.getElementsByClassName("container")[0]

a.insertAdjacentHTML("beforebegin",`<div style="color: red;">I am baby text.<div>`)
a.insertAdjacentHTML("afterbegin",`<div style="color: red;">I am baby text.<div>`)
a.insertAdjacentHTML("beforeend",`<div style="color: red;">I am baby text.<div>`)
a.insertAdjacentHTML("afterend",`<div style="color: red;">I am baby text.<div>`)

// a.remove()