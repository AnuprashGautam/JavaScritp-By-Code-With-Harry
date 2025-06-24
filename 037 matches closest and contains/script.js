let id1=document.getElementById("id1")
let id2=document.getElementById("id2")
let sp1=document.getElementById("sp1")
let sp2=document.getElementById("sp2")


// matches
console.log(id2.matches(".class"))
console.log(id2.matches(".box"))

// closest
console.log(sp2.closest("#sp2"))
console.log(sp2.closest("#id2"))

// contains
console.log(id1.contains(sp1))
console.log(id1.contains(sp2))
console.log(sp1.contains(id1))

