let t=document.body.firstElementChild.firstElementChild;
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tFoot)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.tBodies[0].rows)
console.log(t.tBodies[0].rows[2].rowIndex)
console.log(t.tBodies[0].rows[0].cells[2].cellIndex)


t.rows[1].cells[1].style.background="red"
t.rows[1].cells[1].style.color="white"

